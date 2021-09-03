package com.weixin.todolist.vo;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by tao.mao on 2021/1/9.
 */
@Data
public class CalendarDTO implements Serializable {

    private String date;

    private String day;

    private Boolean hasTodo = false;
}
