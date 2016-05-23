var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var ChangeModuleCommand = (function (_super) {
        __extends(ChangeModuleCommand, _super);
        function ChangeModuleCommand() {
            _super.call(this);
        }
        ChangeModuleCommand.prototype.execute = function (notification) {
            var skinmeiator = this.facade.retrieveMediator(game.SkinMediator.NAME);
            skinmeiator.showScene(notification.getBody());
        };
        return ChangeModuleCommand;
    }(puremvc.SimpleCommand));
    game.ChangeModuleCommand = ChangeModuleCommand;
})(game || (game = {}));
