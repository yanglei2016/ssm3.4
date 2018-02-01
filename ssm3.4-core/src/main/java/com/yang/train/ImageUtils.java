package com.yang.train;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

@SuppressWarnings("restriction")
public class ImageUtils {

	public static String getBase64Image(byte[] imgByte) {
		BASE64Encoder encoder = new BASE64Encoder();
		return encoder.encode(imgByte);
	}

	public static boolean generateImage(String imgStr, String filename) {
		if (imgStr == null) {
			return false;
		}
		BASE64Decoder decoder = new BASE64Decoder();
		try {
			// 解密
			byte[] b = decoder.decodeBuffer(imgStr);
			// 处理数据
			for (int i = 0; i < b.length; ++i) {
				if (b[i] < 0) {
					b[i] += 256;
				}
			}
			OutputStream out = new FileOutputStream("F:/imgs/" + filename);
			out.write(b);
			out.flush();
			out.close();
			return true;
		} catch (IOException e) {
			e.printStackTrace();
		}
		return false;

	}

}
