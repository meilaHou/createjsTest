var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
  * 注册controller
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ControllerPrepCommand = (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            _super.call(this);
        }
        ControllerPrepCommand.prototype.execute = function (notification) {
            //    		(new SceneManager()).register();
            //            (new MainManager()).register();
            //服务器返回command
            //            (new Processor_100_1()).register();
        };
        return ControllerPrepCommand;
    }(puremvc.SimpleCommand));
    game.ControllerPrepCommand = ControllerPrepCommand;
})(game || (game = {}));
//# sourceMappingURL=ControllerPrepCommand.js.map