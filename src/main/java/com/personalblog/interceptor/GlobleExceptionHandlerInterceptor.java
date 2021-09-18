package com.personalblog.interceptor;

import com.personalblog.exception.BaseException;
import com.personalblog.response.BaseResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@ControllerAdvice
public class GlobleExceptionHandlerInterceptor {

    @ExceptionHandler({Exception.class, RuntimeException.class})
    public Object exceptionHandler(HttpServletRequest req, HttpServletResponse res, Exception e) {
        if (e instanceof BaseException) {
            req.getSession().setAttribute("msgError", e.getMessage());
            res.setStatus(HttpServletResponse.SC_NOT_FOUND);
        } else {
            req.getSession().setAttribute("msgError", "系统异常，请稍后重试");
            res.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }

        log.error(e.getMessage());
        return "404-error";
    }
}
