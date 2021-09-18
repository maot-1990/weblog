package com.personalblog.controller;

import com.personalblog.context.BlogContext;
import com.personalblog.dao.FeedbackMapper;
import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.FeedbackDO;
import com.personalblog.enums.IntroTypeEnum;
import com.personalblog.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by tao.mao on 2020/11/28.
 * 意见反馈
 */
@Controller
public class FeedbackController {

    @Resource
    private FeedbackMapper feedbackMapper;

    @PostMapping("/feedBack")
    public String feedBack(FeedbackDO feedback) {
        UserVO user = BlogContext.getCurrentUser();
        feedback.setUserId(user != null ? user.getId() : "");
        feedbackMapper.insertSelective(feedback);
        return "redirect:/";
    }
}
