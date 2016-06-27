/// <reference path="skinpanel.ts" />
/// <include path="../../../../egame/bjlskin.ts" />

module game {
    export class BjlSKinPanel extends SkinPanel {
        public isInit: boolean = false;

       constructor(ss: any) {
           super(ss, "bjlskin_atlas_")
            this.init();
       }
       public init() {
           super.init();
            

            if (this.isInit) {
                this.initStartStatus();
            } else {
                this.resourceLoader.type = this.ssKey;
                this.loadSceneRes();
            }

       }

        private choumaBounds:createjs.Container;
        private ontickHandler(evt) {
            if (!this.choumaBounds) return;
            if (this.choumaBounds.numChildren == 0) return;
            this.choumaBounds.x = this.stage.mouseX;
            this.choumaBounds.y = this.stage.mouseY;

            this.hittestFunc();
        }
        private hittestFunc() {
            for (var i = 1; i < 6; i++) {
                var tempmc: createjs.MovieClip = this.tablemc["betsItemMc" + i];
                //检测有问题;
                //if (tempmc.hitTest(this.choumaBounds.x, this.choumaBounds.y)){
                //    tempmc.gotoAndStop(3);
                //} else {
                //    tempmc.gotoAndStop(1);
                //};

                if (this.collisionX(this.choumaBounds, tempmc)) {
                    tempmc.gotoAndStop(3);
                } else {
                    tempmc.gotoAndStop(1);
                };
            }
        }

