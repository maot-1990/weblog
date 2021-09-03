package com.personalblog.enums;

import lombok.Getter;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Getter
public enum StatusEnum {

    ZERO(0),
    ONE(1),
    TWO(2),
    THREE(3);

    private Integer status;

    StatusEnum(Integer status) {
        this.status = status;
    }
}
