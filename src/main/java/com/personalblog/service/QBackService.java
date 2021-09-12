package com.personalblog.service;

import com.personalblog.dataobject.UserDO;
import org.springframework.stereotype.Service;

/**
 * Created by tao.mao on 2020/8/27.
 */
@Service
public interface QBackService {

    void qbackLogin(UserDO user);

}
