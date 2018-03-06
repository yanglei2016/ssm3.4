package com.yang.damatu;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

import com.yang.common.tools.MD5Util;
import com.yang.http.HttpRequest;
import com.yang.train.ImageUtils;

public class DamatuTest extends BaseTest {

	private static final String APP_ID = "54238";
	private static final String APP_KEY = "ec015fb5f235b856f1eeef695a4dee3d";
	
	private static final String REQ_HOST = "http://api.dama2.com:7766/app/";
	private static final String IMG_TYPE = "287";
	
	private static final String USERNAME = "yanglei1020";
	private static final String PASSWORD = "yangyang1020";
	

	@Test
	public void d2BalanceTest(){
		String logMessage = "打码兔-查询余额";
		String url = REQ_HOST + "d2Balance";
		
		String sign = MD5Util.md5(APP_KEY + USERNAME).toLowerCase().substring(0, 8);
		String password = MD5Util.md5(APP_KEY + MD5Util.md5(MD5Util.md5(USERNAME).toLowerCase() + MD5Util.md5(PASSWORD).toLowerCase()).toLowerCase()).toLowerCase();
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("appID", APP_ID);
		paramMap.put("user", USERNAME);
		paramMap.put("pwd", password);
		paramMap.put("sign", sign);
		
		HttpRequest.sendPost(url, paramMap, logMessage);
	}
	
	
	@Test
	public void d2FileTest(){
		String logMessage = "打码兔-打码";
		String url = REQ_HOST + "d2File";
		
		String password = MD5Util.md5(APP_KEY + MD5Util.md5(MD5Util.md5(USERNAME).toLowerCase() + MD5Util.md5(PASSWORD).toLowerCase()).toLowerCase()).toLowerCase();
		
		byte[] imageByte = getImageByte();
		
		//APP_KEY + USERNAME + imageByte 参与签名，但是图片是byte[]，所以先把其他参数拼装转换成byte[]，再把两个byte[]合并
		String sign = "";
		String softName = APP_KEY + USERNAME;
		byte[] softNameByte;
		try {
			softNameByte = softName.getBytes("utf-8");
			byte [] signByte = new byte[softNameByte.length + imageByte.length];
			System.arraycopy(softNameByte, 0, signByte, 0, softNameByte.length);
			System.arraycopy(imageByte, 0, signByte, softNameByte.length, imageByte.length);
			sign = MD5Util.md5(signByte).substring(0, 8);
		} catch (UnsupportedEncodingException e) {
			System.out.println(logMessage +"签名异常："+ e.getMessage());
			e.printStackTrace();
		}
		
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("appID", APP_ID);
		paramMap.put("user", USERNAME);
		paramMap.put("pwd", password);
		paramMap.put("type", IMG_TYPE);
		paramMap.put("fileDataBase64", ImageUtils.getBase64Image(imageByte));
		paramMap.put("sign", sign);
		System.out.println("-------------------------------------------");
		HttpRequest.sendPost(url, paramMap, logMessage);
	}

	public byte[] getImageByte(){
		String logMessage = "12306-获取验证码图片";
		// https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&0.8087829747479774
		//String url = "https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&"+ Math.random();
		String url = "https://kyfw.12306.cn/passport/captcha/captcha-image?login_site=E&module=login&rand=sjrand&"+ Math.random();
		
		byte[] result = HttpRequest.sendGetByteArray(url, logMessage);
		
		return result;
	}
	
	@Test
	public void getImgTest(){
		String logMessage = "12306-获取验证码图片";
		// https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&0.8087829747479774
		String url = "https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&"+ Math.random();
		
		byte[] sendGet = HttpRequest.sendGetByteArray(url, logMessage);
		ImageUtils.generateImage(ImageUtils.getBase64Image(sendGet), "456.jpg");
	}
	
}
