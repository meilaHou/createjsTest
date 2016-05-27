module game {
    /*
    包含下载功能,下载界面所需的内容;通用资源下载,用资源管理器下载并管理;
    */
    export class SkinPanel extends createjs.MovieClip {
        protected content: createjs.MovieClip;
        protected resourceLoader: createjs.LoadQueue = new createjs.LoadQueue();
        protected ssKey: string = "";
        constructor(ssdata: any,sskey:string) {
            super();
            this.ssKey = sskey;
            this.resourceLoader.addEventListener("fileload", this.handleFileLoad.bind(this));
            this.resourceLoader.addEventListener("complete", this.handleComplete.bind(this));
            this.addEventListener("removed", this.removeHandler.bind(this));
            ss = ss || {};
            ss[this.ssKey] = ssdata;
        }
        protected handleFileLoad(evt) {
            console.log("加载资源: " + evt.item.type + " :" + evt.item.id + "完毕");
        }


        protected handleComplete(evt) {
            var queue: createjs.LoadQueue = evt.target;
            console.log(queue.type + "所有游戏资源加载完毕");
            //this.addChild(this.content);

            this.resourceLoader.removeEventListener("fileload", this.handleFileLoad.bind(this));
            this.resourceLoader.removeEventListener("complete", this.handleComplete.bind(this));
        }
        protected removeHandler(evt) {
            this.removeEventListener("removed", this.removeHandler.bind(this));
            this.resourceLoader = null;
            this.content = null;
            this.ssKey = "";
            this.clear();
        }
        protected clear() {

        }
    }
}