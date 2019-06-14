package com.core.hali.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

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
    
    
    /**
     * 注册拦截器
     *
     * @param registry registry
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor)
                .addPathPatterns("/admin.*")
                .addPathPatterns("/admin/**")
                .addPathPatterns("/backup/**")
                .excludePathPatterns("/admin/login")
                .excludePathPatterns("/admin/getLogin")
                .excludePathPatterns("/static/**");
        registry.addInterceptor(installInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/install")
                .excludePathPatterns("/install/do")
                .excludePathPatterns("/static/**");
        registry.addInterceptor(apiInterceptor)
                .addPathPatterns("/api/**");
        registry.addInterceptor(localeInterceptor)
                .addPathPatterns("/admin.*")
                .addPathPatterns("/admin/**")
                .addPathPatterns("/install");
        registry.addInterceptor(localeChangeInterceptor())
                .addPathPatterns("/install");
    }

    /**
     * 配置静态资源路径
     *
     * @param registry registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/templates/themes/");
        registry.addResourceHandler("/upload/**")
                .addResourceLocations("file:///" + System.getProperties().getProperty("user.home") + "/halo/upload/");
        registry.addResourceHandler("/favicon.ico")
                .addResourceLocations("classpath:/static/halo-backend/images/favicon.ico");
        registry.addResourceHandler("/backup/**")
                .addResourceLocations("file:///" + System.getProperties().getProperty("user.home") + "/halo/backup/");
    }
}
