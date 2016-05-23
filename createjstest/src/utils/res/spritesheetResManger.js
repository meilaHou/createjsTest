var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
