var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestMeidator = (function (_super) {
    __extends(TestMeidator, _super);
    function TestMeidator(viewComponent) {
        if (viewComponent === void 0) { viewComponent = null; }
        _super.call(this, TestMeidator.NAME, viewComponent);
        console.log("创建testmediator 成功");
    }
    TestMeidator.prototype.listNotificationInterests = function () {
        return [
            "showTestPanel"
        ];
    };
    TestMeidator.prototype.handleNotification = function (notification) {
        var data = notification.getBody();
        console.log("testmediator 响应成功", notification.getName());
        switch (notification.getName()) {
            case "showTestPanel": {
                if (this.viewComponent == null) {
                    console.log("画板舞台不存在");
                    return;
                }
                this.viewComponent.addChild(new TestPanel());
                console.log("创建面板成功");
            }
        }
    };
    TestMeidator.NAME = "TestMediator";
    return TestMeidator;
}(puremvc.Mediator));
