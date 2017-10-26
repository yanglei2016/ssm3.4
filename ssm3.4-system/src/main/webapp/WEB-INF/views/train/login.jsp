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
    <a href="javascript:void(0)">登录</a>
  </ul>
  <div class="title_right"><strong>参数查询</strong></div>  
  <div style="width:100%; margin:auto">
	<form action="query.do" method="post" name="myform" id="myform">
		<table class="table table-bordered">
			<tr>
				<td width="30%" align="right" bgcolor="#f1f1f1">用户名：</td>
				<td width="70%">
					<input type="text" value="" class="form-control" name="user_name" id="user_name" placeholder="请输入用户名"/>
				</td>
			</tr>
			<tr>
				<td width="30%" align="right" bgcolor="#f1f1f1">密码：</td>
				<td width="70%">
					<input type="password" value="" class="form-control" id="password" name="password" placeholder="请输入密码"/>
				</td>
			</tr>
			<tr>
				<td width="30%" align="right" bgcolor="#f1f1f1">验证码：</td>
				<td width="70%">
					<div class="touclick-wrapper" style="height: 0px">
						<div class="touclick-bgimg touclick-reload touclick-reload-normal" onclick="refreshImg()"></div>
						<div class="touclick-bgimg touclick-arrow"></div>
					</div>
					<div class="touclick-img-par touclick-bgimg">
						<img id="touclick-image" class="touclick-image" alt="" src="${pageContext.request.contextPath}/train/index/getPassCodeNew.do?module=${moduled}" style="display: block; visibility: visible;">
						<div id="touclick-wait" class="touclick-wait" style="left: 121.5px; top: 84px; display: none;">
							<div class="touclick-bgimg" id="touclick-bgimg" style="width: 10px; height: 10px; position: absolute; left: 20px; top: 0px; font-size: 0px; background-position: 0px -193px;"></div>
						</div>
					</div>
				</td>
			</tr>
		</table>
		<table class="margin-bottom-20 table  no-border">
			<tr>
				<td class="text-center">
					<input type="button" value="登录" id="loginBtn" class="btn btn-info " style="width: 80px;"/>
					<input type="button" value="返回" class="btn btn-info" style="width:80px;" name="backBtn" onclick="history.back()" />
				</td>
			</tr>
		</table>
	</form>

		
    </div> 
  </div>
  </div>



<script type="text/javascript">
	//刷新验证码
	function refreshImg() {
		$(".touclick-hov").remove();
		$("#touclick-image").attr("src", "${pageContext.request.contextPath}/train/index/getPassCodeNew.do?module=${moduled}&"+Math.random());
	}
	
	function remove(obj){
		$(obj).remove();
	}
	
	$(function(){
		$("#touclick-image").click(function(t){
			var a = $(this).offset();
			//console.log(a);
			var	i = Math.floor(t.pageX - 13);
			var	s = Math.floor(t.pageY - 13);
			if (i > 0 && s > 0) {
				$(".touclick-img-par").append("<div class='touclick-hov touclick-bgimg' index='0' left="+ i +"  top="+s+" style='left:"+ i +"px; top: "+ s +"px;' onclick='remove(this)'></div>");
			}
		}); 
		
		
		$("#user_name").val(getCookie("user_name"));
		$("#password").val(getCookie("password"));
		
		$("#loginBtn").click(function(){
			var user_name = $.trim($("#user_name").val());
			var password = $.trim($("#password").val());
			if(user_name == null || user_name == ''){
				sysMsg("请输入用户名！");
				return ;
			}
			if(password == null || password == ''){
				sysMsg("请输入密码！");
				return ;
			}
			
			var code = "";
			var hovObj = $(".touclick-hov");
			var imagePosition = $("#touclick-image").offset();
			//console.log(imagePosition);
			hovObj.each(function(){
				//console.log($(this).attr("left"));
				//console.log($(this).attr("top"));
				var left = parseInt($(this).attr("left")) + 3 - parseInt(imagePosition.left);
				var top = parseInt($(this).attr("top")) - 16 - parseInt(imagePosition.top);
				code += "," + left + "," + top;
			})
			code = code.substring(1);
			var data = {randCode:code};
			//console.log(data);
			$.ajax({
				type : "GET",
				isTakeParam: false,
				dataType: "json",
				crossDomain: true,
				beforeSend: function(k) {
	                k.setRequestHeader("If-Modified-Since", "0");
	                k.setRequestHeader("Cache-Control", "no-cache")
	            },
	        	data: data,
				url : path + "/index/checkRandCodeAnsyn.do",
				success : function(data) {
					if(data.data.msg == 'TRUE' && data.data.result == 1){
						 $.ajax({
								type : "GET",
								isTakeParam: false,
								dataType: "json",
								crossDomain: true,
				            	data: {randCode:code, user_name:user_name, password:password},
								url : path + "/index/loginAysnSuggest.do",
								success : function(result) {
									sysAlert(result.respMsg);
									if(result.respCode == 0){
										setCookie("user_name", user_name, 15);
										setCookie("uName", result.data, 15);
										setCookie("password", password, 15);
										location.href = path + "/index/query.do";
									}else{
										location.href = path + "/index/login.do";
									}
								}
							});
					}else{
						sysMsg("验证码错误！");
						refreshImg();
					}
				}
			});
				
		});
	});
</script>
</body>