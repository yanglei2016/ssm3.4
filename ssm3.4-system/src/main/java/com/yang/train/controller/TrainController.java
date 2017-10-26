package com.yang.train.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.yang.common.tools.DateUtils;
import com.yang.common.tools.json.GsonUtils;
import com.yang.common.vo.ResponseVo;
import com.yang.ssm.utils.ResponseUtils;
import com.yang.train.entity.NewTrain;
import com.yang.train.entity.Passenger;
import com.yang.train.service.TrainService;
import com.yang.train.util.Cookie;
import com.yang.train.util.CookieUtil;
import com.yang.train.util.HttpsRequestNg;

@Controller
@RequestMapping("train/index")
public class TrainController extends BaseController {
	
	/**logger日志*/
	private static final Logger logger = LoggerFactory
			.getLogger(TrainController.class);

	// 首页
	@RequestMapping
	public String index(Model model) {
		model.addAttribute("startDate", DateUtils.getCurrentDate());
		model.addAttribute("minDate", DateUtils.getCurrentDate());
		model.addAttribute("maxDate", DateUtils.getDateByNum(DateUtils.getCurrentDate(), 29));
		return "train/index";
	}

	// 查询列车经停站
	@RequestMapping("/queryMyOrder")
	public String queryMyOrder(Model model) throws IOException {
		model.addAttribute("orderNoComplete", TrainService.queryMyOrderNoComplete());
		model.addAttribute("gOrderList", TrainService.queryMyOrder("G"));
		model.addAttribute("hOrderList", TrainService.queryMyOrder("H"));
		return "train/orderList";
	}

	// 查询列车经停站
	@ResponseBody
	@RequestMapping("/queryByTrainNo")
	public JSONObject queryByTrainNo(HttpServletRequest request, String trainNo, String fromStation, String toStation,
			String startDate) throws IOException {
		JSONObject result = TrainService.queryByTrainNo(trainNo, fromStation, toStation, startDate);
		return result;
	}

	// 登录
	@RequestMapping("/loginAysnSuggest.do")
	public void loginAysnSuggest(HttpServletRequest request, HttpServletResponse response, String user_name,
			String password, String randCode) throws IOException {
		ResponseVo responseVo = TrainService.loginAysnSuggest(user_name, password, randCode);
		if(ResponseVo.SUCCES_CODE.equals(responseVo.getRespCode())){
			Map<String, Cookie> cookies = HttpsRequestNg.getHttpClient().cookies;
			Set<Map.Entry<String, Cookie>> entrys = cookies.entrySet();
			for (Map.Entry<String, Cookie> entry : entrys) {
				Cookie cookie = entry.getValue();
				CookieUtil.setCookie(response, cookie.getName(), cookie.getValue());
			}
			String string = new String(HttpsRequestNg.getHttpClient().doPost("https://kyfw.12306.cn/otn/login/userLogin"));
			//logger.info("userLogin返回：{}", string);
			String reg = "<span style=\"width:50px;\">[\u4e00-\u9fa5]{0,100}</span>";
			Matcher m = Pattern.compile(reg).matcher(string);
			String username = "";
			while (m.find()) {
				String r = m.group().trim();
				username = r.trim() != "" ? r.split("\">")[1] : "";
			}
			HttpSession session = request.getSession();
			username = username.substring(0, username.length() - 7);
			session.setAttribute("username", username);
			responseVo.setData(username);
		}
		logger.info("Ajax返回：{}", GsonUtils.toJsonString(responseVo));
		ResponseUtils.renderHtmlJson(response, GsonUtils.toJsonString(responseVo));
	}

	// 退出登录
	@ResponseBody
	@RequestMapping("/loginOut")
	public String loginOut(HttpServletRequest request) throws IOException {
		clearSession(request);
		String result = new String(HttpsRequestNg.getHttpClient().doPost("https://kyfw.12306.cn/otn/login/loginOut"));
		logger.info("loginOut----" + result);
		return "1";
	}

	@RequestMapping("/login.do")
	public String login(Model model, HttpServletRequest request) throws IOException {
		//clearSession(request);
		return "train/login";
	}

	@RequestMapping("/img.do")
	public String img(Model model, @RequestParam(defaultValue = "login") String moduled) throws IOException {
		model.addAttribute("moduled", moduled);
		return "train/img";
	}

	// 预提交订单
	@RequestMapping("/submitOrderRequest.do")
	public void submitOrderRequest(HttpServletRequest request, HttpServletResponse response, String secretStr, String train_date,
			String query_from_station_name, String query_to_station_name) throws IOException {
		JSONObject submitOrderRequest = TrainService.submitOrderRequest(secretStr, train_date, query_from_station_name,
				query_to_station_name);
		ResponseUtils.renderHtmlJson(response, submitOrderRequest.toString());
	}

