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
        this.usecreatejsSource();
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
    EaseljsTest.prototype.usecreatejsSource = function () {
        createjs.MotionGuidePlugin.install();
        this.canvas = document.getElementById("canvas");
        images = images || {};
        ss = ss || {};
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", this.handleFileLoad);
        loader.addEventListener("complete", this.handleComplete);
        loader.loadFile({ src: "./egame/images/loading_atlas_.json?1461750374027", type: "spritesheet", id: "loading_atlas_" }, true);
        loader.loadManifest(lib.properties.manifest);
    };
    EaseljsTest.prototype.handleFileLoad = function (evt) {
        if (evt.item.type == "image") {
            images[evt.item.id] = evt.result;
        }
        console.log("加载资源完毕:" + evt.item.type + " :" + evt.item.id);
    };
    EaseljsTest.prototype.handleComplete = function (evt) {
        var queue = evt.target;
        ss["loading_atlas_"] = queue.getResult("loading_atlas_");
        this.exportRoot = new lib.loading();
        console.log(ss["loading_atlas_"]);
        for (var i in ss) {
            console.log(i + ":" + ss[i]);
        }
        console.warn(this.exportRoot.instance.progressMc.totalFrames);
        var tween = createjs.Tween.get(this.exportRoot.instance.progressMc).to({ _off: true });
        this.exportRoot.instance.btn1.addEventListener("click", btnClick2);
        function btnClick2(evt) {
            alert("btn1 点击2");
            this.exportRoot.instance.progressMc.gotoAndStop(90);
        }
        this.gamestage = new createjs.Stage(this.canvas);
        this.gamestage.addChild(this.exportRoot);
        this.gamestage.update();
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", this.gamestage);
    };
    return EaseljsTest;
}());
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
    (lib.测试按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(1, 1, 1).p("AnamJIO1AAIAAMTIu1AAg");
        this.shape.setTransform(47.5, 39.5);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FF7700").s().p("AnaGKIAAsTIO1AAIAAMTg");
        this.shape_1.setTransform(47.5, 39.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 97, 81);
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
        this.timeline.addTween(cjs.Tween.get(this).wait(1));
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
        this.instance_12 = new lib.测试按钮();
        this.instance_12.setTransform(316, 417.5, 1, 1, 0, 0, 0, 47.5, 39.5);
        this.btn1 = new lib.测试按钮();
        this.btn1.setTransform(149.5, 417.5, 1, 1, 0, 0, 0, 47.5, 39.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.btn1 }, { t: this.instance_12 }] }).wait(1));
        this.progressMc = new lib.loading条();
        this.progressMc.setTransform(525, 548, 1, 1, 0, 0, 0, 326, 44.3);
        this.timeline.addTween(cjs.Tween.get(this.progressMc).wait(1));
        this.instance_13 = new lib.玛雅风格loadingbg();
        this.instance_13.setTransform(0, 0, 0.686, 0.687);
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1049.6, 680.2);
    (lib.loading = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.GameLoading();
        this.instance.setTransform(524.8, 340.1, 1, 1, 0, 0, 0, 524.8, 340.1);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(525, 340, 1049.6, 680.2);
})(lib = lib || {}, images = images || {}, createjs2 = createjs || {}, ss = ss || {});
var lib, images, createjs2, ss;
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