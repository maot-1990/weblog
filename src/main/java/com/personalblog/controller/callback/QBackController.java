package com.personalblog.controller.callback;

import com.personalblog.dataobject.ArticleDO;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.ArticleRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.Map;

@Controller
@Slf4j
public class QBackController {

    @GetMapping("/qback")
    public String qBack(HttpServletRequest request) {
        Enumeration<String> param = request.getParameterNames();
        Enumeration<String> paramAttri = request.getAttributeNames();

        log.info("uri = " + request.getRequestURI());
        log.info("body = " + request.getAttributeNames());

        log.info("request参数：" + param.hasMoreElements());
        log.info("requestAttri参数：" + paramAttri.hasMoreElements());
        log.info("token参数：" + request.getParameter("access_token"));


        while (paramAttri.hasMoreElements()) {
            String key = paramAttri.nextElement();
            log.info("name = " + key + ", value = " + request.getAttribute(key));
        }

        return "qback";
    }

    @GetMapping("/qback-login")
    public String qBack(String openId, String nickName) {


        return "qback";
    }
}
