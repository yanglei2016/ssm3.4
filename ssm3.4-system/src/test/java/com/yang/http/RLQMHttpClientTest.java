package com.yang.http;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.junit.Test;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import com.alibaba.fastjson.JSON;
import com.yang.common.tools.DateUtils;
import com.yang.common.tools.MD5Util;
import com.yang.http.common.HttpConfig;
import com.yang.http.exception.HttpProcessException;

public class RLQMHttpClientTest extends BaseTest {

	
	@Test
	public void getTest() throws HttpProcessException {
		String url = "https://github.com/Arronlong/httpclientutil";
		
		String resultMsg = HttpClientUtil.get(HttpConfig.getInstance().url(url));
		
		System.out.println(resultMsg);
	}
	
	private static final String REQ_HOST = "http://121.40.114.14";
	private static final String ACCOUNT = "N00000016493";
	private static final String API_SECRET = "a7a1a8b0-1b85-11e8-9dd9-5b108f75c4e1";
	private static final String PBX = "bj.ali.4.0";
	
	@Test
	public void callTest(){
		String logMessage = "七陌-签入签出";
		// http://120.55.72.***/app?Action=SignIn&ActionID=SignIn0.41748595997299165&Account=N00000000143&Exten=7001&PBX=1.1.1.101&ExtenType=gateway
		
		String ActionID = String.valueOf(Math.random());
		System.out.println(ActionID);
		
		String url = REQ_HOST + "/app?Action=SignIn&ActionID=SignIn"+ ActionID +"&Account="+ ACCOUNT +"&Exten=8001&PBX="+ PBX +"&ExtenType=Local";
		
		
		HttpRequest.sendGet(url, logMessage);
	}
	
	@Test
	public void callStatusTest(){
		String logMessage = "七陌-查询坐席状态";
		
		String currDate = DateUtils.getDateStr(DateUtils.DATETIME_FMT);
		String authStr = ACCOUNT + ":" + currDate;
		String authorization = new BASE64Encoder().encode(authStr.getBytes());
		System.out.println("-----------authorization----------:"+ authorization);
		String sig = MD5Util.md5(ACCOUNT + API_SECRET + currDate);
		
		// http://apis.7moor.com/v20160818/user/queryUserState/N00000000556?sig=41276A8E7767352A0FE7456D20F03D3
		
		String url = "http://apis.7moor.com/v20160818/user/queryUserState/"+ ACCOUNT +"?sig="+ sig;
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("exten", "8001");
		
		HttpRequest.sendPost7m(url, authorization, JSON.toJSONString(paramMap), logMessage);
	}
	
	
	
	
}
