package com.personalblog.bo;

import com.personalblog.dataobject.MessageLeaveDO;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Generate by kucoin generator 
 * 
 * @author kucoin-mybatis-generator
 * @since 2021-09-13
 */
@Data
public class MessageLeaveBO {

    private MessageLeaveDO parent;

    private List<MessageLeaveDO> children = new ArrayList<>();
}