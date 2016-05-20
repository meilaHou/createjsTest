class ResManager {
    public static name: string = "";
    //public static createElement(resName: string, mediatorName: string,...args): void {

    //}
    public static removeElement(resName: string): void { };
    public static hasElement(resName: string, mediatorName?: string): boolean {
        var resName = ResManager.contactId(resName, mediatorName);
        var arr = this.getCurrentdic();
        return arr[resName];
    };
    public static delElement(resName: string, mediatorName?: string): void {
        var resName = ResManager.contactId(resName, mediatorName);
        var arr = this.getCurrentdic();
        this.name;
        if (arr[resName])
        {
            arr[resName] = null;
        }
    };
    //public static getElement(resName: string): any { };

    private static  getCurrentdic(): Array<any> {
        var className: string = this.getFuncName(this);
        var arr;
        switch (className) {
            case "SSResourceManager":
                arr = SSResourceManager.objectarr;
                break;
            case "SoundResManager":
                arr = SoundResManager.objectarr;
                break;
            case "VideoResManager":
                arr = VideoResManager.objectarr;
                break;
        }
        return arr;
    }
    public static getFuncName(func):string{
    var funcName = String(func);
    return funcName.match(/function\s*([^(]*)\(/)[1];
    }
    protected static contactId(spriteName: string, mediatorName?: string): string {
        if (!mediatorName) mediatorName = "";
        mediatorName = mediatorName.replace(" ", "");
        spriteName = spriteName.replace(" ", "");
        if (!spriteName) {
            throw new Error("资源id 不能为空:" + spriteName);
        }

        var spriteName = spriteName + mediatorName;
        return spriteName;
    }
}