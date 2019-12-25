//针对log页定义一个对象
var log={
    startdt:"2019-8-5",
    enddt:"2019-9-5",
    upatedt:"2019-8-5",
    anchor:"tgrong"
}
//由对象派生业务逻辑
log.submit={
    check:function(v){ //验证某个值是否为空
       v==""?true:false;
       return v;
    }
}

//定义一个验证内容是否为空的函数
function checkvalue(){
    //获取元素对象，并保存在变量中
    var $username=$("#username");
    var $password=$("#password");
    var $err1=$("#err1");
    var $err2=$("#err2");
    
    //当用户名和密码都不为空时
    if($username.val()!=""&&$password.val()!=""){
        //直接提交
        return true;
    }else{
        //如果用户名为空时
        if($username.val()==""){
            //提示用户名称不为空的错误信息显示
            $err1.show();
            //阻止提交
            return false;
        }else{//密码为空时
            //提示密码的错误信息显示
            $err2.show();
            //阻止提交
            return false;
        }
    } 
}
//绑定按钮的单击事件,表单提交时触发
$(function(){
    

})