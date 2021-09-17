package com.personalblog.controller;

import com.personalblog.context.BlogContext;
import com.personalblog.dataobject.UserDO;
import com.personalblog.service.ImgService;
import com.personalblog.service.LoginService;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.NotEmpty;

/**
 * Created by tao.mao on 2020/11/19.
 */
@Controller
public class LoginController {

    @Resource
    private LoginService loginService;

    @Resource
    private ImgService imgService;

    @GetMapping("/login")
    public String loginPage(String uri, ModelMap mode) {
        mode.addAttribute("uri", uri);
        if (BlogContext.getCurrentUser() != null) {
            if (StringUtils.isNotEmpty(uri)) {
                return "redirect:" + uri.replaceAll("_", "?");
            }
            return "redirect:/";
        }
        return "login";
    }

    @PostMapping("/login")
    public String login(
            @RequestParam("userName") @NotEmpty String userName,
            @RequestParam("passWord") @NotEmpty String passWord,
            @RequestParam("code") @NotEmpty String code,
            @RequestParam("uri") String uri,
            HttpServletRequest request) {
        imgService.verifyCode(request, code);
        loginService.login(userName, passWord);
        if (StringUtils.isNotEmpty(uri)) {
            return "redirect:" + uri.replaceAll("_", "?");
        }
        return "redirect:/";
    }

    @GetMapping("/login-out")
    public String loginOut(HttpServletRequest request) {
        request.getSession().invalidate();
        return "redirect:/";
    }

    /**
     * 发起注册
     * @return
     */
    @PostMapping("/register")
    public String register(UserDO user,
                           @RequestParam("file") MultipartFile file,
                           @RequestParam("code") String code,
                           HttpServletRequest request) {
        imgService.verifyCode(request, code);
        loginService.register(user, file);
        return "login";
    }
}
