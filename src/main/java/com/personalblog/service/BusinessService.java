package com.personalblog.service;

/**
 * Created by tao.mao on 2020/8/21.
 */
public interface BusinessService {

    void likeCountInc(Integer articleId);

    void readCountInc(Integer articleId);
}
