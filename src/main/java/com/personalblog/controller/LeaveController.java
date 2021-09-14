package com.personalblog.controller;

import com.personalblog.bo.ArticleLeaveBO;
import com.personalblog.bo.CategoryGroupBO;
import com.personalblog.bo.MessageLeaveBO;
import com.personalblog.dao.MessageLeaveMapper;
import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.ArticleLeaveDO;
import com.personalblog.dataobject.MessageLeaveDO;
import com.personalblog.enums.IntroTypeEnum;
import com.personalblog.exception.BaseException;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.ArticleLeaveRequest;
import com.personalblog.request.MessageLeaveRequest;
import com.personalblog.response.BaseResult;
import com.personalblog.service.ArticleService;
import com.personalblog.service.MessageLeaveService;
import com.personalblog.vo.ArticleLeaveVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.net.URLDecoder;
import java.util.List;

/**
 * Created by tao.mao on 2020/8/26.
 */
@Controller
public class LeaveController {

    @Resource
    private ArticleService articleService;

    @Resource
    private MessageLeaveService messageLeaveService;

    @GetMapping("/board")
    public String board(ModelMap mode) {
        List<ArticleDO> popular = articleService.getByIntroType(IntroTypeEnum.POPULAR.toString());
        List<CategoryGroupBO> category = articleService.getCategoryByGroup(null);
        Page<MessageLeaveBO> messageLeavePage = messageLeaveService.getMessageLeaves(new MessageLeaveRequest());

        mode.addAttribute("messageLeavePage", messageLeavePage);
        mode.addAttribute("category", category);
        mode.addAttribute("popular", popular);
        return "board";
    }

    @GetMapping(value = "/board-leave")
    @ResponseBody
    public BaseResult<MessageLeaveDO> boardLeave(MessageLeaveDO messageLeave) throws Exception {
        MessageLeaveDO result;
        try {
            result = messageLeaveService.boardMessage(messageLeave);
        } catch (BaseException e) {
            return BaseResult.fail(e.getErrorCode(), e.getMessage());
        }

        return BaseResult.success(result);
    }

    @GetMapping("/board-leave/has-more")
    @ResponseBody
    public Page<MessageLeaveBO> getBoardHasMore(MessageLeaveRequest request) {
        return messageLeaveService.getMessageLeaves(request);

    }
}
