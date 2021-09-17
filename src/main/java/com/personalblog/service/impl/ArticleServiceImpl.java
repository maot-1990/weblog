package com.personalblog.service.impl;

import com.personalblog.bo.CategoryGroupBO;
import com.personalblog.context.BlogContext;
import com.personalblog.dao.ArticleMapper;
import com.personalblog.dao.manual.ArticleManualMapper;
import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.ArticleDOExample;
import com.personalblog.dataobject.UserDO;
import com.personalblog.enums.IntroTypeEnum;
import com.personalblog.enums.StatusEnum;
import com.personalblog.exception.BaseException;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.ArticleRequest;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.ArticleService;
import com.personalblog.vo.UserVO;
import org.apache.commons.lang.StringUtils;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Service
public class ArticleServiceImpl implements ArticleService {

    @Resource
    private ArticleMapper articleMapper;

    @Resource
    private ArticleManualMapper articleManualMapper;

    @Cacheable(cacheNames = {"blog"}, key = "'getArticleMore' + #request.toString()", sync = true)
    @Override
    public Page<ArticleDO> getArticleMore(ArticleRequest request) {
        Integer start = (request.getCurrentIndex() - 1) * request.getPageSize();
        ArticleDOExample example = new ArticleDOExample();
        ArticleDOExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo(StatusEnum.ONE.getStatus());
        if (StringUtils.isNotBlank(request.getCategory())) {
            criteria.andCategoryEqualTo(request.getCategory());
        }
        if (StringUtils.isNotBlank(request.getType())) {
            criteria.andTypeEqualTo(request.getType());
        }
        if (StringUtils.isNotBlank(request.getSearchKey())) {
            criteria.andTitleLike("%" + request.getSearchKey() + "%");
        }
        example.setOrderByClause(" created_at desc limit " + start + "," + request.getPageSize());
        List<ArticleDO> list = articleMapper.selectByExample(example);
        Page<ArticleDO> page = new Page<>();
        page.setItems(list);
        page.setCurrentPage(request.getCurrentIndex());
        page.setPageSize(request.getPageSize());
        return page;
    }

    // @Cacheable(cacheNames = {"blog"}, key = "'getById' + #id", sync = true)
    @Override
    public ArticleDO getById(Integer id) {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andIdEqualTo(id).andStatusEqualTo(StatusEnum.ONE.getStatus());
        return articleMapper.selectOneByExample(example);
    }

    @Override
    public ArticleDO getByIdWithOutContent(Integer id) {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andIdEqualTo(id).andStatusEqualTo(StatusEnum.ONE.getStatus());
        return articleMapper.selectOneWithOutContentByExample(example);
    }

    @Override
    public ArticleDO getByIdWithOutStatus(Integer id) {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andIdEqualTo(id);
        return articleMapper.selectOneByExample(example);
    }

    @Cacheable(cacheNames = {"blog"}, key = "'getCategoryByGroup' + #type", sync = true)
    @Override
    public List<CategoryGroupBO> getCategoryByGroup(String type) {
        return articleManualMapper.getCategoryByGroup(type);
    }

    @Cacheable(cacheNames = {"blog"}, key = "'getByIntroType' + #type", sync = true)
    @Override
    public List<ArticleDO> getByIntroType(String type) {
        ArticleDOExample example = new ArticleDOExample();
        ArticleDOExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo(StatusEnum.ONE.getStatus());
        if (IntroTypeEnum.RECENT.toString().equalsIgnoreCase(type)) {
            example.setOrderByClause(" created_at desc limit 5");
        } else if (IntroTypeEnum.POPULAR.toString().equalsIgnoreCase(type)) {
            example.setOrderByClause(" read_count desc limit 5");
        }
        return articleMapper.selectByExample(example);
    }

    @Cacheable(cacheNames = {"blog"}, key = "'getByCategory' + #category", sync = true)
    @Override
    public List<ArticleDO> getByCategory(String category, Integer articleId, Integer size) {
        ArticleDOExample example = new ArticleDOExample();
        ArticleDOExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo(StatusEnum.ONE.getStatus()).andCategoryEqualTo(category);
        if (articleId != null) {
            criteria.andIdNotEqualTo(articleId);
        }
        example.setOrderByClause(" created_at desc limit " + size);
        return articleMapper.selectByExample(example);
    }

    @Override
    public int saveOrUpdateArticle(ArticleDO article, UserVO user) {
        if (article.getId() != null) {
            ArticleDOExample example = new ArticleDOExample();
            example.createCriteria().andIdEqualTo(article.getId());
            return articleMapper.updateByExampleSelective(article, example);
        }
        article.setUserId(user.getId());
        article.setAuthor(user.getNickName());
        return articleMapper.insertSelective(article);
    }

    @Override
    public ArticleDO getByImgPath(String imgPath) {
        ArticleDOExample example = new ArticleDOExample();
        ArticleDOExample.Criteria criteria = example.createCriteria();
        criteria.andImgPathEqualTo(imgPath);

        return articleMapper.selectOneByExample(example);
    }

    @Override
    public int getArticleCountByUser(String nickName) {
        ArticleDOExample example = new ArticleDOExample();
        example.createCriteria().andAuthorEqualTo(nickName)
                .andStatusEqualTo(StatusEnum.ONE.getStatus());
        return (int) articleMapper.countByExample(example);
    }


}
