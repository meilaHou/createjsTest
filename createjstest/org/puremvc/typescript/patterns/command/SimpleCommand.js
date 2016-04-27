var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var puremvc;
(function (puremvc) {
    "use strict";
    var SimpleCommand = (function (_super) {
        __extends(SimpleCommand, _super);
        function SimpleCommand() {
            _super.apply(this, arguments);
        }
        SimpleCommand.prototype.execute = function (notification) {
        };
        return SimpleCommand;
    }(puremvc.Notifier));
    puremvc.SimpleCommand = SimpleCommand;
})(puremvc || (puremvc = {}));
