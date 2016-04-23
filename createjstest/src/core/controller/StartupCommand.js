var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
  * 初始化mvc controller
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var StartupCommand = (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            _super.call(this);
        }
        StartupCommand.prototype.initializeMacroCommand = function () {
            this.addSubCommand(game.ControllerPrepCommand);
            this.addSubCommand(game.ModelPrepCommand);
            this.addSubCommand(game.ViewPrepCommand);
        };
        return StartupCommand;
    }(puremvc.MacroCommand));
    game.StartupCommand = StartupCommand;
})(game || (game = {}));
//# sourceMappingURL=StartupCommand.js.map