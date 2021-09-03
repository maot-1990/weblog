package com.personalblog.controller;

import com.alibaba.fastjson.JSONObject;
import com.personalblog.context.BlogContext;
import com.personalblog.dataobject.ImgStoreDO;
import com.personalblog.exception.BaseException;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.ImgService;
import com.personalblog.vo.UserVO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import static com.personalblog.context.Constant.USER;

/**
 * Created by tao.mao on 2020/8/27.
 */
@Controller
public class ImgController {

    @Resource
    private ImgService imgService;
    @Value("${personal.showImgUrl}")
    private String showImgUrl;

    @GetMapping(value = "/show-img/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void showImg(@PathVariable("id") String id, HttpServletRequest request, HttpServletResponse response) throws Exception {
        imgService.showImg(id, request, response);
    }

    @ResponseBody
    @RequestMapping(value = "/upload-img", method = RequestMethod.POST)
    public JSONObject hello(
            HttpServletRequest request,
            @RequestParam(value = "editormd-image-file", required = false) MultipartFile file) throws Exception {

        JSONObject jsonObject = new JSONObject();
        try {

            HttpSession session = BlogContext.session.get(request.getSession().getId());
            UserVO user = (UserVO) session.getAttribute(USER);
            if (user == null) {
                throw new BaseException("请先登陆", ResponseCode.NOT_FOUND);

            }

            if (file == null && file.getBytes().length <= 0) {
                throw new BaseException("请选择上传文件", ResponseCode.NOT_FOUND);
            }
            ImgStoreDO imgStore = imgService.upload(file, user);

            jsonObject.put("success", 1);
            jsonObject.put("message", "上传成功");
            jsonObject.put("url", imgStore.getUrl());
        } catch (Exception e) {
            jsonObject.put("success", 0);
        }
        return jsonObject;
    }

    @GetMapping("/get-verify-code")
    public void verifyCode(HttpServletRequest request, HttpServletResponse response) throws Exception {
        imgService.getVerifyCode(request, response);
    }
}
