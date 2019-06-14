package com.core.hali.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import cc.ryanc.halo.web.interceptor.ApiInterceptor;
import cc.ryanc.halo.web.interceptor.InstallInterceptor;
import cc.ryanc.halo.web.interceptor.LocaleInterceptor;
import cc.ryanc.halo.web.interceptor.LoginInterceptor;
import lombok.extern.slf4j.Slf4j;

/**
 * <pre>
 * 拦截器 ， 资源路径配置
 * <pre>
 * @author zhisheng.zhou
 *@dete : 2019/06/12
 */
@Slf4j
@Configurable
@EnableWebMvc
@ComponentScan(basePackages = "com.core.hali.web.controller")
@PropertySource(value = "classpath:application.yml" )
public class WebMvcAutoConfiguration {
	@Autowired
    private LoginInterceptor loginInterceptor;

    @Autowired
    private InstallInterceptor installInterceptor;

    @Autowired
    private ApiInterceptor apiInterceptor;

    @Autowired
    private LocaleInterceptor localeInterceptor;
}
