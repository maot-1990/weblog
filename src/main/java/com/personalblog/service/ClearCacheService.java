package com.personalblog.service;

import com.personalblog.request.ArticleRequest;

/**
 * Created by tao.mao on 2020/8/21.
 */
public interface ClearCacheService {

    void getArticleMore(ArticleRequest request);

    void getById(Integer id);

    void getCategoryByGroup();

    void getByIntroType(String type);

    void getByCategory(String category);
}
