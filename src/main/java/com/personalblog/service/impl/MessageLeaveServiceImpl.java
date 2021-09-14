package com.personalblog.service.impl;

import com.personalblog.bo.ArticleLeaveBO;
import com.personalblog.bo.MessageLeaveBO;
import com.personalblog.context.BlogContext;
import com.personalblog.dao.MessageLeaveMapper;
import com.personalblog.dataobject.ArticleLeaveDO;
import com.personalblog.dataobject.MessageLeaveDO;
import com.personalblog.dataobject.MessageLeaveDOExample;
import com.personalblog.enums.StatusEnum;
import com.personalblog.exception.BaseException;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.MessageLeaveRequest;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.MessageLeaveService;
import com.personalblog.util.UUId;
import com.personalblog.vo.UserVO;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by tao.mao on 2020/8/27.
 */
@Service
public class MessageLeaveServiceImpl implements MessageLeaveService {

    @Resource
    private MessageLeaveMapper messageLeaveMapper;

    @Override
    public Page<MessageLeaveBO> getMessageLeaves(MessageLeaveRequest request) {

        List<MessageLeaveBO> messageLeaves = new ArrayList<>();
        Integer start = (request.getCurrentIndex() - 1) * request.getPageSize();
        MessageLeaveDOExample exampleLeave = new MessageLeaveDOExample();
        exampleLeave.createCriteria().andStatusEqualTo(StatusEnum.ONE.getStatus())
                .andLevelEqualTo(1);
        exampleLeave.setOrderByClause(" created_at desc limit " + start + "," + request.getPageSize());
        List<MessageLeaveDO> leaves = messageLeaveMapper.selectByExample(exampleLeave);
        Long count = messageLeaveMapper.countByExample(exampleLeave);

        if (!CollectionUtils.isEmpty(leaves)) {
            exampleLeave.clear();
            exampleLeave.createCriteria().andStatusEqualTo(StatusEnum.ONE.getStatus()).andLevelEqualTo(2)
                    .andReplyIdIn(leaves.stream().map(leave -> leave.getId()).collect(Collectors.toList()));

            exampleLeave.setOrderByClause(" created_at");
            List<MessageLeaveDO> level2 = messageLeaveMapper.selectByExample(exampleLeave);

            for (MessageLeaveDO messageLeave : leaves) {
                MessageLeaveBO leaveBO = new MessageLeaveBO();
                leaveBO.setParent(messageLeave);
                for (MessageLeaveDO messageLeave2 : level2) {
                    if (messageLeave.getId().equals(messageLeave2.getReplyId())) {
                        leaveBO.getChildren().add(messageLeave2);
                    }
                }
                messageLeaves.add(leaveBO);
            }
        }

        Page<MessageLeaveBO> page = new Page<>();
        page.setPageSize(request.getPageSize());
        page.setCurrentPage(request.getCurrentIndex());
        page.setItems(messageLeaves);
        page.setTotalNum(count.intValue());

        return page;
    }

    @Override
    public MessageLeaveDO boardMessage(MessageLeaveDO messageLeave) {

        // 校验用户是否登录
        UserVO user = BlogContext.getCurrentUser();
        if (user == null) {
            throw new BaseException("请登录后再留言", ResponseCode.NO_AUTH);
        }
        if (messageLeave.getReplyId() == null) {
            messageLeave.setLevel(1);
        } else {
            messageLeave.setLevel(2);

            // 如果为回复，则不能回复自己
            MessageLeaveDO replyMsg = messageLeaveMapper.selectByPrimaryKey(messageLeave.getReplyId());
            if (replyMsg.getUserId().equals(user.getId())) {
                throw new BaseException("不能回复自己的留言", ResponseCode.BIZ_ERROR);
            }
        }
        messageLeave.setNickName(user.getNickName());
        messageLeave.setUserId(user.getId());
        messageLeave.setStatus(StatusEnum.ONE.getStatus());
        messageLeave.setHeadImg(user.getHeadImg());
        messageLeave.setCreatedAt(new Date());
        messageLeaveMapper.insertSelective(messageLeave);

        return messageLeave;
    }

}
