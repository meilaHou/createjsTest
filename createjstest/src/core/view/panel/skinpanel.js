var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var SkinPanel = (function (_super) {
        __extends(SkinPanel, _super);
        function SkinPanel(ssdata, sskey) {
            _super.call(this);
            this.resourceLoader = new createjs.LoadQueue();
            this.ssKey = "";
            this.ssKey = sskey;
            this.resourceLoader.addEventListener("fileload", this.handleFileLoad.bind(this));
            this.resourceLoader.addEventListener("complete", this.handleComplete.bind(this));
            this.addEventListener("removed", this.removeHandler.bind(this));
            ss = ss || {};
            ss[this.ssKey] = ssdata;
        }
        SkinPanel.prototype.handleFileLoad = function (evt) {
            console.log("加载资源: " + evt.item.type + " :" + evt.item.id + "完毕");
        };
        SkinPanel.prototype.handleComplete = function (evt) {
            var queue = evt.target;
            console.log(queue.type + "所有游戏资源加载完毕");
            this.resourceLoader.removeEventListener("fileload", this.handleFileLoad.bind(this));
            this.resourceLoader.removeEventListener("complete", this.handleComplete.bind(this));
        };
        SkinPanel.prototype.removeHandler = function (evt) {
            this.removeEventListener("removed", this.removeHandler.bind(this));
            this.resourceLoader = null;
            this.content = null;
            this.ssKey = "";
            this.clear();
        };
        SkinPanel.prototype.clear = function () {
        };
        return SkinPanel;
    }(createjs.MovieClip));
    game.SkinPanel = SkinPanel;
})(game || (game = {}));
