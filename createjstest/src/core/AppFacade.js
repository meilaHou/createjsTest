var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade() {
            _super.call(this);
        }
        AppFacade.getInstance = function () {
            if (this.instance == null)
                this.instance = new AppFacade();
            return (this.instance);
        };
        AppFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, game.StartupCommand);
        };
        /**
         * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
         * @param	rootView	-	PureMVC应用程序的根视图root，包含其它所有的View Componet
         */
        AppFacade.prototype.startUp = function (rootView) {
            console.log("facade初始化完成");
            this.stage = rootView;
            this.sendNotification(AppFacade.STARTUP, rootView);
            this.removeCommand(AppFacade.STARTUP); //PureMVC初始化完成，注销STARUP命令
        };
        AppFacade.STARTUP = "startup";
        return AppFacade;
    }(puremvc.Facade));
    game.AppFacade = AppFacade;
})(game || (game = {}));
//# sourceMappingURL=AppFacade.js.map