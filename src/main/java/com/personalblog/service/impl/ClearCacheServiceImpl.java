package com.personalblog.service.impl;

import com.personalblog.request.ArticleRequest;
import com.personalblog.service.ClearCacheService;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

/**
 * Created by tao.mao on 2020/8/21.
 */
@Service
public class ClearCacheServiceImpl implements ClearCacheService {

    @CacheEvict(cacheNames = {"blog"}, key = "'getArticleMore' + #request.toString()")
    @Override
    public void getArticleMore(ArticleRequest request) {

    }

    @CacheEvict(cacheNames = {"blog"}, key = "'getById' + #id")
    @Override
    public void getById(Integer id) {

    }

    @CacheEvict(cacheNames = {"blog"}, key = "'getCategoryByGroup'")
    @Override
    public void getCategoryByGroup() {
    }

    @CacheEvict(cacheNames = {"blog"}, key = "'getByIntroType' + #type")
    @Override
    public void getByIntroType(String type) {

    }

    @CacheEvict(cacheNames = {"blog"}, key = "'getByCategory' + #category")
    @Override
    public void getByCategory(String category) {

    }

}
