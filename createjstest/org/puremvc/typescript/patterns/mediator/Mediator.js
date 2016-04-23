///<reference path='../../../../../org/puremvc/typescript/interfaces/IMediator.ts'/>
///<reference path='../../../../../org/puremvc/typescript/interfaces/INotifier.ts'/>
///<reference path='../../../../../org/puremvc/typescript/interfaces/INotification.ts'/>
///<reference path='../../../../../org/puremvc/typescript/patterns/observer/Notifier.ts'/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var puremvc;
(function (puremvc) {
    "use strict";
    /**
     * A base <code>IMediator</code> implementation.
     *
     * Typically, a <code>Mediator</code> will be written to serve one specific control or group
     * controls and so, will not have a need to be dynamically named.
     */
    var Mediator = (function (_super) {
        __extends(Mediator, _super);
        /**
         * Constructs a <code>Mediator</code> instance.
         *
         * @param mediatorName
         * 		The name of the <code>Mediator</code>.
         *
         * @param viewComponent
         * 		The view component handled by this <code>Mediator</code>.
         */
        function Mediator(mediatorName, viewComponent) {
            if (mediatorName === void 0) { mediatorName = null; }
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this);
            /**
             * The name of the <code>Mediator</code>.
             *
             * @protected
             */
            this.mediatorName = null;
            /**
             * The <code>Mediator</code>'s view component.
             *
             * @protected
             */
            this.viewComponent = null;
            this.mediatorName = (mediatorName != null) ? mediatorName : Mediator.NAME;
            this.viewComponent = viewComponent;
        }
        /**
         * Get the <code>Mediator</code> instance name.
         *
         * @return
         * 		The <code>Mediator</code> instance name
         */
        Mediator.prototype.getMediatorName = function () {
            return this.mediatorName;
        };
        /**
         * Get the <code>Mediator</code>'s view component.
         *
         * Additionally, an implicit getter will usually be defined in the subclass that casts the
         * view object to a type, like this:
         *
         * <code>
         *		getMenu():Menu
         *		{
         *			return <Menu> this.viewComponent;
         *		}
         * </code>
         *
         * @return
         * 		The <code>Mediator</code>'s default view component.
         */
        Mediator.prototype.getViewComponent = function () {
            return this.viewComponent;
        };
        /**
         * Set the <code>IMediator</code>'s view component.
         *
         * @param viewComponent
         * 		The default view component to set for this <code>Mediator</code>.
         */
        Mediator.prototype.setViewComponent = function (viewComponent) {
            this.viewComponent = viewComponent;
        };
        /**
         * List the <code>INotification</code> names this <code>IMediator</code> is interested in
         * being notified of.
         *
         * @return
         * 		The list of notifications names in which is interested the <code>Mediator</code>.
         */
        Mediator.prototype.listNotificationInterests = function () {
            return new Array();
        };
        /**
         * Handle <code>INotification</code>s.
         *
         *
         * Typically this will be handled in a switch statement, with one 'case' entry per
         * <code>INotification</code> the <code>Mediator</code> is interested in.
         *
         * @param notification
         * 		The notification instance to be handled.
         */
        Mediator.prototype.handleNotification = function (notification) {
        };
        /**
         * Called by the View when the Mediator is registered. This method has to be overridden
         * by the subclass to know when the instance is registered.
         */
        Mediator.prototype.onRegister = function () {
        };
        /**
         * Called by the View when the Mediator is removed. This method has to be overridden
         * by the subclass to know when the instance is removed.
         */
        Mediator.prototype.onRemove = function () {
        };
        /**
         * Default name of the <code>Mediator</code>.
         *
         * @constant
         */
        Mediator.NAME = 'Mediator';
        return Mediator;
    }(puremvc.Notifier));
    puremvc.Mediator = Mediator;
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Mediator.js.map