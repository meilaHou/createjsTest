/// <reference path="easeljs/easeljs.d.ts" />
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}

window.onload = () => {
   // var el = document.getElementById('content');
  //  var greeter = new Greeter(el);
  //  greeter.start();

    //添加一个Ticker类帮助避免多次调用update方法
    var et = new EaseljsTest();

    
};

class EaseljsTest {
    private mstage: createjs.Stage;
    constructor() {
        var canvas = document.getElementById("myCanvas");
       // var stage = this.stage;
        this.mstage = new createjs.Stage(canvas);

        //this.addTick();

        var circle = new createjs.Shape();
        circle.addEventListener("click", this.handleClick);
        console.log("执行到createjs" + canvas.namespaceURI);
        circle.graphics.setStrokeStyle(5).beginStroke("rgba(0,0,0,.5)").beginFill("orange").drawCircle(0, 0, 50);
        this.mstage.addChild(circle);

        var theText = new createjs.Text("极客标签", "normal 32px microsoft yahei", "#222222");
        this.mstage.addChild(theText);
        this.mstage.update();
    }

    private addTick() {
        createjs.Ticker.addEventListener("tick", handleTicker);
        function handleTicker() {
            this.mstage.update();
        }
    }
    private handleClick(event): void {
        console.log("shape 点击事件");
    }
}