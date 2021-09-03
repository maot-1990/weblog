package com.personalblog.vo;

import lombok.Data;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Generate by kucoin generator 
 * 
 * @author kucoin-mybatis-generator
 * @since 2020-11-26
 */
@Data
public class ArticleLeaveVO {

    private Integer id;

    private Integer articleId;

    private String userId;

    private String nickName;

    private String headImg;

    private Integer replyId;

    private Date createdAt;

    private Date updatedAt;

    public String getCreateAtStr() {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        return format.format(getCreatedAt());
    }


}