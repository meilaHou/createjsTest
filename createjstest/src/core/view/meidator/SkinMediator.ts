/// <reference path="../../../../org/puremvc/typescript/patterns/mediator/mediator.ts" />

module game{

    export class SkinMediator extends puremvc.Mediator implements puremvc.IMediator {
        public static NAME: string = "SkinMediator";
        constructor(viewComponent: any = null) {
            super(SkinMediator.NAME, viewComponent);
            
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
           
            if (!data["type"]) {
                throw new Error("游戏类型不能为空.");
            }
            switch (data["type"]) {
                case "bjlskin":
                    this._currentLib = new game.BjlSKinPanel(data["ss"]);
                    break;
            }
            this.viewComponent.addChild(this._currentLib);
        }
        
    }
}