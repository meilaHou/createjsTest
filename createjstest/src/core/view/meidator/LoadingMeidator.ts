/// <reference path="../../../../org/puremvc/typescript/patterns/mediator/mediator.ts" />
/// <include path="../../../../egame/loading.ts" />
/// <reference path="../../../utils/res/soundresmanager.ts" />

module game {
    export class LoadingMeidator extends puremvc.Mediator implements puremvc.IMediator {

        public static NAME: string = "LoadingMeidator";
        public constructor(viewComponent: any = null) {
            super(LoadingMeidator.NAME, viewComponent);
            MyConfig.loadingIndex = this;
        }
        public listNotificationInterests(): Array<any> {
            return [
                "showLoadingPanel"
            ];
        }
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            console.log("LoadingMeidator 响应成功", notification.getName());
            switch (notification.getName()) {
                case "showLoadingPanel":
                    this. usecreatejsSource();
                    break;
            }
        }

        /*
    loading界面资源加载;
    */
        public usecreatejsSource() {
            // --- write your JS code here ---

            loadingcreatejs.MotionGuidePlugin.install();

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

            this.viewComponent.addChild(this.exportRoot);

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
                { id: "winspritesheet", src: "/egame/images/win2.json" }//文本文件的加载注意 文本的文字编码;不然返回undefined,如果没有这个文件,获取时,返回null;
            ];
            queaue.loadFile({ src: "../../../../egame/images/commonpoker_atlas_.json?1463196773695", type: "spritesheet", id: "commonpoker_atlas_" }, true);
            queaue.loadFile({ src: "/egame/images/win2.json", type: "spritesheet", id: "winspritesheet2" }, true);
            queaue.loadFile({ src: "/egame/images/bjlskin_atlas_.json", type: "spritesheet", id: "bjlskin" }, true);
            queaue.addEventListener("fileload", this.handleResFileLoad.bind(this));
            queaue.addEventListener("complete", this.handleResComplete.bind(this));
            queaue.loadManifest(loadItems, false);
            queaue.loadManifest(comnpokelib.properties.manifest,false)
            queaue.load();

        }

        private handleResFileLoad(evt) {
            LoadingMeidator.loadedResArr[LoadingMeidator.loadedResArr.length] =
                {
                    id: evt.item.id, res: evt.result, types: evt.item.type
                };
            console.log("加载资源完毕:" + evt.item.type + " :" + evt.item.id);
            this.loadlog(evt.item.type + " :" + evt.item.id);
            var frameNumber = Math.floor(LoadingMeidator.loadedResArr.length / 10 * 99);
            console.log(frameNumber);
            this.exportRoot.instance.progressMc.gotoAndStop(frameNumber);
            this.exportRoot.instance.messageTxt.text = evt.item.type + " :" + evt.item.id +":加载完毕";
        }
        private handleResComplete(evt) {
            console.log("所有游戏资源加载完毕");
            var spritesheet = this.resourceLoader.getResult("winspritesheet2") as createjs.SpriteSheet;
            var sprite = SSResourceManager.createSprite(spritesheet, "winspritesheet2");
            //sprite.play();
            //this.viewComponent.addChild(sprite);
            //SSResourceManager.delElement("winspritesheet2");
            //if (SSResourceManager.hasElement("winspritesheet2"))
            //{
            //    alert("winspritesheet2");
            //};
            ss["commonpoker_atlas_"] = this.resourceLoader.getResult("commonpoker_atlas_");
            var data: Object = { ss: this.resourceLoader.getResult("bjlskin"), type:"bjlskin"};
            this.sendNotification(AppFacade.CHANGGAMETYPE, data);
            (this.viewComponent as createjs.Container).removeAllChildren();
        }

        //private soundLoadComplete(event) {
        //    // 这会引发针对每个已注册的声音。
        //    var instance = SoundResManager.playSound("sound");  // 发挥使用ID。也可以使用完整的源路径或event.src。
        //    instance.on("complete", this.soundPlayComplete, this);
        //    instance.volume = 0.5;
        //}
        //private soundPlayComplete(evt) {
        //    var target: createjs.WebAudioSoundInstance = evt.target;
        //    this.loadlog(target.position.toString());
        //    //alert(target.src +"播放完毕");
        //    this.loadlog(target.src + "播放完毕");
        //}
        private loadlog(str: string) {
            $("#content textarea").append("    " + str + "");
        }

    }
}