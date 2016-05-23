var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var SkinMediator = (function (_super) {
        __extends(SkinMediator, _super);
        function SkinMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this, SkinMediator.NAME, viewComponent);
        }
        SkinMediator.prototype.listNotificationInterests = function () {
            return [
                "showSkinPanel"
            ];
        };
        SkinMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            console.log("SkinMediator 响应成功", notification.getName());
            switch (notification.getName()) {
                case "showSkinPanel":
                    break;
            }
        };
        SkinMediator.prototype.showScene = function (data) {
            if (!data["type"]) {
                throw new Error("游戏类型不能为空.");
            }
            switch (data["type"]) {
                case "bjlskin":
                    this._currentLib = new game.BjlSKinPanel(data["ss"]);
                    break;
            }
            this.viewComponent.addChild(this._currentLib);
        };
        SkinMediator.NAME = "SkinMediator";
        return SkinMediator;
    }(puremvc.Mediator));
    game.SkinMediator = SkinMediator;
})(game || (game = {}));
