<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<body>
		<table class="table table-bordered">
			<tr>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>序号</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>姓名</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>身份证号</strong></td>
				<td align="center" nowrap="nowrap" bgcolor="#f1f1f1"><strong>旅客类型</strong></td>
			</tr>
			<tbody id="tbody">
			<c:if test="${empty passengersList}">
			<tr>
				<td align="center" colspan="20">暂无数据</td>
			</tr>
			</c:if>
			<c:if test="${not empty passengersList}">
				<c:forEach var="bean" items="${passengersList}" varStatus="status">
					<tr ${status.count % 2 == 1 ? "" : "bgcolor='#f2f2f2'"} onmouseover="mouseOver(this)" onmouseout="mouseOut(this)">
						<td align="center"><input type="checkbox" name="passengerIndex" value="${bean.passenger_name}（${bean.passenger_id_no}  ${bean.passenger_type_name}）"/>&nbsp;${status.count}</td>
						<td align="center">${bean.passenger_name}</td>
						<td align="center">${bean.passenger_id_no}</td>
						<td align="center">${bean.passenger_type_name}</td>
					</tr>
				</c:forEach>
			</c:if>
			</tbody>
		</table>
</body>