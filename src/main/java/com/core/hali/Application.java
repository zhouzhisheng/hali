package com.core.hali;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import cn.hutool.log.Log;
import lombok.extern.slf4j.Slf4j;

/**
 * 
 * @author zhisheng.zhou
 *@data: 2019/06/07
 *
 */
@Slf4j
@SpringBootApplication
@EnableCaching
@EnableJpaAuditing
@EnableJpaRepositories()
public class Application {
public static void main(String[] args) {
	ApplicationContext context = SpringApplication.run(Application.class, args);
	String serverPort = context.getEnvironment().getProperty("server.port");
	log.info("Hali started at http://localhost: "+ serverPort);
}
}
