var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestPanel = (function (_super) {
    __extends(TestPanel, _super);
    function TestPanel() {
        _super.call(this);
        this.createChildren();
    }
    TestPanel.prototype.createChildren = function () {
        var text = new createjs.Text("hello testpanel", "normal 32px microsoft yahei", "#222222");
        text.x = 0;
        this.addChild(text);
    };
    return TestPanel;
}(createjs.MovieClip));
