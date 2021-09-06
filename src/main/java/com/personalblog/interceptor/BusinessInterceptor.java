package com.personalblog.interceptor;

import com.personalblog.config.BlogProperties;
import com.personalblog.context.BlogContext;
import com.personalblog.enums.UserTypeEnum;
import com.personalblog.exception.BaseException;
import com.personalblog.notice.NoticeDTO;
import com.personalblog.notice.NoticeQueue;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.BusinessService;
import com.personalblog.service.ClearCacheService;
import com.personalblog.util.DateUtils;
import com.personalblog.util.IPUtils;
import com.personalblog.util.Pair;
import com.personalblog.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

/**
 * Created by tao.mao on 2020/8/21.
 */
@Slf4j
public class BusinessInterceptor implements HandlerInterceptor {

    private static String ARTICLE_DETAIL_URI = "/article/show/*";

    private static String LIKE_URI = "/like-inc";

    private BusinessService businessService;

    private ClearCacheService clearCacheService;

    private BlogProperties blogProperties;

    private AntPathMatcher pathMatcher = new AntPathMatcher();

    public BusinessInterceptor(
            BusinessService businessService, ClearCacheService clearCacheService, BlogProperties blogProperties) {
        this.businessService = businessService;
        this.clearCacheService = clearCacheService;
        this.blogProperties = blogProperties;

    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String uri = request.getRequestURI();
        String ip = IPUtils.getOuterIP(request);

        // admin用户过滤
        UserVO user = BlogContext.getCurrentUser();
        if (user != null && user.getType().equals(UserTypeEnum.admin.name())) {
            return true;
        }

        // ip访问过滤
        for (String pattern : blogProperties.getIgnoreIps()) {
            if (pathMatcher.match(pattern, ip)) {
                return true;
            }
        }

        // 阅读自增,同一ip，一个小时有效
        if (pathMatcher.match(ARTICLE_DETAIL_URI, uri)) {
            readCountInc(Integer.valueOf(uri.substring(uri.lastIndexOf("/") + 1)), IPUtils.getOuterIP(request));
        }

        // 点赞，同一ip，一天有效
        if (pathMatcher.match(LIKE_URI, uri)) {
            Integer articleId = Integer.valueOf(request.getParameter("articleId"));
            likeCountInc(articleId, IPUtils.getOuterIP(request));
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }

    private void readCountInc(Integer articleId, String ip) {
        if (BlogContext.readCount.containsKey(ip)) {
            Pair<Integer, Date> pair = BlogContext.readCount.get(ip);
            if (pair.getKey().equals(articleId))
            return;
        }
        businessService.readCountInc(articleId);
        BlogContext.readCount.put(ip, new Pair<>(articleId, new Date()));
    }

    private void likeCountInc(Integer articleId, String ip) {
        if (BlogContext.likeCount.containsKey(ip)) {
            Pair<Integer, Date> pair = BlogContext.likeCount.get(ip);
            if (pair.getKey().equals(articleId))
                throw new BaseException("你已经点过赞了", ResponseCode.REPEAT_LIKE);
        }
        businessService.likeCountInc(articleId);
        clearCacheService.getById(articleId);

        BlogContext.likeCount.put(ip, new Pair<>(articleId, new Date()));
    }

}
