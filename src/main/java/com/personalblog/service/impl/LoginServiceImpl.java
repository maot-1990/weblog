package com.personalblog.service.impl;

import com.google.common.collect.Lists;
import com.personalblog.context.BlogContext;
import com.personalblog.dao.UserMapper;
import com.personalblog.dataobject.ImgStoreDO;
import com.personalblog.dataobject.UserDO;
import com.personalblog.dataobject.UserDOExample;
import com.personalblog.enums.StatusEnum;
import com.personalblog.enums.UserTypeEnum;
import com.personalblog.exception.BaseException;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.ImgService;
import com.personalblog.service.LoginService;
import com.personalblog.util.BeanUtils;
import com.personalblog.vo.UserVO;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import static com.personalblog.context.Constant.USER;

/**
 * Created by tao.mao on 2020/8/27.
 */
@Service
public class LoginServiceImpl implements LoginService {

    @Resource
    private UserMapper userMapper;

    @Resource
    private ImgService imgService;

    @Override
    public void login(String userName, String passWord) {
        UserDOExample example = new UserDOExample();
        example.createCriteria().andUserNameEqualTo(userName).andPassWordEqualTo(passWord);
        UserDO user = userMapper.selectOneByExample(example);
        UserVO userVO = BeanUtils.copyProperties(user, UserVO.class);
        if (userVO == null) {
            throw new BaseException("验证失败", ResponseCode.NOT_FOUND);
        }
        ServletRequestAttributes servletRequest = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpSession session = servletRequest.getRequest().getSession();
        session.setAttribute(USER, userVO);
        BlogContext.session.put(session.getId(), session);
    }

    @Override
    public void loginOut(String userName) {

    }

    @Override
    public void isLogin(String userName) {

    }

    @Override
    public void register(UserDO user, MultipartFile file) {

        preRegisterCheck(user, file);
        ImgStoreDO imgStore = imgService.upload(file, null);
        user.setHeadImg(imgStore.getId());
        user.setLevel(1);
        if (UserTypeEnum.author.name().equals(user.getType())) {
            user.setStatus(StatusEnum.ZERO.getStatus());
        } else {
            user.setStatus(StatusEnum.ONE.getStatus());
        }
        userMapper.insertSelective(user);
    }

    private void preRegisterCheck(UserDO user, MultipartFile file) {
        if (file == null || file.getSize() <=0) {
            throw new BaseException("头像不能为空", ResponseCode.PARAM_ERROR);
        }
        if (StringUtils.isEmpty(user.getUserName())) {
            throw new BaseException("用户名不能为空", ResponseCode.PARAM_ERROR);
        }
        if (StringUtils.isEmpty(user.getPassWord())) {
            throw new BaseException("密码不能为空", ResponseCode.PARAM_ERROR);
        }
        if (StringUtils.isEmpty(user.getNickName())) {
            throw new BaseException("昵称不能为空", ResponseCode.PARAM_ERROR);
        }
        if (!UserTypeEnum.getAuthorUsers().contains(user.getType())) {
            throw new BaseException("用户类型不正确", ResponseCode.PARAM_ERROR);
        }
    }

}
