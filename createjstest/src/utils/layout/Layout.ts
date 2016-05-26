class Layout extends createjs.Container {
    private _stage: createjs.Stage;
    public  _sceneUILayer:LayOutContainer;//屏幕ui层
    public _panelLayer: LayOutContainer;//弹出panel层
    public _alertLayer: LayOutContainer;//提示消息层
    public _loadingLayer: LayOutContainer;//loading页面层
    public _chatLayer: LayOutContainer;//聊天层
    public _screenLayer: LayOutContainer;//主场景层
    public _tipLayer: LayOutContainer;//鼠标移动提示层
    public _effectLayer: LayOutContainer; //全屏特效的层
    public _mouseLayer: LayOutContainer;//鼠标特效层
    public _newGuilderLayer: LayOutContainer;//引导层
    constructor() {
        super();
        
    }
    public init(stage: createjs.Stage) {
        this.name = "layout";
        this._stage = stage;

        //根据需要添加图层;
        this._sceneUILayer = new LayOutContainer();
        this._sceneUILayer.name = "sceneUILayer";
        //			_panelLayer = new Popup(view);
        this._panelLayer = new LayOutContainer();
        this._panelLayer.name = "panelLayer";
        this._loadingLayer = new LayOutContainer();
        this._loadingLayer.name = "loadingLayer";
        //			_tipLayer = new Tip();
        this._tipLayer = new LayOutContainer();
        this._tipLayer.name = "tipLayer";
        this._alertLayer = new LayOutContainer();
        this._alertLayer.name = "alertLayer";
        this._mouseLayer = new LayOutContainer();
        this._mouseLayer.name = "_mouseLayer";
        this._chatLayer = new LayOutContainer();
        this._chatLayer.name = "_chatLayer";
        this._screenLayer = new LayOutContainer();
        this._screenLayer.name = "_screenLayer";
        this._effectLayer = new LayOutContainer();
        this._effectLayer.name = "effectLayer";
        this._newGuilderLayer = new LayOutContainer();
        this._newGuilderLayer.name = "_newGuilderLayer";


        this.addChild(this._sceneUILayer);
        this.addChild(this._chatLayer);
        this.addChild(this._panelLayer);
        this.addChild(this._alertLayer);
        this.addChild(this._screenLayer);
        this.addChild(this._loadingLayer);
        this.addChild(this._tipLayer);
        this.addChild(this._effectLayer);
        this.addChild(this._newGuilderLayer);

        this._stage.addChild(this._mouseLayer);
        this._stage.addChild(this);
    }


    public get stageWidth(): number {
        var canvas: HTMLCanvasElement = this._stage.canvas as HTMLCanvasElement;
        return canvas.width;
    }

    public get stageHeight(): number {
        var canvas: HTMLCanvasElement = this._stage.canvas as HTMLCanvasElement;
        return canvas.height;
    }

    public  showDebug(bln:boolean):void
	{
        for (var i: number = 0; i < this.numChildren; i++) {
            var temp = this.getChildAt(i);
            if (temp instanceof LayOutContainer)
            {
                temp.showPostion(bln);
            }
        }
        this._mouseLayer.showPostion(bln);
    }
}