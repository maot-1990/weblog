package com.weixin.todolist.client;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.personalblog.dataobject.TodoListDO;
import com.personalblog.util.DateUtils;
import com.personalblog.util.Pair;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.HashMap;

@Component
@Slf4j
public class AppletClient {

    private static final String OPEN_ID_URL = "https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code&connect_redirect=1";

    private static final String TOKEN_URL = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=%s&secret=%s";

    private static final String MSG_CHECK = "https://api.weixin.qq.com/wxa/msg_sec_check?access_token=%s";

    private static final String SEND_MSG = "https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=%s";

    @Value("${blog.weixin.todolist.appId}")
    private String appId;
    @Value("${blog.weixin.todolist.appSecret}")
    private String appSecret;
    @Resource
    private RestTemplate restTemplate;

    private Pair<String, LocalDateTime> pair = new Pair<>("", LocalDateTime.now());

    public String getOpenId(String code) {
        String formatUrl = String.format(OPEN_ID_URL, appId, appSecret, code);
        String json = restTemplate.getForObject(formatUrl, String.class);
        JSONObject object = JSONObject.parseObject(json);
        log.info("获取openId：" + JSON.toJSONString(json));
        return object.get("openid").toString();
    }

    public String getAccessToken() {

        if (pair.getValue().compareTo(LocalDateTime.now()) > 0) {
            return pair.getKey();
        }

        String formatUrl = String.format(TOKEN_URL, appId, appSecret);
        String json = restTemplate.getForObject(formatUrl, String.class);
        JSONObject object = JSONObject.parseObject(json);
        String accessToken = object.getString("access_token");
        Integer expiresIn = object.getInteger("expires_in");
        LocalDateTime dateTime = LocalDateTime.now().plusSeconds(expiresIn);
        pair = new Pair<>(accessToken, dateTime);
        return pair.getKey();
    }

    public Boolean contentCheck(String content) {

        String accessToken = getAccessToken();
        String formatUrl = String.format(MSG_CHECK, accessToken);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);

        String body = "{ \"content\": \"" + content + "\"}";

        HttpEntity<String> request = new HttpEntity<>(body, headers);

        String json = restTemplate.postForObject(formatUrl, request, String.class);
        log.info("新增事项校验，入参：" + content + "，校验结果" + json);
        JSONObject object = JSONObject.parseObject(json);
        Integer errcode = object.getInteger("errcode");
        return errcode == 0;
    }

    public void sendMsg(TodoListDO todo) {
        String accessToken = getAccessToken();
        String formatUrl = String.format(SEND_MSG, accessToken);

        JSONObject data = new JSONObject();
        data.put("thing10", new HashMap<String, String>(){{put("value", "待办");}});
        data.put("thing3", new HashMap<String, String>(){{put("value", todo.getContent());}});
        data.put("time11", new HashMap<String, String>(){{put("value", DateUtils.parseDate(todo.getNoticeAt(),
                "yyyy-MM-dd HH:mm"));}});
        data.put("thing9", new HashMap<String, String>(){{put("value", "您的一个日程即将到期了哦～");}});

        JSONObject json = new JSONObject();
        json.put("touser", todo.getOpenId());
        json.put("template_id", "fuVLw_xKPH3afuGK54jwdhMkpvmf4k7RZJK6JOprAuI");
        json.put("page", "pages/index/index");
        json.put("data", data);
        json.put("miniprogram_state", "");
        json.put("lang", "zh_CN");
        log.info("发送消息参数:" + json.toJSONString());
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        HttpEntity<String> request = new HttpEntity<>(json.toJSONString(), headers);

        String result = restTemplate.postForObject(formatUrl, request, String.class);
        JSONObject object = JSONObject.parseObject(result);
        Integer errcode = object.getInteger("errcode");
        log.info("发送消息结果:" + result);
    }
}
