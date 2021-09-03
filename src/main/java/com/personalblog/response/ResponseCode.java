package com.personalblog.response;

import lombok.Getter;

/**
 * Created by tao.mao on 2020/8/21.
 */
@Getter
public enum ResponseCode {

    SUCCESS(200),
    NO_AUTH(401),
    NOT_FOUND(404),
    BIZ_ERROR(306),
    REPEAT_LIKE(307),
    PARAM_ERROR(308);

    private Integer code;

    ResponseCode(Integer code) {
        this.code = code;
    }
}
