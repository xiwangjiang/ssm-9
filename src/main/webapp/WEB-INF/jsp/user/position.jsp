<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/user/position.css"></link>
    <script src="/js/jquery-1.9.1.js"></script>
    <script src="/js/jquery.cookie.js"></script>
    <script src="/js/bootstrap-modal.js"></script>
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
    <img class="timgImg" src="/image/timg.png"/>
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