package com.personalblog.exception;

import com.personalblog.response.ResponseCode;

/**
 * Created by tao.mao on 2020/8/21.
 */
public class BaseException extends RuntimeException {

    /** 错误码 */
    private final Integer errorCode;

    /**
     * 通过消息与错误码创建BaseException实例
     *
     * @param message
     *            异常message, 用来表示异常消息明细
     * @param errorCode
     *            错误码
     */
    public BaseException(String message, ResponseCode errorCode, Object... args) {
        super(message);
        this.errorCode = errorCode.getCode();
    }

    /**
     * 通过消息,错误原因,错误码创建BaseException实例
     *
     * @param message
     *            异常message, 用来表示异常消息明细
     * @param cause
     *            异常原因
     * @param errorCode
     *            错误码
     */
    public BaseException(String message, Throwable cause, Integer errorCode, Object... args) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    public Integer getErrorCode() {
        return errorCode;
    }

}
