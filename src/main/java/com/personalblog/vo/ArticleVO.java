package com.personalblog.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.personalblog.util.DateUtils;
import lombok.Data;

import java.text.SimpleDateFormat;
import java.util.Date;

import static com.personalblog.util.DateUtils.YYYY_MM_DD_HH_MM;

/**
 * Generate by kucoin generator 
 * 
 * @author kucoin-mybatis-generator
 * @since 2020-11-23
 */
@Data
public class ArticleVO {

    private Integer id;

    private String title;

    private String type;

    private String intro;

    private String imgPath;

    private String imgType;

    private String category;

    private String author;

    private Integer readCount;

    private Integer likeCount;

    private Integer sort;

    /**
     * 0-非原创，1-原创
     */
    private Integer original;

    private String content;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Date createdAt;

    private String createAtStr;

    private String nickName;

    private String headImg;

    private Integer articleTotal;

    public String getCreatedAt() {
        return DateUtils.parseDate(this.createdAt, YYYY_MM_DD_HH_MM);
    }
}