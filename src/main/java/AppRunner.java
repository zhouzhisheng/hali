
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;

@ServletComponentScan
@SpringBootApplication
@EnableAutoConfiguration
// 启动缓存注解，不需要缓存可删除
@EnableCaching
public class AppRunner extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(AppRunner.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(AppRunner.class, args);
	}
}
