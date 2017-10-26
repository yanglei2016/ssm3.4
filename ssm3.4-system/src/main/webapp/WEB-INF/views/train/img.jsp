<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="common_include.jsp" %>
<body>
<div class="touclick-wrapper">
	<div class="touclick-bgimg touclick-reload touclick-reload-normal" onclick="refreshImg()"></div>
	<div class="touclick-bgimg touclick-arrow"></div>
</div>
<div class="touclick-img-par touclick-bgimg">
	<img id="touclick-image" class="touclick-image" alt="" src="${pageContext.request.contextPath}/train/index/getPassCodeNew.do?module=${moduled}" style="display: block; visibility: visible;">
	<div id="touclick-wait" class="touclick-wait" style="left: 121.5px; top: 84px; display: none;">
		<div class="touclick-bgimg" id="touclick-bgimg" style="width: 10px; height: 10px; position: absolute; left: 20px; top: 0px; font-size: 0px; background-position: 0px -193px;"></div>
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
	});
</script>