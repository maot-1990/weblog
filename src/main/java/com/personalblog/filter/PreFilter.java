package com.personalblog.filter;

import lombok.extern.slf4j.Slf4j;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * Created by tao.mao on 2020/8/20.
 */

@Slf4j
public class PreFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest)servletRequest;
        String requestURI = request.getRequestURI();
        if (requestURI.indexOf(";jsessionid=") != -1) {
            requestURI = requestURI.substring(0, requestURI.indexOf(";jsessionid="));
        }
        request.getRequestDispatcher(requestURI).forward(servletRequest, servletResponse);

    }

    @Override
    public void destroy() {

    }
}
