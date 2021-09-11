package com.personalblog.interceptor;

import com.personalblog.exception.BaseException;
import com.personalblog.response.BaseResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@ControllerAdvice
public class GlobleExceptionHandlerInterceptor {

    @ExceptionHandler({Exception.class, RuntimeException.class})
    public Object exceptionHandler(HttpServletRequest req, Exception e) {
        if (e instanceof BaseException) {
            req.getSession().setAttribute("msgError", e.getMessage());
            /*return new ResponseEntity<>(BaseResult.fail(be.getErrorCode(), be.getMessage()),
                    HttpStatus.OK);*/
        } else {
            req.getSession().setAttribute("msgError", "系统异常，请稍后重试");
        }
        log.error(e.getMessage());
        return "404-error";
    }
}
