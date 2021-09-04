package com.personalblog.service;

import com.personalblog.bo.ArticleLeaveBO;
import com.personalblog.dataobject.ArticleLeaveDO;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.ArticleLeaveRequest;
import com.personalblog.vo.ArticleLeaveVO;

import java.util.List;

/**
 * Created by tao.mao on 2020/8/17.
 */
public interface ArticleLeaveService {

    ArticleLeaveVO leaveArticle(ArticleLeaveDO articleLeave);

    Page<ArticleLeaveBO> getArticleLeaveHasMore(ArticleLeaveRequest request);

    List<ArticleLeaveDO> getRecent(Integer size);
}
