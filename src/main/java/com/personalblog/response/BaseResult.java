package com.personalblog.response;

import lombok.Data;

/**
 * Created by tao.mao on 2020/8/21.
 */
@Data
public class BaseResult<T> {

    private Boolean success;

    private Integer code;

    private String msg;

    private T data;

    public static BaseResult success() {
        BaseResult result = new BaseResult();
        result.setSuccess(Boolean.TRUE);
        result.setCode(ResponseCode.SUCCESS.getCode());
        return result;
    }

    public static BaseResult success(Object data) {
        BaseResult result = new BaseResult();
        result.setSuccess(Boolean.TRUE);
        result.setData(data);
        result.setCode(ResponseCode.SUCCESS.getCode());
        return result;
    }

    public static BaseResult fail() {
        BaseResult result = new BaseResult();
        result.setSuccess(Boolean.FALSE);
        result.setCode(ResponseCode.BIZ_ERROR.getCode());
        return result;
    }

    public static BaseResult fail(Integer errorCode) {
        BaseResult result = new BaseResult();
        result.setSuccess(Boolean.FALSE);
        result.setCode(errorCode);
        return result;
    }

    public static BaseResult fail(Integer errorCode, String msg) {
        BaseResult result = new BaseResult();
        result.setSuccess(Boolean.FALSE);
        result.setCode(errorCode);
        result.setMsg(msg);
        return result;
    }

    public static BaseResult fail(ResponseCode responseCode, String msg) {
        BaseResult result = new BaseResult();
        result.setSuccess(Boolean.FALSE);
        result.setCode(responseCode.getCode());
        result.setMsg(msg);
        return result;
    }
}
