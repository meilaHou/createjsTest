/// <reference path="preloadjs/preloadjs.d.ts" />
/// <reference path="tweenjs/tweenjs.d.ts" />
/// <reference path="easeljs/easeljs.d.ts" />
/// <reference path="src/interface/interfacefiles.ts" />

/// <reference path="src/utils/layout/layout.ts" />

/// <reference path="src/core/appfacade.ts" />
///需要将没有引用到的ts 引用一次,避免发布时错误;
/// <include path="egame/commonpoker.ts" />


window.onload = () => {
    comnpokecreatejs = createjs;
    //添加一个Ticker类帮助避免多次调用update方法
    var et = new EaseljsTest();
    //this.init();找不到此方法会报对象不支持此操作;
    createjs.MotionGuidePlugin.install();
};

class EaseljsTest {
    private mstage: createjs.Stage;
    private mylayout: Layout;
    constructor() {
        var canvas = document.getElementById("myCanvas");
        //测试引入createjs正常
       // var stage = this.stage;
        this.mstage = new createjs.Stage(canvas); 
        createjs.Touch.enable(this.mstage);
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

