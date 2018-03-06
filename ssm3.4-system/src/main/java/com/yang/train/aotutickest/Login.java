package com.yang.train.aotutickest;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.yang.http.HttpRequest;

public class Login {

	/**logger日志*/
	private static final Logger logger = LoggerFactory.getLogger(Login.class);
	
	public static void login(){
		getLoginCookies();
	}
	
	public static void getLoginCookies(){
		HttpRequest.sendGet(TicketsConf.init_url, "12306-init");
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
//		paramMap.put("appid", "otn");
//		HttpRequest.sendPost(TicketsConf.uamtk_url, paramMap, "12306-uamtk");
		
		String imageCode = ImageCodeService.getImageCode();
		logger.info("验证码自动识别结果："+ imageCode);
		paramMap.clear();
		paramMap.put("answer", imageCode.replace("|", ","));
		paramMap.put("login_site", "E");
		paramMap.put("rand", "sjrand");
		String checkResult = HttpRequest.sendPostCookie(TicketsConf.captcha_check_url, paramMap, "12306-check");
//		String url = "https://kyfw.12306.cn/otn/passcodeNew/checkRandCodeAnsyn?randCode="+ imageCode.replace("|", ",") +"&rand=sjrand";
//		String checkResult = HttpRequest.sendGet(url, "12306-check");
		logger.info("验证码校验结果："+ checkResult);
		
//		while(checkImageCode(checkResult)){
//			imageCode = ImageCodeService.getImageCode();
//			paramMap.put("answer", imageCode);
//			checkResult = HttpRequest.sendPost(TicketsConf.captcha_check_url, paramMap, "12306-uamtk");
//			logger.info("验证码校验结果："+ checkResult);
//		}
		
		paramMap.clear();
		paramMap.put("username", TicketsContants.PARAM_12306_USERNAME);
		paramMap.put("password", TicketsContants.PARAM_12306_PASSWORD);
		paramMap.put("appid", "otn");
		String loginResult = HttpRequest.sendPost(TicketsConf.login_url, JSON.toJSONString(paramMap), "12306-login");
		logger.info("登录结果："+ loginResult);
	}
	
	public static boolean checkImageCode(String checkResult){
		boolean check = false;
		JSONObject resultJson = JSON.parseObject(checkResult);
		String result_code = resultJson.getString("result_code");
		if(result_code != "4"){
			check = true;
		}
		return check;
	}
	
}
