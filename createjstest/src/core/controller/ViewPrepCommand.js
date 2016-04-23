var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
  * 注册mediator
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ViewPrepCommand = (function (_super) {
        __extends(ViewPrepCommand, _super);
        function ViewPrepCommand() {
            _super.call(this);
        }
        ViewPrepCommand.prototype.execute = function (notification) {
            //			var main = GameLayerManager.gameLayer().panelLayer;
            //			this.facade.registerMediator( new RoleMediator() );
            //            this.facade.registerMediator(new BackpackMediator());
            //            this.facade.registerMediator(new QianghuaMediator());
            //            this.facade.registerMediator(new ZhaoXianMediator());
            //            this.facade.registerMediator(new ChuangDangMediator());
            //            this.facade.registerMediator(new ShopMediator());
            //            this.facade.registerMediator(new MapMediator());
            this.facade.registerMediator(new TestMeidator(this.facade.stage));
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    game.ViewPrepCommand = ViewPrepCommand;
})(game || (game = {}));
//# sourceMappingURL=ViewPrepCommand.js.map