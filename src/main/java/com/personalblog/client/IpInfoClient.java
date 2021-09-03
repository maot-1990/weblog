package com.personalblog.client;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.personalblog.config.BlogProperties;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;

/**
 * Created by tao.mao on 2020/12/1.
 */
@Component
public class IpInfoClient {

    @Resource
    private BlogProperties blogProperties;

    @Resource
    private RestTemplate restTemplate;

    public String getAera(String ip) {
        String url = String.format(blogProperties.getBaiduIpInfoUrl(), ip);
        JSONObject json = restTemplate.getForObject(url, JSONObject.class);
        return JSON.toJSONString(json.get("address"));
    }


}
