package com.personalblog.service;

import com.personalblog.dataobject.UserDO;
import com.personalblog.vo.UserVO;

import java.util.List;

/**
 * Created by tao.mao on 2020/8/27.
 */
public interface UserService {

    List<UserVO> getAuthors(Integer size);

    List<UserVO> getAllUser();

    void updateUser(UserDO user);

    UserVO getUserById(String userId);
}
