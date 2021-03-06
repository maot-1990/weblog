package com.personalblog.interceptor;

import com.personalblog.context.BlogContext;
import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.UserDO;
import com.personalblog.enums.UserTypeEnum;
import com.personalblog.exception.BaseException;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.ArticleService;
import com.personalblog.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.thymeleaf.util.MapUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

import static com.personalblog.context.Constant.USER;

/**
 * Created by tao.mao on 2020/8/21.
 */
@Slf4j
public class LoginInterceptor implements HandlerInterceptor {

    private ArticleService articleService;

    public LoginInterceptor(ArticleService articleService) {
        this.articleService = articleService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String uri = request.getRequestURI();
        StringBuffer buffer = new StringBuffer();
        buffer.append("?uri=").append(uri);
        if (HttpMethod.GET.name().equals(request.getMethod())) {
            Map<String, String[]> paramMap =  request.getParameterMap();
            if (!MapUtils.isEmpty(paramMap)) {

                for (Map.Entry<String, String[]> entry : paramMap.entrySet()) {
                    buffer.append("_").append(entry.getKey()).append("=").append(entry.getValue()[0]);
                }
            }
        }

        String sessionId = request.getSession().getId();
        HttpSession session = BlogContext.session.get(sessionId);
        if (session == null || session.getAttribute(USER) == null) {
            // throw new BaseException("?????????", ResponseCode.BIZ_ERROR);
            response.sendRedirect("/login" + buffer.toString());
            return true;
        }
        UserVO user = (UserVO) session.getAttribute(USER);
        // ??????????????????
        if (!UserTypeEnum.getAuthorUsers().contains(user.getType())) {
            throw new BaseException("?????????????????????????????????", ResponseCode.NO_AUTH);
        }
        if (user.getStatus() == 0) {
            throw new BaseException("????????????", ResponseCode.NO_AUTH);
        }
        // ???????????????????????????????????????????????????admin
        if (uri.contains("/admin/edit")) {
            Integer articleId = Integer.valueOf(uri.substring(uri.lastIndexOf("/") + 1));
            ArticleDO article = articleService.getById(articleId);
            if (!(user.getType().equals(UserTypeEnum.admin.name())
                    || (user.getType().equals(UserTypeEnum.author.name())
                    && article.getAuthor().equals(user.getNickName()))))
            throw new BaseException("?????????????????????????????????", ResponseCode.NO_AUTH);
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }

}
