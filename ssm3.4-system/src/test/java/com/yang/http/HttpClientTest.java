package com.yang.http;

import org.apache.http.Header;
import org.apache.http.client.HttpClient;
import org.junit.Test;

import com.yang.http.builder.HCB;
import com.yang.http.common.HttpConfig;
import com.yang.http.common.HttpHeader;
import com.yang.http.exception.HttpProcessException;

public class HttpClientTest extends BaseTest {

	
	@Test
	public void getTest() throws HttpProcessException {
		String url = "https://github.com/Arronlong/httpclientutil";
		
		String resultMsg = HttpClientUtil.get(HttpConfig.getInstance().url(url));
		
		System.out.println(resultMsg);
	}
	
	
	@Test
	public void postTest() throws HttpProcessException {
		String url = "http://10.91.138.100:54030/los/zuche-intf-route-rent.SAORoute";
		
		Header[] header = HttpHeader.getInstance()
				.contentType("application/json")
				.accept("*/*")
				.build();
		
		HttpClient httpClient = HCB.getInstance().timeout(5000).build();
		String json = "{\"sign\":\"b3d39bf588ec11d36c02f04d756913d1\",\"params\":{\"phone\":\"18813953815\"},\"bizNo\":\"zuche-customer-user.findUserByMobilePhone\",\"_channel_id\":\"30\"}";
		
		HttpConfig httpConfig = HttpConfig.getInstance()
				.logMessage("根据手机号查询会员详情")
				.url(url)
				.headers(header)
				.client(httpClient)
				.json(json)
				.encoding("utf-8");
		
		String resultMsg = HttpClientUtil.post(httpConfig);
		
	}
	
	
	
}
