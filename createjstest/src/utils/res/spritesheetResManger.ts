class SSResourceManager extends ResManager {
    private static strDic: Array<SSSprite> = new Array<SSSprite>();
    public static name: string = "SSResourceManager";
    constructor() {
        super();
        
    }
    public static get objectarr(): Array<any> {
        return SSResourceManager.strDic;
    }

    public static createSprite(res: any, spriteName: string, mediatorName?: string): createjs.Sprite {
        spriteName = SSResourceManager.contactId(spriteName, mediatorName);
        var sprite: createjs.Sprite;
        if (SSResourceManager.strDic[spriteName]) {
            sprite = SSResourceManager.strDic[spriteName].msprite;
        } else {
            if (res instanceof createjs.SpriteSheet) {
                var spritesheet: any = res;
            } else if (res instanceof Object) {
                var spritesheet: any = new createjs.SpriteSheet(res);
            }
            sprite = new createjs.Sprite(spritesheet);
            SSResourceManager.strDic[spriteName] = new SSSprite(spriteName, sprite);
        }

        return sprite;

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

    /// <summary>
        ///   
        /// </summary>
        /// <param name="img"> 一个html image  元素 ,或是一个图片地址字符串 </param>
    public static getBitmap(img:HTMLImageElement): createjs.Bitmap{
        var bitmap: createjs.Bitmap;
        bitmap = new createjs.Bitmap(img);
        return bitmap;
    }

 
    public static getSprite(spriteName: string, mediatorName?: string): createjs.Sprite {
        spriteName = SSResourceManager.contactId(spriteName, mediatorName);
        var sprite: createjs.Sprite;
        if (SSResourceManager.strDic[spriteName]) {
            sprite = SSResourceManager.strDic[spriteName].msprite;
        }
        return sprite;
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