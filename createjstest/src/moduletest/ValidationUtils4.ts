/**
* 不使用Module,如果我们在typescript 使用了module 函数，则生成的代码在浏览器端执行
时，需要有一些script loader 的支持。
* 对于浏览器端代码，我们一般生成amd 风格的代码，所以需要找一个支持amd 的库放在前端。
这样的库有很多
*/
export interface StringValidator {
    isAcceptable(s: string): boolean;
}