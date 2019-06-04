package com.core.exception.hali;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.core.util.hali.JsonDto;

import cn.hutool.core.date.DateUtil;

/**
 * 
* @F: com.hali.core.exception.FinalExceptionHandler.java
* @ClassName: FinalExceptionHandler 
* @Description: TODO(将错误页面返回解析为Code) 
* @author ZZS
* @date 2019年5月22日 上午9:38:55 
*
 */
@RestController
public class FinalExceptionHandler  implements ErrorController{

	@Override
	public String getErrorPath() {
		// TODO Auto-generated method stub
		return  "/error";
	}
  @RequestMapping(value="/eeor")
	public JsonDto error(HttpServletResponse res,HttpServletRequest req) {
	  JsonDto jd = new JsonDto();
	  jd.setCode(String.valueOf(res.getStatus()));
	  jd.setTime(DateUtil.formatDateTime(new Date()));  //401 重新登录
	  if(res.getStatus() == org.springframework.http.HttpStatus.UNAUTHORIZED.value()) 
		  jd.setMessage("请登录后重试");  //403无权限
	  if(res.getStatus() == HttpStatus.FORBIDDEN.value()) 
	     jd.setMessage("暂无权限访问该页面"); //404 页面未找到
	  if(res.getStatus() == HttpStatus.NOT_FOUND.value())
		  jd.setMessage("页面未找到");//500 内部错误
	  if(res.getStatus() == HttpStatus.INTERNAL_SERVER_ERROR.value())
		  jd.setMessage("接口或内部服务器错误");
	  return jd;
  }
	
}
