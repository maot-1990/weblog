package com.personalblog.service;

import com.personalblog.bo.CategoryGroupBO;
import com.personalblog.dataobject.ArticleDO;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.ArticleRequest;
import com.personalblog.vo.UserVO;

import java.util.List;

/**
 * Created by tao.mao on 2020/8/17.
 */
public interface ArticleService {

    Page<ArticleDO> getArticleMore(ArticleRequest request);

    ArticleDO getById(Integer id);

    ArticleDO getByIdWithOutContent(Integer id);

    ArticleDO getByIdWithOutStatus(Integer id);

    List<CategoryGroupBO> getCategoryByGroup(String type);

    List<ArticleDO> getByIntroType(String type);

    List<ArticleDO> getByCategory(String category, Integer articleId, Integer size);

    int saveOrUpdateArticle(ArticleDO article, UserVO user);

    ArticleDO getByImgPath(String imgPath);

    int getArticleCountByUser(String nickName);
}
