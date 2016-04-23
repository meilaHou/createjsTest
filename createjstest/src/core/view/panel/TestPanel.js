var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var TestPanel = (function (_super) {
    __extends(TestPanel, _super);
    function TestPanel() {
        _super.call(this);
    }
    TestPanel.prototype.createChildren = function () {
        var text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
        text.x = 100;
        text.textBaseline = "alphabetic";
        this.addChild(text);
    };
    return TestPanel;
}(createjs.MovieClip));
//# sourceMappingURL=TestPanel.js.map