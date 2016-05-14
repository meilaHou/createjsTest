/// <reference path="preloadjs/preloadjs.d.ts" />
/// <reference path="tweenjs/tweenjs.d.ts" />
/// <reference path="easeljs/easeljs.d.ts" />
/// <reference path="src/interface/interfacefiles.ts" />


/// <reference path="src/core/appfacade.ts" />
/// <include path="egame/loading.ts" />


class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}

window.onload = () => {
   // var el = document.getElementById('content');
  //  var greeter = new Greeter(el);
  //  greeter.start();

    //添加一个Ticker类帮助避免多次调用update方法
    var et = new EaseljsTest();
    //this.init();找不到此方法会报对象不支持此操作;
   
};

class EaseljsTest {
    private mstage: createjs.Stage;
    constructor() {
        var canvas = document.getElementById("myCanvas");
       // var stage = this.stage;
        this.mstage = new createjs.Stage(canvas); 
        //测试引入createjs正常
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
        //this.addTick();
        var dfdf: any;
        console.log(dfdf);
         
        this.mstage.update();



        //var theText = new createjs.Text("极客标签", "normal 32px microsoft yahei", "#222222");
        //this.mstage.addChild(theText);
        //this.mstage.update();


        //测试操作html元素,使用jquery;
      //  this.setTableRowHtml1();

        //测试animate cc 导出的js资源的使用
        this.usecreatejsSource();

    }
    //测试jquery 引用 
    //寻找tr 中第二个td
    private  setTableRowHtml1(): void {
        var userName: string = "";
        $("tr").each(function () {
            userName = $(this).find("td:eq(1)").html();
        });
        alert(userName);
    }

    private interfacetest() {

       // var mySquare1: SquareConfig = new Mysquare();
    }

    private addTick() {
        createjs.Ticker.addEventListener("tick", handleTicker);
        function handleTicker() {
            this.mstage.update();
        }
    }
    private handleClick(event): void {
        console.log("shape 点击事件");
    }


    public usecreatejsSource()
    {
                // --- write your JS code here ---

            createjs.MotionGuidePlugin.install();

             this.canvas = document.getElementById("canvas");
            images = images || {};
            ss = ss || {};

            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", this.handleFileLoad); 
            loader.addEventListener("complete", this.handleComplete);
        //file参数 LoadItem | Object | String
            loader.loadFile({ src: "./egame/images/loading_atlas_.json?1461750374027", type: "spritesheet", id: "loading_atlas_" }, true);
            loader.loadManifest(lib.properties.manifest);
    }


    private canvas: any
    private gamestage: any;
    private exportRoot: any;


        private   handleFileLoad(evt) {
            if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
            console.log("加载资源完毕:" + evt.item.type+ " :"+ evt.item.id);
        }

        private handleComplete(evt) {
            var queue = evt.target;
            ss["loading_atlas_"] = queue.getResult("loading_atlas_");
            this.exportRoot = new lib.loading();
            console.log(ss["loading_atlas_"]);
            for (var i in ss) {
                console.log(i+":"+ss[i]);
            }

            //this.exportRoot 代表loading.fla
            //this.exportRoot.instance. 代表fla舞台上的某一个 显示对象;这里代表GameLoading
            console.warn(this.exportRoot.instance.progressMc.totalFrames);
            //this.exportRoot.instance.progressMc.gotoAndStop(70);//配合addchild使用,在根容器加载到画布之前
            var tween = createjs.Tween.get(this.exportRoot.instance.progressMc).to({ _off: true })
                //.wait(1).to({ _off: true })
                //.wait(1).to({ _off: false });
            // this.exportRoot.instance.timeline.addTween(tween);


           // createjs.Tween.removeTweens(this.exportRoot.instance.progressMc);

           // this.exportRoot.instance.timeline.gotoAndStop(20);
           // this.exportRoot.instance.timeline.removeTween(createjs2.Tween.get(this.exportRoot.instance.progressMc));

            /*
            给显示对象添加事件的两种方式
            1.指定内部方法,注册事件和响应函数;
            2.在外部定义和注册事件


            */
            //this.exportRoot.instance.btnclick = function () {
            //    this.btn1.addEventListener("click", btnClick);
            //    var that = this;
            //    function btnClick(evt) {
            //        alert("btn1 点击2");
            //        that.progressMc.gotoAndStop(90);

            //    }
               
            //}
            // this.exportRoot.instance.btnclick();

            this.exportRoot.instance.btn1.addEventListener("click", btnClick2);
            function btnClick2(evt) {
                alert("btn1 点击2");
                this.exportRoot.instance.progressMc.gotoAndStop(90);
            }

           
            this.gamestage = new createjs.Stage(this.canvas);

            this.gamestage.addChild(this.exportRoot);

            this.gamestage.update();
            //this.exportRoot.instance.progressMc.gotoAndStop(70);加载到画布之后可以直接操作;
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", this.gamestage);
        }
    
    
}

