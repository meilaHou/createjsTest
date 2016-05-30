module game {
    /*
    一个板块就是一个界面的 布局,一个布局,在一个模块或是整个游戏中只产生一次;

    包含下载功能,下载界面所需的内容;通用资源下载用资源管理器下载并管理;
    1.板块的加载,首先加载显示对象的资源,其次加载音频视频和将来用到的资源;
    这里的资源处理在板块内部;
    等待板块的所有的资源都加载完后,开始版块的 业务逻辑;

    2.通用资源加载,用资源管理器下载并管理;
    统一保存在各自资源类型的管理类中;


    板块卸载之后,移除所有的侦听,生成的对象;
    但保留所有的已经加载的资源;
    已经加载的资源下次加载无需重新加载??同样的方式加载的貌似只需请求和少量下载;


    */
    export class SkinPanel extends createjs.MovieClip {
        protected content: createjs.MovieClip;
        protected resourceLoader: createjs.LoadQueue = new createjs.LoadQueue();
        protected ssKey: string = "";
        constructor(ssdata: any,sskey:string) {
            super();
            this.ssKey = sskey;
            this.resourceLoader.addEventListener("fileload", this.handleFileLoad.bind(this));
            this.resourceLoader.addEventListener("complete", this.handleLoadComplete.bind(this));
            this.resourceLoader.on("progress",this.progressHandler);
            ss = ss || {};
            ss[this.ssKey] = ssdata;
        }   
        //可多次执行的初始化,与clear对应;
        public init() {
            this.addEventListener("added", this.addedHandler.bind(this))
            this.addEventListener("removed", this.removeHandler.bind(this));
        }
        protected handleFileLoad(evt) {
            console.log("加载资源: " + evt.item.type + " :" + evt.item.id + "完毕");
        }

        protected progressHandler(evt) {

        }
        protected handleLoadComplete(evt) {
            var queue: createjs.LoadQueue = evt.target;
            console.log(queue.type + "所有游戏资源加载完毕");
            //this.addChild(this.content);

            
        }
        protected addedHandler(evt) {
            this.removeEventListener("added", this.addedHandler.bind(this));
        }
        private removeHandler(evt) {
            this.removeEventListener("removed", this.removeHandler.bind(this));
            this.resourceLoader.removeEventListener("fileload", this.handleFileLoad.bind(this));
            this.resourceLoader.removeEventListener("complete", this.handleLoadComplete.bind(this));
            this.resourceLoader.off("progress", this.progressHandler);
            //this.resourceLoader = null;
            this.content = null;
            //this.ssKey = "";
            this.clear();
        }
        protected clear() {

        }
    }
}