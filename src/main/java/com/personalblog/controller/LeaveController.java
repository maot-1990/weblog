package com.personalblog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by tao.mao on 2020/8/26.
 */
@Controller
public class LeaveController {

    @GetMapping("/leave-us")
    public String leaveUs() {
        return "contact-us";
    }
}
