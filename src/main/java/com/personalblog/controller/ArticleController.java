package com.personalblog.controller;

import com.personalblog.bo.ArticleLeaveBO;
import com.personalblog.bo.CategoryGroupBO;
import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.ArticleLeaveDO;
import com.personalblog.dataobject.QuickLinkDO;
import com.personalblog.enums.IntroTypeEnum;
import com.personalblog.enums.TypeEnum;
import com.personalblog.exception.BaseException;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.ArticleLeaveRequest;
import com.personalblog.request.ArticleRequest;
import com.personalblog.response.ResponseCode;
import com.personalblog.service.ArticleLeaveService;
import com.personalblog.service.ArticleService;
import com.personalblog.service.CommonService;
import com.personalblog.service.UserService;
import com.personalblog.util.BeanUtils;
import com.personalblog.vo.ArticleVO;
import com.personalblog.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Controller
public class ArticleController {

    @Resource
    private ArticleService articleService;

    @Resource
    private ArticleLeaveService articleLeaveService;

    @Resource
    private CommonService commonService;

    @Resource
    private UserService userService;

    @GetMapping("/")
    public String getArticleHome(ModelMap mode) {
        ArticleRequest request = new ArticleRequest();
        Page<ArticleDO> page = articleService.getArticleMore(request);
        page.setCategory(request.getCategory());
        page.setSearchKey(request.getSearchKey());

        List<ArticleDO> recent = articleService.getByIntroType(IntroTypeEnum.RECENT.toString());
        List<ArticleDO> popular = articleService.getByIntroType(IntroTypeEnum.POPULAR.toString());

        List<QuickLinkDO> links = commonService.getQuickLinks();

        List<ArticleLeaveDO> articleLeaveRecent = articleLeaveService.getRecent(5);

        List<UserVO> authors = userService.getAuthors(5);

        mode.addAttribute("recent", recent);
        mode.addAttribute("popular", popular);
        mode.addAttribute("articleLeaveRecent", articleLeaveRecent);

        mode.addAttribute("page", page);

        mode.addAttribute("links", links);

        mode.addAttribute("authors", authors);

        return "index";
    }

    @GetMapping("/article/has-more")
    @ResponseBody
    public Page<ArticleDO> getArticleHasMore(ArticleRequest request) {
        Page<ArticleDO> page = articleService.getArticleMore(request);
        page.setCategory(request.getCategory());
        page.setSearchKey(request.getSearchKey());
        return page;
    }

    @GetMapping("/articles")
    public String getArticleList(ModelMap mode, ArticleRequest request) {
        Page<ArticleDO> page = articleService.getArticleMore(request);
        page.setCategory(request.getCategory());
        page.setSearchKey(request.getSearchKey());
        page.setType(request.getType());

        List<CategoryGroupBO> category = articleService.getCategoryByGroup(request.getType());
        List<ArticleDO> popular = articleService.getByIntroType(IntroTypeEnum.POPULAR.toString());

        mode.addAttribute("page", page);
        mode.addAttribute("category", category);
        mode.addAttribute("popular", popular);

        if (request.getType().equals(TypeEnum.IT.getType())) {
            return "list_it";
        } else if (request.getType().equals(TypeEnum.OTHER.getType())) {
            return "list_other";
        } else if (request.getType().equals(TypeEnum.TOOLS.getType())) {
            return "list_tools";
        } else {
            return "404-error";
        }
    }

    @GetMapping("/article/show/{id}")
    public String getArticleDetail(ModelMap mode, @PathVariable("id") Integer id) {
        ArticleDO article = articleService.getById(id);

        if (article == null) {
            throw new BaseException("你访问的文章不存在", ResponseCode.NOT_FOUND);
        }
        ArticleDO preArticle = articleService.getById(id - 1);
        ArticleDO afterArticle = articleService.getById(id + 1);

        UserVO user = userService.getUserById(article.getUserId());
        ArticleVO articleVO = BeanUtils.copyProperties(article, ArticleVO.class);
        articleVO.setAuthor(user.getNickName());
        articleVO.setArticleTotal(user.getArticleTotal());
        articleVO.setHeadImg(user.getHeadImg());
        articleVO.setCreateAtStr(article.getCreateAtStr());
        List<ArticleDO> related = articleService.getByCategory(article.getCategory(), article.getId());
        ArticleLeaveRequest request = new ArticleLeaveRequest();
        request.setArticleId(id);
        Page<ArticleLeaveBO> articleLeavePage = articleLeaveService.getArticleLeaveHasMore(request);
        List<CategoryGroupBO> category = articleService.getCategoryByGroup(article.getType());
        List<ArticleDO> popular = articleService.getByIntroType(IntroTypeEnum.POPULAR.toString());

        mode.addAttribute("category", category);
        mode.addAttribute("popular", popular);
        mode.addAttribute("related", related);
        mode.addAttribute("article", articleVO);
        mode.addAttribute("preArticle", preArticle);
        mode.addAttribute("afterArticle", afterArticle);
        mode.addAttribute("articleLeavePage", articleLeavePage);
        mode.addAttribute("user", user);

        if (article.getType().equals(TypeEnum.IT.getType())) {
            return "detail_it";
        } else if (article.getType().equals(TypeEnum.OTHER.getType())) {
            return "detail_other";
        } else if (article.getType().equals(TypeEnum.TOOLS.getType())) {
            return "detail_tool";
        }else {
            return "error";
        }
    }

    @GetMapping("/ad")
    public String ad(ModelMap mode) {
        List<ArticleDO> popular = articleService.getByIntroType(IntroTypeEnum.POPULAR.toString());
        mode.addAttribute("popular", popular);
        return "ad";
    }

    @GetMapping("/contact-us")
    public String aboutUs(ModelMap mode) {
        List<ArticleDO> popular = articleService.getByIntroType(IntroTypeEnum.POPULAR.toString());
        mode.addAttribute("popular", popular);
        return "contact_us";
    }

    @GetMapping("/contribute")
    public String contribute(ModelMap mode) {
        List<ArticleDO> popular = articleService.getByIntroType(IntroTypeEnum.POPULAR.toString());
        mode.addAttribute("popular", popular);
        return "contribution";
    }

}
