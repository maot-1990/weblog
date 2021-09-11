package com.personalblog.service.impl;

import com.personalblog.bo.ArticleLeaveBO;
import com.personalblog.context.BlogContext;
import com.personalblog.dao.ArticleLeaveMapper;
import com.personalblog.dao.ArticleMapper;
import com.personalblog.dao.manual.ArticleManualMapper;
import com.personalblog.dataobject.ArticleLeaveDO;
import com.personalblog.dataobject.ArticleLeaveDOExample;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.ArticleLeaveRequest;
import com.personalblog.service.ArticleLeaveService;
import com.personalblog.util.BeanUtils;
import com.personalblog.util.UUId;
import com.personalblog.vo.ArticleLeaveVO;
import com.personalblog.vo.UserVO;
import org.apache.commons.lang.StringUtils;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Service
public class ArticleLeaveServiceImpl implements ArticleLeaveService {

    @Resource
    private ArticleLeaveMapper articleLeaveMapper;

    @Resource
    private ArticleManualMapper articleManualMapper;

    @Override
    public Page<ArticleLeaveBO> getArticleLeaveHasMore(ArticleLeaveRequest request) {

        Integer start = (request.getCurrentIndex() - 1) * request.getPageSize();
        List<ArticleLeaveBO> leaves = new ArrayList<>();
        ArticleLeaveDOExample example = new ArticleLeaveDOExample();
        example.createCriteria().andArticleIdEqualTo(request.getArticleId()).andStatusEqualTo(1).andLevelEqualTo(1);
        Long count = articleLeaveMapper.countByExample(example);
        example.setOrderByClause(" created_at desc limit " + start + "," + request.getPageSize());
        List<ArticleLeaveDO> level1 = articleLeaveMapper.selectByExample(example);

        if (!CollectionUtils.isEmpty(level1)) {
            example.clear();
            example.createCriteria().andArticleIdEqualTo(request.getArticleId())
                    .andStatusEqualTo(1).andLevelEqualTo(2)
                    .andReplyIdIn(level1.stream().map(leave -> leave.getId()).collect(Collectors.toList()));
            example.setOrderByClause(" created_at");
            List<ArticleLeaveDO> level2 = articleLeaveMapper.selectByExample(example);

            for (ArticleLeaveDO articleLeave1 : level1) {
                ArticleLeaveBO leaveBO = new ArticleLeaveBO();
                leaveBO.setParent(articleLeave1);
                for (ArticleLeaveDO articleLeave2 : level2) {
                    if (articleLeave1.getId().equals(articleLeave2.getReplyId())) {
                        leaveBO.getChildren().add(articleLeave2);
                    }
                }
                leaves.add(leaveBO);
            }
        }

        Page<ArticleLeaveBO> page = new Page<>();
        page.setPageSize(request.getPageSize());
        page.setCurrentPage(request.getCurrentIndex());
        page.setItems(leaves);
        page.setTotalNum(count.intValue());
        return page;
    }

    @Override
    public ArticleLeaveVO leaveArticle(ArticleLeaveDO articleLeave) {
        articleLeave.setStatus(1);
        articleLeave.setCreatedAt(new Date());
        if (articleLeave.getReplyId() == null) {
            articleLeave.setLevel(1);
        } else {
            articleLeave.setLevel(2);
        }

        UserVO user = BlogContext.getCurrentUser();
        if (user == null) {
            articleLeave.setNickName("匿名");
            articleLeave.setUserId(UUId.getUUId());
        } else {
            articleLeave.setNickName(user.getNickName());
            articleLeave.setUserId(user.getId());
            articleLeave.setHeadImg(user.getHeadImg());
        }
        articleLeaveMapper.insertSelective(articleLeave);
        if (articleLeave.getReplyId() == null) {
            articleManualMapper.updateLeaveCountInc(articleLeave.getArticleId());
        }

        return BeanUtils.copyProperties(articleLeave, ArticleLeaveVO.class);
    }

    @Cacheable(cacheNames = {"blog"}, key = "'getRecentArtilceLeave' + #size", sync = true)
    @Override
    public List<ArticleLeaveDO> getRecent(Integer size) {
        ArticleLeaveDOExample example = new ArticleLeaveDOExample();
        example.createCriteria().andStatusEqualTo(1).andLevelEqualTo(1);
        example.setOrderByClause(" created_at desc limit " + size);

        return articleLeaveMapper.selectByExample(example);

    }
}
