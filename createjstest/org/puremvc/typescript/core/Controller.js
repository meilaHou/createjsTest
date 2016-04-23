///<reference path='../../../../org/puremvc/typescript/interfaces/IController.ts'/>
///<reference path='../../../../org/puremvc/typescript/interfaces/IView.ts'/>
///<reference path='../../../../org/puremvc/typescript/interfaces/INotification.ts'/>
///<reference path='../../../../org/puremvc/typescript/interfaces/ICommand.ts'/>
///<reference path='../../../../org/puremvc/typescript/patterns/observer/Observer.ts'/>
///<reference path='../../../../org/puremvc/typescript/core/View.ts'/>
var puremvc;
(function (puremvc) {
    "use strict";
    /**
     * The <code>Controller</code> class for PureMVC.
     *
     * A singleton <code>IController</code> implementation.
     *
     * In PureMVC, the <code>Controller</code> class follows the 'Command and Controller' strategy,
     * and assumes these responsibilities:
     *
     * <UL>
     * <LI>Remembering which <code>ICommand</code>s are intended to handle which
     * <code>INotification</code>s.
     * <LI>Registering itself as an <code>IObserver</code> with the <code>View</code> for each
     * <code>INotification</code> that it has an <code>ICommand</code> mapping for.
     * <LI>Creating a new instance of the proper <code>ICommand</code> to handle a given
     * <code>INotification</code> when notified by the <code>View</code>.
     * <LI>Calling the <code>ICommand</code>'s <code>execute</code> method, passing in the
     * <code>INotification</code>.
     *
     * Your application must register <code>ICommand</code>s with the <code>Controller</code>.
     *
     * The simplest way is to subclass </code>Facade</code>, and use its
     * <code>initializeController</code> method to add your registrations.
     */
    var Controller = (function () {
        /**
        /**
         * Constructs a <code>Controller</code> instance.
         *
         * This <code>IController</code> implementation is a singleton, so you should not call the
         * constructor directly, but instead call the static singleton Factory method
         * <code>Controller.getInstance()</code>.
         *
         * @throws Error
         * 		Throws an error if an instance for this singleton has already been constructed.
         */
        function Controller() {
            /**
             * Local reference to the <code>View</code> singleton.
             *
             * @protected
             */
            this.view = null;
            /**
             * Mapping of <code>Notification<code> names to <code>Command</code> constructors references.
             *
             * @protected
             */
            this.commandMap = null;
            if (Controller.instance)
                throw Error(Controller.SINGLETON_MSG);
            Controller.instance = this;
            this.commandMap = {};
            this.initializeController();
        }
        /**
         * Initialize the singleton <code>Controller</code> instance.
         *
         * Called automatically by the constructor.
         *
         * Note that if you are using a subclass of <code>View</code> in your application, you
         * should <i>also</i> subclass <code>Controller</code> and override the
         * <code>initializeController</code> method in the following way:
         *
         * <pre>
         *		// ensure that the Controller is talking to my IView implementation
         *		initializeController():void
         *		{
         *			this.view = MyView.getInstance();
         *		}
         * </pre>
         *
         * @protected
         */
        Controller.prototype.initializeController = function () {
            this.view = puremvc.View.getInstance();
        };
        /**
         * If an <code>ICommand</code> has previously been registered to handle the given
         * <code>INotification</code>, then it is executed.
         *
         * @param notification
         * 		The <code>INotification</code> the command will receive as parameter.
         */
        Controller.prototype.executeCommand = function (notification) {
            /*
             * Typed any here instead of <code>Function</code> ( won't compile if set to Function
             * because today the compiler consider that <code>Function</code> is not newable and
             * doesn't have a <code>Class</code> type)
             */
            var commandClassRef = this.commandMap[notification.getName()];
            if (commandClassRef) {
                var command = new commandClassRef();
                command.execute(notification);
            }
        };
        /**
         * Register a particular <code>ICommand</code> class as the handler for a particular
         * <code>INotification</code>.
         *
         * If an <code>ICommand</code> has already been registered to handle
         * <code>INotification</code>s with this name, it is no longer used, the new
         * <code>ICommand</code> is used instead.
         *
         * The <code>Observer</code> for the new <code>ICommand</code> is only created if this the
         * first time an <code>ICommand</code> has been registered for this
         * <code>Notification</code> name.
         *
         * @param notificationName
         * 		The name of the <code>INotification</code>.
         *
         * @param commandClassRef
         * 		The constructor of the <code>ICommand</code>.
         */
        Controller.prototype.registerCommand = function (notificationName, commandClassRef) {
            if (!this.commandMap[notificationName])
                this.view.registerObserver(notificationName, new puremvc.Observer(this.executeCommand, this));
            this.commandMap[notificationName] = commandClassRef;
        };
        /**
         * Check if an <code>ICommand</code> is registered for a given <code>Notification</code>.
         *
         * @param notificationName
         * 		Name of the <code>Notification</code> to check wheter an <code>ICommand</code> is
         * 		registered for.
         *
         * @return
         * 		An <code>ICommand</code> is currently registered for the given
         * 		<code>notificationName</code>.
         */
        Controller.prototype.hasCommand = function (notificationName) {
            return this.commandMap[notificationName] != null;
        };
        /**
         * Remove a previously registered <code>ICommand</code> to <code>INotification</code>
         * mapping.
         *
         * @param notificationName
         * 		The name of the <code>INotification</code> to remove the <code>ICommand</code>
         * 		mapping for.
         */
        Controller.prototype.removeCommand = function (notificationName) {
            // if the Command is registered...
            if (this.hasCommand(notificationName)) {
                this.view.removeObserver(notificationName, this);
                delete this.commandMap[notificationName];
            }
        };
        /**
         * <code>Controller</code> singleton Factory method.
         *
         * @return
         * 		The singleton instance of <code>Controller</code>
         */
        Controller.getInstance = function () {
            if (!Controller.instance)
                Controller.instance = new Controller();
            return Controller.instance;
        };
        /**
         * Error message used to indicate that a controller singleton is already constructed when
         * trying to constructs the class twice.
         *
         * @protected
         * @constant
         */
        Controller.SINGLETON_MSG = "Controller singleton already constructed!";
        return Controller;
    }());
    puremvc.Controller = Controller;
})(puremvc || (puremvc = {}));
//# sourceMappingURL=Controller.js.map