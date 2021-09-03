package com.personalblog.task;

import com.personalblog.context.BlogContext;
import com.personalblog.util.DateUtils;
import javafx.util.Pair;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@Component
@Slf4j
public class LikeCountClearTask {

    @Scheduled(cron = "0 0 01 * * ?")
    public void execute() {
        log.info("清除点赞统计task");
        // 每日重置👍
        BlogContext.likeCount.clear();
    }
}
