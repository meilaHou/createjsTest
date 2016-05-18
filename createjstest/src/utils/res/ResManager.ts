class ResManager {
    protected static dic: Array<any>;
    public static removeElement(resName: string): void { };
    public static hasElement(resName: string): boolean { return null};
    public static delElement(resName: string): void {
        if (ResManager.dic[resName]) {
            ResManager.dic[resName] = null;
        }
    };
    public static getElement(resName: string): void { };
}