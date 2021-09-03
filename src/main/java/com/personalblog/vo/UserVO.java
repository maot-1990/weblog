package com.personalblog.vo;

import lombok.Data;

import java.io.Serializable;

/**
 * Generate by kucoin generator 
 * 
 * @author kucoin-mybatis-generator
 * @since 2020-11-23
 */
@Data
public class UserVO implements Serializable {

    private String id;

    private String nickName;

    private String intro;

    private String email;

    private String phone;

    private String headImg;

    private Integer status;

    private String type;

    private Integer articleTotal;

}