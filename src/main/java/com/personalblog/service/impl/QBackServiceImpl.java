package com.personalblog.service.impl;

import com.personalblog.context.BlogContext;
import com.personalblog.dao.UserMapper;
import com.personalblog.dataobject.ImgStoreDO;
import com.personalblog.dataobject.UserDO;
import com.personalblog.enums.UserTypeEnum;
import com.personalblog.exception.BaseException;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.ImgService;
import com.personalblog.service.QBackService;
import com.personalblog.service.UserService;
import com.personalblog.util.BeanUtils;
import com.personalblog.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import sun.rmi.runtime.Log;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;

import static com.personalblog.context.Constant.USER;

/**
 * Created by tao.mao on 2020/8/27.
 */
@Service
@Slf4j
public class QBackServiceImpl implements QBackService {

    @Resource
    private ImgService imgService;
    @Resource
    private UserService userService;
    @Resource
    private UserMapper userMapper;

    @Override
    public void qbackLogin(UserDO user) {

        log.info("收到QQ快速注册用户信息：" + user.toString());
        // 先判定用户存不存在
        UserVO userOld = userService.getUserById(user.getId());
        if (userOld == null) {
            try {
                ImgStoreDO imgStore = new ImgStoreDO();
                if (StringUtils.isNotBlank(user.getHeadImg())) {
                    URL url = new URL(user.getHeadImg());
                    URLConnection con = url.openConnection();
                    con.setConnectTimeout(5000);
                    InputStream is = con.getInputStream();

                    ByteArrayOutputStream bos = new ByteArrayOutputStream();
                    byte[] buffer = new byte[is.available()];
                    int index = 0;
                    while ((index = is.read(buffer)) != -1) {
                        bos.write(buffer, 0, index);
                    }
                    is.close();
                    bos.flush();

                    log.info("byte 大小：" + bos.toByteArray().length);
                    imgStore = imgService.uploadByte(bos.toByteArray(), "jpeg", BeanUtils.copyProperties(user, UserVO.class));
                }

                user.setArticleTotal(0);
                user.setType(UserTypeEnum.user.name());
                user.setLevel(1);
                user.setStatus(1);
                user.setHeadImg(imgStore.getId());
                userMapper.insertSelective(user);

            } catch (Exception e) {
                log.error("上传文件异常：" + e.getMessage());
                throw new BaseException(e.getMessage(), ResponseCode.BIZ_ERROR);
            }
        }

        // 设置用户登录状态
        ServletRequestAttributes servletRequest = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpSession session = servletRequest.getRequest().getSession();
        session.setAttribute(USER, BeanUtils.copyProperties(user, UserVO.class));
        BlogContext.session.put(session.getId(), session);
    }
}
