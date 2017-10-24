package com.yang.train.test;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.yang.common.tools.json.GsonUtils;
import com.yang.ssm.BaseTest;
import com.yang.train.entity.NewTrain;
import com.yang.train.service.TrainService;

public class TrainTest extends BaseTest {

	@Autowired
	private TrainService trainService;
	
	@Test
	public void queryTrainTest(){
		String fromStation = "BJP";
		String toStation = "SHH";
		String startDate = "2017-10-25";
		
		
		List<NewTrain> queryTrain = TrainService.queryTrain(fromStation, toStation, startDate);
		
		System.out.println(GsonUtils.toJsonString(queryTrain));
	}
	
}
