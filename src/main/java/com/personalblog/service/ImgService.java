package com.personalblog.service;

import com.personalblog.dataobject.ImgStoreDO;
import com.personalblog.vo.UserVO;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by tao.mao on 2020/8/27.
 */
public interface ImgService {

    void showImg(String id, HttpServletRequest request, HttpServletResponse response) throws Exception;

    ImgStoreDO upload(MultipartFile file, UserVO user);

    ImgStoreDO uploadByte(byte[] bytes, String type, UserVO user);

    void getVerifyCode(HttpServletRequest request, HttpServletResponse response) throws Exception;

    void verifyCode(HttpServletRequest request, String code);

}
