var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var ModelPrepCommand = (function (_super) {
        __extends(ModelPrepCommand, _super);
        function ModelPrepCommand() {
            _super.call(this);
        }
        ModelPrepCommand.prototype.execute = function (notification) {
        };
        return ModelPrepCommand;
    }(puremvc.SimpleCommand));
    game.ModelPrepCommand = ModelPrepCommand;
})(game || (game = {}));
