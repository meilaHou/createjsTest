/// <reference path="skinpanel.ts" />
/// <reference path="../../../../egame/bjlskin.ts" />
module game {
   export class BjlSKinPanel extends SkinPanel {
       constructor(ss: any) {
           super(ss, "bjlskin_atlas_")
            this.inits();
       }
        private inits() {
            this.content = new bjllib.bjlskin();
            this.addChild(this.content);
            this.addEventListener("tick",this.ontickHandler.bind(this));
            this.resourceLoader.type = this.ssKey;
            this.loadSceneRes();
       }
        private choumaBounds: any;
        private ontickHandler(evt) {
            if (!this.choumaBounds) return;
            this.choumaBounds.x = this.stage.mouseX;
            this.choumaBounds.y = this.stage.mouseY;
        }
        private loadSceneRes() {
            this.resourceLoader.loadManifest(bjllib.properties.manifest, false);

            this.resourceLoader.load();
        }
        protected handleComplete(evt) {
            super.handleComplete(evt);
            console.log("子类响应....");
            this.initStartStatus();
        }
        private tablemc:createjs.MovieClip;
        private initStartStatus() {
            this.tablemc = this.content["instance"]; 
            for (var i = 1; i < 6; i++) {
                this.tablemc["betsItemMc"+i].clearBtn.visible = false;
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


            //筹码
            var chouma: Array<string> = new Array<string>("10","20","50","100","200");
            for (var i = 0; i < 5; i++)
            {
                this.tablemc["chipsBarMc"]["mc" + i]["txt"].text = chouma[i];
                this.tablemc["chipsBarMc"]["mc" + i].addEventListener("click", this.choumaClick.bind(this));
            }
            this.createFapai();
            this.changeState(FAPAI);
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

        private kaipai() {
            var pokemc: createjs.MovieClip = this.tablemc["PokerMc"];
            for (var i = 0; i < pokemc.numChildren; i++) {
                var tempmc: createjs.MovieClip = pokemc.getChildAt(i) as createjs.MovieClip;
                tempmc.play();
            }
        }
        private shoupai() {
            var pokemc: createjs.MovieClip = this.tablemc["PokerMc"];
            var adsf = new createjs.Shape();
            for (var i = 0; i < pokemc.numChildren; i++) {
                var tempmc: createjs.MovieClip = pokemc.getChildAt(i) as createjs.MovieClip;
                
                //tempmc.gotoAndStop(1);
                //var point = new createjs.Point(40, 60);
                //point = tempmc.globalToLocal(point.x, point.y);
                createjs.Tween.get(tempmc).wait(1000).call(function (evt,data) {
                    if (data) data[0].gotoAndStop(1);
                }, [tempmc],this).to({ x: -470, y: tempmc.y + 40, visible: true }, 1000);
            }

        }
        private choumaClick(evt) {
            //var obj = evt.target["txt"];
           // var adf = this;
           // var adfadf = this["txt"];
            //var obj = evt.currentTarget["txt"].text;
            var obj = evt.currentTarget as createjs.MovieClip;
           // alert(sfsafs);
            //var myBounds = utils.ClassUtils.getObjByClass(utils.ClassUtils.getClassName(obj));
            this.removeChild(this.choumaBounds);
            //this.choumaBounds = obj.clone();//movieclip 不能被克隆;
            this.addChild(this.choumaBounds);


            
            this.testFunc();
        }

        private testFunc() {
            //============clone==============
            var text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
            createjs.Tween.get(text).to({ guide: { path: [0, 0, 0, 200, 200, 200, 200, 0, 0, 0] } }, 7000);
            var shapes = new createjs.Shape();
            //shapes.graphics.beginFill("0xff00ff");
            shapes.graphics.moveTo(0, 0).curveTo(0, 200, 200, 200).curveTo(200, 0, 0, 0);
            shapes.cache(0, 0, 200, 200);
            text.x = 100;
            text.y = 50;
            //text.textBaseline = "alphabetic";
            var clonetext = text.clone();
            clonetext.text = "nihao shijie!!!";
            this.stage.addChild(shapes);
            this.stage.addChild(text);
            this.stage.addChild(clonetext);
            //=========AlphaMaskFilter=======AlphaMapFilter=======
            var box = new createjs.Shape();
            //box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100)
            box.graphics.beginLinearGradientFill(["#000000", "rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 100, 100)
            box.graphics.drawRect(0, 0, 100, 100);
            box.cache(0, 0, 100, 100);
            var bmp = new createjs.Bitmap("/images/Chrysanthemum.jpg");
            bmp.filters = [
               // new createjs.AlphaMapFilter(box.cacheCanvas as HTMLCanvasElement)//第一种遮罩
                new createjs.AlphaMaskFilter(box.cacheCanvas as HTMLCanvasElement)//第二种遮罩
            ];
            bmp.cache(0, 0, 100, 100);
            this.stage.addChild(bmp);
            //===============BlurFilter==============
            var shape = new createjs.Shape().set({ x: 100, y: 100 });
            shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);

            var blurFilter = new createjs.BlurFilter(50, 5, 1);
            shape.filters = [blurFilter];
            var bounds = blurFilter.getBounds();

            shape.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);
            this.stage.addChild(shape);
            
        }

        private limitmcClickHandler(evt) {
            this.tablemc["limitedMc"].visible = !this.tablemc["limitedMc"].visible;
        }

        private kaipaiClickHandler(evt) {
            this.kaipai();
        }
        private clearBetsBtnClickHandler(evt) {

        }
        private flyPaiBtnClickHandler(evt) {
            this.kaipai();
            this.shoupai();
        }
        private reBetsBtnClickHandler(evt) {

        }
        public clear() {
            this.tablemc["opBtnsMc"]["openPaiBtn"].removeEventListener("click", this.kaipaiClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["clearBetsBtn"].removeEventListener("click", this.clearBetsBtnClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["flyPaiBtn"].removeEventListener("click", this.flyPaiBtnClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["reBetsBtn"].removeEventListener("click", this.reBetsBtnClickHandler.bind(this));
        }


        public changeState(state: string) {
            var opbtn: createjs.MovieClip = this.tablemc["opBtnsMc"];
            switch (state) {
                case FAPAI:
                    opbtn["clearBetsBtn"].visible = false;
                    opbtn["openPaiBtn"].visible = false;
                    opbtn["flyPaiBtn"].visible = true;
                    opbtn["reBetsBtn"].visible = true;
                    break;
                case YAZHU:
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
                    break;
            }
            
        }
    }
}