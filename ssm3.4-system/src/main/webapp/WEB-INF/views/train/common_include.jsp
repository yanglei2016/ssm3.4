<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.yanglei.com/system-tags" prefix="ssm" %>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="${pageContext.request.contextPath }/resourcesStyle/css/bootstrap.css" />
<link rel="stylesheet" href="${pageContext.request.contextPath }/resourcesStyle/css/css.css" />
<link rel="stylesheet" href="${pageContext.request.contextPath }/resourcesStyle/css/sys_common.css" />
<script type="text/javascript" src="${pageContext.request.contextPath }/resourcesStyle/js/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resourcesStyle/js/layer/layer.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resourcesStyle/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resourcesStyle/js/messages_zh.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resourcesStyle/js/bootstrap.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resourcesStyle/js/sdmenu.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resourcesStyle/js/laydate/laydate.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resourcesStyle/js/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/resourcesStyle/js/ssm_common.js"></script>

<link rel="shortcut icon" type="image/x-icon" href="${pageContext.request.contextPath}/resourcesStyle/train/img/favicon.ico">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resourcesStyle/train/css/train.css" />
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/train.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/train_utils.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/favorite_name.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/station_name.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/city_name.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/train_list.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/fastclick.js"></script>

<script type="text/javascript">
var path='${pageContext.request.contextPath}' + '/train';

$(function($) {
	document.onreadystatechange = completeLoading;
	function completeLoading() {
		if (document.readyState == "complete") {
			parent.layer.closeAll('loading'); //关闭加载层
		}
	}
});
</script>