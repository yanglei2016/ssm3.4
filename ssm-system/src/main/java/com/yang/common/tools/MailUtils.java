package com.yang.common.tools;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.log4j.Logger;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import com.yang.ssm.common.constants.PlatFormConstants;

/**
 * 邮件发送工具类
 * @author yanglei 2017年7月4日 下午3:15:05
 */
public class MailUtils {

	private Logger logger = Logger.getLogger(getClass());
	
	private JavaMailSender mailSender;
	private SimpleMailMessage simpleMailMessage;
	private String mailTo; //收件人，多个,分割（spring属性注入）
	private String mailFrom; //发件人（spring属性注入）

	public void setMailSender(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}
	public void setSimpleMailMessage(SimpleMailMessage simpleMailMessage) {
		this.simpleMailMessage = simpleMailMessage;
	}
	public void setMailTo(String mailTo) {
		this.mailTo = mailTo;
	}
	public void setMailFrom(String mailFrom) {
		this.mailFrom = mailFrom;
	}

	/**
	 * 获取收件人
	 * 
	 * @author yanglei 2017年7月4日 下午4:13:36
	 */
	public List<String> getRecipients() {
		String[] mailToArr = mailTo.trim().split(",");
		List<String> recipients = new ArrayList<String>();
		for (String reci : mailToArr) {
			recipients.add(reci.trim());
		}
		return recipients;
	}

	/**
	 * 单发
	 * 
	 * @param recipient 收件人
	 * @param subject 主题
	 * @param content 内容
	 */
	public void send(String recipient, String subject, String content) {
		String message = "单发邮件";
		logger.info(message + PlatFormConstants.MESSAGE_START);
		try {
			simpleMailMessage.setTo(recipient);
			simpleMailMessage.setSubject(subject);
			simpleMailMessage.setText(content);
			mailSender.send(simpleMailMessage);
			logger.info(message + "..........【成功】..........");
		} catch (Exception e) {
			logger.error(message + "..........【失败】..........", e);
		}
		logger.info(message + PlatFormConstants.MESSAGE_END);
	}

	/**
	 * 群发
	 * 
	 * @param recipients
	 *            收件人
	 * @param subject
	 *            主题
	 * @param content
	 *            内容
	 */
	public void send(List<String> recipients, String subject, String content) {
		String message = "群发邮件";
		logger.info(message + PlatFormConstants.MESSAGE_START);
		try {
			simpleMailMessage.setTo(recipients.toArray(new String[recipients.size()]));
			simpleMailMessage.setSubject(subject);
			simpleMailMessage.setText(content);
			mailSender.send(simpleMailMessage);
			logger.info(message + "..........【成功】..........");
		} catch (Exception e) {
			logger.error(message + "..........【失败】..........", e);
		}
		logger.info(message + PlatFormConstants.MESSAGE_END);
	}

	/**
	 * 群发（附件）
	 * 
	 * @param recipients
	 *            收件人
	 * @param subject
	 *            主题
	 * @param content
	 *            内容
	 * @param fileList
	 *            附件列表
	 * @author yanglei 2017年7月5日 上午8:46:06
	 */
	public void send(List<String> recipients, String subject, String content, List<File> fileList) {
		String message = "群发（附件）邮件";
		logger.info(message + PlatFormConstants.MESSAGE_START);
		try {
			MimeMessage mimeMessage = mailSender.createMimeMessage();
			MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

			mimeMessageHelper.setTo(recipients.toArray(new String[recipients.size()]));
			mimeMessageHelper.setFrom(mailFrom);
			mimeMessageHelper.setSubject(subject);
			mimeMessageHelper.setText(content);

			// 附件对象，添加进邮件helper内
			for (File file : fileList) {
				mimeMessageHelper.addAttachment(file.getName(), file);
			}
			mailSender.send(mimeMessage);
			logger.info(message + "..........【成功】..........");
		} catch (MessagingException e) {
			logger.error(message + "..........【构造邮件失败】..........", e);
		} catch (Exception e) {
			logger.error(message + "..........【失败】..........", e);
		}
		logger.info(message + PlatFormConstants.MESSAGE_END);
	}
}
