package com.yang.train.aotutickest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MainManager {

	/**logger日志*/
	private static final Logger logger = LoggerFactory.getLogger(MainManager.class);
	
	public static void main(String[] args) {
		Login.login();
	}
}
