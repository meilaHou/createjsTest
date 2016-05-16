/**
 *
 * @author 
 *
 */
//创建类 继承mediator
class TestMeidator extends puremvc.Mediator implements puremvc.IMediator{
    //定义此界面管理者名称
    public static NAME: string = "TestMediator";
    //构造函数
    public constructor(viewComponent: any = null) {
        super(TestMeidator.NAME,viewComponent);
        console.log("创建testmediator 成功");
    }
    //注册响应的事件
    public listNotificationInterests(): Array<any> {
        return [
            "showTestPanel"
//            PanelNotify.OPEN_MAP,
//            PanelNotify.CLOSE_MAP
        ];
    }
    //响应已注册的事件
    public handleNotification(notification: puremvc.INotification): void {
        var data: any = notification.getBody();
        console.log("testmediator 响应成功",notification.getName());
        switch(notification.getName()) {
           
            case "showTestPanel":{
                if (this.viewComponent == null) {
                    console.log("画板舞台不存在");
                    return;
                }
                this.viewComponent.addChild(new TestPanel());
                console.log("创建面板成功");
            }
            /*case PanelNotify.OPEN_MAP: {
                //显示角色面板
                this.showUI(this.mapPanel,false,0,0,5);
                break;
            }
            case PanelNotify.CLOSE_MAP: {
                this.closePanel(1);
                break;
            }*/
        }
    }     
}
