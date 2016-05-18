/// <reference path="../../../soundjs/soundjs.d.ts" />

class SoundResManager {
    constructor() {
        createjs.Sound.alternateExtensions = ["mp3"];
        
    }

    public static createSound(soundPath: string, soundName, soundLoadComplete, that) {
        createjs.Sound.on("fileload",soundLoadComplete, that);
        var msound = createjs.Sound.registerSound(soundPath, soundName);
        return msound;
    }

    public static playSound(id, loop?:any) {
        return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    }
}

class MSound {
    constructor() { }
    public name: string;
    public sound;
}