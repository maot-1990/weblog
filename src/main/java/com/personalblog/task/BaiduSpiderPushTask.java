package com.personalblog.task;

import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.UserDO;
import com.personalblog.pagehelper.Page;
import com.personalblog.request.ArticleRequest;
import com.personalblog.service.ArticleService;
import com.personalblog.service.UserService;
import com.personalblog.util.BeanUtils;
import com.personalblog.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.List;

/**
 * Created by tao.mao on 2020/11/23.
 */
@Component
@Slf4j
public class BaiduSpiderPushTask {

    private static final String PUSH_RUL = "http://data.zz.baidu.com/urls?site=https://www.weblog.icu&token=grHQewUnE0gsfUgG";

    private static final String MY_SITE_URL = "https://www.weblog.icu/article/show/%s";

    @Resource
    private ArticleService articleService;

    @Scheduled(cron = "0 0 1 * * ?")
    public void execute() {

        // 获取最近1000条的文章id
        ArticleRequest request = new ArticleRequest();
        request.setPageSize(500);
        Page<ArticleDO> page = articleService.getArticleMore(request);
        StringBuffer buffer = new StringBuffer();
        for(ArticleDO article : page.getItems()) {
            buffer.append(String.format(MY_SITE_URL, article.getId())).append("\n");
        }
        String url = buffer.toString();
        url = url.substring(0, url.length() - 2);
        pushResource(url);
    }

    private void pushResource(String url) {

        // 创建httpclient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();
        RequestConfig requestConfig = RequestConfig.custom().setSocketTimeout(300 * 1000)
                .setConnectTimeout(300 * 1000).build();

        // 创建post方式请求对象
        HttpPost post = new HttpPost(PUSH_RUL);
        post.setConfig(requestConfig);

        // 请求的数据包为raw，设置报文头为Content-Type
        post.setHeader("Content-Type", "text/plain;charset=utf-8");
        StringEntity myEntity = new StringEntity(url, ContentType.create("text/plain", "UTF-8"));
        post.setEntity(myEntity);

        try {

            HttpResponse response = httpClient.execute(post);
            HttpEntity entity = response.getEntity();
            String content = EntityUtils.toString(entity);
            log.info("推送百度spider结果:" + content);
            httpClient.close();
        } catch (Exception e) {
            log.error("推送spider异常", e);
        }
    }

}
