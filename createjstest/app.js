var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myaquare1 = {};
myaquare1.color = "d";
myaquare1.traceHello = function (info) { };
var test;
(function (test) {
    var Mysquare = (function () {
        function Mysquare() {
            this.time = 0;
        }
        Mysquare.prototype.traceHello = function (info) {
            alert(info);
        };
        return Mysquare;
    }());
    test.Mysquare = Mysquare;
})(test || (test = {}));
var Mysquare2 = (function (_super) {
    __extends(Mysquare2, _super);
    function Mysquare2() {
        _super.apply(this, arguments);
    }
    Mysquare2.prototype.traceHello = function (info) {
        _super.prototype.traceHello.call(this, info);
        alert(info);
    };
    Mysquare2.prototype.nihao = function () {
        _super.prototype.traceHello.call(this, "nihao");
    };
    return Mysquare2;
}(test.Mysquare));
var myArray;
myArray = ["Bob", "Fred"];
var Clock1 = (function () {
    function Clock1(h, m) {
        this.time = 0;
    }
    ;
    Clock1.prototype.trace = function () {
    };
    return Clock1;
}());
var cs = Clock1;
var newClock = new cs(7, 30);
console.log(newClock);
var square = {};
square.color = "red";
square.sideLength = 100;
square.penWidth = 50;
var square2 = { sideLength: 0, color: "", penWidth: 0 };
var hello = (function () {
    function hello(start) {
        this.interval = 0;
        this.niaho = function (start) {
            return "";
        };
        this.export = hello;
    }
    hello.prototype.reset = function () {
    };
    return hello;
}());
var puremvc;
(function (puremvc) {
    "use strict";
    var Observer = (function () {
        function Observer(notifyMethod, notifyContext) {
            this.notify = null;
            this.context = null;
            this.setNotifyMethod(notifyMethod);
            this.setNotifyContext(notifyContext);
        }
        Observer.prototype.getNotifyMethod = function () {
            return this.notify;
        };
        Observer.prototype.setNotifyMethod = function (notifyMethod) {
            this.notify = notifyMethod;
        };
        Observer.prototype.getNotifyContext = function () {
            return this.context;
        };
        Observer.prototype.setNotifyContext = function (notifyContext) {
            this.context = notifyContext;
        };
        Observer.prototype.notifyObserver = function (notification) {
            this.getNotifyMethod().call(this.getNotifyContext(), notification);
        };
        Observer.prototype.compareNotifyContext = function (object) {
            return object === this.context;
        };
        return Observer;
    }());
    puremvc.Observer = Observer;
})(puremvc || (puremvc = {}));
var puremvc;
(function (puremvc) {
    "use strict";
    var View = (function () {
        function View() {
            this.mediatorMap = null;
            this.observerMap = null;
            if (View.instance)
                throw Error(View.SINGLETON_MSG);
            View.instance = this;
            this.mediatorMap = {};
            this.observerMap = {};
            this.initializeView();
        }
        View.prototype.initializeView = function () {
        };
        View.prototype.registerObserver = function (notificationName, observer) {
            var observers = this.observerMap[notificationName];
            if (observers)
                observers.push(observer);
            else
                this.observerMap[notificationName] = [observer];
        };
        View.prototype.removeObserver = function (notificationName, notifyContext) {
            var observers = this.observerMap[notificationName];
            var i = observers.length;
            while (i--) {
                var observer = observers[i];
                if (observer.compareNotifyContext(notifyContext)) {
                    observers.splice(i, 1);
                    break;
                }
            }
            if (observers.length == 0)
                delete this.observerMap[notificationName];
        };
        View.prototype.notifyObservers = function (notification) {
            var notificationName = notification.getName();
            var observersRef = this.observerMap[notificationName];
            if (observersRef) {
                var observers = observersRef.slice(0);
                var len = observers.length;
                for (var i = 0; i < len; i++) {
                    var observer = observers[i];
                    observer.notifyObserver(notification);
                }
            }
        };
        View.prototype.registerMediator = function (mediator) {
            var name = mediator.getMediatorName();
            if (this.mediatorMap[name])
                return;
            this.mediatorMap[name] = mediator;
            var interests = mediator.listNotificationInterests();
            var len = interests.length;
            if (len > 0) {
                var observer = new puremvc.Observer(mediator.handleNotification, mediator);
                for (var i = 0; i < len; i++)
                    this.registerObserver(interests[i], observer);
            }
            mediator.onRegister();
        };
        View.prototype.retrieveMediator = function (mediatorName) {
            return this.mediatorMap[mediatorName] || null;
        };
        View.prototype.removeMediator = function (mediatorName) {
            var mediator = this.mediatorMap[mediatorName];
            if (!mediator)
                return null;
            var interests = mediator.listNotificationInterests();
            var i = interests.length;
            while (i--)
                this.removeObserver(interests[i], mediator);
            delete this.mediatorMap[mediatorName];
            mediator.onRemove();
            return mediator;
        };
        View.prototype.hasMediator = function (mediatorName) {
            return this.mediatorMap[mediatorName] != null;
        };
        View.getInstance = function () {
            if (!View.instance)
                View.instance = new View();
            return View.instance;
        };
        View.SINGLETON_MSG = "View singleton already constructed!";
        return View;
    }());
    puremvc.View = View;
})(puremvc || (puremvc = {}));
var puremvc;
(function (puremvc) {
    "use strict";
    var Controller = (function () {
        function Controller() {
            this.view = null;
            this.commandMap = null;
            if (Controller.instance)
                throw Error(Controller.SINGLETON_MSG);
            Controller.instance = this;
            this.commandMap = {};
            this.initializeController();
        }
        Controller.prototype.initializeController = function () {
            this.view = puremvc.View.getInstance();
        };
        Controller.prototype.executeCommand = function (notification) {
            var commandClassRef = this.commandMap[notification.getName()];
            if (commandClassRef) {
                var command = new commandClassRef();
                command.execute(notification);
            }
        };
        Controller.prototype.registerCommand = function (notificationName, commandClassRef) {
            if (!this.commandMap[notificationName])
                this.view.registerObserver(notificationName, new puremvc.Observer(this.executeCommand, this));
            this.commandMap[notificationName] = commandClassRef;
        };
        Controller.prototype.hasCommand = function (notificationName) {
            return this.commandMap[notificationName] != null;
        };
        Controller.prototype.removeCommand = function (notificationName) {
            if (this.hasCommand(notificationName)) {
                this.view.removeObserver(notificationName, this);
                delete this.commandMap[notificationName];
            }
        };
        Controller.getInstance = function () {
            if (!Controller.instance)
                Controller.instance = new Controller();
            return Controller.instance;
        };
        Controller.SINGLETON_MSG = "Controller singleton already constructed!";
        return Controller;
    }());
    puremvc.Controller = Controller;
})(puremvc || (puremvc = {}));
var puremvc;
(function (puremvc) {
    "use strict";
    var Model = (function () {
        function Model() {
            this.proxyMap = null;
            if (Model.instance)
                throw Error(Model.SINGLETON_MSG);
            Model.instance = this;
            this.proxyMap = {};
            this.initializeModel();
        }
        Model.prototype.initializeModel = function () {
        };
        Model.prototype.registerProxy = function (proxy) {
            this.proxyMap[proxy.getProxyName()] = proxy;
            proxy.onRegister();
        };
        Model.prototype.removeProxy = function (proxyName) {
            var proxy = this.proxyMap[proxyName];
            if (proxy) {
                delete this.proxyMap[proxyName];
                proxy.onRemove();
            }
            return proxy;
        };
        Model.prototype.retrieveProxy = function (proxyName) {
            return this.proxyMap[proxyName] || null;
        };
        Model.prototype.hasProxy = function (proxyName) {
            return this.proxyMap[proxyName] != null;
        };
        Model.getInstance = function () {
            if (!Model.instance)
                Model.instance = new Model();
            return Model.instance;
        };
        Model.SINGLETON_MSG = "Model singleton already constructed!";
        return Model;
    }());
    puremvc.Model = Model;
})(puremvc || (puremvc = {}));
var puremvc;
(function (puremvc) {
    "use strict";
    var Notification = (function () {
        function Notification(name, body, type) {
            if (body === void 0) { body = null; }
            if (type === void 0) { type = null; }
            this.name = null;
            this.body = null;
            this.type = null;
            this.name = name;
            this.body = body;
            this.type = type;
        }
        Notification.prototype.getName = function () {
            return this.name;
        };
        Notification.prototype.setBody = function (body) {
            this.body = body;
        };
        Notification.prototype.getBody = function () {
            return this.body;
        };
        Notification.prototype.setType = function (type) {
            this.type = type;
        };
        Notification.prototype.getType = function () {
            return this.type;
        };
        Notification.prototype.toString = function () {
            var msg = "Notification Name: " + this.getName();
            msg += "\nBody:" + ((this.getBody() == null) ? "null" : this.getBody().toString());
            msg += "\nType:" + ((this.getType() == null) ? "null" : this.getType());
            return msg;
        };
        return Notification;
    }());
    puremvc.Notification = Notification;
})(puremvc || (puremvc = {}));
var puremvc;
(function (puremvc) {
    "use strict";
    var Facade = (function () {
        function Facade() {
            this.model = null;
            this.view = null;
            this.controller = null;
            if (Facade.instance)
                throw Error(Facade.SINGLETON_MSG);
            Facade.instance = this;
            this.initializeFacade();
        }
        Facade.prototype.initializeFacade = function () {
            this.initializeModel();
            this.initializeController();
            this.initializeView();
        };
        Facade.prototype.initializeModel = function () {
            if (!this.model)
                this.model = puremvc.Model.getInstance();
        };
        Facade.prototype.initializeController = function () {
            if (!this.controller)
                this.controller = puremvc.Controller.getInstance();
        };
        Facade.prototype.initializeView = function () {
            if (!this.view)
                this.view = puremvc.View.getInstance();
        };
        Facade.prototype.registerCommand = function (notificationName, commandClassRef) {
            this.controller.registerCommand(notificationName, commandClassRef);
        };
        Facade.prototype.removeCommand = function (notificationName) {
            this.controller.removeCommand(notificationName);
        };
        Facade.prototype.hasCommand = function (notificationName) {
            return this.controller.hasCommand(notificationName);
        };
        Facade.prototype.registerProxy = function (proxy) {
            this.model.registerProxy(proxy);
        };
        Facade.prototype.retrieveProxy = function (proxyName) {
            return this.model.retrieveProxy(proxyName);
        };
        Facade.prototype.removeProxy = function (proxyName) {
            var proxy;
            if (this.model)
                proxy = this.model.removeProxy(proxyName);
            return proxy;
        };
        Facade.prototype.hasProxy = function (proxyName) {
            return this.model.hasProxy(proxyName);
        };
        Facade.prototype.registerMediator = function (mediator) {
            if (this.view)
                this.view.registerMediator(mediator);
        };
        Facade.prototype.retrieveMediator = function (mediatorName) {
            return this.view.retrieveMediator(mediatorName);
        };
        Facade.prototype.removeMediator = function (mediatorName) {
            var mediator;
            if (this.view)
                mediator = this.view.removeMediator(mediatorName);
            return mediator;
        };
        Facade.prototype.hasMediator = function (mediatorName) {
            return this.view.hasMediator(mediatorName);
        };
        Facade.prototype.notifyObservers = function (notification) {
            if (this.view)
                this.view.notifyObservers(notification);
        };
        Facade.prototype.sendNotification = function (name, body, type) {
            if (body === void 0) { body = null; }
            if (type === void 0) { type = null; }
            this.notifyObservers(new puremvc.Notification(name, body, type));
        };
        Facade.getInstance = function () {
            if (!Facade.instance)
                Facade.instance = new Facade();
            return Facade.instance;
        };
        Facade.SINGLETON_MSG = "Facade singleton already constructed!";
        return Facade;
    }());
    puremvc.Facade = Facade;
})(puremvc || (puremvc = {}));
var game;
(function (game) {
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade() {
            _super.call(this);
        }
        AppFacade.getInstance = function () {
            if (this.instance == null)
                this.instance = new AppFacade();
            return (this.instance);
        };
        AppFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, game.StartupCommand);
        };
        AppFacade.prototype.startUp = function (rootView) {
            console.log("facade初始化完成");
            this.stage = rootView;
            this.sendNotification(AppFacade.STARTUP, rootView);
            this.removeCommand(AppFacade.STARTUP);
        };
        AppFacade.STARTUP = "startup";
        return AppFacade;
    }(puremvc.Facade));
    game.AppFacade = AppFacade;
})(game || (game = {}));
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var et = new EaseljsTest();
};
var EaseljsTest = (function () {
    function EaseljsTest() {
        var canvas = document.getElementById("myCanvas");
        this.mstage = new createjs.Stage(canvas);
        var circle = new createjs.Shape();
        circle.addEventListener("click", this.handleClick);
        console.log("执行到createjs" + canvas.namespaceURI);
        circle.graphics.setStrokeStyle(5).beginStroke("rgba(0,0,0,.5)").beginFill("orange").drawCircle(0, 0, 50);
        var tempmc = new createjs.MovieClip(null, 0, true, { start: 20 });
        tempmc.addChild(circle);
        this.mstage.addChild(tempmc);
        game.AppFacade.getInstance().startUp(this.mstage);
        game.AppFacade.getInstance().sendNotification("showTestPanel");
        console.log("发送消息成功");
        var dfdf;
        console.log(dfdf);
        this.mstage.update();
        this.setTableRowHtml1();
    }
    EaseljsTest.prototype.setTableRowHtml1 = function () {
        var userName = "";
        $("tr").each(function () {
            userName = $(this).find("td:eq(1)").html();
        });
        alert(userName);
    };
    EaseljsTest.prototype.interfacetest = function () {
    };
    EaseljsTest.prototype.addTick = function () {
        createjs.Ticker.addEventListener("tick", handleTicker);
        function handleTicker() {
            this.mstage.update();
        }
    };
    EaseljsTest.prototype.handleClick = function (event) {
        console.log("shape 点击事件");
    };
    return EaseljsTest;
}());
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
var puremvc;
(function (puremvc) {
    "use strict";
    var Mediator = (function (_super) {
        __extends(Mediator, _super);
        function Mediator(mediatorName, viewComponent) {
            if (mediatorName === void 0) { mediatorName = null; }
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this);
            this.mediatorName = null;
            this.viewComponent = null;
            this.mediatorName = (mediatorName != null) ? mediatorName : Mediator.NAME;
            this.viewComponent = viewComponent;
        }
        Mediator.prototype.getMediatorName = function () {
            return this.mediatorName;
        };
        Mediator.prototype.getViewComponent = function () {
            return this.viewComponent;
        };
        Mediator.prototype.setViewComponent = function (viewComponent) {
            this.viewComponent = viewComponent;
        };
        Mediator.prototype.listNotificationInterests = function () {
            return new Array();
        };
        Mediator.prototype.handleNotification = function (notification) {
        };
        Mediator.prototype.onRegister = function () {
        };
        Mediator.prototype.onRemove = function () {
        };
        Mediator.NAME = 'Mediator';
        return Mediator;
    }(puremvc.Notifier));
    puremvc.Mediator = Mediator;
})(puremvc || (puremvc = {}));
var puremvc;
(function (puremvc) {
    "use strict";
    var Proxy = (function (_super) {
        __extends(Proxy, _super);
        function Proxy(proxyName, data) {
            if (proxyName === void 0) { proxyName = null; }
            if (data === void 0) { data = null; }
            _super.call(this);
            this.proxyName = null;
            this.data = null;
            this.proxyName = (proxyName != null) ? proxyName : Proxy.NAME;
            if (data != null)
                this.setData(data);
        }
        Proxy.prototype.getProxyName = function () {
            return this.proxyName;
        };
        Proxy.prototype.setData = function (data) {
            this.data = data;
        };
        Proxy.prototype.getData = function () {
            return this.data;
        };
        Proxy.prototype.onRegister = function () {
        };
        Proxy.prototype.onRemove = function () {
        };
        Proxy.NAME = "Proxy";
        return Proxy;
    }(puremvc.Notifier));
    puremvc.Proxy = Proxy;
})(puremvc || (puremvc = {}));
var game;
(function (game) {
    var ControllerPrepCommand = (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            _super.call(this);
        }
        ControllerPrepCommand.prototype.execute = function (notification) {
        };
        return ControllerPrepCommand;
    }(puremvc.SimpleCommand));
    game.ControllerPrepCommand = ControllerPrepCommand;
})(game || (game = {}));
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
var TestMeidator = (function (_super) {
    __extends(TestMeidator, _super);
    function TestMeidator(viewComponent) {
        if (viewComponent === void 0) { viewComponent = null; }
        _super.call(this, TestMeidator.NAME, viewComponent);
        console.log("创建testmediator 成功");
    }
    TestMeidator.prototype.listNotificationInterests = function () {
        return [
            "showTestPanel"
        ];
    };
    TestMeidator.prototype.handleNotification = function (notification) {
        var data = notification.getBody();
        console.log("testmediator 响应成功", notification.getName());
        switch (notification.getName()) {
            case "showTestPanel": {
                if (this.viewComponent == null) {
                    console.log("画板舞台不存在");
                    return;
                }
                this.viewComponent.addChild(new TestPanel());
                console.log("创建面板成功");
            }
        }
    };
    TestMeidator.NAME = "TestMediator";
    return TestMeidator;
}(puremvc.Mediator));
var TestPanel = (function (_super) {
    __extends(TestPanel, _super);
    function TestPanel() {
        _super.call(this);
        this.createChildren();
    }
    TestPanel.prototype.createChildren = function () {
        var text = new createjs.Text("hello testpanel", "normal 32px microsoft yahei", "#222222");
        text.x = 0;
        this.addChild(text);
    };
    return TestPanel;
}(createjs.MovieClip));
//# sourceMappingURL=app.js.map