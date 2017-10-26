<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%@include file="common_include.jsp" %>
</head>
<body>
  <div class="right"  id="mainFrame">
  <div class="right_cont">
  <ul class="breadcrumb">当前位置：
    <a href="javascript:void(0)">12306火车票</a> <span class="divider">/</span>
    <a href="javascript:void(0)">余票查询</a>
  </ul>
  <div class="title_right"><strong>参数查询</strong></div>  
  <div style="width:100%; margin:auto">
	<form action="query.do" method="post" name="myform" id="myform">
		<table class="table table-bordered">
			<tr>
				<td width="10%" align="right" bgcolor="#f1f1f1">当前用户：</td>
				<td width="40%" >
					<span id="userNameSpan"></span>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<a href="javascript:getPassengers()">获取联系人</a>
				</td>
				<td width="50%" align="center" rowspan="4" valign="top">
					<div style="overflow: scroll;height: 150px;">
						<table class="table table-bordered">
							<tr>
								<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>序号</strong></td>
								<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>姓名</strong></td>
								<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>身份证号</strong></td>
								<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>旅客类型</strong></td>
							</tr>
							<tbody id="passengersTBody">
								
							</tbody>
						</table>
					</div>
				</td>
			</tr>
			<tr>
				<td align="right" bgcolor="#f1f1f1">乘车日期：</td>
				<td>
					<input type="text" name="startDate" id="startDate" class="Wdate" 
					onfocus="WdatePicker({dateFmt:'yyyy-MM-dd',doubleCalendar:true,minDate:'${minDate}',maxDate:'${maxDate}',lang:'zh-cn'})"  value="${startDate}" />
				</td>
			</tr>
			<tr>
				<td align="right" bgcolor="#f1f1f1">乘车区间：</td>
				<td>
					<input name="fromStation" id="fromStation" type="text" readonly="readonly" style="width: 50px;"/> <input name="fromStationText"
					maxlength="15" placeholder="简码/汉字" id="fromStationText" class="input_20txt_gray" type="text" value=""/>
					<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至<br/>
					<input name="toStation" id="toStation" type="text" readonly="readonly" style="width: 50px;"/> <input name="toStationText" maxlength="15"
					placeholder="简码/汉字" id="toStationText" class="input_20txt_gray" type="text" />
				</td>
			</tr>
			<tr>
				<td align="right" bgcolor="#f1f1f1">车次类型：</td>
				<td style="padding: 0 0 0 0;">
					<table class="margin-bottom-0 table no-border" style="border: 1px solid #dddddd;">
						<tr>
							<td><label ><input name="cc_type" checked="checked" type="checkbox" class="check" id="checkbox_All"/>全部</label></td>
							<td><label ><input name="cc_type" checked="checked" value="G" type="checkbox" class="check" id="checkbox_OFp57OqnbA"/>GC-高铁/城际</label></td>
							<td><label ><input name="cc_type" checked="checked" value="D" type="checkbox" class="check" id="checkbox_DlEf7bRWEW"/>D-动车</label></td>
							<td><label ><input name="cc_type" checked="checked" value="Z" type="checkbox" class="check" id="checkbox_XCOTEvuC4i"/>Z-直达</label></td>
							<td><label ><input name="cc_type" checked="checked" value="T" type="checkbox" class="check" id="checkbox_P6cOKO6IXJ"/>T-特快</label></td>
							<td><label ><input name="cc_type" checked="checked" value="K" type="checkbox" class="check" id="checkbox_tVKVvd2fgX"/>K-快速</label></td>
							<td><label ><input name="cc_type" checked="checked" value="QT" type="checkbox" class="check" id="checkbox_YWciZnHrsj"/>其他</label></td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<table class="margin-bottom-20 table  no-border">
			<tr>
				<td class="text-center">
					<input type="submit" value="查询" id="search" class="btn btn-info " style="width: 80px;"/>
					<input type="button" value="登录" id="loginbutton" class="btn btn-info " style="width: 80px;"/>
				</td>
			</tr>
		</table>
	</form>

		<table class="table table-bordered">
			<tr>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong></strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>车次</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>出发站<br/>到达站</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>出发时间<br/>到达时间</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>历时</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>商务座<br/>特等座</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>一等座</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>二等座</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>高级软卧</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>软卧</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>动卧</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>硬卧</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>软座</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>硬座</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>无座</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>其他</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>备注</strong></td>
			</tr>
			<tbody id="tbody">
			<c:if test="${empty ticketsList}">
			<tr>
				<td align="center" colspan="20">暂无数据</td>
			</tr>
			</c:if>
			<c:if test="${not empty ticketsList }">
				<c:forEach var="bean" items="${ticketsList}" varStatus="status">
					<tr ${status.count % 2 == 1 ? "" : "bgcolor='#f2f2f2'"} onmouseover="mouseOver(this)" onmouseout="mouseOut(this)">
						<td align="center"><input type="checkbox" class="trainCode" value="${bean.trainNo}"/></td>
						<td align="center">${bean.trainNo}</td>
						<td align="center">${bean.fromStationName}<br/>${bean.toStationName}</td>
						<td align="center">${bean.startTime}<br/>${bean.arriveTime}</td>
						<td align="center">${bean.lishi}</td>
						<td align="center">${bean.swzNum}</td>
						<td align="center">${bean.zyNum}</td>
						<td align="center">${bean.zeNum}</td>
						<td align="center">${bean.grNum}</td>
						<td align="center">${bean.rwNum}</td>
						<td align="center">${bean.dwNum}</td>
						<td align="center">${bean.ywNum}</td>
						<td align="center">${bean.rzNum}</td>
						<td align="center">${bean.yzNum}</td>
						<td align="center">${bean.wzNum}</td>
						<td align="center">${bean.qtNum}</td>
						<td align="center" id="secretStr" secretStr="${bean.secretStr}">
							<c:if test="${bean.secretStr == ''}">
								${bean.buttonTextInfo}  
							</c:if>
							<c:if test="${bean.secretStr != ''}">
