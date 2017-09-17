var positionJs = {
    init : function(){
        doDragging(getDraggingDialog).enable();
        $("#addPosition").on("click",newPosition);
    }
};

/** 绑定/解绑拖动事件 */
function doDragging(validateHandler){ //参数为验证点击区域是否为可移动区域，如果是返回欲移动元素，负责返回null
    var draggingObj=null, needMove=false; //dragging Dialog
    var diffX=0, diffY=0, oldX=0, oldY=0;
    function mouseHandler(e){
        switch(e.type){
            case 'mousedown':
                draggingObj=validateHandler(e);//验证是否为可点击移动区域
                if(draggingObj!=null){
                    needMove = true;
                    oldX = draggingObj.offsetLeft-5;
                    oldY = draggingObj.offsetTop-5;
                    diffX=e.clientX-oldX;
                    diffY=e.clientY-oldY;
                }
                break;

            case 'mousemove':
                if(draggingObj && needMove){
                    draggingObj.style.left=(e.clientX-diffX)+'px';
                    draggingObj.style.top=(e.clientY-diffY)+'px';
                }
                break;

            case 'mouseup':
                if(draggingObj && needMove){
                    // 停止移动
                    needMove = false;
                    var newX = parseInt(draggingObj.style.left)
                    var diffLeft = newX%100;
                    newX = newX - diffLeft;
                    if(diffLeft>50){
                        newX = newX + 100;
                    }
                    var newY = parseInt(draggingObj.style.top)
                    var diffTop = newY%40;
                    newY = newY - diffTop;
                    if(diffTop>20){
                        newY = newY + 40;
                    }

                    if($("#"+newX+"-"+newY).length==0){
                        // 该位置没有被占用
                        changePosition(oldX, oldY,newX, newY);
                        break;
                    }
                    if(newX != oldX || newY != oldY){
                        var ok = confirm("确定要互换位置吗？");
                        if(ok){
                            exChangePosition(oldX, oldY,newX, newY);
                            break;
                        }
                    }
                    goBack();
                }
                break;
        };

        function add(name,x,y){
            $.ajax({
                type:"GET",
                url:"add.do",
                data:{
                    name:name,
                    x:x,
                    y:y
                },
                success:function(result){
                    if(result == "success"){
                        draggingObj.id = x+"-"+y;
                        draggingObj.style.left = x+'px';
                        draggingObj.style.top = y+'px';
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
                        draggingObj.id = newX+"-"+newY;
                        draggingObj.style.left = newX+'px';
                        draggingObj.style.top = newY+'px';
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
                        draggingObj.style.left = newX+'px';
                        draggingObj.style.top = newY+'px';
                        var changeObj = $("#"+newX+"-"+newY)[0];
                        changeObj.style.left = oldX+'px';
                        changeObj.style.top = oldY+'px';
                        // 互换id
                        draggingObj.id = newX+"-"+newY;
                        changeObj.id = oldX+"-"+oldY;
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
            draggingObj.style.left = oldX+'px';
            draggingObj.style.top = oldY+'px';
        };
        function moveOver(){
            draggingObj =null;
            diffX=0;
            diffY=0;
            oldX=0;
            oldY=0;
        };
    };

    return {
        enable:function(){
            document.addEventListener('mousedown',mouseHandler);
            document.addEventListener('mousemove',mouseHandler);
            document.addEventListener('mouseup',mouseHandler);
        },
        disable:function(){
            document.removeEventListener('mousedown',mouseHandler);
            document.removeEventListener('mousemove',mouseHandler);
            document.removeEventListener('mouseup',mouseHandler);
        }
    }
}

/** 获取可拖动的控件 */
function getDraggingDialog(e){
    var target=e.target;
    while(target && target.className.indexOf('divCard')==-1){
        target=target.offsetParent;
    }
    if(target!=null){
        return target;
    }else{
        return null;
    }
}

function newPosition(){
    var $newPosition = $("input");
    if($newPosition.length>0){
        $newPosition[0].focus();
        return false;
    }
    var newPosition = '<div class="divCard" style="left:200px; top:0px;"> <input name="newPosition" type="text" style="width: 70px; top: 2px; position: absolute;"/></div><div class="divDrag"></div> </div>';
    $("body").append(newPosition);
    $("input")[0].focus();
    return ;

}
