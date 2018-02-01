package com.yang.http;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

import com.yang.common.tools.MD5Util;
import com.yang.http.common.HttpConfig;
import com.yang.http.exception.HttpProcessException;

public class HttpClientTest extends BaseTest {

	
	@Test
	public void getTest() throws HttpProcessException {
		String url = "https://github.com/Arronlong/httpclientutil";
		
		String resultMsg = HttpClientUtil.get(HttpConfig.getInstance().url(url));
		
		System.out.println(resultMsg);
	}
	
	
	@Test
	public void postTest(){
		String logMessage = "根据手机号查询会员详情";
		String url = "http://10.91.138.100:54030/los/zuche-intf-route-rent.SAORoute";
		String paramJson = "{\"sign\":\"b3d39bf588ec11d36c02f04d756913d1\",\"params\":{\"phone\":\"18813953815\"},\"bizNo\":\"zuche-customer-user.findUserByMobilePhone\",\"_channel_id\":\"30\"}";
		
		HttpRequest.sendPost(url, paramJson, logMessage);
	}
	
	
	@Test
	public void postMapTest() {
		String logMessage = "分时租赁-订单反馈";
		String url = "http://218.17.205.131:54018/ldy-gateway/ldy/httpSeviceHandler.do";
		
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("params", "{\"sign\":\"CD4C6BFCCC639834E71B8B2EE9C2E1D3\",\"startTime\":1516579200,\"rowIndex\":1,\"pageSize\":100,\"endTime\":1516752000}");
		paramMap.put("servicePath", "/ldy-mgt/crm/customer/queryCustomerFeedback.do");
		
		HttpRequest.sendPost(url, paramMap, logMessage);
	}
	
	
	
	private static final String APP_KEY = "dc2b7e0a8f7abd7a50f3a3ca60ad8a15";
	private static final String APP_SECRET = "xiMqxH";
	
	@Test
	public void callTest(){
		String logMessage = "米糠云-示忙/示闲";
		//String url = "http://api.mixcaller.com/v3/?m=interfaces&c=cti&a=index&act=setdnd&appkey=74349f03b46e48df2b41aa60791c1a71&sign=552880952ce7090f35636f86f12e49f8&time=1450159763&extension=80001&dnd=3";
		String act = "setdnd";
		String extension = "50901";
		String dnd = "0";
		String validateStr = "interfaces" + "cti" + act + extension + dnd;
		
		String time = String.valueOf(new Date().getTime() / 1000);
		String sign = MD5Util.md5(APP_KEY + validateStr + APP_SECRET + time);
		sign = sign.toLowerCase();
		String url = "http://api.mixcaller.com/v3/?m=interfaces&c=cti&a=index&act="+ act +"&appkey="+ APP_KEY +"&sign="+ sign +"&time="+ time +"&extension="+ extension +"&dnd="+ dnd;
		
		HttpRequest.sendGet(url, logMessage);
	}
	
	@Test
	public void callStatusTest(){
		String logMessage = "米糠云-获取分机状态";
		//String url = "http://api.mixcaller.com/v3/?m=interfaces&c=cti&a=index&act=setdnd&appkey=74349f03b46e48df2b41aa60791c1a71&sign=552880952ce7090f35636f86f12e49f8&time=1450159763&extension=80001&dnd=3";
		String act = "extenstatus";
		String extension = "80001";
		String validateStr = "interfaces" + "cti" + act + extension;
		
		String time = String.valueOf(new Date().getTime() / 1000);
		String sign = MD5Util.md5(APP_KEY + validateStr + APP_SECRET + time);
		sign = sign.toLowerCase();
		
		String url = "http://api.mixcaller.com/v3/?m=interfaces&c=cti&a=index&act="+ act +"&appkey="+ APP_KEY +"&sign="+ sign +"&time="+ time +"&extension="+ extension;
		
		HttpRequest.sendGet(url, logMessage);
	}
	
	
	@Test
	public void popScreenTest(){
		String logMessage = "米糠云-获取分机状态";
		//String url = "http://api.mixcaller.com/v3/?m=interfaces&c=cti&a=index&act=popscreen&appkey=6fec5b9c7f3d*********c0b89af84d&sign=eca8e40f7da8afabdf4ce20b71f4ab3f&time=1480661730&extension=80001&open_type=2&mixcallback=yourJsFunction";
		String act = "popscreen";
		String extension = "80001";
		String open_type = "2";
		String mixcallback = "functionName";
		
		
		String validateStr = "interfaces" + "cti" + act + extension;
		
		String time = String.valueOf(new Date().getTime() / 1000);
		String sign = MD5Util.md5(APP_KEY + validateStr + APP_SECRET + time);
		sign = sign.toLowerCase();
		
		String url = "http://api.mixcaller.com/v3/?m=interfaces&c=cti&a=index&act="+ act 
				+"&appkey="+ APP_KEY +"&sign="+ sign +"&time="+ time +"&extension="+ extension 
				+"&open_type="+ open_type +"&mixcallback="+ mixcallback;
		
		HttpRequest.sendGet(url, logMessage);
	}
	
	
	
}
