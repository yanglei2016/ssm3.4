<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/train.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resourcesStyle/train/js/train_utils.js"></script>
<body>
  <div class="right">
  <div class="right_cont">
  <div style="width:100%; margin:auto">
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
					<iframe id="imgIFrame" src="${pageContext.request.contextPath}/train/index/img.do" width="100%" height="190" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes">
     				</iframe>
				</td>
			</tr>
		</table>
		<table class="margin-bottom-20 table  no-border">
			<tr>
				<td class="text-center">
					<input type="button" value="登录" id="loginBtn" class="btn btn-info " style="width: 80px;"/>
				</td>
			</tr>
		</table>
  </div> 
  </div>
  </div>
</body>