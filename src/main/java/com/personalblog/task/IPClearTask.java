package com.personalblog.task;

import com.alibaba.fastjson.JSON;
import com.personalblog.context.BlogContext;
import com.personalblog.enums.IntroTypeEnum;
import com.personalblog.request.ArticleRequest;
import com.personalblog.service.ArticleService;
import com.personalblog.util.DateUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Component
@Slf4j
public class IPClearTask {

    @Scheduled(cron = "0 0 01 * * ?")
    public void execute() {
        log.info("【日期】-" + DateUtils.parseDate(new Date()) + "---【重置ip统计】---");
        for (Map.Entry<String, AtomicInteger> entry : BlogContext.ipCount.entrySet()) {

            // 后续可以将数据持久到数据库中
            log.info("【日期】-" + DateUtils.parseDate(new Date()) + " --- 【每日汇总ip访问统计】- "
                    + JSON.toJSONString(entry));
        }
    }
}
