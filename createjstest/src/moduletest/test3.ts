
/***
* import 与require 关键字使用..require(是命令，要求的意思.)
*/

//import validation = require('./ValidationUtils3');
////import telValidator = require('./TelValidator');
//import emailValidator = require('./EmailValidator');
////-------------------显示信息1---------------------
//function showMsgs1(): void {
//    //--方法一---
//    var telObj = new emailValidator.EmailValidator();//
//    var tel: string = "13697811809";
//    var flag: boolean = telObj.isAcceptable(tel);//调用TelValidator 类的isAcceptable 方法
//    console.log(flag ? tel + " 匹配" : tel + "\t 不匹配");
//    $("#msg1").html(flag ? "<span style='color:red;'>" + tel + " 匹配</span> " :
//        "<span>" + tel + "\t 不匹配</span>");
//}
//$(function () {
//    //showMsgs1();
//    var strings = ['13697811809', 'jilongliang@sina.com'];
//    var validators: { [s: string]: validation.StringValidator; } = {};
//    validators['email'] = new emailValidator.EmailValidator();
//   // validators['tel'] = new telValidator.TelValidator();
//    strings.forEach(s => {
//        for (var name in validators) {
//            console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches' : ' does not match ') + name);
//} 
//    });
//});