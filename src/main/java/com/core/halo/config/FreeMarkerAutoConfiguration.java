package com.core.halo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Configuration;

import cc.ryanc.halo.model.freemarker.method.RandomMethod;
import cc.ryanc.halo.model.freemarker.method.RecentCommentsMethod;
import cc.ryanc.halo.model.freemarker.method.RecentPostsMethod;
import cc.ryanc.halo.model.freemarker.tag.ArticleTagDirective;
import cc.ryanc.halo.model.freemarker.tag.CommonTagDirective;
import cc.ryanc.halo.service.OptionsService;
import cc.ryanc.halo.service.UserService;
import lombok.extern.slf4j.Slf4j;

/**
 * <pre>
 *  FreeMaker 配置 Freemaker 编辑器 
 * </pre>
 * @author zhisheng.zhou
 * @date: 2019/06/08
 */
@Slf4j
@Configuration
public class FreeMarkerAutoConfiguration {

	@Autowired
	private  freemarker.template.Configuration configuration;
	
    @Autowired
    private OptionsService optionsService;
    @Autowired
    private UserService userService;
    @Autowired
    private CommonTagDirective commonTagDirective;
    @Autowired
    private ArticleTagDirective articleTagDirective;
    @Autowired
    private RandomMethod randomMethod;

    @Autowired
    private RecentPostsMethod recentPostsMethod;

    @Autowired
    private RecentCommentsMethod recentCommentsMethod;
    
    
	
}
