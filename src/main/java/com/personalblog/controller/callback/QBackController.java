package com.personalblog.controller.callback;

import com.personalblog.dataobject.UserDO;
import com.personalblog.response.BaseResult;
import com.personalblog.service.QBackService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
@Slf4j
public class QBackController {

    @Resource
    private QBackService qBackService;

    @GetMapping("/qback")
    public String qback(HttpServletRequest request) {
        return "index";
    }

    @PostMapping("/qback-login")
    @ResponseBody
    public BaseResult qbackLogin(@RequestBody UserDO user) {
        qBackService.qbackLogin(user);
        return BaseResult.success();
    }

    @GetMapping("/test")
    public BaseResult qbackLogin(@Param("url") String url) {
        UserDO user = new UserDO();
        user.setHeadImg(url);
        qBackService.qbackLogin(user);
        return BaseResult.success();
    }
}
