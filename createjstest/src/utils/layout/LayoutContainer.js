var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LayOutContainer = (function (_super) {
    __extends(LayOutContainer, _super);
    function LayOutContainer() {
        _super.call(this);
        this._debugShow = false;
        this.addEventListener("added", this.addToStageHandler.bind(this));
    }
    LayOutContainer.prototype.addToStageHandler = function (evt) {
        this.index = this.parent.getChildIndex(this);
        this.createDisplyText();
    };
    LayOutContainer.prototype.createDisplyText = function () {
        if (this.txt) {
            return;
        }
        this.txt = new createjs.Text("", "15px Arial", "#ff7700");
        this.txt.text = "name:" + this.name + "  postion:" + this.index + " parent:" + this.parent.name;
        this.txt.lineWidth = 500;
        this.txt.lineHeight = 70;
        this.txt.y = this.index * 50;
        this.addChild(this.txt);
        this.txt.visible = this._debugShow;
    };
    LayOutContainer.prototype.drawBg = function () {
    };
    LayOutContainer.prototype.showPostion = function (bln) {
        this._debugShow = bln;
        this.txt.visible = this._debugShow;
    };
    return LayOutContainer;
}(createjs.Container));
