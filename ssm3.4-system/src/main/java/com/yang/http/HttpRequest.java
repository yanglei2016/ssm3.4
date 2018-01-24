package com.yang.http;

import java.util.Map;

import org.apache.http.Header;
import org.apache.http.client.HttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.yang.http.builder.HCB;
import com.yang.http.common.HttpConfig;
import com.yang.http.common.HttpHeader;
import com.yang.http.exception.HttpProcessException;

/**
 * http请求处理
 *
 */
public class HttpRequest {

	private static final Logger logger = LoggerFactory.getLogger(HttpRequest.class);
	
	public static String sendPost(String url, String paramJson, String logMessage){
		Header[] header = HttpHeader.getInstance()
				.contentType("application/json")
				.accept("*/*")
				.build();
		
		HttpClient httpClient = HCB.getInstance().timeout(5000).build();
		
		HttpConfig httpConfig = HttpConfig.getInstance()
				.logMessage(logMessage)
				.url(url)
				.headers(header)
				.client(httpClient)
				.json(paramJson)
				.encoding("utf-8");
		
		String resultMsg = "";
		try {
			resultMsg = HttpClientUtil.post(httpConfig);
		} catch (HttpProcessException e) {
			logger.error("http请求异常", e);
		}
		return resultMsg;
	}
	
	public static String sendPost(String url, Map<String, Object> paramMap, String logMessage){
		Header[] header = HttpHeader.getInstance()
				.accept("*/*")
				.build();
		
		HttpClient httpClient = HCB.getInstance().timeout(5000).build();
		
		HttpConfig httpConfig = HttpConfig.getInstance()
				.logMessage(logMessage)
				.url(url)
				.headers(header)
				.client(httpClient)
				.map(paramMap)
				.encoding("utf-8");
		
		String resultMsg = "";
		try {
			resultMsg = HttpClientUtil.post(httpConfig);
		} catch (HttpProcessException e) {
			logger.error("http请求异常", e);
		}
		return resultMsg;
	}
}
