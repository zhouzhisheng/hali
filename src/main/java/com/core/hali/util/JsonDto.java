package com.core.hali.util;

/**
 * 
* @F: com.hali.core.util.JsonDto.java
* @ClassName: JsonDto 
* @Description: TODO(Json接口传输类) 
* @author ZZS
* @date 2019年5月22日 上午9:57:54 
*
 */
public class JsonDto {
	
	public static final String JSON_SUCCESS = "1";
	public static final String JSON_FAIL = "0";
	public static final String JSON_ERROE = "-1";
	public static final String JSON_FORBIDDEN = "403";
	public static final String JSON_FORBIDDEN_MSG = "权限不够";
	public static final String JSON_SUCCESS_MSG = "成功";
	public static final String JSON_FAIL_MSG = "失败";
	public static final String JSON_FAIL_NODATA = "查询无数据";
	public static final String JSON_FAIL_AUTHCODE = "验证码错误或已失效";
	public static final String JSON_FAIL_USEREXIST = "该用户名或手机已注册";
	public static final String JSON_FAIL_USERNOEXIST = "用户名不存在";
	public static final String JSON_FAIL_PWDERROR = "密码不正确";
	public static final String JSON_ERROE_MSG = "错误";
	private String code; // json返回码
	private String message; // json返回信息
	private Object data; // 返回数据

	private String time;// 时间

	/**
	 * qiuhao:成功返回
	 *
	 * @date 2018年8月9日 下午5:19:57
	 * @param @param msg
	 * @param @return
	 * @return JsonDto
	 */
	public JsonDto ok(Object msg) {
		JsonDto r = new JsonDto(JsonDto.JSON_SUCCESS, JsonDto.JSON_SUCCESS_MSG, msg);
		return r;
	}

	/**
	 * qiuhao:成功返回
	 *
	 * @date 2018年8月9日 下午5:19:57
	 * @param @param msg
	 * @param @return
	 * @return JsonDto
	 */
	public JsonDto ok() {
		JsonDto r = new JsonDto(JsonDto.JSON_SUCCESS, JsonDto.JSON_SUCCESS_MSG);
		return r;
	}

	/**
	 * qiuhao:错误返回
	 *
	 * @date 2018年8月9日 下午5:19:57
	 * @param @param msg
	 * @param @return
	 * @return JsonDto
	 */
	public JsonDto error(Object msg) {
		JsonDto r = new JsonDto(JsonDto.JSON_ERROE, JsonDto.JSON_ERROE_MSG, msg);
		return r;
	}

	/**
	 * qiuhao:错误返回
	 *
	 * @date 2018年8月9日 下午5:19:57
	 * @param @param msg
	 * @param @return
	 * @return JsonDto
	 */
	public JsonDto error() {
		JsonDto r = new JsonDto(JsonDto.JSON_ERROE, JsonDto.JSON_ERROE_MSG);
		return r;
	}

	public JsonDto() {
		super();
	}

	public JsonDto(String code, String message) {
		super();
		this.code = code;
		this.message = message;
	}

	public JsonDto(String code, String message, Object data) {
		super();
		this.code = code;
		this.message = message;
		this.data = data;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

}

