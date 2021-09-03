package com.personalblog.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by tao.mao on 2020/8/18.
 */
@Controller
public class MarkdownController {

    @GetMapping("/admin/add")
    public String markdownEdit() {
        return "markdown/mk";
    }
}
