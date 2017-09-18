var positionJs = {
    init : function(){
        doDragging(getDraggingDialog).enable();
        $("#addPosition").on("click",newPosition);
        doubleShift();
    }
};

/** 绑定/解绑拖动事件 */
function doDragging(validateHandler){ //参数为验证点击区域是否为可移动区域，如果是返回欲移动元素，负责返回null
    var $draggingObj=null, pushCtrl=false, needMove=false, isNew = false; //dragging Dialog
    var diffX=0, diffY=0;
    function mouseHandler(e){
        switch(e.type){
            case 'mousedown':
                $draggingObj=validateHandler(e);//验证是否为可点击移动区域
                if($draggingObj==null) {
                    // 没有拖动位置元素
                    break;
                }
                if(pushCtrl){
                    // ctrl+点击：触发删除操作
                    removePosition();
                    break;
                }
                needMove = true;
                diffX=e.clientX-$draggingObj.attr("x");
                diffY=e.clientY-$draggingObj.attr("y");
                if($draggingObj.find("input").length>0){
                    // 新添加的
                    isNew = true;
                }
                break;

            case 'mousemove':
                if($draggingObj && needMove){
                    $draggingObj.css("left",(e.clientX-diffX)+'px');
                    $draggingObj.css("top",(e.clientY-diffY)+'px');
                }
                break;

            case 'mouseup':
                if($draggingObj && needMove){
                    // 停止移动
                    needMove = false;
                    var newX = parseInt($draggingObj.css("left"));
                    var diffLeft = newX%100;
                    newX = newX - diffLeft;
                    if(diffLeft>50){
                        newX = newX + 100;
                    }
                    var newY = parseInt($draggingObj.css("top"));
                    var diffTop = newY%40;
                    newY = newY - diffTop;
                    if(diffTop>20){
                        newY = newY + 40;
                    }
                    if(isNew){
                        var name = $draggingObj.find("input").val();
                        if($.trim(name) == ""){
                            alert("请输入姓名！");
                            goBack();
                            break;
                        }
                    }
                    var oldX= $draggingObj.attr("x"),oldY=$draggingObj.attr("y");
                    if($(".divCard[x='"+newX+"'][y='"+newY+"']").length==0){
                        // 该位置没有被占用
                        if(isNew){
                            addNewPosition(oldX, oldY, newX, newY);
                        }else{
                            changePosition(oldX, oldY, newX, newY);
                        }
                        break;
                    }
                    if(newX != oldX || newY != oldY){
                        // 该位置已经被占用，且占用者不是当前被移动的元素，且当前移动的元素不是新创建的元素。
                        var ok = !isNew && confirm("确定要互换位置吗？");
                        if(ok){
                            exChangePosition(oldX, oldY,newX, newY);
                            break;
                        }
                    }
                    if(isNew){
                        alert("该位置已经被占用！");
                    }
                    goBack();
                }
                break;
        };

        function addNewPosition(oldX, oldY, newX, newY){
            var name = $draggingObj.find("input").val();
            if($.trim(name) == ""){
                alert("请输入姓名！")
                goBack();
                return;
            }
            $.ajax({
                type:"GET",
                url:"add.do",
                data:{
                    name:name,
                    x:newX,
                    y:newY
                },
                success:function(result){
                    if(result == "success"){
                        isNew = false;
                        $draggingObj.find(".name").remove();
                        $draggingObj.prepend('<div class="name">'+name+'</div>');
                        $draggingObj.attr("x",newX);
                        $draggingObj.attr("y",newY);
                        $draggingObj.css("left",newX+'px');
                        $draggingObj.css("top",newY+'px');
                    }else{
                        goBack();
                    }
                },
                error:function(e){
                    goBack();
                },
                complete:function(){
                    moveOver();
                }
            });
        };
        function removePosition(oldX, oldY, newX, newY){
            pushCtrl = false;
            var ok = confirm("确定要删除吗？");
            if(!ok){
                return false;
            }
            $.ajax({
                type:"GET",
                url:"remove.do",
                data:{
                    x:$draggingObj.attr("x"),
                    y:$draggingObj.attr("y")
                },
                success:function(result){
                    if(result == "success"){
                        $draggingObj.remove();
                        $draggingObj = null;
                    }
                }
            });
        };
        function changePosition(oldX, oldY,newX, newY){
            $.ajax({
                type:"GET",
                url:"change.do",
                data:{
                    oldX:oldX,
                    oldY:oldY,
                    newX:newX,
                    newY:newY
                },
                success:function(result){
                    if(result == "success"){
                        $draggingObj.attr("x",newX);
                        $draggingObj.attr("y",newY);
                        $draggingObj.css("left",newX+'px');
                        $draggingObj.css("top",newY+'px');
                    }else{
                        goBack();
                    }
                },
                error:function(e){
                    goBack();
                },
                complete:function(){
                    moveOver();
                }
            });
        };
        function exChangePosition(oldX, oldY,newX, newY){
            $.ajax({
                type:"GET",
                url:"ex_change.do",
                data:{
                    oldX:oldX,
                    oldY:oldY,
                    newX:newX,
                    newY:newY
                },
                success:function(result){
                    if(result == "success"){
                        var $changeObj = $(".divCard[x='"+newX+"'][y='"+newY+"']");
                        $changeObj.attr("x",oldX);
                        $changeObj.attr("y",oldY);
                        $changeObj.css("left",oldX+'px');
                        $changeObj.css("top",oldY+'px');

                        $draggingObj.attr("x",newX);
                        $draggingObj.attr("y",newY);
                        $draggingObj.css("left",newX+'px');
                        $draggingObj.css("top",newY+'px');
                    }else{
                        goBack();
                    }
                },
                error:function(e){
                    goBack();
                },
                complete:function(){
                    moveOver();
                }
            });
        };
        function goBack(){
            // 返回原来的位置
            $draggingObj.css("left",$draggingObj.attr("x")+'px');
            $draggingObj.css("top",$draggingObj.attr("y")+'px');
        };
        function moveOver(){
            $draggingObj =null;
            diffX=0;
            diffY=0;
        };
    };
    function ctrlKeyDown(e){
        if(e.key == "Control")
        {
            pushCtrl = true;
        }
    }
    function ctrlKeyUp(e){
        if(e.key == "Control")
        {
            pushCtrl = false;
        }
    }
    return {
        enable:function(){
            document.addEventListener('mousedown',mouseHandler);
            document.addEventListener('mousemove',mouseHandler);
            document.addEventListener('mouseup',mouseHandler);
            document.addEventListener('keydown',ctrlKeyDown);
            document.addEventListener('keyup',ctrlKeyUp);
        },
        disable:function(){
            document.removeEventListener('mousedown',mouseHandler);
            document.removeEventListener('mousemove',mouseHandler);
            document.removeEventListener('mouseup',mouseHandler);
            document.removeEventListener('keydown',ctrlKeyDown);
            document.removeEventListener('keyup',ctrlKeyUp);
        }
    }
}

