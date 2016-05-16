/// <reference path="preloadjs/preloadjs.d.ts" />
/// <reference path="tweenjs/tweenjs.d.ts" />
/// <reference path="easeljs/easeljs.d.ts" />
/// <reference path="src/interface/interfacefiles.ts" />


/// <reference path="src/core/appfacade.ts" />



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
    //this.init();找不到此方法会报对象不支持此操作;
   
};

class EaseljsTest {
    private mstage: createjs.Stage;
    constructor() {
        var canvas = document.getElementById("myCanvas");
        //测试引入createjs正常
       // var stage = this.stage;
        this.mstage = new createjs.Stage(canvas); 
        //var circle = new createjs.Shape();
        //circle.addEventListener("click", this.handleClick);
        //console.log("执行到createjs" + canvas.namespaceURI);
        //circle.graphics.setStrokeStyle(5).beginStroke("rgba(0,0,0,.5)").beginFill("orange").drawCircle(0, 0, 50);
        //var tempmc = new createjs.MovieClip(null, 0, true, { start: 20 });
        //tempmc.addChild(circle);
        //this.mstage.addChild(tempmc);

        //初始化puremvc
        game.AppFacade.getInstance().startUp(this.mstage);
       // game.AppFacade.getInstance().sendNotification("showTestPanel");
        game.AppFacade.getInstance().sendNotification("showLoadingPanel");
        console.log("发送消息成功");
        //this.addTick();
        var dfdf: any;
        console.log(dfdf);
         
        this.mstage.update();



        //var theText = new createjs.Text("极客标签", "normal 32px microsoft yahei", "#222222");
        //this.mstage.addChild(theText);
        //this.mstage.update();


        //测试操作html元素,使用jquery;
      //  this.setTableRowHtml1();

    }
    //测试jquery 引用 
    //寻找tr 中第二个td
    //private  setTableRowHtml1(): void {
    //    var userName: string = "";
    //    $("tr").each(function () {
    //        userName = $(this).find("td:eq(1)").html();
    //    });
    //    alert(userName);
    //}

    private interfacetest() {

       // var mySquare1: SquareConfig = new Mysquare();
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

