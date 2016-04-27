var puremvc;
(function (puremvc) {
    "use strict";
    var Notifier = (function () {
        function Notifier() {
            this.facade = null;
            this.facade = puremvc.Facade.getInstance();
        }
        Notifier.prototype.sendNotification = function (name, body, type) {
            if (body === void 0) { body = null; }
            if (type === void 0) { type = null; }
            this.facade.sendNotification(name, body, type);
        };
        return Notifier;
    }());
    puremvc.Notifier = Notifier;
})(puremvc || (puremvc = {}));