        private collisionX(a, b) {
            return a.x + a.regX > b.x - b.regX    // a的右边超出了b的左边
            && a.x - a.regX < b.x + b.regX    // b的右边超出了a的左边
            && a.y + a.regY > b.y - b.regY    // a的下边超出了b的上边
            && a.y - a.regY < b.y + b.regY;   // b的下边超出了a的上边
        }
        private loadSceneRes() {

            //测试用,界面展示与此界面资源加载同步执行
            this.addEventListener("addToStage", function (evt) {
                this.initStartStatus();

            }.bind(this));
            this.resourceLoader.loadManifest(bjllib.properties.manifest, false);

            this.resourceLoader.load();
        }
        protected handleLoadComplete(evt) {
            super.handleLoadComplete(evt);

            console.log("子类响应....");
            this.initStartStatus();
        }
        private tablemc:createjs.MovieClip;
        private initStartStatus() {
            if (this.isInit) {
                return;
            }
            this.isInit = true;
            this.content = new bjllib.bjlskin();
            this.addChild(this.content);
            this.addEventListener("tick", this.ontickHandler.bind(this));
            this.choumaBounds = new createjs.Container();
            this.choumaBounds.mouseEnabled = false;
            this.tablemc = this.content["instance"]; 
            for (var i = 1; i < 6; i++) {
                this.tablemc["betsItemMc" + i].clearBtn.visible = false;
                this.tablemc["betsItemMc" + i].mouseChildren = false;
                this.tablemc["betsItemMc" + i].addEventListener("click", this.betItemClickHandler.bind(this));
                //this.tablemc["betsItemMc" + i].gotoAndStop(3);
            }
            this.tablemc["playerPointMc"].visible = false;
            this.tablemc["bankerPointMc"].visible = false;
            this.tablemc["miPokerBtn1"].visible = false;
            this.tablemc["miPokerBtn0"].visible = false;
            this.tablemc["limitedMc"].visible = false;
            this.tablemc["playerWinMc"].visible = false;
            this.tablemc["bankerWinMc"].visible = false;
            this.tablemc["openPlayerPokerBtn"].visible = false;
            this.tablemc["openBankerPokerBtn"].visible = false;
            this.tablemc["limitLabelMc"].addEventListener("click", this.limitmcClickHandler.bind(this));
            this.tablemc["limitLabelMc"].mouseEnabled = true;
            this.tablemc["opBtnsMc"]["openPaiBtn"].addEventListener("click", this.kaipaiClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["clearBetsBtn"].addEventListener("click", this.clearBetsBtnClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["flyPaiBtn"].addEventListener("click", this.flyPaiBtnClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["reBetsBtn"].addEventListener("click", this.reBetsBtnClickHandler.bind(this));
            this.tablemc["recyclePokerMc"].addChild(new comnpokelib.FeipaiAnim());

            //筹码
            var chouma: Array<string> = new Array<string>("10","20","50","100","200");
            for (var i = 0; i < 5; i++)
            {
                this.tablemc["chipsBarMc"]["mc" + i]["txt"].text = chouma[i];
                this.tablemc["chipsBarMc"]["mc" + i].addEventListener("click", this.choumaClick.bind(this));
            }


            this.changeState(FAPAI);
        }
        private betItemClickHandler(evt){
            
            this.changeState(YAZHU);
        }

        private createFapai() {

            for (var i = 0; i < 4; i++)
            {
                var fapaimc: createjs.MovieClip = new comnpokelib.FlipPokerMc_0();
                var randomnum1: number = Math.ceil(Math.random() * 4)*100;
                var randomnum2: number = Math.ceil(Math.random() * 13);

                var nums = randomnum1 + randomnum2;
                fapaimc["mc"].removeAllChildren();
                var tempmc: createjs.MovieClip = new comnpokelib["Poker" + nums.toString()]();
                
                fapaimc["mc"].addChild(tempmc);
                fapaimc.x = i * 100 - 200;
                fapaimc.y = fapaimc.y - 60;
                fapaimc.gotoAndStop(0);
                this.tablemc["PokerMc"].addChildAt(fapaimc, i);
            }
        }
        //响应操作
        private kaipai() {
            this.stage.mouseEnabled = false ;
            this.stage.mouseChildren = false;
            var pokemc: createjs.MovieClip = this.tablemc["PokerMc"];
            for (var i = 0; i < pokemc.numChildren; i++) {
                var tempmc: createjs.MovieClip = pokemc.getChildAt(i) as createjs.MovieClip;
                tempmc.play();
            }
            //一秒延迟后收牌;
            this.shoupai();
            setTimeout(this.playwinAnim.bind(this), 1000, Math.ceil(Math.random() * 2));
        }
        winsprite: createjs.Sprite;
        private playwinAnim(num: number) {
            this.winsprite = SSResourceManager.getSprite("winspritesheet2");
            this.winsprite.addEventListener("animationend", this.winAnimateOverHandler.bind(this));
            if (num == 1) {
                this.winsprite.x = this.tablemc["playerWinMc"].x-60;
                this.winsprite.y = this.tablemc["playerWinMc"].y-50;

            } else if (num == 2) {
                this.winsprite.x = this.tablemc["bankerWinMc"].x-60;
                this.winsprite.y = this.tablemc["bankerWinMc"].y-50;
            }
            this.winsprite.gotoAndPlay(1);
            this.tablemc.addChild(this.winsprite);
            
        }

        private winAnimateOverHandler(evt) {
            this.winsprite.gotoAndStop(this.winsprite.currentFrame-2);

            this.winsprite.removeAllEventListeners("animationend");
        }
        //响应操作
        private shoupai() {
            var pokemc: createjs.MovieClip = this.tablemc["PokerMc"];
            var adsf = new createjs.Shape();
            for (var i = 0; i < pokemc.numChildren; i++) {
                var tempmc: createjs.MovieClip = pokemc.getChildAt(i) as createjs.MovieClip;
                tempmc.name = "tempmc"+i;
                //tempmc.gotoAndStop(1);
                //var point = new createjs.Point(40, 60);
                //point = tempmc.globalToLocal(point.x, point.y);
                createjs.Tween.get(tempmc).wait(1000).call(this.waitCallFunc, [tempmc, pokemc], this).to({ x: -470, y: tempmc.y + 80, scaleX: 0.5, scaleY: 0.5, visible: true }, 800).wait(1).call(this.waitCallFunc2.bind(this));
            }
        }
        private jiesuan() {
            for (var i = 0; i < this.choumaArr.length; i++) {
                var chouma: createjs.MovieClip = this.choumaArr[i]; chouma.numChildren
                createjs.Tween.get(chouma).wait(1000).to({ x: 525, y: 0, visible: false }, 800);
            }
            setTimeout(this.changeState.bind(this), 3000, FAPAI);
        }
        //第一个传递的是对应的target ,第二个传递的是target的容器;
        waitCallFunc(evt, data,dddd) {
            if (evt) {
                evt.gotoAndStop(1);
                //var tempfeipai = new comnpokelib.FeiPai();
                //tempfeipai.x = evt.x;
                //tempfeipai.y = evt.y;
                //evt.parent.addChild(tempfeipai);
                
            }
            
        }

        waitCallFunc2(evt, data, dddd) {
            this.tablemc["PokerMc"].removeChild(evt.target);
            if (this.tablemc["PokerMc"].numChildren == 0) {
                this.changeState(JIESUAN);
            }
        }
        private choumaArr: Array<createjs.MovieClip> = new Array<createjs.MovieClip>();
        //筹码点击响应事件;
        private choumaClick(evt) {
            //var obj = evt.target["txt"];
           // var adf = this;
           // var adfadf = this["txt"];
            var objtext = evt.currentTarget["txt"].text;
            //var obj = evt.currentTarget as createjs.MovieClip;
            var obj = new bjllib.红黄();
            this.choumaArr.push(obj);

            obj["txt"].text = objtext;
           // alert(sfsafs);
            //var myBounds = utils.ClassUtils.getObjByClass(utils.ClassUtils.getClassName(obj));
            this.removeChild(this.choumaBounds);
            this.choumaBounds.addChild(obj);//movieclip 不能被克隆;
            this.addChild(this.choumaBounds);
            

            
            //this.testFunc();
        }

        private testFunc() {
            //不能添加到舞台;
            var asdf: createjs.BitmapText = new createjs.BitmapText("你好,bitmaptext");
            this.addChild(asdf);
            var myInstance = new bjllib.开牌按钮();
            this.addChild(myInstance);
            var helper = new createjs.ButtonHelper(myInstance, "0", "1", "2", false, myInstance, "3");

            var shape = new createjs.Shape().set({ x: 100, y: 100 });
            shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
            var matrix = new createjs.ColorMatrix().adjustHue(180).adjustSaturation(100);

            shape.filters = [
                new createjs.ColorFilter(0.5, 0, 0, 1, 255, 0, 255, 100),
                new createjs.ColorMatrixFilter(matrix)
            ];
            //如果添加了滤镜效果,那么久必须缓存
            shape.cache(-50, -50, 100, 100);
            this.addChild(shape);

            var g = new createjs.Graphics();
            g.setStrokeStyle(1);
            g.beginStroke("#000000");
            g.beginFill("red");
            g.drawCircle(0, 0, 30);
            this.addChild();
            var mc = new createjs.MovieClip(null, 0, true, { start: 20 });
            this.addChild(mc);

            var child1 = new createjs.Shape(
                new createjs.Graphics().beginFill("#999999")
                    .drawCircle(30, 30, 30));
            var child2 = new createjs.Shape(
                new createjs.Graphics().beginFill("#5a9cfb")
                    .drawCircle(30, 30, 30));

            mc.timeline.addTween(
                createjs.Tween.get(child1)
                    .to({ x: 0 }).to({ x: 60 }, 50).to({ x: 0 }, 50));
            mc.timeline.addTween(
                createjs.Tween.get(child2)
                    .to({ x: 60 }).to({ x: 0 }, 50).to({ x: 60 }, 50));

            mc.gotoAndPlay("start");
            mc.shadow = new createjs.Shadow("#000000", 5, 5, 10);
        }

        private limitmcClickHandler(evt) {
            this.tablemc["limitedMc"].visible = !this.tablemc["limitedMc"].visible;
        }

        private kaipaiClickHandler(evt) {
            this.kaipai();
        }
        private clearBetsBtnClickHandler(evt) {
            for (var i = 0; i < this.choumaArr.length; i++) {
                this.removeChild(this.choumaArr[i]);
            }
            this.changeState(FAPAI);
        }
        private flyPaiBtnClickHandler(evt) {
            this.kaipai();
            
        }
        private reBetsBtnClickHandler(evt) {

        }
        public clear() {
            this.tablemc["opBtnsMc"]["openPaiBtn"].removeEventListener("click", this.kaipaiClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["clearBetsBtn"].removeEventListener("click", this.clearBetsBtnClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["flyPaiBtn"].removeEventListener("click", this.flyPaiBtnClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["reBetsBtn"].removeEventListener("click", this.reBetsBtnClickHandler.bind(this));
            this.removeEventListener("tick", this.ontickHandler.bind(this));
        }


        public changeState(state: string) {
            var opbtn: createjs.MovieClip = this.tablemc["opBtnsMc"];
            switch (state) {
                case FAPAI:
                    this.createFapai();
                    opbtn["clearBetsBtn"].visible = false;
                    opbtn["openPaiBtn"].visible = false;
                    opbtn["flyPaiBtn"].visible = true;
                    opbtn["reBetsBtn"].visible = false;

                    this.stage.mouseChildren = true;
                    this.tablemc.removeChild(this.winsprite);
                    break;
                case YAZHU:
                    var chouma = this.choumaBounds.getChildAt(0);
                    if (!chouma) return;
                    chouma.x = this.stage.mouseX;
                    chouma.y = this.stage.mouseY;
                    this.addChild(chouma);
                    opbtn["clearBetsBtn"].visible = true;
                    opbtn["openPaiBtn"].visible = true;
                    opbtn["flyPaiBtn"].visible = false;
                    opbtn["reBetsBtn"].visible = false;
                    break;
                case JIESUAN:
                    opbtn["clearBetsBtn"].visible = false;
                    opbtn["openPaiBtn"].visible = false;
                    opbtn["flyPaiBtn"].visible = false;
                    opbtn["reBetsBtn"].visible = false;
                    this.jiesuan();
                    break;
            }
            
        }
    }
}