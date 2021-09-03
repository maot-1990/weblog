package com.personalblog.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Configuration
@MapperScan(basePackages = {"com.personalblog.dao"})
public class MybatisConfig {
}
