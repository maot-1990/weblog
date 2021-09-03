package com.personalblog.task;

import com.personalblog.context.BlogContext;
import com.personalblog.util.DateUtils;
import com.personalblog.util.Pair;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@Component
@Slf4j
public class ReadCountClearTask {

    @Scheduled(cron = "0 0 01 * * ?")
    public void execute() {
        log.info("清除阅读统计task");
        /*Map<String, Pair<Integer, Date>> temp = new ConcurrentHashMap<>();
        for (Map.Entry<String, Pair<Integer, Date>> entry : BlogContext.readCount.entrySet()) {
            if (DateUtils.diffHour(entry.getValue().getValue(), new Date(),TimeUnit.MILLISECONDS) < 12) {
                temp.put(entry.getKey(), entry.getValue());
            }
        }*/
        BlogContext.readCount.clear();
        // BlogContext.readCount.putAll(temp);
    }
}