/** 获取可拖动的控件 */
function getDraggingDialog(e){
    var target=e.target;
    if(target.name == "newPosition"){
        // 新位置输入框
        return null;
    }
    while(target && target.className.indexOf('divCard')==-1){
        target=target.offsetParent;
    }
    if(target!=null){
        return $(target);
    }else{
        return null;
    }
}

/** 新建位置 */
function newPosition(){
    var $newPosition = $(".divCard input");
    if($newPosition.length>0){
        $newPosition[0].focus();
        return false;
    }
    var x = 100*(parseInt(window.pageXOffset/100)+2);
    var y = 40*(parseInt(window.pageYOffset/40)+1);
    var newPosition =
        '<div class="divCard" x="'+x+'" y="'+y+'" style="left:'+x+'px; top:'+y+'px;">' +
            '<div class="name">' +
                '<input name="newPosition" type="text" style="width: 50px; height: 13px; top: 2px; position: absolute;"/>' +
            '</div>' +
            '<div class="divDrag"></div>' +
        '</div>';
    $("body").append(newPosition);
    $("input")[0].focus();
    return ;

}

/** 双击shift弹出查询框 */
function doubleShift(){
    var oldTime = 0;
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==16){
            // shift键
            var current = new Date().getTime();
            if(current - oldTime < 500){
                $("#searchDialog").show();
                $("#searchDialog").find("input").focus();
            }
            oldTime = current;
        }
    };
    // 关闭事件
    $("#searchDialog").find(".close").on("click",function(){
        $("#searchDialog").hide();
    });
    // 搜索框回车查找事件
    $("#searchDialog").find("input").bind('keydown',function(event,elem){
        // enter
        if(event.keyCode == "13") {
            var name = this.value;
            var $names = $(".name");
            $names.each(function(i){
                var $name = $($names[i]);
                var $curDivCard = $name.parent();
                if(name == $name.text()){
                    var x = $name.parent().attr("x");
                    var y = $name.parent().attr("y");
                    var screenMidX = window.screen.width /2;
                    var screenMidY = window.screen.height /2;
                    var scrollX = x - screenMidX > 0 ? x - screenMidX :0;
                    var scrollY = y - screenMidY > 0 ? y - screenMidY :0;
                    $('body,html').animate({'scrollLeft':scrollX,'scrollTop':scrollY},1000);
                    $name.siblings().show();
                    $curDivCard.addClass("curDivCard");
                }else{
                    $($names[i]).siblings().hide();
                    $curDivCard.removeClass("curDivCard");
                }
            });
        }
        // esc
        if(event.keyCode == "27"){
            var name = this.value;
            if($.trim(name) == ""){
                $("#searchDialog").hide();
            }else{
                this.value = "";
            }
        }
    });
}

