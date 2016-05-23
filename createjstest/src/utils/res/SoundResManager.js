var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SoundResManager = (function (_super) {
    __extends(SoundResManager, _super);
    function SoundResManager() {
        _super.call(this);
        createjs.Sound.alternateExtensions = ["mp3"];
    }
    Object.defineProperty(SoundResManager, "objectarr", {
        get: function () {
            return SoundResManager.soundDic;
        },
        enumerable: true,
        configurable: true
    });
    SoundResManager.createSound = function (soundPath, soundName, soundLoadComplete, that) {
        createjs.Sound.on(soundName, soundLoadComplete, that);
        var msound = createjs.Sound.registerSound(soundPath, soundName);
        SoundResManager.soundDic[soundName] = soundName;
        return msound;
    };
    SoundResManager.playSound = function (id, loop) {
        return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    };
    SoundResManager.soundDic = new Array();
    return SoundResManager;
}(ResManager));
var MSound = (function () {
    function MSound() {
    }
    return MSound;
}());
