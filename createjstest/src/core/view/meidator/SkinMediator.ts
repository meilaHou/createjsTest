/// <reference path="../../../../org/puremvc/typescript/patterns/mediator/mediator.ts" />
/// <reference path="../../../../egame/bjlskin.ts" />


class SkinMediator extends puremvc.Mediator implements puremvc.IMediator {
    public static NAME: string = "SkinMediator";
    constructor(viewComponent: any = null) {
        super(SkinMediator.NAME, viewComponent);
        this.resourceLoader.addEventListener("fileload", this.handleFileLoad.bind(this));
        this.resourceLoader.addEventListener("complete", this.handleComplete.bind(this));
    }
    public listNotificationInterests(): Array<any> {
        return [
            "showSkinPanel"
        ];
    }
    public handleNotification(notification: puremvc.INotification): void {
        var data: any = notification.getBody();
        console.log("SkinMediator 响应成功", notification.getName());
        switch (notification.getName()) {
            case "showSkinPanel":
                //this.usecreatejsSource();
                break;
        }

    }
    private _currentScene: createjs.MovieClip;
    private _currentLib: any;
    public showScene(data: Object) {
        ss = ss || {};
        var ssKey: string = "";
        if (!data["type"]) {
            throw new Error("游戏类型不能为空.");
        }
        switch (data["type"]){
            case "bjlskin":
                ssKey = "bjlskin_atlas_";
                this._currentLib = bjllib;
                break;
        }
        ss[ssKey] = data["ss"];
        this._currentScene = new bjllib.bjlskin();
        this.viewComponent.addChild(this._currentScene);
        this.resourceLoader.type = ssKey;
        this.loadSceneRes();
    }
    private resourceLoader:createjs.LoadQueue = new createjs.LoadQueue();
    private loadSceneRes() {
        this.resourceLoader.loadManifest(this._currentLib.properties.manifest, false);
        
        this.resourceLoader.load();
    }

    private handleFileLoad(evt) {
        console.log("加载资源: " + evt.item.type + " :" + evt.item.id +"完毕");
    }

    private handleComplete(evt) {
        var queue:createjs.LoadQueue = evt.target;
        console.log(queue.type+"所有游戏资源加载完毕");
    }
}