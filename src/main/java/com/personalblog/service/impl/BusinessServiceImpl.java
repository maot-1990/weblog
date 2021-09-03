package com.personalblog.service.impl;

import com.personalblog.dao.manual.ArticleManualMapper;
import com.personalblog.service.BusinessService;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * Created by tao.mao on 2020/8/21.
 */
@Component
public class BusinessServiceImpl implements BusinessService {

    @Resource
    private ArticleManualMapper articleManualMapper;

    @Override
    public void likeCountInc(Integer articleId) {
        articleManualMapper.updateLikeCountInc(articleId);

    }

    @Override
    public void readCountInc(Integer articleId) {
        articleManualMapper.updateReadCountInc(articleId);

    }


}
