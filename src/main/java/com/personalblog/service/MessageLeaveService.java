package com.personalblog.service;

import com.personalblog.bo.MessageLeaveBO;
import com.personalblog.dataobject.ImgStoreDO;
import com.personalblog.dataobject.MessageLeaveDO;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.MessageLeaveRequest;
import com.personalblog.vo.UserVO;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by tao.mao on 2020/8/27.
 */
public interface MessageLeaveService {

    Page<MessageLeaveBO> getMessageLeaves(MessageLeaveRequest request);

    MessageLeaveDO boardMessage(MessageLeaveDO messageLeave);
}
