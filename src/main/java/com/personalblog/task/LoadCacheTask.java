package com.personalblog.task;

import com.personalblog.enums.IntroTypeEnum;
import com.personalblog.enums.TypeEnum;
import com.personalblog.request.ArticleRequest;
import com.personalblog.service.ArticleService;
import com.personalblog.service.CommonService;
import com.personalblog.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
@Slf4j
public class LoadCacheTask {

    @Resource
    private ArticleService articleService;

    @Resource
    private CommonService commonService;

    @Resource
    private UserService userService;

    @Scheduled(cron = "0 0/1 * * * ?")
    public void execute() {
        articleService.getArticleMore(new ArticleRequest());
        articleService.getCategoryByGroup(TypeEnum.IT.name());
        articleService.getByIntroType(IntroTypeEnum.RECENT.toString());
        articleService.getByIntroType(IntroTypeEnum.POPULAR.toString());
        commonService.getQuickLinks();
        userService.getAuthors(5);
    }
}
