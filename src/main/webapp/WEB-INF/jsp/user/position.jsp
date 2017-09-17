<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="/css/user/position.css"></link>
    <script src="/js/jquery-1.9.1.js"></script>
    <script src="/js/user/position.js"></script>
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
    </div>
    <c:forEach items="${userList}" var="user" varStatus="status">
        <div id="<c:out value="${user.x}"/>-<c:out value="${user.y}"/>"
             class="divCard" style="left:<c:out value="${user.x}"/>px; top:<c:out value="${user.y}"/>px;">
            <div><c:out value="${user.name}"/></div>
            <div class="divDrag"></div>
        </div>
    </c:forEach>
</body>
</html>