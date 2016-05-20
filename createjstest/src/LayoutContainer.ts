class LayOutContainer extends createjs.Container implements IContainer {
    private index: number;
    private txt: createjs.Text;
    private _debugShow: boolean = false;
    constructor() {
        super();
        this.addEventListener("added", this.addToStageHandler.bind(this) );
    }


    protected addToStageHandler(evt) {
        this.index = this.parent.getChildIndex(this);
        this.createDisplyText();
    }

    private  createDisplyText():void
    {
        if (this.txt) {
            return;
        }
        this.txt = new createjs.Text("", "15px Arial", "#ff7700");
    
        this.txt.text = "name:" + this.name + "  postion:" + this.index + " parent:" + this.parent.name;
        this.txt.lineWidth = 500;
        this.txt.lineHeight = 70;
        this.txt.y = this.index * 50;
        this.addChild(this.txt);
        this.txt.visible = this._debugShow;

    }
    public  drawBg():void{
	}

    /**
     * 显示位置;
     * 
     */
    public showPostion(bln:boolean): void {
        this._debugShow = bln;
        this.txt.visible = this._debugShow;
    }
}