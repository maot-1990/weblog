package com.personalblog.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * Created by tao.mao on 2020/11/24.
 */
@ConfigurationProperties(prefix = "blog.config")
@Configuration
@Data
public class BlogProperties {

    private List<String> ignoreIps;

    private String baiduIpInfoUrl;
}