	// 检查订单有效
	@ResponseBody
	@RequestMapping("/checkOrderInfo")
	public String checkOrderInfo(HttpServletRequest request, String randCode, String oldPassengerStr,
			String passengerTicketStr, String repeat_submit_token, String train_date, String train_no,
			String stationTrainCode, String seatType, String fromStationTelecode, String toStationTelecode,
			String leftTicket, String key_check_isChange, String train_location) throws IOException {
		String result = TrainService.checkOrderInfo(randCode, oldPassengerStr, passengerTicketStr, repeat_submit_token, train_date, train_no, stationTrainCode, seatType, fromStationTelecode, toStationTelecode, leftTicket, key_check_isChange, train_location);
		return result == null ? "下单出错" : result;
	}

	@ResponseBody
	@RequestMapping("/queryOrderWaitTime")
	public String queryOrderWaitTime(HttpServletRequest request, String repeat_submit_token) throws IOException {
		String result = TrainService.queryOrderWaitTime(repeat_submit_token);
		return JSON.parseObject(result).toString();
	}

	// 取消订单
	@ResponseBody
	@RequestMapping("/cancelNoCompleteMyOrder")
	public String cancelNoCompleteMyOrder(HttpServletRequest request, String orderId) throws IOException {
		Boolean result = TrainService.cancelNoCompleteMyOrder(orderId);
		return result.toString();
	}

	// 查询未完成订单
	@ResponseBody
	@RequestMapping("/queryMyOrderNoComplete")
	public JSONArray queryMyOrderNoComplete(HttpServletRequest request) throws IOException {
		JSONArray queryMyOrderNoComplete = TrainService.queryMyOrderNoComplete();
		return queryMyOrderNoComplete;
	}

	// 获取乘客信息
	@RequestMapping("/passengers.do")
	public void passengers(HttpServletRequest request, HttpServletResponse response) throws IOException {
		List<Passenger> passengers = TrainService.passengers();
		logger.info("乘客信息返回：{}", GsonUtils.toJsonString(passengers));
		ResponseUtils.renderHtmlJson(response, GsonUtils.toJsonString(passengers));
	}

	// 检查用户登录是否有效
	@RequestMapping("/checkUser.do")
	public void checkUser(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
		Boolean checkUser = TrainService.checkUser();
		ResponseUtils.renderHtmlJson(response, GsonUtils.toJsonString(checkUser));
	}

	// 校验验证码
	@RequestMapping("/checkRandCodeAnsyn.do")
	public void checkRandCodeAnsyn(HttpServletRequest request, HttpServletResponse response, String randCode,
			@RequestParam(value = "repeat_submit_token", required = false) String repeat_submit_token)
			throws IOException {
		JSONObject checkRandCodeAnsyn = TrainService.checkRandCodeAnsyn(randCode, repeat_submit_token);
		logger.info("校验验证码返回：{}", GsonUtils.toJsonString(checkRandCodeAnsyn));
		ResponseUtils.renderHtmlJson(response, GsonUtils.toJsonString(checkRandCodeAnsyn));
	}

	// 获取验证码
	@ResponseBody
	@RequestMapping("/getPassCodeNew.do")
	public void getPassCodeNew(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(defaultValue = "login") String module) throws IOException {
		byte[] doGet = TrainService.getPassCodeNew(module);
		response.setHeader("Pragma", "no-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);
		response.setContentType("image/jpeg");
		InputStream buffin = new ByteArrayInputStream(doGet);
		BufferedImage img = ImageIO.read(buffin);
		// 将图像输出到Servlet输出流中。
		ServletOutputStream sos = response.getOutputStream();
		ImageIO.write(img, "jpeg", sos);
		sos.close();
	}

	// 查询余票
	@RequestMapping("query.do")
	public String train(HttpServletRequest request, Model model, String fromStation, String toStation,
			String startDate) {
		if(StringUtils.isBlank(startDate)){
			startDate = DateUtils.getCurrentDate();
		}
		
		List<NewTrain> queryTrain = null;
		if(StringUtils.isNotBlank(fromStation) && StringUtils.isNotBlank(toStation)){
			try {
				queryTrain = TrainService.queryTrain(fromStation, toStation, startDate);
				if(queryTrain != null && queryTrain.size() > 0){
					logger.info("余票信息："+ GsonUtils.toJsonString(queryTrain));
				}
				
			} catch (Exception e) {
				logger.error("查询失败", e);
			}
		}
		model.addAttribute("ticketsList", queryTrain);
		model.addAttribute("startDate", startDate);
		model.addAttribute("minDate", DateUtils.getCurrentDate());
		model.addAttribute("maxDate", DateUtils.getDateByNum(DateUtils.getCurrentDate(), 29));
		return "train/tickets_list";
	}

}
