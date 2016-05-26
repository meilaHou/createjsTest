var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var BjlSKinPanel = (function (_super) {
        __extends(BjlSKinPanel, _super);
        function BjlSKinPanel(ss) {
            _super.call(this, ss, "bjlskin_atlas_");
            this.inits();
        }
        BjlSKinPanel.prototype.inits = function () {
            this.content = new bjllib.bjlskin();
            this.addChild(this.content);
            this.addEventListener("tick", this.ontickHandler.bind(this));
            this.resourceLoader.type = this.ssKey;
            this.loadSceneRes();
        };
        BjlSKinPanel.prototype.ontickHandler = function (evt) {
            if (!this.choumaBounds)
                return;
            this.choumaBounds.x = this.stage.mouseX;
            this.choumaBounds.y = this.stage.mouseY;
        };
        BjlSKinPanel.prototype.loadSceneRes = function () {
            this.resourceLoader.loadManifest(bjllib.properties.manifest, false);
            this.resourceLoader.load();
        };
        BjlSKinPanel.prototype.handleComplete = function (evt) {
            _super.prototype.handleComplete.call(this, evt);
            console.log("子类响应....");
            this.initStartStatus();
        };
        BjlSKinPanel.prototype.initStartStatus = function () {
            this.tablemc = this.content["instance"];
            for (var i = 1; i < 6; i++) {
                this.tablemc["betsItemMc" + i].clearBtn.visible = false;
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
            var chouma = new Array("10", "20", "50", "100", "200");
            for (var i = 0; i < 5; i++) {
                this.tablemc["chipsBarMc"]["mc" + i]["txt"].text = chouma[i];
                this.tablemc["chipsBarMc"]["mc" + i].addEventListener("click", this.choumaClick.bind(this));
            }
            this.createFapai();
            this.changeState(FAPAI);
        };
        BjlSKinPanel.prototype.createFapai = function () {
            for (var i = 0; i < 4; i++) {
                var fapaimc = new comnpokelib.FlipPokerMc_0();
                var randomnum1 = Math.ceil(Math.random() * 4) * 100;
                var randomnum2 = Math.ceil(Math.random() * 13);
                var nums = randomnum1 + randomnum2;
                fapaimc["mc"].removeAllChildren();
                var tempmc = new comnpokelib["Poker" + nums.toString()]();
                fapaimc["mc"].addChild(tempmc);
                fapaimc.x = i * 100 - 200;
                fapaimc.y = fapaimc.y - 60;
                fapaimc.gotoAndStop(0);
                this.tablemc["PokerMc"].addChildAt(fapaimc, i);
            }
        };
        BjlSKinPanel.prototype.kaipai = function () {
            var pokemc = this.tablemc["PokerMc"];
            for (var i = 0; i < pokemc.numChildren; i++) {
                var tempmc = pokemc.getChildAt(i);
                tempmc.play();
            }
        };
        BjlSKinPanel.prototype.shoupai = function () {
            var pokemc = this.tablemc["PokerMc"];
            var adsf = new createjs.Shape();
            for (var i = 0; i < pokemc.numChildren; i++) {
                var tempmc = pokemc.getChildAt(i);
                createjs.Tween.get(tempmc).wait(1000).call(function (evt, data) {
                    if (data)
                        data[0].gotoAndStop(1);
                }, [tempmc], this).to({ x: -470, y: tempmc.y + 40, visible: true }, 1000);
            }
        };
        BjlSKinPanel.prototype.choumaClick = function (evt) {
            var obj = evt.currentTarget;
            this.removeChild(this.choumaBounds);
            this.addChild(this.choumaBounds);
            this.testFunc();
        };
        BjlSKinPanel.prototype.testFunc = function () {
            var text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
            createjs.Tween.get(text).to({ guide: { path: [0, 0, 0, 200, 200, 200, 200, 0, 0, 0] } }, 7000);
            var shapes = new createjs.Shape();
            shapes.graphics.moveTo(0, 0).curveTo(0, 200, 200, 200).curveTo(200, 0, 0, 0);
            shapes.cache(0, 0, 200, 200);
            text.x = 100;
            text.y = 50;
            var clonetext = text.clone();
            clonetext.text = "nihao shijie!!!";
            this.stage.addChild(shapes);
            this.stage.addChild(text);
            this.stage.addChild(clonetext);
            var box = new createjs.Shape();
            box.graphics.beginLinearGradientFill(["#000000", "rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 100, 100);
            box.graphics.drawRect(0, 0, 100, 100);
            box.cache(0, 0, 100, 100);
            var bmp = new createjs.Bitmap("/images/Chrysanthemum.jpg");
            bmp.filters = [
                new createjs.AlphaMaskFilter(box.cacheCanvas)
            ];
            bmp.cache(0, 0, 100, 100);
            this.stage.addChild(bmp);
            var shape = new createjs.Shape().set({ x: 100, y: 100 });
            shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
            var blurFilter = new createjs.BlurFilter(50, 5, 1);
            shape.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            shape.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);
            this.stage.addChild(shape);
        };
        BjlSKinPanel.prototype.limitmcClickHandler = function (evt) {
            this.tablemc["limitedMc"].visible = !this.tablemc["limitedMc"].visible;
        };
        BjlSKinPanel.prototype.kaipaiClickHandler = function (evt) {
            this.kaipai();
        };
        BjlSKinPanel.prototype.clearBetsBtnClickHandler = function (evt) {
        };
        BjlSKinPanel.prototype.flyPaiBtnClickHandler = function (evt) {
            this.kaipai();
            this.shoupai();
        };
        BjlSKinPanel.prototype.reBetsBtnClickHandler = function (evt) {
        };
        BjlSKinPanel.prototype.clear = function () {
            this.tablemc["opBtnsMc"]["openPaiBtn"].removeEventListener("click", this.kaipaiClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["clearBetsBtn"].removeEventListener("click", this.clearBetsBtnClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["flyPaiBtn"].removeEventListener("click", this.flyPaiBtnClickHandler.bind(this));
            this.tablemc["opBtnsMc"]["reBetsBtn"].removeEventListener("click", this.reBetsBtnClickHandler.bind(this));
        };
        BjlSKinPanel.prototype.changeState = function (state) {
            var opbtn = this.tablemc["opBtnsMc"];
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
        };
        return BjlSKinPanel;
    }(game.SkinPanel));
    game.BjlSKinPanel = BjlSKinPanel;
})(game || (game = {}));
