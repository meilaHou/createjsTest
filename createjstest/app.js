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
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        _super.call(this);
    }
    Layout.prototype.init = function (stage) {
        this.name = "layout";
        this._stage = stage;
        this._sceneUILayer = new LayOutContainer();
        this._sceneUILayer.name = "sceneUILayer";
        this._panelLayer = new LayOutContainer();
        this._panelLayer.name = "panelLayer";
        this._loadingLayer = new LayOutContainer();
        this._loadingLayer.name = "loadingLayer";
        this._tipLayer = new LayOutContainer();
        this._tipLayer.name = "tipLayer";
        this._alertLayer = new LayOutContainer();
        this._alertLayer.name = "alertLayer";
        this._mouseLayer = new LayOutContainer();
        this._mouseLayer.name = "_mouseLayer";
        this._chatLayer = new LayOutContainer();
        this._chatLayer.name = "_chatLayer";
        this._screenLayer = new LayOutContainer();
        this._screenLayer.name = "_screenLayer";
        this._effectLayer = new LayOutContainer();
        this._effectLayer.name = "effectLayer";
        this._newGuilderLayer = new LayOutContainer();
        this._newGuilderLayer.name = "_newGuilderLayer";
        this.addChild(this._sceneUILayer);
        this.addChild(this._chatLayer);
        this.addChild(this._panelLayer);
        this.addChild(this._alertLayer);
        this.addChild(this._screenLayer);
        this.addChild(this._loadingLayer);
        this.addChild(this._tipLayer);
        this.addChild(this._effectLayer);
        this.addChild(this._newGuilderLayer);
        this._stage.addChild(this._mouseLayer);
        this._stage.addChild(this);
    };
    Object.defineProperty(Layout.prototype, "stageWidth", {
        get: function () {
            var canvas = this._stage.canvas;
            return canvas.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layout.prototype, "stageHeight", {
        get: function () {
            var canvas = this._stage.canvas;
            return canvas.height;
        },
        enumerable: true,
        configurable: true
    });
    Layout.prototype.showDebug = function (bln) {
        for (var i = 0; i < this.numChildren; i++) {
            var temp = this.getChildAt(i);
            if (temp instanceof LayOutContainer) {
                temp.showPostion(bln);
            }
        }
        this._mouseLayer.showPostion(bln);
    };
    return Layout;
}(createjs.Container));
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
            this.registerCommand(AppFacade.CHANGGAMETYPE, game.ChangeModuleCommand);
        };
        AppFacade.prototype.startUp = function (rootView) {
            console.log("facade初始化完成");
            this.stage = rootView;
            this.sendNotification(AppFacade.STARTUP, rootView);
            this.removeCommand(AppFacade.STARTUP);
        };
        AppFacade.STARTUP = "startup";
        AppFacade.CHANGGAMETYPE = "changegametype";
        return AppFacade;
    }(puremvc.Facade));
    game.AppFacade = AppFacade;
})(game || (game = {}));
window.onload = function () {
    var et = new EaseljsTest();
};
var EaseljsTest = (function () {
    function EaseljsTest() {
        var canvas = document.getElementById("myCanvas");
        this.mstage = new createjs.Stage(canvas);
        this.mylayout = new Layout();
        this.mylayout.init(this.mstage);
        game.AppFacade.getInstance().startUp(this.mylayout);
        game.AppFacade.getInstance().sendNotification("showLoadingPanel");
        console.log("发送消息成功");
        this.addTick();
        var dfdf;
        console.log(dfdf);
        this.mstage.update();
    }
    EaseljsTest.prototype.addTick = function () {
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this.handleTicker.bind(this));
    };
    EaseljsTest.prototype.handleTicker = function () {
        this.mstage.update();
    };
    EaseljsTest.prototype.handleClick = function (event) {
        console.log("shape 点击事件");
    };
    return EaseljsTest;
}());
var Config = (function () {
    function Config() {
    }
    return Config;
}());
(function (lib, img, cjs, ss) {
    var p;
    lib.properties = {
        width: 1050,
        height: 680,
        fps: 24,
        color: "#FFFFFF",
        manifest: [
            { src: "../egame/sounds/WelcomeSound.mp3?1463640597298", id: "WelcomeSound" },
            { src: "../egame/sounds/BackgroundSound.mp3?1463640597298", id: "BackgroundSound" },
            { src: "../egame/sounds/TieWinSound.mp3?1463640597298", id: "TieWinSound" },
            { src: "../egame/sounds/BankerTwo.mp3?1463640597298", id: "BankerTwo" },
            { src: "../egame/sounds/BankerZero.mp3?1463640597298", id: "BankerZero" },
            { src: "../egame/sounds/BankerOne.mp3?1463640597298", id: "BankerOne" },
            { src: "../egame/sounds/BankerThree.mp3?1463640597298", id: "BankerThree" },
            { src: "../egame/sounds/BankerFour.mp3?1463640597298", id: "BankerFour" },
            { src: "../egame/sounds/BankerFive.mp3?1463640597298", id: "BankerFive" },
            { src: "../egame/sounds/BankerSix.mp3?1463640597298", id: "BankerSix" },
            { src: "../egame/sounds/BankerSeven.mp3?1463640597298", id: "BankerSeven" },
            { src: "../egame/sounds/BankerEight.mp3?1463640597298", id: "BankerEight" },
            { src: "../egame/sounds/BankerNine.mp3?1463640597298", id: "BankerNine" },
            { src: "../egame/sounds/BankerWinSound.mp3?1463640597298", id: "BankerWinSound" },
            { src: "../egame/sounds/BankerGetSound.mp3?1463640597298", id: "BankerGetSound" },
            { src: "../egame/sounds/PlayerTwo.mp3?1463640597298", id: "PlayerTwo" },
            { src: "../egame/sounds/PlayerZero.mp3?1463640597298", id: "PlayerZero" },
            { src: "../egame/sounds/PlayerOne.mp3?1463640597298", id: "PlayerOne" },
            { src: "../egame/sounds/PlayerThree.mp3?1463640597298", id: "PlayerThree" },
            { src: "../egame/sounds/PlayerFour.mp3?1463640597298", id: "PlayerFour" },
            { src: "../egame/sounds/PlayerFive.mp3?1463640597298", id: "PlayerFive" },
            { src: "../egame/sounds/PlayerSix.mp3?1463640597298", id: "PlayerSix" },
            { src: "../egame/sounds/PlayerSeven.mp3?1463640597298", id: "PlayerSeven" },
            { src: "../egame/sounds/PlayerEight.mp3?1463640597298", id: "PlayerEight" },
            { src: "../egame/sounds/PlayerNine.mp3?1463640597298", id: "PlayerNine" },
            { src: "../egame/sounds/PlayerWinSound.mp3?1463640597298", id: "PlayerWinSound" },
            { src: "../egame/sounds/PlayerGetSound.mp3?1463640597298", id: "PlayerGetSound" }
        ]
    };
    (lib.开牌 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    (lib.下注区底框 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    (lib._333333 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    (lib.赢2 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    (lib.bg = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    (lib.框1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    (lib.feipai = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    (lib.框框 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    (lib.汇总1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    (lib.牌盒右 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    (lib.牌盒右满 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    (lib.牌盒左 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    (lib.牌路6 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    (lib.牌路左边框1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    (lib.限注2 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    (lib.叶子1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    (lib.叶子2 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    (lib.叶子3 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();
    (lib.叶子4 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();
    (lib.底1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();
    (lib.底3 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();
    (lib.玻璃 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();
    (lib.红色 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();
    (lib.绿色 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();
    (lib.蓝色 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();
    (lib.光2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AlHj0IBshkIIiI7IheB2g");
        this.shape.setTransform(25.6, 49.1);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.2, 14.6, 65.6, 69.2);
    (lib.光 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF33").s().p("Aq5J6QkgkHAAlzQAAlzEgkHQEikGGXAAQGYAAEgEGQEiEHAAFzQAAFzkiEHQkgEHmYAAQmXAAkikHgAoRnhQjbDIAAEZQAAEaDbDHQDcDHE1AAQE1AADbjHQDcjHAAkaQAAkZjcjIQjbjHk1AAQk1AAjcDHg");
        this.shape.setTransform(98.7, 89.8);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 197.4, 179.5);
    (lib.赢1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DF0505").s().p("Aj2EPQgEgDAFgFIAHgKQAKgOAJgQQAIgRAGgaQAGgZACgZQACgagCgRQgBgTgDgRQgEgPgEgLQgGgLACgCQACgCALACIAmAJIAagMIAFgLQgGgDgEgDQgDgDgDgLIgIgdQgEgLgGgLIgHgQQgCgFADgDQADgEAxAOIB6gfIABgNIBFAVIgNAVIgWAtIAYAMIAcgMIABgbIA9AhIgGAcQgEALgBAQQgCAQABAgQgBAhAFANQAFARAJAJQALAIAKgBQAJgBADgGQADgFgBgNIgDgTIgDgRQAAgGACgCQADgCAFAFIAJANQAGAGAOAbIAQAZIAKAXIgTAMQgKAEghADQgiAEgYgVQgagVgBgXIgFgkIgUgLIgBAdIgIAkQgEAWgHANQgHANgMAPIgQATIgIAGQgDADgDgBQgCgBACgGIAUgpIgKgIIgegXQgPAngIALQgIAMgGAHIgKALQgGAIgDgDQgEgDAFgJIANghQAGgPAIgbQAGgagGgsQgBgMgDgCIgJgNIAFAuQADAcAAAKQABAKgDABQgDABgGgFIgSgKQgEgDgCgDQgBgEABgMQACgGgCgPIgLhWIgFAWQgBAJAEAhIAOB+QACAZACAJIABANQAAAEgDACQgDACgHgDQgTgFgVgMIgdgRIgIgFQgIgGAAgCQAAgDAHgDQAFgCALAAQAMgBAOgFIgEgmIgjANQgMAngMAQQgMARgNALQgOAMgJADIgIAEIgFACIgCgBgAg1AbIADATIAcACQAKABADABQACACgBAMQgBALACAUQACAUAAAIIAAAXIAVABQANABAJgBQAEgQABgKQABgLgBggQAAghgBgFIgIglQgFANgCAJQgBAIADAWIAFAoIABAYIABALQABAEgDACQgBABgGgCIgUgKQgGgEgBgDIAAgNIAAgQIgHhLgAicBrIgCAWIAggKIgBgZgAidA1IAAAXIAagLIgCgYgABHAEIAGArIAXAEIgDg5gAhmgUIgPAQIAbALIgDgHQgBgFABgBIAjAFIAtgQIADgOIAsAUIgKgXIgUgSgAhvg9IADASIBtggIACgSgAiih0IADgNIACgTIgeALQgPAFgeAUIgUhbQAaAEAkADQAkADBPgQIgLgMIgigfQgPgMABgCQABgDAPgBQATgBAQABIAeADQAPACADAEQACAEgDANIgIAcQBCgNAegLQAegMAegQIAMBNQgqgBgWACQgWAChXAMIhAALIACAVQAegEAxgKQAvgKALgGIAWgLIALAtQglABg5ALQg8ALgUAKIgYAMg");
        this.shape.setTransform(25.3, 27.2);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50.6, 54.5);
    (lib.飞牌1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.feipai();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 148.2, 51.5);
    (lib.重押2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(0,192,209,0.698)", "rgba(0,192,209,0.498)"], [0.451, 0.82], 0.3, -26.5, 0.3, 25.7).s().p("AovDSQCNh+Dsi/Ij3D/IHOl+QCqADDDgDIA7gLIC8gRIAVAFIAVAAQAOAtgDAAIgdAQIhMA0Qg8AxASgLQARgLCGhKIAAAFIjrCuIDqibIAJAhIo2FuIkHAGIAdgYIASgfIgSACIgqAYIhhAgImOAWgAp+ClIglgTICFhXIgcAAIF8ktICKAHIoJGpIgHAHQgMAHh1APg");
        this.shape.setTransform(71.1, 26.3);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 142.2, 52.7);
    (lib.亮牌3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFDFB9", "#FFFFFF"], [0.102, 0.576], 0.1, 8.8, 0, -8.8).s().p("AAGBHQAKgXAAguIAAhPIAUAAIAAAvIAMAAIAAg0IATAAIAAA0IAHAAIAAATIgmAAIAAAQIAfAAIAABPIgTAAIAAg8IgMAAQgCAkgKAZIgSgOgAivBBQAbgFAIgGQAJgHgBgXIBQAAIAAAeQAAAJAIAAIAHAAQAFAAACgEQADgDABgRIAWAIQgDATgDAGQgDAEgGADQgGAEgJAAIgUAAQgWgBAAgWIAAgSIgiAAQAAAjg1AIIgMgUgAB+BVIAAghIg4AAIAAgUIAWAAIgKgJQAKgGAIgHIgWAAIAAhPIAXAAQACgHABgIIAaACIgEANIAtAAIAABPIgvAAQgHAMgMAKIAVAAIAAgSIAWAAIAAASIAcAAIAAAUIgcAAIAAAhgACEgGIASAAIAAgPIgQAAIgCAPgABigGIANAAQADgIAAgHIgQAAgACGglIAQAAIAAgOIgQAAgABiglIAQAAIAAgOIgQAAgAipAhIAAghICfAAIAAAgIgXAAIAAgQIhxAAIAAARgAiWgGIAAgnIB4AAIAAAngAh+gWIBIAAIAAgIIhIAAgAisg0IAAgSIBDAAIgFgKIAcgFIAGAPIBEAAIAAASg");
        this.shape.setTransform(17.7, 8.6);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 35.4, 17.2);
    (lib.开牌3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFDFB9", "#FFFFFF"], [0.102, 0.576], -0.2, 9.7, 0.2, -9.6).s().p("AAGBHQAKgXAAguIAAhQIATAAIAAAwIAMAAIAAgzIAUAAIAAAzIAHAAIAAATIgnAAIAAAQIAgAAIAABOIgUAAIAAg7IgMAAQgBAjgKAaIgSgOgAiuBEQAPgJALgLQAKgMACgYIgnAAIAAgVIAoAAIAAgqIgeAAIAAgWICZAAIAAAWIgcAAIAAAqIAjAAIAAAVIgjAAIAABGIgYAAIAAhGIguAAQgCAfgKAQQgKAPgVALQgKgIgLgJgAhugJIAuAAIAAgqIguAAgAB+BUIAAggIg4AAIAAgTIAWAAIgLgKQALgGAHgIIgVAAIAAhOIAWAAQADgHABgIIAaADIgFAMIAtAAIAABOIguAAQgHAOgMAKIAVAAIAAgSIAWAAIAAASIAcAAIAAATIgcAAIAAAggACEgHIASAAIAAgOIgRAAIgBAOgABigHIANAAQACgGABgIIgQAAgACFglIARAAIAAgOIgRAAgABiglIAQAAIAAgOIgQAAg");
        this.shape.setTransform(17.7, 8.6);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 35.3, 17.2);
    (lib.开牌2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.开牌();
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 69, 35);
    (lib.底1_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.底1();
        this.instance.setTransform(1, 0, 0.681, 0.667);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#F1934B", "#FF984A", "#FFC95A", "#FF984A", "#F1934B"], [0.004, 0.247, 0.518, 0.773, 1], -522, 0, 522, 0).s().p("EhRjALGIAA2LMCjHAAAIAAWLg");
        this.shape.setTransform(518.5, 73.5, 0.993, 1.035);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1037, 147);
    (lib.元件3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgqCtQgPgFgNgOQgNgOgKgWQgJgWgCgTQgDgUAAgOIAAgZQACgTAGgUQAGgVALgVQALgVANgQQANgRAMgMQAMgMAPgMQANgMAMgEQANgFALgBQAHAAAJADQAIADAKAMQAKALAHAQQAGARAEAVQAEAWAAATIAAAhIgCAeQgCARgIAaQgHAagKATQgKATgPASQgQARgQAJQgQAJgOADIgOABQgKAAgKgDgAACiLQgEAFgJAMQgJALgJAQQgJAQgGAUQgHAVgEAYQgEAWgBAaQgBAaAFAZQADAXAJATQAJASAMAEQAMAEALgFQAJgFAJgLQAJgLAIgXQAJgWAFgfQAFgfACgbQABgdgEgaQgDgUgJgKQgKgKgKADIgRADIADgTQACgKAEgGIAJgQQgOAJgGAFg");
        this.shape.setTransform(11.1, 13.1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FF0000").s().p("AgkC1QgDgBgFgLQgFgLgEgOIgGgbQgCgNABgHQABgHAEgGIANgNQAEgGACgHQADgGAHg3IAMhbQACgQgBgUQAAgVgDgMQgDgNADgDQACgCALABQAIABALAGIAYAMQAMAHAFAIQAFAIgBAEQAAAEgGAIQgGAIgEALQgFALgDARIgIApIgXCIQgCAPgEAOQgDAOgFAKQgGAJgIAKQgHAHgFAAIgCAAg");
        this.shape_1.setTransform(11.1, 12.9);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF0000").s().p("AhiCZQgBgLgEgGIgJgPIAkgfQAPgPATgVQATgUARgUQAPgSALgQQALgQAGgQQAGgQABgRQABgRgEgOQgFgNgHgGQgIgHgLgBQgKAAgMAGQgNAHgKAKIgOANQgHAHgDgBQgEgBABgLQAAgGAHgJQAIgKAHgGQAHgHAMgIQAMgHALgEQAMgEAQgBQAZgBAQAIQARAJAKATQAKASAAAWQAAAWgGATQgHAYgPAUQgPASgYAWIhfBYQgNAMACACQACACAIgBQAJAAAPgGIAugRQAXgIANgIQAOgJAMgKIAXgVQAHgHACABQADABAAAKQABALgEAUQgGAagEAMQgEAMgJAHQgJAHgKACQgGABgRgDQgSgDgMABQgJAAgXAFQgaAFgKADIgWAIIgUAIIgCgXg");
        this.shape_2.setTransform(11.5, 13.3);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FF0000").s().p("AhNCuQgLgCgJgIQgJgIgDgOQgDgNACgOQACgLAHgMQAHgMAEAAQACABAHAMQAGAMAKAMQAJAMAOADQALADAMgEQALgEAKgLQALgKAJgQQAJgQADgNQACgOAAgJQAAgHgDgNQgCgOgHgEQgGgDgHAAQgHABgGAEIgQANQgHAGgDgBQgEgBgCgKQgDgJAAgHQAAgJADgDIALgDQAJgBAOgHQALgHAIgHQAIgGAKgPQAKgPADgNQAEgNgDgOQgDgKgGgGQgFgGgKgCQgKgBgLAEQgJADgIAGIgMAIQgIAFgDgCQgDgCAAgEQAAgDADgEQAFgHAQgMQAOgMAHgDQAHgEANgCQAOgCALABQAOABAMAGQANAGAIAJQAHAIAEATQADASgIAUQgGAOgNAPQgNAOgPALIgPAMQAMAEAGAFQAHAFAIALQAJAMACAUQACAUgJAVQgFAOgLAOQgKAOgNALQgNAMgPAJQgOAJgRAHQgTAGgOADIgMABQgIAAgHgCg");
        this.shape_3.setTransform(11.8, 13.2);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FF0000").s().p("AAMCsQgFgEgHgOQgGgOgCgIQgDgHAAgGQAAgGAJgSQAHgSgDgCQgCgDgJADIgXAFIgbAIIgaAHIgQAGIAAgVQAAgNgFgGIgKgOIAPgPQAHgIALgUIAXgoQAMgXAMgSIAagmQALgVAKgMIAKgOIAHgLQAFgHAGgCQAGgBAKAFIAOAJQAIAHAFAJQAEAIgCAJIgHAPQgHANgDAUIgLBVIgCAMQAAAFABADQACACAJgEQAIgDAIgFIAUgLQALgHADABQADABgEAQIgHAcQgFAagIAGQgJAGgKAAIgQgDQgHgBgCACQgDACAAANIAAAYIgEAhQgCARgEAKQgFALgFACIgBAAQgGAAgJgLgAAVh5QgFAHgHALIgNAbIgNAaIgPAeIgLAXIgMAcQgEAJABADQABACAFADQAEACAVgIIATgGQAIgCAEgEQAEgFABgGIAUh/QAEgTgDAAQgDAAgGAGg");
        this.shape_4.setTransform(11.6, 13.5);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FF0000").s().p("AhCCxQgTgBgNgOQgOgOABgYQAAgPAHgNQAHgNAKgKQALgJADACQACABABAMQAAAMAEAQQAEAQAIAHQAJAIAPAAQAOgBANgJQAMgKALgSQAKgSAGgUQAFgUgBgSQgBgZgMgLQgLgKgOgCQgKAAgHAEQgHADgGAGIgJALQgEAFgDABQgEACgKgIQgHgHgDgGQgEgGABgFQAAgDAGgIQAFgIAEgLIAYhIQAGgUAGgLQAGgLAHgEQAHgEAMAEQAGABALAGQAMAHAIADQAJACALgBQAKgCAIgFQAIgEAHgGQAHgGABABQACAAAAAHIAAAMQgBAOgHAOQgGANgIAHQgIAGgNACQgNABgKgHIgLgLIgPgLQgMgHgDABQgEACgBAHIgGATIgPAuQgFAPABABQABABAMgGQAJgFAIgCQAKgCAKAAQANABALAFQALAEAJAJQAJAJAHAOQAGAPAAAWQAAAcgLAaQgKAagVAWQgVAWgUANQgTALgSAFQgPAEgPAAIgHAAg");
        this.shape_5.setTransform(11.9, 13);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FF0000").s().p("AhAChQgUgOgMgbQgLgbAAgmQAAgdAHgcQAHgeALgYQAKgYARgZQAQgYARgPQAQgPANgHQAPgHAPgCQAXgDARAHQAQAHAIALQAHAKAAALQgBAUgNAIQgNAIgRADQgSADgCgDQgBgCAIgNQAIgOgCgNQgBgOgJgEQgJgEgNAGQgMAHgLAMQgIAMgNAZQgNAYgFAVIgHAWIAAAAIAAAAIAVgQQAJgGAOgFQANgGATACQAXACANALQANAMAGAUQAHASgEAfQgEAcgKAaQgJAZgQAUQgPAUgSALQgSALgTABIgDAAQgUAAgWgQgAgFgaQgTAEgLALQgMALgGATQgGATAAAUQAAATACAPQABANAFAOQAEAPAHAIQAIAJALADQAMACALgMQAMgJAKgYQAJgYAEgTQADgSABgWQABgVgEgLQgEgMgMgHQgIgEgLAAIgIABg");
        this.shape_6.setTransform(11.7, 13.2);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FF0000").s().p("Ag3CzQgFgBgCgJQgDgJgCgVIgCgdQAAgIAFgKQADgGAJgNIAQgXQAHgKANgZIARghIAagtQALgTAJgLQAJgNgDgDQgCgDgLgCQgLgBgNABQgXACgYAHIgeAJQgFABgHgCQgHgCgHgIQgGgJgEgKQgFgLgFgTQgEgTADgDQAEgDAQAGIAhALIAlAKIAgAFQAUADATgBQATAAAHgBIAPgDQgBAIAAAIQABAIAGAGIALALIgOAKQgHAFgHAKQgIAJgIAPIgVAnIgRAhIgNAhIgLAhIgFAbQgEAPgFAMQgFAMgHAKQgHAKgLAJQgJAIgFAAIgCgBg");
        this.shape_7.setTransform(11.6, 13.1);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FF0000").s().p("AglCvQgagEgPgKQgPgLgJgQQgJgQgBgTQgCgTAFgQQAFgQALgOQALgOAOgJIAYgLQAMgHABgFQAAgEgNgKQgPgKgKgPQgKgOgBgGQgHgVAGgSQAGgSAOgOQANgNARgIQARgIAQgDQASgCAQAAQARAAAOADQAOAEALAIQALAIAHAQQAHAPgGAWQgEAOgIALQgJALgKAJQgJAIgQAKQgPAJgBAFQAAAFAQAMQANAHALAQQALAPAEAQQAFARgCAPQgBARgHAPQgHAQgKAMQgKALgSAKQgRAKgTAEQgIACgKAAQgMAAgPgCgAgVARQgUASgGAPQgGAPAAATQAAATADAJQAHAdARAIQARAJAMgGQAPgGAIgRQAIgRgBgYQgBgRgEgPQgFgQgFgIQgFgJgGgHQgHgHgDgBIgBAAQgGAAgLAJgAgSiIQgLASACAQQACAJAHAOQAHAPALALQAKAKAEAAQADAAAKgJQAJgKAHgPQAIgPACgOQACgOgHgPQgEgIgHgFQgHgFgTgBIgCAAQgQAAgLASg");
        this.shape_8.setTransform(11.7, 13.3);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FF0000").s().p("AhRCwQgTgGgIgPQgIgOAEgUQACgJAKgQQAJgPAEABQACACAEAOQAFANAIAKQAIAJAMAEQALAEANgDQANgDALgIQAJgIAJgLQAJgKAGgKIAIgPIAIgRQgKAIgIAFQgHAEgLACQgOADgPgFQgPgGgOgMQgNgNgKgXQgKgWAAgTQgBgUACgXQAHgfAIgRQAHgSAPgOQAOgPASgIQAPgIAXABQALAAAJADQAJACAHAEQAHAEAGAFQAGAGAHAJQAGAJAFAMQAFANAFAXQAEAXgEAkQgDAfgKAgQgKAfgPAaQgPAZgVAUQgVAUgQAIQgOAIgZAFQgLACgKAAQgMAAgLgDgAAMiUQgOAHgKAWQgMAXgCAYQgDAZACATQABARAFAMQAFAPAKAJQAIAKALAAQALABAJgHQAKgHAGgMQAGgKAEgUQADgTAAgZQAAgZgDgQQgDgQgFgJQgIgOgKgEQgFgCgFAAQgFAAgGACg");
        this.shape_9.setTransform(11.4, 13.3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.2, -4.5, 21.8, 35.3);
    (lib.元件1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0000FF").s().p("AgqCtQgPgFgNgOQgNgOgKgWQgJgWgCgTIgDgiIAAgZQACgTAGgUQAGgVALgVQALgVANgQQANgRAMgMQAMgMAPgMQANgMAMgEQANgFALgBQAHAAAJADQAIADAKAMQAKALAHAQQAGARAEAVQAEAWAAATIAAAhIgCAeQgCARgIAaQgHAagKATQgKATgPASQgQARgQAJQgQAJgOADIgOABQgKAAgKgDgAACiLQgEAFgJAMQgJALgJAQQgJAQgGAUQgHAVgEAYQgEAWgBAaQgBAaAFAZQADAXAJATQAJASAMAEQAMAEALgFQAJgFAJgLQAJgLAIgXQAJgWAFgfQAFgfACgbQABgdgEgaQgDgUgJgKQgKgKgKADIgRADIADgTQACgKAEgGIAJgQQgOAJgGAFg");
        this.shape.setTransform(10.9, 13.1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#0000FF").s().p("AgkC1QgDgBgFgLQgFgLgEgOIgGgbQgCgNABgHQABgHAEgGIANgNQAEgGACgHQADgGAHg3IAMhbQACgQgBgUQAAgVgDgMQgDgNADgDQACgCALABQAIABALAGIAYAMQAMAHAFAIQAFAIgBAEQAAAEgGAIQgGAIgEALQgFALgDARIgIApIgXCIQgCAPgEAOQgDAOgFAKQgGAJgIAKQgHAHgFAAIgCAAg");
        this.shape_1.setTransform(11, 12.9);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#0000FF").s().p("AhiCZQgBgLgEgGIgJgPIAkgfQAPgPATgVQATgUARgUQAPgSALgQQALgQAGgQQAGgQABgRQABgRgEgOQgFgNgHgGQgIgHgLgBQgKAAgMAGQgNAHgKAKIgOANQgHAHgDgBQgEgBABgLQAAgGAHgJQAIgKAHgGQAHgHAMgIQAMgHALgEQAMgEAQgBQAZgBAQAIQARAJAKATQAKASAAAWQAAAWgGATQgHAYgPAUQgPASgYAWIhfBYQgNAMACACQACACAIgBQAJAAAPgGIAugRQAXgIANgIQAOgJAMgKIAXgVQAHgHACABQADABAAAKQABALgEAUQgGAagEAMQgEAMgJAHQgJAHgKACQgGABgRgDQgSgDgMABQgJAAgXAFQgaAFgKADIgWAIIgUAIIgCgXg");
        this.shape_2.setTransform(11.4, 13.3);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0000FF").s().p("AhNCuQgLgCgJgIQgJgIgDgOQgDgNACgOQACgLAHgMQAHgMAEAAQACABAHAMQAGAMAKAMQAJAMAOADQALADAMgEQALgEAKgLQALgKAJgQQAJgQADgNQACgOAAgJQAAgHgDgNQgCgOgHgEQgGgDgHAAQgHABgGAEIgQANQgHAGgDgBQgEgBgCgKQgDgJAAgHQAAgJADgDIALgDQAJgBAOgHQALgHAIgHQAIgGAKgPQAKgPADgNQAEgNgDgOQgDgKgGgGQgFgGgKgCQgKgBgLAEQgJADgIAGIgMAIQgIAFgDgCQgDgCAAgEQAAgDADgEQAFgHAQgMQAOgMAHgDQAHgEANgCQAOgCALABQAOABAMAGQANAGAIAJQAHAIAEATQADASgIAUQgGAOgNAPQgNAOgPALIgPAMQAMAEAGAFQAHAFAIALQAJAMACAUQACAUgJAVQgFAOgLAOQgKAOgNALQgNAMgPAJQgOAJgRAHQgTAGgOADIgMABQgIAAgHgCg");
        this.shape_3.setTransform(11.6, 13.2);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#0000FF").s().p("AAMCsQgFgEgHgOQgGgOgCgIQgDgHAAgGQAAgGAJgSQAHgSgDgCQgCgDgJADIgXAFIgbAIIgaAHIgQAGIAAgVQAAgNgFgGIgKgOIAPgPQAHgIALgUIAXgoQAMgXAMgSIAagmQALgVAKgMIAKgOIAHgLQAFgHAGgCQAGgBAKAFIAOAJQAIAHAFAJQAEAIgCAJIgHAPQgHANgDAUIgLBVIgCAMQAAAFABADQACACAJgEQAIgDAIgFIAUgLQALgHADABQADABgEAQIgHAcQgFAagIAGQgJAGgKAAIgQgDQgHgBgCACQgDACAAANIAAAYIgEAhQgCARgEAKQgFALgFACIgBAAQgGAAgJgLgAAVh5QgFAHgHALIgNAbIgNAaIgPAeIgLAXIgMAcQgEAJABADQABACAFADQAEACAVgIIATgGQAIgCAEgEQAEgFABgGIAUh/QAEgTgDAAQgDAAgGAGg");
        this.shape_4.setTransform(11.4, 13.5);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#0000FF").s().p("AhCCxQgTgBgNgOQgOgOABgYQAAgPAHgNQAHgNAKgKQALgJADACQACABABAMQAAAMAEAQQAEAQAIAHQAJAIAPAAQAOgBANgJQAMgKALgSQAKgSAGgUQAFgUgBgSQgBgZgMgLQgLgKgOgCQgKAAgHAEQgHADgGAGIgJALQgEAFgDABQgEACgKgIQgHgHgDgGQgEgGABgFQAAgDAGgIQAFgIAEgLIAYhIQAGgUAGgLQAGgLAHgEQAHgEAMAEQAGABALAGQAMAHAIADQAJACALgBQAKgCAIgFQAIgEAHgGQAHgGABABQACAAAAAHIAAAMQgBAOgHAOQgGANgIAHQgIAGgNACQgNABgKgHIgLgLIgPgLQgMgHgDABQgEACgBAHIgGATIgPAuQgFAPABABQABABAMgGQAJgFAIgCQAKgCAKAAQANABALAFQALAEAJAJQAJAJAHAOQAGAPAAAWQAAAcgLAaQgKAagVAWQgVAWgUANQgTALgSAFQgPAEgPAAIgHAAg");
        this.shape_5.setTransform(11.7, 13);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#0000FF").s().p("AhAChQgUgOgMgbQgLgbAAgmQAAgdAHgcQAHgeALgYQAKgYARgZQAQgYARgPQAQgPANgHQAPgHAPgCQAXgDARAHQAQAHAIALQAHAKAAALQgBAUgNAIQgNAIgRADQgSADgCgDQgBgCAIgNQAIgOgCgNQgBgOgJgEQgJgEgNAGQgMAHgLAMQgIAMgNAZQgNAYgFAVIgHAWIAAAAIAAAAIAVgQQAJgGAOgFQANgGATACQAXACANALQANAMAGAUQAHASgEAfQgEAcgKAaQgJAZgQAUQgPAUgSALQgSALgTABIgDAAQgUAAgWgQgAgFgaQgTAEgLALQgMALgGATQgGATAAAUQAAATACAPQABANAFAOQAEAPAHAIQAIAJALADQAMACALgMQAMgJAKgYQAJgYAEgTQADgSABgWQABgVgEgLQgEgMgMgHQgIgEgLAAIgIABg");
        this.shape_6.setTransform(11.6, 13.2);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#0000FF").s().p("Ag3CzQgFgBgCgJQgDgJgCgVIgCgdQAAgIAFgKQADgGAJgNIAQgXQAHgKANgZIARghIAagtQALgTAJgLQAJgNgDgDQgCgDgLgCQgLgBgNABQgXACgYAHIgeAJQgFABgHgCQgHgCgHgIQgGgJgEgKQgFgLgFgTQgEgTADgDQAEgDAQAGIAhALIAlAKIAgAFQAUADATgBQATAAAHgBIAPgDQgBAIAAAIQABAIAGAGIALALIgOAKQgHAFgHAKQgIAJgIAPIgVAnIgRAhIgNAhIgLAhIgFAbQgEAPgFAMQgFAMgHAKQgHAKgLAJQgJAIgFAAIgCgBg");
        this.shape_7.setTransform(11.4, 13.1);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#0000FF").s().p("AglCvQgagEgPgKQgPgLgJgQQgJgQgBgTQgCgTAFgQQAFgQALgOQALgOAOgJIAYgLQAMgHABgFQAAgEgNgKQgPgKgKgPQgKgOgBgGQgHgVAGgSQAGgSAOgOQANgNARgIQARgIAQgDQASgCAQAAQARAAAOADQAOAEALAIQALAIAHAQQAHAPgGAWQgEAOgIALQgJALgKAJQgJAIgQAKQgPAJgBAFQAAAFAQAMQANAHALAQQALAPAEAQQAFARgCAPQgBARgHAPQgHAQgKAMQgKALgSAKQgRAKgTAEQgIACgKAAQgMAAgPgCgAgVARQgUASgGAPQgGAPAAATQAAATADAJQAHAdARAIQARAJAMgGQAPgGAIgRQAIgRgBgYQgBgRgEgPQgFgQgFgIQgFgJgGgHQgHgHgDgBIgBAAQgGAAgLAJgAgSiIQgLASACAQQACAJAHAOQAHAPALALQAKAKAEAAQADAAAKgJQAJgKAHgPQAIgPACgOQACgOgHgPQgEgIgHgFQgHgFgTgBIgCAAQgQAAgLASg");
        this.shape_8.setTransform(11.6, 13.3);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#0000FF").s().p("AhRCwQgTgGgIgPQgIgOAEgUQACgJAKgQQAJgPAEABQACACAEAOQAFANAIAKQAIAJAMAEQALAEANgDQANgDALgIQAJgIAJgLQAJgKAGgKIAIgPIAIgRQgKAIgIAFQgHAEgLACQgOADgPgFQgPgGgOgMQgNgNgKgXQgKgWAAgTQgBgUACgXQAHgfAIgRQAHgSAPgOQAOgPASgIQAPgIAXABQALAAAJADQAJACAHAEQAHAEAGAFQAGAGAHAJQAGAJAFAMQAFANAFAXQAEAXgEAkQgDAfgKAgQgKAfgPAaQgPAZgVAUQgVAUgQAIQgOAIgZAFQgLACgKAAQgMAAgLgDgAAMiUQgOAHgKAWQgMAXgCAYQgDAZACATQABARAFAMQAFAPAKAJQAIAKALAAQALABAJgHQAKgHAGgMQAGgKAEgUQADgTAAgZQAAgZgDgQQgDgQgFgJQgIgOgKgEQgFgCgFAAQgFAAgGACg");
        this.shape_9.setTransform(11.2, 13.3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.1, -4.5, 21.8, 35.3);
    (lib.红黄 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgnABQAAgbALgQQALgPASAAQAnAAAAA5QAAAbgKAQQgLAPgTAAQgnAAAAg5gAgPABQAAAnAPAAQAQAAAAgoQAAgngQAAQgPAAAAAog");
        this.shape.setTransform(9.2, 0.3);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgnABQAAgbALgQQALgPASAAQAnAAAAA5QAAAbgKAQQgLAPgTAAQgnAAAAg5gAgPABQAAAnAPAAQAQAAAAgoQAAgngQAAQgPAAAAAog");
        this.shape_1.setTransform(0, 0.3);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgiA5IAAgTIAYAAIAAhGIgYAFIAAgTIAugKIAABeIAXAAIAAATg");
        this.shape_2.setTransform(-9, 0.2);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FFFFFF", "rgba(255,255,255,0)"], [0, 1], 2.6, 4.4, 2.6, 0.4).s().p("AiWgXIgQgSIAOAAIAKALQA/A9BXgBQBZABA/g9IAHAIQhCBAhdAAQhbAAhDhBg");
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["#FFFFFF", "rgba(255,255,255,0)"], [0, 1], 2.6, -4.4, 2.6, -0.4).s().p("AimAqIAQgSQBDhBBbAAQBdAABCBAIgHAIQg/g9hZABQhXgBg/A9IgKALg");
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }, { t: this.shape_3 }] }).wait(1));
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("rgba(102,102,102,0.502)").s().p("AgGD0QhhgChFhGQg0g0gOhDQgEgUgBgTIAAgOQgBgMACgNQAIhUA+g/QASgSAUgOQASgLATgJIAFgBQArgTAxABIAHAAQBgACBFBFQA0A0APBDQAEATABAVIAAANIgBAZQgHBVhAA+QgSAUgVAOQgRALgSAIQgtATg1AAIgGAAgAhXjTQgoARgiAhQg4A4gJBMQgCAPAAAOQAAAWAEAVQAMBDAzAzQBDBEBeAAQBeAABDhEQA5g3AJhMQACgPAAgPQAAgWgEgVQgMhDg0gzQhDhDheAAQguAAgpARg");
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("rgba(51,51,51,0.502)").s().p("AiBCBQgugugHg/IgBgUQAAgUAEgSQAKg0AogoQA2g1BLAAQBNAAA1A1QAuAvAHBAIABATQAAAVgEASQgKA0goAmQg1A3hNAAQhLAAg2g3gAh1h4IgBACQgJAIgIALQgVAbgHAgQgEAOgBAPIgBALIABAOQAFA9AtAsQAxAzBFAAQBEAAAxgwIADgDIAQgSQAVgbAIghQADgOABgPIABgMIgBgOQgFg8gsgsQgygzhGAAQhDAAgyAxg");
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }] }).wait(1));
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.lf(["#5F5A00", "#272400"], [0, 1], -0.5, -7.4, -0.5, 13.8).s().p("AisA3QhIhFAAhmIABgKQABAfAIAdIAGAQQATAvAlAlQANANANAKQAKAIALAGIAJAGIAFACQAuAaA2ABIAIAAIADAAIAEAAIANAAIAcgDIADgBIAFgBQATgEAYgKIACAAQAPgHAQgKIAEgDQAVgOATgTQA/g8AIhVIABgPIAAAKQAABmhIBFQhIBIhlAAQhkAAhIhIg");
        this.shape_7.setTransform(0, 12.8);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#918802").s().p("AgBBzIgFAAIgHAAQg2gCgvgZIgFgDIgJgFQgLgHgJgHQgOgLgMgMQgmgngTguIgFgQIgEgRIAOgKQATgNAXgKIAOgGQAFA9AsAtQAyAwBGAAQBDAAAxguIADgCIAQgTQAVgbAIghIAPgBQAYgDAXgGIAQgGQgIBVg/A9QgSATgVAOIgFADQgPAJgQAHIgBABQgYAKgUAEIgFABIgCAAIgdADIgNABIgCAAg");
        this.shape_8.setTransform(0.3, 11.9);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#72002E").s().p("AB6AJQgygwhGAAQhEABgxAuIgCABQgIAJgIAKQgVAbgIAiIgPABQgYABgXAIIgQAEQAIhVA+g8QASgSAVgNQARgMATgJIAFgCQAVgJAWgDQAZgGAYAAIAGAAQBiADBFBFQAzAxAPBDIgOALQgTANgXAKIgOAHQgFg+gsgsg");
        this.shape_9.setTransform(-0.1, -14);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("Ah3B4QgsgtgFg9IAAgOIAAgLQABgPADgNQAIgiAVgbQAIgKAIgJIACgBQAxgwBEgBQBGAAAyAyQAsAsAFA+IAAANIAAANQgBAOgDAOQgIAggUAcIgRATIgCACQgxAwhFgBQhFAAgygxg");
        this.shape_10.setTransform(0.1, -1);
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#CCCCCC").s().p("AjzAOIgBgOQAAgLACgNIAQgFQAXgHAYgCIAPgBQgDAOgBAOIAAALIAAAPIgOAGQgXAJgTAOIgOAKQgEgUgBgUgACpANIAAgNIAAgNIAOgGQAXgKATgNIAOgLQAEAUABAVIABAMIAAALIgBAPIgQAFQgYAHgYACIgPABQADgNABgPg");
        this.shape_11.setTransform(0.1, -1.1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.5, -25.5, 49.1, 51.1);
    (lib.spaceHolder = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;
    (lib.牌盒 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
        this.instance = new lib.牌盒右满();
        this.instance.setTransform(0, 0, 0.631, 0.625);
        this.instance_1 = new lib.牌盒右();
        this.instance_1.setTransform(0, 0, 0.631, 0.628);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 183, 133.2);
    (lib.光_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFF00").s().p("AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBYAABAA/QA+BAABBXQgBBZg+A/QhAA/hYAAQhYAAg/g/g");
        this.shape_1.setTransform(21.5, 21.5);
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 43, 43.1);
    (lib.历史记录网格 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#976C4F").s().p("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");
        this.shape.setTransform(516.5, 72.5);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(102,255,0,0)").s().p("EBM8ALLIAAjnIDnAAIAADngEBJMALLIAAjnIDnAAIAADngEBFdALLIAAjnIDlAAIAADngEBBsALLIAAjnIDnAAIAADngEA98ALLIAAjnIDnAAIAADngEA6NALLIAAjnIDlAAIAADngEA2cALLIAAjnIDnAAIAADngEAysALLIAAjnIDnAAIAADngEAu9ALLIAAjnIDlAAIAADngEArMALLIAAjnIDnAAIAADngEAncALLIAAjnIDnAAIAADngEAjtALLIAAjnIDlAAIAADngAf8LLIAAjnIDnAAIAADngAcMLLIAAjnIDnAAIAADngAYdLLIAAjnIDlAAIAADngAUsLLIAAjnIDnAAIAADngAQ8LLIAAjnIDnAAIAADngANNLLIAAjnIDlAAIAADngAJcLLIAAjnIDnAAIAADngAFsLLIAAjnIDnAAIAADngAB9LLIAAjnIDlAAIAADngAhyLLIAAjnIDlAAIAADngAliLLIAAjnIDmAAIAADngApRLLIAAjnIDlAAIAADngAtCLLIAAjnIDnAAIAADngAwyLLIAAjnIDmAAIAADngA0hLLIAAjnIDlAAIAADngA4SLLIAAjnIDnAAIAADngA8CLLIAAjnIDmAAIAADngA/xLLIAAjnIDlAAIAADngEgjiALLIAAjnIDnAAIAADngEgnSALLIAAjnIDmAAIAADngEgrBALLIAAjnIDlAAIAADngEguyALLIAAjnIDnAAIAADngEgyiALLIAAjnIDmAAIAADngEg2RALLIAAjnIDlAAIAADngEg6CALLIAAjnIDnAAIAADngEg9yALLIAAjnIDmAAIAADngEhBhALLIAAjnIDlAAIAADngEhFSALLIAAjnIDnAAIAADngEhJCALLIAAjnIDmAAIAADngEhMxALLIAAjnIDlAAIAADngEhQiALLIAAjnIDnAAIAADngEBM8AHaIAAjlIDnAAIAADlgEBJMAHaIAAjlIDnAAIAADlgEBFdAHaIAAjlIDlAAIAADlgEBBsAHaIAAjlIDnAAIAADlgEA98AHaIAAjlIDnAAIAADlgEA6NAHaIAAjlIDlAAIAADlgEA2cAHaIAAjlIDnAAIAADlgEAysAHaIAAjlIDnAAIAADlgEAu9AHaIAAjlIDlAAIAADlgEArMAHaIAAjlIDnAAIAADlgEAncAHaIAAjlIDnAA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IDnAAIAADngEBFdgHjIAAjnIDlAAIAADngEBBsgHjIAAjnIDnAAIAADngEA98gHjIAAjnIDnAAIAADngEA6NgHjIAAjnIDlAAIAADngEA2cgHjIAAjnIDnAAIAADngEAysgHjIAAjnIDnAAIAADngEAu9gHjIAAjnIDlAAIAADngEArMgHjIAAjnIDnAAIAADngEAncgHjIAAjnIDnAAIAADngEAjtgHjIAAjnIDlAAIAADngAf8njIAAjnIDnAAIAADngAcMnjIAAjnIDnAAIAADngAYdnjIAAjnIDlAAIAADngAUsnjIAAjnIDnAAIAADngAQ8njIAAjnIDnAAIAADngANNnjIAAjnIDlAAIAADngAJcnjIAAjnIDnAAIAADngAFsnjIAAjnIDnAAIAADngAB9njIAAjnIDlAAIAADngAhynjIAAjnIDlAAIAADngAlinjIAAjnIDmAAIAADngApRnjIAAjnIDlAAIAADngAtCnjIAAjnIDnAAIAADngAwynjIAAjnIDmAAIAADngA0hnjIAAjnIDlAAIAADngA4SnjIAAjnIDnAAIAADngA8CnjIAAjnIDmAAIAADngA/xnjIAAjnIDlAAIAADngEgjigHjIAAjnIDnAAIAADngEgnSgHjIAAjnIDmAAIAADngEgrBgHjIAAjnIDlAAIAADngEguygHjIAAjnIDnAAIAADngEgyigHjIAAjnIDmAAIAADngEg2RgHjIAAjnIDlAAIAADngEg6CgHjIAAjnIDnAAIAADngEg9ygHjIAAjnIDmAAIAADngEhBhgHjIAAjnIDlAAIAADngEhFSgHjIAAjnIDnAAIAADngEhJCgHjIAAjnIDmAAIAADngEhMxgHjIAAjnIDlAAIAADngEhQigHjIAAjnIDnAAIAADng");
        this.shape_1.setTransform(516.5, 72.5);
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1033, 145);
    (lib.问路斜杠 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DF0303").s().p("AgnAoIAnhPIAoAAIgoBPg");
        this.shape.setTransform(4, 4);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#0043EE").s().p("AgnAoIAnhPIAoAAIgoBPg");
        this.shape_1.setTransform(4, 4);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 8, 8);
    (lib.问路实圈 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#DF0303").ss(1, 1, 1).p("AgiAAQAAgOAKgLQALgJANAAQANAAALAJQALALAAAOQAAAOgLAKQgLALgNAAQgNAAgLgLQgKgKAAgOg");
        this.shape.setTransform(3.5, 3.5);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#DF0303").s().p("AgYAYQgKgKAAgOQAAgOAKgLQALgJANAAQANAAALAJQALALAAAOQAAAOgLAKQgLAKgNABQgNgBgLgKg");
        this.shape_1.setTransform(3.5, 3.5);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#2A2AF4").ss(1, 1, 1).p("AgiAAQAAgOAKgLQALgJANAAQANAAALAJQALALAAAOQAAAOgLAKQgLALgNAAQgNAAgLgLQgKgKAAgOg");
        this.shape_2.setTransform(3.5, 3.5);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0043EE").s().p("AgYAYQgKgKAAgOQAAgOAKgLQALgJANAAQANAAALAJQALALAAAOQAAAOgLAKQgLAKgNABQgNgBgLgKg");
        this.shape_3.setTransform(3.5, 3.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 9, 9);
    (lib.问路圈圈 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#DF0303").ss(1, 1, 1).p("AAAgiQAOAAALAKQAKALAAANQAAAPgKAKQgLAKgOAAQgLAAgNgKQgKgKAAgPQAAgNAKgLQANgKALAAg");
        this.shape.setTransform(3.5, 3.5);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#DF0303").ss(1, 1, 1).p("AAbAAQAAALgIAIQgIAHgLAAQgKAAgIgHQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKg");
        this.shape_1.setTransform(3.5, 3.4);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#0043EE").ss(1, 1, 1).p("AAbAAQAAAKgIAJQgIAIgLAAQgKAAgIgIQgIgJAAgKQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKgAAjAAQAAAOgLAKQgLALgNAAQgNAAgKgLQgLgKAAgOQAAgOALgLQAKgJANAAQANAAALAJQALALAAAOg");
        this.shape_2.setTransform(3.5, 3.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_2 }] }, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 9, 9);
    (lib.Circle_Red = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#D22C1A").ss(1.8, 1, 1).p("AAtAAQAAATgNANQgNANgTAAQgRAAgOgNQgNgNAAgTQAAgRANgOQAOgNARAAQATAAANANQANAOAAARg");
        this.shape.setTransform(4.5, 4.5);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 11, 11);
    (lib.LOGO = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib._333333();
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 246, 54);
    (lib.底框 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.底3();
        this.instance.setTransform(0, 0.4, 0.687, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0.4, 1050, 158.7);
    (lib.Circle_Blue = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#1A3FD2").ss(1.8, 1, 1).p("AAtAAQAAATgNANQgNANgTAAQgRAAgOgNQgNgNAAgTQAAgRANgOQAOgNARAAQATAAANANQANAOAAARg");
        this.shape.setTransform(4.5, 4.5);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 11, 11);
    (lib.Alpha0Btn = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AmFBVIAAipIMLAAIAACpg");
        this.shape.setTransform(39, 8.5);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 78, 17);
    (lib._3网底框白 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 19), null, new cjs.Matrix2D(0.743, 0, 0, 0.743, -564.5, -81.5)).s().p("EhQdAKZIAA0xMCg6AAAIAAUxg");
        this.shape.setTransform(356.5, 69, 0.692, 1.038);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 713, 138);
    (lib.左翻不可按 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2C2C2C").s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgDIBWhsQAEgFAFAAQAGgBAFADQAFADABAFIArCdQACAFgDAGQgCAFgGACIgFABIgFgBgAArA3IgchkIg3BEIBTAgg");
        this.shape.setTransform(21.5, 22.5);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#000000", "#272423"], [0, 1], 51, -18.5, 51, 18.3).s().p("AiCCCQg2g2AAhMQAAhLA2g3QA3g2BLAAQBMAAA2A2QA3A3AABLQAABMg3A2Qg2A3hMgBQhLABg3g3g");
        this.shape_1.setTransform(22.5, 22.6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AiICJQg6g5AAhQQAAhPA6g5QA5g6BPAAQBQAAA5A6QA6A5AABPQAABQg6A5Qg5A6hQAAQhPAAg5g6g");
        this.shape_2.setTransform(22.5, 22.5);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#000000", "#403937"], [0.376, 1], 0, -20.4, 0, 20.5).s().p("AieCeQhChCAAhcQAAhbBChDQBChCBcAAQBcAABDBCQBCBDAABbQAABchCBCQhDBChcABQhcgBhChCg");
        this.shape_3.setTransform(22.5, 22.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 45, 45);
    (lib.右翻不可按 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2C2C2C").s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgEIBWhrQAEgFAFgBQAGAAAFADQAFADABAFIArCdQACAFgDAFQgCAGgGACIgFABIgFgBgAArA2IgchkIg3BFIBTAfg");
        this.shape.setTransform(23.9, 22.2, 1, 1, 155);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#000000", "#272423"], [0, 1], 91.9, -19, 91.9, 17.8).s().p("AiCCCQg2g2AAhMQAAhLA2g3QA3g2BLAAQBMAAA2A2QA3A3AABLQAABMg3A2Qg2A3hMAAQhLAAg3g3g");
        this.shape_1.setTransform(22.5, 22.5);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AiICJQg6g5AAhQQAAhPA6g5QA5g6BPAAQBQAAA5A6QA6A5AABPQAABQg6A5Qg5A6hQAAQhPAAg5g6g");
        this.shape_2.setTransform(22.5, 22.5);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#000000", "#403937"], [0.376, 1], 0, -20.4, 0, 20.5).s().p("AieCeQhChCAAhcQAAhbBChDQBChCBcAAQBcAABDBCQBCBDAABbQAABchCBCQhDBChcABQhcgBhChCg");
        this.shape_3.setTransform(22.5, 22.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 45, 45);
    (lib.玩家信息3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D7AD54").s().p("AmtBiQgWAAgMgJIABgBQABgDAEgCQAJgEAqgWIACgCIABgDQAAgKgggDIgQgCQgFgDgHgBIgBAAIgJgCIA0gqIABgCIAAgDIgCgDQgFgEgLgCIANgIIAHgEIACgDQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIgCgDIgRgOIgBgBIgTgLIgBAAQgFgCgBgHQgCgIAKgDIABgBQAJgEAPAAIMbAAIgDADQgEAFADAEQACADAFADIAAAAQAJAFAIAGQAHAGAJAEQAIAEARACQARABALAAIASAAIgSAFIgDACIgmgDIgDABIgYAQIgCACIgIAQQgCACgTAGQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABgBAAIgIAIIAAgBIgHAIIgBADIgBADQABADADABIAVACQATADAOAIQAKAGALAJIABAAQAIAGAOgBIARABIgNAFIgBABIgKAIIgjAaIgFADIglABIldAAImzgBg");
        this.shape.setTransform(47.4, 10);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 94.8, 20);
    (lib.玩家信息2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#221811").s().p("AmtBiQgWAAgMgJIABgBQABgDAEgCQAJgEAqgWIACgCIABgDQAAgKgggDIgQgCQgFgDgHgBIgBAAIgJgCIA0gqIABgCIAAgDIgCgDQgFgEgLgCIANgIIAHgEIACgDQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIgCgDIgRgOIgBgBIgTgLIgBAAQgFgCgBgHQgCgIAKgDIABgBQAJgEAPAAIMbAAIgDADQgEAFADAEQACADAFADIAAAAQAJAFAIAGQAHAGAJAEQAIAEARACQARABALAAIASAAIgSAFIgDACIgmgDIgDABIgYAQIgCACIgIAQQgCACgTAGQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABgBAAIgIAIIAAgBIgHAIIgBADIgBADQABADADABIAVACQATADAOAIQAKAGALAJIABAAQAIAGAOgBIARABIgNAFIgBABIgKAIIgjAaIgFADIglABIldAAImzgBg");
        this.shape.setTransform(47.4, 10);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 94.8, 20);
    (lib.汇总框 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 8), null, new cjs.Matrix2D(1, 0, 0, 1, -13, -14.5)).s().p("Ai8BlQg0AAAAgzIAAhjQAAgzA0AAIF6AAQAzAAAAAzIAABjQAAAzgzAAg");
        this.shape.setTransform(25, 11);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#7F5606", "#703B05", "#703B05", "#E3C02D"], [0, 0.259, 0.753, 1], -0.2, 11.1, -0.2, -11.9).s().rr(-29.25, -12.9, 58.5, 25.8, 7);
        this.shape_1.setTransform(25, 11, 0.856, 0.853);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50, 22);
    (lib.眯牌3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#EFC920", "#FEF502"], [0.533, 0.78], 0, 6.3, 0.1, -6.2).s().p("AAAA4QAGgSABglIAAg+IAPAAIAAAmIAKAAIAAgpIAPAAIAAApIAGAAIAAAPIgfAAIAAAMIAZAAIAAA+IgPAAIAAgvIgKAAQgBAcgJAVIgMgMgAg4BDIAAg1QgKAYgTAUIgGgIIAAAEIgbAAIAAAKIgQAAIAAh6IArAAIAABfQAPgPANgWIgWAAIAAgOIAdAAIAAgzIASAAIAAAzIAhAAIAAAOIgcAAQAOAYARAQIgKARQgPgQgLgbIAAA1gAh2AmIAMAAIAAgRIgMAAgAh2AFIAMAAIAAgOIgMAAgAh2gZIAMAAIAAgQIgMAAgABeBDIAAgZIgsAAIAAgQIARAAIgIgIQAIgEAGgGIgSAAIAAg/IATAAQACgFABgHIAUADIgDAJIAkAAIAAA/IglAAQgGAKgKAIIARAAIAAgOIARAAIAAAOIAYAAIAAAQIgYAAIAAAZgABigFIAQAAIAAgLIgOAAIgCALgABIgFIAKAAQACgFAAgGIgMAAgABkgdIAOAAIAAgLIgOAAgABIgdIANAAIAAgLIgNAAgAgkgcQAJgLAIgPIAOAIIgSAbgAhWgvIANgIIAOAbIgNAIIgOgbg");
        this.shape.setTransform(13.5, 6.8);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 27, 13.7);
    (lib.限注框2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 5), null, new cjs.Matrix2D(0.653, 0, 0, 0.653, -156.4, -51.2)).s().p("AKdHqIgfgVQgFgCgEgBIglABIgZgIIgPgNQgDgEgFgBQgFAAgEACQgEADgCAEQgDAEACAFIACARIgRALIgFADI1lAAIAAkHIAVgMQAEgDACgEQACgEAAgEIgFghIgBgFIgOgiIgGgoQAAgFgDgDIAAnSIAKgIIADgFIABgGIABhTIbEAAIAADXIgFAPIgLAKIgDAGIgBAHIABANIgFALIgBAFIAAAJQAAAFAEAEQADAEAGACIAIABIADARIABADIAAKLg");
        this.shape.setTransform(89, 50.5);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#341807").s().p("AKZH4IgkgWIgoABIgegKIgRgQIAFAaIgZARIgKAEI15AAIAAkdIAdgRIgDghIgRglIgFgrIgEgDIAAnfIAQgMIABhjIbiAAIAADpIgIAWIgOANIACAQIgFAOIAAAJIALACIAFgCIAHAdIACABIAAKfg");
        this.shape_1.setTransform(89, 50.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 178, 101);
    (lib.限注框1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.限注2();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 203.1, 134);
    (lib.限注1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#221811").s().p("AkOBZIgbgaIAdgMIgegPIACgbIAXgaIgXg0IAZgUIIFAAIAOAUIAIAPIAPARIgGAkIgKgBIgMATIAVAJIAHAIIAPAcIgWgBIgDAMIABARg");
        this.shape.setTransform(29.9, 9);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 59.8, 18);
    (lib.本桌限注 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#957528").s().p("AA4A5QAGgFgBgKIAAhqIBOAAIAABJIgFAAIANAQIgXANQAJAHAPAFQgGAJgFALQgXgKgKgPIgBARQgdAGgKAEgABQAvIAVgFQgJgOgFgTIgHAAgAByAZIATgQIgbAAQADAJAFAHgABQgHIAnAAIAAgLIgnAAgABQgjIAnAAIAAgMIgnAAgAhTBIIAAgeQgUAUgjAJIgIgSQAZgCAUgNIgrAAIAAgPIA9AAIAAgIIguAAIAAg2IArAAIAAggIAVAAIAAAJIA6AAIAAAPIg6AAIAAAIIAwAAIAAA2IguAAIAAAIIA9AAIAAAPIgsAAQATAMAaADQgFAIgDAJQgkgJgSgTIAAAegAhuAAIBKAAIAAgFIhKAAgAhugRIBKAAIAAgIIhKAAgAAIBIIAAiIIAwAAIAAANIgMAoQAPANAAAXQAAAXgdgBQgBgMgDgKIAFAAQAJABAAgIQAAgOgOgNIALgmIgMAAIAAB3gAjqBHIAAgZIgeAAIAAgSIgSARIgPgSQAjgXAWgiIgyAAIAAgTIA4AAIAAgWIAUAAIAAAWIA5AAIAAATIgyAAQAXAjAhAUIgPASQgdgYgTgdIAAAlIAeAAIAAATIgeAAIAAAZgAkHAbIAdAAIAAgkQgMATgRARgACaBBQAIgWAIgjIAUAHQgIAhgHAWIgVgFgAC+BBIAAgUIAtAAIAAgfIghAAIAAgSIAhAAIAAgZIgmAAIAAgTIApAAIgJgSIAVgGIAJAYIAiAAIAAATIgkAAIAAAZIAfAAIAAASIgfAAIAAAfIAoAAIAAAUgACYgRIALgNIAeAVIgOAOIgbgWgACdg2IAMgNIAaAVIgOAOIgYgWg");
        this.shape.setTransform(29.8, 7.3);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#957528").s().p("AgHAIQgDgEgBgEQABgDADgEQADgEAEABQAFgBADAEQADAEABADQgBAEgDAEQgDADgFAAQgEAAgDgDg");
        this.shape_1.setTransform(68.5, 10.4, 1.092, 1.092);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#957528").s().p("AAAAZQgDABgDgDQgCAAAAgHIgBghIADgHIAGgBIAAAAIAGABQAFAFgBACIgCAgQABAIgDAAQgBADgFgBg");
        this.shape_2.setTransform(68.5, 5.6);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#957528").s().p("AgtAuQgSgTAAgbQAAgZASgUQATgTAaAAQAaAAATATQATAUAAAZQAAAbgTATQgTASgaABQgagBgTgSgAgngmQgRAQABAWQgBAXARARQAQARAXAAQAXAAAQgRQAQgRAAgXQAAgWgQgQQgQgRgXAAQgXAAgQARg");
        this.shape_3.setTransform(68.5, 7.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }] }).wait(1));
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("rgba(23,1,199,0)").s().p("AlEBUIAAioIKIAAIAACog");
        this.shape_4.setTransform(-0.7, -2, 1.2, 1.088, 0, 0, 0, -32.3, -8.5);
        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1.9, 78, 18.5);
    (lib.左翻按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FCE188", "#FCFBDD"], [0, 1], 1.5, 7.9, -1.6, -7.9).s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgEIBWhrQAEgFAFgBQAGAAAFADQAFADABAFIArCdQACAFgDAFQgCAGgGACIgFABIgFgBgAArA2IgchkIg3BFIBTAfg");
        this.shape.setTransform(21.5, 22.5);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#A39452").s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgDIBWhsQAEgFAFAAQAGgBAFADQAFADABAFIArCdQACAFgDAGQgCAFgGACIgFABIgFgBgAArA3IgchkIg3BEIBTAgg");
        this.shape_1.setTransform(21.5, 22.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape, p: { scaleX: 1, scaleY: 1, y: 22.5 } }] }).to({ state: [{ t: this.shape, p: { scaleX: 1.15, scaleY: 1.15, y: 22.6 } }] }, 1).to({ state: [{ t: this.shape_1 }] }, 1).wait(2));
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#311917", "#583829"], [0, 1], 0, 17.5, 0, -17.5).s().p("AiCB8Qg2g0AAhIQAAhGA2g0QA3gzBLAAQBMAAA2AzQA3A0AABGQAABIg3A0Qg2AzhMAAQhLAAg3gzg");
        this.shape_2.setTransform(22.5, 23.5);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#5D4D3E").s().p("AiCCCQg2g2AAhMQAAhLA2g3QA3g2BLAAQBMAAA2A2QA3A3AABLQAABMg3A2Qg2A3hMAAQhLAAg3g3g");
        this.shape_3.setTransform(22.5, 22.5);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#1A0E0D").s().p("AiICJQg6g5AAhQQAAhPA6g5QA5g6BPAAQBQAAA5A6QA6A5AABPQAABQg6A5Qg5A6hQAAQhPAAg5g6g");
        this.shape_4.setTransform(22.5, 22.5);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["#100706", "#2D1D1B", "#463128"], [0, 0.494, 1], 0, -20.4, 0, 20.5).s().p("AieCeQhChCAAhcQAAhbBChDQBChCBcAAQBcAABDBCQBCBDAABbQAABchCBCQhDBChcABQhcgBhChCg");
        this.shape_5.setTransform(22.5, 22.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }] }).wait(4));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 45, 45);
    (lib.右翻按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FCE188", "#FCFBDD"], [0, 1], -2.8, -7.8, -1.3, 8.2).s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgEIBWhrQAEgFAFgBQAGAAAFADQAFADABAFIArCdQACAFgDAFQgCAGgGACIgFABIgFgBgAArA2IgchkIg3BFIBTAfg");
        this.shape.setTransform(23.9, 22.2, 1, 1, 155);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#A39452").s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgEIBWhrQAEgFAFgBQAGAAAFADQAFADABAFIArCdQACAFgDAFQgCAGgGACIgFABIgFgBgAArA2IgchkIg3BFIBTAfg");
        this.shape_1.setTransform(23.9, 22.2, 1, 1, 155);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape, p: { regX: 0, regY: 0, scaleX: 1, scaleY: 1, rotation: 155, x: 23.9, y: 22.2 } }] }).to({ state: [{ t: this.shape, p: { regX: 2.6, regY: -0.2, scaleX: 1.149, scaleY: 1.149, rotation: 155.2, x: 22.1, y: 23.5 } }] }, 1).to({ state: [{ t: this.shape_1 }] }, 1).wait(2));
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#311917", "#583829"], [0, 1], 0, 17.5, 0, -17.5).s().p("AiCB8Qg2g0AAhIQAAhGA2g0QA3gzBLAAQBMAAA2AzQA3A0AABGQAABIg3A0Qg2AzhMAAQhLAAg3gzg");
        this.shape_2.setTransform(22.5, 23.5);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#5D4D3E").s().p("AiCCCQg2g2AAhMQAAhLA2g3QA3g2BLAAQBMAAA2A2QA3A3AABLQAABMg3A2Qg2A3hMAAQhLAAg3g3g");
        this.shape_3.setTransform(22.5, 22.5);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#1A0E0D").s().p("AiICJQg6g5AAhQQAAhPA6g5QA5g6BPAAQBQAAA5A6QA6A5AABPQAABQg6A5Qg5A6hQAAQhPAAg5g6g");
        this.shape_4.setTransform(22.5, 22.5);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["#100706", "#2D1D1B", "#463128"], [0, 0.494, 1], 0, -20.4, 0, 20.5).s().p("AieCeQhChCAAhcQAAhbBChDQBChCBcAAQBcAABDBCQBCBDAABbQAABchCBCQhDBChcABQhcgBhChCg");
        this.shape_5.setTransform(22.5, 22.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }] }).wait(4));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 45, 45);
    (lib.闲对区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AqfDxQgDgBgCgCQgCgCgBgDQgBgDABgCIC7oyQABgEADgBQADgCADAAQIZBUJnACQAFAAACADQADADAAAEIAAJBQAAAEgDADQgCADgFAAQrLgCpyhjg");
        this.shape.setTransform(68.1, 34.2);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 136.2, 68.5);
    (lib.闲对 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#003691").s().p("ACBA/IACgTIAYABIAJhGIgZACIADgRIAygHIgLBeIAYAAIgCATgAAeA5IADgTIAZABIALhGIgZAEIACgSIAygHIgNBdIAZABIgDAUgAjMAsIAFgSIAZgBIAQhFIgZAEIADgTIAzgGIgVBcIAZACIgFATgAguArQgHgBgDgCQgDgGACgFQAAgFAFgEQAEgEAHACQAGAAAEAEQADADgBAFQgBAGgFAEQgEADgEAAIgDAAgAgkgPQgGAAgCgDQgEgEABgGQABgFAGgCQAEgFAGABQAGgBADAFQAEAEAAAGQgCAFgFADQgFACgFAAIgCAAg");
        this.shape.setTransform(22.4, 35.6);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#033383").s().p("ACRB3QgBgRgEgUIApAEQATAAACgQIAKhqIhLgDIADgdIBKADIACglIAlACIgCAlIAXABIgCAdIgYgBIgIB2QgCASgJAKQgMAIgOABIgGAAIg0gCgAgBBLQAfgWAYgfIgjhAIAegOIAdAvQAMgZAIgcIhLgDIAEgdIBuAEIgCAdQgQAvgXAjIAgA3IgjASIgVgnQgaAdgiAaQgIgQgFgTgAhnBsQABgTgEgQQARADANAAQARABAEgOIAaiNIhlgEIAGgbICDAGIgaCpQgDASgIAKQgIAJgNAFQgGACgNAAIghgCgAkRBjIAxjBIAkABIggB9QAogYAdgfIgrgBIAHgcIA1ADIAEgWIAjABIgFAWIA0ACIgFAcIg1gCIgEAVIAMgGQAeAWAQASIgcAVIgigjIgMA/IglgCIAOhFQgaAcgfAXQgIgPgHgKIgPA+gAB9gLIAbgOQAXAbAUAeIgjAQQgRgfgSgcgAi9hwIAigIIASAlIgmAIIgOglg");
        this.shape_1.setTransform(27.5, 12.4);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0.3, 54.9, 42.1);
    (lib.闲区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AGfK2IgBAAQqVhtotjbQgDgBgCgCQgCgDAAgCIABgFIABgBIJjwOIABgCQACgDAEgBQADgCADABQCEAqCIAkQFWBYF6AxIACAAIADACIACADIABACIABAEIgBACImBSBQgBADgDACIgEABIgDAAg");
        this.shape.setTransform(81.2, 69.5);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 162.5, 139);
    (lib.闲字 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#003691").s().p("ABjBqIAMgbIAlAMIAwhlIgqgDIANgbIBRAJIg/CFIAlAKIgNAcgAgbA8QgIgEgCgGQgGgHAEgHQAEgIAJgDQAIgEALADQAHACACAIQAEAFgDAJQgDAIgIADIgNACIgGgBgAj3ACIAPgYIAkAKIA0hiIgpgDIAOgaIBPAHIhFCEIAkAIIgNAbgAAOgVQgLgDgDgHQgCgHADgGQADgIAJgDQAIgDALACQAIADADAHQAEAGgDAIQgFAHgIADIgJACIgIgBg");
        this.shape.setTransform(24.9, 61.7);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#033383").s().p("AgDDcQAIgjAEggQAeALAaAGQAhAJAMgaIB3kEIi/gyIAYgwIEBBEIiLE5QgPAggUAPQgVAQgbABIgBAAQgcAAhHgUgAhoCRIA9h9QhAAphDAdQgJgfgJgVIg6BwIhEgTIC4leIBAASIh0DhQBSgbBLgwIhRgWIAbgyIBhAaIATgoIBCAQIgSApIBjAbIgXA0IhlgbIgVAoIAYgKQAvA7AbAoIhDAeQgXgpgZgoIg1BxgAg+jtIBGgCQAIAhAHAqIhLAEQgEgsgGghg");
        this.shape_1.setTransform(44.9, 24.1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 76.9, 75.8);
    (lib.箭头 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ah3hjIB3A5IB4g4Ih4DFg");
        this.shape.setTransform(12, 10);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 24, 20);
    (lib.注区线 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#D2D2D2", "#FFFFFF", "#D2D2D2"], [0, 0.471, 1], 3, -51, 0, 3, -51, 144.1).s().p("AABMLIgSAAQrUgBp3hlIghgGIgFgBQqZhvoxjfIghgNIKLxOIAiALQHNCRILBDIAnAFQHBA3HvAAIAmAAQHrAAHDg3IAmgEQIThFHFiPIAigLIKKROIgfAMQoyDgqaBuIglAHQp2BlrSABIgUAAgASUBBQoZBUpmABQgFABgDADQgCACAAAFIAAJDQAAADACAEQADADAFAAQLMgCJxhjIAFgCIADgGIAAgGIi7ozQgBgDgDgCQgCgCgDAAIgCAAgAyaBCQgDACgCAEIi6IzQgBADABADQABADACACQACACADABQJxBjLPACQADAAADgDQAEgEAAgDIAApDQAAgFgEgCQgDgDgDgBQpogBobhUIgBAAQgDAAgCABgAfSrwQnKCSoUBFQgDAAgCABQgCACgBAEQgBACABADIGASJQACADADACQADACAEgBQKXhtIvjcIAFgEIABgEIgBgGIplwXQgCgDgDgBIgDgBIgEABgA/WrxIgCAAQgDABgCADIpkQXQgCADAAACIAAABIACAFQABACADABQIuDdKYBtIAEAAIADgBQADgCABgEIGByIQABgDgBgDIgBgDIgCgCQgDgBgDAAQoShGnLiSIgDgBIgCABgAvToUQgEACgBADIi6IyQgBACAAADIAEAGQACABADAAQIWBTJjABIASAAIAUAAQJhgBIVhSIAFgCIADgFIAAgGIi7oxQgBgDgCgDQgEgBgDAAQnDA5n2ABIgUAAIgSAAQn5gBnDg5IgBAAQgDAAgCABg");
        this.shape.setTransform(267, 78);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 534, 156);
    (lib.庄对区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AqjFTQgDgDAAgEIAApBQAAgEADgDQADgDAEAAQJmgCIYhTQADgBADACQADACACADIC6IyIAAAGIgDAFIgFACQpxBjrKACQgEAAgDgDg");
        this.shape.setTransform(68, 34.2);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 136, 68.4);
    (lib.庄对 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#74270E").s().p("AiODDIAYgCIgJhIIgYAHIgCgTIAvgNIANBfIAZgBIACATIhKAGgABZCyIAYgDIgOhGIgXAGIgEgSIAugOIAUBeIAYgBIAEASIhJAGgAAEC+QgEgDAAgFQgBgGABgEQAFgEAGABQAFgBAFADQAFADACAGQAAAFgDAEQgFAEgGABQgGAAgEgEgAC4CrIAZgCIgRhHIgYAHIgDgUIAtgNIAXBeIAYgBIAFASIhKAGgAgECEQgFgEgBgEQAAgHADgDQADgDAFgBQAFgBAGADQAEAEABAFQABAGgEADQgDAEgGABIgBAAQgEAAgEgDgAkFAMQAYgngGg0IgIhLIBhgGIgOgVIAogMIARAeIBUgGIAFAbIi+AOIAFAtQAJBTghAtQgQgVgOgMgAjPAAIBYgFIgIg2IhDAFIgDgeIBCgFIgFglIAlgDIAFAmIBFgGIAFAeIhFAFIAIA3IBRgGIAGAdIjRAPgAAMgJQAZgbAOggIg3g9IAWgSIArAsQAFgbgCgcIhJAGIgFgeIBrgHIAFAdQADAugLAoIAzAyIgdAWIgiglQgQAigZAYIgZgcgACZgTIApgCQASgBgDgQIgahqIhJAFIgHgeIBJgFIgKglIAkgDIAJAlIAXgBIAIAdIgXACIAeB2QAEARgFALQgHAIgOACIg4AEQgHgOgLgSgABrhtIAXgSIA7AzIgcAVQgagdgcgZg");
        this.shape.setTransform(26.2, 21.5);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 52.5, 43);
    (lib.庄区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AmkK2IgBgBQgEgCgBgDImAyCIgBgCIAAgBIABgCQAAgEADgCIADgBIACgBQIThEHJiSQADgBAEABQADACACADIABACIJkQOIAAACIABAEIgCAFIgEADQjhBZjyBGQlkBomMBBIgBAAIgDAAIgDAAg");
        this.shape.setTransform(81.3, 69.5);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 162.5, 139);
    (lib.庄095 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#74270E").s().p("AlZF9IAkgJIgphrIghAQIgLgdIBCgfIA3COIAjgJIALAdIhrAagAh+FSQgIgEgEgIQgCgIADgHQAFgGAJgCQAIgCAIADQAIAEAEAIQACAIgDAHQgEAHgKACIgFAAQgGAAgFgCgAgnD5QgRgsAHgbIAEgKQAJgSAWgGIAEgBQAQgFARAGQARAGAOASQAOASALAdQARAqgHAbQgHAageAIQgJACgIAAQguAAgchHgAgBCqQgaAHAYA+QAVA6AZgHQAZgGgYg7QgVg3gWAAIgCAAgACKEjQgJgDgDgJQgDgIAEgHQAFgGAJgBQAIgEAIAFQAIADAEAIQACAJgDAGQgEAHgKACIgFABQgGAAgFgDgADLESIgLgdQAKAEAKAAIAPgCIABgBQApgJgTg2IgBgBQgEASgSAHIgGABIgJACQgRABgPgJQgTgLgJgXIAAAAQgFgNAAgLQAAgLAFgLQAKgUAbgHQALgEAMACIAPAEQAHADAGAFQATANANAaIAHAPIADAJQANAngJAaQgJAegjAJIgPADIgPABIgJgCgADGB7QgLACgDAKQgCAEABAFQAAAGACAHQADAGADAFQAEAFAGAEQAFACAGABIAJgBIAGgBQAFgEADgGQADgJgDgLIgCgEQgDgFgDgEIgIgIIgHgDQgEgCgFAAIgFABgAigD6QgJgEgDgHQgCgIADgHQAFgGAJgCQAJgDAIAEQAIAEADAHQADAJgEAGQgDAHgKADIgFABQgHAAgFgEgAFXDwIgMggQAWAHATgEQAPgDAGgKQAGgJgFgNIgEgIQgMgRgfAIQgLACgQAGIgjhcIBdgXIALAdIg+APIANAkIANgFQAagHAVAKQAKAFAIAJQAHAIAFAMIABAEQAIAYgKARQgNAUgeAIQgQAEgNAAIgOgBgAlmApQAYhSgqhlIg6iUIC4gtQgUgWgQgQIBHgjIAyAzICggnIAWA4IlpBZIAjBZQA/CfgmBdQgpggghgRgAkFAAICggnIgqhmIh+AfIgWg6IB9gfIgehIIBGgRIAeBIIB/ggIAYA5IiBAgIAqBnICYgoIAZA7Il/Beg");
        this.shape.setTransform(43.5, 41);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 87.1, 81.9);
    (lib.和区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AABFNIgSAAQpjgCoWhSQgDAAgCgCIgDgFQgBgDABgCIC7oyQABgDADgCQADgCADABQHEA4H4ABIASAAIAUAAQH2gBHDg4QAEgBADACQADACABAEIC6IxIAAAGIgDAFIgFACQoVBRphACIgUAAg");
        this.shape.setTransform(117.2, 33.3);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 234.4, 66.6);
    (lib.和字 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#006411").s().p("AnJCGIAShrQgcAfgiAdQgDgUgIgbQAtghAfgkIg6AAIAHgjIBAAAIAEgdQgbAAgZADIAAggQAlgDAkgBQAqgEAmgDIAGAfIg5AFIgGAhIA8AAIgFAjIg8AAIgEAdIAQgJQAaAPAYASIglAeQgRgRgPgLIgQBsgAlFB5IAbjuICfAAIgJDsIg2AAIACgZIhEAAIgDAbgAkJA2IBEAAIAIiIIg/AAgAGPBLQgVgLgCgSQgFgaAmgNIAAgBQgkgHgCgVQgFgSAUgIQAOgLAaAAQAZAAAUAKQATAJAEAQQADAVgiAJIAAABQATAEAOAKQANAJADAOIABAIQgCAMgNAKQgSALggABQgegDgTgIgAGeAtQABAHALAFQAIAFANACQAMgCAJgFQAGgFAAgHQgEgRgfgJQgcAJADARgAGegiQgJAFAFAHQAAANAaAGQAWgHgBgMQgEgHgEgFQgJgEgJAAQgMAAgFAEgAAHBSIgBgZIAnAAIgChVIgpAFIgCgXIBRgNIAGB0IAoAAIABAZgADvBFQgJgFACgHQgDgGAKgFQADgFALABQAJgBAKAFQAFAFACAGQgBAHgFAFQgGAEgJACQgLgCgIgEgADmgEQgHgGAAgEQgCgIAGgCQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAABQAFgHAKADQAIgDAKAHIACABQADACACAIQAAAFgFAFQgHAEgJAAQgKAAgIgEg");
        this.shape.setTransform(50.9, 13.4);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.5, 0, 102.7, 26.8);
    (lib.删除按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ag3AFIAAgIIBvAAIAAAIg");
        this.shape.setTransform(9, 9.3, 1.212, 2.432, -135);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("Ag3AFIAAgIIBvAAIAAAIg");
        this.shape_1.setTransform(8.9, 8.9, 1.212, 2.433, -45);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#980000", "#FF0000"], [0, 1], 0, 9, 0, -9).s().p("Ag+A/QgbgaAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");
        this.shape_2.setTransform(9, 9);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FF0000", "#FF4141"], [0, 1], 0, 10, 0, -10).s().p("AhFBGQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAegpgBQgoABgdgeg");
        this.shape_3.setTransform(9, 9);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#C6C6C6").s().p("AgBARIgmAlIgRgRIAmglIglgkIARgSIAmAmIAngpIARARIgpAoIAqApIgSARg");
        this.shape_4.setTransform(9, 9.1);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#850000").s().p("AhCBCQgcgbAAgnQAAgmAcgcQAcgcAmAAQAnAAAbAcQAcAcAAAmQAAAngcAbQgbAcgnAAQgmAAgcgcg");
        this.shape_5.setTransform(9, 9, 0.947, 0.947);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1, p: { scaleX: 1.212, scaleY: 2.433 } }, { t: this.shape, p: { scaleX: 1.212, scaleY: 2.432 } }] }).to({ state: [{ t: this.shape_3 }, { t: this.shape_1, p: { scaleX: 1.347, scaleY: 2.704 } }, { t: this.shape, p: { scaleX: 1.346, scaleY: 2.702 } }] }, 1).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] }, 1).wait(2));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 18, 18);
    (lib.下注区底图 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.下注区底框();
        this.instance.setTransform(0, 0, 0.5, 0.5);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 529, 217.5);
    (lib._3网 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#976C4F").s().p("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");
        this.shape.setTransform(288.5, 72.3);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        this.instance = new lib._3网底框白();
        this.instance.setTransform(452.3, 69.4, 0.878, 1.043, 0, 0, 0, 515.1, 66.5);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(102,255,0,0)").s().p("EAu8ALLIAAhuIBuAAIAABugEAtFALLIAAhuIBtAAIAABugEArNALLIAAhuIBuAAIAABugEApUALLIAAhuIBuAAIAABugEAndALLIAAhuIBtAAIAABugEAllALLIAAhuIBuAAIAABugEAjsALLIAAhuIBuAAIAABugEAh1ALLIAAhuIBtAAIAABugAf9LLIAAhuIBuAAIAABugAeELLIAAhuIBuAAIAABugAcNLLIAAhuIBtAAIAABugAaVLLIAAhuIBuAAIAABugAYcLLIAAhuIBuAAIAABugAWlLLIAAhuIBtAAIAABugAUtLLIAAhuIBuAAIAABugAS0LLIAAhuIBuAAIAABugAQ9LLIAAhuIBtAAIAABugAPFLLIAAhuIBuAAIAABugANMLLIAAhuIBuAAIAABugALVLLIAAhuIBtAAIAABugAJdLLIAAhuIBuAAIAABugAHkLLIAAhuIBuAAIAABugAFtLLIAAhuIBtAAIAABugAD1LLIAAhuIBuAAIAABugAB8LLIAAhuIBkAAIAABugAAFLLIAAhuIBtAAIAABugAhxLLIAAhuIBuAAIAABugAjqLLIAAhuIBuAAIAABugAlhLLIAAhuIBtAAIAABugAnZLLIAAhuIBuAAIAABugApSLLIAAhuIBuAAIAABugArJLLIAAhuIBtAAIAABugAtBLLIAAhuIBuAAIAABugAu6LLIAAhuIBuAAIAABugAwxLLIAAhuIBtAAIAABugAypLLIAAhuIBuAAIAABugA0iLLIAAhuIBuAAIAABugA2ZLLIAAhuIBtAAIAABugA4RLLIAAhuIBuAAIAABugA6KLLIAAhuIBuAAIAABugA8BLLIAAhuIBtAAIAABugA95LLIAAhuIBuAAIAABugA/yLLIAAhuIBuAAIAABugEghpALLIAAhuIBtAAIAABugEgjhALLIAAhuIBuAAIAABugEglaALLIAAhuIBuAAIAABugEgnRALLIAAhuIBtAAIAABugEgpJALLIAAhuIBuAAIAABugEgrCALLIAAhuIBuAAIAABugEgs5ALLIAAhuIBtAAIAABugEguxALLIAAhuIBuAAIAABugEgwqALLIAAhuIBuAAIAABugEAu8AJTIAAhvIBuAAIAABvgEAtFAJTIAAhvIBtAAIAABvgEArNAJTIAAhvIBuAAIAABvgEApUAJTIAAhvIBuAAIAABvgEAndAJTIAAhvIBtAAIAABvgEAllAJTIAAhvIBuAAIAABvgEAjsAJTIAAhvIBuAAIAABvgEAh1AJTIAAhvIBtAAIAABvgAf9JTIAAhvIBuAAIAABvgAeEJTIAAhvIBuAAIAABvgAcNJTIAAhvIBtAAIAABvgAaVJTIAAhvIBuAAIAABvgAYcJTIAAhvIBuAAIAABvgAWlJTIAAhvIBtAAIAABvgAUtJTIAAhvIBuAAIAABvgAS0JTIAAhvIBuAAIAABvgAQ9JTIAAhvIBtAAIAABvgAPFJTIAAhvIBuAAIAABvgANMJTIAAhvIBuAAIAABvgALVJTIAAhvIBtAAIAABvgAJdJTIAAhvIBuAAIAABvgAHkJTIAAhvIBuAAIAABvgAFtJTIAAhvIBtAAIAABvgAD1JTIAAhvIBuAAIAABvgAB8JTIAAhvIBkAAIAABvgAAFJTIAAhvIBtAAIAABvgAhxJTIAAhvIBuAAIAABvgAjqJTIAAhvIBuAAIAABvgAlhJTIAAhvIBtAAIAABvgAnZJTIAAhvIBuAAIAABvgApSJTIAAhvIBuAAIAABvgArJJTIAAhvIBtAAIAABvgAtBJTIAAhvIBuAAIAABvgAu6JTIAAhvIBuAAIAABvgAwxJTIAAhvIBtAAIAABvgAypJTIAAhvIBuAAIAABvgA0iJTIAAhvIBuAAIAABvgA2ZJTIAAhvIBtAAIAABvgA4RJTIAAhvIBuAAIAABvgA6KJTIAAhvIBuAAIAABvgA8BJTIAAhvIBtAAIAABvgA95JTIAAhvIBuAAIAABvgA/yJTIAAhvIBuAAIAABvgEghpAJTIAAhvIBtAAIAABvgEgjhAJTIAAhvIBuAAIAABvgEglaAJTIAAhvIBuAAIAABvgEgnRAJTIAAhvIBtAAIAABvgEgpJAJTIAAhvIBuAAIAABvgEgrCAJTIAAhvIBuAAIAABvgEgs5AJTIAAhvIBtAAIAABvgEguxAJTIAAhvIBuAAIAABvgEgwqAJTIAAhvIBuAAIAABvgEAu8AHaIAAhuIBuAAIAABugEAtFAHaIAAhuIBtAAIAABugEArNAHaIAAhuIBuAAIAABugEApUAHaIAAhuIBuAAIAABugEAndAHaIAAhuIBtAAIAABugEAllAHaIAAhuIBuAAIAABugEAjsAHaIAAhuIBuAAIAABugEAh1AHaIAAhuIBtAAIAABugAf9HaIAAhuIBuAAIAABugAeEHaIAAhuIBuAAIAABugAcNHaIAAhuIBtAAIAABugAaVHaIAAhuIBuAAIAABugAYcHaIAAhuIBuAAIAABugAWlHaIAAhuIBtAAIAABugAUtHaIAAhuIBuAAIAABugAS0HaIAAhuIBuAAIAABugAQ9HaIAAhuIBtAAIAABugAPFHaIAAhuIBuAAIAABugANMHaIAAhuIBuAAIAABugALVHaIAAhuIBtAAIAABugAJdHaIAAhuIBuAAIAABugAHkHaIAAhuIBuAAIAABugAFtHaIAAhuIBtAAIAABugAD1HaIAAhuIBuAAIAABugAB8HaIAAhuIBkAAIAABugAAFHaIAAhuIBtAAIAABugAhxHaIAAhuIBuAAIAABugAjqHaIAAhuIBuAAIAABugAlhHaIAAhuIBtAAIAABugAnZHaIAAhuIBuAAIAABugApSHaIAAhuIBuAAIAABugArJHaIAAhuIBtAAIAABugAtBHaIAAhuIBuAAIAABugAu6HaIAAhuIBuAAIAABugAwxHaIAAhuIBtAAIAABugAypHaIAAhuIBuAAIAABugA0iHaIAAhuIBuAAIAABugA2ZHaIAAhuIBtAAIAABugA4RHaIAAhuIBuAAIAABugA6KHaIAAhuIBuAAIAABugA8BHaIAAhuIBtAAIAABugA95HaIAAhuIBuAAIAABugA/yHaIAAhuIBuAAIAABugEghpAHaIAAhuIBtAAIAABugEgjhAHaIAAhuIBuAAIAABugEglaAHaIAAhuIBuAAIAABugEgnRAHaIAAhuIBtAAIAABugEgpJAHaIAAhuIBuAAIAABugEgrCAHaIAAhuIBuAAIAABugEgs5AHaIAAhuIBtAAIAABugEguxAHaIAAhuIBuAAIAABugEgwqAHaIAAhuIBuAAIAABugEAu8AFZIAAhkIBuAAIAABkgEAtFAFZIAAhkIBtAAIAABkgEArNAFZIAAhkIBuAAIAABkgEApUAFZIAAhkIBuAAIAABkgEAndAFZIAAhkIBtAAIAABkgEAllAFZIAAhkIBuAAIAABkgEAjsAFZIAAhkIBuAAIAABkgEAh1AFZIAAhkIBtAAIAABkgAf9FZIAAhkIBuAAIAABkgAeEFZIAAhkIBuAAIAABkgAcNFZIAAhkIBtAAIAABkgAaVFZIAAhkIBuAAIAABkgAYcFZIAAhkIBuAAIAABkgAWlFZIAAhkIBtAAIAABkgAUtFZIAAhkIBuAAIAABkgAS0FZIAAhkIBuAAIAABkgAQ9FZIAAhkIBtAAIAABkgAPFFZIAAhkIBuAAIAABkgANMFZIAAhkIBuAAIAABkgALVFZIAAhkIBtAAIAABkgAJdFZIAAhkIBuAAIAABkgAHkFZIAAhkIBuAAIAABkgAFtFZIAAhkIBtAAIAABkgAD1FZIAAhkIBuAAIAABkgAB8FZIAAhkIBuAAIAABkgAAFFZIAAhkIBtAAIAABkgAhxFZIAAhkIBuAAIAABkgAjqFZIAAhkIBuAAIAABkgAlhFZIAAhkIBtAAIAABkgAnZFZIAAhkIBuAAIAABkgApSFZIAAhkIBuAAIAABkgArJFZIAAhkIBtAAIAABkgAtBFZIAAhkIBuAAIAABkgAu6FZIAAhkIBuAAIAABkgAwxFZIAAhkIBtAAIAABkgAypFZIAAhkIBuAAIAABkgA0iFZIAAhkIBuAAIAABkgA2ZFZIAAhkIBtAAIAABkgA4RFZIAAhkIBuAAIAABkgA6KFZIAAhkIBuAAIAABkgA8BFZIAAhkIBtAAIAABkgA95FZIAAhkIBuAAIAABkgA/yFZIAAhkIBuAAIAABkgEghpAFZIAAhkIBtAAIAABkgEgjhAFZIAAhkIBuAAIAABkgEglaAFZIAAhkIBuAAIAABkgEgnRAFZIAAhkIBtAAIAABkgEgpJAFZIAAhkIBuAAIAABkgEgrCAFZIAAhkIBuAAIAABkgEgs5AFZIAAhkIBtAAIAABkgEguxAFZIAAhkIBuAAIAABkgEgwqAFZIAAhkIBuAAIAABkgEAu8ADrIAAhvIBuAAIAABvgEAtFADrIAAhvIBtAAIAABvgEArNADrIAAhvIBuAAIAABvgEApUADrIAAhvIBuAAIAABvgEAndADrIAAhvIBtAAIAABvgEAllADrIAAhvIBuAAIAABvgEAjsADrIAAhvIBuAAIAABvgEAh1ADrIAAhvIBtAAIAABvgAf9DrIAAhvIBuAAIAABvgAeEDrIAAhvIBuAAIAABvgAcNDrIAAhvIBtAAIAABvgAaVDrIAAhvIBuAAIAABvgAYcDrIAAhvIBuAAIAABvgAWlDrIAAhvIBtAAIAABvgAUtDrIAAhvIBuAAIAABvgAS0DrIAAhvIBuAAIAABvgAQ9DrIAAhvIBtAAIAABvgAPFDrIAAhvIBuAAIAABvgANMDrIAAhvIBuAAIAABvgALVDrIAAhvIBtAAIAABvgAJdDrIAAhvIBuAAIAABvgAHkDrIAAhvIBuAAIAABvgAFtDrIAAhvIBtAAIAABvgAD1DrIAAhvIBuAAIAABvgAB8DrIAAhvIBuAAIAABvgAAFDrIAAhvIBtAAIAABvgAhxDrIAAhvIBuAAIAABvgAjqDrIAAhvIBuAAIAABvgAlhDrIAAhvIBtAAIAABvgAnZDrIAAhvIBuAAIAABvgApSDrIAAhvIBuAAIAABvgArJDrIAAhvIBtAAIAABvgAtBDrIAAhvIBuAAIAABvgAu6DrIAAhvIBuAAIAABvgAwxDrIAAhvIBtAAIAABvgAypDrIAAhvIBuAAIAABvgA0iDrIAAhvIBuAAIAABvgA2ZDrIAAhvIBtAAIAABvgA4RDrIAAhvIBuAAIAABvgA6KDrIAAhvIBuAAIAABvgA8BDrIAAhvIBtAAIAABvgA95DrIAAhvIBuAAIAABvgA/yDrIAAhvIBuAAIAABvgEghpADrIAAhvIBtAAIAABvgEgjhADrIAAhvIBuAAIAABvgEglaADrIAAhvIBuAAIAABvgEgnRADrIAAhvIBtAAIAABvgEgpJADrIAAhvIBuAAIAABvgEgrCADrIAAhvIBuAAIAABvgEgs5ADrIAAhvIBtAAIAABvgEguxADrIAAhvIBuAAIAABvgEgwqADrIAAhvIBuAAIAABvgEAu8AByIAAhuIBuAAIAABugEAtFAByIAAhuIBtAAIAABugEArNAByIAAhuIBuAAIAABugEApUAByIAAhuIBuAAIAABugEAndAByIAAhuIBtAAIAABugEAllAByIAAhuIBuAAIAABugEAjsAByIAAhuIBuAAIAABugEAh1AByIAAhuIBtAAIAABugAf9ByIAAhuIBuAAIAABugAeEByIAAhuIBuAAIAABugAcNByIAAhuIBtAAIAABugAaVByIAAhuIBuAAIAABugAYcByIAAhuIBuAAIAABugAWlByIAAhuIBtAAIAABugAUtByIAAhuIBuAAIAABugAS0ByIAAhuIBuAAIAABugAQ9ByIAAhuIBtAAIAABugAPFByIAAhuIBuAAIAABugANMByIAAhuIBuAAIAABugALVByIAAhuIBtAAIAABugAJdByIAAhuIBuAAIAABugAHkByIAAhuIBuAAIAABugAFtByIAAhuIBtAAIAABugAD1ByIAAhuIBuAAIAABugAB8ByIAAhuIBuAAIAABugAAFByIAAhuIBtAAIAABugAhxByIAAhuIBuAAIAABugAjqByIAAhuIBuAAIAABugAlhByIAAhuIBtAAIAABugAnZByIAAhuIBuAAIAABugApSByIAAhuIBuAAIAABugArJByIAAhuIBtAAIAABugAtBByIAAhuIBuAAIAABugAu6ByIAAhuIBuAAIAABugAwxByIAAhuIBtAAIAABugAypByIAAhuIBuAAIAABugA0iByIAAhuIBuAAIAABugA2ZByIAAhuIBtAAIAABugA4RByIAAhuIBuAAIAABugA6KByIAAhuIBuAAIAABugA8BByIAAhuIBtAAIAABugA95ByIAAhuIBuAAIAABugA/yByIAAhuIBuAAIAABugEghpAByIAAhuIBtAAIAABugEgjhAByIAAhuIBuAAIAABugEglaAByIAAhuIBuAAIAABugEgnRAByIAAhuIBtAAIAABugEgpJAByIAAhuIBuAAIAABugEgrCAByIAAhuIBuAAIAABugEgs5AByIAAhuIBtAAIAABugEguxAByIAAhuIBuAAIAABugEgwqAByIAAhuIBuAAIAABugEAu8gANIAAhkIBuAAIAABkgEAtFgANIAAhkIBtAAIAABkgEArNgANIAAhkIBuAAIAABkgEApUgANIAAhkIBuAAIAABkgEAndgANIAAhkIBtAAIAABkgEAllgANIAAhkIBuAAIAABkgEAjsgANIAAhkIBuAAIAABkgEAh1gANIAAhkIBtAAIAABkgAf9gNIAAhkIBuAAIAABkgAeEgNIAAhkIBuAAIAABkgAcNgNIAAhkIBtAAIAABkgAaVgNIAAhkIBuAAIAABkgAYcgNIAAhkIBuAAIAABkgAWlgNIAAhkIBtAAIAABkgAUtgNIAAhkIBuAAIAABkgAS0gNIAAhkIBuAAIAABkgAQ9gNIAAhkIBtAAIAABkgAPFgNIAAhkIBuAAIAABkgANMgNIAAhkIBuAAIAABkgALVgNIAAhkIBtAAIAABkgAJdgNIAA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IBtAAIAABvgAypnjIAAhvIBuAAIAABvgA0injIAAhvIBuAAIAABvgA2ZnjIAAhvIBtAAIAABvgA4RnjIAAhvIBuAAIAABvgA6KnjIAAhvIBuAAIAABvgA8BnjIAAhvIBtAAIAABvgA95njIAAhvIBuAAIAABvgA/ynjIAAhvIBuAAIAABvgEghpgHjIAAhvIBtAAIAABvgEgjhgHjIAAhvIBuAAIAABvgEglagHjIAAhvIBuAAIAABvgEgnRgHjIAAhvIBtAAIAABvgEgpJgHjIAAhvIBuAAIAABvgEgrCgHjIAAhvIBuAAIAABvgEgs5gHjIAAhvIBtAAIAABvgEguxgHjIAAhvIBuAAIAABvgEgwqgHjIAAhvIBuAAIAABvgEAu8gJcIAAhuIBuAAIAABugEAtFgJcIAAhuIBtAAIAABugEArNgJcIAAhuIBuAAIAABugEApUgJcIAAhuIBuAAIAABugEAndgJcIAAhuIBtAAIAABugEAllgJcIAAhuIBuAAIAABugEAjsgJcIAAhuIBuAAIAABugEAh1gJcIAAhuIBtAAIAABugAf9pcIAAhuIBuAAIAABugAeEpcIAAhuIBuAAIAABugAcNpcIAAhuIBtAAIAABugAaVpcIAAhuIBuAAIAABugAYcpcIAAhuIBuAAIAABugAWlpcIAAhuIBtAAIAABugAUtpcIAAhuIBuAAIAABugAS0pcIAAhuIBuAAIAABugAQ9pcIAAhuIBtAAIAABugAPFpcIAAhuIBuAAIAABugANMpcIAAhuIBuAAIAABugALVpcIAAhuIBtAAIAABugAJdpcIAAhuIBuAAIAABugAHkpcIAAhuIBuAAIAABugAFtpcIAAhuIBtAAIAABugAD1pcIAAhuIBuAAIAABugAB8pcIAAhuIBuAAIAABugAAFpcIAAhuIBtAAIAABugAhxpcIAAhuIBuAAIAABugAjqpcIAAhuIBuAAIAABugAlhpcIAAhuIBtAAIAABugAnZpcIAAhuIBuAAIAABugApSpcIAAhuIBuAAIAABugArJpcIAAhuIBtAAIAABugAtBpcIAAhuIBuAAIAABugAu6pcIAAhuIBuAAIAABugAwxpcIAAhuIBtAAIAABugAyppcIAAhuIBuAAIAABugA0ipcIAAhuIBuAAIAABugA2ZpcIAAhuIBtAAIAABugA4RpcIAAhuIBuAAIAABugA6KpcIAAhuIBuAAIAABugA8BpcIAAhuIBtAAIAABugA95pcIAAhuIBuAAIAABugA/ypcIAAhuIBuAAIAABugEghpgJcIAAhuIBtAAIAABugEgjhgJcIAAhuIBuAAIAABugEglagJcIAAhuIBuAAIAABugEgnRgJcIAAhuIBtAAIAABugEgpJgJcIAAhuIBuAAIAABugEgrCgJcIAAhuIBuAAIAABugEgs5gJcIAAhuIBtAAIAABugEguxgJcIAAhuIBuAAIAABugEgwqgJcIAAhuIBuAAIAABug");
        this.shape_1.setTransform(313.5, 72.5);
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -0.2, 626, 145);
    (lib.赢4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Aj2EPQgEgDAFgFIAHgKQAKgOAJgQQAIgRAGgaQAGgZACgZQACgagCgRQgBgTgDgRQgEgPgEgLQgGgLACgCQACgCALACIAmAJIAagMIAFgLQgGgDgEgDQgDgDgDgLIgIgdQgEgLgGgLIgHgQQgCgFADgDQADgEAxAOIB6gfIABgNIBFAVIgNAVIgWAtIAYAMIAcgMIABgbIA9AhIgGAcQgEALgBAQQgCAQABAgQgBAhAFANQAFARAJAJQALAIAKgBQAJgBADgGQADgFgBgNIgDgTIgDgRQAAgGACgCQADgCAFAFIAJANQAGAGAOAbIAQAZIAKAXIgTAMQgKAEghADQgiAEgYgVQgagVgBgXIgFgkIgUgLIgBAdIgIAkQgEAWgHANQgHANgMAPIgQATIgIAGQgDADgDgBQgCgBACgGIAUgpIgKgIIgegXQgPAngIALQgIAMgGAHIgKALQgGAIgDgDQgEgDAFgJIANghQAGgPAIgbQAGgagGgsQgBgMgDgCIgJgNIAFAuQADAcAAAKQABAKgDABQgDABgGgFIgSgKQgEgDgCgDQgBgEABgMQACgGgCgPIgLhWIgFAWQgBAJAEAhIAOB+QACAZACAJIABANQAAAEgDACQgDACgHgDQgTgFgVgMIgdgRIgIgFQgIgGAAgCQAAgDAHgDQAFgCALAAQAMgBAOgFIgEgmIgjANQgMAngMAQQgMARgNALQgOAMgJADIgIAEIgFACIgCgBgAg1AbIADATIAcACQAKABADABQACACgBAMQgBALACAUQACAUAAAIIAAAXIAVABQANABAJgBQAEgQABgKQABgLgBggQAAghgBgFIgIglQgFANgCAJQgBAIADAWIAFAoIABAYIABALQABAEgDACQgBABgGgCIgUgKQgGgEgBgDIAAgNIAAgQIgHhLgAicBrIgCAWIAggKIgBgZgAidA1IAAAXIAagLIgCgYgABHAEIAGArIAXAEIgDg5gAhmgUIgPAQIAbALIgDgHQgBgFABgBIAjAFIAtgQIADgOIAsAUIgKgXIgUgSgAhvg9IADASIBtggIACgSgAiih0IADgNIACgTIgeALQgPAFgeAUIgUhbQAaAEAkADQAkADBPgQIgLgMIgigfQgPgMABgCQABgDAPgBQATgBAQABIAeADQAPACADAEQACAEgDANIgIAcQBCgNAegLQAegMAegQIAMBNQgqgBgWACQgWAChXAMIhAALIACAVQAegEAxgKQAvgKALgGIAWgLIALAtQglABg5ALQg8ALgUAKIgYAMg");
        mask.setTransform(25.3, 27.2);
        this.instance = new lib.光2();
        this.instance.setTransform(48.3, 0.4, 1, 1, 0, 0, 0, 17.8, 40.5);
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-9, 13, 70, 73);
        this.instance.mask = mask;
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: -23, y: 41 }, 24).wait(6));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(223,5,5,0)").s().p("Aj2EPQgEgDAFgFIAHgKQAKgOAJgQQAIgRAGgaQAGgZACgZQACgagCgRQgBgTgDgRQgEgPgEgLQgGgLACgCQACgCALACIAmAJIAagMIAFgLQgGgDgEgDQgDgDgDgLIgIgdQgEgLgGgLIgHgQQgCgFADgDQADgEAxAOIB6gfIABgNIBFAVIgNAVIgWAtIAYAMIAcgMIABgbIA9AhIgGAcQgEALgBAQQgCAQABAgQgBAhAFANQAFARAJAJQALAIAKgBQAJgBADgGQADgFgBgNIgDgTIgDgRQAAgGACgCQADgCAFAFIAJANQAGAGAOAbIAQAZIAKAXIgTAMQgKAEghADQgiAEgYgVQgagVgBgXIgFgkIgUgLIgBAdIgIAkQgEAWgHANQgHANgMAPIgQATIgIAGQgDADgDgBQgCgBACgGIAUgpIgKgIIgegXQgPAngIALQgIAMgGAHIgKALQgGAIgDgDQgEgDAFgJIANghQAGgPAIgbQAGgagGgsQgBgMgDgCIgJgNIAFAuQADAcAAAKQABAKgDABQgDABgGgFIgSgKQgEgDgCgDQgBgEABgMQACgGgCgPIgLhWIgFAWQgBAJAEAhIAOB+QACAZACAJIABANQAAAEgDACQgDACgHgDQgTgFgVgMIgdgRIgIgFQgIgGAAgCQAAgDAHgDQAFgCALAAQAMgBAOgFIgEgmIgjANQgMAngMAQQgMARgNALQgOAMgJADIgIAEIgFACIgCgBgAg1AbIADATIAcACQAKABADABQACACgBAMQgBALACAUQACAUAAAIIAAAXIAVABQANABAJgBQAEgQABgKQABgLgBggQAAghgBgFIgIglQgFANgCAJQgBAIADAWIAFAoIABAYIABALQABAEgDACQgBABgGgCIgUgKQgGgEgBgDIAAgNIAAgQIgHhLgAicBrIgCAWIAggKIgBgZgAidA1IAAAXIAagLIgCgYgABHAEIAGArIAXAEIgDg5gAhmgUIgPAQIAbALIgDgHQgBgFABgBIAjAFIAtgQIADgOIAsAUIgKgXIgUgSgAhvg9IADASIBtggIACgSgAiih0IADgNIACgTIgeALQgPAFgeAUIgUhbQAaAEAkADQAkADBPgQIgLgMIgigfQgPgMABgCQABgDAPgBQATgBAQABIAeADQAPACADAEQACAEgDANIgIAcQBCgNAegLQAegMAegQIAMBNQgqgBgWACQgWAChXAMIhAALIACAVQAegEAxgKQAvgKALgGIAWgLIALAtQglABg5ALQg8ALgUAKIgYAMg");
        this.shape.setTransform(25.3, 27.2);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50.6, 54.5);
    (lib.赢3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.赢1();
        this.instance.setTransform(37, 34.2, 1, 1, 0, 0, 0, 25.3, 27.2);
        this.instance_1 = new lib.赢2();
        this.instance_1.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 70, 70.1);
    (lib._03 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_10 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));
        this.instance = new lib.赢4();
        this.instance.setTransform(29.7, 15);
        this.instance._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({ _off: false }, 0).wait(1));
        this.instance_1 = new lib.赢3();
        this.instance_1.setTransform(42.9, 32.6, 5.557, 5.557, 0, 0, 0, 23.7, 23.8);
        this.instance_1.alpha = 0.5;
        this.instance_1.filters = [new cjs.BlurFilter(16, 16, 3)];
        this.instance_1.cache(-2, -2, 74, 74);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ regY: 23.7, scaleX: 0.86, scaleY: 0.86, x: 41.6, y: 31.8, alpha: 1 }, 3, cjs.Ease.get(-0.3)).to({ regY: 23.8, scaleX: 1, scaleY: 1, x: 41.7 }, 2).wait(6));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-132.8, -143.6, 482, 483);
    (lib.飞牌按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -26.7, 0, 26.8).s().p("AANBxQAQgkAAhKIAAiAIAfAAIAABNIATAAIAAhTIAfAAIAABTIALAAIAAAfIg9AAIAAAZIAyAAIAAB9IgfAAIAAheIgTAAQgCA4gRApIgcgXgAiGBfQgZgoABiNIh9AAIAAgjICkAAQgBAfAAAlQAigeAbgeIAkAkIhKA0IBCAeIgSAlQgggUgkgSQAHA6AQAQQAOAQANAAQADAAAEgCQAEgDAGgSIAHgdQAWAOAMAFQgKApgMAQQgNAQgWAAQgsABgYgogADMCGIAAgzIhZAAIAAgeIAjAAIgRgQQASgJALgMIgjAAIAAh+IAlAAQAEgNABgMIApAFIgHAUIBIAAIAAB+IhKAAQgKAUgVARIAiAAIAAgdIAjAAIAAAdIAtAAIAAAeIgtAAIAAAzgADVgLIAeAAIAAgXIgbAAIgDAXgACggLIAVAAQAEgLAAgMIgZAAgADYg8IAbAAIAAgVIgbAAgACgg8IAZAAIAAgVIgZAAg");
        this.shape.setTransform(72.5, 26.7);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0.8)", "#FFFFFF", "rgba(255,255,255,0.8)"], [0.165, 0.596, 0.906], 0, -42.9, 0, 42.9).s().p("AAOB2QARglAAhOIAAiGIAhAAIAABQIAUAAIAAhWIAhAAIAABWIAMAAIAAAhIhBAAIAAAbIA1AAIAACCIghAAIAAhiIgUAAQgCA6gSAsIgegZgAiOBjQgagqAAiTIiFAAIAAglICvAAQgCAhAAAnQAlggAcgfIAmAlIhPA3IBHAgIgTAmQgigVgmgUQAHA+ARARQAPARANAAQAEAAAEgCQAEgDAGgTQAGgTACgMQAXAPANAEQgKArgOASQgNASgXAAQguAAgagrgADYCNIAAg1IheAAIAAghIAlAAIgSgQQASgKANgMIglAAIAAiFIAnAAQAEgNACgNIArAGIgHAUIBMAAIAACFIhOAAQgMAVgWARIAkAAIAAgeIAlAAIAAAeIAxAAIAAAhIgxAAIAAA1gADigMIAfAAIAAgYIgcAAIgDAYgACqgMIAVAAQAFgLAAgNIgaAAgADlg+IAcAAIAAgYIgcAAgACqg+IAbAAIAAgYIgbAAg");
        this.shape_1.setTransform(73.2, 27.4);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -25.4, 0, 25.4).s().p("AANBrQAPgjgBhFIAAh5IAeAAIAABIIASAAIAAhOIAdAAIAABOIALAAIAAAdIg6AAIAAAYIAvAAIAAB4IgdAAIAAhaIgSAAQgCA0gQAoIgagWgAh/BZQgYglAAiFIh2AAIAAgiICcAAQgBAdAAAkQAggdAagdIAiAjIhHAyIBAAbIgSAkIhAgkQAGA3APAPQAOAPAMAAQAEAAADgCQAEgCAFgRIAHgcQAVANALAFQgJAngMAPQgMAQgVAAQgpAAgXgngADCB/IAAgwIhVAAIAAgdIAhAAIgPgPQAQgJALgMIgiAAIAAh3IAkAAIAFgXIAmAFIgGASIBEAAIAAB3IhGAAQgKAUgUAQIAhAAIAAgbIAhAAIAAAbIArAAIAAAdIgrAAIAAAwgADKgLIAcAAIAAgVIgZAAQgBALgCAKgACYgLIATAAQAEgKABgLIgYAAgADNg5IAZAAIAAgUIgZAAgACYg5IAYAAIAAgUIgYAAg");
        this.shape_2.setTransform(73.1, 27);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).wait(2));
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(176,202,0,0.698)", "rgba(176,202,0,0.498)"], [0.451, 0.82], 0.3, -25.2, 0.3, 24.5).s().p("AoUDIQCGh4Dhi2IjrDzIG4lsQChADC6gDIA5gLICzgPIATAEIAUAAQAOArgDAAIgcAPIhJAyQg4AvARgLQAPgKCBhHIAAAEIjgCmIDfiTIAJAfIobFdIj7AGIAcgXIARgeIgRACIgpAXIhcAfIl7AUgApaCZIgFAEIgkgSIB/hTIgbAAIFqkfICEAHInwGVIgIAGQgLAHhwAPg");
        this.shape_3.setTransform(76.5, 26.2);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["rgba(222,255,0,0.698)", "rgba(221,255,0,0.498)"], [0.451, 0.82], 0.3, -26.5, 0.3, 25.7).s().p("Ao1DSQCPh+Dvi/Ij6D/IHTl+QCrADDFgDIA8gLIC+gRIAVAFIAUAAQAPAtgDAAIgdAQIhNA0Qg9AxATgLQAQgLCIhKIAAAFIjtCuIDsibIAKAhIo8FuIkKAGIAdgYIATggIgTADIgqAYIhjAgImRAWgAqFClIglgTICGhXIgcAAIGAktICMAGIoOGqIgIAHQgMAHh3APg");
        this.shape_4.setTransform(76.6, 26.2);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["rgba(117,133,13,0.698)", "rgba(106,121,3,0.498)"], [0.451, 0.82], 0.3, -24, 0.3, 23.2).s().p("An5C+QB/hyDWitIjgDnIGilaQCaADCwgDIA2gKICqgPIASAEIATAAQAOApgDAAIgaAPIhGAvQg1AsAQgKQAOgKB7hDIAAAFIjVCdIDTiMIAJAeIoAFLIjvAFIAbgWIAQgcIgQACIgmAWIhYAdIloAUgAo8CRIgFAEIgigRIB4hPIgZAAIFYkQIB+AGInYGBIgHAGQgKAGhrAOg");
        this.shape_5.setTransform(76.3, 26.2);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }] }).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).wait(2));
        this.instance = new lib.飞牌1();
        this.instance.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 15);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.06, scaleY: 1.05 }, 0).wait(1).to({ scaleX: 0.95, scaleY: 0.95 }, 0).wait(2));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16, -16, 184, 87);
    (lib.重押按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], -6.5, -19.5, -6.5, 19.8).s().p("AgsBgIAUABQAJgBAAgMIAAg0IgbAGIgDgmIAegCIAAgxIgcAAIAAgiIAcAAIAAguIAiAAIAAAuIAZAAIAAAiIgZAAIAAArIAbgGQgEAWAAANIgXAEIAABJQAAAegXACQgQACgRAAIgHgkg");
        this.shape.setTransform(79, 27.3);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -19.9, 0, 19.4).s().p("AC0CCIAAhNIgcAAIAAANIgjAAIAAi8ICjAAIAAC8IgkAAIAAgNIgbAAIAABNgADZATIAbAAIAAgjIgbAAgACYATIAcAAIAAgjIgcAAgADZgyIAbAAIAAglIgbAAgACYgyIAcAAIAAglIgcAAgAkXB4IAAgYIB1AAIAAgOIhjAAIAAgXIBjAAIAAgNIhaAAIAAhfIBaAAIAAgNIh0AAIAAgYIB0AAIAAgPIhdADIgFgZQB0gCBvgFIAFAaIhiACIAAAQIB2AAIAAAYIh2AAIAAANIBbAAIAABfIhbAAIAAANIBlAAIAAAXIhlAAIAAAOIB2AAIAAAYgAh+AXIA4AAIAAgPIg4AAgAjYAXIA2AAIAAgPIg2AAgAh+gLIA4AAIAAgPIg4AAgAjYgLIA2AAIAAgPIg2AAg");
        this.shape_1.setTransform(72.5, 27.6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["rgba(255,255,255,0.8)", "#FFFFFF", "rgba(255,255,255,0.8)"], [0.165, 0.596, 1], 0, -20.6, 0, 20.7).s().p("AC8CMIAAhSIgcAAIAAANIgmAAIAAjFICsAAIAADFIgmAAIAAgNIgcAAIAABSgADkAWIAcAAIAAglIgcAAgACgAWIAcAAIAAglIgcAAgADkgzIAcAAIAAgmIgcAAgACggzIAcAAIAAgmIgcAAgAAUBkIAVAAQAJAAAAgMIAAg4IgcAHIgDgnIAfgDIAAg0IgcAAIAAgjIAcAAIAAgxIAmAAIAAAxIAaAAIAAAjIgaAAIAAAtIAcgFQgEAWAAAOIgYAEIAABMQAAAggbADQgQABgRAAIgIglgAklCBIAAgaIB7AAIAAgOIhoAAIAAgYIBoAAIAAgPIheAAIAAhiIBeAAIAAgPIh6AAIAAgZIB6AAIAAgPIhhACIgGgaQB6gBB0gGIAGAbIhnADIAAAQIB8AAIAAAZIh8AAIAAAPIBfAAIAABiIhfAAIAAAPIBqAAIAAAYIhqAAIAAAOIB8AAIAAAagAiEAbIA6AAIAAgRIg6AAgAjjAbIA5AAIAAgRIg5AAgAiEgJIA6AAIAAgQIg6AAgAjjgJIA5AAIAAgQIg5AAg");
        this.shape_2.setTransform(72.4, 27.4);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(255,255,255,0.6)", "#FFFFFF", "rgba(255,255,255,0.6)"], [0.145, 0.596, 1], 0, -18.5, 0, 18.6).s().p("ACpB+IAAhKIgZAAIAAAMIgiAAIAAixICbAAIAACxIgiAAIAAgMIgaAAIAABKgADNAUIAaAAIAAghIgaAAgACQAUIAZAAIAAghIgZAAgADNgtIAaAAIAAgjIgaAAgACQgtIAZAAIAAgjIgZAAgAARBaIAUAAQAIAAAAgLIAAgyIgZAGIgDgjIAcgDIAAguIgaAAIAAggIAaAAIAAgsIAiAAIAAAsIAYAAIAAAgIgYAAIAAAoIAagFQgDAUgBANIgWAEIAABEQAAAdgYACQgOACgQAAIgIgigAkIB0IAAgXIBvAAIAAgNIheAAIAAgWIBeAAIAAgNIhVAAIAAhYIBVAAIAAgNIhuAAIAAgXIBuAAIAAgOIhYADIgEgYQBugBBngFIAGAYIhcACIAAAPIBvAAIAAAXIhvAAIAAANIBVAAIAABYIhVAAIAAANIBfAAIAAAWIhfAAIAAANIBvAAIAAAXgAh2AYIA0AAIAAgPIg0AAgAjMAYIAzAAIAAgPIgzAAgAh2gIIA0AAIAAgOIg0AAgAjMgIIAzAAIAAgOIgzAAg");
        this.shape_3.setTransform(72.6, 27.2);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).wait(2));
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["rgba(0,192,209,0.698)", "rgba(0,192,209,0.498)"], [0.451, 0.82], 0.3, -25.2, 0.3, 24.5).s().p("AoUDIQCGh4Dhi2IjrDzIG4lsQChADC6gDIA5gLICzgPIATAEIAUAAQAOArgDAAIgcAPIhJAyQg4AvARgLQAPgKCBhHIAAAEIjgCmIDfiTIAJAfIobFdIj7AGIAcgXIARgeIgRACIgpAXIhcAfIl7AUgApaCZIgFAEIgkgSIB/hTIgbAAIFqkfICEAHInwGVIgIAGQgLAHhwAPg");
        this.shape_4.setTransform(76.5, 26.2);
        this.instance = new lib.重押2();
        this.instance.setTransform(76.5, 26.2, 1, 1, 0, 0, 0, 71, 26.3);
        this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 41, 90, 0))];
        this.instance.cache(-2, -2, 146, 57);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }] }).to({ state: [{ t: this.instance, p: { regY: 26.3, scaleX: 1, scaleY: 1, x: 76.5 } }] }, 1).to({ state: [{ t: this.instance, p: { regY: 26.4, scaleX: 0.9, scaleY: 0.9, x: 76.3 } }] }, 1).wait(2));
        this.instance_1 = new lib.飞牌1();
        this.instance_1.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 15);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ regX: 74.1, regY: 25.7, scaleX: 0.95, scaleY: 0.95, x: 74.1, y: 25.7 }, 0).wait(2));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16, -16, 184, 87);
    (lib.清除按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -24.3, 0, 24.4).s().p("AAYCGIAAj/IBZAAIAAAaIgNAqQAxgcAcg0IAlAAIgEAIQAeAvAtATQgIASgFAUQgNgHgLgIIAAARIglAAIAAAWIA/AAIAAAfIg/AAIAABAQAAAggeADIgiABQgCgUgFgSIgTAcQgMgKgSgJQAZgeAOggIAfANQgIATgNAUQALACAHAAQAQAAAAgSIAAgtIg6AAIAAgfIA6AAIAAgWIgmAAIAAgNIgTAOQgIgQgKgPIgKAdQAWAZAAAjQAAAYgKAKQgLAMgbAAQgCgSgFgVIAKACQAMAAAAgQQAAgbgVgXQAMgmAIgjIgVAAIAADggACcgyIBKAAQgWgUgQgXQgPAXgVAUgAkXB6QAOgtANg8QASAIARAFIgaBoIgkgMgAh7BoIArACQANgBAAgNIAAgEIhfAAIAAAtIglAAIAAiMICpAAIAABpQAAAQgIAIQgHAIgNACQgOABgrAAIgIgdgAiiBCIBfAAIAAgNIhfAAgAiiAfIBfAAIAAgOIhfAAgADZA7IAegQQASAaAVAjIggASQgSgkgTgbgAkdghIAXgaQAVAQAWASIgZAcIgpgkgAjYgSIAAgXIBQAAIAAgMIhBAAIAAgXIBBAAIAAgMIhIAAIAAgXIBIAAIAAgXIAnAAIAAAXIBNAAIAAAXIhNAAIAAAMIBGAAIAAAXIhGAAIAAAMIBUAAIAAAXgAkWhrIAXgYQAXARAWARIgZAcQgUgUgXgSg");
        this.shape.setTransform(73, 27.1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0.8)", "#FFFFFF", "rgba(255,255,255,0.8)"], [0.165, 0.596, 1], 0, -25.6, 0, 25.6).s().p("AAZCNIAAkMIBdAAIAAAbIgNAsQAzgdAeg2IAmAAIgEAIQAgAwAwAVQgJATgFAUQgOgHgLgIIAAARIgoAAIAAAYIBDAAIAAAgIhDAAIAABEQAAAigfACIgjABQgCgUgGgUIgUAeQgMgKgUgKQAbgfAOgjIAhAPQgJAUgNAVQAMACAHAAQARAAAAgTIAAgwIg9AAIAAggIA9AAIAAgYIgoAAIAAgNIgUAPQgJgRgKgQIgKAfQAXAaAAAlQAAAZgLALQgMAMgcAAQgCgSgFgWIALABQAMAAAAgRQAAgcgWgYQAMgoAJgkIgWAAIAADrgACkg1IBNAAQgXgUgRgZQgPAYgWAVgAklCAQAPgvANg/QATAIASAFIgbBtIgmgMgAiCBtIAuACQAOAAAAgOIAAgEIhkAAIAAAuIgnAAIAAiSICxAAIAABuQAAAQgIAJQgIAIgNACQgOABguAAQgEgPgFgPgAiqBFIBkAAIAAgNIhkAAgAiqAgIBkAAIAAgOIhkAAgADkA+IAfgSQAUAcAVAlIgiASQgSgkgUgdgAkrgjIAYgbQAWARAXATIgaAdIgrgmgAjjgTIAAgYIBUAAIAAgMIhEAAIAAgZIBEAAIAAgNIhLAAIAAgYIBLAAIAAgXIApAAIAAAXIBRAAIAAAYIhRAAIAAANIBJAAIAAAZIhJAAIAAAMIBYAAIAAAYgAkkhwIAYgZQAYAQAYATIgbAdQgVgVgYgSg");
        this.shape_1.setTransform(72.9, 27.2);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["rgba(255,255,255,0.6)", "#FFFFFF", "rgba(255,255,255,0.6)"], [0.157, 0.596, 1], 0, -23.5, 0, 23.5).s().p("AAXCBIAAj2IBVAAIAAAZIgLApQAugbAbgyIAkAAIgEAHQAdAtAsATQgHARgGATQgMgGgKgHIAAAPIglAAIAAAWIA9AAIAAAdIg9AAIAAA+QAAAfgdADIggAAQgCgSgGgSIgSAcQgLgKgRgJQAYgdANggIAeAPQgIARgMAUQAKACAHAAQAPgBABgRIAAgsIg4AAIAAgdIA4AAIAAgWIglAAIAAgMIgSANQgIgPgKgPIgJAcQAVAZAAAhQAAAXgKALQgKALgaAAQgCgRgFgUIAKABQALAAAAgQQAAgagUgVQALgmAIggIgUAAIAADXgACWgxIBIAAQgWgSgPgXQgOAXgVASgAh3BkIAqACQANgBAAgNIAAgDIhcAAIAAArIgkAAIAAiGICjAAIAABkQAAAPgHAIQgIAIgMACQgNABgqAAIgIgcgAicBAIBcAAIAAgNIhcAAgAicAdIBcAAIAAgNIhcAAgAkNB1QAOgrAMg6QASAIAQAFIgZBjIgjgLgADRA5IAdgRQASAaAUAiIggARQgQgigTgagAkTggIAXgZQAUAQAUARIgXAbIgogjgAjQgRIAAgXIBNAAIAAgKIg/AAIAAgYIA/AAIAAgLIhFAAIAAgXIBFAAIAAgVIAmAAIAAAVIBKAAIAAAXIhKAAIAAALIBCAAIAAAYIhCAAIAAAKIBQAAIAAAXgAkMhnIAXgXQAVAPAWARIgZAcQgTgUgWgRg");
        this.shape_2.setTransform(73, 27.1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).wait(2));
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(194,0,0,0.698)", "rgba(196,0,0,0.498)"], [0.451, 0.82], 0.3, -25.2, 0.3, 24.5).s().p("AoUDIQCGh4Dhi2IjrDzIG4lsQChADC6gDIA5gLICzgPIATAEIAUAAQAOArgDAAIgcAPIhJAyQg4AvARgLQAPgKCBhHIAAAEIjgCmIDfiTIAJAfIobFdIj7AGIAcgXIARgeIgRACIgpAXIhcAfIl7AUgApaCZIgFAEIgkgSIB/hTIgbAAIFqkfICEAHInwGVIgIAGQgLAHhwAPg");
        this.shape_3.setTransform(76.5, 26.2);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["rgba(240,0,0,0.698)", "rgba(250,0,0,0.498)"], [0.451, 0.82], 0.3, -26.5, 0.3, 25.7).s().p("AovDSQCNh+Dsi/Ij3D/IHOl+QCqADDDgDIA7gLIC8gRIAVAFIAVAAQAOAtgDAAIgdAQIhMA0Qg8AxASgLQARgLCGhKIAAAFIjrCuIDqibIAJAhIo2FuIkHAGIAdgYIASgfIgSACIgqAYIhhAgImOAWgAp+ClIglgTICFhXIgcAAIF8ktICKAHIoJGpIgHAHQgMAHh1APg");
        this.shape_4.setTransform(76.6, 26.2);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["rgba(133,0,0,0.698)", "rgba(131,0,0,0.498)"], [0.451, 0.82], 0.3, -24.3, 0.3, 23.6).s().p("AoBDBQCBh0DZivIjjDqIGolfQCdADCygDIA2gKICtgPIATAEIATAAQANAqgCAAIgaAOIhHAwQg3AtARgKQAPgKB7hFIAAAFIjXCgIDWiOIAJAeIoIFQIjxAGIAagXIASgdIgSADIgmAWIhZAdIluAUgApKCYIgigSIB6hQIgZAAIFdkUIB/AGInfGHIgHAGQgKAGhsAOg");
        this.shape_5.setTransform(76.4, 26.1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }] }).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).wait(2));
        this.instance = new lib.飞牌1();
        this.instance.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 15);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ scaleX: 0.96, scaleY: 0.96, x: 74.1 }, 0).wait(2));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16, -16, 184, 87);
    (lib.开牌按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -15.9, 0, 15.9).s().p("AkbBsQAagNARgTQAQgTADgmIg+AAIAAgiIA/AAIAAhDIgwAAIAAgjID0AAIAAAjIgsAAIAABDIA4AAIAAAiIg4AAIAABwIgoAAIAAhwIhJAAQgDAxgPAZQgQAZghASQgPgNgUgPgAi0gPIBIAAIAAhDIhIAAgAANBxQAQglAAhJIAAiAIAfAAIAABMIATAAIAAhSIAfAAIAABSIALAAIAAAfIg9AAIAAAaIAyAAIAAB9IgfAAIAAheIgTAAQgCA3gRAqIgcgXgADMCGIAAgzIhZAAIAAgfIAjAAIgRgPQARgKAMgMIgjAAIAAh+IAlAAQADgMACgMIApAFIgHATIBIAAIAAB+IhKAAQgLAVgUAQIAiAAIAAgcIAjAAIAAAcIAtAAIAAAfIgtAAIAAAzgADVgMIAdAAIAAgWIgaAAIgDAWgACggMIAUAAQAEgKABgMIgZAAgADYg8IAaAAIAAgWIgaAAgACgg8IAZAAIAAgWIgZAAg");
        this.shape.setTransform(72.9, 27.1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0.8)", "#FFFFFF", "rgba(255,255,255,0.8)"], [0.165, 0.596, 1], 0.1, -16.7, 0.1, 16.7).s().p("AkpByQAbgOASgUQARgUADgoIhCAAIAAgkIBEAAIAAhGIg0AAIAAglIEBAAIAAAlIguAAIAABGIA7AAIAAAkIg7AAIAAB1IgqAAIAAh1IhNAAQgDA0gQAaQgRAagjATQgQgOgUgPgAi9gQIBMAAIAAhGIhMAAgAAOB2QARgmAAhNIAAiGIAhAAIAABQIATAAIAAhWIAgAAIAABWIANAAIAAAgIhAAAIAAAbIAzAAIAACDIgfAAIAAhiIgVAAQgBA6gTAsIgdgZgADWCMIAAg1IhdAAIAAggIAlAAIgSgQQASgKAMgNIglAAIAAiEIAnAAQAEgNACgNIAqAFQgCAKgFALIBMAAIAACEIhOAAQgLAWgWARIAkAAIAAgeIAlAAIAAAeIAwAAIAAAgIgwAAIAAA1gADfgMIAgAAIAAgYIgcAAIgEAYgACogMIAWAAQAEgLAAgNIgaAAgADjg/IAcAAIAAgXIgcAAgACog/IAaAAIAAgXIgaAAg");
        this.shape_1.setTransform(72.9, 27.1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["rgba(255,255,255,0.6)", "#FFFFFF", "rgba(255,255,255,0.6)"], [0.165, 0.596, 1], 0.1, -14.9, 0.1, 15.1).s().p("AkLBnQAZgNAPgSQAQgRACglIg6AAIAAggIA8AAIAAg/IguAAIAAgiIDnAAIAAAiIgqAAIAAA/IA1AAIAAAgIg1AAIAABpIgmAAIAAhpIhFAAQgDAugOAYQgPAYgfARQgOgNgTgNgAipgOIBDAAIAAg/IhDAAgAAOBsIgBgCIABgDQAOgjAAhBIAAh5IAdAAIAABIIASAAIAAhNIAdAAIAABNIALAAIAAAdIg6AAIAAAYIAvAAIAAB2IgdAAIAAhYIgSAAQgBA0gRAoIgZgVgADBB/IAAgxIhUAAIAAgcIAhAAIgQgPQAQgJALgMIghAAIAAh2IAjAAQAEgMABgMIAnAFQgCAJgFAKIBEAAIAAB2IhFAAQgLAUgUAQIAhAAIAAgbIAhAAIAAAbIAqAAIAAAcIgqAAIAAAxgADJgLIAcAAIAAgVIgZAAIgDAVgACXgLIAUAAQADgJAAgMIgXAAgADMg4IAZAAIAAgVIgZAAgACXg4IAYAAIAAgVIgYAAg");
        this.shape_2.setTransform(73, 27);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).wait(2));
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(0,0,198,0.698)", "rgba(0,0,198,0.498)"], [0.451, 0.82], 0.3, -25.2, 0.3, 24.5).s().p("AoUDIQCGh4Dhi2IjrDzIG4lsQChADC6gDIA5gLICzgPIATAEIAUAAQAOArgDAAIgcAPIhJAyQg4AvARgLQAPgKCBhHIAAAEIjgCmIDfiTIAJAfIobFdIj7AGIAcgXIARgeIgRACIgpAXIhcAfIl7AUgApaCZIgFAEIgkgSIB/hTIgbAAIFqkfICEAHInwGVIgIAGQgLAHhwAPg");
        this.shape_3.setTransform(76.5, 26.2);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["rgba(0,23,255,0.698)", "rgba(0,0,255,0.498)"], [0.451, 0.82], 0.3, -26.5, 0.3, 25.7).s().p("AovDSQCNh+Dsi/Ij3D/IHOl+QCqADDDgDIA7gLIC8gRIAVAFIAVAAQAOAtgDAAIgdAQIhMA0Qg8AxASgLQARgLCGhKIAAAFIjrCuIDqibIAJAhIo2FuIkHAGIAdgYIASgfIgSACIgqAYIhhAgImOAWgAp+ClIglgTICFhXIgcAAIF8ktICKAHIoJGpIgHAHQgMAHh1APg");
        this.shape_4.setTransform(76.6, 26.2);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["rgba(0,0,102,0.698)", "rgba(0,0,98,0.498)"], [0.451, 0.82], 0.3, -23.8, 0.3, 23.1).s().p("An3C9QB/hxDUisIjeDmIGglZQCZADCvgDIA1gKICqgOIASAEIATAAQANApgDAAIgaANIhFAwQg1AsAQgLQAPgJB5hDIAAAEIjUCdIDTiMIAIAeIn9FJIjtAHIAagWIAQgdIgQADIgmAVIhXAdIlmATgAo+CVIgigSIB4hNIgZAAIFWkQIB8AGInUF/IgHAGQgLAHhpANg");
        this.shape_5.setTransform(76.3, 26.1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }] }).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).wait(2));
        this.instance = new lib.飞牌1();
        this.instance.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 15);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ regX: 74.1, regY: 25.7, scaleX: 0.95, scaleY: 0.95, x: 74.1, y: 25.7 }, 0).wait(2));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16, -16, 184, 87);
    (lib.开牌_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.开牌3();
        this.instance.setTransform(40.1, 19.7, 1, 1, 0, 0, 0, 22.1, 10.7);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 1, 3);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 41.2, y: 20.3 }, 0).wait(1).to({ scaleX: 0.95, scaleY: 0.95, x: 40.9, y: 20.1 }, 0).wait(2));
        this.instance_1 = new lib.开牌2();
        this.instance_1.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 76, y: 26.3 }, 0).wait(1).to({ regX: 74.1, scaleX: 0.95, scaleY: 0.95, x: 71.9, y: 25.4 }, 0).wait(2));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 69, 35);
    (lib.元件4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));
        this.mc = new lib.元件3();
        this.mc.setTransform(12.2, 18.8, 0.5, 0.5, 0, 0, 0, 12.6, 18.8);
        this.mc.alpha = 0.422;
        this.timeline.addTween(cjs.Tween.get(this.mc).to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 6).to({ scaleX: 1, scaleY: 1 }, 2).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(6, 7.1, 10.9, 17.7);
    (lib.元件2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));
        this.mc = new lib.元件1();
        this.mc.setTransform(12.2, 18.8, 0.5, 0.5, 0, 0, 0, 12.6, 18.8);
        this.mc.alpha = 0.398;
        this.timeline.addTween(cjs.Tween.get(this.mc).to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 6).to({ scaleX: 1, scaleY: 1 }, 2).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(5.9, 7.1, 10.9, 17.7);
    (lib.元件5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.光_1();
        this.instance.setTransform(185.9, 107, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [185.8, 106.9, 178.8, 109.8, 168.5, 113.7, 147.6, 121.7, 130.7, 126.4, 103.2, 134, 60.1, 141.6, 60, 141.6, 40.3, 81.6, 20.5, 21.9, 20.4, 21.8, 44.5, 17.7, 56.6, 15.7, 68.6, 13.6, 68.6, 13.6, 89.4, 9.5, 122.7, -0.2, 122.6, -0.2, 130, 12.2, 137.3, 24.7, 152.1, 49.7, 182.3, 100.7, 185.4, 106] } }, 39).wait(1));
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(20.6, 21.6, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_1.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [20.8, 21.8, 44.7, 17.7, 56.7, 15.7, 68.7, 13.6, 68.7, 13.6, 89.4, 9.5, 122.7, -0.2, 122.6, -0.2, 130.5, 13.2, 138.5, 26.6, 154.4, 53.5, 170.2, 80.2, 178.1, 93.5, 186, 106.9, 186, 106.9, 178.9, 109.8, 168.6, 113.7, 147.7, 121.7, 130.7, 126.4, 103.2, 134, 60.2, 141.6, 60, 141.6, 42.5, 88.3, 23.6, 31.1, 21.2, 23.9] } }, 39).wait(1));
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(185.9, 107, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_2.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [185.8, 106.9, 178.8, 109.8, 168.5, 113.7, 147.6, 121.7, 130.7, 126.4, 103.2, 134, 60.1, 141.6, 60, 141.6, 40.3, 81.6, 20.5, 21.9, 20.4, 21.8, 44.5, 17.7, 56.6, 15.7, 68.6, 13.6, 68.6, 13.6, 89.4, 9.5, 122.7, -0.2, 122.6, -0.2, 130, 12.2, 137.3, 24.7, 152.1, 49.7, 182.3, 100.7, 185.4, 106] } }, 39).wait(1));
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(20.6, 21.6, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_3.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_3.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ guide: { path: [20.8, 21.8, 44.7, 17.7, 56.7, 15.7, 68.7, 13.6, 68.7, 13.6, 89.4, 9.5, 122.7, -0.2, 122.6, -0.2, 130.5, 13.2, 138.5, 26.6, 154.4, 53.5, 170.2, 80.2, 178.1, 93.5, 186, 106.9, 186, 106.9, 178.9, 109.8, 168.6, 113.7, 147.7, 121.7, 130.7, 126.4, 103.2, 134, 60.2, 141.6, 60, 141.6, 42.5, 88.3, 23.6, 31.1, 21.2, 23.9] } }, 39).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-238.4, -237.4, 691.3, 611.4);
    (lib.问路牌路图标集 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.mc2 = new lib.问路斜杠();
        this.mc2.setTransform(31, 4, 1, 1, 0, 0, 0, 4, 4);
        this.mc1 = new lib.问路实圈();
        this.mc1.setTransform(17.5, 3.5, 1, 1, 0, 0, 0, 3.5, 3.5);
        this.mc0 = new lib.问路圈圈();
        this.mc0.setTransform(3.5, 3.6, 1, 1, 0, 0, 0, 3.5, 3.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.mc0 }, { t: this.mc1 }, { t: this.mc2 }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.5, -0.5, 35.5, 8.5);
    (lib.主界面底图 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.牌盒左();
        this.instance.setTransform(19.8, 4.3, 0.775, 0.744);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        this.instance_1 = new lib.LOGO();
        this.instance_1.setTransform(525, 324.5, 1, 1, 0, 0, 0, 123, 27);
        this.instance_1.alpha = 0.059;
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 1), null, new cjs.Matrix2D(0.5, 0, 0, 0.5, -266.1, -29.2)).s().p("Az0ETIAAolMAnoAAAIAAIlg");
        this.shape.setTransform(525.9, 108.6);
        this.instance_2 = new lib.注区线();
        this.instance_2.setTransform(524, 218, 1, 1, 0, 0, 0, 267, 78);
        this.instance_2.alpha = 0.34;
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.shape }, { t: this.instance_1 }] }).wait(1));
        this.instance_3 = new lib.bg();
        this.instance_3.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1049.6, 680.2);
    (lib.历史记录 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.历史记录网格();
        this.instance.setTransform(467.9, 66.5, 1, 1, 0, 0, 0, 467.9, 66.5);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1033, 145);
    (lib.road_summary = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.sumTxt = new cjs.Text("38", "bold 12px 'Microsoft YaHei'", "#D0B900");
        this.sumTxt.name = "sumTxt";
        this.sumTxt.textAlign = "right";
        this.sumTxt.lineHeight = 18;
        this.sumTxt.lineWidth = 41;
        this.sumTxt.setTransform(115.5, 89.5, 1.011, 1.011);
        this.playerPairTxt = new cjs.Text("5", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.playerPairTxt.name = "playerPairTxt";
        this.playerPairTxt.textAlign = "right";
        this.playerPairTxt.lineHeight = 18;
        this.playerPairTxt.lineWidth = 41;
        this.playerPairTxt.setTransform(115.5, 71.5, 1.011, 1.011);
        this.bankerPairTxt = new cjs.Text("6", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.bankerPairTxt.name = "bankerPairTxt";
        this.bankerPairTxt.textAlign = "right";
        this.bankerPairTxt.lineHeight = 18;
        this.bankerPairTxt.lineWidth = 41;
        this.bankerPairTxt.setTransform(115.5, 53.3, 1.011, 1.011);
        this.tieTxt = new cjs.Text("8", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.tieTxt.name = "tieTxt";
        this.tieTxt.textAlign = "right";
        this.tieTxt.lineHeight = 18;
        this.tieTxt.lineWidth = 41;
        this.tieTxt.setTransform(115.5, 34.8, 1.011, 1.011);
        this.playerTxt = new cjs.Text("25", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.playerTxt.name = "playerTxt";
        this.playerTxt.textAlign = "right";
        this.playerTxt.lineHeight = 18;
        this.playerTxt.lineWidth = 41;
        this.playerTxt.setTransform(115.5, 17);
        this.bankerTxt = new cjs.Text("12", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.bankerTxt.name = "bankerTxt";
        this.bankerTxt.textAlign = "right";
        this.bankerTxt.lineHeight = 18;
        this.bankerTxt.lineWidth = 41;
        this.bankerTxt.setTransform(115.5, -0.5);
        this.playerAskBtn = new lib.Alpha0Btn();
        this.playerAskBtn.setTransform(0, 126.7, 1.538, 1);
        new cjs.ButtonHelper(this.playerAskBtn, 0, 1, 1);
        this.bankerAskBtn = new lib.Alpha0Btn();
        this.bankerAskBtn.setTransform(0, 108.4, 1.538, 1);
        new cjs.ButtonHelper(this.bankerAskBtn, 0, 1, 1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.bankerAskBtn }, { t: this.playerAskBtn }, { t: this.bankerTxt }, { t: this.playerTxt }, { t: this.tieTxt }, { t: this.bankerPairTxt }, { t: this.playerPairTxt }, { t: this.sumTxt }] }).wait(1));
        this.askIconsMc2 = new lib.问路牌路图标集();
        this.askIconsMc2.setTransform(97.8, 135.5, 1, 1, 0, 0, 0, 17.3, 3.8);
        this.askIconsMc1 = new lib.问路牌路图标集();
        this.askIconsMc1.setTransform(98.3, 117.5, 1, 1, 0, 0, 0, 17.3, 3.8);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.askIconsMc1 }, { t: this.askIconsMc2 }] }).wait(1));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DBC087").s().p("ACVA1IAAgGIgXAAIAAAGIgOAAIAAgsIAzAAIAAAsgAB+AiIAXAAIAAgMIgXAAgAACAlIASAAQAKAAAAgJIAAg6IglAAIAAgOIA1AAIAABLQAAAKgEAFQgEAEgHABIgaABIgDgPgAhpAlIAMABQAIAAAAgHIAAhAIgrAAIAAgNIA5AAIAABOQAAAIgCAEQgCAFgGACQgFABgPAAIgEgPgAipA0IAAhZIAPAAIAAA6QANgMAKgNIgSAAIAAgOIAWAAIAAgLIAPAAIAAALIAVAAIAAAOIgVAAIAAAJIADgEQAPAKAIAIIgKAKIgQgPIAAAcIgPAAIAAgfQgIAOgLAKIgIgLIAAAcgAgxAzIAAhXIAPAAIAABXgAA/AiIAEAAIAAgjIAKAAIAAAiIAGgBIAAgoIgOAAIAAglIAlAAIAAASQALgLAGgOIAPACIgFAJIAgAAIAAAMQgFAMgKAJQAJADALACIgEALQgRgDgMgFQgMAFgRADIgFgKQAMgCAKgEQgFgFgEgFIgFAFIgFgIIAAANIgJAAIAAALIAIAAIAAAMIgIAAIAAAQIAMgCIgBAOIgrAGgACJgPQAIgGAEgHIgYAAQAFAIAHAFgABSgUIALAAIAAgLIgLAAgAgYAhIAAgzIAsAAIAAAsIgeAAIAAAHgAgKAMIAQAAIAAgQIgQAAgAgjgvIANgFIAMAXIgOAFIgLgXgAicgvIAOgFIAKASIgPAFIgJgSg");
        this.shape.setTransform(21.5, 134.9);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#DBC087").s().p("ACYA1IAAgGIgYAAIAAAGIgNAAIAAgsIAyAAIAAAsgACAAiIAYAAIAAgMIgYAAgAAEAlIASAAQALAAAAgJIAAg6IglAAIAAgOIA0AAIAABLQAAAKgEAFQgDAEgHABIgaABIgEgPgAirAlQALgRAAgWIAAgjIAoAAIgEgLIARgEIAGAPIAkAAIAAANIhQAAIAAAWQAAAkgQASQgFgJgFgGgAgvAzIAAhXIAQAAIAABXgABCAiIADAAIAAgjIALAAIAAAiIAGgBIAAgoIgPAAIAAglIAmAAIAAASQAKgLAGgOIAQACIgFAJIAgAAIAAAMQgGAMgKAJQAJADALACIgEALQgQgDgMgFQgNAFgQADIgGgKQANgCAJgEQgFgFgDgFIgFAFIgFgIIAAANIgKAAIAAALIAJAAIAAAMIgJAAIAAAQIAMgCIAAAOIgsAGgACMgPQAHgGAEgHIgXAAQAEAIAIAFgABVgUIAKAAIAAgLIgKAAgAiVAvIAAgNIAjAAIAAgZIgcAAIAAgMIAcAAIAAgRIAPAAIAAARIAdAAIAAAMIgdAAIAAAZIAiAAIAAANgAgVAhIAAgzIAsAAIAAAsIgeAAIAAAHgAgHAMIAQAAIAAgQIgQAAgAgggvIANgFIAMAXIgPAFIgKgXg");
        this.shape_1.setTransform(21.8, 117.3);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#DBC087").s().p("AB1AqIgFAFIgNgHQgMAIgQAEIgGgOQALgBAIgDIgQgHIAHgKIgJAAIAAgLIAPAAIACgHIAHABIAAgLQgJAJgMAEIgEgKQAKgFAIgGIgQAAIAAgMIAJAAIgIgMIAKgGIAJANIgKAFIANAAIAAgVIANAAIAAAVIALAAIgJgFQAGgGADgHIALAGIgJAMIAGAAIAAAMIgTAAIAAAHIAEgFIANAIQAIgRAHgaIAOABIgEARIAbAAIAAAMIgFAAQgCAbgKATQAHAHAKAGQgEAEgFALQgJgHgHgJQgKALgLAGIgJgLgABfAGIAZAAIAAAKQgFAIgFAHIAKAEIgCADQAMgFAIgLQgFgKgDgMIgDAFIgHgHIgCADIgPgHIAAAGIgFAAIgDAGgABWAWIALAEQAFgEADgFIgQAAgACLgSQACARAGAKQAGgLABgUIgOAAIgBAEgAAKAmIAOABQAEAAACgCQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAIAAgUIABgMIg8AAQAAAfgNATIgMgOQAGgJACgLQACgLAAgVIAAgiIBWAAIAAAhIhGAAIAAAHIBKAAIAAApQAAAIgCADQgDAEgEACQgDACgYAAIgCgPgAgagaIA3AAIAAgIIg3AAgAiCAzQgQgBAAgPIAAgXIAPAAIAAATQAAAGAGAAIAQAAIAGgBQADgBAAgEIACgJIAOAHQgEAQgFADQgGADgGAAgAirAnIAKgaIANAFIgKAbgAhXATIANgGIAKAaIgNAGQgFgOgFgMgAgVAoIAAgfIArAAIAAAbIgcAAIAAAEgAgGAaIAOAAIAAgHIgOAAgAiAAMIAHgFIgkAAIAAgpIASAAIgIgNIAOgFIAKAPIgHADIARAAIAMgSIAQADIgKAPIASAAIAAApIgmAAIANAMIgLAKIgPgRgAiNgFIAvAAIAAgRIgvAAg");
        this.shape_2.setTransform(21.8, 99.4);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0043EE").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
        this.shape_3.setTransform(40.2, 81.4, 0.976, 0.976);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgrAmIAMAAQAHAAAAgGIAAhBIgrAAIAAgNIA6AAIAABOQAAAIgDAEQgCAFgFACQgFACgQgBIgDgOgAhrA0IAAhZIAOAAIAAA6QAOgMAJgNIgRAAIAAgOIAVAAIAAgLIAPAAIAAALIAWAAIAAAOIgWAAIAAAJIAEgEQAPAKAIAIIgLAKIgQgPIAAAcIgPAAIAAgeQgIANgKAKIgJgLIAAAcgAA7AkIARAAQAHAAAAgGIAAgwIgfAAIAAgOIAfAAIAAgTIAPAAIAAATIAKAAIAAAOIgKAAIAAA1QAAAIgDAEQgEAEgGAAIgWABIgEgQgAABAkQANgLAIgOIgTgcIAMgIIAOAXQAEgNACgOIggAAIAAgOIAvAAIAAAOQgEAXgIAQIAQAXIgNAJIgLgRQgIAOgNAMIgIgPgAAwgEIALgIIAUAYIgNAJIgSgZgAhfguIAPgGIAKASIgPAFIgKgRg");
        this.shape_4.setTransform(15.4, 81.3);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#DF0303").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
        this.shape_5.setTransform(40.7, 62.7, 0.976, 0.976);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AhuAlQALgQAAgWIAAgkIApAAIgFgKIASgFIAGAPIAjAAIAAANIhQAAIAAAWQAAAkgPASQgFgJgGgGgAA+AkIAQAAQAIAAAAgGIAAgwIgfAAIAAgPIAfAAIAAgSIAPAAIAAASIAKAAIAAAPIgKAAIAAA1QAAAIgEAEQgDAEgGABIgXAAIgDgQgAAEAkQAMgLAIgOIgTgcIAMgIIAOAXQAEgMACgOIggAAIAAgPIAvAAIAAAPQgDAWgIAQIAQAXIgOAJIgKgRQgJAPgMALIgIgPgAhXAwIAAgOIAjAAIAAgZIgcAAIAAgLIAcAAIAAgSIAPAAIAAASIAdAAIAAALIgdAAIAAAZIAiAAIAAAOgAAzgEIALgIIATAYIgNAJIgRgZg");
        this.shape_6.setTransform(15.6, 63.2);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#02A611").s().p("AgHAzIAAhlIAPAAIAABlg");
        this.shape_7.setTransform(41.4, 45.4, 1.143, 1.107, 30.5);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgeAzIAAgnQgGAMgIALIgFgRQALgMAGgNIgQAAIAAgPIASAAIAAgLIgPABIgCgOQAZgBAVgDIABANIgPADIAAAMIAPAAIAAAPIgPAAIAAAJIAEgCIANAMIgHAKIgKgKIAAAngAADAvIAAhaIAvAAIAABZIgOAAIAAgJIgTAAIAAAKgAARAWIATAAIAAgzIgTAAg");
        this.shape_8.setTransform(9.6, 46.1);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AAOAmIAMAAQAIAAAAgGIAAhBIgpAAIAAgNIA4AAIAABPQgBAHgCAEQgCAFgFACQgGACgPgBIgEgOgAgwA0IAAhZIAPAAIAAA6QANgMAKgNIgSAAIAAgOIAWAAIAAgLIANAAIAAALIAWAAIAAAOIgWAAIAAAJIAEgEQAPAKAHAIIgKAKIgQgPIAAAcIgNAAIAAgeQgIANgKAKIgJgLIAAAcgAgjgvIAOgFIAKASIgPAFIgJgSg");
        this.shape_9.setTransform(9.4, 27.3);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("Ag0AmQALgSAAgWIAAgjIApAAIgFgKIAQgFIAGAPIAjAAIAAAOIhOAAIAAAVQAAAkgPASQgFgIgGgGgAgdAwIAAgOIAhAAIAAgZIgaAAIAAgLIAaAAIAAgSIAPAAIAAASIAdAAIAAALIgdAAIAAAZIAiAAIAAAOg");
        this.shape_10.setTransform(9.8, 9.3);
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 12), null, new cjs.Matrix2D(0.757, 0, 0, 0.694, -59.8, -11.3)).s().p("ApRBVIAAinISgAAIAAgCIAEAAIAACpg");
        this.shape_11.setTransform(60, 135.1);
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAinQABAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgCIScAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIADAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_12.setTransform(60, 135.1);
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 12), null, new cjs.Matrix2D(0.76, 0, 0, 0.696, -59.7, -11)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_13.setTransform(60, 117.5);
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_14.setTransform(60, 117.5);
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 13), null, new cjs.Matrix2D(0.789, 0, 0, 0.748, -96.3, -11.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_15.setTransform(60, 99.5);
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_16.setTransform(60, 99.5);
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 24), null, new cjs.Matrix2D(0.759, 0, 0, 0.719, -59.6, -11.9)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_17.setTransform(60, 81.5);
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_18.setTransform(60, 81.5);
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 22), null, new cjs.Matrix2D(0.767, 0, 0, 0.727, -60.2, -12.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_19.setTransform(60, 63.5);
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_20.setTransform(60, 63.5);
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 23), null, new cjs.Matrix2D(0.767, 0, 0, 0.727, -60.2, -12.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_21.setTransform(60, 45.5);
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_22.setTransform(60, 45.5);
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 24), null, new cjs.Matrix2D(0.768, 0, 0, 0.728, -60.2, -12.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_23.setTransform(60, 27.5);
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_24.setTransform(60, 27.5);
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 22), null, new cjs.Matrix2D(0.767, 0, 0, 0.727, -60.2, -12.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_25.setTransform(60, 9.5);
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_26.setTransform(60, 9.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -0.5, 120, 144.6);
    (lib.庄闲和提示 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));
        this.equableNumTxt = new cjs.Text("2", "26px 'Arial'", "#009900");
        this.equableNumTxt.name = "equableNumTxt";
        this.equableNumTxt.textAlign = "center";
        this.equableNumTxt.lineHeight = 31;
        this.equableNumTxt.lineWidth = 44;
        this.equableNumTxt.setTransform(28, 7.1);
        this.timeline.addTween(cjs.Tween.get(this.equableNumTxt).wait(2).to({ x: 15.5, y: 3.1, text: "", color: NaN, lineWidth: 27 }, 0).wait(1));
        this.instance = new lib.Circle_Red();
        this.instance.setTransform(33.3, 28.7, 4.446, 4.446, 0, 0, 0, 5, 5);
        this.instance_1 = new lib.Circle_Blue();
        this.instance_1.setTransform(33.2, 28.6, 4.444, 4.444, 0, 0, 0, 5, 5);
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#02A611").s().p("AgHAzIAAhlIAPAAIAABlg");
        this.shape.setTransform(38.4, 29.1, 4.459, 4.153, 0, 32.5, 28.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.shape }] }, 1).wait(1));
        this.instance_2 = new lib.框框();
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 62, 69);
    (lib.HistoryMc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.tipEquableMc = new lib.庄闲和提示();
        this.tipEquableMc.setTransform(347, 85.9, 0.5, 0.5, 0, 0, 0, 31, 34.5);
        this.timeline.addTween(cjs.Tween.get(this.tipEquableMc).wait(1));
        this.instance = new lib.叶子4();
        this.instance.setTransform(989, 0, 0.686, 0.687);
        this.instance_1 = new lib.叶子1();
        this.instance_1.setTransform(0, 1.3, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));
        this.summaryPanelMc = new lib.road_summary();
        this.summaryPanelMc.setTransform(981.1, 131.9, 1, 1, 0, 0, 0, 60.9, 66);
        this.timeline.addTween(cjs.Tween.get(this.summaryPanelMc).wait(1));
        this.historyMc = new lib.spaceHolder();
        this.historyMc.setTransform(8.5, 68.5);
        this.xqlMc = new lib.spaceHolder();
        this.xqlMc.setTransform(632, 174.7);
        this.xiaoluMc = new lib.spaceHolder();
        this.xiaoluMc.setTransform(344.3, 175.2);
        this.dylMc = new lib.spaceHolder();
        this.dylMc.setTransform(344.3, 138.9);
        this.daluMc = new lib.spaceHolder();
        this.daluMc.setTransform(344, 67.1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.daluMc }, { t: this.dylMc }, { t: this.xiaoluMc }, { t: this.xqlMc }, { t: this.historyMc }] }).wait(1));
        this.instance_2 = new lib._3网();
        this.instance_2.setTransform(858.9, 132.9, 1, 1, 0, 0, 0, 514.9, 66.5);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
        this.instance_3 = new lib.历史记录();
        this.instance_3.setTransform(521.1, 133, 1, 1, 0, 0, 0, 514.1, 66.5);
        this.instance_4 = new lib.底1_1();
        this.instance_4.setTransform(527, 140.9, 1, 1, 0, 0, 0, 521, 75.2);
        this.instance_4.shadow = new cjs.Shadow("rgba(31,16,5,1)", 0, 2, 4);
        this.instance_5 = new lib.底框();
        this.instance_5.setTransform(525, 144, 1, 1.002, 0, 0, 0, 525, 82.3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }] }).wait(1));
        this.instance_6 = new lib.叶子3();
        this.instance_6.setTransform(852, 18.9, 0.686, 0.687);
        this.instance_7 = new lib.叶子2();
        this.instance_7.setTransform(246.3, 28.2, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_7 }, { t: this.instance_6 }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1052, 223.7);
    (lib.chipsBar = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.mc3 = new lib.红黄();
        this.mc3.setTransform(221.3, -43.7, 1, 1, 0, 0, 0, -0.1, 1.1);
        this.mc4 = new lib.红黄();
        this.mc4.setTransform(267.5, -74.6, 1, 1, 0, 0, 0, -0.1, 1.1);
        this.mc2 = new lib.红黄();
        this.mc2.setTransform(172.7, -17.3, 1, 1, 0, 0, 0, -0.1, 1.1);
        this.mc1 = new lib.红黄();
        this.mc1.setTransform(120.8, 4.5, 1, 1, 0, 0, 0, -0.1, 1.1);
        this.mc0 = new lib.红黄();
        this.mc0.setTransform(69.3, 22.7, 1, 1, 0, 0, 0, -0.1, 1.1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.mc0 }, { t: this.mc1 }, { t: this.mc2 }, { t: this.mc4 }, { t: this.mc3 }] }).wait(1));
        this.rightBtnMask = new lib.右翻不可按();
        this.rightBtnMask.setTransform(309.1, -111.5, 1, 1, 0, 0, 0, 22.5, 22.5);
        this.leftBtnMask = new lib.左翻不可按();
        this.leftBtnMask.setTransform(15.4, 34.6, 1, 1, 0, 0, 0, 22.4, 22.5);
        this.rightBtn = new lib.右翻按钮();
        this.rightBtn.setTransform(309.1, -111.5, 1, 1, 0, 0, 0, 22.5, 22.5);
        new cjs.ButtonHelper(this.rightBtn, 0, 1, 2, false, new lib.右翻按钮(), 3);
        this.z = new lib.左翻按钮();
        this.z.setTransform(15.6, 35.7, 1, 1, 0, 0, 0, 22.5, 22.5);
        new cjs.ButtonHelper(this.z, 0, 1, 2, false, new lib.左翻按钮(), 3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.z }, { t: this.rightBtn }, { t: this.leftBtnMask }, { t: this.rightBtnMask }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7, -134, 338.6, 192.2);
    (lib.眯牌2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.眯牌3();
        this.instance.setTransform(24.8, 10.7, 1, 1, 0, 0, 0, 13.8, 6.7);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 1, 4);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ scaleX: 0.9, scaleY: 0.9 }, 0).wait(2));
        this.instance_1 = new lib.汇总框();
        this.instance_1.setTransform(28.3, 11.5, 1, 1, 0, 0, 0, 28.3, 11.5);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.749)", 0, 1, 4);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 28.5 }, 0).wait(1).to({ regX: 28.2, scaleX: 0.95, scaleY: 0.95, x: 28.1, y: 11.4 }, 0).wait(2));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6, -5, 64, 36);
    (lib.MiPokerMc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#562C03").s().p("AhCAcQgKgLABgRQAAgPAKgLQAKgMARAAQAQAAALALQAKALgBAQQAAARgKALQgKALgRAAQgQAAgLgLgAg1gRQgGAHABAKQgBALAGAHQAFAHAJAAQAKAAAFgHQAGgHgBgLQAAgKgEgHQgGgHgJAAQgKAAgFAHgAA8AlIgggvIgEgGIAAAAIAAAMIAAApIgPAAIAAhJIASAAIAfAtIADAGIAAgKIAAgpIAQAAIAABJg");
        this.shape.setTransform(55.8, 10.8);
        this.mc1 = new lib.眯牌2();
        this.mc1.setTransform(26.1, 11.4, 0.9, 0.909, 0, 0, 0, 29, 12.5);
        new cjs.ButtonHelper(this.mc1, 0, 1, 2, false, new lib.眯牌2(), 3);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#949494").s().p("AhSAcQgKgLABgRQAAgPAKgLQAKgMARAAQAQAAALALQAKALgBAQQAAARgKALQgKALgRAAQgQAAgLgLgAhFgRQgGAHABAKQgBALAGAHQAFAHAJAAQAKAAAFgHQAGgHgBgLQAAgKgEgHQgGgHgJAAQgKAAgFAHgAAxAlIAAhJIAsAAIAAANIgbAAIAAATIAYAAIAAALIgYAAIAAAegAgFAlIAAhJIApAAIAAANIgbAAIAAATIAZAAIAAALIgZAAIAAAeg");
        this.shape_1.setTransform(20, 10.3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.mc1, p: { x: 26.1 } }, { t: this.shape }] }).to({ state: [{ t: this.mc1, p: { x: 58.5 } }, { t: this.shape_1 }] }, 1).wait(1));
        this.instance = new lib.玩家信息3();
        this.instance.setTransform(40.8, 10.5, 0.85, 1, 0, 0, 0, 48, 10.5);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        this.instance_1 = new lib.玩家信息2();
        this.instance_1.setTransform(38.4, 10.5, 0.8, 1, 0, 0, 0, 48, 10.5);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.1, -5.5, 97.1, 38.6);
    (lib.限注框 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.限注框1();
        this.instance.setTransform(101.5, 67, 1, 1, 0, 0, 0, 101.5, 67);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 3, 1, 12);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E1CE9F").s().p("Ag1AnIASABQAIAAAAgIIAAg0IgiAAIAAgQIAiAAIAAgUIARAAIAAAUIAKAAIAAAQIgKAAIAAA6QAAAIgEAFQgEAEgHABIgZABQgBgJgCgJgAAcA4IgFgSIAUABQAKAAAAgKIAAgTIgzAAIAAgOIAzAAIAAgOIAdgQIhIAAIAAgPIBjAAIAAAPIgmAXIAAAHIAuAAIAAAOIguAAIAAAWQAAAMgGAGQgFAGgLAAgAh0AnQANgLAJgQIgVgfIANgIIAPAYQAFgNACgPIgjAAIAAgQIA0AAIAAAQQgEAYgJASIARAaIgOAKIgMgTQgJAPgNAMIgJgQgAhCgFIANgIIAVAaIgOAJQgJgPgLgMg");
        this.shape.setTransform(27.8, 104.5);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E1CE9F").s().p("AghA4IAAgrQgGANgJAMIgGgTQAMgNAHgOIgSAAIAAgPIAUAAIAAgOIgQACIgCgOIAxgGIACAPIgRACIAAAPIARAAIAAAPIgRAAIAAALIAEgDIAPAMIgIAMIgLgLIAAArgAADAzIAAhjIA0AAIAABiIgQAAIAAgKIgUAAIAAALgAATAYIAUAAIAAg4IgUAAg");
        this.shape_1.setTransform(21.5, 81.6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E1CE9F").s().p("ABrApIANAAQAIABAAgIIAAhGIgvAAIAAgOIA/AAIAABVQAAAJgDAFQgCAFgGACQgGACgRAAQgBgKgCgHgAAlA5IAAhiIAQAAIAABAQAOgMAKgPIgTAAIAAgPIAYAAIAAgMIAQAAIAAAMIAYAAIAAAPIgYAAIAAAJIAEgEQAQALAJAJIgLALIgSgRIAAAfIgQAAIAAghQgJAOgLALIgJgMIAAAfgAgbA5IAqhoIARAAIgqBogAiPApQAMgTAAgYIAAgmIAsAAIgFgMIATgEIAHAQIAmAAIAAAOIhXAAIAAAXQAAAogQAUQgGgKgGgGgAh3A0IAAgPIAmAAIAAgaIgeAAIAAgOIAeAAIAAgTIARAAIAAATIAfAAIAAAOIgfAAIAAAaIAlAAIAAAPgAAzgzIAPgFIALASIgQAHIgKgUg");
        this.shape_2.setTransform(30.4, 59.8);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#E1CE9F").s().p("AAoAzQAUgGAPgIQgKgKgJgMIAPgJQAIALALAJQALgJAHgLIg3AAIAAgPIBMAAIAAAOQgJASgOANQAOAIARAFIgNASQgTgHgPgKQgQAKgWAIIgMgRgAjiBEIAAgJIgvAEIgDgQIALAAIAAgvIgMAAIAAgLICIAAIAAALIhFAAIAAArIAIgBIgBAHIAOgGQgIgIgGgJIAIgGIgLAAIAAgNIA7AAIAAANQgFANgJAKQAJAEALACIgIAQQgOgDgMgIQgLAIgNAFIgGgLIgFABIAAALgAj5AuIAXgCIAAgIIgXAAgAivAiQAGgGAFgIIgZAAQAGAJAIAFgAj5AaIAXAAIAAgIIgXAAgAj5AIIAXAAIAAgIIgXAAgAADAwIAIABQAEAAACgCQABgBAAgEIAAgZIgPAEIgCgUIARgBIAAgYIgPAAIAAgSIAPAAIAAgXIASAAIAAAXIANAAIAAASIgNAAIAAAVIAMgDIAAAQIgMADIAAAkQAAAHgEAFQgDAFgWABIgEgTgAgzAzIAQABQAJAAAAgJIAAgeIhVAAIAAA2IgSAAIAAhDIB6AAIAAAsQAAAKgEAGQgEAEgHABQgGACgUAAIgDgQgACPA9QAIgVAIggQAJAEAJADQgHAegIAWIgTgGgACxA9IAAgSIAqAAIAAgeIgfAAIAAgQIAfAAIAAgXIgjAAIAAgTIAmAAIgIgQIATgFIAJAVIAfAAIAAATIgiAAIAAAXIAeAAIAAAQIgeAAIAAAeIAnAAIAAASgAhjA2IAAgkIA9AAIAAAgIgtAAIAAAEgAhTAmIAdAAIAAgIIgdAAgACNgPIALgNQAQALALAKIgMAMIgagUgAh0gFIAAgfIBfAAIAAAfgAhigRIA7AAIAAgHIg7AAgAAvgWQAJgFADgIQADgGAAgUIA5AAIAAAWQAAAFAEAAQADABALgBIgEARIgRAAQgHAAgEgDQgDgEAAgHIAAgNIgWAAQAAAVgSANIgPgMgAkEgRIAAgsIBnAAIAAAsgAjygcIBCAAIAAgHIhCAAgAjygsIBCAAIAAgGIhCAAgACSgyIALgMQALAHANAMIgMAOIgXgVgAiIgpIAAgOIA5AAIgEgIIAWgEIAFAMIA3AAIAAAOg");
        this.shape_3.setTransform(149.1, 33.4);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#E1CE9F").s().p("AAoAyQAUgGAPgHQgKgLgJgMIAPgJQAIAMALAJQALgKAHgLIg3AAIAAgPIBMAAIAAAOQgJATgOANQAOAIARAEIgNASQgTgHgPgKQgQALgWAHIgMgRgAhHAyQgLAHgFAEIgKgPQAGgGAAgLIAAhTQAfgCAxgGIAEARIgcADIABAbIAfAAIAAAPIgeAAQACAZAEAKQADAIADABQABAAAAgBQAAAAABAAQAAgBABAAQAAgBAAgBIADgVIAOAHQgCAYgEAHQgEAIgJAAQgbAAgDhBIgXAAIAAAgIAVgMIACASIgGAEIALAQIgQAJQgFgKgFgHgAhJgnIAAAYIAWAAIgBgagAjiBDIAAgJIgvAFIgDgQIALAAIAAgvIgMAAIAAgMICIAAIAAAMIhFAAIAAAqIAIgBIgBAHIAOgFQgIgIgGgKIAIgFIgLAAIAAgOIA7AAIAAAOQgFAMgJAKQAJAEALACIgIARQgOgDgMgIQgLAHgNAFIgGgKIgFAAIAAALgAj5AuIAXgCIAAgIIgXAAgAivAiQAGgGAFgIIgZAAQAGAIAIAGgAj5AZIAXAAIAAgHIgXAAgAj5AHIAXAAIAAgHIgXAAgAADAvIAIABIAGgBQABgBAAgFIAAgYIgPADIgCgTIARgBIAAgYIgPAAIAAgSIAPAAIAAgYIASAAIAAAYIANAAIAAASIgNAAIAAAUIAMgCIAAAQIgMACIAAAkQAAAIgEAFQgDAFgWAAIgEgTgACPA8QAIgVAIgfQAJAEAJACQgHAegIAWIgTgGgAh6BBIAAhAIgLAQIgEgXQARgaAKgiIASAGQgFAQgHAOIAABfgACxA8IAAgSIAqAAIAAgeIgfAAIAAgQIAfAAIAAgXIgjAAIAAgSIAmAAIgIgQIATgGIAJAWIAfAAIAAASIgiAAIAAAXIAeAAIAAAQIgeAAIAAAeIAnAAIAAASgACNgPIALgOQAQALALALIgMALIgagTgAAvgXQAJgFADgHQADgHAAgTIA5AAIAAAVQAAAFAEABQADAAALAAIgEARIgRAAQgHAAgEgEQgDgDAAgIIAAgMIgWAAQAAAVgSAMIgPgMgAkEgSIAAgrIBnAAIAAArgAjygdIBCAAIAAgGIhCAAgAjygsIBCAAIAAgGIhCAAgACSgyIALgMQALAHANAMIgMANIgXgUg");
        this.shape_4.setTransform(82.9, 33.5);
        this.maxTxt3 = new cjs.Text("9898989", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.maxTxt3.name = "maxTxt3";
        this.maxTxt3.textAlign = "center";
        this.maxTxt3.lineHeight = 15;
        this.maxTxt3.lineWidth = 47;
        this.maxTxt3.setTransform(147.6, 96);
        this.maxTxt2 = new cjs.Text("898989", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.maxTxt2.name = "maxTxt2";
        this.maxTxt2.textAlign = "center";
        this.maxTxt2.lineHeight = 15;
        this.maxTxt2.lineWidth = 47;
        this.maxTxt2.setTransform(147.6, 73);
        this.maxTxt1 = new cjs.Text("99898", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.maxTxt1.name = "maxTxt1";
        this.maxTxt1.textAlign = "center";
        this.maxTxt1.lineHeight = 15;
        this.maxTxt1.lineWidth = 47;
        this.maxTxt1.setTransform(147.6, 51);
        this.minTxt3 = new cjs.Text("9898", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.minTxt3.name = "minTxt3";
        this.minTxt3.textAlign = "center";
        this.minTxt3.lineHeight = 15;
        this.minTxt3.lineWidth = 47;
        this.minTxt3.setTransform(79.6, 96);
        this.minTxt2 = new cjs.Text("98989", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.minTxt2.name = "minTxt2";
        this.minTxt2.textAlign = "center";
        this.minTxt2.lineHeight = 15;
        this.minTxt2.lineWidth = 47;
        this.minTxt2.setTransform(79.6, 73);
        this.instance_1 = new lib.限注1();
        this.instance_1.setTransform(150.9, 104, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_1, 0, 1, 1);
        this.instance_2 = new lib.限注1();
        this.instance_2.setTransform(82.9, 104, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_2, 0, 1, 1);
        this.instance_3 = new lib.限注1();
        this.instance_3.setTransform(150.9, 82, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_3, 0, 1, 1);
        this.instance_4 = new lib.限注1();
        this.instance_4.setTransform(82.9, 82, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_4, 0, 1, 1);
        this.instance_5 = new lib.限注1();
        this.instance_5.setTransform(150.9, 60, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_5, 0, 1, 1);
        this.minTxt1 = new cjs.Text("44889", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.minTxt1.name = "minTxt1";
        this.minTxt1.textAlign = "center";
        this.minTxt1.lineHeight = 15;
        this.minTxt1.lineWidth = 47;
        this.minTxt1.setTransform(79.6, 51);
        this.instance_6 = new lib.限注1();
        this.instance_6.setTransform(82.9, 60, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_6, 0, 1, 1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_6 }, { t: this.minTxt1 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.minTxt2 }, { t: this.minTxt3 }, { t: this.maxTxt1 }, { t: this.maxTxt2 }, { t: this.maxTxt3 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
        this.instance_7 = new lib.限注框2();
        this.instance_7.setTransform(98, 69.5, 1, 1, 0, 0, 0, 89, 50.5);
        this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 3, 15);
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11, -12, 233, 163);
    (lib.亮牌 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.亮牌3();
        this.instance.setTransform(39, 19.7, 1, 1, 0, 0, 0, 22.1, 10.8);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 1, 3);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 39.2, y: 19.9 }, 0).wait(1).to({ scaleX: 0.95, scaleY: 0.95, x: 38.8, y: 19.6 }, 0).wait(2));
        this.instance_1 = new lib.开牌2();
        this.instance_1.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 76, y: 26.3 }, 0).wait(1).to({ regX: 74.1, scaleX: 0.95, scaleY: 0.95, x: 71.9, y: 25.4 }, 0).wait(2));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 69, 35);
    (lib.闲对win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AK4FtIgOAAIgDAAIgDAAQi8AAi1gHQoEgUnUhLIgFgBIgXgFIDSptIAaAEIACAAQFyA4GUASQC1AIC8ABIADAAIADAAIAOAAIAKAAIAAKCgAnllUQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBACIi6IsIAAACIAAAEIACAEIABABIADACIABAAIABAAQHOBJH/AUQC1AHC8AAIADAAIADgCIABgBQADgDAAgDIAAo+QAAgEgDgDIgBgBIAAgCIgGAAIAAAAQixAAipgHIgXgBQmYgTl1g5IgCAAIgBAAQgDgBgCACIgBAAIgCABgACRDQIACgTIAYABIAJhIIgZACIADgRIAygHIgLBgIAYAAIgCATgAAuDKIADgTIAZABIALhIIgZAEIACgSIAygHIgNBfIAZABIgDAUgAi8C9IAFgSIAZgBIAQhHIgZAEIADgTIAzgGIgVBeIAZACIgFATgAgeC8QgHgBgDgCQgDgGACgFQAAgFAFgEQAEgEAHACQAGAAAEAEQADADgBAFQgBAGgFAEQgEADgEAAIgDAAgAgUCAQgGAAgCgDQgEgEABgGQABgFAGgCQAEgFAGABQAGgBADAFQAEAEAAAGQgCAFgFADQgFACgFAAIgCAAgADUAgQgBgRgEgSIApADQATAAACgPIAJhsIhKgDIACgdIBLADIACglIAlACIgDAlIAYABIgCAdIgZgBIgIB4QgBAQgJAKQgMAIgOABIgGAAIg0gCgAgkAVQAAgTgDgOQARADANAAQAPABADgOIAaiPIhigEIAGgbICDAGIgdCrQgCASgIAIQgIAJgNAFQgHACgLAAIgggCgAA/gKQAigWAYgfIgjhCIAegOIAcAvQANgZAIgcIhLgDIAEgdIBuAEIgDAdQgPAvgXAlIAgA3IgjAQIgVglQgbAdghAYQgIgQgIgRgAjOAMIAxjBIAkABIggB/QAngYAeghIgrgBIAHgcIA0ADIAFgWIAjABIgGAWIAzACIgFAcIgzgCIgEAXIALgIQAfAYAOASIgbAVIghgjIgNA/IgkgCIAOhFQgaAcgfAXQgIgPgHgKIgPA8gAC/hiIAcgOQAXAdATAeIgiAQQgRgfgTgegAh6jHIAigIIARAlIglAIIgOglg");
        mask.setTransform(70.6, 36.6);
        this.instance = new lib.光();
        this.instance.setTransform(-5.7, 66.7, 0.055, 0.07, -1.8, 0, 0, 97.2, 89.8);
        this.instance.alpha = 0.73;
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);
        this.instance.mask = mask;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regX: 97.3, regY: 89.1, scaleX: 1.32, scaleY: 1.14, x: 59.4, y: 56.3, alpha: 1 }, 38, cjs.Ease.get(0.5)).wait(1));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("AK4FtIgOAAIgDAAIgDAAQi8AAi1gHQoEgUnUhLIgFgBIgXgFIDSptIAaAEIACAAQFyA4GUASQC1AIC8ABIADAAIADAAIAOAAIAKAAIAAKCgAnllUQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBACIi6IsIAAACIAAAEIACAEIABABIADACIABAAIABAAQHOBJH/AUQC1AHC8AAIADAAIADgCIABgBQADgDAAgDIAAo+QAAgEgDgDIgBgBIAAgCIgGAAIAAAAQixAAipgHIgXgBQmYgTl1g5IgCAAIgBAAQgDgBgCACIgBAAIgCABgACRDQIACgTIAYABIAJhIIgZACIADgRIAygHIgLBgIAYAAIgCATgAAuDKIADgTIAZABIALhIIgZAEIACgSIAygHIgNBfIAZABIgDAUgAi8C9IAFgSIAZgBIAQhHIgZAEIADgTIAzgGIgVBeIAZACIgFATgAgeC8QgHgBgDgCQgDgGACgFQAAgFAFgEQAEgEAHACQAGAAAEAEQADADgBAFQgBAGgFAEQgEADgEAAIgDAAgAgUCAQgGAAgCgDQgEgEABgGQABgFAGgCQAEgFAGABQAGgBADAFQAEAEAAAGQgCAFgFADQgFACgFAAIgCAAgADUAgQgBgRgEgSIApADQATAAACgPIAJhsIhKgDIACgdIBLADIACglIAlACIgDAlIAYABIgCAdIgZgBIgIB4QgBAQgJAKQgMAIgOABIgGAAIg0gCgAgkAVQAAgTgDgOQARADANAAQAPABADgOIAaiPIhigEIAGgbICDAGIgdCrQgCASgIAIQgIAJgNAFQgHACgLAAIgggCgAA/gKQAigWAYgfIgjhCIAegOIAcAvQANgZAIgcIhLgDIAEgdIBuAEIgDAdQgPAvgXAlIAgA3IgjAQIgVglQgbAdghAYQgIgQgIgRgAjOAMIAxjBIAkABIggB/QAngYAeghIgrgBIAHgcIA0ADIAFgWIAjABIgGAWIAzACIgFAcIgzgCIgEAXIALgIQAfAYAOASIgbAVIghgjIgNA/IgkgCIAOhFQgaAcgfAXQgIgPgHgKIgPA8gAC/hiIAcgOQAXAdATAeIgiAQQgRgfgTgegAh6jHIAigIIARAlIglAIIgOglg");
        this.shape.setTransform(70.6, 36.6);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 141.3, 73.2);
    (lib.闲对hover = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.光_1();
        this.instance.setTransform(139.2, 90.7, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [139.1, 90.6, 134.1, 90.9, 123.1, 90.9, 100.5, 90.8, 69.7, 88.9, 38.5, 87, 16.8, 83.6, 5.9, 82, 1.2, 80.6, 11.2, 50.4, 21.2, 20.1, 21.2, 20.4, 25, 21.1, 28.8, 21.8, 36.5, 22.8, 55.8, 25.4, 79.7, 26.8, 117.2, 29, 140, 28.8, 139.7, 59.2, 139.5, 89.5] } }, 39).wait(1));
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(21.6, 20.3, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_1.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [21.8, 20.4, 24.2, 21.1, 36.5, 22.8, 55.8, 25.4, 79.7, 26.8, 117.2, 29, 140, 28.8, 139.7, 59.7, 139.5, 90.6, 134.4, 90.9, 123.1, 90.9, 100.5, 90.8, 69.7, 88.9, 38.5, 87, 16.8, 83.6, 5.9, 82, 1.2, 80.6, 10.8, 51.6, 20.4, 22.5] } }, 39).wait(1));
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(139.2, 90.7, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_2.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [139.1, 90.6, 134.1, 90.9, 123.1, 90.9, 100.5, 90.8, 69.7, 88.9, 38.5, 87, 16.8, 83.6, 5.9, 82, 1.2, 80.6, 11.2, 50.4, 21.2, 20.1, 21.2, 20.4, 25, 21.1, 28.8, 21.8, 36.5, 22.8, 55.8, 25.4, 79.7, 26.8, 117.2, 29, 140, 28.8, 139.7, 59.2, 139.5, 89.5] } }, 39).wait(1));
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(21.6, 20.3, 0.03, 0.03, 0, 0, 0, 20, 21.7);
        this.instance_3.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_3.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ regX: 21.5, regY: 21.5, scaleX: 2, scaleY: 2, guide: { path: [21.8, 20.4, 24.2, 21.1, 36.5, 22.8, 55.8, 25.4, 79.7, 26.8, 117.2, 29, 140, 28.8, 139.7, 59.7, 139.5, 90.6, 134.4, 90.9, 123.1, 90.9, 100.5, 90.8, 69.7, 88.9, 38.5, 87, 16.8, 83.6, 5.9, 82, 1.2, 80.6, 10.8, 51.6, 20.4, 22.5] } }, 39).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-195, -196.4, 600.2, 553.1);
    (lib.闲win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AGdLTIgEAAQqXhuoxjeIgggNIFNo0IAAAAIE9odIAiALQB8AnB/AhQFbBaGAAxIAHABIAWACIgKAhIgCADIgBACIjBJHIgBAAIgCABIgBAAIi8I4IAAACIgMAmgAi6qzQgEAAgCADIgBADIpjQOIgBABIgBAFQAAACACACQACADADABQItDbKVBtIABAAIADAAIAEgBQADgCABgEIGByBIABgBIgBgFIgBgCIgCgCIgDgCIgCAAQl6gylWhXQiIgkiEgqIgCAAIgEABgAAsEwIAMgbIAlALIAwhnIgqgDIANgbIBRAIIg/CHIAlALIgMAcgAhSECQgIgFgCgGQgFgHADgHQAEgIAJgCQAJgFALAEQAHACAEAHQADAGgDAIQgEAIgJADIgNACIgGAAgAkuDHIAPgaIAkAKIA1hiIgpgDIANgaIBPAHIhECEIAjAKIgNAbgAgnCuQgKgDgEgHQgDgHAFgGQACgIAJgDQAJgDAKACQAIADAEAIQAEAFgEAHQgEAIgJADIgJACIgIgBgACNAoQAKgiAEgeQAeAKAaAHQAhAHAMgYIB3kGIi/gyIAYgwIEBBEIiLE7QgPAdgUAQQgVAPgbACIgBAAQgcAAhJgVgAAoghIA9h8QhAAphBAdQgJgfgJgWIg6BxIhEgTIC2lgIBAARIhyDkQBQgdBLgxIhRgVIAbgyIBjAZIATgnIBCAQIgSApIBjAbIgXA0IhlgbIgVAqIAYgLQAvA8AbAoIhDAeQgXgpgZgoIg3BxgABSmhIBIgCQAIAiAHAqIhNAEQgEgsgGgig");
        mask.setTransform(84.9, 72.8);
        this.instance = new lib.光();
        this.instance.setTransform(3.1, 109.3, 0.069, 0.064, 8.7, 0, 0, 98.2, 90.2);
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);
        this.instance.mask = mask;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regX: 98.5, regY: 89.9, scaleX: 1.61, scaleY: 1.58, rotation: 18.5, x: 81.5, y: 68.1 }, 38).wait(1));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("AGdLTIgEAAQqXhuoxjeIgggNIFNo0IAAAAIE9odIAiALQB8AnB/AhQFbBaGAAxIAHABIAWACIgKAhIgCADIgBACIjBJHIgBAAIgCABIgBAAIi8I4IAAACIgMAmgAi6qzQgEAAgCADIgBADIpjQOIgBABIgBAFQAAACACACQACADADABQItDbKVBtIABAAIADAAIAEgBQADgCABgEIGByBIABgBIgBgFIgBgCIgCgCIgDgCIgCAAQl6gylWhXQiIgkiEgqIgCAAIgEABgAAsEwIAMgbIAlALIAwhnIgqgDIANgbIBRAIIg/CHIAlALIgMAcgAhSECQgIgFgCgGQgFgHADgHQAEgIAJgCQAJgFALAEQAHACAEAHQADAGgDAIQgEAIgJADIgNACIgGAAgAkuDHIAPgaIAkAKIA1hiIgpgDIANgaIBPAHIhECEIAjAKIgNAbgAgnCuQgKgDgEgHQgDgHAFgGQACgIAJgDQAJgDAKACQAIADAEAIQAEAFgEAHQgEAIgJADIgJACIgIgBgACNAoQAKgiAEgeQAeAKAaAHQAhAHAMgYIB3kGIi/gyIAYgwIEBBEIiLE7QgPAdgUAQQgVAPgbACIgBAAQgcAAhJgVgAAoghIA9h8QhAAphBAdQgJgfgJgWIg6BxIhEgTIC2lgIBAARIhyDkQBQgdBLgxIhRgVIAbgyIBjAZIATgnIBCAQIgSApIBjAbIgXA0IhlgbIgVAqIAYgLQAvA8AbAoIhDAeQgXgpgZgoIg3BxgABSmhIBIgCQAIAiAHAqIhNAEQgEgsgGgig");
        this.shape.setTransform(84.9, 72.8);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 169.8, 145.6);
    (lib.闲hover = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.光_1();
        this.instance.setTransform(127.9, 144.5, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [127.8, 144.4, 85.3, 136.4, 60.1, 129.5, 44.2, 125.1, 21.5, 117, 10.2, 112.9, 2.1, 109.7, 2.1, 109.7, 43, 40.7, 53.2, 23.5, 65.8, 2.1, 85.3, 8.2, 100.4, 11.9, 108.1, 13.8, 114.6, 15.1, 119.3, 16, 124.9, 17, 127.9, 17.6, 131.1, 18.1, 146.5, 20.9, 167.4, 24.1, 167.4, 24.2, 128.5, 142.7] } }, 39).wait(1));
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(65.8, 2, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_1.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [65.9, 2.1, 95.4, 11.3, 114.7, 15.1, 121.9, 16.5, 131.1, 18.1, 146.5, 20.8, 167.4, 24.1, 127.9, 144.4, 127.9, 144.4, 85.4, 136.4, 60.1, 129.4, 44.3, 125.1, 21.6, 116.9, 10.2, 112.9, 2.1, 109.7, 27.7, 66.6, 43, 40.7, 60.7, 10.7, 65, 3.7] } }, 39).wait(1));
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(127.9, 144.5, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_2.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [127.8, 144.4, 85.3, 136.4, 60.1, 129.5, 44.2, 125.1, 21.5, 117, 10.2, 112.9, 2.1, 109.7, 2.1, 109.7, 43, 40.7, 53.2, 23.5, 65.8, 2.1, 85.3, 8.2, 100.4, 11.9, 108.1, 13.8, 114.6, 15.1, 119.3, 16, 124.9, 17, 127.9, 17.6, 131.1, 18.1, 146.5, 20.9, 167.4, 24.1, 167.4, 24.2, 128.5, 142.7] } }, 39).wait(1));
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(65.8, 2, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_3.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_3.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ guide: { path: [65.9, 2.1, 95.4, 11.3, 114.7, 15.1, 121.9, 16.5, 131.1, 18.1, 146.5, 20.8, 167.4, 24.1, 127.9, 144.4, 127.9, 144.4, 85.4, 136.4, 60.1, 129.4, 44.3, 125.1, 21.6, 116.9, 10.2, 112.9, 2.1, 109.7, 27.7, 66.6, 43, 40.7, 60.7, 10.7, 65, 3.7] } }, 39).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-193.2, -257, 587.2, 667.6);
    (lib.箭头旋转 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.箭头();
        this.instance.setTransform(12, 10, 1, 1, 0, 0, 0, 12, 10);
        this.instance.shadow = new cjs.Shadow("rgba(102,204,0,1)", 0, 0, 0);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 12.1, scaleX: 0.04, x: 11.8 }, 21).wait(1).to({ regX: 12, scaleX: 1, x: 12 }, 20).to({ regX: 12.1, scaleX: 0.04, x: 11.8 }, 20).wait(1).to({ regX: 12, scaleX: 1, x: 12 }, 20).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4, -4, 40, 36);
    (lib.箭头动 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.箭头旋转();
        this.instance.setTransform(12, 10, 1, 1, 0, 0, 0, 12, 10);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ y: 19 }, 9).to({ y: 10 }, 9).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2, -2, 32, 28);
    (lib.庄对win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Aq/FtIAAqDIAeAAQJigBIThRIABAAIAcgDIDOJtIgWAFIgDAAQp2BkrRACgAqmkAIgBABQgEADAAAEIAAI9QAAAEAEADIABABQACACADAAQLLgCJxhiIACAAIACgBIABgBIADgFIAAgEIAAgCIi6osIAAgCIgCgDIgDgCIgDgBIgEAAIgCAAQiCAUiHARQmgAunTABIgFAAgAjhDDIAYgBIgJhIIgZAHIgBgTIAugOIANBfIAZgBIADATIhKAGgAAGCyIAYgDIgOhGIgWAGIgDgSIArgOIAUBeIAYgBIAEATIhJAFgAhOC/QgEgEgBgFQgCgGAEgEQAEgDAHAAQAFgBAEADQAGADABAGQABAFgDAEQgFAEgGABQgGAAgFgDgABlCrIAYgCIgQhHIgYAHIgEgTIAtgNIAYBeIAYgBIAEASIhJAFgAhXCEQgFgDgBgFQgBgGAEgEQADgDAHAAQAFgBAFADQAFADABAGQABAFgEAEQgDADgGABIgCAAQgFAAgEgDgAlYANQAXgngFg0IgIhMIBhgGIgPgVIApgLIARAdIBUgGIAFAcIi+ANIAFAtQAJBTgiAtQgPgUgOgMgAkiAAIBYgEIgIg3IhEAFIgCgeIBCgFIgFglIAlgCIAEAlIBGgFIAFAeIhFAEIAIA3IBSgGIAHAdIjTAQgAhGgJQAagbAOggIg6g9IAZgRIArArQAFgagDgcIhKAFIgGgeIBsgHIAFAdQADAvgMAnIA0AyIgeAWIgfgkQgQAhgaAZIgZgdgABGgTIApgCQASgBgEgQIgahqIhJAFIgGgdIBJgFIgKglIAjgDIAJAlIAYgCIAIAeIgXABIAeB2QAEARgFALQgHAIgPACIg4AFQgGgPgLgSgAAYhtIAWgSIA7AzIgbAVQgagcgcgag");
        mask.setTransform(70.4, 36.5);
        this.instance = new lib.光();
        this.instance.setTransform(1.5, 83.3, 0.092, 0.079, -1.8, 0, 0, 97.4, 88.7);
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);
        this.instance.mask = mask;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regY: 89.3, scaleX: 1.2, scaleY: 1.03, x: 61.4, y: 50.5, alpha: 0.73 }, 38, cjs.Ease.get(1)).wait(1));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("Aq/FtIAAqDIAeAAQJigBIThRIABAAIAcgDIDOJtIgWAFIgDAAQp2BkrRACgAqmkAIgBABQgEADAAAEIAAI9QAAAEAEADIABABQACACADAAQLLgCJxhiIACAAIACgBIABgBIADgFIAAgEIAAgCIi6osIAAgCIgCgDIgDgCIgDgBIgEAAIgCAAQiCAUiHARQmgAunTABIgFAAgAjhDDIAYgBIgJhIIgZAHIgBgTIAugOIANBfIAZgBIADATIhKAGgAAGCyIAYgDIgOhGIgWAGIgDgSIArgOIAUBeIAYgBIAEATIhJAFgAhOC/QgEgEgBgFQgCgGAEgEQAEgDAHAAQAFgBAEADQAGADABAGQABAFgDAEQgFAEgGABQgGAAgFgDgABlCrIAYgCIgQhHIgYAHIgEgTIAtgNIAYBeIAYgBIAEASIhJAFgAhXCEQgFgDgBgFQgBgGAEgEQADgDAHAAQAFgBAFADQAFADABAGQABAFgEAEQgDADgGABIgCAAQgFAAgEgDgAlYANQAXgngFg0IgIhMIBhgGIgPgVIApgLIARAdIBUgGIAFAcIi+ANIAFAtQAJBTgiAtQgPgUgOgMgAkiAAIBYgEIgIg3IhEAFIgCgeIBCgFIgFglIAlgCIAEAlIBGgFIAFAeIhFAEIAIA3IBSgGIAHAdIjTAQgAhGgJQAagbAOggIg6g9IAZgRIArArQAFgagDgcIhKAFIgGgeIBsgHIAFAdQADAvgMAnIA0AyIgeAWIgfgkQgQAhgaAZIgZgdgABGgTIApgCQASgBgEgQIgahqIhJAFIgGgdIBJgFIgKglIAjgDIAJAlIAYgCIAIAeIgXABIAeB2QAEARgFALQgHAIgPACIg4AFQgGgPgLgSgAAYhtIAWgSIA7AzIgbAVQgagcgcgag");
        this.shape.setTransform(70.4, 36.5);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 140.8, 73);
    (lib.庄对hover = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.光_1();
        this.instance.setTransform(159.6, 72.5, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [159.5, 72.5, 153.8, 73.5, 143.1, 75, 121, 77.8, 94.3, 79.7, 51.6, 82.7, 21.3, 83.2, 21.2, 83.2, 21.2, 75.3, 21.2, 67.4, 21.2, 51.6, 21.1, 20.2, 21, 20, 46.2, 20.8, 73, 19, 102.5, 17.2, 139.8, 11.8, 139.7, 11.8, 144.7, 26.7, 149.6, 41.6, 159.5, 71.4] } }, 39).wait(1));
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(21.2, 20, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_1.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [21.4, 20.2, 46.4, 20.9, 73, 19.1, 89.5, 18.1, 108.6, 15.9, 123.5, 14.2, 139.8, 11.9, 140.4, 13.9, 141.1, 15.9, 143.4, 22.9, 149.8, 42.1, 154.8, 57.3, 157.3, 64.8, 159.8, 72.4, 159.8, 72.4, 154.1, 73.5, 143.1, 74.9, 121, 77.8, 94.3, 79.7, 51.6, 82.6, 21.3, 83.2, 21.2, 83.1, 21.2, 55.1, 21.1, 26, 21, 21.4] } }, 39).wait(1));
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(159.6, 72.5, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_2.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [159.5, 72.5, 153.8, 73.5, 143.1, 75, 121, 77.8, 94.3, 79.7, 51.6, 82.7, 21.3, 83.2, 21.2, 83.2, 21.2, 75.3, 21.2, 67.4, 21.2, 51.6, 21.1, 20.2, 21, 20, 46.2, 20.8, 73, 19, 102.5, 17.2, 139.8, 11.8, 139.7, 11.8, 144.7, 26.7, 149.6, 41.6, 159.5, 71.4] } }, 39).wait(1));
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(21.2, 20, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_3.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_3.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ guide: { path: [21.4, 20.2, 46.4, 20.9, 73, 19.1, 89.5, 18.1, 108.6, 15.9, 123.5, 14.2, 139.8, 11.9, 140.4, 13.9, 141.1, 15.9, 143.4, 22.9, 149.8, 42.1, 154.8, 57.3, 157.3, 64.8, 159.8, 72.4, 159.8, 72.4, 154.1, 73.5, 143.1, 74.9, 121, 77.8, 94.3, 79.7, 51.6, 82.6, 21.3, 83.2, 21.2, 83.1, 21.2, 55.1, 21.1, 26, 21, 21.4] } }, 39).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-237.8, -239, 664.4, 577.5);
    (lib.庄win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AqDBmIAAAAIgEgLIjKpRIAXgDIAJgBQIQhEHHiOIAigLIKKRRIggAMQjoBdj6BIQlhBnmGBAIgbAGgAC3q0QnJCSoTBEIgCAAIgEACQgCACgBADIAAACIAAACIAAACIGBSBQABADADACIACABIAFAAIACAAQGLhBFlhoQDxhGDhhYQADgBACgDIABgEIAAgFIgBgBIpkwOIgBgDQgCgDgDgBIgDgBIgDABgAk/FpIAkgJIgphsIgiARIgLgdIBCggIA3CPIAkgJIAKAcIhqAagAhlE9QgIgEgDgHQgDgIAEgIQAEgGAJgCQAJgCAIADQAIAEADAJQADAHgEAHQgDAHgKACIgFABQgGAAgGgDgAgODkQgQgrAHgcIAEgKQAIgSAVgFIADgBQATgFAQAGQARAFAPASQAOASALAdQAQArgHAaQgGAbgeAHQgJADgIAAQgxAAgahIgAAXCWQgZAGAXA+QAWA6AZgGQAZgGgXg8QgVg3gWAAIgEABgACjEPQgIgEgEgIQgCgIADgHQAFgHAJgBQAJgDAIAEQAIADADAJQADAIgEAGQgDAHgKACIgGABQgFAAgGgCgADlD9IgLgcQAJADAKAAIAPgCIABAAQApgKgTg2IgBAAQgEARgSAIIgGABIgJABQgQABgQgJQgTgLgIgXIAAAAQgGgMABgLQgBgMAGgLQAKgUAagHQAMgDALACIAPADQAHAEAHAEQATANANAbIAGAOIAEAJQAMAngIAbQgJAegkAJIgPACIgPABIgIgCgADfBmQgKACgEAKQgBAEAAAGQAAAGADAGQACAHAEAEQAEAGAFADQAGADAFABIAKgBIAFgCQAGgDACgHQAEgIgEgMIgCgDQgCgGgEgDIgIgIIgHgEQgEgCgEAAIgGABgAiHDlQgIgDgDgIQgDgIAEgGQAFgHAJgBQAJgEAHAFQAIADADAIQADAIgDAHQgEAHgKADIgFAAQgGAAgGgEgAFxDbIgNgfQAXAHATgFQAPgDAFgJQAHgKgFgNIgEgIQgMgQgfAHQgLADgQAFIgkhcIBdgXIALAeIg+AOIANAkIAOgEQAagHAUAJQALAGAHAJQAIAIAEAMIACADQAIAZgLARQgMAUgeAIQgQADgNAAIgOgBgAlNAUQAYhSgqhkIg5iVIC4gtQgVgWgQgPIBIgkIAyA0ICegoIAXA5IloBZIAjBYQA+CfgmBeQgogggigSgAjsgTICggpIgphlIh+AeIgXg5IB+ggIgehIIBFgRIAeBIICAgfIAYA4IiBAhIApBmICZgnIAYA6Il+Bfg");
        mask.setTransform(85, 72.8);
        this.instance = new lib.光();
        this.instance.setTransform(37.8, 154, 0.071, 0.056, -1.8, 0, 0, 97, 89.7);
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);
        this.instance.mask = mask;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regX: 97.1, regY: 89.1, scaleX: 1.59, scaleY: 1.34, x: 55.2, y: 82.1, alpha: 0.73 }, 38, cjs.Ease.get(1)).wait(1));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("AqDBmIAAAAIgEgLIjKpRIAXgDIAJgBQIQhEHHiOIAigLIKKRRIggAMQjoBdj6BIQlhBnmGBAIgbAGg");
        this.shape.setTransform(85, 72.8);
        this.timeline.addTween(cjs.Tween.get(this.shape).to({ _off: true }, 1).wait(39));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 170.1, 145.6);
    (lib.和win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AAPFkIgKAAIgQAAIgFAAIgBAAQiwAAiqgHIgXgBQmagTl1g6IgCAAIAAAAIgagDIDDpHIAKgoIAWADIAFABIAEAAQEWAiEpANQC1AIC8AAIASAAIAUAAQHxgBG9g2IAHAAIAWgDIAMAkIAAACIABABIDBJHQgUAEgCAAIgDAAIgCAAQiCAUiHARQmiAunTABIgGAAgAvTlCIgCACIgCAEIgBABIi5IsIgBABIAAAFIABACIAAAAIACACIACACIACAAIACABQFxA4GWASQC1AIC8ABIADAAIADAAIAMAAIAOAAIAGAAQJigCIVhRIABAAIAEgCIAAgBIACgBIABgDIAAgEIAAgCIi6orIgBgCQgBgEgDgCIgBgBIgFAAIgCAAQnCA4n2ABIgUAAIgSAAQi8AAi1gJQkugNkagjIgCAAIgDAAIgEABgAm1CPIAThsQgdAgghAdQgEgUgIgbQAtggAgglIg7AAIAHgjIBAAAIAFgdQgbAAgaADIAAggQAlgDAkgBQAqgFAmgCIAGAgIg5AEIgFAhIA7AAIgFAjIg8AAIgDAdIAPgJQAaAPAYASIgkAdQgSgQgPgMIgQBtgAkxCDIAbjvICfAAIgJDsIg1AAIABgZIhEAAIgDAcgAj1A+IBEAAIAIiHIg/AAgAGkBUQgVgLgDgTQgEgaAlgMIAAgBQgjgJgCgTQgFgRATgJQAOgMAbABQAYgBAVALQASAJAEAPQADAUgiALIAAABQAUAEAOAKQAMAJADAOIABAIQgBANgNAJQgTAKggACQgegCgSgJgAGyA1QACAIAKAGQAJAEANACQALgCAKgEQAFgGAAgIQgEgRgfgIQgcAJADAQgAGygZQgIAFAEAHQABAMAaAGQAVgGgBgMQgDgHgFgFQgJgEgJAAQgLAAgGAEgAAbBbIgBgYIAoAAIgDhWIgpAFIgBgXIBQgNIAGB1IAoAAIACAYgAEEBOQgJgFABgGQgDgHAKgGQADgEAMABQAIgBALAEQAEAGACAHQAAAGgFAFQgGAEgKACQgLgCgHgEgAD7AEQgIgFAAgEQgBgIAFgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAFgGAKADQAJgDAKAGIABABQAEADABAIQABAEgGAFQgHACgJACQgKgCgHgCg");
        mask.setTransform(119.9, 35.7);
        this.instance = new lib.光();
        this.instance.setTransform(116.8, 78, 0.069, 0.064, 8.7, 0, 0, 98.2, 90.2);
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);
        this.instance.mask = mask;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regX: 97.3, regY: 89.2, scaleX: 1.82, scaleY: 1.44, rotation: -1.8, x: 117.5, y: 79.6, alpha: 0.73 }, 38, cjs.Ease.get(1)).wait(1));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("AAPFkIgKAAIgQAAIgFAAIgBAAQiwAAiqgHIgXgBQmagTl1g6IgCAAIAAAAIgagDIDDpHIAKgoIAWADIAFABIAEAAQEWAiEpANQC1AIC8AAIASAAIAUAAQHxgBG9g2IAHAAIAWgDIAMAkIAAACIABABIDBJHQgUAEgCAAIgDAAIgCAAQiCAUiHARQmiAunTABIgGAAgAvTlCIgCACIgCAEIgBABIi5IsIgBABIAAAFIABACIAAAAIACACIACACIACAAIACABQFxA4GWASQC1AIC8ABIADAAIADAAIAMAAIAOAAIAGAAQJigCIVhRIABAAIAEgCIAAgBIACgBIABgDIAAgEIAAgCIi6orIgBgCQgBgEgDgCIgBgBIgFAAIgCAAQnCA4n2ABIgUAAIgSAAQi8AAi1gJQkugNkagjIgCAAIgDAAIgEABgAm1CPIAThsQgdAgghAdQgEgUgIgbQAtggAgglIg7AAIAHgjIBAAAIAFgdQgbAAgaADIAAggQAlgDAkgBQAqgFAmgCIAGAgIg5AEIgFAhIA7AAIgFAjIg8AAIgDAdIAPgJQAaAPAYASIgkAdQgSgQgPgMIgQBtgAkxCDIAbjvICfAAIgJDsIg1AAIABgZIhEAAIgDAcgAj1A+IBEAAIAIiHIg/AAgAGkBUQgVgLgDgTQgEgaAlgMIAAgBQgjgJgCgTQgFgRATgJQAOgMAbABQAYgBAVALQASAJAEAPQADAUgiALIAAABQAUAEAOAKQAMAJADAOIABAIQgBANgNAJQgTAKggACQgegCgSgJgAGyA1QACAIAKAGQAJAEANACQALgCAKgEQAFgGAAgIQgEgRgfgIQgcAJADAQgAGygZQgIAFAEAHQABAMAaAGQAVgGgBgMQgDgHgFgFQgJgEgJAAQgLAAgGAEgAAbBbIgBgYIAoAAIgDhWIgpAFIgBgXIBQgNIAGB1IAoAAIACAYgAEEBOQgJgFABgGQgDgHAKgGQADgEAMABQAIgBALAEQAEAGACAHQAAAGgFAFQgGAEgKACQgLgCgHgEgAD7AEQgIgFAAgEQgBgIAFgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAFgGAKADQAJgDAKAGIABABQAEADABAIQABAEgGAFQgHACgJACQgKgCgHgCg");
        this.shape.setTransform(119.9, 35.7);
        this.timeline.addTween(cjs.Tween.get(this.shape).to({ _off: true }, 1).wait(39));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 239.8, 71.3);
    (lib.和hover = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.光_1();
        this.instance.setTransform(237.2, 81.8, 3, 3, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [237.1, 81.6, 223.4, 83.9, 201.5, 86, 157.1, 90.2, 114.9, 90, 72.9, 89.8, 32.6, 85.5, 12.6, 83.3, 0.9, 81.3, 5.9, 66.3, 10.8, 51.3, 15.8, 36.4, 18.3, 28.9, 20.8, 21.5, 20.9, 21.5, 20.9, 21.9, 28, 22.6, 35.2, 23.4, 49.5, 24.5, 84.8, 27.4, 120, 27.2, 154.9, 27, 190.2, 24, 207.7, 22.6, 218.2, 21.2, 227.7, 50.6, 237.2, 79.9] } }, 39).wait(1));
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(21.5, 21.6, 3, 3, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_1.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [21.6, 21.8, 25.5, 22.6, 49.4, 24.5, 84.8, 27.4, 119.9, 27.2, 154.8, 27, 190.1, 24, 207.7, 22.6, 218.2, 21.2, 228, 51.4, 237.7, 81.5, 223.8, 83.8, 201.5, 86, 157, 90.2, 114.9, 90, 72.9, 89.8, 32.6, 85.5, 12.5, 83.3, 0.9, 81.3, 16.9, 32.7, 20.3, 23.2] } }, 39).wait(1));
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(237.2, 81.8, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_2.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [237.1, 81.6, 223.4, 83.9, 201.5, 86, 157.1, 90.2, 114.9, 90, 72.9, 89.8, 32.6, 85.5, 12.6, 83.3, 0.9, 81.3, 5.9, 66.3, 10.8, 51.3, 15.8, 36.4, 18.3, 28.9, 20.8, 21.5, 20.9, 21.5, 20.9, 21.9, 28, 22.6, 35.2, 23.4, 49.5, 24.5, 84.8, 27.4, 120, 27.2, 154.9, 27, 190.2, 24, 207.7, 22.6, 218.2, 21.2, 227.7, 50.6, 237.2, 79.9] } }, 39).wait(1));
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(21.5, 21.6, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_3.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_3.cache(-2, -2, 47, 47);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ guide: { path: [21.6, 21.8, 25.5, 22.6, 49.4, 24.5, 84.8, 27.4, 119.9, 27.2, 154.8, 27, 190.1, 24, 207.7, 22.6, 218.2, 21.2, 228, 51.4, 237.7, 81.5, 223.8, 83.8, 201.5, 86, 157, 90.2, 114.9, 90, 72.9, 89.8, 32.6, 85.5, 12.5, 83.3, 0.9, 81.3, 16.9, 32.7, 20.3, 23.2] } }, 39).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-259, -258.9, 784.7, 628.2);
    (lib.tieArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { win: 0, down: 1, hover: 2, normal: 3 });
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(195, 0.8);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);
        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));
        this.instance = new lib.和区();
        this.instance.setTransform(114.6, 31.7, 1, 1, 0, 0, 0, 117.2, 33.3);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(117, -9, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 4);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("AAPFkIgKAAIgQAAIgFAAIgBAAQiwgBiqgGIgXgBQmagTl1g6IgCAAIAAAAIgagDIDDpHIAKgoIAWADIAFAAIAEABQEWAiEpANQC1AIC8AAIASAAIAUAAQHxAAG9g3IAHgBIAWgCIAMAkIAAACIABABIDBJGQgUAFgCAAIgDAAIgCAAQiCAUiHARQmiAunTABIgGAAgAvTlCIgCACIgCAEIgBABIi5IsIgBABIAAAFIABACIAAAAIACACIACACIACAAIACABQFxA4GWASQC1AIC8ABIADAAIADAAIAMAAIAOAAIAGAAQJigCIVhQIABgBIAEgCIAAgBIACgCIABgCIAAgEIAAgCIi6orIgBgCQgBgEgDgCIgBgBIgFAAIgCAAQnCA4n2ABIgUAAIgSAAQi8gBi1gHQkugOkagjIgCAAIgDAAIgEABg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 114.5, y: 31.3 }).wait(2));
        this.instance_2 = new lib.和win();
        this.instance_2.setTransform(114.5, 31.2, 1, 1, 0, 0, 0, 119.9, 35.6);
        this.instance_3 = new lib.和hover();
        this.instance_3.setTransform(124.6, 27, 1, 1, 0, 0, 0, 129.4, 51.3);
        this.instance_2.mask = this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));
        this.instance_4 = new lib.和字();
        this.instance_4.setTransform(111.1, 31.5, 1, 1, 0, 0, 0, 45.4, 12.7);
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);
        this.instance_5 = new lib.和字();
        this.instance_5.setTransform(111.1, 31.5, 1, 1, 0, 0, 0, 45.4, 12.7);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 1 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.879 } }] }, 1).wait(3));
        this.instance_6 = new lib.和区();
        this.instance_6.setTransform(114.6, 31.7, 1, 1, 0, 0, 0, 117.2, 33.3);
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-259.6, -258.6, 751, 583);
    (lib.playerPairArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "win": 0, "down": 1, "hover": 2, "normal": 3 });
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(113.6, 10);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);
        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));
        this.instance = new lib.闲对区();
        this.instance.setTransform(65.5, 34.6, 1, 1, 0, 0, 0, 68.1, 34.2);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(75, -3, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 4);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("AK4FtIgOAAIgDAAIgDAAQi8AAi1gHQoEgUnUhLIgFgBIgXgFIDSptIAaAEIACAAQFyA4GUASQC1AIC8ABIADAAIADAAIAOAAIAKAAIAAKCgAnllUQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgBACIi6IsIAAACIAAAEIACAEIABABIADACIABAAIABAAQHOBJH/AUQC1AHC8AAIADAAIADgCIABgBQADgDAAgDIAAo+QAAgEgDgDIgBgBIAAgCIgGAAIAAAAQixAAipgHIgXgBQmYgTl1g5IgCAAIgBAAQgDgBgCACIgBAAIgCABg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 65, y: 34.8 }).wait(2));
        this.instance_2 = new lib.闲对win();
        this.instance_2.setTransform(65, 34.9, 1, 1, 0, 0, 0, 70.6, 36.6);
        this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(97, 100, 0, 0))];
        this.instance_2.cache(-2, -2, 145, 77);
        this.instance_3 = new lib.闲对hover();
        this.instance_3.setTransform(75.2, 35, 1, 1, 0, 0, 0, 80.2, 56);
        this.instance_2.mask = this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));
        this.instance_4 = new lib.闲对();
        this.instance_4.setTransform(71.8, 35, 1, 1, 0, 0, 0, 27.6, 21.3);
        this.instance_4.alpha = 0.801;
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);
        this.instance_5 = new lib.闲对();
        this.instance_5.setTransform(71.8, 35, 1, 1, 0, 0, 0, 27.6, 21.3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 0.801 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.75 } }] }, 1).wait(3));
        this.instance_6 = new lib.闲对区();
        this.instance_6.setTransform(65.5, 34.6, 1, 1, 0, 0, 0, 68.1, 34.2);
        this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-259.6, -256.6, 653, 585);
    (lib.playerArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "win": 0, "down": 1, "hover": 2, "normal": 3 });
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(135, 14.5);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);
        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));
        this.instance = new lib.闲区();
        this.instance.setTransform(76.7, 64.1, 1, 1, 0, 0, 0, 81.2, 69.5);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(104, 4, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 4);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("AGdLUIgEgBQqXhuoxjeIgggNIFNo1IAAAAIE9ocIAiAMQB8AmB/AiQFbBYGAAyIAHAAIAWADIgKAgIgCAEIgBACIjBJIIgBAAIgCABIgBAAIi8I4IAAABIgMAlgAi6q0QgEACgCADIgBABIpjQPIgBABIgBAEQAAADACADQACACADABQItDbKVBtIABAAIADAAIAEgBQADgCABgDIGByBIABgDIgBgDIgBgCIgCgDIgDgCIgCgBQl6gxlWhXQiIgkiEgqIgCAAIgEAAg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 76.7, y: 63.8 }).wait(2));
        this.instance_2 = new lib.闲win();
        this.instance_2.setTransform(76.7, 63.8, 1, 1, 0, 0, 0, 84.9, 72.8);
        this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(97, 100, 0, 0))];
        this.instance_2.cache(-2, -2, 174, 150);
        this.instance_3 = new lib.闲hover();
        this.instance_3.setTransform(76.7, 63.8, 1, 1, 0, 0, 0, 84.9, 72.8);
        this.instance_2.mask = this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));
        this.instance_4 = new lib.闲字();
        this.instance_4.setTransform(84.9, 62.7, 1, 1, 0, 0, 0, 38.5, 40.9);
        this.instance_4.alpha = 0.801;
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);
        this.instance_5 = new lib.闲字();
        this.instance_5.setTransform(84.9, 62.7, 1, 1, 0, 0, 0, 38.5, 40.9);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 0.801 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.75 } }] }, 1).wait(3));
        this.instance_6 = new lib.闲区();
        this.instance_6.setTransform(76.7, 64.1, 1, 1, 0, 0, 0, 81.2, 69.5);
        this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-261.5, -262.4, 679, 656);
    (lib.bankerPairArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "win": 0, "down": 1, "hover": 2, "normal": 3 });
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(99, 4);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);
        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));
        this.instance = new lib.庄对区();
        this.instance.setTransform(66.8, 34.5, 1, 1, 0, 0, 0, 68, 34.2);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(56, -2, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 5);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("Aq+FtIAAqDIAdAAQJigBIThRIABAAIAcgDIDOJtIgWAFIgDAAQp2BkrRACgAqmkAIgCABQgDADAAAEIAAI9QAAAEADADIACABQACACADAAQLLgCJxhiIABAAIADgBIABgBIADgFIAAgEIAAgCIi6osIgBgCIgBgDIgDgCIgDgBIgEAAIgCAAQiCAUiHARQmgAunTABIgFAAg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 67.2, y: 34.7 }).wait(2));
        this.instance_2 = new lib.庄对win();
        this.instance_2.setTransform(67.2, 34.8, 1, 1, 0, 0, 0, 70.4, 36.5);
        this.instance_3 = new lib.庄对hover();
        this.instance_3.setTransform(66.9, 34.1, 1, 1, 0, 0, 0, 90.2, 46.8);
        this.instance_2.mask = this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));
        this.instance_4 = new lib.庄对();
        this.instance_4.setTransform(58.8, 34.8, 1, 1, 0, 0, 0, 26.2, 21.5);
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);
        this.instance_5 = new lib.庄对();
        this.instance_5.setTransform(58.8, 34.8, 1, 1, 0, 0, 0, 26.2, 21.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 1 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.801 } }] }, 1).wait(3));
        this.instance_6 = new lib.庄对区();
        this.instance_6.setTransform(66.8, 34.5, 1, 1, 0, 0, 0, 68, 34.2);
        this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-258.2, -256.7, 653, 585);
    (lib.bankerArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "win": 0, "down": 1, "hover": 2, "normal": 3 });
        this.frame_0 = function () {
            this.stop();
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(84, 0);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);
        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));
        this.instance = new lib.庄区();
        this.instance.setTransform(80.2, 66.4, 1, 1, 0, 0, 0, 81.3, 69.5);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(54, 5, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 4);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("AqDBmIAAAAIgEgLIjKpRIAXgDIAJgBQIQhEHHiOIAigKIKKRQIggAMQjoBdj6BIQlhBnmGBAIgbAGgAC3q0QnJCRoTBEIgCABIgEACQgCACgBADIAAACIAAACIAAACIGBSBQABAEADACIACAAIAFAAIACAAQGLhBFlhoQDxhGDhhYIAFgEIABgEIAAgFIgBgBIpkwPIgBgCQgCgDgDgBIgDgBIgDABg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 80.5, y: 66.9 }).wait(2));
        this.instance_2 = new lib.庄win();
        this.instance_2.setTransform(80.5, 66.9, 1, 1, 0, 0, 0, 85, 72.8);
        this.instance_3 = new lib.元件5();
        this.instance_3.setTransform(81.2, 60.9, 1, 1, 0, 0, 0, 104, 64.5);
        this.instance_2.mask = this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));
        this.instance_4 = new lib.庄095();
        this.instance_4.setTransform(83.2, 67.3, 1, 1, 0, 0, 0, 43.5, 43);
        this.instance_4.alpha = 0.398;
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);
        this.instance_5 = new lib.庄095();
        this.instance_5.setTransform(83.2, 67.3, 1, 1, 0, 0, 0, 43.5, 43);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 0.398 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.801 } }] }, 1).wait(3));
        this.instance_6 = new lib.庄区();
        this.instance_6.setTransform(80.2, 66.4, 1, 1, 0, 0, 0, 81.3, 69.5);
        this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-258.1, -260.1, 680, 656);
    (lib.opBtns = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.clearBetsBtn = new lib.清除按钮();
        this.clearBetsBtn.setTransform(67, 26, 0.9, 0.9, 0, 0, 0, 67, 26);
        new cjs.ButtonHelper(this.clearBetsBtn, 0, 1, 2, false, new lib.清除按钮(), 3);
        this.openPaiBtn = new lib.开牌按钮();
        this.openPaiBtn.setTransform(217.5, 26, 0.9, 0.9, 0, 0, 0, 67, 26);
        new cjs.ButtonHelper(this.openPaiBtn, 0, 1, 2, false, new lib.开牌按钮(), 3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.openPaiBtn }, { t: this.clearBetsBtn }] }).wait(1));
        this.flyPaiBtn = new lib.飞牌按钮();
        this.flyPaiBtn.setTransform(67, 26, 0.9, 0.9, 0, 0, 0, 67, 26);
        new cjs.ButtonHelper(this.flyPaiBtn, 0, 1, 2, false, new lib.飞牌按钮(), 3);
        this.reBetsBtn = new lib.重押按钮();
        this.reBetsBtn.setTransform(216.5, 26, 0.9, 0.9, 0, 0, 0, 67, 26);
        new cjs.ButtonHelper(this.reBetsBtn, 0, 1, 2, false, new lib.重押按钮(), 3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.reBetsBtn }, { t: this.flyPaiBtn }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-13.3, -14.5, 327.2, 84);
    (lib.TableMc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.limitedMc = new lib.限注框();
        this.limitedMc.setTransform(169.6, 234.3, 1, 1, 0, 0, 0, 101.5, 67);
        this.limitLabelMc = new lib.本桌限注();
        this.limitLabelMc.setTransform(77.8, 168.6, 1, 1.018, 0, 10.9, 0, 29.8, 7.3);
        this.limitLabelMc.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 1, 0);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.limitLabelMc }, { t: this.limitedMc }] }).wait(1));
        this.betsChipsTipsMc = new lib.spaceHolder();
        this.betsChipsTipsMc.setTransform(2, 2, 1, 1, 0, 0, 0, 2, 2);
        this.timeline.addTween(cjs.Tween.get(this.betsChipsTipsMc).wait(1));
        this.instance = new lib.玻璃();
        this.instance.setTransform(849.6, 27.3, 0.517, 0.5);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        this.bankerPointMc = new lib.元件4();
        this.bankerPointMc.setTransform(589.8, 164.8, 1, 1, 0, 0, 0, 12.2, 18.8);
        this.playerPointMc = new lib.元件2();
        this.playerPointMc.setTransform(462.1, 164.9, 1, 1, 0, 0, 0, 12.2, 18.8);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.playerPointMc }, { t: this.bankerPointMc }] }).wait(1));
        this.miPokerBtn0 = new lib.亮牌();
        this.miPokerBtn0.setTransform(348.8, 333.5, 0.8, 0.8, 0, 0, 0, 26, 11);
        this.miPokerBtn0.shadow = new cjs.Shadow("rgba(0,0,0,1)", -1, 2, 9);
        new cjs.ButtonHelper(this.miPokerBtn0, 0, 1, 2, false, new lib.亮牌(), 3);
        this.playerChipsMc = new lib.spaceHolder();
        this.playerChipsMc.setTransform(527.7, 630.2);
        this.bankerChipsMc = new lib.spaceHolder();
        this.bankerChipsMc.setTransform(523, 2);
        this.pokerLayerMc = new lib.spaceHolder();
        this.recyclePokerMc = new lib.spaceHolder();
        this.recyclePokerMc.setTransform(55.5, 77.4, 1, 1, 0, 0, 0, 2, 2);
        this.sendPokerMc = new lib.spaceHolder();
        this.sendPokerMc.setTransform(854.5, 34, 1, 1, 0, 0, 0, 2, 2);
        this.pokerStartMc = new lib.spaceHolder();
        this.pokerStartMc.setTransform(800, 139, 1, 1, 0, 0, 0, 2, 2);
        this.miMc = new lib.spaceHolder();
        this.miMc.setTransform(524.5, 321.5, 1, 1, 0, 0, 0, 2, 2);
        this.PokerMc = new lib.spaceHolder();
        this.PokerMc.setTransform(526, 81.5, 1, 1, 0, 0, 0, 2, 2);
        this.miPokerBtn1 = new lib.亮牌();
        this.miPokerBtn1.setTransform(654.1, 333.5, 0.8, 0.8, 0, 0, 0, 26, 11);
        this.miPokerBtn1.shadow = new cjs.Shadow("rgba(0,0,0,1)", -1, 2, 9);
        new cjs.ButtonHelper(this.miPokerBtn1, 0, 1, 2, false, new lib.亮牌(), 3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.miPokerBtn1 }, { t: this.PokerMc }, { t: this.miMc }, { t: this.pokerStartMc }, { t: this.sendPokerMc }, { t: this.recyclePokerMc }, { t: this.pokerLayerMc }, { t: this.bankerChipsMc }, { t: this.playerChipsMc }, { t: this.miPokerBtn0 }] }).wait(1));
        this.playerWinMc = new lib._03();
        this.playerWinMc.setTransform(448, 120.1, 1, 1, 0, 0, 0, 85, 44.6);
        this.bankerWinMc = new lib._03();
        this.bankerWinMc.setTransform(621.8, 125.1, 1, 1, 0, 0, 0, 39, 49.6);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.bankerWinMc }, { t: this.playerWinMc }] }).wait(1));
        this.betsErrorTipsMc = new lib.spaceHolder();
        this.betsErrorTipsMc.setTransform(525, 271);
        this.openPlayerPokerBtn = new lib.开牌_1();
        this.openPlayerPokerBtn.setTransform(416.8, 144.7, 0.8, 0.8, 0, 0, 0, 26, 11);
        this.openPlayerPokerBtn.shadow = new cjs.Shadow("rgba(0,0,0,1)", -1, 2, 9);
        new cjs.ButtonHelper(this.openPlayerPokerBtn, 0, 1, 2, false, new lib.开牌_1(), 3);
        this.openBankerPokerBtn = new lib.开牌_1();
        this.openBankerPokerBtn.setTransform(609.8, 144.7, 0.8, 0.8, 0, 0, 0, 26, 11);
        this.openBankerPokerBtn.shadow = new cjs.Shadow("rgba(0,0,0,1)", -1, 2, 9);
        new cjs.ButtonHelper(this.openBankerPokerBtn, 0, 1, 2, false, new lib.开牌_1(), 3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.openBankerPokerBtn }, { t: this.openPlayerPokerBtn }, { t: this.betsErrorTipsMc }] }).wait(1));
        this.betsChipsMc = new lib.spaceHolder();
        this.betsChipsMc.setTransform(2, 2, 1, 1, 0, 0, 0, 2, 2);
        this.timeline.addTween(cjs.Tween.get(this.betsChipsMc).wait(1));
        this.opBtnsMc = new lib.opBtns();
        this.opBtnsMc.setTransform(513.9, 387, 1, 1, 0, 0, 0, 135.1, 25);
        this.timeline.addTween(cjs.Tween.get(this.opBtnsMc).wait(1));
        this.mc4 = new lib.spaceHolder();
        this.mc4.setTransform(457.6, 277.5);
        this.mc3 = new lib.spaceHolder();
        this.mc3.setTransform(563.7, 277.5);
        this.mc0 = new lib.spaceHolder();
        this.mc0.setTransform(667.5, 215.6);
        this.mc2 = new lib.spaceHolder();
        this.mc2.setTransform(523.7, 208.5);
        this.mc1 = new lib.spaceHolder();
        this.mc1.setTransform(353.2, 211.6);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.mc1 }, { t: this.mc2 }, { t: this.mc0 }, { t: this.mc3 }, { t: this.mc4 }] }).wait(1));
        this.betsItemMc1 = new lib.bankerArea();
        this.betsItemMc1.setTransform(781.3, 278.2, 1, 1, 0, 0, 0, 155.3, 131.7);
        this.betsItemMc2 = new lib.playerArea();
        this.betsItemMc2.setTransform(339.8, 208.2, 1, 1, 0, 0, 0, 74, 59.3);
        this.betsItemMc5 = new lib.playerPairArea();
        this.betsItemMc5.setTransform(456.5, 260.2, 1, 1, 0, 0, 0, 67, 35.4);
        this.betsItemMc4 = new lib.bankerPairArea();
        this.betsItemMc4.setTransform(579.6, 252.8, 1, 1, 0, 0, 0, 53.1, 27.7);
        this.betsItemMc3 = new lib.tieArea();
        this.betsItemMc3.setTransform(523.6, 201.8, 1, 1, 0, 0, 0, 114, 34.6);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.betsItemMc3 }, { t: this.betsItemMc4 }, { t: this.betsItemMc5 }, { t: this.betsItemMc2 }, { t: this.betsItemMc1 }] }).wait(1));
        this.historyMc = new lib.HistoryMc();
        this.historyMc.setTransform(382.4, 506, 1, 1, 0, 0, 0, 382.4, 66);
        this.timeline.addTween(cjs.Tween.get(this.historyMc).wait(1));
        this.chipsBarMc = new lib.chipsBar();
        this.chipsBarMc.setTransform(883.4, 455.8, 1, 1, 0, 0, 0, 173.8, 21.8);
        this.timeline.addTween(cjs.Tween.get(this.chipsBarMc).wait(1));
        this.girlMc = new lib.spaceHolder();
        this.girlMc.setTransform(5, 271, 1, 1, 0, 0, 0, 2, 2);
        this.timeline.addTween(cjs.Tween.get(this.girlMc).wait(1));
        this.pokerBoxMc = new lib.牌盒();
        this.pokerBoxMc.setTransform(946.6, 73.5, 1.087, 1.099, 0, 0, 0, 99.5, 73.2);
        this.instance_1 = new lib.主界面底图();
        this.instance_1.setTransform(525, 340, 1, 1, 0, 0, 0, 525, 340);
        this.instance_2 = new lib.下注区底图();
        this.instance_2.setTransform(523.5, 191.3, 1, 1, 0, 0, 0, 264.5, 108.8);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.pokerBoxMc }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -113.6, 1052, 793.8);
    (lib.bjlskin = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.TableMc();
        this.instance.setTransform(525, 328, 1, 1, 0, 0, 0, 525, 328);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(525, 226.4, 1052, 793.8);
})(bjllib = bjllib || {}, bjlimages = bjlimages || {}, bjlcreatejs = createjs || {}, ss = ss || {});
var bjllib, bjlimages, bjlcreatejs, ss;
(function (lib, img, cjs, ss) {
    var p;
    lib.properties = {
        width: 1050,
        height: 680,
        fps: 24,
        color: "#FFFFFF",
        manifest: []
    };
    (lib._10 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    (lib._2 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    (lib._3 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    (lib._4 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    (lib._5 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    (lib.百家乐1 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    (lib.百家乐2png = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    (lib.百家乐3 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    (lib.百家乐5 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    (lib.百家乐6 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    (lib.百家乐7 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    (lib.百家乐8 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    (lib.图层12 = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    (lib.玛雅风格loadingbg = function () {
        this.spriteSheet = ss["loading_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    (lib.叶子6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.百家乐2png();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 67.3, 43.3);
    (lib.叶子3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.百家乐6();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 160.5, 221.9);
    (lib.叶子2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.百家乐3();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 47.4, 228.1);
    (lib.叶子1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.百家乐5();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 37.8, 33);
    (lib.叶 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib._10();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 13.7, 8.3);
    (lib.百家乐1_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.百家乐1();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 276.5, 282.4);
    (lib.loading条1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib._3();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 575.6, 88.6);
    (lib.loadingbg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib._2();
        this.instance.setTransform(0, 0, 0.686, 0.686);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 652, 48);
    (lib.loading3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFEA00", "#00FF0C"], [0.078, 1], -273, 0, 273, 0).s().p("EgqBABjQgoAAAAg1IAAhbQAAg1AogBMBUCAAAQApABAAA1IAABbQAAA1gpAAg");
        this.shape.setTransform(273, 10.5, 1, 1.05);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 546, 21);
    (lib.loading22 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.图层12();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 13.1, 13.8);
    (lib.loading21 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib._5();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 33.6, 33.7);
    (lib.牌2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.百家乐8();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 144.8, 182.1);
    (lib.牌1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.百家乐7();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 152.3, 186.9);
    (lib.光1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AiMCNQg7g7AAhSQAAhSA7g6QA7g7BRAAQBTAAA7A7QA6A6AABSQAABSg6A7Qg7A7hTAAQhRAAg7g7g");
        this.shape.setTransform(20.1, 20.1);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 40.1, 40.1);
    (lib.标题 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib._4();
        this.instance.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 308, 107.9);
    (lib.叶子5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.叶子1();
        this.instance.setTransform(0.3, 16.4, 1, 1, 0, 0, 0, 0.3, 16.4);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ rotation: 15.5 }, 14, cjs.Ease.get(0.2)).to({ rotation: 16.9 }, 4).to({ regX: 0.4, rotation: -6.5, x: 0.4 }, 15).to({ regX: 0.3, rotation: -9, x: 0.3 }, 3).to({ rotation: 0 }, 15, cjs.Ease.get(0.05)).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 37.8, 33);
    (lib.loading叶 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_125 = function () {
        };
        this.timeline.addTween(cjs.Tween.get(this).wait(125).call(this.frame_125).wait(1));
        this.instance = new lib.叶();
        this.instance.setTransform(196, -3.7, 1, 1, 0, 0, 0, 6.9, 4.1);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ regY: 4, rotation: 609.2, guide: { path: [195.9, -3.6, 184.1, -9.7, 172.9, -3.9, 159.2, 2.9, 144.4, -3.2, 129.6, -9.5, 112.6, -1.8, 95.6, 6.2, 78.3, 0.2, 61, -5.6, 38.7, -1, 16.4, 3.8, -3.2, -1.9, -22.8, -7.3, -27.6, -7.3, -40.1, -7.1, -45.5, -4.1, -61.6, 3.5, -74.6, 1.6, -87.7, -0.2, -91.2, -2, -94.8, -3.6, -105.9, -5.4, -117, -7.1, -134.8, -1.5, -152.6, 4.3, -169.1, 0.8, -172.3, 0, -175.5, -0.8, -189.4, -5.8, -219.9, -0.4, -249.8, 5.1, -267.1, -0.6], orient: 'cw' }, alpha: 0 }, 125).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(189.1, -7.8, 13.7, 8.3);
    (lib.loading2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.loading21();
        this.instance.setTransform(16.8, 16.8, 1, 1, 0, 0, 0, 16.8, 16.8);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 33.6, 33.7);
    (lib.光 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.光1();
        this.instance.setTransform(20.1, 20.1, 1, 1, 0, 0, 0, 20.1, 20.1);
        this.instance.alpha = 0.801;
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ alpha: 0.199 }, 5).to({ alpha: 0.801 }, 5).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 40.1, 40.1);
    (lib.叶2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_109 = function () {
        };
        this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));
        this.instance = new lib.loading叶();
        this.instance.setTransform(-37.4, 1, 1, 1, 0, 0, 0, 195.9, -3.6);
        this.instance._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(98).to({ _off: false }, 0).wait(12));
        this.instance_1 = new lib.loading叶();
        this.instance_1.setTransform(-167, -0.8, 1, 1, 0, 180, 0, 6.9, 4.1);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({ _off: false }, 0).wait(22));
        this.instance_2 = new lib.loading叶();
        this.instance_2.setTransform(-179, -3.6, 1, 1, 0, 180, 0, 6.9, 4.1);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({ _off: false }, 0).wait(34));
        this.instance_3 = new lib.loading叶();
        this.instance_3.setTransform(-204.3, 0.1, 1, 1, 0, 180, 0, 6.9, 4.1);
        this.instance_3._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({ _off: false }, 0).wait(63));
        this.instance_4 = new lib.loading叶();
        this.instance_4.setTransform(-167, -0.8, 1, 1, 0, 180, 0, 6.9, 4.1);
        this.instance_4._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({ _off: false }, 0).wait(51));
        this.instance_5 = new lib.loading叶();
        this.instance_5.setTransform(-2, 8.9, 0.73, 1, 0, 180, 0, 178.9, -2.8);
        this.instance_5._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(68).to({ _off: false }, 0).wait(42));
        this.instance_6 = new lib.loading叶();
        this.instance_6.setTransform(-250.2, -1.1, 1, 1, 0, 180, 0, 6.9, 4.1);
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110));
        this.instance_7 = new lib.loading叶();
        this.instance_7.setTransform(-15.3, 7, 1.146, 1, 0, 180, 0, 195.9, -3.6);
        this.instance_7._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({ _off: false }, 0).wait(94));
        this.instance_8 = new lib.loading叶();
        this.instance_8.setTransform(-90.5, 4.2, 0.5, 1);
        this.instance_8._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({ _off: false }, 0).wait(84));
        this.instance_9 = new lib.loading叶();
        this.instance_9.setTransform(5.5, 0.6, 0.999, 0.816, 0, -4.3, -0.2, 195.8, -3.6);
        this.instance_9._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38).to({ _off: false }, 0).wait(72));
        this.instance_10 = new lib.loading叶();
        this.instance_10.setTransform(-37.4, 1, 0.788, 1, 0, 0, 0, 195.9, -3.6);
        this.instance_10._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({ _off: false }, 0).wait(103));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-68, 2.6, 13.7, 8.3);
    (lib.loading条 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.frame_0 = function () {
            this.stop();
        };
        this.frame_99 = function () {
        };
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));
        this.instance = new lib.loading条1();
        this.instance.setTransform(323.8, 43.3, 1, 1, 0, 0, 0, 287.8, 44.3);
        this.instance.shadow = new cjs.Shadow("rgba(4,0,0,1)", -1, 2, 13);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AEED+IAAg3IAAhjIAAg4IAJAAIABA4IAABjIgBA3g");
        var mask_graphics_1 = new cjs.Graphics().p("ADoD+IAAg3IAAhjIAAg4IBBAAIAAA4IAABjIAAA3g");
        var mask_graphics_2 = new cjs.Graphics().p("ADND+QgBAAAAg3IAAhjQAAg4ABAAIB3AAQABAAAAA4IAABjQAAA3gBAAg");
        var mask_graphics_3 = new cjs.Graphics().p("ACyD+QgBAAAAg3IAAhjQAAg4ABAAICtAAQABAAAAA4IAABjQAAA3gBAAg");
        var mask_graphics_4 = new cjs.Graphics().p("ACXD+QgCAAAAg3IAAhjQAAg4ACAAIDjAAQACAAAAA4IAABjQAAA3gCAAg");
        var mask_graphics_5 = new cjs.Graphics().p("AB8D+QgCAAAAg3IAAhjQAAg4ACAAIEZAAQACAAAAA4IAABjQAAA3gCAAg");
        var mask_graphics_6 = new cjs.Graphics().p("ABhD+QgDAAAAg3IAAhjQAAg4ADAAIFPAAQADAAAAA4IAABjQAAA3gDAAg");
        var mask_graphics_7 = new cjs.Graphics().p("ABGD+QgDAAAAg3IAAhjQAAg4ADAAIGFAAQADAAAAA4IAABjQAAA3gDAAg");
        var mask_graphics_8 = new cjs.Graphics().p("AArD+QgEAAAAg3IAAhjQAAg4AEAAIG7AAQAEAAAAA4IAABjQAAA3gEAAg");
        var mask_graphics_9 = new cjs.Graphics().p("AAPD+QgDAAAAg3IAAhjQAAg4ADAAIHzAAQADAAAAA4IAABjQAAA3gDAAg");
        var mask_graphics_10 = new cjs.Graphics().p("AgKD+QgEAAAAg3IAAhjQAAg4AEAAIInAAQAEAAAAA4IAABjQAAA3gEAAg");
        var mask_graphics_11 = new cjs.Graphics().p("AglD+QgEAAAAg3IAAhjQAAg4AEAAIJdAAQAEAAAAA4IAABjQAAA3gEAAg");
        var mask_graphics_12 = new cjs.Graphics().p("AhAD+QgFAAAAg3IAAhjQAAg4AFAAIKTAAQAFAAAAA4IAABjQAAA3gFAAg");
        var mask_graphics_13 = new cjs.Graphics().p("AhbD+QgFAAAAg3IAAhjQAAg4AFAAILJAAQAFAAAAA4IAABjQAAA3gFAAg");
        var mask_graphics_14 = new cjs.Graphics().p("Ah2D+QgGAAAAg3IAAhjQAAg4AGAAIL/AAQAGAAAAA4IAABjQAAA3gGAAg");
        var mask_graphics_15 = new cjs.Graphics().p("AiRD+QgGAAAAg3IAAhjQAAg4AGAAIM1AAQAGAAAAA4IAABjQAAA3gGAAg");
        var mask_graphics_16 = new cjs.Graphics().p("AisD+QgHAAAAg3IAAhjQAAg4AHAAINrAAQAHAAAAA4IAABjQAAA3gHAAg");
        var mask_graphics_17 = new cjs.Graphics().p("AjID+QgGAAAAg3IAAhjQAAg4AGAAIOiAAQAHAAAAA4IAABjQAAA3gHAAg");
        var mask_graphics_18 = new cjs.Graphics().p("AjjD+QgHAAAAg3IAAhjQAAg4AHAAIPZAAQAHAAAAA4IAABjQAAA3gHAAg");
        var mask_graphics_19 = new cjs.Graphics().p("Aj+D+QgIAAAAg3IAAhjQAAg4AIAAIQPAAQAHAAAAA4IAABjQAAA3gHAAg");
        var mask_graphics_20 = new cjs.Graphics().p("AkZD+QgIAAAAg3IAAhjQAAg4AIAAIRFAAQAIAAAAA4IAABjQAAA3gIAAg");
        var mask_graphics_21 = new cjs.Graphics().p("Ak0D+QgJAAAAg3IAAhjQAAg4AJAAIR7AAQAIAAAAA4IAABjQAAA3gIAAg");
        var mask_graphics_22 = new cjs.Graphics().p("AlPD+QgJAAAAg3IAAhjQAAg4AJAAISxAAQAJAAAAA4IAABjQAAA3gJAAg");
        var mask_graphics_23 = new cjs.Graphics().p("AlqD+QgKAAAAg3IAAhjQAAg4AKAAITnAAQAKAAAAA4IAABjQAAA3gKAAg");
        var mask_graphics_24 = new cjs.Graphics().p("AmFD+QgKAAAAg3IAAhjQAAg4AKAAIUdAAQAKAAAAA4IAABjQAAA3gKAAg");
        var mask_graphics_25 = new cjs.Graphics().p("AmhD+QgKAAAAg3IAAhjQAAg4AKAAIVUAAQALAAAAA4IAABjQAAA3gLAAg");
        var mask_graphics_26 = new cjs.Graphics().p("Am8D+QgKAAAAg3IAAhjQAAg4AKAAIWLAAQAKAAAAA4IAABjQAAA3gKAAg");
        var mask_graphics_27 = new cjs.Graphics().p("AnXD+QgLAAAAg3IAAhjQAAg4ALAAIXBAAQALAAAAA4IAABjQAAA3gLAAg");
        var mask_graphics_28 = new cjs.Graphics().p("AnyD+QgLAAAAg3IAAhjQAAg4ALAAIX3AAQALAAAAA4IAABjQAAA3gLAAg");
        var mask_graphics_29 = new cjs.Graphics().p("AoND+QgMAAAAg3IAAhjQAAg4AMAAIYtAAQAMAAAAA4IAABjQAAA3gMAAg");
        var mask_graphics_30 = new cjs.Graphics().p("AooD+QgMAAAAg3IAAhjQAAg4AMAAIZjAAQAMAAAAA4IAABjQAAA3gMAAg");
        var mask_graphics_31 = new cjs.Graphics().p("ApDD+QgNAAAAg3IAAhjQAAg4ANAAIaZAAQANAAAAA4IAABjQAAA3gNAAg");
        var mask_graphics_32 = new cjs.Graphics().p("ApeD+QgNAAAAg3IAAhjQAAg4ANAAIbPAAQANAAAAA4IAABjQAAA3gNAAg");
        var mask_graphics_33 = new cjs.Graphics().p("Ap6D+QgNAAAAg3IAAhjQAAg4ANAAIcGAAQAOAAAAA4IAABjQAAA3gOAAg");
        var mask_graphics_34 = new cjs.Graphics().p("AqVD+QgNAAAAg3IAAhjQAAg4ANAAIc8AAQAOAAAAA4IAABjQAAA3gOAAg");
        var mask_graphics_35 = new cjs.Graphics().p("AqwD+QgOAAAAg3IAAhjQAAg4AOAAIdzAAQAOAAAAA4IAABjQAAA3gOAAg");
        var mask_graphics_36 = new cjs.Graphics().p("ArLD+QgOAAAAg3IAAhjQAAg4AOAAIepAAQAOAAAAA4IAABjQAAA3gOAAg");
        var mask_graphics_37 = new cjs.Graphics().p("ArmD+QgPAAAAg3IAAhjQAAg4APAAIffAAQAPAAAAA4IAABjQAAA3gPAAg");
        var mask_graphics_38 = new cjs.Graphics().p("AsBD+QgQAAAAg3IAAhjQAAg4AQAAMAgVAAAQAPAAAAA4IAABjQAAA3gPAAg");
        var mask_graphics_39 = new cjs.Graphics().p("AscD+QgQAAAAg3IAAhjQAAg4AQAAMAhLAAAQAQAAAAA4IAABjQAAA3gQAAg");
        var mask_graphics_40 = new cjs.Graphics().p("As3D+QgRAAAAg3IAAhjQAAg4ARAAMAiBAAAQAQAAAAA4IAABjQAAA3gQAAg");
        var mask_graphics_41 = new cjs.Graphics().p("AtTD+QgQAAAAg3IAAhjQAAg4AQAAMAi4AAAQARAAAAA4IAABjQAAA3gRAAg");
        var mask_graphics_42 = new cjs.Graphics().p("AtuD+QgRAAAAg3IAAhjQAAg4ARAAMAjuAAAQARAAAAA4IAABjQAAA3gRAAg");
        var mask_graphics_43 = new cjs.Graphics().p("AuJD+QgRAAAAg3IAAhjQAAg4ARAAMAklAAAQARAAAAA4IAABjQAAA3gRAAg");
        var mask_graphics_44 = new cjs.Graphics().p("AukD+QgSAAAAg3IAAhjQAAg4ASAAMAlbAAAQARAAAAA4IAABjQAAA3gRAAg");
        var mask_graphics_45 = new cjs.Graphics().p("Au/D+QgSAAAAg3IAAhjQAAg4ASAAMAmRAAAQASAAAAA4IAABjQAAA3gSAAg");
        var mask_graphics_46 = new cjs.Graphics().p("AvaD+QgTAAAAg3IAAhjQAAg4ATAAMAnHAAAQATAAAAA4IAABjQAAA3gTAAg");
        var mask_graphics_47 = new cjs.Graphics().p("Av1D+QgTAAAAg3IAAhjQAAg4ATAAMAn9AAAQATAAAAA4IAABjQAAA3gTAAg");
        var mask_graphics_48 = new cjs.Graphics().p("AwQD+QgUAAAAg3IAAhjQAAg4AUAAMAozAAAQAUAAAAA4IAABjQAAA3gUAAg");
        var mask_graphics_49 = new cjs.Graphics().p("AwsD+QgTAAAAg3IAAhjQAAg4ATAAMApqAAAQAUAAAAA4IAABjQAAA3gUAAg");
        var mask_graphics_50 = new cjs.Graphics().p("AxHD+QgUAAAAg3IAAhjQAAg4AUAAMAqgAAAQAVAAAAA4IAABjQAAA3gVAAg");
        var mask_graphics_51 = new cjs.Graphics().p("AxiD+QgUAAAAg3IAAhjQAAg4AUAAMArXAAAQAUAAAAA4IAABjQAAA3gUAAg");
        var mask_graphics_52 = new cjs.Graphics().p("Ax9D+QgVAAAAg3IAAhjQAAg4AVAAMAsNAAAQAVAAAAA4IAABjQAAA3gVAAg");
        var mask_graphics_53 = new cjs.Graphics().p("AyYD+QgVAAAAg3IAAhjQAAg4AVAAMAtDAAAQAVAAAAA4IAABjQAAA3gVAAg");
        var mask_graphics_54 = new cjs.Graphics().p("AyzD+QgWAAAAg3IAAhjQAAg4AWAAMAt5AAAQAWAAAAA4IAABjQAAA3gWAAg");
        var mask_graphics_55 = new cjs.Graphics().p("AzOD+QgXAAAAg3IAAhjQAAg4AXAAMAuvAAAQAWAAAAA4IAABjQAAA3gWAAg");
        var mask_graphics_56 = new cjs.Graphics().p("AzpD+QgXAAAAg3IAAhjQAAg4AXAAMAvlAAAQAXAAAAA4IAABjQAAA3gXAAg");
        var mask_graphics_57 = new cjs.Graphics().p("A0FD+QgXAAAAg3IAAhjQAAg4AXAAMAwcAAAQAXAAAAA4IAABjQAAA3gXAAg");
        var mask_graphics_58 = new cjs.Graphics().p("A0gD+QgXAAAAg3IAAhjQAAg4AXAAMAxSAAAQAYAAAAA4IAABjQAAA3gYAAg");
        var mask_graphics_59 = new cjs.Graphics().p("A07D+QgYAAAAg3IAAhjQAAg4AYAAMAyIAAAQAYAAAAA4IAABjQAAA3gYAAg");
        var mask_graphics_60 = new cjs.Graphics().p("A1WD+QgYAAAAg3IAAhjQAAg4AYAAMAy/AAAQAYAAAAA4IAABjQAAA3gYAAg");
        var mask_graphics_61 = new cjs.Graphics().p("A1xD+QgZAAAAg3IAAhjQAAg4AZAAMAz1AAAQAYAAAAA4IAABjQAAA3gYAAg");
        var mask_graphics_62 = new cjs.Graphics().p("A2MD+QgZAAAAg3IAAhjQAAg4AZAAMA0rAAAQAZAAAAA4IAABjQAAA3gZAAg");
        var mask_graphics_63 = new cjs.Graphics().p("A2nD+QgaAAAAg3IAAhjQAAg4AaAAMA1hAAAQAZAAAAA4IAABjQAAA3gZAAg");
        var mask_graphics_64 = new cjs.Graphics().p("A3CD+QgaAAAAg3IAAhjQAAg4AaAAMA2XAAAQAaAAAAA4IAABjQAAA3gaAAg");
        var mask_graphics_65 = new cjs.Graphics().p("A3eD+QgaAAAAg3IAAhjQAAg4AaAAMA3OAAAQAaAAAAA4IAABjQAAA3gaAAg");
        var mask_graphics_66 = new cjs.Graphics().p("A35D+QgaAAAAg3IAAhjQAAg4AaAAMA4EAAAQAbAAAAA4IAABjQAAA3gbAAg");
        var mask_graphics_67 = new cjs.Graphics().p("A4UD+QgbAAAAg3IAAhjQAAg4AbAAMA46AAAQAcAAAAA4IAABjQAAA3gcAAg");
        var mask_graphics_68 = new cjs.Graphics().p("A4vD+QgbAAAAg3IAAhjQAAg4AbAAMA5xAAAQAbAAAAA4IAABjQAAA3gbAAg");
        var mask_graphics_69 = new cjs.Graphics().p("A5KD+QgcAAAAg3IAAhjQAAg4AcAAMA6nAAAQAcAAAAA4IAABjQAAA3gcAAg");
        var mask_graphics_70 = new cjs.Graphics().p("A5lD+QgcAAAAg3IAAhjQAAg4AcAAMA7dAAAQAcAAAAA4IAABjQAAA3gcAAg");
        var mask_graphics_71 = new cjs.Graphics().p("A6AD+QgdAAAAg3IAAhjQAAg4AdAAMA8TAAAQAdAAAAA4IAABjQAAA3gdAAg");
        var mask_graphics_72 = new cjs.Graphics().p("A6bD+QgdAAgBg3IAAhjQABg4AdAAMA9JAAAQAdAAAAA4IAABjQAAA3gdAAg");
        var mask_graphics_73 = new cjs.Graphics().p("A63D+QgdAAAAg3IAAhjQAAg4AdAAMA+AAAAQAeAAAAA4IAABjQAAA3geAAg");
        var mask_graphics_74 = new cjs.Graphics().p("A7SD+QgeAAAAg3IAAhjQAAg4AeAAMA+2AAAQAeAAAAA4IAABjQAAA3geAAg");
        var mask_graphics_75 = new cjs.Graphics().p("A7tD+QgeAAAAg3IAAhjQAAg4AeAAMA/sAAAQAfAAAAA4IAABjQAAA3gfAAg");
        var mask_graphics_76 = new cjs.Graphics().p("A8ID+QgfAAAAg3IAAhjQAAg4AfAAMBAiAAAQAfAAAAA4IAABjQAAA3gfAAg");
        var mask_graphics_77 = new cjs.Graphics().p("A8jD+QgfAAAAg3IAAhjQAAg4AfAAMBBZAAAQAfAAAAA4IAABjQAAA3gfAAg");
        var mask_graphics_78 = new cjs.Graphics().p("A8+D+QggAAAAg3IAAhjQAAg4AgAAMBCPAAAQAfAAAAA4IAABjQAAA3gfAAg");
        var mask_graphics_79 = new cjs.Graphics().p("A9ZD+QggAAAAg3IAAhjQAAg4AgAAMBDFAAAQAgAAAAA4IAABjQAAA3ggAAg");
        var mask_graphics_80 = new cjs.Graphics().p("A90D+QghAAAAg3IAAhjQAAg4AhAAMBD7AAAQAgAAAAA4IAABjQAAA3ggAAg");
        var mask_graphics_81 = new cjs.Graphics().p("A+QD+QggAAAAg3IAAhjQAAg4AgAAMBEyAAAQAhAAAAA4IAABjQAAA3ghAAg");
        var mask_graphics_82 = new cjs.Graphics().p("A+rD+QghAAAAg3IAAhjQAAg4AhAAMBFoAAAQAhAAAAA4IAABjQAAA3ghAAg");
        var mask_graphics_83 = new cjs.Graphics().p("A/GD+QghAAAAg3IAAhjQAAg4AhAAMBGeAAAQAiAAAAA4IAABjQAAA3giAAg");
        var mask_graphics_84 = new cjs.Graphics().p("A/hD+QgiAAAAg3IAAhjQAAg4AiAAMBHUAAAQAiAAAAA4IAABjQAAA3giAAg");
        var mask_graphics_85 = new cjs.Graphics().p("A/8D+QgiAAAAg3IAAhjQAAg4AiAAMBILAAAQAiAAAAA4IAABjQAAA3giAAg");
        var mask_graphics_86 = new cjs.Graphics().p("EggXAD+QgjAAAAg3IAAhjQAAg4AjAAMBJBAAAQAiAAAAA4IAABjQAAA3giAAg");
        var mask_graphics_87 = new cjs.Graphics().p("EggyAD+QgjAAAAg3IAAhjQAAg4AjAAMBJ3AAAQAjAAAAA4IAABjQAAA3gjAAg");
        var mask_graphics_88 = new cjs.Graphics().p("EghNAD+QgkAAAAg3IAAhjQAAg4AkAAMBKtAAAQAjAAAAA4IAABjQAAA3gjAAg");
        var mask_graphics_89 = new cjs.Graphics().p("EghpAD+QgjAAAAg3IAAhjQAAg4AjAAMBLkAAAQAkAAAAA4IAABjQAAA3gkAAg");
        var mask_graphics_90 = new cjs.Graphics().p("EgiEAD+QgkAAAAg3IAAhjQAAg4AkAAMBMaAAAQAlAAAAA4IAABjQAAA3glAAg");
        var mask_graphics_91 = new cjs.Graphics().p("EgifAD+QglAAAAg3IAAhjQAAg4AlAAMBNQAAAQAlAAAAA4IAABjQAAA3glAAg");
        var mask_graphics_92 = new cjs.Graphics().p("Egi6AD+QglAAAAg3IAAhjQAAg4AlAAMBOGAAAQAmAAAAA4IAABjQAAA3gmAAg");
        var mask_graphics_93 = new cjs.Graphics().p("EgjVAD+QgmAAAAg3IAAhjQAAg4AmAAMBO9AAAQAlAAAAA4IAABjQAAA3glAAg");
        var mask_graphics_94 = new cjs.Graphics().p("EgjwAD+QgmAAAAg3IAAhjQAAg4AmAAMBPzAAAQAmAAAAA4IAABjQAAA3gmAAg");
        var mask_graphics_95 = new cjs.Graphics().p("EgkLAD+QgnAAAAg3IAAhjQAAg4AnAAMBQpAAAQAmAAAAA4IAABjQAAA3gmAAg");
        var mask_graphics_96 = new cjs.Graphics().p("EgkmAD+QgnAAAAg3IAAhjQAAg4AnAAMBRfAAAQAnAAAAA4IAABjQAAA3gnAAg");
        var mask_graphics_97 = new cjs.Graphics().p("EglCAD+QgnAAAAg3IAAhjQAAg4AnAAMBSWAAAQAnAAAAA4IAABjQAAA3gnAAg");
        var mask_graphics_98 = new cjs.Graphics().p("EgldAD+QgnAAAAg3IAAhjQAAg4AnAAMBTMAAAQAoAAAAA4IAABjQAAA3goAAg");
        var mask_graphics_99 = new cjs.Graphics().p("Egl4AD+QgoAAABg3IAAhjQgBg4AoAAMBUCAAAQApAAAAA4IAABjQAAA3gpAAg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: mask_graphics_0, x: 27, y: 25.5 }).wait(1).to({ graphics: mask_graphics_1, x: 29.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_2, x: 32.5, y: 25.5 }).wait(1).to({ graphics: mask_graphics_3, x: 35.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_4, x: 38, y: 25.5 }).wait(1).to({ graphics: mask_graphics_5, x: 40.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_6, x: 43.5, y: 25.5 }).wait(1).to({ graphics: mask_graphics_7, x: 46.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_8, x: 49, y: 25.5 }).wait(1).to({ graphics: mask_graphics_9, x: 51.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_10, x: 54.5, y: 25.5 }).wait(1).to({ graphics: mask_graphics_11, x: 57.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_12, x: 60, y: 25.5 }).wait(1).to({ graphics: mask_graphics_13, x: 62.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_14, x: 65.5, y: 25.5 }).wait(1).to({ graphics: mask_graphics_15, x: 68.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_16, x: 71, y: 25.5 }).wait(1).to({ graphics: mask_graphics_17, x: 73.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_18, x: 76.5, y: 25.5 }).wait(1).to({ graphics: mask_graphics_19, x: 79.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_20, x: 82, y: 25.5 }).wait(1).to({ graphics: mask_graphics_21, x: 84.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_22, x: 87.5, y: 25.5 }).wait(1).to({ graphics: mask_graphics_23, x: 90.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_24, x: 93.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_25, x: 95.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_26, x: 98.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_27, x: 101.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_28, x: 104.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_29, x: 106.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_30, x: 109.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_31, x: 112.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_32, x: 115.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_33, x: 117.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_34, x: 120.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_35, x: 123.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_36, x: 126.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_37, x: 128.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_38, x: 131.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_39, x: 134.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_40, x: 137.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_41, x: 139.8, y: 25.5 }).wait(1).to({ graphics: mask_graphics_42, x: 142.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_43, x: 145.3, y: 25.5 }).wait(1).to({ graphics: mask_graphics_44, x: 148.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_45, x: 150.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_46, x: 153.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_47, x: 156.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_48, x: 159.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_49, x: 161.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_50, x: 164.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_51, x: 167.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_52, x: 170.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_53, x: 172.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_54, x: 175.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_55, x: 178.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_56, x: 181.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_57, x: 183.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_58, x: 186.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_59, x: 189.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_60, x: 192.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_61, x: 194.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_62, x: 197.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_63, x: 200.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_64, x: 203.1, y: 25.5 }).wait(1).to({ graphics: mask_graphics_65, x: 205.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_66, x: 208.6, y: 25.5 }).wait(1).to({ graphics: mask_graphics_67, x: 211.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_68, x: 214.2, y: 25.5 }).wait(1).to({ graphics: mask_graphics_69, x: 216.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_70, x: 219.7, y: 25.5 }).wait(1).to({ graphics: mask_graphics_71, x: 222.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_72, x: 225.2, y: 25.5 }).wait(1).to({ graphics: mask_graphics_73, x: 227.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_74, x: 230.7, y: 25.5 }).wait(1).to({ graphics: mask_graphics_75, x: 233.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_76, x: 236.2, y: 25.5 }).wait(1).to({ graphics: mask_graphics_77, x: 238.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_78, x: 241.7, y: 25.5 }).wait(1).to({ graphics: mask_graphics_79, x: 244.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_80, x: 247.2, y: 25.5 }).wait(1).to({ graphics: mask_graphics_81, x: 249.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_82, x: 252.7, y: 25.5 }).wait(1).to({ graphics: mask_graphics_83, x: 255.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_84, x: 258.2, y: 25.5 }).wait(1).to({ graphics: mask_graphics_85, x: 260.9, y: 25.5 }).wait(1).to({ graphics: mask_graphics_86, x: 263.7, y: 25.5 }).wait(1).to({ graphics: mask_graphics_87, x: 266.4, y: 25.5 }).wait(1).to({ graphics: mask_graphics_88, x: 269.2, y: 25.5 }).wait(1).to({ graphics: mask_graphics_89, x: 272, y: 25.5 }).wait(1).to({ graphics: mask_graphics_90, x: 274.7, y: 25.5 }).wait(1).to({ graphics: mask_graphics_91, x: 277.5, y: 25.5 }).wait(1).to({ graphics: mask_graphics_92, x: 280.2, y: 25.5 }).wait(1).to({ graphics: mask_graphics_93, x: 283, y: 25.5 }).wait(1).to({ graphics: mask_graphics_94, x: 285.7, y: 25.5 }).wait(1).to({ graphics: mask_graphics_95, x: 288.5, y: 25.5 }).wait(1).to({ graphics: mask_graphics_96, x: 291.2, y: 25.5 }).wait(1).to({ graphics: mask_graphics_97, x: 294, y: 25.5 }).wait(1).to({ graphics: mask_graphics_98, x: 296.7, y: 25.5 }).wait(1).to({ graphics: mask_graphics_99, x: 299.5, y: 25.5 }).wait(1));
        this.instance_1 = new lib.loading3();
        this.instance_1.setTransform(326, 39, 1, 1, 0, 0, 0, 273, 9);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 6);
        this.instance_1.mask = mask;
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));
        this.instance_2 = new lib.loading22();
        this.instance_2.setTransform(618.8, 39.9, 1, 1, 0, 0, 0, 6.5, 6.9);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));
        this.instance_3 = new lib.loading2();
        this.instance_3.setTransform(618.8, 39.8, 1, 1, 0, 0, 0, 16.8, 16.8);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ rotation: 720 }, 99).wait(1));
        this.instance_4 = new lib.叶2();
        this.instance_4.setTransform(583.4, 36.5);
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));
        this.instance_5 = new lib.loadingbg();
        this.instance_5.setTransform(326, 40, 1, 1, 0, 0, 0, 326, 24);
        this.instance_5.shadow = new cjs.Shadow("rgba(4,0,0,1)", -3, 6, 12);
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-17, -14, 682, 120);
    (lib.GameLoading = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.叶子5();
        this.instance.setTransform(400.9, 227.7, 1, 1, 115.6, 0, 0, 18.2, 19.7);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", -3, 2, 12);
        this.instance_1 = new lib.叶子2();
        this.instance_1.setTransform(418.2, 222.3, 1, 1, 0, 0, 0, 24, 113.7);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)", -3, 2, 12);
        this.instance_2 = new lib.标题();
        this.instance_2.setTransform(515.8, 382.9, 1, 1, 0, 0, 0, 147.8, 51.9);
        this.instance_2.shadow = new cjs.Shadow("rgba(4,0,0,1)", 0, 4, 7);
        this.instance_3 = new lib.叶子6();
        this.instance_3.setTransform(552.7, 90.3, 1, 1, 0, 0, 0, 33.6, 21.7);
        this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)", -3, 2, 12);
        this.instance_4 = new lib.叶子5();
        this.instance_4.setTransform(584.2, 281.8, 1, 1, 0, 0, 0, 18.9, 16.5);
        this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)", -3, 2, 12);
        this.instance_5 = new lib.叶子3();
        this.instance_5.setTransform(577.8, 259.3, 1, 1, 0, 0, 0, 80.3, 111);
        this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)", -3, 2, 12);
        this.instance_6 = new lib.牌1();
        this.instance_6.setTransform(557.8, 193.4, 1, 1, 0, 0, 0, 76.2, 93.4);
        this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)", -3, 2, 12);
        this.instance_7 = new lib.牌2();
        this.instance_7.setTransform(495.6, 202.1, 1, 1, 0, 0, 0, 72.4, 91);
        this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)", -3, 2, 12);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_7 }, { t: this.instance_6 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }] }).wait(1));
        this.instance_8 = new lib.光();
        this.instance_8.setTransform(596.1, 221.1, 1, 1, 0, 0, 0, 20.1, 20.1);
        this.instance_9 = new lib.光();
        this.instance_9.setTransform(449.1, 219.1, 1, 1, 0, 0, 0, 20.1, 20.1);
        this.instance_10 = new lib.光();
        this.instance_10.setTransform(523.5, 300, 1, 1, 0, 0, 0, 20.1, 20.1);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_10 }, { t: this.instance_9 }, { t: this.instance_8 }] }).wait(1));
        this.instance_11 = new lib.百家乐1_1();
        this.instance_11.setTransform(522.6, 218.2, 1, 1, 0, 0, 0, 138.2, 141.2);
        this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)", -3, 2, 12);
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));
        this.messageTxt = new cjs.Text("正在登录服务器，请稍后...", "14px 'Microsoft YaHei'", "#947968");
        this.messageTxt.name = "messageTxt";
        this.messageTxt.textAlign = "center";
        this.messageTxt.lineHeight = 20;
        this.messageTxt.lineWidth = 247;
        this.messageTxt.setTransform(522.3, 581);
        this.progressTxt = new cjs.Text("", "14px 'Microsoft YaHei'", "#FFFFEF");
        this.progressTxt.name = "progressTxt";
        this.progressTxt.textAlign = "center";
        this.progressTxt.lineHeight = 20;
        this.progressTxt.lineWidth = 44;
        this.progressTxt.setTransform(523, 532);
        this.progressTxt.shadow = new cjs.Shadow("rgba(148,101,31,1)", 0, 0, 4);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.progressTxt }, { t: this.messageTxt }] }).wait(1));
        this.progressMc = new lib.loading条();
        this.progressMc.setTransform(525, 548, 1, 1, 0, 0, 0, 326, 44.3);
        this.timeline.addTween(cjs.Tween.get(this.progressMc).wait(1));
        this.instance_12 = new lib.玛雅风格loadingbg();
        this.instance_12.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1049.6, 680.2);
    (lib.loading = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.GameLoading();
        this.instance.setTransform(524.8, 340.1, 1, 1, 0, 0, 0, 524.8, 340.1);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(525, 340, 1049.6, 680.2);
})(loadinglib = loadinglib || {}, loadingimages = loadingimages || {}, loadingcreatejs = createjs || {}, ss = ss || {});
var loadinglib, loadingimages, loadingcreatejs, ss;
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
    var ChangeModuleCommand = (function (_super) {
        __extends(ChangeModuleCommand, _super);
        function ChangeModuleCommand() {
            _super.call(this);
        }
        ChangeModuleCommand.prototype.execute = function (notification) {
            var skinmeiator = this.facade.retrieveMediator(SkinMediator.NAME);
            skinmeiator.showScene(notification.getBody());
        };
        return ChangeModuleCommand;
    }(puremvc.SimpleCommand));
    game.ChangeModuleCommand = ChangeModuleCommand;
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
            this.facade.registerMediator(new game.LoadingMeidator(this.facade.stage._loadingLayer));
            this.facade.registerMediator(new TestMeidator(this.facade.stage));
            this.facade.registerMediator(new SkinMediator(this.facade.stage._screenLayer));
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    game.ViewPrepCommand = ViewPrepCommand;
})(game || (game = {}));
var ResManager = (function () {
    function ResManager() {
    }
    ResManager.removeElement = function (resName) { };
    ;
    ResManager.hasElement = function (resName, mediatorName) {
        var resName = ResManager.contactId(resName, mediatorName);
        var arr = this.getCurrentdic();
        return arr[resName];
    };
    ;
    ResManager.delElement = function (resName, mediatorName) {
        var resName = ResManager.contactId(resName, mediatorName);
        var arr = this.getCurrentdic();
        this.name;
        if (arr[resName]) {
            arr[resName] = null;
        }
    };
    ;
    ResManager.getCurrentdic = function () {
        var className = this.getFuncName(this);
        var arr;
        switch (className) {
            case "SSResourceManager":
                arr = SSResourceManager.objectarr;
                break;
            case "SoundResManager":
                arr = SoundResManager.objectarr;
                break;
            case "VideoResManager":
                arr = VideoResManager.objectarr;
                break;
        }
        return arr;
    };
    ResManager.getFuncName = function (func) {
        var funcName = String(func);
        return funcName.match(/function\s*([^(]*)\(/)[1];
    };
    ResManager.contactId = function (spriteName, mediatorName) {
        if (!mediatorName)
            mediatorName = "";
        mediatorName = mediatorName.replace(" ", "");
        spriteName = spriteName.replace(" ", "");
        if (!spriteName) {
            throw new Error("资源id 不能为空:" + spriteName);
        }
        var spriteName = spriteName + mediatorName;
        return spriteName;
    };
    ResManager.name = "";
    return ResManager;
}());
var SoundResManager = (function (_super) {
    __extends(SoundResManager, _super);
    function SoundResManager() {
        _super.call(this);
        createjs.Sound.alternateExtensions = ["mp3"];
    }
    Object.defineProperty(SoundResManager, "objectarr", {
        get: function () {
            return SoundResManager.soundDic;
        },
        enumerable: true,
        configurable: true
    });
    SoundResManager.createSound = function (soundPath, soundName, soundLoadComplete, that) {
        createjs.Sound.on(soundName, soundLoadComplete, that);
        var msound = createjs.Sound.registerSound(soundPath, soundName);
        SoundResManager.soundDic[soundName] = soundName;
        return msound;
    };
    SoundResManager.playSound = function (id, loop) {
        return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    };
    SoundResManager.soundDic = new Array();
    return SoundResManager;
}(ResManager));
var MSound = (function () {
    function MSound() {
    }
    return MSound;
}());
var game;
(function (game) {
    var LoadingMeidator = (function (_super) {
        __extends(LoadingMeidator, _super);
        function LoadingMeidator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this, LoadingMeidator.NAME, viewComponent);
            Config.loadingIndex = this;
        }
        LoadingMeidator.prototype.listNotificationInterests = function () {
            return [
                "showLoadingPanel"
            ];
        };
        LoadingMeidator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            console.log("LoadingMeidator 响应成功", notification.getName());
            switch (notification.getName()) {
                case "showLoadingPanel":
                    this.usecreatejsSource();
                    break;
            }
        };
        LoadingMeidator.prototype.usecreatejsSource = function () {
            loadingcreatejs.MotionGuidePlugin.install();
            loadingimages = loadingimages || {};
            ss = ss || {};
            var loader = new loadingcreatejs.LoadQueue();
            loader.addEventListener("fileload", this.handleFileLoad);
            loader.addEventListener("complete", this.handleComplete.bind(this));
            loader.loadFile({ src: "../../../../egame/images/loading_atlas_.json?1463196773695", type: "spritesheet", id: "loading_atlas_" }, true);
            loader.loadManifest(loadinglib.properties.manifest);
        };
        LoadingMeidator.prototype.handleFileLoad = function (evt) {
            if (evt.item.type == "image") {
                loadingimages[evt.item.id] = evt.result;
            }
            console.log("加载资源完毕:" + evt.item.type + " :" + evt.item.id);
        };
        LoadingMeidator.prototype.handleComplete = function (evt) {
            var queue = evt.target;
            ss["loading_atlas_"] = queue.getResult("loading_atlas_");
            this.exportRoot = new loadinglib.loading();
            this.viewComponent.addChild(this.exportRoot);
            this.startLoadGameRes();
        };
        LoadingMeidator.prototype.startLoadGameRes = function () {
            var queaue = this.resourceLoader = new createjs.LoadQueue(true);
            var loadItems = [
                { id: "pic", src: "/images/Chrysanthemum.jpg" },
                { id: "winspritesheet", src: "/egame/images/win2.json" }
            ];
            queaue.loadFile({ src: "/egame/images/win2.json", type: "spritesheet", id: "winspritesheet2" }, true);
            queaue.loadFile({ src: "/egame/images/bjlskin_atlas_.json", type: "spritesheet", id: "bjlskin" }, true);
            queaue.addEventListener("fileload", this.handleResFileLoad.bind(this));
            queaue.addEventListener("complete", this.handleResComplete.bind(this));
            queaue.loadManifest(loadItems, false);
            queaue.load();
        };
        LoadingMeidator.prototype.handleResFileLoad = function (evt) {
            LoadingMeidator.loadedResArr[LoadingMeidator.loadedResArr.length] =
                {
                    id: evt.item.id, res: evt.result, types: evt.item.type
                };
            console.log("加载资源完毕:" + evt.item.type + " :" + evt.item.id);
            this.loadlog(evt.item.type + " :" + evt.item.id);
            var frameNumber = Math.floor(LoadingMeidator.loadedResArr.length / 3 * 99);
            console.log(frameNumber);
            this.exportRoot.instance.progressMc.gotoAndStop(frameNumber);
            this.exportRoot.instance.messageTxt.text = evt.item.type + " :" + evt.item.id + ":加载完毕";
        };
        LoadingMeidator.prototype.handleResComplete = function (evt) {
            console.log("所有游戏资源加载完毕");
            var data = { ss: this.resourceLoader.getResult("bjlskin"), type: "bjlskin" };
            this.sendNotification(game.AppFacade.CHANGGAMETYPE, data);
            this.viewComponent.removeAllChildren();
        };
        LoadingMeidator.prototype.loadlog = function (str) {
            $("#content textarea").append("    " + str + "<br/>");
        };
        LoadingMeidator.NAME = "LoadingMeidator";
        LoadingMeidator.loadedResArr = [];
        return LoadingMeidator;
    }(puremvc.Mediator));
    game.LoadingMeidator = LoadingMeidator;
})(game || (game = {}));
var SkinMediator = (function (_super) {
    __extends(SkinMediator, _super);
    function SkinMediator(viewComponent) {
        if (viewComponent === void 0) { viewComponent = null; }
        _super.call(this, SkinMediator.NAME, viewComponent);
        this.resourceLoader = new createjs.LoadQueue();
        this.resourceLoader.addEventListener("fileload", this.handleFileLoad.bind(this));
        this.resourceLoader.addEventListener("complete", this.handleComplete.bind(this));
    }
    SkinMediator.prototype.listNotificationInterests = function () {
        return [
            "showSkinPanel"
        ];
    };
    SkinMediator.prototype.handleNotification = function (notification) {
        var data = notification.getBody();
        console.log("SkinMediator 响应成功", notification.getName());
        switch (notification.getName()) {
            case "showSkinPanel":
                break;
        }
    };
    SkinMediator.prototype.showScene = function (data) {
        ss = ss || {};
        var ssKey = "";
        if (!data["type"]) {
            throw new Error("游戏类型不能为空.");
        }
        switch (data["type"]) {
            case "bjlskin":
                ssKey = "bjlskin_atlas_";
                this._currentLib = bjllib;
                break;
        }
        ss[ssKey] = data["ss"];
        this._currentScene = new bjllib.bjlskin();
        this.viewComponent.addChild(this._currentScene);
        this.resourceLoader.type = ssKey;
        this.loadSceneRes();
    };
    SkinMediator.prototype.loadSceneRes = function () {
        this.resourceLoader.loadManifest(this._currentLib.properties.manifest, false);
        this.resourceLoader.load();
    };
    SkinMediator.prototype.handleFileLoad = function (evt) {
        console.log("加载资源: " + evt.item.type + " :" + evt.item.id + "完毕");
    };
    SkinMediator.prototype.handleComplete = function (evt) {
        var queue = evt.target;
        console.log(queue.type + "所有游戏资源加载完毕");
    };
    SkinMediator.NAME = "SkinMediator";
    return SkinMediator;
}(puremvc.Mediator));
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
var LayOutContainer = (function (_super) {
    __extends(LayOutContainer, _super);
    function LayOutContainer() {
        _super.call(this);
        this._debugShow = false;
        this.addEventListener("added", this.addToStageHandler.bind(this));
    }
    LayOutContainer.prototype.addToStageHandler = function (evt) {
        this.index = this.parent.getChildIndex(this);
        this.createDisplyText();
    };
    LayOutContainer.prototype.createDisplyText = function () {
        if (this.txt) {
            return;
        }
        this.txt = new createjs.Text("", "15px Arial", "#ff7700");
        this.txt.text = "name:" + this.name + "  postion:" + this.index + " parent:" + this.parent.name;
        this.txt.lineWidth = 500;
        this.txt.lineHeight = 70;
        this.txt.y = this.index * 50;
        this.addChild(this.txt);
        this.txt.visible = this._debugShow;
    };
    LayOutContainer.prototype.drawBg = function () {
    };
    LayOutContainer.prototype.showPostion = function (bln) {
        this._debugShow = bln;
        this.txt.visible = this._debugShow;
    };
    return LayOutContainer;
}(createjs.Container));
var SSResourceManager = (function (_super) {
    __extends(SSResourceManager, _super);
    function SSResourceManager() {
        _super.call(this);
    }
    Object.defineProperty(SSResourceManager, "objectarr", {
        get: function () {
            return SSResourceManager.strDic;
        },
        enumerable: true,
        configurable: true
    });
    SSResourceManager.createSprite = function (res, spriteName, mediatorName) {
        spriteName = SSResourceManager.contactId(spriteName, mediatorName);
        var sprite;
        if (SSResourceManager.strDic[spriteName]) {
            sprite = SSResourceManager.strDic[spriteName].msprite;
        }
        else {
            if (res instanceof createjs.SpriteSheet) {
                var spritesheet = res;
            }
            else if (res instanceof Object) {
                var spritesheet = new createjs.SpriteSheet(res);
            }
            sprite = new createjs.Sprite(spritesheet);
            SSResourceManager.strDic[spriteName] = new SSSprite(spriteName, sprite);
        }
        return sprite;
    };
    SSResourceManager.createBitmap = function (img, spriteName) {
        var bitmap;
        if (SSResourceManager.strDic[spriteName]) {
            bitmap = SSResourceManager.strDic[spriteName].msprite;
        }
        else {
            bitmap = new createjs.Bitmap(img);
            SSResourceManager.strDic[spriteName] = new SSSprite(spriteName, bitmap);
        }
        bitmap = new createjs.Bitmap(img);
        return bitmap;
    };
    SSResourceManager.getBitmap = function (img) {
        var bitmap;
        bitmap = new createjs.Bitmap(img);
        return bitmap;
    };
    SSResourceManager.getSprite = function (spriteName, mediatorName) {
        spriteName = SSResourceManager.contactId(spriteName, mediatorName);
        var sprite;
        if (SSResourceManager.strDic[spriteName]) {
            sprite = SSResourceManager.strDic[spriteName].msprite;
        }
        return sprite;
    };
    SSResourceManager.strDic = new Array();
    SSResourceManager.name = "SSResourceManager";
    return SSResourceManager;
}(ResManager));
var SSSprite = (function () {
    function SSSprite(_name, _sprite) {
        this.name = _name;
        this.msprite = _sprite;
    }
    return SSSprite;
}());
var exampledata = {
    images: ["sprites.jpg"],
    frames: { width: 50, height: 50 },
    animations: {
        stand: 0,
        run: [1, 5],
        jump: [6, 8, "run"]
    }
};
var VideoResManager = (function (_super) {
    __extends(VideoResManager, _super);
    function VideoResManager() {
        _super.call(this);
    }
    Object.defineProperty(VideoResManager, "objectarr", {
        get: function () {
            return VideoResManager.videoDic;
        },
        enumerable: true,
        configurable: true
    });
    VideoResManager.getHVideo = function (videoId) {
        if (this.videoDic[videoId]) {
            var lVideo = this.videoDic[videoId].hVideo;
        }
        else {
            var lVideo = document.getElementById(videoId);
        }
        if (!lVideo) {
            console.log("没有找到元素:" + videoId);
            return null;
        }
        if (this.videoDic[videoId]) {
            var lVideoDOMElement = this.videoDic[videoId].csVideo;
        }
        else {
            var lVideoDOMElement = new createjs.DOMElement(videoId);
        }
        if (!this.videoDic[videoId]) {
            this.videoDic[videoId] = new MVideo(videoId, lVideo, lVideoDOMElement);
        }
        ;
        return this.videoDic[videoId].hVideo;
    };
    VideoResManager.getCSVideo = function (videoId) {
        if (this.videoDic[videoId]) {
            var lVideoDOMElement = this.videoDic[videoId].csVideo;
        }
        else {
            var lVideoDOMElement = null;
            console.log(videoId + "不存在");
        }
        return lVideoDOMElement;
    };
    VideoResManager.createDOMElementVideo = function (lWidth, lHeight, lVideoPath, parentid) {
        var lParent = document.getElementById(parentid);
        if (!lParent) {
            var lMesg = "SWElementVideo.prototype.createDOMElementVideo:: Attempting to add a new video element to the DOM, however, unable to find specified DOM parent element [" + parentid + "] ";
            return null;
        }
        if (this.videoDic[parentid]) {
            var lVideo = this.videoDic[parentid].hVideo;
        }
        else {
            var lVideo = document.createElement('video');
        }
        lVideo.src = lVideoPath;
        lVideo.hidden = false;
        lVideo.width = lWidth;
        lVideo.height = lHeight;
        lVideo.volume = 1;
        lVideo.controls = true;
        lVideo.pause();
        var self = this;
        lVideo.addEventListener("error", function (evt) {
            var lErrMesg = "Error::SWElementVideo:: Error loading video element, event.type [" + evt.type + "] Media Details: [" + evt.target + "]";
            console.log(lErrMesg);
        });
        lParent.appendChild(lVideo);
        if (this.videoDic[parentid]) {
            var lVideoDOMElement = this.videoDic[parentid].csVideo;
        }
        else {
            var lVideoDOMElement = new createjs.DOMElement(lVideo);
        }
        if (!this.videoDic[parentid]) {
            this.videoDic[parentid] = new MVideo(parentid, lVideo, lVideoDOMElement);
        }
        ;
        return this.videoDic[parentid].csVideo;
    };
    ;
    VideoResManager.videoDic = new Array();
    return VideoResManager;
}(ResManager));
var MVideo = (function () {
    function MVideo(_name, _hvideo, _csVideo) {
        this.name = name;
        this.csVideo = _csVideo;
        this.hVideo = _hvideo;
    }
    return MVideo;
}());
//# sourceMappingURL=app.js.map