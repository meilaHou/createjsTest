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
            this.resourceLoader.type = this.ssKey;
            this.loadSceneRes();
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
            this.createFapai();
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
                fapaimc.gotoAndStop(0);
                this.tablemc["PokerMc"].addChildAt(fapaimc, i);
            }
        };
        BjlSKinPanel.prototype.limitmcClickHandler = function (evt) {
            this.tablemc["limitedMc"].visible = !this.tablemc["limitedMc"].visible;
        };
        BjlSKinPanel.prototype.kaipaiClickHandler = function (evt) {
            var pokemc = this.tablemc["PokerMc"];
            for (var i = 0; i < pokemc.numChildren; i++) {
                var tempmc = pokemc.getChildAt(i);
                tempmc.play();
            }
        };
        return BjlSKinPanel;
    }(game.SkinPanel));
    game.BjlSKinPanel = BjlSKinPanel;
})(game || (game = {}));
