interface IResManager
{
    removeElement(resName: string): void;
    hasElement(resName: string): boolean;
    delElement(resName: string): void;
    getElement(resName: string): any;
}