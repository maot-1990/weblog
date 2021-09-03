package com.personalblog.controller;

import com.personalblog.response.BaseResult;
import com.personalblog.service.BusinessService;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * Created by tao.mao on 2020/8/21.
 */
@Controller
public class LikeController {

    @Resource
    private BusinessService businessService;

    @RequestMapping(value = "/like-inc", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public BaseResult likeCountInc(@RequestParam("articleId") String articleId) {
        return BaseResult.success();
    }
}
