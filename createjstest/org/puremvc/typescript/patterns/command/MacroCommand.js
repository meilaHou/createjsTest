var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var puremvc;
(function (puremvc) {
    "use strict";
    var MacroCommand = (function (_super) {
        __extends(MacroCommand, _super);
        function MacroCommand() {
            _super.call(this);
            this.subCommands = null;
            this.subCommands = new Array();
            this.initializeMacroCommand();
        }
        MacroCommand.prototype.initializeMacroCommand = function () {
        };
        MacroCommand.prototype.addSubCommand = function (commandClassRef) {
            this.subCommands.push(commandClassRef);
        };
        MacroCommand.prototype.execute = function (notification) {
            var subCommands = this.subCommands.slice(0);
            var len = this.subCommands.length;
            for (var i = 0; i < len; i++) {
                var commandClassRef = subCommands[i];
                var commandInstance = new commandClassRef();
                commandInstance.execute(notification);
            }
            this.subCommands.splice(0);
        };
        return MacroCommand;
    }(puremvc.Notifier));
    puremvc.MacroCommand = MacroCommand;
})(puremvc || (puremvc = {}));
