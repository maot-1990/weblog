package com.personalblog.filter;

import com.alibaba.fastjson.JSON;
import com.personalblog.config.BlogProperties;
import com.personalblog.context.BlogContext;
import com.personalblog.notice.NoticeDTO;
import com.personalblog.notice.NoticeQueue;
import com.personalblog.util.DateUtils;
import com.personalblog.util.IPUtils;
import com.personalblog.vo.UserVO;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Date;
import java.util.concurrent.atomic.AtomicInteger;

import static com.personalblog.context.Constant.APP_NAME;
import static com.personalblog.util.DateUtils.YYYY_MM_DD_HH_MM_SS;

/**
 * Created by tao.mao on 2020/8/20.
 */

@Slf4j
public class ContextFilter implements Filter {

    private BlogProperties blogProperties;

    public ContextFilter(BlogProperties blogProperties) {
        this.blogProperties = blogProperties;
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        // 记录在线用户数
        ((HttpServletRequest) servletRequest).getSession().setAttribute("online", BlogContext.session.size());

        // 统计ip
        String ip = IPUtils.getOuterIP((HttpServletRequest) servletRequest);
        collectIp(ip);

        // 蜘蛛过滤
        if (!IPUtils.isSpider((HttpServletRequest) servletRequest, blogProperties.getSpiders())) {

            String uri = ((HttpServletRequest) servletRequest).getRequestURI();

            UserVO user = BlogContext.getCurrentUser();
            NoticeDTO noticeDTO = new NoticeDTO();
            noticeDTO.setTitle(APP_NAME);
            noticeDTO.setIp(ip);
            noticeDTO.setNickName((user != null ? user.getNickName() : "游客"));
            noticeDTO.setUri(uri);
            noticeDTO.setAccessTime(DateUtils.parseDate(new Date(), YYYY_MM_DD_HH_MM_SS));
            NoticeQueue.noticeQueue.offer(noticeDTO);

        }

        // 如果有黑名单，限制用户访问
        // todo

        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }

    private void collectIp(String ip) {

        if (BlogContext.ipCount.containsKey(ip)) {
            BlogContext.ipCount.get(ip).incrementAndGet();
        } else {
            BlogContext.ipCount.put(ip, new AtomicInteger(1));
        }
        log.info("【访问ip汇总统计】- 访问ip总计-" + BlogContext.ipCount.size() + "--- 【详细】- " + JSON.toJSONString(BlogContext.ipCount));

    }
}
