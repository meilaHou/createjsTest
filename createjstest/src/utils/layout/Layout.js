var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        _super.call(this);
    }
    Layout.prototype.init = function (stage) {
        this.name = "layout";
        this._stage = stage;
        this._sceneUILayer = new LayOutContainer();
        this._sceneUILayer.name = "sceneUILayer";
        this._panelLayer = new LayOutContainer();
        this._panelLayer.name = "panelLayer";
        this._loadingLayer = new LayOutContainer();
        this._loadingLayer.name = "loadingLayer";
        this._tipLayer = new LayOutContainer();
        this._tipLayer.name = "tipLayer";
        this._alertLayer = new LayOutContainer();
        this._alertLayer.name = "alertLayer";
        this._mouseLayer = new LayOutContainer();
        this._mouseLayer.name = "_mouseLayer";
        this._chatLayer = new LayOutContainer();
        this._chatLayer.name = "_chatLayer";
        this._screenLayer = new LayOutContainer();
        this._screenLayer.name = "_screenLayer";
        this._effectLayer = new LayOutContainer();
        this._effectLayer.name = "effectLayer";
        this._newGuilderLayer = new LayOutContainer();
        this._newGuilderLayer.name = "_newGuilderLayer";
        this.addChild(this._sceneUILayer);
        this.addChild(this._chatLayer);
        this.addChild(this._panelLayer);
        this.addChild(this._alertLayer);
        this.addChild(this._screenLayer);
        this.addChild(this._loadingLayer);
        this.addChild(this._tipLayer);
        this.addChild(this._effectLayer);
        this.addChild(this._newGuilderLayer);
        this._stage.addChild(this._mouseLayer);
        this._stage.addChild(this);
    };
    Object.defineProperty(Layout.prototype, "stageWidth", {
        get: function () {
            var canvas = this._stage.canvas;
            return canvas.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layout.prototype, "stageHeight", {
        get: function () {
            var canvas = this._stage.canvas;
            return canvas.height;
        },
        enumerable: true,
        configurable: true
    });
    Layout.prototype.showDebug = function (bln) {
        for (var i = 0; i < this.numChildren; i++) {
            var temp = this.getChildAt(i);
            if (temp instanceof LayOutContainer) {
                temp.showPostion(bln);
            }
        }
        this._mouseLayer.showPostion(bln);
    };
    return Layout;
}(createjs.Container));