<%-- 								<input type="button" class="btn btn-default" onclick="submitOrderRequest('${bean.secretStr}','${bean.startTime }','${bean.beanNo}','${bean.fromStationTelecode}','${bean.toStationTelecode}','${bean.ypInfo}','${bean.fromStationName}','${bean.toStationName}','${bean.location_code}','${bean.stationTrainCode}')"  value="${bean.buttonTextInfo}"/> --%>
<%-- 								${bean.buttonTextInfo}111 --%>
								<input type="button" class="btn btn-info" value="${bean.buttonTextInfo}" onclick="submitOrderRequest('${bean.secretStr}','${bean.startTime }','${bean.trainNo}','${bean.fromStationTelecode}','${bean.toStationTelecode}','${bean.ypInfo}','${bean.fromStationName}','${bean.toStationName}','${bean.location_code}','${bean.stationTrainCode}')"/>
							</c:if>
						</td>
					</tr>
				</c:forEach>
			</c:if>
			</tbody>
		</table>
		<br/>
		<br/>
		<br/>
    </div> 
  </div>
  </div>
  <div style="top: 0; left: 0; z-index: 1000; POSITION: absolute;">
		<div style="overflow: hidden; left: 323px; top: 90.5px; display: none;" id="form_cities">
			<div id="top_cities">简码/汉字或↑↓</div>
			<div id="panel_cities"></div>
			<div style="display: block;" id="flip_cities">
				<a href="" class="cityflip" onclick="city_showlist(1);return false;">向后&nbsp;»</a>
			</div>
		</div>
	</div>

	<div style="top: 0; left: 0; z-index: 1000; POSITION: absolute;">
		<div style="overflow: hidden; display: none; left: 323px; top: 90.5px;" id="form_cities2">
			<div id="top_cities1"></div>
			<div id="panel_cities2"></div>
		</div>
	</div>
<script type="text/javascript">

	var flag = true;
	function checkUser(){
		if(flag){
			$.ajax({
				type : "POST",
				url : path + "/index/checkUser.do",
				dataType : "json",
				success : function(data) {
					if(data == false){
						login();
						//var myAuto =document.getElementById('myaudio');
						//myAuto.play();
					}
					flag = data;
				},error:function(){
					flag = false;
				}
			});
		}
	}
	
	$(function() {
		checkUser();
		$("#fromStation").val(getCookie("fromStation"));
		$("#fromStationText").val(getCookie("fromStationText"));
		$("#toStation").val(getCookie("toStation"));
		$("#toStationText").val(getCookie("toStationText"));
		
		var uName = getCookie("uName");
		if(uName != null && uName != ''){
			$("#userNameSpan").text("您好，"+ uName);
			$("#loginbutton").hide();
// 			getPassengers();
		}
		
		setInterval(checkUser, 1000 * 60);
	});
	
	//获取联系人
	function getPassengers(){
		$.ajax({
			type : "POST",
			url : path + "/index/passengers.do",
			dataType : "json",
			success : function(result) {
				//console.log(result);
				var html = "";
				$.each(result, function(i, item){
					html += '<tr><td align="center"><input type="checkbox" value="'+ item.passenger_id_no +'"/>'+ (i + 1) +'</td>'+
					'<td align="center">'+ item.passenger_name +'</td>'+
					'<td align="center">'+ item.passenger_id_no +'</td>'+
					'<td align="center">'+ item.passenger_type_name +'</td></tr>';
				});
				$('#passengersTBody').html(html);
			}
		});
	}
</script>
</body>