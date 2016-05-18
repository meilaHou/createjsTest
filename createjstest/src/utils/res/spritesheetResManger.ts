class SSResourceManager extends ResManager {
    private static strDic: Array<SSSprite> = new Array<SSSprite>();
    constructor() {
        super();
    }
    ///<param name="jsonstr">一个已经加载的spritesheet 的json格式的配置表</param>
    public static createSpriteByjson(jsonstr:Object, spriteName:string): createjs.Sprite {
        var sprite: createjs.Sprite;
        if (SSResourceManager.strDic[spriteName]) {
            sprite =  SSResourceManager.strDic[spriteName].msprite;
        } else {
            var spritesheet = new createjs.SpriteSheet(jsonstr);
            sprite = new createjs.Sprite(spritesheet);
            SSResourceManager.strDic[spriteName] = new SSSprite(spriteName, sprite);
        }

        return sprite;
    }
    ///spritesheet有很多种配置方式
    /// <param name="pic"> 一个spritesheet对象 </param>
    public static createSpriteByPic(pic: createjs.SpriteSheet, spriteName:string): createjs.Sprite {
        var sprite: createjs.Sprite;
        if (SSResourceManager.strDic[spriteName]) {
            sprite = SSResourceManager.strDic[spriteName].msprite;
        } else {
            var spritesheet = pic;
            sprite = new createjs.Sprite(spritesheet);
            SSResourceManager.strDic[spriteName] = new SSSprite(spriteName, sprite);
        }

        return sprite;
    }
    /// <summary>
        ///   
        /// </summary>
        /// <param name="img"> 一个html image  元素 ,或是一个图片地址字符串 </param>
    public static getBitmap(img:HTMLImageElement): createjs.Bitmap{
        var bitmap: createjs.Bitmap;
        bitmap = new createjs.Bitmap(img);
        return bitmap;
    }

    public static createBitmap(img: HTMLImageElement, spriteName: string): createjs.Bitmap {
        var bitmap: createjs.Bitmap;
        if (SSResourceManager.strDic[spriteName]) {
            bitmap = SSResourceManager.strDic[spriteName].msprite;
        } else {
            bitmap = new createjs.Bitmap(img);
            SSResourceManager.strDic[spriteName] = new SSSprite(spriteName, bitmap);
        }

        bitmap = new createjs.Bitmap(img);
        return bitmap;
    }

    

}

class SSSprite {
    constructor(_name:string, _sprite) {
        this.name = _name;
        this.msprite = _sprite;
    }
    public name: string;
    public msprite: createjs.Sprite;
}

var exampledata = {
    images: ["sprites.jpg"],
    frames: { width: 50, height: 50 },
    animations: {
        stand: 0,
        run: [1, 5],
        jump: [6, 8, "run"]
    }
};