<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>工位表</title>
    <style>
        .divCard{
            margin: 5px 5px 5px 5px;
            padding: 5px 5px 5px 5px;
            border: 1px dotted red;
            border-radius: 5px;
            background-color: antiquewhite;
            box-shadow: 8px 4px 16px 0px rgba(0,0,0,0.2);
            position: absolute;
            width: 70px;
            height: 20px;
        }
        .divDrag{
            cursor:move;
            background-image: url('/image/hand.png');
            background-size: cover;
            position: absolute;
            right: 0px;
            top: 5px;
            width: 15px;
            height: 20px;
        }
    </style>
    <script>
    </script>
</head>

<body>
    <c:forEach items="${userList}" var="user" varStatus="status">
        <div class="divCard" style="top:<c:out value="${user.x}"/>px; left:<c:out value="${user.y}"/>px;">
            <div><c:out value="${user.name}"/></div>
            <div class="divDrag"></div>
        </div>
    </c:forEach>
    <a href="www.baidu.com" alt="hello">hhhh</a>
</body>
</html>