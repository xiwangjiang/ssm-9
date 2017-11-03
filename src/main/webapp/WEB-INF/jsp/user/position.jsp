<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/user/position.css"></link>
    <script src="${pageContext.request.contextPath}/js/jquery-1.9.1.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery.cookie.js"></script>
    <script src="${pageContext.request.contextPath}/js/bootstrap-modal.js"></script>
    <script src="${pageContext.request.contextPath}/js/user/position.js"></script>
    <title>工位表</title>
    <script>
        $(function(){
            positionJs.init();
        });
    </script>
</head>

<body>
    <div class="toolbar">
        <button id="addPosition">很丑的添加按钮</button>
        <div>
            <br/>
            <h3>使用说明</h3>
            <h6>1、添加一个新工位，拖动到相应位置！</h6>
            <h5>2、双击Shift键，输入要搜索的姓名！</h5>
            <h5>3、按Esc键，取消搜索！</h5>
            <h5>4、按Ctrl+鼠标滚轮放大缩小地图！</h5>
            <h6>5、请联系wangshaopeng@dafy.com贡献代码！</h6>
        </div>
    </div>
    <img class="timgImg" src="${pageContext.request.contextPath}/image/timg.png"/>
    <c:forEach items="${userList}" var="user" varStatus="status">
        <div x="<c:out value="${user.x}"/>" y="<c:out value="${user.y}"/>"
             class="divCard" style="left:<c:out value="${user.x}"/>px; top:<c:out value="${user.y}"/>px;">
            <div class="name"><c:out value="${user.name}"/></div>
            <div class="divDrag hide"></div>
        </div>
    </c:forEach>
    <div id="searchDialog" class="modal hide fade in">
        <div class="modal-header" style="cursor: move">
            <a class="close" data-dismiss="modal">×</a>
            <h4>请举手</h4>
        </div>
        <div class="modal-body">
            <span>输入姓名后回车：</span>
            <input type="text">
        </div>
    </div>
</body>
</html>