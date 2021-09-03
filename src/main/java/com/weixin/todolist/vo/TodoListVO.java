package com.weixin.todolist.vo;

import lombok.Data;

import java.io.Serializable;

/**
 * Generate by kucoin generator 
 * 
 * @author kucoin-mybatis-generator
 * @since 2021-01-07
 */
@Data
public class TodoListVO implements Serializable {

    private static final long serialVersionUID = 1790091600315442684L;

    private Integer id;

    private String content;

    private String dateAt;

    private Integer isFinish;

    private Boolean checked;

}