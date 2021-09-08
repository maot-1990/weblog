package com.personalblog.listener;

import com.personalblog.context.BlogContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * Created by tao.mao on 2020/11/19.
 */
@Component
@WebListener
@Slf4j
public class BlogSessionListener implements HttpSessionListener {

    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {
        BlogContext.session.put(httpSessionEvent.getSession().getId(), httpSessionEvent.getSession());
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
        BlogContext.session.remove(httpSessionEvent.getSession().getId());
    }
}
