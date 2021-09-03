package com.personalblog.notice;

import com.alibaba.fastjson.JSONObject;
import com.personalblog.client.IpInfoClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;

/**
 * Created by tao.mao on 2020/12/1.
 */
@Slf4j
@Component
public class NoticeConsumer implements ApplicationRunner {

    @Resource
    private RestTemplate restTemplate;

    @Resource
    private IpInfoClient ipInfoClient;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Thread thread = new Thread(() -> {
            while (!Thread.interrupted()) {
                try {
                    NoticeDTO noticeDTO = NoticeQueue.noticeQueue.take();
                    noticeDTO.setContent(getContent(noticeDTO));
                    send(noticeDTO);
                    Thread.sleep(3000);
                } catch (Exception e) {
                    log.error("获取消息异常", e);
                }
            }
        });
        thread.start();
    }

    private void send(NoticeDTO noticeDTO) {

        try {
            String url = "https://oapi.dingtalk.com/robot/send?access_token=1220bb6e7adf2f38b1ef921bad4d3c8c7116e6d1dea986068446a327bf2e868a";
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<JSONObject> entity = new HttpEntity<>(buildRequestBody(noticeDTO),
                    headers);
            restTemplate.postForEntity(url, entity, Void.class);
        } catch (Exception e) {
            log.error("send dingtalk notice error.{}", e, noticeDTO.toString());
        }

    }

    public JSONObject buildRequestBody(NoticeDTO noticeDTO) {

        JSONObject body = new JSONObject();
        body.put("msgtype", "markdown");
        JSONObject markdown = new JSONObject();
        markdown.put("title", noticeDTO.getTitle());
        markdown.put("text", "# " + noticeDTO.getTitle() + "\n" + noticeDTO.getContent());
        body.put("markdown", markdown);
        return body;
    }

    private String getContent(NoticeDTO noticeDTO) {
        String aera = "未知";
        try {
            aera = ipInfoClient.getAera(noticeDTO.getIp());
        } catch (Exception e) {
            log.error("获取IP信息失败", e);
        }

        StringBuffer notice = new StringBuffer();
        notice.append("\n");
        notice.append("#### IP：").append(noticeDTO.getIp() + "\n");
        notice.append("#### URI：").append(noticeDTO.getUri() + "\n");
        notice.append("#### 时间：").append(noticeDTO.getAccessTime() + "\n");
        notice.append("#### 访问用户：").append(noticeDTO.getNickName() + "\n");
        notice.append("#### 所在地区：").append(aera + "\n");
        return notice.toString();
    }

}
