/// <reference path="../../../soundjs/soundjs.d.ts" />
/// <reference path="resmanager.ts" />

class SoundResManager extends ResManager{
    private static soundDic: Array<string> = new Array<string>();
    constructor() {
        super();
        createjs.Sound.alternateExtensions = ["mp3"];
        
    }
    public static get objectarr(): Array<any> {
        return SoundResManager.soundDic;
    }
    public static createSound(soundPath: string, soundName, soundLoadComplete, that) {
        createjs.Sound.on(soundName,soundLoadComplete, that);
        var msound = createjs.Sound.registerSound(soundPath, soundName);
        SoundResManager.soundDic[soundName] = soundName;
        return msound;
    }
    //声音的播放:每次创建一个声道,用来控制当前声音的播放;
    public static playSound(id, loop?:any) {
        return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    }
}

class MSound {
    constructor() { }
    public name: string;
    public sound;
}