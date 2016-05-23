var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var LoadingMeidator = (function (_super) {
        __extends(LoadingMeidator, _super);
        function LoadingMeidator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this, LoadingMeidator.NAME, viewComponent);
            MyConfig.loadingIndex = this;
        }
        LoadingMeidator.prototype.listNotificationInterests = function () {
            return [
                "showLoadingPanel"
            ];
        };
        LoadingMeidator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            console.log("LoadingMeidator 响应成功", notification.getName());
            switch (notification.getName()) {
                case "showLoadingPanel":
                    this.usecreatejsSource();
                    break;
            }
        };
        LoadingMeidator.prototype.usecreatejsSource = function () {
            loadingcreatejs.MotionGuidePlugin.install();
            loadingimages = loadingimages || {};
            ss = ss || {};
            var loader = new loadingcreatejs.LoadQueue();
            loader.addEventListener("fileload", this.handleFileLoad);
            loader.addEventListener("complete", this.handleComplete.bind(this));
            loader.loadFile({ src: "../../../../egame/images/loading_atlas_.json?1463196773695", type: "spritesheet", id: "loading_atlas_" }, true);
            loader.loadManifest(loadinglib.properties.manifest);
            loader.loadManifest(comnpokelib.properties.manifest);
        };
        LoadingMeidator.prototype.handleFileLoad = function (evt) {
            if (evt.item.type == "image") {
                loadingimages[evt.item.id] = evt.result;
            }
            console.log("加载资源完毕:" + evt.item.type + " :" + evt.item.id);
        };
        LoadingMeidator.prototype.handleComplete = function (evt) {
            var queue = evt.target;
            ss["loading_atlas_"] = queue.getResult("loading_atlas_");
            this.exportRoot = new loadinglib.loading();
            this.viewComponent.addChild(this.exportRoot);
            this.startLoadGameRes();
        };
        LoadingMeidator.prototype.startLoadGameRes = function () {
            var queaue = this.resourceLoader = new createjs.LoadQueue(true);
            var loadItems = [
                { id: "pic", src: "/images/Chrysanthemum.jpg" },
                { id: "winspritesheet", src: "/egame/images/win2.json" }
            ];
            queaue.loadFile({ src: "/egame/images/win2.json", type: "spritesheet", id: "winspritesheet2" }, true);
            queaue.loadFile({ src: "/egame/images/bjlskin_atlas_.json", type: "spritesheet", id: "bjlskin" }, true);
            queaue.addEventListener("fileload", this.handleResFileLoad.bind(this));
            queaue.addEventListener("complete", this.handleResComplete.bind(this));
            queaue.loadManifest(loadItems, false);
            queaue.load();
        };
        LoadingMeidator.prototype.handleResFileLoad = function (evt) {
            LoadingMeidator.loadedResArr[LoadingMeidator.loadedResArr.length] =
                {
                    id: evt.item.id, res: evt.result, types: evt.item.type
                };
            console.log("加载资源完毕:" + evt.item.type + " :" + evt.item.id);
            this.loadlog(evt.item.type + " :" + evt.item.id);
            var frameNumber = Math.floor(LoadingMeidator.loadedResArr.length / 3 * 99);
            console.log(frameNumber);
            this.exportRoot.instance.progressMc.gotoAndStop(frameNumber);
            this.exportRoot.instance.messageTxt.text = evt.item.type + " :" + evt.item.id + ":加载完毕";
        };
        LoadingMeidator.prototype.handleResComplete = function (evt) {
            console.log("所有游戏资源加载完毕");
            var data = { ss: this.resourceLoader.getResult("bjlskin"), type: "bjlskin" };
            this.sendNotification(game.AppFacade.CHANGGAMETYPE, data);
            this.viewComponent.removeAllChildren();
        };
        LoadingMeidator.prototype.loadlog = function (str) {
            $("#content textarea").append("    " + str + "<br/>");
        };
        LoadingMeidator.NAME = "LoadingMeidator";
        LoadingMeidator.loadedResArr = [];
        return LoadingMeidator;
    }(puremvc.Mediator));
    game.LoadingMeidator = LoadingMeidator;
})(game || (game = {}));
