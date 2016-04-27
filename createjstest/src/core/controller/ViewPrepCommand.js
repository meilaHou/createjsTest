var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var ViewPrepCommand = (function (_super) {
        __extends(ViewPrepCommand, _super);
        function ViewPrepCommand() {
            _super.call(this);
        }
        ViewPrepCommand.prototype.execute = function (notification) {
            this.facade.registerMediator(new TestMeidator(this.facade.stage));
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    game.ViewPrepCommand = ViewPrepCommand;
})(game || (game = {}));
