package com.personalblog.controller;

import com.personalblog.bo.ArticleLeaveBO;
import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.ArticleLeaveDO;
import com.personalblog.exception.BaseException;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.ArticleLeaveRequest;
import com.personalblog.request.ArticleRequest;
import com.personalblog.response.BaseResult;
import com.personalblog.service.ArticleLeaveService;
import com.personalblog.vo.ArticleLeaveVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.net.URLDecoder;

/**
 * Created by tao.mao on 2020/8/26.
 */
@Controller
public class ArticleLeaveController {

    @Resource
    private ArticleLeaveService articleLeaveService;

    @GetMapping(value = "/article-leave")
    @ResponseBody
    public BaseResult<ArticleLeaveVO> leaveArticle(ArticleLeaveDO articleLeave) throws Exception {
        articleLeave.setMsg(URLDecoder.decode(articleLeave.getMsg(), "UTF-8"));

        ArticleLeaveVO result;
        try {
            result = articleLeaveService.leaveArticle(articleLeave);
        } catch (BaseException e) {
            return BaseResult.fail(e.getErrorCode(), e.getMessage());
        }
        return BaseResult.success(result);

    }

    @GetMapping("/article-leave/has-more")
    @ResponseBody
    public Page<ArticleLeaveBO> getArticleHasMore(ArticleLeaveRequest request) {
        Page<ArticleLeaveBO> page = articleLeaveService.getArticleLeaveHasMore(request);
        return page;
    }


}
