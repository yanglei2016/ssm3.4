package com.yang.train.aotutickest;

import com.yang.http.HttpRequest;

public class ImageCodeService {

	public static byte[] getImageByte(){
		String logMessage = "12306-获取验证码图片";
		// https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&0.8087829747479774
		//String url = "https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&"+ Math.random();
		//String url = "https://kyfw.12306.cn/passport/captcha/captcha-image?login_site=E&module=login&rand=sjrand&"+ Math.random();
		byte[] result = HttpRequest.sendGetByteArray(TicketsConf.captcha_url, logMessage);
		return result;
	}
	
	public static String getImageCode(){
		
		byte[] imageByte = getImageByte();
		
		String imageCode = DamatuService.d2FileTest(imageByte);
		
		return imageCode;
	}
}
