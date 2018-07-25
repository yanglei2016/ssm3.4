package com.yang;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Scanner;

import org.apache.commons.lang3.StringUtils;

public class Read {

	public static void main(String args[]) throws Exception {
		String skipString = "第五百二十七章";
		String path = "F:/test/log/ls.txt";
		readLog(skipString, path);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	private static final String HANDLE_KEY = "f";
	
	@SuppressWarnings("resource")
	public static void readLog(String skipString, String path) throws Exception {
		File file = new File(path);
		InputStreamReader is = new InputStreamReader(new FileInputStream(file));
        BufferedReader br = new BufferedReader(is);
        String currentLine = "";
        while((currentLine = br.readLine()) != null){
        	//System.out.println(currentLine);
        	if(StringUtils.isBlank(currentLine)){
        		continue;
        	}
        	if(currentLine.indexOf(skipString) != -1){
        		System.out.print(currentLine);
        		while(true){
        			String content = br.readLine();
        			if(StringUtils.isBlank(content)){
                		continue;
                	}
        			Scanner sc = new Scanner(System.in);  
        			String inStr = sc.next();  
        			if(StringUtils.isNotBlank(inStr) && HANDLE_KEY.equals(inStr)){
        				printContent(content);
        			}else{
        				System.out.print("HttpClient工具类[line-236] - 租购-订单列表 - 请求地址：http://10.91.138.102:53013/route/los/fzuche-intf-routes.dubboApi");
        				System.out.print("HttpClient工具类[line-236] - 租购-订单列表 - 请求参数：{\"accesskey\":\"36261e6a-ab2c-476c-ae25-23ffa2abf37a\",\"bizNo\":\"fzuche-riskcontrol.queryOrderInfo4Partner\",\"method\":\"post\",\"params\":{\"startIndex\":1},\"reqId\":\"e2f86419-86e1-4aa6-a1ae-82ee8274a6eb\",\"tonce\":\"1520987903057\"}");
        				System.out.print("HttpClient工具类[line-236] - 租购-订单列表 - 返回结果：{\"model\":{\"responseCode\":\"000000\",\"list\":[{\"finalPayment\":0.00,\"monthRent\":1505.82,\"applyTime\":1520934397000,\"custMobileNo\":\"14255556666\",\"prdType\":\"PD1050\",\"code\":\"ZGSQ2018031300004\",\"zgStatus\":\"正常\",\"deptNo\":\"BM510100000004\",\"riskCheckedCars\":[{\"deptNo\":\"BM510100000004\",\"deptName\":\"金沙店\",\"colour\":\"7\",\"carNo\":\"鄂ZB60032\",\"modelName\":\"起亚K2/自动1.4L/三厢/5座/2015款\",\"carModel\":\"CM20161217104740426061f9d725234241fc8f21bd767f709c8222064465\",\"cityId\":\"510100\",\"cityName\":\"成都市\",\"colourName\":\"白\"}],\"firstPayment\":7900.00,\"term\":36,\"zgStatusCode\":\"N\",\"signContractDate\":1520934985000,\"deliveryDate\":1528300800000,\"custName\":\"二五八万\",\"productName\":\"成都-灵活租（起亚K2）\",\"custType\":\"01\"},{\"finalPayment\":0.00,\"monthRent\":1447.18,\"applyTime\":1520907134000,\"custMobileNo\":\"14200001234\",\"prdType\":\"PD1090\",\"code\":\"ZGSQ2018031300002\",\"zgStatus\":\"逾期\",\"deptNo\":\"BM510100000004\",\"riskCheckedCars\":[{\"deptNo\":\"BM510100000004\",\"deptName\":\"金沙店\",\"colour\":\"7\",\"carNo\":\"鄂ZB70019\",\"modelName\":\"标致301/自动1.6L/三厢/5座/2016款\",\"carModel\":\"CM201612171049485890647602d53fa34c13939889adc2221fba4230226\",\"cityId\":\"510100\",\"cityName\":\"成都市\",\"colourName\":\"白\"}],\"firstPayment\":6000.00,\"term\":36,\"zgStatusCode\":\"O\",\"signContractDate\":1520907913000,\"deliveryDate\":1521216000000,\"custName\":\"支付宝\",\"productName\":\"成都-灵活租\",\"custType\":\"01\"},{\"finalPayment\":0.00,\"monthRent\":1447.18,\"applyTime\":1520851008000,\"custMobileNo\":\"14200000036\",\"prdType\":\"PD1090\",\"code\":\"ZGSQ2018031200003\",\"zgStatus\":\"逾期\",\"deptNo\":\"BM510100000004\",\"riskCheckedCars\":[{\"deptNo\":\"BM510100000004\",\"deptName\":\"金沙店\",\"colour\":\"7\",\"carNo\":\"鄂ZB70021\",\"modelName\":\"标致301/自动1.6L/三厢/5座/2016款\",\"carModel\":\"CM201612171049485890647602d53fa34c13939889adc2221fba4230226\",\"cityId\":\"510100\",\"cityName\":\"成都市\",\"colourName\":\"白\"}],\"firstPayment\":6000.00,\"term\":36,\"zgStatusCode\":\"O\",\"signContractDate\":1520851686000,\"deliveryDate\":1520956800000,\"custName\":\"支付\",\"productName\":\"成都-灵活租\",\"custType\":\"01\"},{\"finalPayment\":0.00,\"monthRent\":6800.00,\"applyTime\":1520825808000,\"custMobileNo\":\"14174590765\",\"prdType\":\"PD5060\",\"code\":\"ZGSQ2018031200002\",\"deptNo\":\"BM320100000028\",\"riskCheckedCars\":[{\"deptNo\":\"BM320100000028\",\"deptName\":\"禄口机场店\",\"colour\":\"5\",\"carNo\":\"苏AJ87UY\",\"modelName\":\"观致5SUV/1.6T自动领先型/5座/2018款\",\"carModel\":\"CM2017102016221693908fe7575153cc4834ab333c7d83d7488a15451345\",\"cityId\":\"320100\",\"cityName\":\"南京市\",\"colourName\":\"绿\"}],\"firstPayment\":69000.00,\"term\":11,\"zgStatusCode\":\"N-T\",\"signContractDate\":1520835591000,\"deliveryDate\":1520784000000,\"custName\":\"绒姿今三\",\"productName\":\"融资8万江苏观5一年\",\"custType\":\"01\"},{\"finalPayment\":0.00,\"monthRent\":2300.00,\"applyTime\":1520493072000,\"custMobileNo\":\"14098754376\",\"prdType\":\"PD1090\",\"code\":\"ZGSQ2018030800006\",\"zgStatus\":\"正常\",\"deptNo\":\"BM510100000004\",\"riskCheckedCars\":[{\"deptNo\":\"BM510100000004\",\"deptName\":\"金沙店\",\"colour\":\"4\",\"carNo\":\"川AEA864\",\"modelName\":\"大众朗逸/自动1.6L/三厢/5座/2013款\",\"carModel\":\"CM201704211038288210c1cbc22fce00476799860c38faa683bf10530579\",\"cityId\":\"510100\",\"cityName\":\"成都市\",\"colourName\":\"蓝\"}],\"firstPayment\":9600.00,\"term\":35,\"zgStatusCode\":\"N\",\"signContractDate\":1520496482000,\"deliveryDate\":1523116800000,\"custName\":\"灵活三八猪\",\"productName\":\"成都-灵活租\",\"custType\":\"01\"},{\"finalPayment\":0.00,\"monthRent\":410.00,\"applyTime\":1520492584000,\"custMobileNo\":\"14087964523\",\"prdType\":\"PD4010\",\"code\":\"ZGSQ2018030800005\",\"deptNo\":\"BM510100000004\",\"riskCheckedCars\":[{\"deptNo\":\"BM510100000004\",\"deptName\":\"金沙店\",\"colour\":\"7\",\"carNo\":\"鄂ZB60007\",\"modelName\":\"起亚K2/自动1.4L/三厢/5座/2015款\",\"carModel\":\"CM20161217104740426061f9d725234241fc8f21bd767f709c8222064465\",\"cityId\":\"510100\",\"cityName\":\"成都市\",\"colourName\":\"白\"}],\"firstPayment\":17000.00,\"term\":11,\"zgStatusCode\":\"N-T\",\"signContractDate\":1520496493000,\"deliveryDate\":1523116800000,\"custName\":\"新无忧K2三八猪\",\"productName\":\"新无忧租（起亚K2一年期）\",\"custType\":\"01\"},{\"finalPayment\":0.00,\"monthRent\":0,\"applyTime\":1520492346000,\"custMobileNo\":\"14096785463\",\"prdType\":\"PD1020\",\"code\":\"ZGSQ2018030800004\",\"deptNo\":\"BM510100000004\",\"riskCheckedCars\":[{\"deptNo\":\"BM510100000004\",\"deptName\":\"金沙店\",\"colour\":\"8\",\"carNo\":\"鄂ZB70009\",\"modelName\":\"标致301/自动1.6L/三厢/5座/2016款\",\"carModel\":\"CM201612171049485890647602d53fa34c13939889adc2221fba4230226\",\"cityId\":\"510100\",\"cityName\":\"成都市\",\"colourName\":\"棕\"}],\"firstPayment\":31000.00,\"term\":11,\"zgStatusCode\":\"N-T\",\"signContractDate\":1520496507000,\"deliveryDate\":1523116800000,\"custName\":\"无忧三八猪\",\"productName\":\"零利息一年新版\",\"custType\":\"01\"},{\"finalPayment\":0.00,\"monthRent\":3618.18,\"applyTime\":1520490811000,\"custMobileNo\":\"14085674523\",\"prdType\":\"PD5070\",\"code\":\"ZGSQ2018030800003\",\"deptNo\":\"BM510100000004\",\"riskCheckedCars\":[{\"deptNo\":\"BM510100000004\",\"deptName\":\"金沙店\",\"colour\":\"8\",\"carNo\":\"川A6587S\",\"modelName\":\"别克GL8/自动2.4L/MPV/7座/2014款\",\"carModel\":\"CM20161217115008886057befb21a13144b6918b8084b43b132e57894499\",\"cityId\":\"510100\",\"cityName\":\"成都市\",\"colourName\":\"棕\"}],\"firstPayment\":69800.00,\"term\":23,\"zgStatusCode\":\"N-T\",\"signContractDate\":1520496517000,\"deliveryDate\":1523116800000,\"custName\":\"低息8万江苏观5一年2\",\"productName\":\"融资8万江苏观5两年\",\"custType\":\"01\"},{\"finalPayment\":0.00,\"monthRent\":0,\"applyTime\":1520414018000,\"custMobileNo\":\"14086723654\",\"prdType\":\"PD5010\",\"code\":\"ZGSQ2018030700010\",\"deptNo\":\"BM510100000004\",\"riskCheckedCars\":[{\"deptNo\":\"BM510100000004\",\"deptName\":\"金沙店\",\"colour\":\"5\",\"carNo\":\"川A94G42\",\"modelName\":\"别克GL8/自动2.4L/MPV/7座/2014款\",\"carModel\":\"CM20161217115008886057befb21a13144b6918b8084b43b132e57894499\",\"cityId\":\"510100\",\"cityName\":\"成都市\",\"colourName\":\"绿\"}],\"firstPayment\":78000.00,\"term\":11,\"zgStatusCode\":\"N-T\",\"signContractDate\":1520476197000,\"deliveryDate\":1520438400000,\"custName\":\"无忧猪观5\",\"productName\":\"无忧租（观致5）\",\"custType\":\"01\"},{\"finalPayment\":0.00,\"monthRent\":6000.00,\"applyTime\":1520413480000,\"custMobileNo\":\"14096754376\",\"prdType\":\"PD5060\",\"code\":\"ZGSQ2018030700009\",\"deptNo\":\"BM510100000004\",\"riskCheckedCars\":[{\"deptNo\":\"BM510100000004\",\"deptName\":\"金沙店\",\"colour\":\"4\",\"carNo\":\"川A87024\",\"modelName\":\"别克GL8/自动2.4L/MPV/7座/2014款\",\"carModel\":\"CM20161217115008886057befb21a13144b6918b8084b43b132e57894499\",\"cityId\":\"510100\",\"cityName\":\"成都市\",\"colourName\":\"蓝\"}],\"firstPayment\":69000.00,\"term\":10,\"zgStatusCode\":\"N-T\",\"signContractDate\":1520476212000,\"deliveryDate\":1520438400000,\"custName\":\"低息8万江苏观5一年\",\"productName\":\"融资8万江苏观5一年\",\"custType\":\"01\"}],\"responseMsg\":\"Successful\",\"totalPage\":318},\"responseCode\":\"000000\",\"responseMsg\":\"成功\"}");
        			}
        		}
        	}
        }
        br.close();
	}
	
	@SuppressWarnings("resource")
	public static void printContent(String content){
		if(content.length() > 70){
			System.out.print(content.substring(0, 70));
			Scanner sc = new Scanner(System.in);  
			String inStr = sc.next();  
			if(HANDLE_KEY.equals(inStr)){
				printContent(content.substring(70));
			}
		}else{
			System.out.print(content);
		}
	}
}
