package com.yang.http;

import java.util.Map;

import org.apache.http.Header;
import org.apache.http.client.CookieStore;
import org.apache.http.client.HttpClient;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.cookie.Cookie;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.cookie.BasicClientCookie;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.yang.http.builder.HCB;
import com.yang.http.common.HttpConfig;
import com.yang.http.common.HttpCookies;
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
		
		HttpClient httpClient = HCB.getInstance().timeout(5000, 1000, 20000).build();
		
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
		
		HttpClient httpClient = HCB.getInstance().timeout(5000, 1000, 200000).build();
		
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
	
	public static String sendPostCookie(String url, Map<String, Object> paramMap, String logMessage){
		Header[] header = HttpHeader.getInstance()
				.accept("*/*")
				.build();
		
		HttpClient httpClient = HCB.getInstance().timeout(5000, 1000, 200000).build();
		
        
        //定义cookie存储
  		HttpClientContext context = new HttpClientContext();
  		CookieStore cookieStore = new BasicCookieStore();
  		cookieStore.addCookie(new BasicClientCookie("_jc_save_fromDate", "2018-01-27"));
        cookieStore.addCookie(new BasicClientCookie("_jc_save_toStation", "%u5170%u5DDE%u897F%2CLAJ"));
        cookieStore.addCookie(new BasicClientCookie("_jc_save_toDate", "2018-01-22"));
        cookieStore.addCookie(new BasicClientCookie("_jc_save_wfdc_flag", "dc"));
        cookieStore.addCookie(new BasicClientCookie("_jc_save_fromStation", "%u4E0A%u6D77%u8679%u6865%2CAOH"));
  		context.setCookieStore(cookieStore);
		
		HttpConfig httpConfig = HttpConfig.getInstance()
				.logMessage(logMessage)
				.url(url)
				.headers(header)
				.context(context)
				.client(httpClient)
				.map(paramMap)
				.encoding("utf-8");
		
		String resultMsg = "";
		try {
			resultMsg = HttpClientUtil.post(httpConfig);
			//打印参数，可以看到cookie里已经有值了。
			for (Cookie cookie : cookieStore.getCookies()) {
				System.out.println(cookie.getName()+"-11-"+cookie.getValue());
			}
		} catch (HttpProcessException e) {
			logger.error("http请求异常", e);
		}
		return resultMsg;
	}
	
	public static String sendGet(String url, String logMessage){
		Header[] header = HttpHeader.getInstance()
				.build();
		
		HttpClient httpClient = HCB.getInstance().timeout(5000, 1000, 20000).build();
		
		HttpCookies cookies = HttpCookies.getInstance();
		
		HttpConfig httpConfig = HttpConfig.getInstance()
				.logMessage(logMessage)
				.url(url)
				.headers(header)
				.context(cookies.getContext())
				.client(httpClient)
				.encoding("utf-8");
		
		String resultMsg = "";
		try {
			resultMsg = HttpClientUtil.get(httpConfig);
			
			//打印参数，可以看到cookie里已经有值了。
			for (Cookie cookie : cookies.getCookieStore().getCookies()) {
				System.out.println(cookie.getName()+"-22-"+cookie.getValue());
			}
			
		} catch (HttpProcessException e) {
			logger.error("http请求异常", e);
		}
		return resultMsg;
	}
	
	public static byte[] sendGetByteArray(String url, String logMessage){
		Header[] header = HttpHeader.getInstance().build();
		
		HttpClient httpClient = HCB.getInstance().timeout(5000, 1000, 20000).build();
		
		HttpConfig httpConfig = HttpConfig.getInstance()
				.logMessage(logMessage)
				.url(url)
				.headers(header)
				.client(httpClient)
				.encoding("utf-8");
		
		byte[] resultMsg = null;
		try {
			resultMsg = HttpClientUtil.getByteArray(httpConfig);
		} catch (HttpProcessException e) {
			logger.error("http请求异常", e);
		}
		return resultMsg;
	}
	
	
	public static String sendPost7m(String url, String authorization, String paramJson, String logMessage){
		Header[] header = HttpHeader.getInstance()
				.contentType("application/json;charset=utf-8")
				.accept("application/json")
				.authorization(authorization)
				.build();
		
		HttpClient httpClient = HCB.getInstance().timeout(5000, 1000, 20000).build();
		
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
}
