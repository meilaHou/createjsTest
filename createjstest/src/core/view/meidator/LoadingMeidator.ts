/// <reference path="../../../../org/puremvc/typescript/patterns/mediator/mediator.ts" />
/// <reference path="../../../../egame/loading.ts" />


class LoadingMeidator extends puremvc.Mediator implements puremvc.IMediator {
    
    public static NAME: string = "LoadingMeidator";
    public constructor(viewComponent: any = null) {
        super(LoadingMeidator.NAME, viewComponent);
        Config.loadingIndex = this;
    }
    public listNotificationInterests(): Array<any> {
        return [
            "showLoadingPanel"
        ];
    }
    public handleNotification(notification: puremvc.INotification): void {
        var data: any = notification.getBody();
        console.log("LoadingMeidator 响应成功", notification.getName());
        switch (notification.getName()) 
        {
            case "showLoadingPanel":
                this.usecreatejsSource();
                break;
        }
    }

    /*
loading界面资源加载;
*/
    public usecreatejsSource() {
        // --- write your JS code here ---

        loadingcreatejs.MotionGuidePlugin.install();

        this.canvas = document.getElementById("canvas");
        loadingimages = loadingimages || {};
        ss = ss || {};

        var loader: createjs.LoadQueue = new loadingcreatejs.LoadQueue();
        loader.addEventListener("fileload", this.handleFileLoad);
        loader.addEventListener("complete", this.handleComplete.bind(this));

        //下面的形式,对click事件有效,对其他事件,会出现问题,但不一定会报错;
        //loader.on("complete", this.handleComplete, null, false, { count: 3, hander: this.startLoadGameRes });
        //file参数 LoadItem | Object | String
        loader.loadFile({ src: "../../../../egame/images/loading_atlas_.json?1463196773695", type: "spritesheet", id: "loading_atlas_" }, true);
        loader.loadManifest(loadinglib.properties.manifest);

        //this.startLoadGameRes();
    }


    private canvas: any;
    private gamestage: any;
    private exportRoot: any;


    private handleFileLoad(evt) {
        if (evt.item.type == "image") { loadingimages[evt.item.id] = evt.result; }
        console.log("加载资源完毕:" + evt.item.type + " :" + evt.item.id);
    }
    
    private handleComplete(evt) {
        var queue = evt.target;
        ss["loading_atlas_"] = queue.getResult("loading_atlas_");
        this.exportRoot = new loadinglib.loading();
        //console.log(ss["loading_atlas_"]);
        //for (var i in ss) {
        //    console.log(i + ":" + ss[i]);
        //}


        this.gamestage = new loadingcreatejs.Stage(this.canvas);

        this.gamestage.addChild(this.exportRoot);

        this.gamestage.update();
        
        //this.exportRoot.instance.progressMc.gotoAndStop(70);加载到画布之后可以直接操作;
        loadingcreatejs.Ticker.setFPS(loadinglib.properties.fps);
        loadingcreatejs.Ticker.addEventListener("tick", this.gamestage);
        //Config.loadingIndex.startLoadGameRes();//首先将指向本类的索引保存在全局变量中;
        this.startLoadGameRes();//this指向的是此函数;
    }

    /*2
    开始加载游戏内资源;
    */
    public static loadedResArr = [];
    public startLoadGameRes() {
        var queaue = new createjs.LoadQueue(true);
        var loadItems = [
            { id: "pic", src: "/images/Chrysanthemum.jpg" },
            { id: "videos", src: "/images/Wildlife.wmv" },
            { id: "mp3", src:"/images/Kalimba.mp3"}
        ];
        queaue.addEventListener("fileload", this.handleResFileLoad.bind(this));
        queaue.addEventListener("complete", this.handleResComplete.bind(this));
        queaue.loadManifest(loadItems, false);
        queaue.load();
    }

    private handleResFileLoad(evt) {
        LoadingMeidator.loadedResArr[LoadingMeidator.loadedResArr.length] =
            {
                id: evt.item.id, res: evt.result, types: evt.item.type
            };
        console.log("加载资源完毕:" + evt.item.type + " :" + evt.item.id);
        this.loadlog(evt.item.type + " :" + evt.item.id);
        var frameNumber = Math.floor(LoadingMeidator.loadedResArr.length / 3 * 99);
        console.log(frameNumber);
        this.exportRoot.instance.progressMc.gotoAndStop(frameNumber);
    }
    private handleResComplete(evt) {
        console.log("所有游戏资源加载完毕");
    }

    private loadlog(str:string) {
        $("#content textarea").append(str+"<br/>");
    }

}
