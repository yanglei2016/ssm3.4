package com.yang.train.aotutickest;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.yang.common.tools.MD5Util;
import com.yang.http.HttpRequest;
import com.yang.train.ImageUtils;

public class DamatuService {

	public static String d2BalanceTest(){
		String logMessage = "打码兔-查询余额";
		String url = TicketsContants.DAMATU_REQ_HOST + "d2Balance";
		
		String sign = MD5Util.md5(TicketsContants.DAMATU_APP_KEY + TicketsContants.DAMATU_USERNAME).toLowerCase().substring(0, 8);
		String password = MD5Util.md5(TicketsContants.DAMATU_APP_KEY + MD5Util.md5(MD5Util.md5(TicketsContants.DAMATU_USERNAME).toLowerCase() + MD5Util.md5(TicketsContants.DAMATU_PASSWORD).toLowerCase()).toLowerCase()).toLowerCase();
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("appID", TicketsContants.DAMATU_APP_ID);
		paramMap.put("user", TicketsContants.DAMATU_USERNAME);
		paramMap.put("pwd", password);
		paramMap.put("sign", sign);
		
		String resultMsg = HttpRequest.sendPost(url, paramMap, logMessage);
		return resultMsg;
	}
	
	public static String d2FileTest(byte[] imageByte){
		String logMessage = "打码兔-打码";
		String url = TicketsContants.DAMATU_REQ_HOST + "d2File";
		String password = MD5Util.md5(TicketsContants.DAMATU_APP_KEY + MD5Util.md5(MD5Util.md5(TicketsContants.DAMATU_USERNAME).toLowerCase() + MD5Util.md5(TicketsContants.DAMATU_PASSWORD).toLowerCase()).toLowerCase()).toLowerCase();
		
		//APP_KEY + USERNAME + imageByte 参与签名，但是图片是byte[]，所以先把其他参数拼装转换成byte[]，再把两个byte[]合并
		String sign = "";
		String softName = TicketsContants.DAMATU_APP_KEY + TicketsContants.DAMATU_USERNAME;
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
		paramMap.put("appID", TicketsContants.DAMATU_APP_ID);
		paramMap.put("user", TicketsContants.DAMATU_USERNAME);
		paramMap.put("pwd", password);
		paramMap.put("type", TicketsContants.DAMATU_IMG_TYPE);
		paramMap.put("fileDataBase64", ImageUtils.getBase64Image(imageByte));
		paramMap.put("sign", sign);
		String resultMsg = HttpRequest.sendPost(url, paramMap, logMessage);
		//{"ret":0,"id":1253018242,"result":"252,72","sign":"71a06db5"}
		
		JSONObject resultJson = JSON.parseObject(resultMsg);
		Integer ret = resultJson.getInteger("ret");
		if(ret == 0){
			resultMsg = resultJson.getString("result");
		}else{
			resultMsg = "";
		}
		return resultMsg;
	}
}
