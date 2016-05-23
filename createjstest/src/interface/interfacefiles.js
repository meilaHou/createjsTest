var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myaquare1 = {};
myaquare1.color = "d";
myaquare1.traceHello = function (info) { };
var test;
(function (test) {
    var Mysquare = (function () {
        function Mysquare() {
            this.time = 0;
        }
        Mysquare.prototype.traceHello = function (info) {
            alert(info);
        };
        return Mysquare;
    }());
    test.Mysquare = Mysquare;
})(test || (test = {}));
var Mysquare2 = (function (_super) {
    __extends(Mysquare2, _super);
    function Mysquare2() {
        _super.apply(this, arguments);
    }
    Mysquare2.prototype.traceHello = function (info) {
        _super.prototype.traceHello.call(this, info);
        alert(info);
    };
    Mysquare2.prototype.nihao = function () {
        _super.prototype.traceHello.call(this, "nihao");
    };
    return Mysquare2;
}(test.Mysquare));
var myArray;
myArray = ["Bob", "Fred"];
var Clock1 = (function () {
    function Clock1(h, m) {
        this.time = 0;
    }
    ;
    Clock1.prototype.trace = function () {
    };
    return Clock1;
}());
var cs = Clock1;
var newClock = new cs(7, 30);
console.log(newClock);
var square = {};
square.color = "red";
square.sideLength = 100;
square.penWidth = 50;
var square2 = { sideLength: 0, color: "", penWidth: 0 };
var hello = (function () {
    function hello(start) {
        this.interval = 0;
        this.niaho = function (start) {
            return "";
        };
        this.export = hello;
    }
    hello.prototype.reset = function () {
    };
    return hello;
}());
