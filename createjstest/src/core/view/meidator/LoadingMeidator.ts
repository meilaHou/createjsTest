/// <reference path="../../../../org/puremvc/typescript/patterns/mediator/mediator.ts" />
/// <include path="../../../../egame/loading.ts" />
/// <reference path="../../../utils/res/soundresmanager.ts" />


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
    private gamestage:createjs.Stage;
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
    private resourceLoader: createjs.LoadQueue;
    public startLoadGameRes() {
        var queaue = this.resourceLoader = new createjs.LoadQueue(true);
        //sound暂时无法注册到loadqueue中
        //queaue.installPlugin(function () { }.prototype.getPreloadHandlers = function () {
        //    return {
        //        callback: createjs.proxy(createjs.Sound.initialize, createjs.Sound),
        //        types: ["sound"],
        //        extensions: createjs.Sound.SUPPORTED_EXTENSIONS
        //    }
        //});
        var loadItems = [
            { id: "pic", src: "/images/Chrysanthemum.jpg" },
           // { id: "videos", src: "/images/demo.mp4" },//h264 格式可以播放
            { id: "videos", src:"/images/movie.ogg"},
            { id: "soundmp3", src: "/images/BankerTwo.mp3" },
            { id: "mp4", src: "/images/BankerTwo.mp3" },//资源会被重复加载;
            { id: "winspritesheet", src:"/egame/images/win2.json"}//文本文件的加载注意 文本的文字编码;不然返回undefined,如果没有这个文件,获取时,返回null;
        ];
        queaue.loadFile({ src: "/egame/images/win2.json", type: "spritesheet", id: "winspritesheet2" }, true);
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
        var frameNumber = Math.floor(LoadingMeidator.loadedResArr.length / 5 * 99);
        console.log(frameNumber);
        this.exportRoot.instance.progressMc.gotoAndStop(frameNumber);
    }
    private handleResComplete(evt) {
        console.log("所有游戏资源加载完毕");
        //var jsons = this.resourceLoader.getResult("winspritesheet");
       // var winsprite = SSResourceManager.createSpriteByjson(jsons, "winspritesheet");

        //图片加载获取返回的是一个spritesheet对象,loadFile方法中指定  type: "spritesheet"
        var tempspritesheet = this.resourceLoader.getResult("winspritesheet2") as createjs.SpriteSheet;
        console.log(typeof (tempspritesheet));
        var winsprite = SSResourceManager.createSpriteByPic(tempspritesheet, "winspritesheet2");
        winsprite.framerate = 20;
        winsprite.play();
        this.gamestage.addChild(winsprite);
        //..........................................
        var tempimg = this.resourceLoader.getResult("pic") as HTMLImageElement;//返回一个An image tag (<image />) for images
        var tempbitmap = SSResourceManager.getBitmap(tempimg);
        tempbitmap.x = 100;
        tempbitmap.scaleX = 0.1;
        tempbitmap.scaleY = 0.1;
        this.gamestage.addChild(tempbitmap);
        //..........................................

        //通过loadqeue加载不成功
        //createjs.Sound.alternateExtensions = ["mp3"];
        //var tempSound = this.resourceLoader.getResult("soundmp3");  //返回一个 An audio tag (<audio >) for HTML audio.
        ////var instance = createjs.Sound.play("soundmp3");
        //var instance = ResourceManager.playSound("soundmp3");
        //instance.on("complete", this.soundPlayComplete, this);
        //instance.volume = 0.5;


        //声音单独方式加载
       
        SoundResManager.createSound("/images/BankerTwo.mp3","sound", this.soundLoadComplete, this);
        //..........................................

        
        var tempvideo = this.resourceLoader.getResult("videos");

        //创建视频并加载,然后添加到html中;
        var tempvideo2 = VideoResManager.createDOMElementVideo(200, 200, "/images/movie.ogg", "huabu2");
        tempvideo2.x = -10;
        this.gamestage.addChildAt(tempvideo2, 0);


        //获取舞台上的视频,并控制
        var myVideo2 = VideoResManager.getHVideo("myvideo");

        if (myVideo2.paused)
            myVideo2.play();
        else
            myVideo2.pause();
    }
   
    private soundLoadComplete(event) {
    // 这会引发针对每个已注册的声音。
        var instance = SoundResManager.playSound("sound");  // 发挥使用ID。也可以使用完整的源路径或event.src。
            instance.on("complete", this.soundPlayComplete, this);
            instance.volume = 0.5;
    }
    private soundPlayComplete(evt) {
        var target: createjs.WebAudioSoundInstance = evt.target;
        this.loadlog(target.position.toString());
        //alert(target.src +"播放完毕");
        this.loadlog(target.src + "播放完毕");
    }
    private loadlog(str:string) {
        $("#content textarea").append("    "+str+"<br/>");
    }

}
