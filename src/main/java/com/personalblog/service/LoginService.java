package com.personalblog.service;

import com.personalblog.dataobject.UserDO;
import org.springframework.web.multipart.MultipartFile;

/**
 * Created by tao.mao on 2020/8/27.
 */
public interface LoginService {

    void login(String userName, String passWord);

    void loginOut(String userName);

    void isLogin(String userName);

    void register(UserDO user, MultipartFile file);
}
