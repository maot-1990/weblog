package com.personalblog.task;

import com.personalblog.dataobject.UserDO;
import com.personalblog.service.ArticleService;
import com.personalblog.service.UserService;
import com.personalblog.util.BeanUtils;
import com.personalblog.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by tao.mao on 2020/11/23.
 */
@Component
@Slf4j
public class ArticleCountTask {

    @Resource
    private UserService userService;

    @Resource
    private ArticleService articleService;

    @Scheduled(cron = "0 0/10 * * * ?")
    public void execute() {
         List<UserVO> users = userService.getAllUser();
         for (UserVO user : users) {
             int count = articleService.getArticleCountByUser(user.getNickName());
             UserDO userDO = BeanUtils.copyProperties(user, UserDO.class);
             userDO.setArticleTotal(count);
             userService.updateUser(userDO);
         }
    }
}
