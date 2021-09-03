package com.personalblog.controller.admin;

import com.personalblog.context.BlogContext;
import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.ImgStoreDO;
import com.personalblog.exception.BaseException;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.ArticleService;
import com.personalblog.service.ImgService;
import com.personalblog.vo.UserVO;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import static com.personalblog.context.Constant.USER;

/**
 * Created by tao.mao on 2020/8/18.
 */
@Controller
public class PublishController {

    @Resource
    private ArticleService articleService;

    @Resource
    private ImgService imgService;

    @GetMapping("/admin/edit/{articleId}")
    public String edit(@PathVariable("articleId") Integer articleId, ModelMap map) throws Exception {
        ArticleDO article = articleService.getByIdWithOutStatus(articleId);
        map.addAttribute("article", article);
        return "markdown/edit";
    }

    @PostMapping("/admin/publish")
    public String publish(ArticleDO article, MultipartFile file, HttpServletRequest request) throws Exception {

        Boolean isEdit = false;
        if (article.getId() != null) {
            isEdit = true;
        }

        HttpSession session = BlogContext.session.get(request.getSession().getId());
        UserVO user = (UserVO) session.getAttribute(USER);
        if (user == null) {
            throw new BaseException("请先登陆", ResponseCode.NOT_FOUND);
        }
        if (file != null && file.getBytes().length > 0) {
            ImgStoreDO imgStore = imgService.upload(file, user);
            article.setImgPath(imgStore.getId());
            article.setImgType(imgStore.getType());
        }
        if (StringUtils.isNotEmpty(article.getTitle())
                && StringUtils.isNotEmpty(article.getContent())
                && StringUtils.isNotEmpty(article.getIntro())) {

            articleService.saveOrUpdateArticle(article, user);
        }
        if (isEdit) {
            return "redirect:/articles/show/" + article.getId();
        }
        return "redirect:/";
    }
}
