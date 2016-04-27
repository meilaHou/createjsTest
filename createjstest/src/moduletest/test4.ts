
//引入ValidationUtils3.ts 文件,前面这个是用了module 块关键字定义ts 文件，需要用reference 与path 引入.
import validation = require('./ValidationUtils4');
import telValidator = require('./TelValidator4');
import emailValidator = require('./EmailValidator4');
//-------------------显示信息1---------------------
function showMsgs1(): void {
    //--方法一---
    var telObj = new telValidator();//
    var tel: string = "13697811809";
    var flag: boolean = telObj.isAcceptable(tel);//调用TelValidator 类的isAcceptable 方法
    console.log(flag ? tel + " 匹配" : tel + "\t 不匹配");
    $("#msg1").html(flag ? "<span style='color:red;'>" + tel + " 匹配</span> " :
        "<span>" + tel + "\t 不匹配</span>");
}
$(function () {
    showMsgs1();
}); 