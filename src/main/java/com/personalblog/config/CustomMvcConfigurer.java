package com.personalblog.config;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.personalblog.filter.ContextFilter;
import com.personalblog.filter.PreFilter;
import com.personalblog.interceptor.BusinessInterceptor;
import com.personalblog.interceptor.LoginInterceptor;
import com.personalblog.service.ArticleService;
import com.personalblog.service.BusinessService;
import com.personalblog.service.ClearCacheService;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static com.personalblog.util.DateUtils.YYYY_MM_DD_HH_MM;

/**
 * Created by tao.mao on 2020/8/21.
 */
@Configuration
public class CustomMvcConfigurer implements WebMvcConfigurer {

    @Resource
    private BusinessService businessService;

    @Resource
    private ClearCacheService clearCacheService;

    @Resource
    private ArticleService articleService;

    @Resource
    private BlogProperties blogProperties;

    @Bean
    public FilterRegistrationBean<ContextFilter> contextFilter() {
        FilterRegistrationBean register = new FilterRegistrationBean();
        register.setFilter(new ContextFilter());
        register.setName("contextFilter");
        register.setOrder(2);
        register.setUrlPatterns(Lists.newArrayList("/", "/articles/show/*", "/admin/*",
                "/like-inc", "/article-leave", "/login", "/register", "/todo/*"));
        return register;
    }

    @Bean
    public FilterRegistrationBean<ContextFilter> preFilter() {
        FilterRegistrationBean register = new FilterRegistrationBean();
        register.setFilter(new PreFilter());
        register.setName("preFilter");
        register.setOrder(1);
        register.setUrlPatterns(Lists.newArrayList("/*"));
        return register;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        BusinessInterceptor businessInterceptor = new BusinessInterceptor(businessService, clearCacheService, blogProperties);
        registry.addInterceptor(businessInterceptor).addPathPatterns("/like-inc", "/articles/**");

        LoginInterceptor loginInterceptor = new LoginInterceptor(articleService);
        registry.addInterceptor(loginInterceptor).addPathPatterns("/admin/**");
    }

    @Override
    public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        ObjectMapper objectMapper = converter.getObjectMapper();
        // 时间格式化
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        objectMapper.setDateFormat(new SimpleDateFormat(YYYY_MM_DD_HH_MM));
        // 设置格式化内容
        converter.setObjectMapper(objectMapper);
        converters.add(converters.size(), converter);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .setCacheControl(CacheControl.maxAge(12,TimeUnit.HOURS).cachePublic());
                // .setCachePeriod(14400);
    }
}
