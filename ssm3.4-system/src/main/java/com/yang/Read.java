package com.yang;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Scanner;

import org.apache.commons.lang3.StringUtils;

public class Read {

	public static void main(String args[]) throws Exception {
		String skipString = "第358章";
		String path = "F:/test/log/yys.txt";
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
        			if(HANDLE_KEY.equals(inStr)){
        				printContent(content);
        			}else{
        				System.out.print("queryCarModelByModelList查询车型集合返回:{\"model\":{\"count\":2,\"UFO-SESSION-ID\":\"5b1f96951e9c4cedb71d67062975dcad\",\"list\":[{\"featureName\":\"自动挡|1.4|三厢|5|2015款\",\"emission\":\"1.4\",\"normalMaintenMileage\":7500.00,\"state\":\"1\",\"brandId\":\"PP2016111100004\",\"dateUpdated\":1496930402000,\"updatedBy\":\"周泽\",\"gasLabel\":\"0\",\"firstMaintenMileage\":4500.00,\"carModel\":\"CM20161217104740426061f9d725234241fc8f21bd767f709c8222064465\",\"modelName\":\"起亚K2/自动1.4L/三厢/5座/2015款\",\"createdBy\":\"联动云\",\"modelClass\":\"02\",\"tireSize\":\"175/70R14\",\"grade\":\"1\",\"brandCompany\":\"QY2016111100007\",\"dateCreated\":1481942860000,\"seats\":\"5\",\"carModelAcronym\":\"起亚K2\",\"modelLevel\":\"2\",\"gearType\":\"02\",\"compartment\":\"02\"},{\"featureName\":\"自动挡|1.6|三厢|5|2013款\",\"emission\":\"1.6\",\"normalMaintenMileage\":7500.00,\"state\":\"1\",\"brandId\":\"PP2016111100001\",\"dateUpdated\":1496930368000,\"updatedBy\":\"周泽\",\"gasLabel\":\"0\",\"firstMaintenMileage\":4500.00,\"carModel\":\"CM201704211038288210c1cbc22fce00476799860c38faa683bf10530579\",\"modelName\":\"大众朗逸/自动1.6L/三厢/5座/2013款\",\"createdBy\":\"fengyifu\",\"modelClass\":\"02\",\"tireSize\":\"195/65R15\",\"grade\":\"1\",\"brandCompany\":\"QY2016111100002\",\"dateCreated\":1492742309000,\"seats\":\"5\",\"carModelAcronym\":\"大众朗逸\",\"modelLevel\":\"2\",\"gearType\":\"02\",\"compartment\":\"02\"}]},\"responseCode\":\"000000\",\"responseMsg\":\"成功\"}");
        				System.out.print("queryCarModelByModelList查询车型集合返回:{\"model\":{\"count\":2,\"UFO-SESSION-ID\":\"5b1f96951e9c4cedb71d67062975dcad\",\"list\":[{\"featureName\":\"自动挡|1.4|三厢|5|2015款\",\"emission\":\"1.4\",\"normalMaintenMileage\":7500.00,\"state\":\"1\",\"brandId\":\"PP2016111100004\",\"dateUpdated\":1496930402000,\"updatedBy\":\"周泽\",\"gasLabel\":\"0\",\"firstMaintenMileage\":4500.00,\"carModel\":\"CM20161217104740426061f9d725234241fc8f21bd767f709c8222064465\",\"modelName\":\"起亚K2/自动1.4L/三厢/5座/2015款\",\"createdBy\":\"联动云\",\"modelClass\":\"02\",\"tireSize\":\"175/70R14\",\"grade\":\"1\",\"brandCompany\":\"QY2016111100007\",\"dateCreated\":1481942860000,\"seats\":\"5\",\"carModelAcronym\":\"起亚K2\",\"modelLevel\":\"2\",\"gearType\":\"02\",\"compartment\":\"02\"},{\"featureName\":\"自动挡|1.6|三厢|5|2013款\",\"emission\":\"1.6\",\"normalMaintenMileage\":7500.00,\"state\":\"1\",\"brandId\":\"PP2016111100001\",\"dateUpdated\":1496930368000,\"updatedBy\":\"周泽\",\"gasLabel\":\"0\",\"firstMaintenMileage\":4500.00,\"carModel\":\"CM201704211038288210c1cbc22fce00476799860c38faa683bf10530579\",\"modelName\":\"大众朗逸/自动1.6L/三厢/5座/2013款\",\"createdBy\":\"fengyifu\",\"modelClass\":\"02\",\"tireSize\":\"195/65R15\",\"grade\":\"1\",\"brandCompany\":\"QY2016111100002\",\"dateCreated\":1492742309000,\"seats\":\"5\",\"carModelAcronym\":\"大众朗逸\",\"modelLevel\":\"2\",\"gearType\":\"02\",\"compartment\":\"02\"}]},\"responseCode\":\"000000\",\"responseMsg\":\"成功\"}");
        				System.out.print("queryCarModelByModelList查询车型集合返回:{\"model\":{\"count\":2,\"UFO-SESSION-ID\":\"5b1f96951e9c4cedb71d67062975dcad\",\"list\":[{\"featureName\":\"自动挡|1.4|三厢|5|2015款\",\"emission\":\"1.4\",\"normalMaintenMileage\":7500.00,\"state\":\"1\",\"brandId\":\"PP2016111100004\",\"dateUpdated\":1496930402000,\"updatedBy\":\"周泽\",\"gasLabel\":\"0\",\"firstMaintenMileage\":4500.00,\"carModel\":\"CM20161217104740426061f9d725234241fc8f21bd767f709c8222064465\",\"modelName\":\"起亚K2/自动1.4L/三厢/5座/2015款\",\"createdBy\":\"联动云\",\"modelClass\":\"02\",\"tireSize\":\"175/70R14\",\"grade\":\"1\",\"brandCompany\":\"QY2016111100007\",\"dateCreated\":1481942860000,\"seats\":\"5\",\"carModelAcronym\":\"起亚K2\",\"modelLevel\":\"2\",\"gearType\":\"02\",\"compartment\":\"02\"},{\"featureName\":\"自动挡|1.6|三厢|5|2013款\",\"emission\":\"1.6\",\"normalMaintenMileage\":7500.00,\"state\":\"1\",\"brandId\":\"PP2016111100001\",\"dateUpdated\":1496930368000,\"updatedBy\":\"周泽\",\"gasLabel\":\"0\",\"firstMaintenMileage\":4500.00,\"carModel\":\"CM201704211038288210c1cbc22fce00476799860c38faa683bf10530579\",\"modelName\":\"大众朗逸/自动1.6L/三厢/5座/2013款\",\"createdBy\":\"fengyifu\",\"modelClass\":\"02\",\"tireSize\":\"195/65R15\",\"grade\":\"1\",\"brandCompany\":\"QY2016111100002\",\"dateCreated\":1492742309000,\"seats\":\"5\",\"carModelAcronym\":\"大众朗逸\",\"modelLevel\":\"2\",\"gearType\":\"02\",\"compartment\":\"02\"}]},\"responseCode\":\"000000\",\"responseMsg\":\"成功\"}");
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
