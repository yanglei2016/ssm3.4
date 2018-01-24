package com.yang.http;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

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
	
}
