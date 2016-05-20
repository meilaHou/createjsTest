/// <reference path="preloadjs/preloadjs.d.ts" />
/// <reference path="tweenjs/tweenjs.d.ts" />
/// <reference path="easeljs/easeljs.d.ts" />
/// <reference path="src/interface/interfacefiles.ts" />

/// <reference path="src/layout.ts" />

/// <reference path="src/core/appfacade.ts" />


window.onload = () => {

    //添加一个Ticker类帮助避免多次调用update方法
    var et = new EaseljsTest();
    //this.init();找不到此方法会报对象不支持此操作;
   
};

class EaseljsTest {
    private mstage: createjs.Stage;
    private mylayout: Layout;
    constructor() {
        var canvas = document.getElementById("myCanvas");
        //测试引入createjs正常
       // var stage = this.stage;
        this.mstage = new createjs.Stage(canvas); 

        this.mylayout = new Layout();
        this.mylayout.init(this.mstage);
        //this.mylayout.showDebug(true);

        //初始化puremvc
        game.AppFacade.getInstance().startUp(this.mylayout);
       // game.AppFacade.getInstance().sendNotification("showTestPanel");
        game.AppFacade.getInstance().sendNotification("showLoadingPanel");
        console.log("发送消息成功");
        this.addTick();
        var dfdf: any;
        console.log(dfdf);
         
        this.mstage.update();
    }


    private addTick() {
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this.handleTicker.bind(this));
       
    }
    private handleTicker() {
        this.mstage.update();
    }
    private handleClick(event): void {
        console.log("shape 点击事件");
    }


    
    
}

