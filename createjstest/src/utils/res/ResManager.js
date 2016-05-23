var ResManager = (function () {
    function ResManager() {
    }
    ResManager.removeElement = function (resName) { };
    ;
    ResManager.hasElement = function (resName, mediatorName) {
        var resName = ResManager.contactId(resName, mediatorName);
        var arr = this.getCurrentdic();
        return arr[resName];
    };
    ;
    ResManager.delElement = function (resName, mediatorName) {
        var resName = ResManager.contactId(resName, mediatorName);
        var arr = this.getCurrentdic();
        this.name;
        if (arr[resName]) {
            arr[resName] = null;
        }
    };
    ;
    ResManager.getCurrentdic = function () {
        var className = this.getFuncName(this);
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
    };
    ResManager.getFuncName = function (func) {
        var funcName = String(func);
        return funcName.match(/function\s*([^(]*)\(/)[1];
    };
    ResManager.contactId = function (spriteName, mediatorName) {
        if (!mediatorName)
            mediatorName = "";
        mediatorName = mediatorName.replace(" ", "");
        spriteName = spriteName.replace(" ", "");
        if (!spriteName) {
            throw new Error("资源id 不能为空:" + spriteName);
        }
        var spriteName = spriteName + mediatorName;
        return spriteName;
    };
    ResManager.name = "";
    return ResManager;
}());
