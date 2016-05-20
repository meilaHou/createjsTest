/// <reference path="../../../../org/puremvc/typescript/patterns/command/simplecommand.ts" />
module game {

    export class ChangeModuleCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

        public constructor() {
            super();
        }
        public execute(notification: puremvc.INotification): void {
            var skinmeiator: SkinMediator = this.facade.retrieveMediator(SkinMediator.NAME) as SkinMediator;
            skinmeiator.showScene(notification.getBody());
        }
    }
}