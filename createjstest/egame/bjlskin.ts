(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

    // library properties:
    lib.properties = {
        width: 1050,
        height: 680,
        fps: 24,
        color: "#FFFFFF",
        manifest: [
            { src: "../egame/sounds/WelcomeSound.mp3?1463998696678", id: "WelcomeSound" },
            { src: "../egame/sounds/BackgroundSound.mp3?1463998696678", id: "BackgroundSound" },
            { src: "../egame/sounds/TieWinSound.mp3?1463998696678", id: "TieWinSound" },
            { src: "../egame/sounds/BankerTwo.mp3?1463998696678", id: "BankerTwo" },
            { src: "../egame/sounds/BankerZero.mp3?1463998696678", id: "BankerZero" },
            { src: "../egame/sounds/BankerOne.mp3?1463998696678", id: "BankerOne" },
            { src: "../egame/sounds/BankerThree.mp3?1463998696678", id: "BankerThree" },
            { src: "../egame/sounds/BankerFour.mp3?1463998696678", id: "BankerFour" },
            { src: "../egame/sounds/BankerFive.mp3?1463998696678", id: "BankerFive" },
            { src: "../egame/sounds/BankerSix.mp3?1463998696678", id: "BankerSix" },
            { src: "../egame/sounds/BankerSeven.mp3?1463998696678", id: "BankerSeven" },
            { src: "../egame/sounds/BankerEight.mp3?1463998696678", id: "BankerEight" },
            { src: "../egame/sounds/BankerNine.mp3?1463998696678", id: "BankerNine" },
            { src: "../egame/sounds/BankerWinSound.mp3?1463998696678", id: "BankerWinSound" },
            { src: "../egame/sounds/BankerGetSound.mp3?1463998696678", id: "BankerGetSound" },
            { src: "../egame/sounds/PlayerTwo.mp3?1463998696678", id: "PlayerTwo" },
            { src: "../egame/sounds/PlayerZero.mp3?1463998696678", id: "PlayerZero" },
            { src: "../egame/sounds/PlayerOne.mp3?1463998696678", id: "PlayerOne" },
            { src: "../egame/sounds/PlayerThree.mp3?1463998696678", id: "PlayerThree" },
            { src: "../egame/sounds/PlayerFour.mp3?1463998696678", id: "PlayerFour" },
            { src: "../egame/sounds/PlayerFive.mp3?1463998696678", id: "PlayerFive" },
            { src: "../egame/sounds/PlayerSix.mp3?1463998696678", id: "PlayerSix" },
            { src: "../egame/sounds/PlayerSeven.mp3?1463998696678", id: "PlayerSeven" },
            { src: "../egame/sounds/PlayerEight.mp3?1463998696678", id: "PlayerEight" },
            { src: "../egame/sounds/PlayerNine.mp3?1463998696678", id: "PlayerNine" },
            { src: "../egame/sounds/PlayerWinSound.mp3?1463998696678", id: "PlayerWinSound" },
            { src: "../egame/sounds/PlayerGetSound.mp3?1463998696678", id: "PlayerGetSound" }
        ]
    };



    // symbols:



    (lib.开牌 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.下注区底框 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib._333333 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.赢2 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.bg = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.框1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.feipai = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.框框 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.汇总1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.牌盒右 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.牌盒右满 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.牌盒左 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.牌路6 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.牌路左边框1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.限注2 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.叶子1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.叶子2 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.叶子3 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.叶子4 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.底1 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.底3 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.玻璃 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.红色 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.绿色 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.蓝色 = function () {
        this.spriteSheet = ss["bjlskin_atlas_"];
        this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.光2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AlHj0IBshkIIiI7IheB2g");
        this.shape.setTransform(25.6, 49.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.2, 14.6, 65.6, 69.2);


    (lib.光 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF33").s().p("Aq5J6QkgkHAAlzQAAlzEgkHQEikGGXAAQGYAAEgEGQEiEHAAFzQAAFzkiEHQkgEHmYAAQmXAAkikHgAoRnhQjbDIAAEZQAAEaDbDHQDcDHE1AAQE1AADbjHQDcjHAAkaQAAkZjcjIQjbjHk1AAQk1AAjcDHg");
        this.shape.setTransform(98.7, 89.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 197.4, 179.5);


    (lib.赢1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DF0505").s().p("Aj2EPQgEgDAFgFIAHgKQAKgOAJgQQAIgRAGgaQAGgZACgZQACgagCgRQgBgTgDgRQgEgPgEgLQgGgLACgCQACgCALACIAmAJIAagMIAFgLQgGgDgEgDQgDgDgDgLIgIgdQgEgLgGgLIgHgQQgCgFADgDQADgEAxAOIB6gfIABgNIBFAVIgNAVIgWAtIAYAMIAcgMIABgbIA9AhIgGAcQgEALgBAQQgCAQABAgQgBAhAFANQAFARAJAJQALAIAKgBQAJgBADgGQADgFgBgNIgDgTIgDgRQAAgGACgCQADgCAFAFIAJANQAGAGAOAbIAQAZIAKAXIgTAMQgKAEghADQgiAEgYgVQgagVgBgXIgFgkIgUgLIgBAdIgIAkQgEAWgHANQgHANgMAPIgQATIgIAGQgDADgDgBQgCgBACgGIAUgpIgKgIIgegXQgPAngIALQgIAMgGAHIgKALQgGAIgDgDQgEgDAFgJIANghQAGgPAIgbQAGgagGgsQgBgMgDgCIgJgNIAFAuQADAcAAAKQABAKgDABQgDABgGgFIgSgKQgEgDgCgDQgBgEABgMQACgGgCgPIgLhWIgFAWQgBAJAEAhIAOB+QACAZACAJIABANQAAAEgDACQgDACgHgDQgTgFgVgMIgdgRIgIgFQgIgGAAgCQAAgDAHgDQAFgCALAAQAMgBAOgFIgEgmIgjANQgMAngMAQQgMARgNALQgOAMgJADIgIAEIgFACIgCgBgAg1AbIADATIAcACQAKABADABQACACgBAMQgBALACAUQACAUAAAIIAAAXIAVABQANABAJgBQAEgQABgKQABgLgBggQAAghgBgFIgIglQgFANgCAJQgBAIADAWIAFAoIABAYIABALQABAEgDACQgBABgGgCIgUgKQgGgEgBgDIAAgNIAAgQIgHhLgAicBrIgCAWIAggKIgBgZgAidA1IAAAXIAagLIgCgYgABHAEIAGArIAXAEIgDg5gAhmgUIgPAQIAbALIgDgHQgBgFABgBIAjAFIAtgQIADgOIAsAUIgKgXIgUgSgAhvg9IADASIBtggIACgSgAiih0IADgNIACgTIgeALQgPAFgeAUIgUhbQAaAEAkADQAkADBPgQIgLgMIgigfQgPgMABgCQABgDAPgBQATgBAQABIAeADQAPACADAEQACAEgDANIgIAcQBCgNAegLQAegMAegQIAMBNQgqgBgWACQgWAChXAMIhAALIACAVQAegEAxgKQAvgKALgGIAWgLIALAtQglABg5ALQg8ALgUAKIgYAMg");
        this.shape.setTransform(25.3, 27.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50.6, 54.5);


    (lib.飞牌1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.feipai();
        this.instance.setTransform(0, 0, 0.686, 0.687);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 148.2, 51.5);


    (lib.重押2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(0,192,209,0.698)", "rgba(0,192,209,0.498)"], [0.451, 0.82], 0.3, -26.5, 0.3, 25.7).s().p("AovDSQCNh+Dsi/Ij3D/IHOl+QCqADDDgDIA7gLIC8gRIAVAFIAVAAQAOAtgDAAIgdAQIhMA0Qg8AxASgLQARgLCGhKIAAAFIjrCuIDqibIAJAhIo2FuIkHAGIAdgYIASgfIgSACIgqAYIhhAgImOAWgAp+ClIglgTICFhXIgcAAIF8ktICKAHIoJGpIgHAHQgMAHh1APg");
        this.shape.setTransform(71.1, 26.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 142.2, 52.7);


    (lib.亮牌3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFDFB9", "#FFFFFF"], [0.102, 0.576], 0.1, 8.8, 0, -8.8).s().p("AAGBHQAKgXAAguIAAhPIAUAAIAAAvIAMAAIAAg0IATAAIAAA0IAHAAIAAATIgmAAIAAAQIAfAAIAABPIgTAAIAAg8IgMAAQgCAkgKAZIgSgOgAivBBQAbgFAIgGQAJgHgBgXIBQAAIAAAeQAAAJAIAAIAHAAQAFAAACgEQADgDABgRIAWAIQgDATgDAGQgDAEgGADQgGAEgJAAIgUAAQgWgBAAgWIAAgSIgiAAQAAAjg1AIIgMgUgAB+BVIAAghIg4AAIAAgUIAWAAIgKgJQAKgGAIgHIgWAAIAAhPIAXAAQACgHABgIIAaACIgEANIAtAAIAABPIgvAAQgHAMgMAKIAVAAIAAgSIAWAAIAAASIAcAAIAAAUIgcAAIAAAhgACEgGIASAAIAAgPIgQAAIgCAPgABigGIANAAQADgIAAgHIgQAAgACGglIAQAAIAAgOIgQAAgABiglIAQAAIAAgOIgQAAgAipAhIAAghICfAAIAAAgIgXAAIAAgQIhxAAIAAARgAiWgGIAAgnIB4AAIAAAngAh+gWIBIAAIAAgIIhIAAgAisg0IAAgSIBDAAIgFgKIAcgFIAGAPIBEAAIAAASg");
        this.shape.setTransform(17.7, 8.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 35.4, 17.2);


    (lib.开牌3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFDFB9", "#FFFFFF"], [0.102, 0.576], -0.2, 9.7, 0.2, -9.6).s().p("AAGBHQAKgXAAguIAAhQIATAAIAAAwIAMAAIAAgzIAUAAIAAAzIAHAAIAAATIgnAAIAAAQIAgAAIAABOIgUAAIAAg7IgMAAQgBAjgKAaIgSgOgAiuBEQAPgJALgLQAKgMACgYIgnAAIAAgVIAoAAIAAgqIgeAAIAAgWICZAAIAAAWIgcAAIAAAqIAjAAIAAAVIgjAAIAABGIgYAAIAAhGIguAAQgCAfgKAQQgKAPgVALQgKgIgLgJgAhugJIAuAAIAAgqIguAAgAB+BUIAAggIg4AAIAAgTIAWAAIgLgKQALgGAHgIIgVAAIAAhOIAWAAQADgHABgIIAaADIgFAMIAtAAIAABOIguAAQgHAOgMAKIAVAAIAAgSIAWAAIAAASIAcAAIAAATIgcAAIAAAggACEgHIASAAIAAgOIgRAAIgBAOgABigHIANAAQACgGABgIIgQAAgACFglIARAAIAAgOIgRAAgABiglIAQAAIAAgOIgQAAg");
        this.shape.setTransform(17.7, 8.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 35.3, 17.2);


    (lib.开牌2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.开牌();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 69, 35);


    (lib.底1_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.instance = new lib.底1();
        this.instance.setTransform(1, 0, 0.681, 0.667);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#F1934B", "#FF984A", "#FFC95A", "#FF984A", "#F1934B"], [0.004, 0.247, 0.518, 0.773, 1], -522, 0, 522, 0).s().p("EhRjALGIAA2LMCjHAAAIAAWLg");
        this.shape.setTransform(518.5, 73.5, 0.993, 1.035);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1037, 147);


    (lib.元件3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("AgqCtQgPgFgNgOQgNgOgKgWQgJgWgCgTQgDgUAAgOIAAgZQACgTAGgUQAGgVALgVQALgVANgQQANgRAMgMQAMgMAPgMQANgMAMgEQANgFALgBQAHAAAJADQAIADAKAMQAKALAHAQQAGARAEAVQAEAWAAATIAAAhIgCAeQgCARgIAaQgHAagKATQgKATgPASQgQARgQAJQgQAJgOADIgOABQgKAAgKgDgAACiLQgEAFgJAMQgJALgJAQQgJAQgGAUQgHAVgEAYQgEAWgBAaQgBAaAFAZQADAXAJATQAJASAMAEQAMAEALgFQAJgFAJgLQAJgLAIgXQAJgWAFgfQAFgfACgbQABgdgEgaQgDgUgJgKQgKgKgKADIgRADIADgTQACgKAEgGIAJgQQgOAJgGAFg");
        this.shape.setTransform(11.1, 13.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FF0000").s().p("AgkC1QgDgBgFgLQgFgLgEgOIgGgbQgCgNABgHQABgHAEgGIANgNQAEgGACgHQADgGAHg3IAMhbQACgQgBgUQAAgVgDgMQgDgNADgDQACgCALABQAIABALAGIAYAMQAMAHAFAIQAFAIgBAEQAAAEgGAIQgGAIgEALQgFALgDARIgIApIgXCIQgCAPgEAOQgDAOgFAKQgGAJgIAKQgHAHgFAAIgCAAg");
        this.shape_1.setTransform(11.1, 12.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF0000").s().p("AhiCZQgBgLgEgGIgJgPIAkgfQAPgPATgVQATgUARgUQAPgSALgQQALgQAGgQQAGgQABgRQABgRgEgOQgFgNgHgGQgIgHgLgBQgKAAgMAGQgNAHgKAKIgOANQgHAHgDgBQgEgBABgLQAAgGAHgJQAIgKAHgGQAHgHAMgIQAMgHALgEQAMgEAQgBQAZgBAQAIQARAJAKATQAKASAAAWQAAAWgGATQgHAYgPAUQgPASgYAWIhfBYQgNAMACACQACACAIgBQAJAAAPgGIAugRQAXgIANgIQAOgJAMgKIAXgVQAHgHACABQADABAAAKQABALgEAUQgGAagEAMQgEAMgJAHQgJAHgKACQgGABgRgDQgSgDgMABQgJAAgXAFQgaAFgKADIgWAIIgUAIIgCgXg");
        this.shape_2.setTransform(11.5, 13.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FF0000").s().p("AhNCuQgLgCgJgIQgJgIgDgOQgDgNACgOQACgLAHgMQAHgMAEAAQACABAHAMQAGAMAKAMQAJAMAOADQALADAMgEQALgEAKgLQALgKAJgQQAJgQADgNQACgOAAgJQAAgHgDgNQgCgOgHgEQgGgDgHAAQgHABgGAEIgQANQgHAGgDgBQgEgBgCgKQgDgJAAgHQAAgJADgDIALgDQAJgBAOgHQALgHAIgHQAIgGAKgPQAKgPADgNQAEgNgDgOQgDgKgGgGQgFgGgKgCQgKgBgLAEQgJADgIAGIgMAIQgIAFgDgCQgDgCAAgEQAAgDADgEQAFgHAQgMQAOgMAHgDQAHgEANgCQAOgCALABQAOABAMAGQANAGAIAJQAHAIAEATQADASgIAUQgGAOgNAPQgNAOgPALIgPAMQAMAEAGAFQAHAFAIALQAJAMACAUQACAUgJAVQgFAOgLAOQgKAOgNALQgNAMgPAJQgOAJgRAHQgTAGgOADIgMABQgIAAgHgCg");
        this.shape_3.setTransform(11.8, 13.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FF0000").s().p("AAMCsQgFgEgHgOQgGgOgCgIQgDgHAAgGQAAgGAJgSQAHgSgDgCQgCgDgJADIgXAFIgbAIIgaAHIgQAGIAAgVQAAgNgFgGIgKgOIAPgPQAHgIALgUIAXgoQAMgXAMgSIAagmQALgVAKgMIAKgOIAHgLQAFgHAGgCQAGgBAKAFIAOAJQAIAHAFAJQAEAIgCAJIgHAPQgHANgDAUIgLBVIgCAMQAAAFABADQACACAJgEQAIgDAIgFIAUgLQALgHADABQADABgEAQIgHAcQgFAagIAGQgJAGgKAAIgQgDQgHgBgCACQgDACAAANIAAAYIgEAhQgCARgEAKQgFALgFACIgBAAQgGAAgJgLgAAVh5QgFAHgHALIgNAbIgNAaIgPAeIgLAXIgMAcQgEAJABADQABACAFADQAEACAVgIIATgGQAIgCAEgEQAEgFABgGIAUh/QAEgTgDAAQgDAAgGAGg");
        this.shape_4.setTransform(11.6, 13.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FF0000").s().p("AhCCxQgTgBgNgOQgOgOABgYQAAgPAHgNQAHgNAKgKQALgJADACQACABABAMQAAAMAEAQQAEAQAIAHQAJAIAPAAQAOgBANgJQAMgKALgSQAKgSAGgUQAFgUgBgSQgBgZgMgLQgLgKgOgCQgKAAgHAEQgHADgGAGIgJALQgEAFgDABQgEACgKgIQgHgHgDgGQgEgGABgFQAAgDAGgIQAFgIAEgLIAYhIQAGgUAGgLQAGgLAHgEQAHgEAMAEQAGABALAGQAMAHAIADQAJACALgBQAKgCAIgFQAIgEAHgGQAHgGABABQACAAAAAHIAAAMQgBAOgHAOQgGANgIAHQgIAGgNACQgNABgKgHIgLgLIgPgLQgMgHgDABQgEACgBAHIgGATIgPAuQgFAPABABQABABAMgGQAJgFAIgCQAKgCAKAAQANABALAFQALAEAJAJQAJAJAHAOQAGAPAAAWQAAAcgLAaQgKAagVAWQgVAWgUANQgTALgSAFQgPAEgPAAIgHAAg");
        this.shape_5.setTransform(11.9, 13);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FF0000").s().p("AhAChQgUgOgMgbQgLgbAAgmQAAgdAHgcQAHgeALgYQAKgYARgZQAQgYARgPQAQgPANgHQAPgHAPgCQAXgDARAHQAQAHAIALQAHAKAAALQgBAUgNAIQgNAIgRADQgSADgCgDQgBgCAIgNQAIgOgCgNQgBgOgJgEQgJgEgNAGQgMAHgLAMQgIAMgNAZQgNAYgFAVIgHAWIAAAAIAAAAIAVgQQAJgGAOgFQANgGATACQAXACANALQANAMAGAUQAHASgEAfQgEAcgKAaQgJAZgQAUQgPAUgSALQgSALgTABIgDAAQgUAAgWgQgAgFgaQgTAEgLALQgMALgGATQgGATAAAUQAAATACAPQABANAFAOQAEAPAHAIQAIAJALADQAMACALgMQAMgJAKgYQAJgYAEgTQADgSABgWQABgVgEgLQgEgMgMgHQgIgEgLAAIgIABg");
        this.shape_6.setTransform(11.7, 13.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FF0000").s().p("Ag3CzQgFgBgCgJQgDgJgCgVIgCgdQAAgIAFgKQADgGAJgNIAQgXQAHgKANgZIARghIAagtQALgTAJgLQAJgNgDgDQgCgDgLgCQgLgBgNABQgXACgYAHIgeAJQgFABgHgCQgHgCgHgIQgGgJgEgKQgFgLgFgTQgEgTADgDQAEgDAQAGIAhALIAlAKIAgAFQAUADATgBQATAAAHgBIAPgDQgBAIAAAIQABAIAGAGIALALIgOAKQgHAFgHAKQgIAJgIAPIgVAnIgRAhIgNAhIgLAhIgFAbQgEAPgFAMQgFAMgHAKQgHAKgLAJQgJAIgFAAIgCgBg");
        this.shape_7.setTransform(11.6, 13.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FF0000").s().p("AglCvQgagEgPgKQgPgLgJgQQgJgQgBgTQgCgTAFgQQAFgQALgOQALgOAOgJIAYgLQAMgHABgFQAAgEgNgKQgPgKgKgPQgKgOgBgGQgHgVAGgSQAGgSAOgOQANgNARgIQARgIAQgDQASgCAQAAQARAAAOADQAOAEALAIQALAIAHAQQAHAPgGAWQgEAOgIALQgJALgKAJQgJAIgQAKQgPAJgBAFQAAAFAQAMQANAHALAQQALAPAEAQQAFARgCAPQgBARgHAPQgHAQgKAMQgKALgSAKQgRAKgTAEQgIACgKAAQgMAAgPgCgAgVARQgUASgGAPQgGAPAAATQAAATADAJQAHAdARAIQARAJAMgGQAPgGAIgRQAIgRgBgYQgBgRgEgPQgFgQgFgIQgFgJgGgHQgHgHgDgBIgBAAQgGAAgLAJgAgSiIQgLASACAQQACAJAHAOQAHAPALALQAKAKAEAAQADAAAKgJQAJgKAHgPQAIgPACgOQACgOgHgPQgEgIgHgFQgHgFgTgBIgCAAQgQAAgLASg");
        this.shape_8.setTransform(11.7, 13.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FF0000").s().p("AhRCwQgTgGgIgPQgIgOAEgUQACgJAKgQQAJgPAEABQACACAEAOQAFANAIAKQAIAJAMAEQALAEANgDQANgDALgIQAJgIAJgLQAJgKAGgKIAIgPIAIgRQgKAIgIAFQgHAEgLACQgOADgPgFQgPgGgOgMQgNgNgKgXQgKgWAAgTQgBgUACgXQAHgfAIgRQAHgSAPgOQAOgPASgIQAPgIAXABQALAAAJADQAJACAHAEQAHAEAGAFQAGAGAHAJQAGAJAFAMQAFANAFAXQAEAXgEAkQgDAfgKAgQgKAfgPAaQgPAZgVAUQgVAUgQAIQgOAIgZAFQgLACgKAAQgMAAgLgDgAAMiUQgOAHgKAWQgMAXgCAYQgDAZACATQABARAFAMQAFAPAKAJQAIAKALAAQALABAJgHQAKgHAGgMQAGgKAEgUQADgTAAgZQAAgZgDgQQgDgQgFgJQgIgOgKgEQgFgCgFAAQgFAAgGACg");
        this.shape_9.setTransform(11.4, 13.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.2, -4.5, 21.8, 35.3);


    (lib.元件1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0000FF").s().p("AgqCtQgPgFgNgOQgNgOgKgWQgJgWgCgTIgDgiIAAgZQACgTAGgUQAGgVALgVQALgVANgQQANgRAMgMQAMgMAPgMQANgMAMgEQANgFALgBQAHAAAJADQAIADAKAMQAKALAHAQQAGARAEAVQAEAWAAATIAAAhIgCAeQgCARgIAaQgHAagKATQgKATgPASQgQARgQAJQgQAJgOADIgOABQgKAAgKgDgAACiLQgEAFgJAMQgJALgJAQQgJAQgGAUQgHAVgEAYQgEAWgBAaQgBAaAFAZQADAXAJATQAJASAMAEQAMAEALgFQAJgFAJgLQAJgLAIgXQAJgWAFgfQAFgfACgbQABgdgEgaQgDgUgJgKQgKgKgKADIgRADIADgTQACgKAEgGIAJgQQgOAJgGAFg");
        this.shape.setTransform(10.9, 13.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#0000FF").s().p("AgkC1QgDgBgFgLQgFgLgEgOIgGgbQgCgNABgHQABgHAEgGIANgNQAEgGACgHQADgGAHg3IAMhbQACgQgBgUQAAgVgDgMQgDgNADgDQACgCALABQAIABALAGIAYAMQAMAHAFAIQAFAIgBAEQAAAEgGAIQgGAIgEALQgFALgDARIgIApIgXCIQgCAPgEAOQgDAOgFAKQgGAJgIAKQgHAHgFAAIgCAAg");
        this.shape_1.setTransform(11, 12.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#0000FF").s().p("AhiCZQgBgLgEgGIgJgPIAkgfQAPgPATgVQATgUARgUQAPgSALgQQALgQAGgQQAGgQABgRQABgRgEgOQgFgNgHgGQgIgHgLgBQgKAAgMAGQgNAHgKAKIgOANQgHAHgDgBQgEgBABgLQAAgGAHgJQAIgKAHgGQAHgHAMgIQAMgHALgEQAMgEAQgBQAZgBAQAIQARAJAKATQAKASAAAWQAAAWgGATQgHAYgPAUQgPASgYAWIhfBYQgNAMACACQACACAIgBQAJAAAPgGIAugRQAXgIANgIQAOgJAMgKIAXgVQAHgHACABQADABAAAKQABALgEAUQgGAagEAMQgEAMgJAHQgJAHgKACQgGABgRgDQgSgDgMABQgJAAgXAFQgaAFgKADIgWAIIgUAIIgCgXg");
        this.shape_2.setTransform(11.4, 13.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0000FF").s().p("AhNCuQgLgCgJgIQgJgIgDgOQgDgNACgOQACgLAHgMQAHgMAEAAQACABAHAMQAGAMAKAMQAJAMAOADQALADAMgEQALgEAKgLQALgKAJgQQAJgQADgNQACgOAAgJQAAgHgDgNQgCgOgHgEQgGgDgHAAQgHABgGAEIgQANQgHAGgDgBQgEgBgCgKQgDgJAAgHQAAgJADgDIALgDQAJgBAOgHQALgHAIgHQAIgGAKgPQAKgPADgNQAEgNgDgOQgDgKgGgGQgFgGgKgCQgKgBgLAEQgJADgIAGIgMAIQgIAFgDgCQgDgCAAgEQAAgDADgEQAFgHAQgMQAOgMAHgDQAHgEANgCQAOgCALABQAOABAMAGQANAGAIAJQAHAIAEATQADASgIAUQgGAOgNAPQgNAOgPALIgPAMQAMAEAGAFQAHAFAIALQAJAMACAUQACAUgJAVQgFAOgLAOQgKAOgNALQgNAMgPAJQgOAJgRAHQgTAGgOADIgMABQgIAAgHgCg");
        this.shape_3.setTransform(11.6, 13.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#0000FF").s().p("AAMCsQgFgEgHgOQgGgOgCgIQgDgHAAgGQAAgGAJgSQAHgSgDgCQgCgDgJADIgXAFIgbAIIgaAHIgQAGIAAgVQAAgNgFgGIgKgOIAPgPQAHgIALgUIAXgoQAMgXAMgSIAagmQALgVAKgMIAKgOIAHgLQAFgHAGgCQAGgBAKAFIAOAJQAIAHAFAJQAEAIgCAJIgHAPQgHANgDAUIgLBVIgCAMQAAAFABADQACACAJgEQAIgDAIgFIAUgLQALgHADABQADABgEAQIgHAcQgFAagIAGQgJAGgKAAIgQgDQgHgBgCACQgDACAAANIAAAYIgEAhQgCARgEAKQgFALgFACIgBAAQgGAAgJgLgAAVh5QgFAHgHALIgNAbIgNAaIgPAeIgLAXIgMAcQgEAJABADQABACAFADQAEACAVgIIATgGQAIgCAEgEQAEgFABgGIAUh/QAEgTgDAAQgDAAgGAGg");
        this.shape_4.setTransform(11.4, 13.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#0000FF").s().p("AhCCxQgTgBgNgOQgOgOABgYQAAgPAHgNQAHgNAKgKQALgJADACQACABABAMQAAAMAEAQQAEAQAIAHQAJAIAPAAQAOgBANgJQAMgKALgSQAKgSAGgUQAFgUgBgSQgBgZgMgLQgLgKgOgCQgKAAgHAEQgHADgGAGIgJALQgEAFgDABQgEACgKgIQgHgHgDgGQgEgGABgFQAAgDAGgIQAFgIAEgLIAYhIQAGgUAGgLQAGgLAHgEQAHgEAMAEQAGABALAGQAMAHAIADQAJACALgBQAKgCAIgFQAIgEAHgGQAHgGABABQACAAAAAHIAAAMQgBAOgHAOQgGANgIAHQgIAGgNACQgNABgKgHIgLgLIgPgLQgMgHgDABQgEACgBAHIgGATIgPAuQgFAPABABQABABAMgGQAJgFAIgCQAKgCAKAAQANABALAFQALAEAJAJQAJAJAHAOQAGAPAAAWQAAAcgLAaQgKAagVAWQgVAWgUANQgTALgSAFQgPAEgPAAIgHAAg");
        this.shape_5.setTransform(11.7, 13);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#0000FF").s().p("AhAChQgUgOgMgbQgLgbAAgmQAAgdAHgcQAHgeALgYQAKgYARgZQAQgYARgPQAQgPANgHQAPgHAPgCQAXgDARAHQAQAHAIALQAHAKAAALQgBAUgNAIQgNAIgRADQgSADgCgDQgBgCAIgNQAIgOgCgNQgBgOgJgEQgJgEgNAGQgMAHgLAMQgIAMgNAZQgNAYgFAVIgHAWIAAAAIAAAAIAVgQQAJgGAOgFQANgGATACQAXACANALQANAMAGAUQAHASgEAfQgEAcgKAaQgJAZgQAUQgPAUgSALQgSALgTABIgDAAQgUAAgWgQgAgFgaQgTAEgLALQgMALgGATQgGATAAAUQAAATACAPQABANAFAOQAEAPAHAIQAIAJALADQAMACALgMQAMgJAKgYQAJgYAEgTQADgSABgWQABgVgEgLQgEgMgMgHQgIgEgLAAIgIABg");
        this.shape_6.setTransform(11.6, 13.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#0000FF").s().p("Ag3CzQgFgBgCgJQgDgJgCgVIgCgdQAAgIAFgKQADgGAJgNIAQgXQAHgKANgZIARghIAagtQALgTAJgLQAJgNgDgDQgCgDgLgCQgLgBgNABQgXACgYAHIgeAJQgFABgHgCQgHgCgHgIQgGgJgEgKQgFgLgFgTQgEgTADgDQAEgDAQAGIAhALIAlAKIAgAFQAUADATgBQATAAAHgBIAPgDQgBAIAAAIQABAIAGAGIALALIgOAKQgHAFgHAKQgIAJgIAPIgVAnIgRAhIgNAhIgLAhIgFAbQgEAPgFAMQgFAMgHAKQgHAKgLAJQgJAIgFAAIgCgBg");
        this.shape_7.setTransform(11.4, 13.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#0000FF").s().p("AglCvQgagEgPgKQgPgLgJgQQgJgQgBgTQgCgTAFgQQAFgQALgOQALgOAOgJIAYgLQAMgHABgFQAAgEgNgKQgPgKgKgPQgKgOgBgGQgHgVAGgSQAGgSAOgOQANgNARgIQARgIAQgDQASgCAQAAQARAAAOADQAOAEALAIQALAIAHAQQAHAPgGAWQgEAOgIALQgJALgKAJQgJAIgQAKQgPAJgBAFQAAAFAQAMQANAHALAQQALAPAEAQQAFARgCAPQgBARgHAPQgHAQgKAMQgKALgSAKQgRAKgTAEQgIACgKAAQgMAAgPgCgAgVARQgUASgGAPQgGAPAAATQAAATADAJQAHAdARAIQARAJAMgGQAPgGAIgRQAIgRgBgYQgBgRgEgPQgFgQgFgIQgFgJgGgHQgHgHgDgBIgBAAQgGAAgLAJgAgSiIQgLASACAQQACAJAHAOQAHAPALALQAKAKAEAAQADAAAKgJQAJgKAHgPQAIgPACgOQACgOgHgPQgEgIgHgFQgHgFgTgBIgCAAQgQAAgLASg");
        this.shape_8.setTransform(11.6, 13.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#0000FF").s().p("AhRCwQgTgGgIgPQgIgOAEgUQACgJAKgQQAJgPAEABQACACAEAOQAFANAIAKQAIAJAMAEQALAEANgDQANgDALgIQAJgIAJgLQAJgKAGgKIAIgPIAIgRQgKAIgIAFQgHAEgLACQgOADgPgFQgPgGgOgMQgNgNgKgXQgKgWAAgTQgBgUACgXQAHgfAIgRQAHgSAPgOQAOgPASgIQAPgIAXABQALAAAJADQAJACAHAEQAHAEAGAFQAGAGAHAJQAGAJAFAMQAFANAFAXQAEAXgEAkQgDAfgKAgQgKAfgPAaQgPAZgVAUQgVAUgQAIQgOAIgZAFQgLACgKAAQgMAAgLgDgAAMiUQgOAHgKAWQgMAXgCAYQgDAZACATQABARAFAMQAFAPAKAJQAIAKALAAQALABAJgHQAKgHAGgMQAGgKAEgUQADgTAAgZQAAgZgDgQQgDgQgFgJQgIgOgKgEQgFgCgFAAQgFAAgGACg");
        this.shape_9.setTransform(11.2, 13.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.1, -4.5, 21.8, 35.3);


    (lib.红黄 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 文本
        this.txt = new cjs.Text("100", "bold 15px 'Microsoft YaHei'");
        this.txt.name = "txt";
        this.txt.textAlign = "center";
        this.txt.lineHeight = 22;
        this.txt.setTransform(-2, -11.9);

        this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

        // 光
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFFFFF", "rgba(255,255,255,0)"], [0, 1], 2.6, 4.4, 2.6, 0.4).s().p("AiWgXIgQgSIAOAAIAKALQA/A9BXgBQBZABA/g9IAHAIQhCBAhdAAQhbAAhDhBg");

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFFFFF", "rgba(255,255,255,0)"], [0, 1], 2.6, -4.4, 2.6, -0.4).s().p("AimAqIAQgSQBDhBBbAAQBdAABCBAIgHAIQg/g9hZABQhXgBg/A9IgKALg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // 阴影
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(102,102,102,0.502)").s().p("AgGD0QhhgChFhGQg0g0gOhDQgEgUgBgTIAAgOQgBgMACgNQAIhUA+g/QASgSAUgOQASgLATgJIAFgBQArgTAxABIAHAAQBgACBFBFQA0A0APBDQAEATABAVIAAANIgBAZQgHBVhAA+QgSAUgVAOQgRALgSAIQgtATg1AAIgGAAgAhXjTQgoARgiAhQg4A4gJBMQgCAPAAAOQAAAWAEAVQAMBDAzAzQBDBEBeAAQBeAABDhEQA5g3AJhMQACgPAAgPQAAgWgEgVQgMhDg0gzQhDhDheAAQguAAgpARg");

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(51,51,51,0.502)").s().p("AiBCBQgugugHg/IgBgUQAAgUAEgSQAKg0AogoQA2g1BLAAQBNAAA1A1QAuAvAHBAIABATQAAAVgEASQgKA0goAmQg1A3hNAAQhLAAg2g3gAh1h4IgBACQgJAIgIALQgVAbgHAgQgEAOgBAPIgBALIABAOQAFA9AtAsQAxAzBFAAQBEAAAxgwIADgDIAQgSQAVgbAIghQADgOABgPIABgMIgBgOQgFg8gsgsQgygzhGAAQhDAAgyAxg");

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }).wait(1));

        // 主体
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["#5F5A00", "#272400"], [0, 1], -0.5, -7.4, -0.5, 13.8).s().p("AisA3QhIhFAAhmIABgKQABAfAIAdIAGAQQATAvAlAlQANANANAKQAKAIALAGIAJAGIAFACQAuAaA2ABIAIAAIADAAIAEAAIANAAIAcgDIADgBIAFgBQATgEAYgKIACAAQAPgHAQgKIAEgDQAVgOATgTQA/g8AIhVIABgPIAAAKQAABmhIBFQhIBIhlAAQhkAAhIhIg");
        this.shape_4.setTransform(0, 12.8);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#918802").s().p("AgBBzIgFAAIgHAAQg2gCgvgZIgFgDIgJgFQgLgHgJgHQgOgLgMgMQgmgngTguIgFgQIgEgRIAOgKQATgNAXgKIAOgGQAFA9AsAtQAyAwBGAAQBDAAAxguIADgCIAQgTQAVgbAIghIAPgBQAYgDAXgGIAQgGQgIBVg/A9QgSATgVAOIgFADQgPAJgQAHIgBABQgYAKgUAEIgFABIgCAAIgdADIgNABIgCAAg");
        this.shape_5.setTransform(0.3, 11.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#72002E").s().p("AB6AJQgygwhGAAQhEABgxAuIgCABQgIAJgIAKQgVAbgIAiIgPABQgYABgXAIIgQAEQAIhVA+g8QASgSAVgNQARgMATgJIAFgCQAVgJAWgDQAZgGAYAAIAGAAQBiADBFBFQAzAxAPBDIgOALQgTANgXAKIgOAHQgFg+gsgsg");
        this.shape_6.setTransform(-0.1, -14);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("Ah3B4QgsgtgFg9IAAgOIAAgLQABgPADgNQAIgiAVgbQAIgKAIgJIACgBQAxgwBEgBQBGAAAyAyQAsAsAFA+IAAANIAAANQgBAOgDAOQgIAggUAcIgRATIgCACQgxAwhFgBQhFAAgygxg");
        this.shape_7.setTransform(0.1, -1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#CCCCCC").s().p("AjzAOIgBgOQAAgLACgNIAQgFQAXgHAYgCIAPgBQgDAOgBAOIAAALIAAAPIgOAGQgXAJgTAOIgOAKQgEgUgBgUgACpANIAAgNIAAgNIAOgGQAXgKATgNIAOgLQAEAUABAVIABAMIAAALIgBAPIgQAFQgYAHgYACIgPABQADgNABgPg");
        this.shape_8.setTransform(0.1, -1.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.5, -25.5, 49.1, 51.1);


    (lib.spaceHolder = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;


    (lib.牌盒 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // 图层 1
        this.instance = new lib.牌盒右满();
        this.instance.setTransform(0, 0, 0.631, 0.625);

        this.instance_1 = new lib.牌盒右();
        this.instance_1.setTransform(0, 0, 0.631, 0.628);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 183, 133.2);


    (lib.光_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFF00").s().p("AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBYAABAA/QA+BAABBXQgBBZg+A/QhAA/hYAAQhYAAg/g/g");
        this.shape_1.setTransform(21.5, 21.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 43, 43.1);


    (lib.LOGO = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib._333333();

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 246, 54);


    (lib.底框 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.底3();
        this.instance.setTransform(0, 0.4, 0.687, 0.687);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0.4, 1050, 158.7);


    (lib.历史记录网格 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#976C4F").s().p("EhQsALUIAA2oMChZAAAIAAWogEBM8ALLIDnAAIAAjnIjnAAgEBJMALLIDnAAIAAjnIjnAAgEBFdALLIDlAAIAAjnIjlAAgEBBsALLIDnAAIAAjnIjnAAgEA98ALLIDnAAIAAjnIjnAAgEA6NALLIDlAAIAAjnIjlAAgEA2cALLIDnAAIAAjnIjnAAgEAysALLIDnAAIAAjnIjnAAgEAu9ALLIDlAAIAAjnIjlAAgEArMALLIDnAAIAAjnIjnAAgEAncALLIDnAAIAAjnIjnAAgEAjtALLIDlAAIAAjnIjlAAgAf8LLIDnAAIAAjnIjnAAgAcMLLIDnAAIAAjnIjnAAgAYdLLIDlAAIAAjnIjlAAgAUsLLIDnAAIAAjnIjnAAgAQ8LLIDnAAIAAjnIjnAAgANNLLIDlAAIAAjnIjlAAgAJcLLIDnAAIAAjnIjnAAgAFsLLIDnAAIAAjnIjnAAgAB9LLIDlAAIAAjnIjlAAgAhyLLIDlAAIAAjnIjlAAgAliLLIDmAAIAAjnIjmAAgApRLLIDlAAIAAjnIjlAAgAtCLLIDnAAIAAjnIjnAAgAwyLLIDmAAIAAjnIjmAAgA0hLLIDlAAIAAjnIjlAAgA4SLLIDnAAIAAjnIjnAAgA8CLLIDmAAIAAjnIjmAAgA/xLLIDlAAIAAjnIjlAAgEgjiALLIDnAAIAAjnIjnAAgEgnSALLIDmAAIAAjnIjmAAgEgrBALLIDlAAIAAjnIjlAAgEguyALLIDnAAIAAjnIjnAAgEgyiALLIDmAAIAAjnIjmAAgEg2RALLIDlAAIAAjnIjlAAgEg6CALLIDnAAIAAjnIjnAAgEg9yALLIDmAAIAAjnIjmAAgEhBhALLIDlAAIAAjnIjlAAgEhFSALLIDnAAIAAjnIjnAAgEhJCALLIDmAAIAAjnIjmAAgEhMxALLIDlAAIAAjnIjlAAgEhQiALLIDnAAIAAjnIjnAAgEBM8AHaIDnAAIAAjlIjnAAgEBJMAHaIDnAAIAAjlIjnAAgEBFdAHaIDlAAIAAjlIjlAAgEBBsAHaIDnAAIAAjlIjnAAgEA98AHaIDnAAIAAjlIjnAAgEA6NAHaIDlAAIAAjlIjlAAgEA2cAHaIDnAAIAAjlIjnAAgEAysAHaIDnAAIAAjlIjnAAgEAu9AHaIDlAAIAAjlIjlAAgEArMAHaIDnAAIAAjlIjnAAgEAncAHaIDnAAIAAjlIjnAAgEAjtAHaIDlAAIAAjlIjlAAgAf8HaIDnAAIAAjlIjnAAgAcMHaIDnAAIAAjlIjnAAgAYdHaIDlAAIAAjlIjlAAgAUsHaIDnAAIAAjlIjnAAgAQ8HaIDnAAIAAjlIjnAAgANNHaIDlAAIAAjlIjlAAgAJcHaIDnAAIAAjlIjnAAgAFsHaIDnAAIAAjlIjnAAgAB9HaIDlAAIAAjlIjlAAgAhyHaIDlAAIAAjlIjlAAgAliHaIDmAAIAAjlIjmAAgApRHaIDlAAIAAjlIjlAAgAtCHaIDnAAIAAjlIjnAAgAwyHaIDmAAIAAjlIjmAAgA0hHaIDlAAIAAjlIjlAAgA4SHaIDnAAIAAjlIjnAAgA8CHaIDmAAIAAjlIjmAAgA/xHaIDlAAIAAjlIjlAAgEgjiAHaIDnAAIAAjlIjnAAgEgnSAHaIDmAAIAAjlIjmAAgEgrBAHaIDlAAIAAjlIjlAAgEguyAHaIDnAAIAAjlIjnAAgEgyiAHaIDmAAIAAjlIjmAAgEg2RAHaIDlAAIAAjlIjlAAgEg6CAHaIDnAAIAAjlIjnAAgEg9yAHaIDmAAIAAjlIjmAAgEhBhAHaIDlAAIAAjlIjlAAgEhFSAHaIDnAAIAAjlIjnAAgEhJCAHaIDmAAIAAjlIjmAAgEhMxAHaIDlAAIAAjlIjlAAgEhQiAHaIDnAAIAAjlIjnAAgEBM8ADrIDnAAIAAjnIjnAAgEBJMADrIDnAAIAAjnIjnAAgEBFdADrIDlAAIAAjnIjlAAgEBBsADrIDnAAIAAjnIjnAAgEA98ADrIDnAAIAAjnIjnAAgEA6NADrIDlAAIAAjnIjlAAgEA2cADrIDnAAIAAjnIjnAAgEAysADrIDnAAIAAjnIjnAAgEAu9ADrIDlAAIAAjnIjlAAgEArMADrIDnAAIAAjnIjnAAgEAncADrIDnAAIAAjnIjnAAgEAjtADrIDlAAIAAjnIjlAAgAf8DrIDnAAIAAjnIjnAAgAcMDrIDnAAIAAjnIjnAAgAYdDrIDlAAIAAjnIjlAAgAUsDrIDnAAIAAjnIjnAAgAQ8DrIDnAAIAAjnIjnAAgANNDrIDlAAIAAjnIjlAAgAJcDrIDnAAIAAjnIjnAAgAFsDrIDnAAIAAjnIjnAAgAB9DrIDlAAIAAjnIjlAAgAhyDrIDlAAIAAjnIjlAAgAliDrIDmAAIAAjnIjmAAgApRDrIDlAAIAAjnIjlAAgAtCDrIDnAAIAAjnIjnAAgAwyDrIDmAAIAAjnIjmAAgA0hDrIDlAAIAAjnIjlAAgA4SDrIDnAAIAAjnIjnAAgA8CDrIDmAAIAAjnIjmAAgA/xDrIDlAAIAAjnIjlAAgEgjiADrIDnAAIAAjnIjnAAgEgnSADrIDmAAIAAjnIjmAAgEgrBADrIDlAAIAAjnIjlAAgEguyADrIDnAAIAAjnIjnAAgEgyiADrIDmAAIAAjnIjmAAgEg2RADrIDlAAIAAjnIjlAAgEg6CADrIDnAAIAAjnIjnAAgEg9yADrIDmAAIAAjnIjmAAgEhBhADrIDlAAIAAjnIjlAAgEhFSADrIDnAAIAAjnIjnAAgEhJCADrIDmAAIAAjnIjmAAgEhMxADrIDlAAIAAjnIjlAAgEhQiADrIDnAAIAAjnIjnAAgEBM8gAEIDnAAIAAjmIjnAAgEBJMgAEIDnAAIAAjmIjnAAgEBFdgAEIDlAAIAAjmIjlAAgEBBsgAEIDnAAIAAjmIjnAAgEA98gAEIDnAAIAAjmIjnAAgEA6NgAEIDlAAIAAjmIjlAAgEA2cgAEIDnAAIAAjmIjnAAgEAysgAEIDnAAIAAjmIjnAAgEAu9gAEIDlAAIAAjmIjlAAgEArMgAEIDnAAIAAjmIjnAAgEAncgAEIDnAAIAAjmIjnAAgEAjtgAEIDlAAIAAjmIjlAAgAf8gEIDnAAIAAjmIjnAAgAcMgEIDnAAIAAjmIjnAAgAYdgEIDlAAIAAjmIjlAAgAUsgEIDnAAIAAjmIjnAAgAQ8gEIDnAAIAAjmIjnAAgANNgEIDlAAIAAjmIjlAAgAJcgEIDnAAIAAjmIjnAAgAFsgEIDnAAIAAjmIjnAAgAB9gEIDlAAIAAjmIjlAAgAhygEIDlAAIAAjmIjlAAgAligEIDmAAIAAjmIjmAAgApRgEIDlAAIAAjmIjlAAgAtCgEIDnAAIAAjmIjnAAgAwygEIDmAAIAAjmIjmAAgA0hgEIDlAAIAAjmIjlAAgA4SgEIDnAAIAAjmIjnAAgA8CgEIDmAAIAAjmIjmAAgA/xgEIDlAAIAAjmIjlAAgEgjigAEIDnAAIAAjmIjnAAgEgnSgAEIDmAAIAAjmIjmAAgEgrBgAEIDlAAIAAjmIjlAAgEguygAEIDnAAIAAjmIjnAAgEgyigAEIDmAAIAAjmIjmAAgEg2RgAEIDlAAIAAjmIjlAAgEg6CgAEIDnAAIAAjmIjnAAgEg9ygAEIDmAAIAAjmIjmAAgEhBhgAEIDlAAIAAjmIjlAAgEhFSgAEIDnAAIAAjmIjnAAgEhJCgAEIDmAAIAAjmIjmAAgEhMxgAEIDlAAIAAjmIjlAAgEhQigAEIDnAAIAAjmIjnAAgEBM8gD0IDnAAIAAjlIjnAAgEBJMgD0IDnAAIAAjlIjnAAgEBFdgD0IDlAAIAAjlIjlAAgEBBsgD0IDnAAIAAjlIjnAAgEA98gD0IDnAAIAAjlIjnAAgEA6NgD0IDlAAIAAjlIjlAAgEA2cgD0IDnAAIAAjlIjnAAgEAysgD0IDnAAIAAjlIjnAAgEAu9gD0IDlAAIAAjlIjlAAgEArMgD0IDnAAIAAjlIjnAAgEAncgD0IDnAAIAAjlIjnAAgEAjtgD0IDlAAIAAjlIjlAAgAf8j0IDnAAIAAjlIjnAAgAcMj0IDnAAIAAjlIjnAAgAYdj0IDlAAIAAjlIjlAAgAUsj0IDnAAIAAjlIjnAAgAQ8j0IDnAAIAAjlIjnAAgANNj0IDlAAIAAjlIjlAAgAJcj0IDnAAIAAjlIjnAAgAFsj0IDnAAIAAjlIjnAAgAB9j0IDlAAIAAjlIjlAAgAhyj0IDlAAIAAjlIjlAAgAlij0IDmAAIAAjlIjmAAgApRj0IDlAAIAAjlIjlAAgAtCj0IDnAAIAAjlIjnAAgAwyj0IDmAAIAAjlIjmAAgA0hj0IDlAAIAAjlIjlAAgA4Sj0IDnAAIAAjlIjnAAgA8Cj0IDmAAIAAjlIjmAAgA/xj0IDlAAIAAjlIjlAAgEgjigD0IDnAAIAAjlIjnAAgEgnSgD0IDmAAIAAjlIjmAAgEgrBgD0IDlAAIAAjlIjlAAgEguygD0IDnAAIAAjlIjnAAgEgyigD0IDmAAIAAjlIjmAAgEg2RgD0IDlAAIAAjlIjlAAgEg6CgD0IDnAAIAAjlIjnAAgEg9ygD0IDmAAIAAjlIjmAAgEhBhgD0IDlAAIAAjlIjlAAgEhFSgD0IDnAAIAAjlIjnAAgEhJCgD0IDmAAIAAjlIjmAAgEhMxgD0IDlAAIAAjlIjlAAgEhQigD0IDnAAIAAjlIjnAAgEBM8gHjIDnAAIAAjnIjnAAgEBJMgHjIDnAAIAAjnIjnAAgEBFdgHjIDlAAIAAjnIjlAAgEBBsgHjIDnAAIAAjnIjnAAgEA98gHjIDnAAIAAjnIjnAAgEA6NgHjIDlAAIAAjnIjlAAgEA2cgHjIDnAAIAAjnIjnAAgEAysgHjIDnAAIAAjnIjnAAgEAu9gHjIDlAAIAAjnIjlAAgEArMgHjIDnAAIAAjnIjnAAgEAncgHjIDnAAIAAjnIjnAAgEAjtgHjIDlAAIAAjnIjlAAgAf8njIDnAAIAAjnIjnAAgAcMnjIDnAAIAAjnIjnAAgAYdnjIDlAAIAAjnIjlAAgAUsnjIDnAAIAAjnIjnAAgAQ8njIDnAAIAAjnIjnAAgANNnjIDlAAIAAjnIjlAAgAJcnjIDnAAIAAjnIjnAAgAFsnjIDnAAIAAjnIjnAAgAB9njIDlAAIAAjnIjlAAgAhynjIDlAAIAAjnIjlAAgAlinjIDmAAIAAjnIjmAAgApRnjIDlAAIAAjnIjlAAgAtCnjIDnAAIAAjnIjnAAgAwynjIDmAAIAAjnIjmAAgA0hnjIDlAAIAAjnIjlAAgA4SnjIDnAAIAAjnIjnAAgA8CnjIDmAAIAAjnIjmAAgA/xnjIDlAAIAAjnIjlAAgEgjigHjIDnAAIAAjnIjnAAgEgnSgHjIDmAAIAAjnIjmAAgEgrBgHjIDlAAIAAjnIjlAAgEguygHjIDnAAIAAjnIjnAAgEgyigHjIDmAAIAAjnIjmAAgEg2RgHjIDlAAIAAjnIjlAAgEg6CgHjIDnAAIAAjnIjnAAgEg9ygHjIDmAAIAAjnIjmAAgEhBhgHjIDlAAIAAjnIjlAAgEhFSgHjIDnAAIAAjnIjnAAgEhJCgHjIDmAAIAAjnIjmAAgEhMxgHjIDlAAIAAjnIjlAAgEhQigHjIDnAAIAAjnIjnAAg");
        this.shape.setTransform(516.5, 72.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 图层 3
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(102,255,0,0)").s().p("EBM8ALLIAAjnIDnAAIAADngEBJMALLIAAjnIDnAAIAADngEBFdALLIAAjnIDlAAIAADngEBBsALLIAAjnIDnAAIAADngEA98ALLIAAjnIDnAAIAADngEA6NALLIAAjnIDlAAIAADngEA2cALLIAAjnIDnAAIAADngEAysALLIAAjnIDnAAIAADngEAu9ALLIAAjnIDlAAIAADngEArMALLIAAjnIDnAAIAADngEAncALLIAAjnIDnAAIAADngEAjtALLIAAjnIDlAAIAADngAf8LLIAAjnIDnAAIAADngAcMLLIAAjnIDnAAIAADngAYdLLIAAjnIDlAAIAADngAUsLLIAAjnIDnAAIAADngAQ8LLIAAjnIDnAAIAADngANNLLIAAjnIDlAAIAADngAJcLLIAAjnIDnAAIAADngAFsLLIAAjnIDnAAIAADngAB9LLIAAjnIDlAAIAADngAhyLLIAAjnIDlAAIAADngAliLLIAAjnIDmAAIAADngApRLLIAAjnIDlAAIAADngAtCLLIAAjnIDnAAIAADngAwyLLIAAjnIDmAAIAADngA0hLLIAAjnIDlAAIAADngA4SLLIAAjnIDnAAIAADngA8CLLIAAjnIDmAAIAADngA/xLLIAAjnIDlAAIAADngEgjiALLIAAjnIDnAAIAADngEgnSALLIAAjnIDmAAIAADngEgrBALLIAAjnIDlAAIAADngEguyALLIAAjnIDnAAIAADngEgyiALLIAAjnIDmAAIAADngEg2RALLIAAjnIDlAAIAADngEg6CALLIAAjnIDnAAIAADngEg9yALLIAAjnIDmAAIAADngEhBhALLIAAjnIDlAAIAADngEhFSALLIAAjnIDnAAIAADngEhJCALLIAAjnIDmAAIAADngEhMxALLIAAjnIDlAAIAADngEhQiALLIAAjnIDnAAIAADngEBM8AHaIAAjlIDnAAIAADlgEBJMAHaIAAjlIDnAAIAADlgEBFdAHaIAAjlIDlAAIAADlgEBBsAHaIAAjlIDnAAIAADlgEA98AHaIAAjlIDnAAIAADlgEA6NAHaIAAjlIDlAAIAADlgEA2cAHaIAAjlIDnAAIAADlgEAysAHaIAAjlIDnAAIAADlgEAu9AHaIAAjlIDlAAIAADlgEArMAHaIAAjlIDnAAIAADlgEAncAHaIAAjlIDnAA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IDnAAIAADngEBFdgHjIAAjnIDlAAIAADngEBBsgHjIAAjnIDnAAIAADngEA98gHjIAAjnIDnAAIAADngEA6NgHjIAAjnIDlAAIAADngEA2cgHjIAAjnIDnAAIAADngEAysgHjIAAjnIDnAAIAADngEAu9gHjIAAjnIDlAAIAADngEArMgHjIAAjnIDnAAIAADngEAncgHjIAAjnIDnAAIAADngEAjtgHjIAAjnIDlAAIAADngAf8njIAAjnIDnAAIAADngAcMnjIAAjnIDnAAIAADngAYdnjIAAjnIDlAAIAADngAUsnjIAAjnIDnAAIAADngAQ8njIAAjnIDnAAIAADngANNnjIAAjnIDlAAIAADngAJcnjIAAjnIDnAAIAADngAFsnjIAAjnIDnAAIAADngAB9njIAAjnIDlAAIAADngAhynjIAAjnIDlAAIAADngAlinjIAAjnIDmAAIAADngApRnjIAAjnIDlAAIAADngAtCnjIAAjnIDnAAIAADngAwynjIAAjnIDmAAIAADngA0hnjIAAjnIDlAAIAADngA4SnjIAAjnIDnAAIAADngA8CnjIAAjnIDmAAIAADngA/xnjIAAjnIDlAAIAADngEgjigHjIAAjnIDnAAIAADngEgnSgHjIAAjnIDmAAIAADngEgrBgHjIAAjnIDlAAIAADngEguygHjIAAjnIDnAAIAADngEgyigHjIAAjnIDmAAIAADngEg2RgHjIAAjnIDlAAIAADngEg6CgHjIAAjnIDnAAIAADngEg9ygHjIAAjnIDmAAIAADngEhBhgHjIAAjnIDlAAIAADngEhFSgHjIAAjnIDnAAIAADngEhJCgHjIAAjnIDmAAIAADngEhMxgHjIAAjnIDlAAIAADngEhQigHjIAAjnIDnAAIAADng");
        this.shape_1.setTransform(516.5, 72.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1033, 145);


    (lib.问路斜杠 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DF0303").s().p("AgnAoIAnhPIAoAAIgoBPg");
        this.shape.setTransform(4, 4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#0043EE").s().p("AgnAoIAnhPIAoAAIgoBPg");
        this.shape_1.setTransform(4, 4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 8, 8);


    (lib.问路实圈 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#DF0303").ss(1, 1, 1).p("AgiAAQAAgOAKgLQALgJANAAQANAAALAJQALALAAAOQAAAOgLAKQgLALgNAAQgNAAgLgLQgKgKAAgOg");
        this.shape.setTransform(3.5, 3.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#DF0303").s().p("AgYAYQgKgKAAgOQAAgOAKgLQALgJANAAQANAAALAJQALALAAAOQAAAOgLAKQgLAKgNABQgNgBgLgKg");
        this.shape_1.setTransform(3.5, 3.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#2A2AF4").ss(1, 1, 1).p("AgiAAQAAgOAKgLQALgJANAAQANAAALAJQALALAAAOQAAAOgLAKQgLALgNAAQgNAAgLgLQgKgKAAgOg");
        this.shape_2.setTransform(3.5, 3.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0043EE").s().p("AgYAYQgKgKAAgOQAAgOAKgLQALgJANAAQANAAALAJQALALAAAOQAAAOgLAKQgLAKgNABQgNgBgLgKg");
        this.shape_3.setTransform(3.5, 3.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 9, 9);


    (lib.问路圈圈 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#DF0303").ss(1, 1, 1).p("AAAgiQAOAAALAKQAKALAAANQAAAPgKAKQgLAKgOAAQgLAAgNgKQgKgKAAgPQAAgNAKgLQANgKALAAg");
        this.shape.setTransform(3.5, 3.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#DF0303").ss(1, 1, 1).p("AAbAAQAAALgIAIQgIAHgLAAQgKAAgIgHQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKg");
        this.shape_1.setTransform(3.5, 3.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#0043EE").ss(1, 1, 1).p("AAbAAQAAAKgIAJQgIAIgLAAQgKAAgIgIQgIgJAAgKQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKgAAjAAQAAAOgLAKQgLALgNAAQgNAAgKgLQgLgKAAgOQAAgOALgLQAKgJANAAQANAAALAJQALALAAAOg");
        this.shape_2.setTransform(3.5, 3.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_2 }] }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 9, 9);


    (lib.Circle_Red = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#D22C1A").ss(1.8, 1, 1).p("AAtAAQAAATgNANQgNANgTAAQgRAAgOgNQgNgNAAgTQAAgRANgOQAOgNARAAQATAAANANQANAOAAARg");
        this.shape.setTransform(4.5, 4.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 11, 11);


    (lib.Circle_Blue = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#1A3FD2").ss(1.8, 1, 1).p("AAtAAQAAATgNANQgNANgTAAQgRAAgOgNQgNgNAAgTQAAgRANgOQAOgNARAAQATAAANANQANAOAAARg");
        this.shape.setTransform(4.5, 4.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1, 11, 11);


    (lib.Alpha0Btn = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AmFBVIAAipIMLAAIAACpg");
        this.shape.setTransform(39, 8.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 78, 17);


    (lib._3网底框白 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 19), null, new cjs.Matrix2D(0.743, 0, 0, 0.743, -564.5, -81.5)).s().p("EhQdAKZIAA0xMCg6AAAIAAUxg");
        this.shape.setTransform(356.5, 69, 0.692, 1.038);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 713, 138);


    (lib.左翻不可按 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2C2C2C").s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgDIBWhsQAEgFAFAAQAGgBAFADQAFADABAFIArCdQACAFgDAGQgCAFgGACIgFABIgFgBgAArA3IgchkIg3BEIBTAgg");
        this.shape.setTransform(21.5, 22.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#000000", "#272423"], [0, 1], 51, -18.5, 51, 18.3).s().p("AiCCCQg2g2AAhMQAAhLA2g3QA3g2BLAAQBMAAA2A2QA3A3AABLQAABMg3A2Qg2A3hMgBQhLABg3g3g");
        this.shape_1.setTransform(22.5, 22.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AiICJQg6g5AAhQQAAhPA6g5QA5g6BPAAQBQAAA5A6QA6A5AABPQAABQg6A5Qg5A6hQAAQhPAAg5g6g");
        this.shape_2.setTransform(22.5, 22.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#000000", "#403937"], [0.376, 1], 0, -20.4, 0, 20.5).s().p("AieCeQhChCAAhcQAAhbBChDQBChCBcAAQBcAABDBCQBCBDAABbQAABchCBCQhDBChcABQhcgBhChCg");
        this.shape_3.setTransform(22.5, 22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 45, 45);


    (lib.右翻不可按 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#2C2C2C").s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgEIBWhrQAEgFAFgBQAGAAAFADQAFADABAFIArCdQACAFgDAFQgCAGgGACIgFABIgFgBgAArA2IgchkIg3BFIBTAfg");
        this.shape.setTransform(23.9, 22.2, 1, 1, 155);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#000000", "#272423"], [0, 1], 91.9, -19, 91.9, 17.8).s().p("AiCCCQg2g2AAhMQAAhLA2g3QA3g2BLAAQBMAAA2A2QA3A3AABLQAABMg3A2Qg2A3hMAAQhLAAg3g3g");
        this.shape_1.setTransform(22.5, 22.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AiICJQg6g5AAhQQAAhPA6g5QA5g6BPAAQBQAAA5A6QA6A5AABPQAABQg6A5Qg5A6hQAAQhPAAg5g6g");
        this.shape_2.setTransform(22.5, 22.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#000000", "#403937"], [0.376, 1], 0, -20.4, 0, 20.5).s().p("AieCeQhChCAAhcQAAhbBChDQBChCBcAAQBcAABDBCQBCBDAABbQAABchCBCQhDBChcABQhcgBhChCg");
        this.shape_3.setTransform(22.5, 22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 45, 45);


    (lib.玩家信息3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D7AD54").s().p("AmtBiQgWAAgMgJIABgBQABgDAEgCQAJgEAqgWIACgCIABgDQAAgKgggDIgQgCQgFgDgHgBIgBAAIgJgCIA0gqIABgCIAAgDIgCgDQgFgEgLgCIANgIIAHgEIACgDQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIgCgDIgRgOIgBgBIgTgLIgBAAQgFgCgBgHQgCgIAKgDIABgBQAJgEAPAAIMbAAIgDADQgEAFADAEQACADAFADIAAAAQAJAFAIAGQAHAGAJAEQAIAEARACQARABALAAIASAAIgSAFIgDACIgmgDIgDABIgYAQIgCACIgIAQQgCACgTAGQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABgBAAIgIAIIAAgBIgHAIIgBADIgBADQABADADABIAVACQATADAOAIQAKAGALAJIABAAQAIAGAOgBIARABIgNAFIgBABIgKAIIgjAaIgFADIglABIldAAImzgBg");
        this.shape.setTransform(47.4, 10);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 94.8, 20);


    (lib.玩家信息2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#221811").s().p("AmtBiQgWAAgMgJIABgBQABgDAEgCQAJgEAqgWIACgCIABgDQAAgKgggDIgQgCQgFgDgHgBIgBAAIgJgCIA0gqIABgCIAAgDIgCgDQgFgEgLgCIANgIIAHgEIACgDQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIgCgDIgRgOIgBgBIgTgLIgBAAQgFgCgBgHQgCgIAKgDIABgBQAJgEAPAAIMbAAIgDADQgEAFADAEQACADAFADIAAAAQAJAFAIAGQAHAGAJAEQAIAEARACQARABALAAIASAAIgSAFIgDACIgmgDIgDABIgYAQIgCACIgIAQQgCACgTAGQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABgBAAIgIAIIAAgBIgHAIIgBADIgBADQABADADABIAVACQATADAOAIQAKAGALAJIABAAQAIAGAOgBIARABIgNAFIgBABIgKAIIgjAaIgFADIglABIldAAImzgBg");
        this.shape.setTransform(47.4, 10);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 94.8, 20);


    (lib.汇总框 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 8), null, new cjs.Matrix2D(1, 0, 0, 1, -13, -14.5)).s().p("Ai8BlQg0AAAAgzIAAhjQAAgzA0AAIF6AAQAzAAAAAzIAABjQAAAzgzAAg");
        this.shape.setTransform(25, 11);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#7F5606", "#703B05", "#703B05", "#E3C02D"], [0, 0.259, 0.753, 1], -0.2, 11.1, -0.2, -11.9).s().rr(-29.25, -12.9, 58.5, 25.8, 7);
        this.shape_1.setTransform(25, 11, 0.856, 0.853);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50, 22);


    (lib.眯牌3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#EFC920", "#FEF502"], [0.533, 0.78], 0, 6.3, 0.1, -6.2).s().p("AAAA4QAGgSABglIAAg+IAPAAIAAAmIAKAAIAAgpIAPAAIAAApIAGAAIAAAPIgfAAIAAAMIAZAAIAAA+IgPAAIAAgvIgKAAQgBAcgJAVIgMgMgAg4BDIAAg1QgKAYgTAUIgGgIIAAAEIgbAAIAAAKIgQAAIAAh6IArAAIAABfQAPgPANgWIgWAAIAAgOIAdAAIAAgzIASAAIAAAzIAhAAIAAAOIgcAAQAOAYARAQIgKARQgPgQgLgbIAAA1gAh2AmIAMAAIAAgRIgMAAgAh2AFIAMAAIAAgOIgMAAgAh2gZIAMAAIAAgQIgMAAgABeBDIAAgZIgsAAIAAgQIARAAIgIgIQAIgEAGgGIgSAAIAAg/IATAAQACgFABgHIAUADIgDAJIAkAAIAAA/IglAAQgGAKgKAIIARAAIAAgOIARAAIAAAOIAYAAIAAAQIgYAAIAAAZgABigFIAQAAIAAgLIgOAAIgCALgABIgFIAKAAQACgFAAgGIgMAAgABkgdIAOAAIAAgLIgOAAgABIgdIANAAIAAgLIgNAAgAgkgcQAJgLAIgPIAOAIIgSAbgAhWgvIANgIIAOAbIgNAIIgOgbg");
        this.shape.setTransform(13.5, 6.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 27, 13.7);


    (lib.限注框2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 5), null, new cjs.Matrix2D(0.653, 0, 0, 0.653, -156.4, -51.2)).s().p("AKdHqIgfgVQgFgCgEgBIglABIgZgIIgPgNQgDgEgFgBQgFAAgEACQgEADgCAEQgDAEACAFIACARIgRALIgFADI1lAAIAAkHIAVgMQAEgDACgEQACgEAAgEIgFghIgBgFIgOgiIgGgoQAAgFgDgDIAAnSIAKgIIADgFIABgGIABhTIbEAAIAADXIgFAPIgLAKIgDAGIgBAHIABANIgFALIgBAFIAAAJQAAAFAEAEQADAEAGACIAIABIADARIABADIAAKLg");
        this.shape.setTransform(89, 50.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#341807").s().p("AKZH4IgkgWIgoABIgegKIgRgQIAFAaIgZARIgKAEI15AAIAAkdIAdgRIgDghIgRglIgFgrIgEgDIAAnfIAQgMIABhjIbiAAIAADpIgIAWIgOANIACAQIgFAOIAAAJIALACIAFgCIAHAdIACABIAAKfg");
        this.shape_1.setTransform(89, 50.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 178, 101);


    (lib.限注框1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.限注2();
        this.instance.setTransform(0, 0, 0.686, 0.687);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 203.1, 134);


    (lib.限注1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#221811").s().p("AkOBZIgbgaIAdgMIgegPIACgbIAXgaIgXg0IAZgUIIFAAIAOAUIAIAPIAPARIgGAkIgKgBIgMATIAVAJIAHAIIAPAcIgWgBIgDAMIABARg");
        this.shape.setTransform(29.9, 9);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 59.8, 18);


    (lib.本桌限注 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 文字
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#957528").s().p("AA4A5QAGgFgBgKIAAhqIBOAAIAABJIgFAAIANAQIgXANQAJAHAPAFQgGAJgFALQgXgKgKgPIgBARQgdAGgKAEgABQAvIAVgFQgJgOgFgTIgHAAgAByAZIATgQIgbAAQADAJAFAHgABQgHIAnAAIAAgLIgnAAgABQgjIAnAAIAAgMIgnAAgAhTBIIAAgeQgUAUgjAJIgIgSQAZgCAUgNIgrAAIAAgPIA9AAIAAgIIguAAIAAg2IArAAIAAggIAVAAIAAAJIA6AAIAAAPIg6AAIAAAIIAwAAIAAA2IguAAIAAAIIA9AAIAAAPIgsAAQATAMAaADQgFAIgDAJQgkgJgSgTIAAAegAhuAAIBKAAIAAgFIhKAAgAhugRIBKAAIAAgIIhKAAgAAIBIIAAiIIAwAAIAAANIgMAoQAPANAAAXQAAAXgdgBQgBgMgDgKIAFAAQAJABAAgIQAAgOgOgNIALgmIgMAAIAAB3gAjqBHIAAgZIgeAAIAAgSIgSARIgPgSQAjgXAWgiIgyAAIAAgTIA4AAIAAgWIAUAAIAAAWIA5AAIAAATIgyAAQAXAjAhAUIgPASQgdgYgTgdIAAAlIAeAAIAAATIgeAAIAAAZgAkHAbIAdAAIAAgkQgMATgRARgACaBBQAIgWAIgjIAUAHQgIAhgHAWIgVgFgAC+BBIAAgUIAtAAIAAgfIghAAIAAgSIAhAAIAAgZIgmAAIAAgTIApAAIgJgSIAVgGIAJAYIAiAAIAAATIgkAAIAAAZIAfAAIAAASIgfAAIAAAfIAoAAIAAAUgACYgRIALgNIAeAVIgOAOIgbgWgACdg2IAMgNIAaAVIgOAOIgYgWg");
        this.shape.setTransform(29.8, 7.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 叹
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#957528").s().p("AgHAIQgDgEgBgEQABgDADgEQADgEAEABQAFgBADAEQADAEABADQgBAEgDAEQgDADgFAAQgEAAgDgDg");
        this.shape_1.setTransform(68.5, 10.4, 1.092, 1.092);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#957528").s().p("AAAAZQgDABgDgDQgCAAAAgHIgBghIADgHIAGgBIAAAAIAGABQAFAFgBACIgCAgQABAIgDAAQgBADgFgBg");
        this.shape_2.setTransform(68.5, 5.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#957528").s().p("AgtAuQgSgTAAgbQAAgZASgUQATgTAaAAQAaAAATATQATAUAAAZQAAAbgTATQgTASgaABQgagBgTgSgAgngmQgRAQABAWQgBAXARARQAQARAXAAQAXAAAQgRQAQgRAAgXQAAgWgQgQQgQgRgXAAQgXAAgQARg");
        this.shape_3.setTransform(68.5, 7.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }] }).wait(1));

        // 触区
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("rgba(23,1,199,0)").s().p("AlEBUIAAioIKIAAIAACog");
        this.shape_4.setTransform(-0.7, -2, 1.2, 1.088, 0, 0, 0, -32.3, -8.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1, -1.9, 78, 18.5);


    (lib.左翻按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FCE188", "#FCFBDD"], [0, 1], 1.5, 7.9, -1.6, -7.9).s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgEIBWhrQAEgFAFgBQAGAAAFADQAFADABAFIArCdQACAFgDAFQgCAGgGACIgFABIgFgBgAArA2IgchkIg3BFIBTAfg");
        this.shape.setTransform(21.5, 22.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#A39452").s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgDIBWhsQAEgFAFAAQAGgBAFADQAFADABAFIArCdQACAFgDAGQgCAFgGACIgFABIgFgBgAArA3IgchkIg3BEIBTAgg");
        this.shape_1.setTransform(21.5, 22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape, p: { scaleX: 1, scaleY: 1, y: 22.5 } }] }).to({ state: [{ t: this.shape, p: { scaleX: 1.15, scaleY: 1.15, y: 22.6 } }] }, 1).to({ state: [{ t: this.shape_1 }] }, 1).wait(2));

        // 图层 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#311917", "#583829"], [0, 1], 0, 17.5, 0, -17.5).s().p("AiCB8Qg2g0AAhIQAAhGA2g0QA3gzBLAAQBMAAA2AzQA3A0AABGQAABIg3A0Qg2AzhMAAQhLAAg3gzg");
        this.shape_2.setTransform(22.5, 23.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#5D4D3E").s().p("AiCCCQg2g2AAhMQAAhLA2g3QA3g2BLAAQBMAAA2A2QA3A3AABLQAABMg3A2Qg2A3hMAAQhLAAg3g3g");
        this.shape_3.setTransform(22.5, 22.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#1A0E0D").s().p("AiICJQg6g5AAhQQAAhPA6g5QA5g6BPAAQBQAAA5A6QA6A5AABPQAABQg6A5Qg5A6hQAAQhPAAg5g6g");
        this.shape_4.setTransform(22.5, 22.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["#100706", "#2D1D1B", "#463128"], [0, 0.494, 1], 0, -20.4, 0, 20.5).s().p("AieCeQhChCAAhcQAAhbBChDQBChCBcAAQBcAABDBCQBCBDAABbQAABchCBCQhDBChcABQhcgBhChCg");
        this.shape_5.setTransform(22.5, 22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }] }).wait(4));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 45, 45);


    (lib.右翻按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FCE188", "#FCFBDD"], [0, 1], -2.8, -7.8, -1.3, 8.2).s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgEIBWhrQAEgFAFgBQAGAAAFADQAFADABAFIArCdQACAFgDAFQgCAGgGACIgFABIgFgBgAArA2IgchkIg3BFIBTAfg");
        this.shape.setTransform(23.9, 22.2, 1, 1, 155);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#A39452").s().p("AA8BdIiBgxQgFgCgDgEQgCgEAAgFQAAgFADgEIBWhrQAEgFAFgBQAGAAAFADQAFADABAFIArCdQACAFgDAFQgCAGgGACIgFABIgFgBgAArA2IgchkIg3BFIBTAfg");
        this.shape_1.setTransform(23.9, 22.2, 1, 1, 155);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape, p: { regX: 0, regY: 0, scaleX: 1, scaleY: 1, rotation: 155, x: 23.9, y: 22.2 } }] }).to({ state: [{ t: this.shape, p: { regX: 2.6, regY: -0.2, scaleX: 1.149, scaleY: 1.149, rotation: 155.2, x: 22.1, y: 23.5 } }] }, 1).to({ state: [{ t: this.shape_1 }] }, 1).wait(2));

        // 图层 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#311917", "#583829"], [0, 1], 0, 17.5, 0, -17.5).s().p("AiCB8Qg2g0AAhIQAAhGA2g0QA3gzBLAAQBMAAA2AzQA3A0AABGQAABIg3A0Qg2AzhMAAQhLAAg3gzg");
        this.shape_2.setTransform(22.5, 23.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#5D4D3E").s().p("AiCCCQg2g2AAhMQAAhLA2g3QA3g2BLAAQBMAAA2A2QA3A3AABLQAABMg3A2Qg2A3hMAAQhLAAg3g3g");
        this.shape_3.setTransform(22.5, 22.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#1A0E0D").s().p("AiICJQg6g5AAhQQAAhPA6g5QA5g6BPAAQBQAAA5A6QA6A5AABPQAABQg6A5Qg5A6hQAAQhPAAg5g6g");
        this.shape_4.setTransform(22.5, 22.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["#100706", "#2D1D1B", "#463128"], [0, 0.494, 1], 0, -20.4, 0, 20.5).s().p("AieCeQhChCAAhcQAAhbBChDQBChCBcAAQBcAABDBCQBCBDAABbQAABchCBCQhDBChcABQhcgBhChCg");
        this.shape_5.setTransform(22.5, 22.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }] }).wait(4));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 45, 45);


    (lib.闲对区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AqfDxQgDgBgCgCQgCgCgBgDQgBgDABgCIC7oyQABgEADgBQADgCADAAQIZBUJnACQAFAAACADQADADAAAEIAAJBQAAAEgDADQgCADgFAAQrLgCpyhjg");
        this.shape.setTransform(68.1, 34.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 136.2, 68.5);


    (lib.闲对 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#003691").s().p("ACBA/IACgTIAYABIAJhGIgZACIADgRIAygHIgLBeIAYAAIgCATgAAeA5IADgTIAZABIALhGIgZAEIACgSIAygHIgNBdIAZABIgDAUgAjMAsIAFgSIAZgBIAQhFIgZAEIADgTIAzgGIgVBcIAZACIgFATgAguArQgHgBgDgCQgDgGACgFQAAgFAFgEQAEgEAHACQAGAAAEAEQADADgBAFQgBAGgFAEQgEADgEAAIgDAAgAgkgPQgGAAgCgDQgEgEABgGQABgFAGgCQAEgFAGABQAGgBADAFQAEAEAAAGQgCAFgFADQgFACgFAAIgCAAg");
        this.shape.setTransform(22.4, 35.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#033383").s().p("ACRB3QgBgRgEgUIApAEQATAAACgQIAKhqIhLgDIADgdIBKADIACglIAlACIgCAlIAXABIgCAdIgYgBIgIB2QgCASgJAKQgMAIgOABIgGAAIg0gCgAgBBLQAfgWAYgfIgjhAIAegOIAdAvQAMgZAIgcIhLgDIAEgdIBuAEIgCAdQgQAvgXAjIAgA3IgjASIgVgnQgaAdgiAaQgIgQgFgTgAhnBsQABgTgEgQQARADANAAQARABAEgOIAaiNIhlgEIAGgbICDAGIgaCpQgDASgIAKQgIAJgNAFQgGACgNAAIghgCgAkRBjIAxjBIAkABIggB9QAogYAdgfIgrgBIAHgcIA1ADIAEgWIAjABIgFAWIA0ACIgFAcIg1gCIgEAVIAMgGQAeAWAQASIgcAVIgigjIgMA/IglgCIAOhFQgaAcgfAXQgIgPgHgKIgPA+gAB9gLIAbgOQAXAbAUAeIgjAQQgRgfgSgcgAi9hwIAigIIASAlIgmAIIgOglg");
        this.shape_1.setTransform(27.5, 12.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0.3, 54.9, 42.1);


    (lib.闲区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AGfK2IgBAAQqVhtotjbQgDgBgCgCQgCgDAAgCIABgFIABgBIJjwOIABgCQACgDAEgBQADgCADABQCEAqCIAkQFWBYF6AxIACAAIADACIACADIABACIABAEIgBACImBSBQgBADgDACIgEABIgDAAg");
        this.shape.setTransform(81.2, 69.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 162.5, 139);


    (lib.闲字 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#003691").s().p("ABjBqIAMgbIAlAMIAwhlIgqgDIANgbIBRAJIg/CFIAlAKIgNAcgAgbA8QgIgEgCgGQgGgHAEgHQAEgIAJgDQAIgEALADQAHACACAIQAEAFgDAJQgDAIgIADIgNACIgGgBgAj3ACIAPgYIAkAKIA0hiIgpgDIAOgaIBPAHIhFCEIAkAIIgNAbgAAOgVQgLgDgDgHQgCgHADgGQADgIAJgDQAIgDALACQAIADADAHQAEAGgDAIQgFAHgIADIgJACIgIgBg");
        this.shape.setTransform(24.9, 61.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#033383").s().p("AgDDcQAIgjAEggQAeALAaAGQAhAJAMgaIB3kEIi/gyIAYgwIEBBEIiLE5QgPAggUAPQgVAQgbABIgBAAQgcAAhHgUgAhoCRIA9h9QhAAphDAdQgJgfgJgVIg6BwIhEgTIC4leIBAASIh0DhQBSgbBLgwIhRgWIAbgyIBhAaIATgoIBCAQIgSApIBjAbIgXA0IhlgbIgVAoIAYgKQAvA7AbAoIhDAeQgXgpgZgoIg1BxgAg+jtIBGgCQAIAhAHAqIhLAEQgEgsgGghg");
        this.shape_1.setTransform(44.9, 24.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 76.9, 75.8);


    (lib.箭头 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ah3hjIB3A5IB4g4Ih4DFg");
        this.shape.setTransform(12, 10);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 24, 20);


    (lib.注区线 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#D2D2D2", "#FFFFFF", "#D2D2D2"], [0, 0.471, 1], 3, -51, 0, 3, -51, 144.1).s().p("AABMLIgSAAQrUgBp3hlIghgGIgFgBQqZhvoxjfIghgNIKLxOIAiALQHNCRILBDIAnAFQHBA3HvAAIAmAAQHrAAHDg3IAmgEQIThFHFiPIAigLIKKROIgfAMQoyDgqaBuIglAHQp2BlrSABIgUAAgASUBBQoZBUpmABQgFABgDADQgCACAAAFIAAJDQAAADACAEQADADAFAAQLMgCJxhjIAFgCIADgGIAAgGIi7ozQgBgDgDgCQgCgCgDAAIgCAAgAyaBCQgDACgCAEIi6IzQgBADABADQABADACACQACACADABQJxBjLPACQADAAADgDQAEgEAAgDIAApDQAAgFgEgCQgDgDgDgBQpogBobhUIgBAAQgDAAgCABgAfSrwQnKCSoUBFQgDAAgCABQgCACgBAEQgBACABADIGASJQACADADACQADACAEgBQKXhtIvjcIAFgEIABgEIgBgGIplwXQgCgDgDgBIgDgBIgEABgA/WrxIgCAAQgDABgCADIpkQXQgCADAAACIAAABIACAFQABACADABQIuDdKYBtIAEAAIADgBQADgCABgEIGByIQABgDgBgDIgBgDIgCgCQgDgBgDAAQoShGnLiSIgDgBIgCABgAvToUQgEACgBADIi6IyQgBACAAADIAEAGQACABADAAQIWBTJjABIASAAIAUAAQJhgBIVhSIAFgCIADgFIAAgGIi7oxQgBgDgCgDQgEgBgDAAQnDA5n2ABIgUAAIgSAAQn5gBnDg5IgBAAQgDAAgCABg");
        this.shape.setTransform(267, 78);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 534, 156);


    (lib.庄对区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AqjFTQgDgDAAgEIAApBQAAgEADgDQADgDAEAAQJmgCIYhTQADgBADACQADACACADIC6IyIAAAGIgDAFIgFACQpxBjrKACQgEAAgDgDg");
        this.shape.setTransform(68, 34.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 136, 68.4);


    (lib.庄对 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#74270E").s().p("AiODDIAYgCIgJhIIgYAHIgCgTIAvgNIANBfIAZgBIACATIhKAGgABZCyIAYgDIgOhGIgXAGIgEgSIAugOIAUBeIAYgBIAEASIhJAGgAAEC+QgEgDAAgFQgBgGABgEQAFgEAGABQAFgBAFADQAFADACAGQAAAFgDAEQgFAEgGABQgGAAgEgEgAC4CrIAZgCIgRhHIgYAHIgDgUIAtgNIAXBeIAYgBIAFASIhKAGgAgECEQgFgEgBgEQAAgHADgDQADgDAFgBQAFgBAGADQAEAEABAFQABAGgEADQgDAEgGABIgBAAQgEAAgEgDgAkFAMQAYgngGg0IgIhLIBhgGIgOgVIAogMIARAeIBUgGIAFAbIi+AOIAFAtQAJBTghAtQgQgVgOgMgAjPAAIBYgFIgIg2IhDAFIgDgeIBCgFIgFglIAlgDIAFAmIBFgGIAFAeIhFAFIAIA3IBRgGIAGAdIjRAPgAAMgJQAZgbAOggIg3g9IAWgSIArAsQAFgbgCgcIhJAGIgFgeIBrgHIAFAdQADAugLAoIAzAyIgdAWIgiglQgQAigZAYIgZgcgACZgTIApgCQASgBgDgQIgahqIhJAFIgHgeIBJgFIgKglIAkgDIAJAlIAXgBIAIAdIgXACIAeB2QAEARgFALQgHAIgOACIg4AEQgHgOgLgSgABrhtIAXgSIA7AzIgcAVQgagdgcgZg");
        this.shape.setTransform(26.2, 21.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 52.5, 43);


    (lib.庄区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AmkK2IgBgBQgEgCgBgDImAyCIgBgCIAAgBIABgCQAAgEADgCIADgBIACgBQIThEHJiSQADgBAEABQADACACADIABACIJkQOIAAACIABAEIgCAFIgEADQjhBZjyBGQlkBomMBBIgBAAIgDAAIgDAAg");
        this.shape.setTransform(81.3, 69.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 162.5, 139);


    (lib.庄095 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#74270E").s().p("AlZF9IAkgJIgphrIghAQIgLgdIBCgfIA3COIAjgJIALAdIhrAagAh+FSQgIgEgEgIQgCgIADgHQAFgGAJgCQAIgCAIADQAIAEAEAIQACAIgDAHQgEAHgKACIgFAAQgGAAgFgCgAgnD5QgRgsAHgbIAEgKQAJgSAWgGIAEgBQAQgFARAGQARAGAOASQAOASALAdQARAqgHAbQgHAageAIQgJACgIAAQguAAgchHgAgBCqQgaAHAYA+QAVA6AZgHQAZgGgYg7QgVg3gWAAIgCAAgACKEjQgJgDgDgJQgDgIAEgHQAFgGAJgBQAIgEAIAFQAIADAEAIQACAJgDAGQgEAHgKACIgFABQgGAAgFgDgADLESIgLgdQAKAEAKAAIAPgCIABgBQApgJgTg2IgBgBQgEASgSAHIgGABIgJACQgRABgPgJQgTgLgJgXIAAAAQgFgNAAgLQAAgLAFgLQAKgUAbgHQALgEAMACIAPAEQAHADAGAFQATANANAaIAHAPIADAJQANAngJAaQgJAegjAJIgPADIgPABIgJgCgADGB7QgLACgDAKQgCAEABAFQAAAGACAHQADAGADAFQAEAFAGAEQAFACAGABIAJgBIAGgBQAFgEADgGQADgJgDgLIgCgEQgDgFgDgEIgIgIIgHgDQgEgCgFAAIgFABgAigD6QgJgEgDgHQgCgIADgHQAFgGAJgCQAJgDAIAEQAIAEADAHQADAJgEAGQgDAHgKADIgFABQgHAAgFgEgAFXDwIgMggQAWAHATgEQAPgDAGgKQAGgJgFgNIgEgIQgMgRgfAIQgLACgQAGIgjhcIBdgXIALAdIg+APIANAkIANgFQAagHAVAKQAKAFAIAJQAHAIAFAMIABAEQAIAYgKARQgNAUgeAIQgQAEgNAAIgOgBgAlmApQAYhSgqhlIg6iUIC4gtQgUgWgQgQIBHgjIAyAzICggnIAWA4IlpBZIAjBZQA/CfgmBdQgpggghgRgAkFAAICggnIgqhmIh+AfIgWg6IB9gfIgehIIBGgRIAeBIIB/ggIAYA5IiBAgIAqBnICYgoIAZA7Il/Beg");
        this.shape.setTransform(43.5, 41);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 87.1, 81.9);


    (lib.和区 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AABFNIgSAAQpjgCoWhSQgDAAgCgCIgDgFQgBgDABgCIC7oyQABgDADgCQADgCADABQHEA4H4ABIASAAIAUAAQH2gBHDg4QAEgBADACQADACABAEIC6IxIAAAGIgDAFIgFACQoVBRphACIgUAAg");
        this.shape.setTransform(117.2, 33.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 234.4, 66.6);


    (lib.和字 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#006411").s().p("AnJCGIAShrQgcAfgiAdQgDgUgIgbQAtghAfgkIg6AAIAHgjIBAAAIAEgdQgbAAgZADIAAggQAlgDAkgBQAqgEAmgDIAGAfIg5AFIgGAhIA8AAIgFAjIg8AAIgEAdIAQgJQAaAPAYASIglAeQgRgRgPgLIgQBsgAlFB5IAbjuICfAAIgJDsIg2AAIACgZIhEAAIgDAbgAkJA2IBEAAIAIiIIg/AAgAGPBLQgVgLgCgSQgFgaAmgNIAAgBQgkgHgCgVQgFgSAUgIQAOgLAaAAQAZAAAUAKQATAJAEAQQADAVgiAJIAAABQATAEAOAKQANAJADAOIABAIQgCAMgNAKQgSALggABQgegDgTgIgAGeAtQABAHALAFQAIAFANACQAMgCAJgFQAGgFAAgHQgEgRgfgJQgcAJADARgAGegiQgJAFAFAHQAAANAaAGQAWgHgBgMQgEgHgEgFQgJgEgJAAQgMAAgFAEgAAHBSIgBgZIAnAAIgChVIgpAFIgCgXIBRgNIAGB0IAoAAIABAZgADvBFQgJgFACgHQgDgGAKgFQADgFALABQAJgBAKAFQAFAFACAGQgBAHgFAFQgGAEgJACQgLgCgIgEgADmgEQgHgGAAgEQgCgIAGgCQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAABQAFgHAKADQAIgDAKAHIACABQADACACAIQAAAFgFAFQgHAEgJAAQgKAAgIgEg");
        this.shape.setTransform(50.9, 13.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.5, 0, 102.7, 26.8);


    (lib.删除按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ag3AFIAAgIIBvAAIAAAIg");
        this.shape.setTransform(9, 9.3, 1.212, 2.432, -135);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("Ag3AFIAAgIIBvAAIAAAIg");
        this.shape_1.setTransform(8.9, 8.9, 1.212, 2.433, -45);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#980000", "#FF0000"], [0, 1], 0, 9, 0, -9).s().p("Ag+A/QgbgaAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");
        this.shape_2.setTransform(9, 9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#FF0000", "#FF4141"], [0, 1], 0, 10, 0, -10).s().p("AhFBGQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAegpgBQgoABgdgeg");
        this.shape_3.setTransform(9, 9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#C6C6C6").s().p("AgBARIgmAlIgRgRIAmglIglgkIARgSIAmAmIAngpIARARIgpAoIAqApIgSARg");
        this.shape_4.setTransform(9, 9.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#850000").s().p("AhCBCQgcgbAAgnQAAgmAcgcQAcgcAmAAQAnAAAbAcQAcAcAAAmQAAAngcAbQgbAcgnAAQgmAAgcgcg");
        this.shape_5.setTransform(9, 9, 0.947, 0.947);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_2 }, { t: this.shape_1, p: { scaleX: 1.212, scaleY: 2.433 } }, { t: this.shape, p: { scaleX: 1.212, scaleY: 2.432 } }] }).to({ state: [{ t: this.shape_3 }, { t: this.shape_1, p: { scaleX: 1.347, scaleY: 2.704 } }, { t: this.shape, p: { scaleX: 1.346, scaleY: 2.702 } }] }, 1).to({ state: [{ t: this.shape_5 }, { t: this.shape_4 }] }, 1).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 18, 18);


    (lib.下注区底图 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.下注区底框();
        this.instance.setTransform(0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 529, 217.5);


    (lib._3网 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#976C4F").s().p("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");
        this.shape.setTransform(288.5, 72.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 图层 3
        this.instance = new lib._3网底框白();
        this.instance.setTransform(452.3, 69.4, 0.878, 1.043, 0, 0, 0, 515.1, 66.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 图层 4
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(102,255,0,0)").s().p("EAu8ALLIAAhuIBuAAIAABugEAtFALLIAAhuIBtAAIAABugEArNALLIAAhuIBuAAIAABugEApUALLIAAhuIBuAAIAABugEAndALLIAAhuIBtAAIAABugEAllALLIAAhuIBuAAIAABugEAjsALLIAAhuIBuAAIAABugEAh1ALLIAAhuIBtAAIAABugAf9LLIAAhuIBuAAIAABugAeELLIAAhuIBuAAIAABugAcNLLIAAhuIBtAAIAABugAaVLLIAAhuIBuAAIAABugAYcLLIAAhuIBuAAIAABugAWlLLIAAhuIBtAAIAABugAUtLLIAAhuIBuAAIAABugAS0LLIAAhuIBuAAIAABugAQ9LLIAAhuIBtAAIAABugAPFLLIAAhuIBuAAIAABugANMLLIAAhuIBuAAIAABugALVLLIAAhuIBtAAIAABugAJdLLIAAhuIBuAAIAABugAHkLLIAAhuIBuAAIAABugAFtLLIAAhuIBtAAIAABugAD1LLIAAhuIBuAAIAABugAB8LLIAAhuIBkAAIAABugAAFLLIAAhuIBtAAIAABugAhxLLIAAhuIBuAAIAABugAjqLLIAAhuIBuAAIAABugAlhLLIAAhuIBtAAIAABugAnZLLIAAhuIBuAAIAABugApSLLIAAhuIBuAAIAABugArJLLIAAhuIBtAAIAABugAtBLLIAAhuIBuAAIAABugAu6LLIAAhuIBuAAIAABugAwxLLIAAhuIBtAAIAABugAypLLIAAhuIBuAAIAABugA0iLLIAAhuIBuAAIAABugA2ZLLIAAhuIBtAAIAABugA4RLLIAAhuIBuAAIAABugA6KLLIAAhuIBuAAIAABugA8BLLIAAhuIBtAAIAABugA95LLIAAhuIBuAAIAABugA/yLLIAAhuIBuAAIAABugEghpALLIAAhuIBtAAIAABugEgjhALLIAAhuIBuAAIAABugEglaALLIAAhuIBuAAIAABugEgnRALLIAAhuIBtAAIAABugEgpJALLIAAhuIBuAAIAABugEgrCALLIAAhuIBuAAIAABugEgs5ALLIAAhuIBtAAIAABugEguxALLIAAhuIBuAAIAABugEgwqALLIAAhuIBuAAIAABugEAu8AJTIAAhvIBuAAIAABvgEAtFAJTIAAhvIBtAAIAABvgEArNAJTIAAhvIBuAAIAABvgEApUAJTIAAhvIBuAAIAABvgEAndAJTIAAhvIBtAAIAABvgEAllAJTIAAhvIBuAAIAABvgEAjsAJTIAAhvIBuAAIAABvgEAh1AJTIAAhvIBtAAIAABvgAf9JTIAAhvIBuAAIAABvgAeEJTIAAhvIBuAAIAABvgAcNJTIAAhvIBtAAIAABvgAaVJTIAAhvIBuAAIAABvgAYcJTIAAhvIBuAAIAABvgAWlJTIAAhvIBtAAIAABvgAUtJTIAAhvIBuAAIAABvgAS0JTIAAhvIBuAAIAABvgAQ9JTIAAhvIBtAAIAABvgAPFJTIAAhvIBuAAIAABvgANMJTIAAhvIBuAAIAABvgALVJTIAAhvIBtAAIAABvgAJdJTIAAhvIBuAAIAABvgAHkJTIAAhvIBuAAIAABvgAFtJTIAAhvIBtAAIAABvgAD1JTIAAhvIBuAAIAABvgAB8JTIAAhvIBkAAIAABvgAAFJTIAAhvIBtAAIAABvgAhxJTIAAhvIBuAAIAABvgAjqJTIAAhvIBuAAIAABvgAlhJTIAAhvIBtAAIAABvgAnZJTIAAhvIBuAAIAABvgApSJTIAAhvIBuAAIAABvgArJJTIAAhvIBtAAIAABvgAtBJTIAAhvIBuAAIAABvgAu6JTIAAhvIBuAAIAABvgAwxJTIAAhvIBtAAIAABvgAypJTIAAhvIBuAAIAABvgA0iJTIAAhvIBuAAIAABvgA2ZJTIAAhvIBtAAIAABvgA4RJTIAAhvIBuAAIAABvgA6KJTIAAhvIBuAAIAABvgA8BJTIAAhvIBtAAIAABvgA95JTIAAhvIBuAAIAABvgA/yJTIAAhvIBuAAIAABvgEghpAJTIAAhvIBtAAIAABvgEgjhAJTIAAhvIBuAAIAABvgEglaAJTIAAhvIBuAAIAABvgEgnRAJTIAAhvIBtAAIAABvgEgpJAJTIAAhvIBuAAIAABvgEgrCAJTIAAhvIBuAAIAABvgEgs5AJTIAAhvIBtAAIAABvgEguxAJTIAAhvIBuAAIAABvgEgwqAJTIAAhvIBuAAIAABvgEAu8AHaIAAhuIBuAAIAABugEAtFAHaIAAhuIBtAAIAABugEArNAHaIAAhuIBuAAIAABugEApUAHaIAAhuIBuAAIAABugEAndAHaIAAhuIBtAAIAABugEAllAHaIAAhuIBuAAIAABugEAjsAHaIAAhuIBuAAIAABugEAh1AHaIAAhuIBtAAIAABugAf9HaIAAhuIBuAAIAABugAeEHaIAAhuIBuAAIAABugAcNHaIAAhuIBtAAIAABugAaVHaIAAhuIBuAAIAABugAYcHaIAAhuIBuAAIAABugAWlHaIAAhuIBtAAIAABugAUtHaIAAhuIBuAAIAABugAS0HaIAAhuIBuAAIAABugAQ9HaIAAhuIBtAAIAABugAPFHaIAAhuIBuAAIAABugANMHaIAAhuIBuAAIAABugALVHaIAAhuIBtAAIAABugAJdHaIAAhuIBuAAIAABugAHkHaIAAhuIBuAAIAABugAFtHaIAAhuIBtAAIAABugAD1HaIAAhuIBuAAIAABugAB8HaIAAhuIBkAAIAABugAAFHaIAAhuIBtAAIAABugAhxHaIAAhuIBuAAIAABugAjqHaIAAhuIBuAAIAABugAlhHaIAAhuIBtAAIAABugAnZHaIAAhuIBuAAIAABugApSHaIAAhuIBuAAIAABugArJHaIAAhuIBtAAIAABugAtBHaIAAhuIBuAAIAABugAu6HaIAAhuIBuAAIAABugAwxHaIAAhuIBtAAIAABugAypHaIAAhuIBuAAIAABugA0iHaIAAhuIBuAAIAABugA2ZHaIAAhuIBtAAIAABugA4RHaIAAhuIBuAAIAABugA6KHaIAAhuIBuAAIAABugA8BHaIAAhuIBtAAIAABugA95HaIAAhuIBuAAIAABugA/yHaIAAhuIBuAAIAABugEghpAHaIAAhuIBtAAIAABugEgjhAHaIAAhuIBuAAIAABugEglaAHaIAAhuIBuAAIAABugEgnRAHaIAAhuIBtAAIAABugEgpJAHaIAAhuIBuAAIAABugEgrCAHaIAAhuIBuAAIAABugEgs5AHaIAAhuIBtAAIAABugEguxAHaIAAhuIBuAAIAABugEgwqAHaIAAhuIBuAAIAABugEAu8AFZIAAhkIBuAAIAABkgEAtFAFZIAAhkIBtAAIAABkgEArNAFZIAAhkIBuAAIAABkgEApUAFZIAAhkIBuAAIAABkgEAndAFZIAAhkIBtAAIAABkgEAllAFZIAAhkIBuAAIAABkgEAjsAFZIAAhkIBuAAIAABkgEAh1AFZIAAhkIBtAAIAABkgAf9FZIAAhkIBuAAIAABkgAeEFZIAAhkIBuAAIA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BugAPFByIAAhuIBuAAIAABugANMByIAAhuIBuAAIAABugALVByIAAhuIBtAAIAABugAJdByIAAhuIBuAAIAABugAHkByIAAhuIBuAAIAABugAFtByIAAhuIBtAAIAABugAD1ByIAAhuIBuAAIAABugAB8ByIAAhuIBuAAIAABugAAFByIAAhuIBtAAIAABugAhxByIAAhuIBuAAIAABugAjqByIAAhuIBuAAIAABugAlhByIAAhuIBtAAIAABugAnZByIAAhuIBuAAIAABugApSByIAAhuIBuAAIAABugArJByIAAhuIBtAAIAABugAtBByIAAhuIBuAAIAABugAu6ByIAAhuIBuAAIAABugAwxByIAAhuIBtAAIAABugAypByIAAhuIBuAAIAABugA0iByIAAhuIBuAAIAABugA2ZByIAAhuIBtAAIAABugA4RByIAAhuIBuAAIAABugA6KByIAAhuIBuAAIAABugA8BByIAAhuIBtAAIAABugA95ByIAAhuIBuAAIAABugA/yByIAAhuIBuAAIAABugEghpAByIAAhuIBtAAIAABugEgjhAByIAAhuIBuAAIAABugEglaAByIAAhuIBuAAIAABugEgnRAByIAAhuIBtAAIAABugEgpJAByIAAhuIBuAAIAABugEgrCAByIAAhuIBuAAIAABugEgs5AByIAAhuIBtAAIAABugEguxAByIAAhuIBuAAIAABugEgwqAByIAAhuIBuAAIAABugEAu8gANIAAhkIBuAAIAABkgEAtFgANIAAhkIBtAAIAABkgEArNgANIAAhkIBuAAIAABkgEApUgANIAAhkIBuAAIAABkgEAndgANIAAhkIBtAAIAABkgEAllgANIAAhkIBuAAIAABkgEAjsgANIAAhkIBuAAIAABkgEAh1gANIAAhkIBtAAIAABkgAf9gNIAAhkIBuAAIAABkgAeEgNIAAhkIBuAAIAABkgAcNgNIAAhkIBtAAIAABkgAaVgNIAAhkIBuAAIAABkgAYcgNIAAhkIBuAAIAABkgAWlgNIAAhkIBtAAIAABkgAUtgNIAAhkIBuAAIAABkgAS0gNIAAhkIBuAAIAABkgAQ9gNIAAhkIBtAAIAABkgAPFgNIAAhkIBuAAIAABkgANMgNIAAhkIBuAAIAABkgALVgNIAAhkIBtAAIAABkgAJdgNIAA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IBtAAIAABvgAypnjIAAhvIBuAAIAABvgA0injIAAhvIBuAAIAABvgA2ZnjIAAhvIBtAAIAABvgA4RnjIAAhvIBuAAIAABvgA6KnjIAAhvIBuAAIAABvgA8BnjIAAhvIBtAAIAABvgA95njIAAhvIBuAAIAABvgA/ynjIAAhvIBuAAIAABvgEghpgHjIAAhvIBtAAIAABvgEgjhgHjIAAhvIBuAAIAABvgEglagHjIAAhvIBuAAIAABvgEgnRgHjIAAhvIBtAAIAABvgEgpJgHjIAAhvIBuAAIAABvgEgrCgHjIAAhvIBuAAIAABvgEgs5gHjIAAhvIBtAAIAABvgEguxgHjIAAhvIBuAAIAABvgEgwqgHjIAAhvIBuAAIAABvgEAu8gJcIAAhuIBuAAIAABugEAtFgJcIAAhuIBtAAIAABugEArNgJcIAAhuIBuAAIAABugEApUgJcIAAhuIBuAAIAABugEAndgJcIAAhuIBtAAIAABugEAllgJcIAAhuIBuAAIAABugEAjsgJcIAAhuIBuAAIAABugEAh1gJcIAAhuIBtAAIAABugAf9pcIAAhuIBuAAIAABugAeEpcIAAhuIBuAAIAABugAcNpcIAAhuIBtAAIAABugAaVpcIAAhuIBuAAIAABugAYcpcIAAhuIBuAAIAABugAWlpcIAAhuIBtAAIAABugAUtpcIAAhuIBuAAIAABugAS0pcIAAhuIBuAAIAABugAQ9pcIAAhuIBtAAIAABugAPFpcIAAhuIBuAAIAABugANMpcIAAhuIBuAAIAABugALVpcIAAhuIBtAAIAABugAJdpcIAAhuIBuAAIAABugAHkpcIAAhuIBuAAIAABugAFtpcIAAhuIBtAAIAABugAD1pcIAAhuIBuAAIAABugAB8pcIAAhuIBuAAIAABugAAFpcIAAhuIBtAAIAABugAhxpcIAAhuIBuAAIAABugAjqpcIAAhuIBuAAIAABugAlhpcIAAhuIBtAAIAABugAnZpcIAAhuIBuAAIAABugApSpcIAAhuIBuAAIAABugArJpcIAAhuIBtAAIAABugAtBpcIAAhuIBuAAIAABugAu6pcIAAhuIBuAAIAABugAwxpcIAAhuIBtAAIAABugAyppcIAAhuIBuAAIAABugA0ipcIAAhuIBuAAIAABugA2ZpcIAAhuIBtAAIAABugA4RpcIAAhuIBuAAIAABugA6KpcIAAhuIBuAAIAABugA8BpcIAAhuIBtAAIAABugA95pcIAAhuIBuAAIAABugA/ypcIAAhuIBuAAIAABugEghpgJcIAAhuIBtAAIAABugEgjhgJcIAAhuIBuAAIAABugEglagJcIAAhuIBuAAIAABugEgnRgJcIAAhuIBtAAIAABugEgpJgJcIAAhuIBuAAIAABugEgrCgJcIAAhuIBuAAIAABugEgs5gJcIAAhuIBtAAIAABugEguxgJcIAAhuIBuAAIAABugEgwqgJcIAAhuIBuAAIAABug");
        this.shape_1.setTransform(313.5, 72.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -0.2, 626, 145);


    (lib.赢4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Aj2EPQgEgDAFgFIAHgKQAKgOAJgQQAIgRAGgaQAGgZACgZQACgagCgRQgBgTgDgRQgEgPgEgLQgGgLACgCQACgCALACIAmAJIAagMIAFgLQgGgDgEgDQgDgDgDgLIgIgdQgEgLgGgLIgHgQQgCgFADgDQADgEAxAOIB6gfIABgNIBFAVIgNAVIgWAtIAYAMIAcgMIABgbIA9AhIgGAcQgEALgBAQQgCAQABAgQgBAhAFANQAFARAJAJQALAIAKgBQAJgBADgGQADgFgBgNIgDgTIgDgRQAAgGACgCQADgCAFAFIAJANQAGAGAOAbIAQAZIAKAXIgTAMQgKAEghADQgiAEgYgVQgagVgBgXIgFgkIgUgLIgBAdIgIAkQgEAWgHANQgHANgMAPIgQATIgIAGQgDADgDgBQgCgBACgGIAUgpIgKgIIgegXQgPAngIALQgIAMgGAHIgKALQgGAIgDgDQgEgDAFgJIANghQAGgPAIgbQAGgagGgsQgBgMgDgCIgJgNIAFAuQADAcAAAKQABAKgDABQgDABgGgFIgSgKQgEgDgCgDQgBgEABgMQACgGgCgPIgLhWIgFAWQgBAJAEAhIAOB+QACAZACAJIABANQAAAEgDACQgDACgHgDQgTgFgVgMIgdgRIgIgFQgIgGAAgCQAAgDAHgDQAFgCALAAQAMgBAOgFIgEgmIgjANQgMAngMAQQgMARgNALQgOAMgJADIgIAEIgFACIgCgBgAg1AbIADATIAcACQAKABADABQACACgBAMQgBALACAUQACAUAAAIIAAAXIAVABQANABAJgBQAEgQABgKQABgLgBggQAAghgBgFIgIglQgFANgCAJQgBAIADAWIAFAoIABAYIABALQABAEgDACQgBABgGgCIgUgKQgGgEgBgDIAAgNIAAgQIgHhLgAicBrIgCAWIAggKIgBgZgAidA1IAAAXIAagLIgCgYgABHAEIAGArIAXAEIgDg5gAhmgUIgPAQIAbALIgDgHQgBgFABgBIAjAFIAtgQIADgOIAsAUIgKgXIgUgSgAhvg9IADASIBtggIACgSgAiih0IADgNIACgTIgeALQgPAFgeAUIgUhbQAaAEAkADQAkADBPgQIgLgMIgigfQgPgMABgCQABgDAPgBQATgBAQABIAeADQAPACADAEQACAEgDANIgIAcQBCgNAegLQAegMAegQIAMBNQgqgBgWACQgWAChXAMIhAALIACAVQAegEAxgKQAvgKALgGIAWgLIALAtQglABg5ALQg8ALgUAKIgYAMg");
        mask.setTransform(25.3, 27.2);

        // 图层 2
        this.instance = new lib.光2();
        this.instance.setTransform(48.3, 0.4, 1, 1, 0, 0, 0, 17.8, 40.5);
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-9, 13, 70, 73);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: -23, y: 41 }, 24).wait(6));

        // 图层 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(223,5,5,0)").s().p("Aj2EPQgEgDAFgFIAHgKQAKgOAJgQQAIgRAGgaQAGgZACgZQACgagCgRQgBgTgDgRQgEgPgEgLQgGgLACgCQACgCALACIAmAJIAagMIAFgLQgGgDgEgDQgDgDgDgLIgIgdQgEgLgGgLIgHgQQgCgFADgDQADgEAxAOIB6gfIABgNIBFAVIgNAVIgWAtIAYAMIAcgMIABgbIA9AhIgGAcQgEALgBAQQgCAQABAgQgBAhAFANQAFARAJAJQALAIAKgBQAJgBADgGQADgFgBgNIgDgTIgDgRQAAgGACgCQADgCAFAFIAJANQAGAGAOAbIAQAZIAKAXIgTAMQgKAEghADQgiAEgYgVQgagVgBgXIgFgkIgUgLIgBAdIgIAkQgEAWgHANQgHANgMAPIgQATIgIAGQgDADgDgBQgCgBACgGIAUgpIgKgIIgegXQgPAngIALQgIAMgGAHIgKALQgGAIgDgDQgEgDAFgJIANghQAGgPAIgbQAGgagGgsQgBgMgDgCIgJgNIAFAuQADAcAAAKQABAKgDABQgDABgGgFIgSgKQgEgDgCgDQgBgEABgMQACgGgCgPIgLhWIgFAWQgBAJAEAhIAOB+QACAZACAJIABANQAAAEgDACQgDACgHgDQgTgFgVgMIgdgRIgIgFQgIgGAAgCQAAgDAHgDQAFgCALAAQAMgBAOgFIgEgmIgjANQgMAngMAQQgMARgNALQgOAMgJADIgIAEIgFACIgCgBgAg1AbIADATIAcACQAKABADABQACACgBAMQgBALACAUQACAUAAAIIAAAXIAVABQANABAJgBQAEgQABgKQABgLgBggQAAghgBgFIgIglQgFANgCAJQgBAIADAWIAFAoIABAYIABALQABAEgDACQgBABgGgCIgUgKQgGgEgBgDIAAgNIAAgQIgHhLgAicBrIgCAWIAggKIgBgZgAidA1IAAAXIAagLIgCgYgABHAEIAGArIAXAEIgDg5gAhmgUIgPAQIAbALIgDgHQgBgFABgBIAjAFIAtgQIADgOIAsAUIgKgXIgUgSgAhvg9IADASIBtggIACgSgAiih0IADgNIACgTIgeALQgPAFgeAUIgUhbQAaAEAkADQAkADBPgQIgLgMIgigfQgPgMABgCQABgDAPgBQATgBAQABIAeADQAPACADAEQACAEgDANIgIAcQBCgNAegLQAegMAegQIAMBNQgqgBgWACQgWAChXAMIhAALIACAVQAegEAxgKQAvgKALgGIAWgLIALAtQglABg5ALQg8ALgUAKIgYAMg");
        this.shape.setTransform(25.3, 27.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50.6, 54.5);


    (lib.赢3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.赢1();
        this.instance.setTransform(37, 34.2, 1, 1, 0, 0, 0, 25.3, 27.2);

        this.instance_1 = new lib.赢2();
        this.instance_1.setTransform(0, 0, 0.686, 0.687);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 70, 70.1);


    (lib._03 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_10 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

        // 图层 7
        this.instance = new lib.赢4();
        this.instance.setTransform(29.7, 15);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({ _off: false }, 0).wait(1));

        // 图层 4
        this.instance_1 = new lib.赢3();
        this.instance_1.setTransform(42.9, 32.6, 5.557, 5.557, 0, 0, 0, 23.7, 23.8);
        this.instance_1.alpha = 0.5;
        this.instance_1.filters = [new cjs.BlurFilter(16, 16, 3)];
        this.instance_1.cache(-2, -2, 74, 74);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ regY: 23.7, scaleX: 0.86, scaleY: 0.86, x: 41.6, y: 31.8, alpha: 1 }, 3, cjs.Ease.get(-0.3)).to({ regY: 23.8, scaleX: 1, scaleY: 1, x: 41.7 }, 2).wait(6));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-132.8, -143.6, 482, 483);


    (lib.飞牌按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -26.7, 0, 26.8).s().p("AANBxQAQgkAAhKIAAiAIAfAAIAABNIATAAIAAhTIAfAAIAABTIALAAIAAAfIg9AAIAAAZIAyAAIAAB9IgfAAIAAheIgTAAQgCA4gRApIgcgXgAiGBfQgZgoABiNIh9AAIAAgjICkAAQgBAfAAAlQAigeAbgeIAkAkIhKA0IBCAeIgSAlQgggUgkgSQAHA6AQAQQAOAQANAAQADAAAEgCQAEgDAGgSIAHgdQAWAOAMAFQgKApgMAQQgNAQgWAAQgsABgYgogADMCGIAAgzIhZAAIAAgeIAjAAIgRgQQASgJALgMIgjAAIAAh+IAlAAQAEgNABgMIApAFIgHAUIBIAAIAAB+IhKAAQgKAUgVARIAiAAIAAgdIAjAAIAAAdIAtAAIAAAeIgtAAIAAAzgADVgLIAeAAIAAgXIgbAAIgDAXgACggLIAVAAQAEgLAAgMIgZAAgADYg8IAbAAIAAgVIgbAAgACgg8IAZAAIAAgVIgZAAg");
        this.shape.setTransform(72.5, 26.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0.8)", "#FFFFFF", "rgba(255,255,255,0.8)"], [0.165, 0.596, 0.906], 0, -42.9, 0, 42.9).s().p("AAOB2QARglAAhOIAAiGIAhAAIAABQIAUAAIAAhWIAhAAIAABWIAMAAIAAAhIhBAAIAAAbIA1AAIAACCIghAAIAAhiIgUAAQgCA6gSAsIgegZgAiOBjQgagqAAiTIiFAAIAAglICvAAQgCAhAAAnQAlggAcgfIAmAlIhPA3IBHAgIgTAmQgigVgmgUQAHA+ARARQAPARANAAQAEAAAEgCQAEgDAGgTQAGgTACgMQAXAPANAEQgKArgOASQgNASgXAAQguAAgagrgADYCNIAAg1IheAAIAAghIAlAAIgSgQQASgKANgMIglAAIAAiFIAnAAQAEgNACgNIArAGIgHAUIBMAAIAACFIhOAAQgMAVgWARIAkAAIAAgeIAlAAIAAAeIAxAAIAAAhIgxAAIAAA1gADigMIAfAAIAAgYIgcAAIgDAYgACqgMIAVAAQAFgLAAgNIgaAAgADlg+IAcAAIAAgYIgcAAgACqg+IAbAAIAAgYIgbAAg");
        this.shape_1.setTransform(73.2, 27.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -25.4, 0, 25.4).s().p("AANBrQAPgjgBhFIAAh5IAeAAIAABIIASAAIAAhOIAdAAIAABOIALAAIAAAdIg6AAIAAAYIAvAAIAAB4IgdAAIAAhaIgSAAQgCA0gQAoIgagWgAh/BZQgYglAAiFIh2AAIAAgiICcAAQgBAdAAAkQAggdAagdIAiAjIhHAyIBAAbIgSAkIhAgkQAGA3APAPQAOAPAMAAQAEAAADgCQAEgCAFgRIAHgcQAVANALAFQgJAngMAPQgMAQgVAAQgpAAgXgngADCB/IAAgwIhVAAIAAgdIAhAAIgPgPQAQgJALgMIgiAAIAAh3IAkAAIAFgXIAmAFIgGASIBEAAIAAB3IhGAAQgKAUgUAQIAhAAIAAgbIAhAAIAAAbIArAAIAAAdIgrAAIAAAwgADKgLIAcAAIAAgVIgZAAQgBALgCAKgACYgLIATAAQAEgKABgLIgYAAgADNg5IAZAAIAAgUIgZAAgACYg5IAYAAIAAgUIgYAAg");
        this.shape_2.setTransform(73.1, 27);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).wait(2));

        // 图层 3
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(176,202,0,0.698)", "rgba(176,202,0,0.498)"], [0.451, 0.82], 0.3, -25.2, 0.3, 24.5).s().p("AoUDIQCGh4Dhi2IjrDzIG4lsQChADC6gDIA5gLICzgPIATAEIAUAAQAOArgDAAIgcAPIhJAyQg4AvARgLQAPgKCBhHIAAAEIjgCmIDfiTIAJAfIobFdIj7AGIAcgXIARgeIgRACIgpAXIhcAfIl7AUgApaCZIgFAEIgkgSIB/hTIgbAAIFqkfICEAHInwGVIgIAGQgLAHhwAPg");
        this.shape_3.setTransform(76.5, 26.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["rgba(222,255,0,0.698)", "rgba(221,255,0,0.498)"], [0.451, 0.82], 0.3, -26.5, 0.3, 25.7).s().p("Ao1DSQCPh+Dvi/Ij6D/IHTl+QCrADDFgDIA8gLIC+gRIAVAFIAUAAQAPAtgDAAIgdAQIhNA0Qg9AxATgLQAQgLCIhKIAAAFIjtCuIDsibIAKAhIo8FuIkKAGIAdgYIATggIgTADIgqAYIhjAgImRAWgAqFClIglgTICGhXIgcAAIGAktICMAGIoOGqIgIAHQgMAHh3APg");
        this.shape_4.setTransform(76.6, 26.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["rgba(117,133,13,0.698)", "rgba(106,121,3,0.498)"], [0.451, 0.82], 0.3, -24, 0.3, 23.2).s().p("An5C+QB/hyDWitIjgDnIGilaQCaADCwgDIA2gKICqgPIASAEIATAAQAOApgDAAIgaAPIhGAvQg1AsAQgKQAOgKB7hDIAAAFIjVCdIDTiMIAJAeIoAFLIjvAFIAbgWIAQgcIgQACIgmAWIhYAdIloAUgAo8CRIgFAEIgigRIB4hPIgZAAIFYkQIB+AGInYGBIgHAGQgKAGhrAOg");
        this.shape_5.setTransform(76.3, 26.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }] }).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).wait(2));

        // 图层 1
        this.instance = new lib.飞牌1();
        this.instance.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.06, scaleY: 1.05 }, 0).wait(1).to({ scaleX: 0.95, scaleY: 0.95 }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16, -16, 184, 87);


    (lib.重押按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], -6.5, -19.5, -6.5, 19.8).s().p("AgsBgIAUABQAJgBAAgMIAAg0IgbAGIgDgmIAegCIAAgxIgcAAIAAgiIAcAAIAAguIAiAAIAAAuIAZAAIAAAiIgZAAIAAArIAbgGQgEAWAAANIgXAEIAABJQAAAegXACQgQACgRAAIgHgkg");
        this.shape.setTransform(79, 27.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -19.9, 0, 19.4).s().p("AC0CCIAAhNIgcAAIAAANIgjAAIAAi8ICjAAIAAC8IgkAAIAAgNIgbAAIAABNgADZATIAbAAIAAgjIgbAAgACYATIAcAAIAAgjIgcAAgADZgyIAbAAIAAglIgbAAgACYgyIAcAAIAAglIgcAAgAkXB4IAAgYIB1AAIAAgOIhjAAIAAgXIBjAAIAAgNIhaAAIAAhfIBaAAIAAgNIh0AAIAAgYIB0AAIAAgPIhdADIgFgZQB0gCBvgFIAFAaIhiACIAAAQIB2AAIAAAYIh2AAIAAANIBbAAIAABfIhbAAIAAANIBlAAIAAAXIhlAAIAAAOIB2AAIAAAYgAh+AXIA4AAIAAgPIg4AAgAjYAXIA2AAIAAgPIg2AAgAh+gLIA4AAIAAgPIg4AAgAjYgLIA2AAIAAgPIg2AAg");
        this.shape_1.setTransform(72.5, 27.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["rgba(255,255,255,0.8)", "#FFFFFF", "rgba(255,255,255,0.8)"], [0.165, 0.596, 1], 0, -20.6, 0, 20.7).s().p("AC8CMIAAhSIgcAAIAAANIgmAAIAAjFICsAAIAADFIgmAAIAAgNIgcAAIAABSgADkAWIAcAAIAAglIgcAAgACgAWIAcAAIAAglIgcAAgADkgzIAcAAIAAgmIgcAAgACggzIAcAAIAAgmIgcAAgAAUBkIAVAAQAJAAAAgMIAAg4IgcAHIgDgnIAfgDIAAg0IgcAAIAAgjIAcAAIAAgxIAmAAIAAAxIAaAAIAAAjIgaAAIAAAtIAcgFQgEAWAAAOIgYAEIAABMQAAAggbADQgQABgRAAIgIglgAklCBIAAgaIB7AAIAAgOIhoAAIAAgYIBoAAIAAgPIheAAIAAhiIBeAAIAAgPIh6AAIAAgZIB6AAIAAgPIhhACIgGgaQB6gBB0gGIAGAbIhnADIAAAQIB8AAIAAAZIh8AAIAAAPIBfAAIAABiIhfAAIAAAPIBqAAIAAAYIhqAAIAAAOIB8AAIAAAagAiEAbIA6AAIAAgRIg6AAgAjjAbIA5AAIAAgRIg5AAgAiEgJIA6AAIAAgQIg6AAgAjjgJIA5AAIAAgQIg5AAg");
        this.shape_2.setTransform(72.4, 27.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(255,255,255,0.6)", "#FFFFFF", "rgba(255,255,255,0.6)"], [0.145, 0.596, 1], 0, -18.5, 0, 18.6).s().p("ACpB+IAAhKIgZAAIAAAMIgiAAIAAixICbAAIAACxIgiAAIAAgMIgaAAIAABKgADNAUIAaAAIAAghIgaAAgACQAUIAZAAIAAghIgZAAgADNgtIAaAAIAAgjIgaAAgACQgtIAZAAIAAgjIgZAAgAARBaIAUAAQAIAAAAgLIAAgyIgZAGIgDgjIAcgDIAAguIgaAAIAAggIAaAAIAAgsIAiAAIAAAsIAYAAIAAAgIgYAAIAAAoIAagFQgDAUgBANIgWAEIAABEQAAAdgYACQgOACgQAAIgIgigAkIB0IAAgXIBvAAIAAgNIheAAIAAgWIBeAAIAAgNIhVAAIAAhYIBVAAIAAgNIhuAAIAAgXIBuAAIAAgOIhYADIgEgYQBugBBngFIAGAYIhcACIAAAPIBvAAIAAAXIhvAAIAAANIBVAAIAABYIhVAAIAAANIBfAAIAAAWIhfAAIAAANIBvAAIAAAXgAh2AYIA0AAIAAgPIg0AAgAjMAYIAzAAIAAgPIgzAAgAh2gIIA0AAIAAgOIg0AAgAjMgIIAzAAIAAgOIgzAAg");
        this.shape_3.setTransform(72.6, 27.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).wait(2));

        // 图层 3
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["rgba(0,192,209,0.698)", "rgba(0,192,209,0.498)"], [0.451, 0.82], 0.3, -25.2, 0.3, 24.5).s().p("AoUDIQCGh4Dhi2IjrDzIG4lsQChADC6gDIA5gLICzgPIATAEIAUAAQAOArgDAAIgcAPIhJAyQg4AvARgLQAPgKCBhHIAAAEIjgCmIDfiTIAJAfIobFdIj7AGIAcgXIARgeIgRACIgpAXIhcAfIl7AUgApaCZIgFAEIgkgSIB/hTIgbAAIFqkfICEAHInwGVIgIAGQgLAHhwAPg");
        this.shape_4.setTransform(76.5, 26.2);

        this.instance = new lib.重押2();
        this.instance.setTransform(76.5, 26.2, 1, 1, 0, 0, 0, 71, 26.3);
        this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 41, 90, 0))];
        this.instance.cache(-2, -2, 146, 57);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_4 }] }).to({ state: [{ t: this.instance, p: { regY: 26.3, scaleX: 1, scaleY: 1, x: 76.5 } }] }, 1).to({ state: [{ t: this.instance, p: { regY: 26.4, scaleX: 0.9, scaleY: 0.9, x: 76.3 } }] }, 1).wait(2));

        // 图层 1
        this.instance_1 = new lib.飞牌1();
        this.instance_1.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ regX: 74.1, regY: 25.7, scaleX: 0.95, scaleY: 0.95, x: 74.1, y: 25.7 }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16, -16, 184, 87);


    (lib.清除按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -24.3, 0, 24.4).s().p("AAYCGIAAj/IBZAAIAAAaIgNAqQAxgcAcg0IAlAAIgEAIQAeAvAtATQgIASgFAUQgNgHgLgIIAAARIglAAIAAAWIA/AAIAAAfIg/AAIAABAQAAAggeADIgiABQgCgUgFgSIgTAcQgMgKgSgJQAZgeAOggIAfANQgIATgNAUQALACAHAAQAQAAAAgSIAAgtIg6AAIAAgfIA6AAIAAgWIgmAAIAAgNIgTAOQgIgQgKgPIgKAdQAWAZAAAjQAAAYgKAKQgLAMgbAAQgCgSgFgVIAKACQAMAAAAgQQAAgbgVgXQAMgmAIgjIgVAAIAADggACcgyIBKAAQgWgUgQgXQgPAXgVAUgAkXB6QAOgtANg8QASAIARAFIgaBoIgkgMgAh7BoIArACQANgBAAgNIAAgEIhfAAIAAAtIglAAIAAiMICpAAIAABpQAAAQgIAIQgHAIgNACQgOABgrAAIgIgdgAiiBCIBfAAIAAgNIhfAAgAiiAfIBfAAIAAgOIhfAAgADZA7IAegQQASAaAVAjIggASQgSgkgTgbgAkdghIAXgaQAVAQAWASIgZAcIgpgkgAjYgSIAAgXIBQAAIAAgMIhBAAIAAgXIBBAAIAAgMIhIAAIAAgXIBIAAIAAgXIAnAAIAAAXIBNAAIAAAXIhNAAIAAAMIBGAAIAAAXIhGAAIAAAMIBUAAIAAAXgAkWhrIAXgYQAXARAWARIgZAcQgUgUgXgSg");
        this.shape.setTransform(73, 27.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0.8)", "#FFFFFF", "rgba(255,255,255,0.8)"], [0.165, 0.596, 1], 0, -25.6, 0, 25.6).s().p("AAZCNIAAkMIBdAAIAAAbIgNAsQAzgdAeg2IAmAAIgEAIQAgAwAwAVQgJATgFAUQgOgHgLgIIAAARIgoAAIAAAYIBDAAIAAAgIhDAAIAABEQAAAigfACIgjABQgCgUgGgUIgUAeQgMgKgUgKQAbgfAOgjIAhAPQgJAUgNAVQAMACAHAAQARAAAAgTIAAgwIg9AAIAAggIA9AAIAAgYIgoAAIAAgNIgUAPQgJgRgKgQIgKAfQAXAaAAAlQAAAZgLALQgMAMgcAAQgCgSgFgWIALABQAMAAAAgRQAAgcgWgYQAMgoAJgkIgWAAIAADrgACkg1IBNAAQgXgUgRgZQgPAYgWAVgAklCAQAPgvANg/QATAIASAFIgbBtIgmgMgAiCBtIAuACQAOAAAAgOIAAgEIhkAAIAAAuIgnAAIAAiSICxAAIAABuQAAAQgIAJQgIAIgNACQgOABguAAQgEgPgFgPgAiqBFIBkAAIAAgNIhkAAgAiqAgIBkAAIAAgOIhkAAgADkA+IAfgSQAUAcAVAlIgiASQgSgkgUgdgAkrgjIAYgbQAWARAXATIgaAdIgrgmgAjjgTIAAgYIBUAAIAAgMIhEAAIAAgZIBEAAIAAgNIhLAAIAAgYIBLAAIAAgXIApAAIAAAXIBRAAIAAAYIhRAAIAAANIBJAAIAAAZIhJAAIAAAMIBYAAIAAAYgAkkhwIAYgZQAYAQAYATIgbAdQgVgVgYgSg");
        this.shape_1.setTransform(72.9, 27.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["rgba(255,255,255,0.6)", "#FFFFFF", "rgba(255,255,255,0.6)"], [0.157, 0.596, 1], 0, -23.5, 0, 23.5).s().p("AAXCBIAAj2IBVAAIAAAZIgLApQAugbAbgyIAkAAIgEAHQAdAtAsATQgHARgGATQgMgGgKgHIAAAPIglAAIAAAWIA9AAIAAAdIg9AAIAAA+QAAAfgdADIggAAQgCgSgGgSIgSAcQgLgKgRgJQAYgdANggIAeAPQgIARgMAUQAKACAHAAQAPgBABgRIAAgsIg4AAIAAgdIA4AAIAAgWIglAAIAAgMIgSANQgIgPgKgPIgJAcQAVAZAAAhQAAAXgKALQgKALgaAAQgCgRgFgUIAKABQALAAAAgQQAAgagUgVQALgmAIggIgUAAIAADXgACWgxIBIAAQgWgSgPgXQgOAXgVASgAh3BkIAqACQANgBAAgNIAAgDIhcAAIAAArIgkAAIAAiGICjAAIAABkQAAAPgHAIQgIAIgMACQgNABgqAAIgIgcgAicBAIBcAAIAAgNIhcAAgAicAdIBcAAIAAgNIhcAAgAkNB1QAOgrAMg6QASAIAQAFIgZBjIgjgLgADRA5IAdgRQASAaAUAiIggARQgQgigTgagAkTggIAXgZQAUAQAUARIgXAbIgogjgAjQgRIAAgXIBNAAIAAgKIg/AAIAAgYIA/AAIAAgLIhFAAIAAgXIBFAAIAAgVIAmAAIAAAVIBKAAIAAAXIhKAAIAAALIBCAAIAAAYIhCAAIAAAKIBQAAIAAAXgAkMhnIAXgXQAVAPAWARIgZAcQgTgUgWgRg");
        this.shape_2.setTransform(73, 27.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).wait(2));

        // 图层 3
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(194,0,0,0.698)", "rgba(196,0,0,0.498)"], [0.451, 0.82], 0.3, -25.2, 0.3, 24.5).s().p("AoUDIQCGh4Dhi2IjrDzIG4lsQChADC6gDIA5gLICzgPIATAEIAUAAQAOArgDAAIgcAPIhJAyQg4AvARgLQAPgKCBhHIAAAEIjgCmIDfiTIAJAfIobFdIj7AGIAcgXIARgeIgRACIgpAXIhcAfIl7AUgApaCZIgFAEIgkgSIB/hTIgbAAIFqkfICEAHInwGVIgIAGQgLAHhwAPg");
        this.shape_3.setTransform(76.5, 26.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["rgba(240,0,0,0.698)", "rgba(250,0,0,0.498)"], [0.451, 0.82], 0.3, -26.5, 0.3, 25.7).s().p("AovDSQCNh+Dsi/Ij3D/IHOl+QCqADDDgDIA7gLIC8gRIAVAFIAVAAQAOAtgDAAIgdAQIhMA0Qg8AxASgLQARgLCGhKIAAAFIjrCuIDqibIAJAhIo2FuIkHAGIAdgYIASgfIgSACIgqAYIhhAgImOAWgAp+ClIglgTICFhXIgcAAIF8ktICKAHIoJGpIgHAHQgMAHh1APg");
        this.shape_4.setTransform(76.6, 26.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["rgba(133,0,0,0.698)", "rgba(131,0,0,0.498)"], [0.451, 0.82], 0.3, -24.3, 0.3, 23.6).s().p("AoBDBQCBh0DZivIjjDqIGolfQCdADCygDIA2gKICtgPIATAEIATAAQANAqgCAAIgaAOIhHAwQg3AtARgKQAPgKB7hFIAAAFIjXCgIDWiOIAJAeIoIFQIjxAGIAagXIASgdIgSADIgmAWIhZAdIluAUgApKCYIgigSIB6hQIgZAAIFdkUIB/AGInfGHIgHAGQgKAGhsAOg");
        this.shape_5.setTransform(76.4, 26.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }] }).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).wait(2));

        // 图层 1
        this.instance = new lib.飞牌1();
        this.instance.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ scaleX: 0.96, scaleY: 0.96, x: 74.1 }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16, -16, 184, 87);


    (lib.开牌按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0.4)", "#FFFFFF", "rgba(255,255,255,0.4)"], [0.165, 0.596, 1], 0, -15.9, 0, 15.9).s().p("AkbBsQAagNARgTQAQgTADgmIg+AAIAAgiIA/AAIAAhDIgwAAIAAgjID0AAIAAAjIgsAAIAABDIA4AAIAAAiIg4AAIAABwIgoAAIAAhwIhJAAQgDAxgPAZQgQAZghASQgPgNgUgPgAi0gPIBIAAIAAhDIhIAAgAANBxQAQglAAhJIAAiAIAfAAIAABMIATAAIAAhSIAfAAIAABSIALAAIAAAfIg9AAIAAAaIAyAAIAAB9IgfAAIAAheIgTAAQgCA3gRAqIgcgXgADMCGIAAgzIhZAAIAAgfIAjAAIgRgPQARgKAMgMIgjAAIAAh+IAlAAQADgMACgMIApAFIgHATIBIAAIAAB+IhKAAQgLAVgUAQIAiAAIAAgcIAjAAIAAAcIAtAAIAAAfIgtAAIAAAzgADVgMIAdAAIAAgWIgaAAIgDAWgACggMIAUAAQAEgKABgMIgZAAgADYg8IAaAAIAAgWIgaAAgACgg8IAZAAIAAgWIgZAAg");
        this.shape.setTransform(72.9, 27.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(255,255,255,0.8)", "#FFFFFF", "rgba(255,255,255,0.8)"], [0.165, 0.596, 1], 0.1, -16.7, 0.1, 16.7).s().p("AkpByQAbgOASgUQARgUADgoIhCAAIAAgkIBEAAIAAhGIg0AAIAAglIEBAAIAAAlIguAAIAABGIA7AAIAAAkIg7AAIAAB1IgqAAIAAh1IhNAAQgDA0gQAaQgRAagjATQgQgOgUgPgAi9gQIBMAAIAAhGIhMAAgAAOB2QARgmAAhNIAAiGIAhAAIAABQIATAAIAAhWIAgAAIAABWIANAAIAAAgIhAAAIAAAbIAzAAIAACDIgfAAIAAhiIgVAAQgBA6gTAsIgdgZgADWCMIAAg1IhdAAIAAggIAlAAIgSgQQASgKAMgNIglAAIAAiEIAnAAQAEgNACgNIAqAFQgCAKgFALIBMAAIAACEIhOAAQgLAWgWARIAkAAIAAgeIAlAAIAAAeIAwAAIAAAgIgwAAIAAA1gADfgMIAgAAIAAgYIgcAAIgEAYgACogMIAWAAQAEgLAAgNIgaAAgADjg/IAcAAIAAgXIgcAAgACog/IAaAAIAAgXIgaAAg");
        this.shape_1.setTransform(72.9, 27.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["rgba(255,255,255,0.6)", "#FFFFFF", "rgba(255,255,255,0.6)"], [0.165, 0.596, 1], 0.1, -14.9, 0.1, 15.1).s().p("AkLBnQAZgNAPgSQAQgRACglIg6AAIAAggIA8AAIAAg/IguAAIAAgiIDnAAIAAAiIgqAAIAAA/IA1AAIAAAgIg1AAIAABpIgmAAIAAhpIhFAAQgDAugOAYQgPAYgfARQgOgNgTgNgAipgOIBDAAIAAg/IhDAAgAAOBsIgBgCIABgDQAOgjAAhBIAAh5IAdAAIAABIIASAAIAAhNIAdAAIAABNIALAAIAAAdIg6AAIAAAYIAvAAIAAB2IgdAAIAAhYIgSAAQgBA0gRAoIgZgVgADBB/IAAgxIhUAAIAAgcIAhAAIgQgPQAQgJALgMIghAAIAAh2IAjAAQAEgMABgMIAnAFQgCAJgFAKIBEAAIAAB2IhFAAQgLAUgUAQIAhAAIAAgbIAhAAIAAAbIAqAAIAAAcIgqAAIAAAxgADJgLIAcAAIAAgVIgZAAIgDAVgACXgLIAUAAQADgJAAgMIgXAAgADMg4IAZAAIAAgVIgZAAgACXg4IAYAAIAAgVIgYAAg");
        this.shape_2.setTransform(73, 27);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).wait(2));

        // 图层 3
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["rgba(0,0,198,0.698)", "rgba(0,0,198,0.498)"], [0.451, 0.82], 0.3, -25.2, 0.3, 24.5).s().p("AoUDIQCGh4Dhi2IjrDzIG4lsQChADC6gDIA5gLICzgPIATAEIAUAAQAOArgDAAIgcAPIhJAyQg4AvARgLQAPgKCBhHIAAAEIjgCmIDfiTIAJAfIobFdIj7AGIAcgXIARgeIgRACIgpAXIhcAfIl7AUgApaCZIgFAEIgkgSIB/hTIgbAAIFqkfICEAHInwGVIgIAGQgLAHhwAPg");
        this.shape_3.setTransform(76.5, 26.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.lf(["rgba(0,23,255,0.698)", "rgba(0,0,255,0.498)"], [0.451, 0.82], 0.3, -26.5, 0.3, 25.7).s().p("AovDSQCNh+Dsi/Ij3D/IHOl+QCqADDDgDIA7gLIC8gRIAVAFIAVAAQAOAtgDAAIgdAQIhMA0Qg8AxASgLQARgLCGhKIAAAFIjrCuIDqibIAJAhIo2FuIkHAGIAdgYIASgfIgSACIgqAYIhhAgImOAWgAp+ClIglgTICFhXIgcAAIF8ktICKAHIoJGpIgHAHQgMAHh1APg");
        this.shape_4.setTransform(76.6, 26.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.lf(["rgba(0,0,102,0.698)", "rgba(0,0,98,0.498)"], [0.451, 0.82], 0.3, -23.8, 0.3, 23.1).s().p("An3C9QB/hxDUisIjeDmIGglZQCZADCvgDIA1gKICqgOIASAEIATAAQANApgDAAIgaANIhFAwQg1AsAQgLQAPgJB5hDIAAAEIjUCdIDTiMIAIAeIn9FJIjtAHIAagWIAQgdIgQADIgmAVIhXAdIlmATgAo+CVIgigSIB4hNIgZAAIFWkQIB8AGInUF/IgHAGQgLAHhpANg");
        this.shape_5.setTransform(76.3, 26.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_3 }] }).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).wait(2));

        // 图层 1
        this.instance = new lib.飞牌1();
        this.instance.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 0, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ regX: 74.1, regY: 25.7, scaleX: 0.95, scaleY: 0.95, x: 74.1, y: 25.7 }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16, -16, 184, 87);


    (lib.开牌_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.instance = new lib.开牌3();
        this.instance.setTransform(40.1, 19.7, 1, 1, 0, 0, 0, 22.1, 10.7);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 1, 3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 41.2, y: 20.3 }, 0).wait(1).to({ scaleX: 0.95, scaleY: 0.95, x: 40.9, y: 20.1 }, 0).wait(2));

        // 图层 3
        this.instance_1 = new lib.开牌2();
        this.instance_1.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 76, y: 26.3 }, 0).wait(1).to({ regX: 74.1, scaleX: 0.95, scaleY: 0.95, x: 71.9, y: 25.4 }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 69, 35);


    (lib.元件4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

        // 图层 1
        this.mc = new lib.元件3();
        this.mc.setTransform(12.2, 18.8, 0.5, 0.5, 0, 0, 0, 12.6, 18.8);
        this.mc.alpha = 0.422;

        this.timeline.addTween(cjs.Tween.get(this.mc).to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 6).to({ scaleX: 1, scaleY: 1 }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(6, 7.1, 10.9, 17.7);


    (lib.元件2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

        // 图层 1
        this.mc = new lib.元件1();
        this.mc.setTransform(12.2, 18.8, 0.5, 0.5, 0, 0, 0, 12.6, 18.8);
        this.mc.alpha = 0.398;

        this.timeline.addTween(cjs.Tween.get(this.mc).to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 6).to({ scaleX: 1, scaleY: 1 }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(5.9, 7.1, 10.9, 17.7);


    (lib.元件5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.instance = new lib.光_1();
        this.instance.setTransform(185.9, 107, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [185.8, 106.9, 178.8, 109.8, 168.5, 113.7, 147.6, 121.7, 130.7, 126.4, 103.2, 134, 60.1, 141.6, 60, 141.6, 40.3, 81.6, 20.5, 21.9, 20.4, 21.8, 44.5, 17.7, 56.6, 15.7, 68.6, 13.6, 68.6, 13.6, 89.4, 9.5, 122.7, -0.2, 122.6, -0.2, 130, 12.2, 137.3, 24.7, 152.1, 49.7, 182.3, 100.7, 185.4, 106] } }, 39).wait(1));

        // 图层 1
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(20.6, 21.6, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_1.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [20.8, 21.8, 44.7, 17.7, 56.7, 15.7, 68.7, 13.6, 68.7, 13.6, 89.4, 9.5, 122.7, -0.2, 122.6, -0.2, 130.5, 13.2, 138.5, 26.6, 154.4, 53.5, 170.2, 80.2, 178.1, 93.5, 186, 106.9, 186, 106.9, 178.9, 109.8, 168.6, 113.7, 147.7, 121.7, 130.7, 126.4, 103.2, 134, 60.2, 141.6, 60, 141.6, 42.5, 88.3, 23.6, 31.1, 21.2, 23.9] } }, 39).wait(1));

        // 图层 2
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(185.9, 107, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_2.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [185.8, 106.9, 178.8, 109.8, 168.5, 113.7, 147.6, 121.7, 130.7, 126.4, 103.2, 134, 60.1, 141.6, 60, 141.6, 40.3, 81.6, 20.5, 21.9, 20.4, 21.8, 44.5, 17.7, 56.6, 15.7, 68.6, 13.6, 68.6, 13.6, 89.4, 9.5, 122.7, -0.2, 122.6, -0.2, 130, 12.2, 137.3, 24.7, 152.1, 49.7, 182.3, 100.7, 185.4, 106] } }, 39).wait(1));

        // 图层 1
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(20.6, 21.6, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_3.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_3.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ guide: { path: [20.8, 21.8, 44.7, 17.7, 56.7, 15.7, 68.7, 13.6, 68.7, 13.6, 89.4, 9.5, 122.7, -0.2, 122.6, -0.2, 130.5, 13.2, 138.5, 26.6, 154.4, 53.5, 170.2, 80.2, 178.1, 93.5, 186, 106.9, 186, 106.9, 178.9, 109.8, 168.6, 113.7, 147.7, 121.7, 130.7, 126.4, 103.2, 134, 60.2, 141.6, 60, 141.6, 42.5, 88.3, 23.6, 31.1, 21.2, 23.9] } }, 39).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-238.4, -237.4, 691.3, 611.4);


    (lib.主界面底图 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 4
        this.instance = new lib.牌盒左();
        this.instance.setTransform(19.8, 4.3, 0.775, 0.744);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 2
        this.instance_1 = new lib.LOGO();
        this.instance_1.setTransform(525, 324.5, 1, 1, 0, 0, 0, 123, 27);
        this.instance_1.alpha = 0.059;

        this.shape = new cjs.Shape();
        this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 1), null, new cjs.Matrix2D(0.5, 0, 0, 0.5, -266.1, -29.2)).s().p("Az0ETIAAolMAnoAAAIAAIlg");
        this.shape.setTransform(525.9, 108.6);

        this.instance_2 = new lib.注区线();
        this.instance_2.setTransform(524, 218, 1, 1, 0, 0, 0, 267, 78);
        this.instance_2.alpha = 0.34;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.shape }, { t: this.instance_1 }] }).wait(1));

        // 图层 2
        this.instance_3 = new lib.bg();
        this.instance_3.setTransform(0, 0, 0.686, 0.687);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1049.6, 680.2);


    (lib.历史记录 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.历史记录网格();
        this.instance.setTransform(467.9, 66.5, 1, 1, 0, 0, 0, 467.9, 66.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1033, 145);


    (lib.问路牌路图标集 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.mc2 = new lib.问路斜杠();
        this.mc2.setTransform(31, 4, 1, 1, 0, 0, 0, 4, 4);

        this.mc1 = new lib.问路实圈();
        this.mc1.setTransform(17.5, 3.5, 1, 1, 0, 0, 0, 3.5, 3.5);

        this.mc0 = new lib.问路圈圈();
        this.mc0.setTransform(3.5, 3.6, 1, 1, 0, 0, 0, 3.5, 3.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.mc0 }, { t: this.mc1 }, { t: this.mc2 }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.5, -0.5, 35.5, 8.5);


    (lib.庄闲和提示 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

        // 图层 3
        this.equableNumTxt = new cjs.Text("2", "26px 'Arial'", "#009900");
        this.equableNumTxt.name = "equableNumTxt";
        this.equableNumTxt.textAlign = "center";
        this.equableNumTxt.lineHeight = 31;
        this.equableNumTxt.lineWidth = 44;
        this.equableNumTxt.setTransform(28, 7.1);

        this.timeline.addTween(cjs.Tween.get(this.equableNumTxt).wait(2).to({ x: 15.5, y: 3.1, text: "", color: NaN, lineWidth: 27 }, 0).wait(1));

        // 图层 2
        this.instance = new lib.Circle_Red();
        this.instance.setTransform(33.3, 28.7, 4.446, 4.446, 0, 0, 0, 5, 5);

        this.instance_1 = new lib.Circle_Blue();
        this.instance_1.setTransform(33.2, 28.6, 4.444, 4.444, 0, 0, 0, 5, 5);

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#02A611").s().p("AgHAzIAAhlIAPAAIAABlg");
        this.shape.setTransform(38.4, 29.1, 4.459, 4.153, 0, 32.5, 28.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 1).to({ state: [{ t: this.shape }] }, 1).wait(1));

        // 图层 1
        this.instance_2 = new lib.框框();

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 62, 69);


    (lib.chipsBar = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.mc3 = new lib.红黄();
        this.mc3.setTransform(221.3, -43.7, 1, 1, 0, 0, 0, -0.1, 1.1);

        this.mc4 = new lib.红黄();
        this.mc4.setTransform(267.5, -74.6, 1, 1, 0, 0, 0, -0.1, 1.1);

        this.mc2 = new lib.红黄();
        this.mc2.setTransform(172.7, -17.3, 1, 1, 0, 0, 0, -0.1, 1.1);

        this.mc1 = new lib.红黄();
        this.mc1.setTransform(120.8, 4.5, 1, 1, 0, 0, 0, -0.1, 1.1);

        this.mc0 = new lib.红黄();
        this.mc0.setTransform(69.3, 22.7, 1, 1, 0, 0, 0, -0.1, 1.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.mc0 }, { t: this.mc1 }, { t: this.mc2 }, { t: this.mc4 }, { t: this.mc3 }] }).wait(1));

        // Layer 3
        this.rightBtnMask = new lib.右翻不可按();
        this.rightBtnMask.setTransform(309.1, -111.5, 1, 1, 0, 0, 0, 22.5, 22.5);

        this.leftBtnMask = new lib.左翻不可按();
        this.leftBtnMask.setTransform(15.4, 34.6, 1, 1, 0, 0, 0, 22.4, 22.5);

        this.rightBtn = new lib.右翻按钮();
        this.rightBtn.setTransform(309.1, -111.5, 1, 1, 0, 0, 0, 22.5, 22.5);
        new cjs.ButtonHelper(this.rightBtn, 0, 1, 2, false, new lib.右翻按钮(), 3);

        this.z = new lib.左翻按钮();
        this.z.setTransform(15.6, 35.7, 1, 1, 0, 0, 0, 22.5, 22.5);
        new cjs.ButtonHelper(this.z, 0, 1, 2, false, new lib.左翻按钮(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.z }, { t: this.rightBtn }, { t: this.leftBtnMask }, { t: this.rightBtnMask }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7, -134, 338.6, 192.2);


    (lib.眯牌2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.instance = new lib.眯牌3();
        this.instance.setTransform(24.8, 10.7, 1, 1, 0, 0, 0, 13.8, 6.7);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 1, 4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05 }, 0).wait(1).to({ scaleX: 0.9, scaleY: 0.9 }, 0).wait(2));

        // 图层 1
        this.instance_1 = new lib.汇总框();
        this.instance_1.setTransform(28.3, 11.5, 1, 1, 0, 0, 0, 28.3, 11.5);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.749)", 0, 1, 4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 28.5 }, 0).wait(1).to({ regX: 28.2, scaleX: 0.95, scaleY: 0.95, x: 28.1, y: 11.4 }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6, -5, 64, 36);


    (lib.MiPokerMc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 5
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#562C03").s().p("AhCAcQgKgLABgRQAAgPAKgLQAKgMARAAQAQAAALALQAKALgBAQQAAARgKALQgKALgRAAQgQAAgLgLgAg1gRQgGAHABAKQgBALAGAHQAFAHAJAAQAKAAAFgHQAGgHgBgLQAAgKgEgHQgGgHgJAAQgKAAgFAHgAA8AlIgggvIgEgGIAAAAIAAAMIAAApIgPAAIAAhJIASAAIAfAtIADAGIAAgKIAAgpIAQAAIAABJg");
        this.shape.setTransform(55.8, 10.8);

        this.mc1 = new lib.眯牌2();
        this.mc1.setTransform(26.1, 11.4, 0.9, 0.909, 0, 0, 0, 29, 12.5);
        new cjs.ButtonHelper(this.mc1, 0, 1, 2, false, new lib.眯牌2(), 3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#949494").s().p("AhSAcQgKgLABgRQAAgPAKgLQAKgMARAAQAQAAALALQAKALgBAQQAAARgKALQgKALgRAAQgQAAgLgLgAhFgRQgGAHABAKQgBALAGAHQAFAHAJAAQAKAAAFgHQAGgHgBgLQAAgKgEgHQgGgHgJAAQgKAAgFAHgAAxAlIAAhJIAsAAIAAANIgbAAIAAATIAYAAIAAALIgYAAIAAAegAgFAlIAAhJIApAAIAAANIgbAAIAAATIAZAAIAAALIgZAAIAAAeg");
        this.shape_1.setTransform(20, 10.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.mc1, p: { x: 26.1 } }, { t: this.shape }] }).to({ state: [{ t: this.mc1, p: { x: 58.5 } }, { t: this.shape_1 }] }, 1).wait(1));

        // 图层 4
        this.instance = new lib.玩家信息3();
        this.instance.setTransform(40.8, 10.5, 0.85, 1, 0, 0, 0, 48, 10.5);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);

        this.instance_1 = new lib.玩家信息2();
        this.instance_1.setTransform(38.4, 10.5, 0.8, 1, 0, 0, 0, 48, 10.5);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.1, -5.5, 97.1, 38.6);


    (lib.限注框 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // leaf
        this.instance = new lib.限注框1();
        this.instance.setTransform(101.5, 67, 1, 1, 0, 0, 0, 101.5, 67);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 3, 1, 12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // txt
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E1CE9F").s().p("Ag1AnIASABQAIAAAAgIIAAg0IgiAAIAAgQIAiAAIAAgUIARAAIAAAUIAKAAIAAAQIgKAAIAAA6QAAAIgEAFQgEAEgHABIgZABQgBgJgCgJgAAcA4IgFgSIAUABQAKAAAAgKIAAgTIgzAAIAAgOIAzAAIAAgOIAdgQIhIAAIAAgPIBjAAIAAAPIgmAXIAAAHIAuAAIAAAOIguAAIAAAWQAAAMgGAGQgFAGgLAAgAh0AnQANgLAJgQIgVgfIANgIIAPAYQAFgNACgPIgjAAIAAgQIA0AAIAAAQQgEAYgJASIARAaIgOAKIgMgTQgJAPgNAMIgJgQgAhCgFIANgIIAVAaIgOAJQgJgPgLgMg");
        this.shape.setTransform(27.8, 104.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E1CE9F").s().p("AghA4IAAgrQgGANgJAMIgGgTQAMgNAHgOIgSAAIAAgPIAUAAIAAgOIgQACIgCgOIAxgGIACAPIgRACIAAAPIARAAIAAAPIgRAAIAAALIAEgDIAPAMIgIAMIgLgLIAAArgAADAzIAAhjIA0AAIAABiIgQAAIAAgKIgUAAIAAALgAATAYIAUAAIAAg4IgUAAg");
        this.shape_1.setTransform(21.5, 81.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E1CE9F").s().p("ABrApIANAAQAIABAAgIIAAhGIgvAAIAAgOIA/AAIAABVQAAAJgDAFQgCAFgGACQgGACgRAAQgBgKgCgHgAAlA5IAAhiIAQAAIAABAQAOgMAKgPIgTAAIAAgPIAYAAIAAgMIAQAAIAAAMIAYAAIAAAPIgYAAIAAAJIAEgEQAQALAJAJIgLALIgSgRIAAAfIgQAAIAAghQgJAOgLALIgJgMIAAAfgAgbA5IAqhoIARAAIgqBogAiPApQAMgTAAgYIAAgmIAsAAIgFgMIATgEIAHAQIAmAAIAAAOIhXAAIAAAXQAAAogQAUQgGgKgGgGgAh3A0IAAgPIAmAAIAAgaIgeAAIAAgOIAeAAIAAgTIARAAIAAATIAfAAIAAAOIgfAAIAAAaIAlAAIAAAPgAAzgzIAPgFIALASIgQAHIgKgUg");
        this.shape_2.setTransform(30.4, 59.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#E1CE9F").s().p("AAoAzQAUgGAPgIQgKgKgJgMIAPgJQAIALALAJQALgJAHgLIg3AAIAAgPIBMAAIAAAOQgJASgOANQAOAIARAFIgNASQgTgHgPgKQgQAKgWAIIgMgRgAjiBEIAAgJIgvAEIgDgQIALAAIAAgvIgMAAIAAgLICIAAIAAALIhFAAIAAArIAIgBIgBAHIAOgGQgIgIgGgJIAIgGIgLAAIAAgNIA7AAIAAANQgFANgJAKQAJAEALACIgIAQQgOgDgMgIQgLAIgNAFIgGgLIgFABIAAALgAj5AuIAXgCIAAgIIgXAAgAivAiQAGgGAFgIIgZAAQAGAJAIAFgAj5AaIAXAAIAAgIIgXAAgAj5AIIAXAAIAAgIIgXAAgAADAwIAIABQAEAAACgCQABgBAAgEIAAgZIgPAEIgCgUIARgBIAAgYIgPAAIAAgSIAPAAIAAgXIASAAIAAAXIANAAIAAASIgNAAIAAAVIAMgDIAAAQIgMADIAAAkQAAAHgEAFQgDAFgWABIgEgTgAgzAzIAQABQAJAAAAgJIAAgeIhVAAIAAA2IgSAAIAAhDIB6AAIAAAsQAAAKgEAGQgEAEgHABQgGACgUAAIgDgQgACPA9QAIgVAIggQAJAEAJADQgHAegIAWIgTgGgACxA9IAAgSIAqAAIAAgeIgfAAIAAgQIAfAAIAAgXIgjAAIAAgTIAmAAIgIgQIATgFIAJAVIAfAAIAAATIgiAAIAAAXIAeAAIAAAQIgeAAIAAAeIAnAAIAAASgAhjA2IAAgkIA9AAIAAAgIgtAAIAAAEgAhTAmIAdAAIAAgIIgdAAgACNgPIALgNQAQALALAKIgMAMIgagUgAh0gFIAAgfIBfAAIAAAfgAhigRIA7AAIAAgHIg7AAgAAvgWQAJgFADgIQADgGAAgUIA5AAIAAAWQAAAFAEAAQADABALgBIgEARIgRAAQgHAAgEgDQgDgEAAgHIAAgNIgWAAQAAAVgSANIgPgMgAkEgRIAAgsIBnAAIAAAsgAjygcIBCAAIAAgHIhCAAgAjygsIBCAAIAAgGIhCAAgACSgyIALgMQALAHANAMIgMAOIgXgVgAiIgpIAAgOIA5AAIgEgIIAWgEIAFAMIA3AAIAAAOg");
        this.shape_3.setTransform(149.1, 33.4);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#E1CE9F").s().p("AAoAyQAUgGAPgHQgKgLgJgMIAPgJQAIAMALAJQALgKAHgLIg3AAIAAgPIBMAAIAAAOQgJATgOANQAOAIARAEIgNASQgTgHgPgKQgQALgWAHIgMgRgAhHAyQgLAHgFAEIgKgPQAGgGAAgLIAAhTQAfgCAxgGIAEARIgcADIABAbIAfAAIAAAPIgeAAQACAZAEAKQADAIADABQABAAAAgBQAAAAABAAQAAgBABAAQAAgBAAgBIADgVIAOAHQgCAYgEAHQgEAIgJAAQgbAAgDhBIgXAAIAAAgIAVgMIACASIgGAEIALAQIgQAJQgFgKgFgHgAhJgnIAAAYIAWAAIgBgagAjiBDIAAgJIgvAFIgDgQIALAAIAAgvIgMAAIAAgMICIAAIAAAMIhFAAIAAAqIAIgBIgBAHIAOgFQgIgIgGgKIAIgFIgLAAIAAgOIA7AAIAAAOQgFAMgJAKQAJAEALACIgIARQgOgDgMgIQgLAHgNAFIgGgKIgFAAIAAALgAj5AuIAXgCIAAgIIgXAAgAivAiQAGgGAFgIIgZAAQAGAIAIAGgAj5AZIAXAAIAAgHIgXAAgAj5AHIAXAAIAAgHIgXAAgAADAvIAIABIAGgBQABgBAAgFIAAgYIgPADIgCgTIARgBIAAgYIgPAAIAAgSIAPAAIAAgYIASAAIAAAYIANAAIAAASIgNAAIAAAUIAMgCIAAAQIgMACIAAAkQAAAIgEAFQgDAFgWAAIgEgTgACPA8QAIgVAIgfQAJAEAJACQgHAegIAWIgTgGgAh6BBIAAhAIgLAQIgEgXQARgaAKgiIASAGQgFAQgHAOIAABfgACxA8IAAgSIAqAAIAAgeIgfAAIAAgQIAfAAIAAgXIgjAAIAAgSIAmAAIgIgQIATgGIAJAWIAfAAIAAASIgiAAIAAAXIAeAAIAAAQIgeAAIAAAeIAnAAIAAASgACNgPIALgOQAQALALALIgMALIgagTgAAvgXQAJgFADgHQADgHAAgTIA5AAIAAAVQAAAFAEABQADAAALAAIgEARIgRAAQgHAAgEgEQgDgDAAgIIAAgMIgWAAQAAAVgSAMIgPgMgAkEgSIAAgrIBnAAIAAArgAjygdIBCAAIAAgGIhCAAgAjygsIBCAAIAAgGIhCAAgACSgyIALgMQALAHANAMIgMANIgXgUg");
        this.shape_4.setTransform(82.9, 33.5);

        this.maxTxt3 = new cjs.Text("9898989", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.maxTxt3.name = "maxTxt3";
        this.maxTxt3.textAlign = "center";
        this.maxTxt3.lineHeight = 15;
        this.maxTxt3.lineWidth = 47;
        this.maxTxt3.setTransform(147.6, 96);

        this.maxTxt2 = new cjs.Text("898989", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.maxTxt2.name = "maxTxt2";
        this.maxTxt2.textAlign = "center";
        this.maxTxt2.lineHeight = 15;
        this.maxTxt2.lineWidth = 47;
        this.maxTxt2.setTransform(147.6, 73);

        this.maxTxt1 = new cjs.Text("99898", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.maxTxt1.name = "maxTxt1";
        this.maxTxt1.textAlign = "center";
        this.maxTxt1.lineHeight = 15;
        this.maxTxt1.lineWidth = 47;
        this.maxTxt1.setTransform(147.6, 51);

        this.minTxt3 = new cjs.Text("9898", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.minTxt3.name = "minTxt3";
        this.minTxt3.textAlign = "center";
        this.minTxt3.lineHeight = 15;
        this.minTxt3.lineWidth = 47;
        this.minTxt3.setTransform(79.6, 96);

        this.minTxt2 = new cjs.Text("98989", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.minTxt2.name = "minTxt2";
        this.minTxt2.textAlign = "center";
        this.minTxt2.lineHeight = 15;
        this.minTxt2.lineWidth = 47;
        this.minTxt2.setTransform(79.6, 73);

        this.instance_1 = new lib.限注1();
        this.instance_1.setTransform(150.9, 104, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

        this.instance_2 = new lib.限注1();
        this.instance_2.setTransform(82.9, 104, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

        this.instance_3 = new lib.限注1();
        this.instance_3.setTransform(150.9, 82, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

        this.instance_4 = new lib.限注1();
        this.instance_4.setTransform(82.9, 82, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

        this.instance_5 = new lib.限注1();
        this.instance_5.setTransform(150.9, 60, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

        this.minTxt1 = new cjs.Text("44889", "bold 10px 'Microsoft YaHei'", "#FFFF00");
        this.minTxt1.name = "minTxt1";
        this.minTxt1.textAlign = "center";
        this.minTxt1.lineHeight = 15;
        this.minTxt1.lineWidth = 47;
        this.minTxt1.setTransform(79.6, 51);

        this.instance_6 = new lib.限注1();
        this.instance_6.setTransform(82.9, 60, 1, 1, 0, 0, 0, 29.9, 9);
        this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 2, 3);
        new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_6 }, { t: this.minTxt1 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.minTxt2 }, { t: this.minTxt3 }, { t: this.maxTxt1 }, { t: this.maxTxt2 }, { t: this.maxTxt3 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

        // bg
        this.instance_7 = new lib.限注框2();
        this.instance_7.setTransform(98, 69.5, 1, 1, 0, 0, 0, 89, 50.5);
        this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 3, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11, -12, 233, 163);


    (lib.亮牌 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.instance = new lib.亮牌3();
        this.instance.setTransform(39, 19.7, 1, 1, 0, 0, 0, 22.1, 10.8);
        this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 1, 3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 39.2, y: 19.9 }, 0).wait(1).to({ scaleX: 0.95, scaleY: 0.95, x: 38.8, y: 19.6 }, 0).wait(2));

        // 图层 3
        this.instance_1 = new lib.开牌2();
        this.instance_1.setTransform(74, 25.8, 1, 1, 0, 0, 0, 74, 25.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({ scaleX: 1.05, scaleY: 1.05, x: 76, y: 26.3 }, 0).wait(1).to({ regX: 74.1, scaleX: 0.95, scaleY: 0.95, x: 71.9, y: 25.4 }, 0).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 69, 35);


    (lib.闲对win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AK4FtIgOAAIgDAAIgDAAQi8AAi1gHQoEgUnUhLIgFgBIgXgFIDSptIAaAEIACAAQFyA4GUASQC1AIC8ABIADAAIADAAIAOAAIAKAAIAAKCgAnllUQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBACIi6IsIAAACIAAAEIACAEIABABIADACIABAAIABAAQHOBJH/AUQC1AHC8AAIADAAIADgCIABgBQADgDAAgDIAAo+QAAgEgDgDIgBgBIAAgCIgGAAIAAAAQixAAipgHIgXgBQmYgTl1g5IgCAAIgBAAQgDgBgCACIgBAAIgCABgACRDQIACgTIAYABIAJhIIgZACIADgRIAygHIgLBgIAYAAIgCATgAAuDKIADgTIAZABIALhIIgZAEIACgSIAygHIgNBfIAZABIgDAUgAi8C9IAFgSIAZgBIAQhHIgZAEIADgTIAzgGIgVBeIAZACIgFATgAgeC8QgHgBgDgCQgDgGACgFQAAgFAFgEQAEgEAHACQAGAAAEAEQADADgBAFQgBAGgFAEQgEADgEAAIgDAAgAgUCAQgGAAgCgDQgEgEABgGQABgFAGgCQAEgFAGABQAGgBADAFQAEAEAAAGQgCAFgFADQgFACgFAAIgCAAgADUAgQgBgRgEgSIApADQATAAACgPIAJhsIhKgDIACgdIBLADIACglIAlACIgDAlIAYABIgCAdIgZgBIgIB4QgBAQgJAKQgMAIgOABIgGAAIg0gCgAgkAVQAAgTgDgOQARADANAAQAPABADgOIAaiPIhigEIAGgbICDAGIgdCrQgCASgIAIQgIAJgNAFQgHACgLAAIgggCgAA/gKQAigWAYgfIgjhCIAegOIAcAvQANgZAIgcIhLgDIAEgdIBuAEIgDAdQgPAvgXAlIAgA3IgjAQIgVglQgbAdghAYQgIgQgIgRgAjOAMIAxjBIAkABIggB/QAngYAeghIgrgBIAHgcIA0ADIAFgWIAjABIgGAWIAzACIgFAcIgzgCIgEAXIALgIQAfAYAOASIgbAVIghgjIgNA/IgkgCIAOhFQgaAcgfAXQgIgPgHgKIgPA8gAC/hiIAcgOQAXAdATAeIgiAQQgRgfgTgegAh6jHIAigIIARAlIglAIIgOglg");
        mask.setTransform(70.6, 36.6);

        // 图层 2
        this.instance = new lib.光();
        this.instance.setTransform(-5.7, 66.7, 0.055, 0.07, -1.8, 0, 0, 97.2, 89.8);
        this.instance.alpha = 0.73;
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regX: 97.3, regY: 89.1, scaleX: 1.32, scaleY: 1.14, x: 59.4, y: 56.3, alpha: 1 }, 38, cjs.Ease.get(0.5)).wait(1));

        // 图层 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("AK4FtIgOAAIgDAAIgDAAQi8AAi1gHQoEgUnUhLIgFgBIgXgFIDSptIAaAEIACAAQFyA4GUASQC1AIC8ABIADAAIADAAIAOAAIAKAAIAAKCgAnllUQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgBACIi6IsIAAACIAAAEIACAEIABABIADACIABAAIABAAQHOBJH/AUQC1AHC8AAIADAAIADgCIABgBQADgDAAgDIAAo+QAAgEgDgDIgBgBIAAgCIgGAAIAAAAQixAAipgHIgXgBQmYgTl1g5IgCAAIgBAAQgDgBgCACIgBAAIgCABgACRDQIACgTIAYABIAJhIIgZACIADgRIAygHIgLBgIAYAAIgCATgAAuDKIADgTIAZABIALhIIgZAEIACgSIAygHIgNBfIAZABIgDAUgAi8C9IAFgSIAZgBIAQhHIgZAEIADgTIAzgGIgVBeIAZACIgFATgAgeC8QgHgBgDgCQgDgGACgFQAAgFAFgEQAEgEAHACQAGAAAEAEQADADgBAFQgBAGgFAEQgEADgEAAIgDAAgAgUCAQgGAAgCgDQgEgEABgGQABgFAGgCQAEgFAGABQAGgBADAFQAEAEAAAGQgCAFgFADQgFACgFAAIgCAAgADUAgQgBgRgEgSIApADQATAAACgPIAJhsIhKgDIACgdIBLADIACglIAlACIgDAlIAYABIgCAdIgZgBIgIB4QgBAQgJAKQgMAIgOABIgGAAIg0gCgAgkAVQAAgTgDgOQARADANAAQAPABADgOIAaiPIhigEIAGgbICDAGIgdCrQgCASgIAIQgIAJgNAFQgHACgLAAIgggCgAA/gKQAigWAYgfIgjhCIAegOIAcAvQANgZAIgcIhLgDIAEgdIBuAEIgDAdQgPAvgXAlIAgA3IgjAQIgVglQgbAdghAYQgIgQgIgRgAjOAMIAxjBIAkABIggB/QAngYAeghIgrgBIAHgcIA0ADIAFgWIAjABIgGAWIAzACIgFAcIgzgCIgEAXIALgIQAfAYAOASIgbAVIghgjIgNA/IgkgCIAOhFQgaAcgfAXQgIgPgHgKIgPA8gAC/hiIAcgOQAXAdATAeIgiAQQgRgfgTgegAh6jHIAigIIARAlIglAIIgOglg");
        this.shape.setTransform(70.6, 36.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 141.3, 73.2);


    (lib.闲对hover = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 4
        this.instance = new lib.光_1();
        this.instance.setTransform(139.2, 90.7, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [139.1, 90.6, 134.1, 90.9, 123.1, 90.9, 100.5, 90.8, 69.7, 88.9, 38.5, 87, 16.8, 83.6, 5.9, 82, 1.2, 80.6, 11.2, 50.4, 21.2, 20.1, 21.2, 20.4, 25, 21.1, 28.8, 21.8, 36.5, 22.8, 55.8, 25.4, 79.7, 26.8, 117.2, 29, 140, 28.8, 139.7, 59.2, 139.5, 89.5] } }, 39).wait(1));

        // 图层 1
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(21.6, 20.3, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_1.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [21.8, 20.4, 24.2, 21.1, 36.5, 22.8, 55.8, 25.4, 79.7, 26.8, 117.2, 29, 140, 28.8, 139.7, 59.7, 139.5, 90.6, 134.4, 90.9, 123.1, 90.9, 100.5, 90.8, 69.7, 88.9, 38.5, 87, 16.8, 83.6, 5.9, 82, 1.2, 80.6, 10.8, 51.6, 20.4, 22.5] } }, 39).wait(1));

        // 图层 4
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(139.2, 90.7, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_2.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [139.1, 90.6, 134.1, 90.9, 123.1, 90.9, 100.5, 90.8, 69.7, 88.9, 38.5, 87, 16.8, 83.6, 5.9, 82, 1.2, 80.6, 11.2, 50.4, 21.2, 20.1, 21.2, 20.4, 25, 21.1, 28.8, 21.8, 36.5, 22.8, 55.8, 25.4, 79.7, 26.8, 117.2, 29, 140, 28.8, 139.7, 59.2, 139.5, 89.5] } }, 39).wait(1));

        // 图层 1
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(21.6, 20.3, 0.03, 0.03, 0, 0, 0, 20, 21.7);
        this.instance_3.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_3.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ regX: 21.5, regY: 21.5, scaleX: 2, scaleY: 2, guide: { path: [21.8, 20.4, 24.2, 21.1, 36.5, 22.8, 55.8, 25.4, 79.7, 26.8, 117.2, 29, 140, 28.8, 139.7, 59.7, 139.5, 90.6, 134.4, 90.9, 123.1, 90.9, 100.5, 90.8, 69.7, 88.9, 38.5, 87, 16.8, 83.6, 5.9, 82, 1.2, 80.6, 10.8, 51.6, 20.4, 22.5] } }, 39).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-195, -196.4, 600.2, 553.1);


    (lib.闲win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AGdLTIgEAAQqXhuoxjeIgggNIFNo0IAAAAIE9odIAiALQB8AnB/AhQFbBaGAAxIAHABIAWACIgKAhIgCADIgBACIjBJHIgBAAIgCABIgBAAIi8I4IAAACIgMAmgAi6qzQgEAAgCADIgBADIpjQOIgBABIgBAFQAAACACACQACADADABQItDbKVBtIABAAIADAAIAEgBQADgCABgEIGByBIABgBIgBgFIgBgCIgCgCIgDgCIgCAAQl6gylWhXQiIgkiEgqIgCAAIgEABgAAsEwIAMgbIAlALIAwhnIgqgDIANgbIBRAIIg/CHIAlALIgMAcgAhSECQgIgFgCgGQgFgHADgHQAEgIAJgCQAJgFALAEQAHACAEAHQADAGgDAIQgEAIgJADIgNACIgGAAgAkuDHIAPgaIAkAKIA1hiIgpgDIANgaIBPAHIhECEIAjAKIgNAbgAgnCuQgKgDgEgHQgDgHAFgGQACgIAJgDQAJgDAKACQAIADAEAIQAEAFgEAHQgEAIgJADIgJACIgIgBgACNAoQAKgiAEgeQAeAKAaAHQAhAHAMgYIB3kGIi/gyIAYgwIEBBEIiLE7QgPAdgUAQQgVAPgbACIgBAAQgcAAhJgVgAAoghIA9h8QhAAphBAdQgJgfgJgWIg6BxIhEgTIC2lgIBAARIhyDkQBQgdBLgxIhRgVIAbgyIBjAZIATgnIBCAQIgSApIBjAbIgXA0IhlgbIgVAqIAYgLQAvA8AbAoIhDAeQgXgpgZgoIg3BxgABSmhIBIgCQAIAiAHAqIhNAEQgEgsgGgig");
        mask.setTransform(84.9, 72.8);

        // 图层 2
        this.instance = new lib.光();
        this.instance.setTransform(3.1, 109.3, 0.069, 0.064, 8.7, 0, 0, 98.2, 90.2);
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regX: 98.5, regY: 89.9, scaleX: 1.61, scaleY: 1.58, rotation: 18.5, x: 81.5, y: 68.1 }, 38).wait(1));

        // 图层 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("AGdLTIgEAAQqXhuoxjeIgggNIFNo0IAAAAIE9odIAiALQB8AnB/AhQFbBaGAAxIAHABIAWACIgKAhIgCADIgBACIjBJHIgBAAIgCABIgBAAIi8I4IAAACIgMAmgAi6qzQgEAAgCADIgBADIpjQOIgBABIgBAFQAAACACACQACADADABQItDbKVBtIABAAIADAAIAEgBQADgCABgEIGByBIABgBIgBgFIgBgCIgCgCIgDgCIgCAAQl6gylWhXQiIgkiEgqIgCAAIgEABgAAsEwIAMgbIAlALIAwhnIgqgDIANgbIBRAIIg/CHIAlALIgMAcgAhSECQgIgFgCgGQgFgHADgHQAEgIAJgCQAJgFALAEQAHACAEAHQADAGgDAIQgEAIgJADIgNACIgGAAgAkuDHIAPgaIAkAKIA1hiIgpgDIANgaIBPAHIhECEIAjAKIgNAbgAgnCuQgKgDgEgHQgDgHAFgGQACgIAJgDQAJgDAKACQAIADAEAIQAEAFgEAHQgEAIgJADIgJACIgIgBgACNAoQAKgiAEgeQAeAKAaAHQAhAHAMgYIB3kGIi/gyIAYgwIEBBEIiLE7QgPAdgUAQQgVAPgbACIgBAAQgcAAhJgVgAAoghIA9h8QhAAphBAdQgJgfgJgWIg6BxIhEgTIC2lgIBAARIhyDkQBQgdBLgxIhRgVIAbgyIBjAZIATgnIBCAQIgSApIBjAbIgXA0IhlgbIgVAqIAYgLQAvA8AbAoIhDAeQgXgpgZgoIg3BxgABSmhIBIgCQAIAiAHAqIhNAEQgEgsgGgig");
        this.shape.setTransform(84.9, 72.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 169.8, 145.6);


    (lib.闲hover = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 5
        this.instance = new lib.光_1();
        this.instance.setTransform(127.9, 144.5, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [127.8, 144.4, 85.3, 136.4, 60.1, 129.5, 44.2, 125.1, 21.5, 117, 10.2, 112.9, 2.1, 109.7, 2.1, 109.7, 43, 40.7, 53.2, 23.5, 65.8, 2.1, 85.3, 8.2, 100.4, 11.9, 108.1, 13.8, 114.6, 15.1, 119.3, 16, 124.9, 17, 127.9, 17.6, 131.1, 18.1, 146.5, 20.9, 167.4, 24.1, 167.4, 24.2, 128.5, 142.7] } }, 39).wait(1));

        // 图层 2
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(65.8, 2, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_1.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [65.9, 2.1, 95.4, 11.3, 114.7, 15.1, 121.9, 16.5, 131.1, 18.1, 146.5, 20.8, 167.4, 24.1, 127.9, 144.4, 127.9, 144.4, 85.4, 136.4, 60.1, 129.4, 44.3, 125.1, 21.6, 116.9, 10.2, 112.9, 2.1, 109.7, 27.7, 66.6, 43, 40.7, 60.7, 10.7, 65, 3.7] } }, 39).wait(1));

        // 图层 5
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(127.9, 144.5, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_2.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [127.8, 144.4, 85.3, 136.4, 60.1, 129.5, 44.2, 125.1, 21.5, 117, 10.2, 112.9, 2.1, 109.7, 2.1, 109.7, 43, 40.7, 53.2, 23.5, 65.8, 2.1, 85.3, 8.2, 100.4, 11.9, 108.1, 13.8, 114.6, 15.1, 119.3, 16, 124.9, 17, 127.9, 17.6, 131.1, 18.1, 146.5, 20.9, 167.4, 24.1, 167.4, 24.2, 128.5, 142.7] } }, 39).wait(1));

        // 图层 2
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(65.8, 2, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_3.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_3.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ guide: { path: [65.9, 2.1, 95.4, 11.3, 114.7, 15.1, 121.9, 16.5, 131.1, 18.1, 146.5, 20.8, 167.4, 24.1, 127.9, 144.4, 127.9, 144.4, 85.4, 136.4, 60.1, 129.4, 44.3, 125.1, 21.6, 116.9, 10.2, 112.9, 2.1, 109.7, 27.7, 66.6, 43, 40.7, 60.7, 10.7, 65, 3.7] } }, 39).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-193.2, -257, 587.2, 667.6);


    (lib.箭头旋转 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.箭头();
        this.instance.setTransform(12, 10, 1, 1, 0, 0, 0, 12, 10);
        this.instance.shadow = new cjs.Shadow("rgba(102,204,0,1)", 0, 0, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 12.1, scaleX: 0.04, x: 11.8 }, 21).wait(1).to({ regX: 12, scaleX: 1, x: 12 }, 20).to({ regX: 12.1, scaleX: 0.04, x: 11.8 }, 20).wait(1).to({ regX: 12, scaleX: 1, x: 12 }, 20).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4, -4, 40, 36);


    (lib.箭头动 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.箭头旋转();
        this.instance.setTransform(12, 10, 1, 1, 0, 0, 0, 12, 10);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ y: 19 }, 9).to({ y: 10 }, 9).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2, -2, 32, 28);


    (lib.庄对win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("Aq/FtIAAqDIAeAAQJigBIThRIABAAIAcgDIDOJtIgWAFIgDAAQp2BkrRACgAqmkAIgBABQgEADAAAEIAAI9QAAAEAEADIABABQACACADAAQLLgCJxhiIACAAIACgBIABgBIADgFIAAgEIAAgCIi6osIAAgCIgCgDIgDgCIgDgBIgEAAIgCAAQiCAUiHARQmgAunTABIgFAAgAjhDDIAYgBIgJhIIgZAHIgBgTIAugOIANBfIAZgBIADATIhKAGgAAGCyIAYgDIgOhGIgWAGIgDgSIArgOIAUBeIAYgBIAEATIhJAFgAhOC/QgEgEgBgFQgCgGAEgEQAEgDAHAAQAFgBAEADQAGADABAGQABAFgDAEQgFAEgGABQgGAAgFgDgABlCrIAYgCIgQhHIgYAHIgEgTIAtgNIAYBeIAYgBIAEASIhJAFgAhXCEQgFgDgBgFQgBgGAEgEQADgDAHAAQAFgBAFADQAFADABAGQABAFgEAEQgDADgGABIgCAAQgFAAgEgDgAlYANQAXgngFg0IgIhMIBhgGIgPgVIApgLIARAdIBUgGIAFAcIi+ANIAFAtQAJBTgiAtQgPgUgOgMgAkiAAIBYgEIgIg3IhEAFIgCgeIBCgFIgFglIAlgCIAEAlIBGgFIAFAeIhFAEIAIA3IBSgGIAHAdIjTAQgAhGgJQAagbAOggIg6g9IAZgRIArArQAFgagDgcIhKAFIgGgeIBsgHIAFAdQADAvgMAnIA0AyIgeAWIgfgkQgQAhgaAZIgZgdgABGgTIApgCQASgBgEgQIgahqIhJAFIgGgdIBJgFIgKglIAjgDIAJAlIAYgCIAIAeIgXABIAeB2QAEARgFALQgHAIgPACIg4AFQgGgPgLgSgAAYhtIAWgSIA7AzIgbAVQgagcgcgag");
        mask.setTransform(70.4, 36.5);

        // 图层 2
        this.instance = new lib.光();
        this.instance.setTransform(1.5, 83.3, 0.092, 0.079, -1.8, 0, 0, 97.4, 88.7);
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regY: 89.3, scaleX: 1.2, scaleY: 1.03, x: 61.4, y: 50.5, alpha: 0.73 }, 38, cjs.Ease.get(1)).wait(1));

        // 图层 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("Aq/FtIAAqDIAeAAQJigBIThRIABAAIAcgDIDOJtIgWAFIgDAAQp2BkrRACgAqmkAIgBABQgEADAAAEIAAI9QAAAEAEADIABABQACACADAAQLLgCJxhiIACAAIACgBIABgBIADgFIAAgEIAAgCIi6osIAAgCIgCgDIgDgCIgDgBIgEAAIgCAAQiCAUiHARQmgAunTABIgFAAgAjhDDIAYgBIgJhIIgZAHIgBgTIAugOIANBfIAZgBIADATIhKAGgAAGCyIAYgDIgOhGIgWAGIgDgSIArgOIAUBeIAYgBIAEATIhJAFgAhOC/QgEgEgBgFQgCgGAEgEQAEgDAHAAQAFgBAEADQAGADABAGQABAFgDAEQgFAEgGABQgGAAgFgDgABlCrIAYgCIgQhHIgYAHIgEgTIAtgNIAYBeIAYgBIAEASIhJAFgAhXCEQgFgDgBgFQgBgGAEgEQADgDAHAAQAFgBAFADQAFADABAGQABAFgEAEQgDADgGABIgCAAQgFAAgEgDgAlYANQAXgngFg0IgIhMIBhgGIgPgVIApgLIARAdIBUgGIAFAcIi+ANIAFAtQAJBTgiAtQgPgUgOgMgAkiAAIBYgEIgIg3IhEAFIgCgeIBCgFIgFglIAlgCIAEAlIBGgFIAFAeIhFAEIAIA3IBSgGIAHAdIjTAQgAhGgJQAagbAOggIg6g9IAZgRIArArQAFgagDgcIhKAFIgGgeIBsgHIAFAdQADAvgMAnIA0AyIgeAWIgfgkQgQAhgaAZIgZgdgABGgTIApgCQASgBgEgQIgahqIhJAFIgGgdIBJgFIgKglIAjgDIAJAlIAYgCIAIAeIgXABIAeB2QAEARgFALQgHAIgPACIg4AFQgGgPgLgSgAAYhtIAWgSIA7AzIgbAVQgagcgcgag");
        this.shape.setTransform(70.4, 36.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 140.8, 73);


    (lib.庄对hover = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.instance = new lib.光_1();
        this.instance.setTransform(159.6, 72.5, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [159.5, 72.5, 153.8, 73.5, 143.1, 75, 121, 77.8, 94.3, 79.7, 51.6, 82.7, 21.3, 83.2, 21.2, 83.2, 21.2, 75.3, 21.2, 67.4, 21.2, 51.6, 21.1, 20.2, 21, 20, 46.2, 20.8, 73, 19, 102.5, 17.2, 139.8, 11.8, 139.7, 11.8, 144.7, 26.7, 149.6, 41.6, 159.5, 71.4] } }, 39).wait(1));

        // 图层 1
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(21.2, 20, 2, 2, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_1.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [21.4, 20.2, 46.4, 20.9, 73, 19.1, 89.5, 18.1, 108.6, 15.9, 123.5, 14.2, 139.8, 11.9, 140.4, 13.9, 141.1, 15.9, 143.4, 22.9, 149.8, 42.1, 154.8, 57.3, 157.3, 64.8, 159.8, 72.4, 159.8, 72.4, 154.1, 73.5, 143.1, 74.9, 121, 77.8, 94.3, 79.7, 51.6, 82.6, 21.3, 83.2, 21.2, 83.1, 21.2, 55.1, 21.1, 26, 21, 21.4] } }, 39).wait(1));

        // 图层 2
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(159.6, 72.5, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_2.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [159.5, 72.5, 153.8, 73.5, 143.1, 75, 121, 77.8, 94.3, 79.7, 51.6, 82.7, 21.3, 83.2, 21.2, 83.2, 21.2, 75.3, 21.2, 67.4, 21.2, 51.6, 21.1, 20.2, 21, 20, 46.2, 20.8, 73, 19, 102.5, 17.2, 139.8, 11.8, 139.7, 11.8, 144.7, 26.7, 149.6, 41.6, 159.5, 71.4] } }, 39).wait(1));

        // 图层 1
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(21.2, 20, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_3.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_3.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ guide: { path: [21.4, 20.2, 46.4, 20.9, 73, 19.1, 89.5, 18.1, 108.6, 15.9, 123.5, 14.2, 139.8, 11.9, 140.4, 13.9, 141.1, 15.9, 143.4, 22.9, 149.8, 42.1, 154.8, 57.3, 157.3, 64.8, 159.8, 72.4, 159.8, 72.4, 154.1, 73.5, 143.1, 74.9, 121, 77.8, 94.3, 79.7, 51.6, 82.6, 21.3, 83.2, 21.2, 83.1, 21.2, 55.1, 21.1, 26, 21, 21.4] } }, 39).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-237.8, -239, 664.4, 577.5);


    (lib.庄win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AqDBmIAAAAIgEgLIjKpRIAXgDIAJgBQIQhEHHiOIAigLIKKRRIggAMQjoBdj6BIQlhBnmGBAIgbAGgAC3q0QnJCSoTBEIgCAAIgEACQgCACgBADIAAACIAAACIAAACIGBSBQABADADACIACABIAFAAIACAAQGLhBFlhoQDxhGDhhYQADgBACgDIABgEIAAgFIgBgBIpkwOIgBgDQgCgDgDgBIgDgBIgDABgAk/FpIAkgJIgphsIgiARIgLgdIBCggIA3CPIAkgJIAKAcIhqAagAhlE9QgIgEgDgHQgDgIAEgIQAEgGAJgCQAJgCAIADQAIAEADAJQADAHgEAHQgDAHgKACIgFABQgGAAgGgDgAgODkQgQgrAHgcIAEgKQAIgSAVgFIADgBQATgFAQAGQARAFAPASQAOASALAdQAQArgHAaQgGAbgeAHQgJADgIAAQgxAAgahIgAAXCWQgZAGAXA+QAWA6AZgGQAZgGgXg8QgVg3gWAAIgEABgACjEPQgIgEgEgIQgCgIADgHQAFgHAJgBQAJgDAIAEQAIADADAJQADAIgEAGQgDAHgKACIgGABQgFAAgGgCgADlD9IgLgcQAJADAKAAIAPgCIABAAQApgKgTg2IgBAAQgEARgSAIIgGABIgJABQgQABgQgJQgTgLgIgXIAAAAQgGgMABgLQgBgMAGgLQAKgUAagHQAMgDALACIAPADQAHAEAHAEQATANANAbIAGAOIAEAJQAMAngIAbQgJAegkAJIgPACIgPABIgIgCgADfBmQgKACgEAKQgBAEAAAGQAAAGADAGQACAHAEAEQAEAGAFADQAGADAFABIAKgBIAFgCQAGgDACgHQAEgIgEgMIgCgDQgCgGgEgDIgIgIIgHgEQgEgCgEAAIgGABgAiHDlQgIgDgDgIQgDgIAEgGQAFgHAJgBQAJgEAHAFQAIADADAIQADAIgDAHQgEAHgKADIgFAAQgGAAgGgEgAFxDbIgNgfQAXAHATgFQAPgDAFgJQAHgKgFgNIgEgIQgMgQgfAHQgLADgQAFIgkhcIBdgXIALAeIg+AOIANAkIAOgEQAagHAUAJQALAGAHAJQAIAIAEAMIACADQAIAZgLARQgMAUgeAIQgQADgNAAIgOgBgAlNAUQAYhSgqhkIg5iVIC4gtQgVgWgQgPIBIgkIAyA0ICegoIAXA5IloBZIAjBYQA+CfgmBeQgogggigSgAjsgTICggpIgphlIh+AeIgXg5IB+ggIgehIIBFgRIAeBIICAgfIAYA4IiBAhIApBmICZgnIAYA6Il+Bfg");
        mask.setTransform(85, 72.8);

        // 图层 2
        this.instance = new lib.光();
        this.instance.setTransform(37.8, 154, 0.071, 0.056, -1.8, 0, 0, 97, 89.7);
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regX: 97.1, regY: 89.1, scaleX: 1.59, scaleY: 1.34, x: 55.2, y: 82.1, alpha: 0.73 }, 38, cjs.Ease.get(1)).wait(1));

        // 图层 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("AqDBmIAAAAIgEgLIjKpRIAXgDIAJgBQIQhEHHiOIAigLIKKRRIggAMQjoBdj6BIQlhBnmGBAIgbAGg");
        this.shape.setTransform(85, 72.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).to({ _off: true }, 1).wait(39));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 170.1, 145.6);


    (lib.和win = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 3 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AAPFkIgKAAIgQAAIgFAAIgBAAQiwAAiqgHIgXgBQmagTl1g6IgCAAIAAAAIgagDIDDpHIAKgoIAWADIAFABIAEAAQEWAiEpANQC1AIC8AAIASAAIAUAAQHxgBG9g2IAHAAIAWgDIAMAkIAAACIABABIDBJHQgUAEgCAAIgDAAIgCAAQiCAUiHARQmiAunTABIgGAAgAvTlCIgCACIgCAEIgBABIi5IsIgBABIAAAFIABACIAAAAIACACIACACIACAAIACABQFxA4GWASQC1AIC8ABIADAAIADAAIAMAAIAOAAIAGAAQJigCIVhRIABAAIAEgCIAAgBIACgBIABgDIAAgEIAAgCIi6orIgBgCQgBgEgDgCIgBgBIgFAAIgCAAQnCA4n2ABIgUAAIgSAAQi8AAi1gJQkugNkagjIgCAAIgDAAIgEABgAm1CPIAThsQgdAgghAdQgEgUgIgbQAtggAgglIg7AAIAHgjIBAAAIAFgdQgbAAgaADIAAggQAlgDAkgBQAqgFAmgCIAGAgIg5AEIgFAhIA7AAIgFAjIg8AAIgDAdIAPgJQAaAPAYASIgkAdQgSgQgPgMIgQBtgAkxCDIAbjvICfAAIgJDsIg1AAIABgZIhEAAIgDAcgAj1A+IBEAAIAIiHIg/AAgAGkBUQgVgLgDgTQgEgaAlgMIAAgBQgjgJgCgTQgFgRATgJQAOgMAbABQAYgBAVALQASAJAEAPQADAUgiALIAAABQAUAEAOAKQAMAJADAOIABAIQgBANgNAJQgTAKggACQgegCgSgJgAGyA1QACAIAKAGQAJAEANACQALgCAKgEQAFgGAAgIQgEgRgfgIQgcAJADAQgAGygZQgIAFAEAHQABAMAaAGQAVgGgBgMQgDgHgFgFQgJgEgJAAQgLAAgGAEgAAbBbIgBgYIAoAAIgDhWIgpAFIgBgXIBQgNIAGB1IAoAAIACAYgAEEBOQgJgFABgGQgDgHAKgGQADgEAMABQAIgBALAEQAEAGACAHQAAAGgFAFQgGAEgKACQgLgCgHgEgAD7AEQgIgFAAgEQgBgIAFgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAFgGAKADQAJgDAKAGIABABQAEADABAIQABAEgGAFQgHACgJACQgKgCgHgCg");
        mask.setTransform(119.9, 35.7);

        // 图层 2
        this.instance = new lib.光();
        this.instance.setTransform(116.8, 78, 0.069, 0.064, 8.7, 0, 0, 98.2, 90.2);
        this.instance._off = true;
        this.instance.filters = [new cjs.BlurFilter(5, 5, 3)];
        this.instance.cache(-2, -2, 201, 184);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({ _off: false }, 0).to({ regX: 97.3, regY: 89.2, scaleX: 1.82, scaleY: 1.44, rotation: -1.8, x: 117.5, y: 79.6, alpha: 0.73 }, 38, cjs.Ease.get(1)).wait(1));

        // 图层 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0)").s().p("AAPFkIgKAAIgQAAIgFAAIgBAAQiwAAiqgHIgXgBQmagTl1g6IgCAAIAAAAIgagDIDDpHIAKgoIAWADIAFABIAEAAQEWAiEpANQC1AIC8AAIASAAIAUAAQHxgBG9g2IAHAAIAWgDIAMAkIAAACIABABIDBJHQgUAEgCAAIgDAAIgCAAQiCAUiHARQmiAunTABIgGAAgAvTlCIgCACIgCAEIgBABIi5IsIgBABIAAAFIABACIAAAAIACACIACACIACAAIACABQFxA4GWASQC1AIC8ABIADAAIADAAIAMAAIAOAAIAGAAQJigCIVhRIABAAIAEgCIAAgBIACgBIABgDIAAgEIAAgCIi6orIgBgCQgBgEgDgCIgBgBIgFAAIgCAAQnCA4n2ABIgUAAIgSAAQi8AAi1gJQkugNkagjIgCAAIgDAAIgEABgAm1CPIAThsQgdAgghAdQgEgUgIgbQAtggAgglIg7AAIAHgjIBAAAIAFgdQgbAAgaADIAAggQAlgDAkgBQAqgFAmgCIAGAgIg5AEIgFAhIA7AAIgFAjIg8AAIgDAdIAPgJQAaAPAYASIgkAdQgSgQgPgMIgQBtgAkxCDIAbjvICfAAIgJDsIg1AAIABgZIhEAAIgDAcgAj1A+IBEAAIAIiHIg/AAgAGkBUQgVgLgDgTQgEgaAlgMIAAgBQgjgJgCgTQgFgRATgJQAOgMAbABQAYgBAVALQASAJAEAPQADAUgiALIAAABQAUAEAOAKQAMAJADAOIABAIQgBANgNAJQgTAKggACQgegCgSgJgAGyA1QACAIAKAGQAJAEANACQALgCAKgEQAFgGAAgIQgEgRgfgIQgcAJADAQgAGygZQgIAFAEAHQABAMAaAGQAVgGgBgMQgDgHgFgFQgJgEgJAAQgLAAgGAEgAAbBbIgBgYIAoAAIgDhWIgpAFIgBgXIBQgNIAGB1IAoAAIACAYgAEEBOQgJgFABgGQgDgHAKgGQADgEAMABQAIgBALAEQAEAGACAHQAAAGgFAFQgGAEgKACQgLgCgHgEgAD7AEQgIgFAAgEQgBgIAFgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAFgGAKADQAJgDAKAGIABABQAEADABAIQABAEgGAFQgHACgJACQgKgCgHgCg");
        this.shape.setTransform(119.9, 35.7);

        this.timeline.addTween(cjs.Tween.get(this.shape).to({ _off: true }, 1).wait(39));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 239.8, 71.3);


    (lib.和hover = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 2
        this.instance = new lib.光_1();
        this.instance.setTransform(237.2, 81.8, 3, 3, 0, 0, 0, 21.5, 21.5);
        this.instance.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ guide: { path: [237.1, 81.6, 223.4, 83.9, 201.5, 86, 157.1, 90.2, 114.9, 90, 72.9, 89.8, 32.6, 85.5, 12.6, 83.3, 0.9, 81.3, 5.9, 66.3, 10.8, 51.3, 15.8, 36.4, 18.3, 28.9, 20.8, 21.5, 20.9, 21.5, 20.9, 21.9, 28, 22.6, 35.2, 23.4, 49.5, 24.5, 84.8, 27.4, 120, 27.2, 154.9, 27, 190.2, 24, 207.7, 22.6, 218.2, 21.2, 227.7, 50.6, 237.2, 79.9] } }, 39).wait(1));

        // 图层 1
        this.instance_1 = new lib.光_1();
        this.instance_1.setTransform(21.5, 21.6, 3, 3, 0, 0, 0, 21.5, 21.5);
        this.instance_1.filters = [new cjs.BlurFilter(80, 80, 3)];
        this.instance_1.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ guide: { path: [21.6, 21.8, 25.5, 22.6, 49.4, 24.5, 84.8, 27.4, 119.9, 27.2, 154.8, 27, 190.1, 24, 207.7, 22.6, 218.2, 21.2, 228, 51.4, 237.7, 81.5, 223.8, 83.8, 201.5, 86, 157, 90.2, 114.9, 90, 72.9, 89.8, 32.6, 85.5, 12.5, 83.3, 0.9, 81.3, 16.9, 32.7, 20.3, 23.2] } }, 39).wait(1));

        // 图层 2
        this.instance_2 = new lib.光_1();
        this.instance_2.setTransform(237.2, 81.8, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_2.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_2.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ guide: { path: [237.1, 81.6, 223.4, 83.9, 201.5, 86, 157.1, 90.2, 114.9, 90, 72.9, 89.8, 32.6, 85.5, 12.6, 83.3, 0.9, 81.3, 5.9, 66.3, 10.8, 51.3, 15.8, 36.4, 18.3, 28.9, 20.8, 21.5, 20.9, 21.5, 20.9, 21.9, 28, 22.6, 35.2, 23.4, 49.5, 24.5, 84.8, 27.4, 120, 27.2, 154.9, 27, 190.2, 24, 207.7, 22.6, 218.2, 21.2, 227.7, 50.6, 237.2, 79.9] } }, 39).wait(1));

        // 图层 1
        this.instance_3 = new lib.光_1();
        this.instance_3.setTransform(21.5, 21.6, 1, 1, 0, 0, 0, 21.5, 21.5);
        this.instance_3.filters = [new cjs.BlurFilter(23, 23, 3)];
        this.instance_3.cache(-2, -2, 47, 47);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ guide: { path: [21.6, 21.8, 25.5, 22.6, 49.4, 24.5, 84.8, 27.4, 119.9, 27.2, 154.8, 27, 190.1, 24, 207.7, 22.6, 218.2, 21.2, 228, 51.4, 237.7, 81.5, 223.8, 83.8, 201.5, 86, 157, 90.2, 114.9, 90, 72.9, 89.8, 32.6, 85.5, 12.5, 83.3, 0.9, 81.3, 16.9, 32.7, 20.3, 23.2] } }, 39).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-259, -258.9, 784.7, 628.2);


    (lib.tieArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { win: 0, down: 1, hover: 2, normal: 3 });

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

        // Layer 2
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(195, 0.8);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);

        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));

        // 图层 7
        this.instance = new lib.和区();
        this.instance.setTransform(114.6, 31.7, 1, 1, 0, 0, 0, 117.2, 33.3);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

        // 图层 6
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(117, -9, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 4);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));

        // 图层 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("AAPFkIgKAAIgQAAIgFAAIgBAAQiwgBiqgGIgXgBQmagTl1g6IgCAAIAAAAIgagDIDDpHIAKgoIAWADIAFAAIAEABQEWAiEpANQC1AIC8AAIASAAIAUAAQHxAAG9g3IAHgBIAWgCIAMAkIAAACIABABIDBJGQgUAFgCAAIgDAAIgCAAQiCAUiHARQmiAunTABIgGAAgAvTlCIgCACIgCAEIgBABIi5IsIgBABIAAAFIABACIAAAAIACACIACACIACAAIACABQFxA4GWASQC1AIC8ABIADAAIADAAIAMAAIAOAAIAGAAQJigCIVhQIABgBIAEgCIAAgBIACgCIABgCIAAgEIAAgCIi6orIgBgCQgBgEgDgCIgBgBIgFAAIgCAAQnCA4n2ABIgUAAIgSAAQi8gBi1gHQkugOkagjIgCAAIgDAAIgEABg");

        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 114.5, y: 31.3 }).wait(2));

        // 图层 1
        this.instance_2 = new lib.和win();
        this.instance_2.setTransform(114.5, 31.2, 1, 1, 0, 0, 0, 119.9, 35.6);

        this.instance_3 = new lib.和hover();
        this.instance_3.setTransform(124.6, 27, 1, 1, 0, 0, 0, 129.4, 51.3);

        this.instance_2.mask = this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));

        // 图层 3
        this.instance_4 = new lib.和字();
        this.instance_4.setTransform(111.1, 31.5, 1, 1, 0, 0, 0, 45.4, 12.7);
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);

        this.instance_5 = new lib.和字();
        this.instance_5.setTransform(111.1, 31.5, 1, 1, 0, 0, 0, 45.4, 12.7);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 1 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.879 } }] }, 1).wait(3));

        // 图层 2
        this.instance_6 = new lib.和区();
        this.instance_6.setTransform(114.6, 31.7, 1, 1, 0, 0, 0, 117.2, 33.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-259.6, -258.6, 751, 583);


    (lib.playerPairArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "win": 0, "down": 1, "hover": 2, "normal": 3 });

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

        // Layer 2
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(113.6, 10);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);

        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));

        // 图层 2
        this.instance = new lib.闲对区();
        this.instance.setTransform(65.5, 34.6, 1, 1, 0, 0, 0, 68.1, 34.2);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

        // 图层 7
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(75, -3, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 4);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));

        // 图层 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("AK4FtIgOAAIgDAAIgDAAQi8AAi1gHQoEgUnUhLIgFgBIgXgFIDSptIAaAEIACAAQFyA4GUASQC1AIC8ABIADAAIADAAIAOAAIAKAAIAAKCgAnllUQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIgBACIi6IsIAAACIAAAEIACAEIABABIADACIABAAIABAAQHOBJH/AUQC1AHC8AAIADAAIADgCIABgBQADgDAAgDIAAo+QAAgEgDgDIgBgBIAAgCIgGAAIAAAAQixAAipgHIgXgBQmYgTl1g5IgCAAIgBAAQgDgBgCACIgBAAIgCABg");

        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 65, y: 34.8 }).wait(2));

        // 图层 1
        this.instance_2 = new lib.闲对win();
        this.instance_2.setTransform(65, 34.9, 1, 1, 0, 0, 0, 70.6, 36.6);
        this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(97, 100, 0, 0))];
        this.instance_2.cache(-2, -2, 145, 77);

        this.instance_3 = new lib.闲对hover();
        this.instance_3.setTransform(75.2, 35, 1, 1, 0, 0, 0, 80.2, 56);

        this.instance_2.mask = this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));

        // 图层 4
        this.instance_4 = new lib.闲对();
        this.instance_4.setTransform(71.8, 35, 1, 1, 0, 0, 0, 27.6, 21.3);
        this.instance_4.alpha = 0.801;
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);

        this.instance_5 = new lib.闲对();
        this.instance_5.setTransform(71.8, 35, 1, 1, 0, 0, 0, 27.6, 21.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 0.801 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.75 } }] }, 1).wait(3));

        // 图层 3
        this.instance_6 = new lib.闲对区();
        this.instance_6.setTransform(65.5, 34.6, 1, 1, 0, 0, 0, 68.1, 34.2);
        this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-259.6, -256.6, 653, 585);


    (lib.playerArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "win": 0, "down": 1, "hover": 2, "normal": 3 });

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

        // Layer 2
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(135, 14.5);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);

        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));

        // 图层 2
        this.instance = new lib.闲区();
        this.instance.setTransform(76.7, 64.1, 1, 1, 0, 0, 0, 81.2, 69.5);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

        // 图层 6
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(104, 4, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 4);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));

        // 图层 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("AGdLUIgEgBQqXhuoxjeIgggNIFNo1IAAAAIE9ocIAiAMQB8AmB/AiQFbBYGAAyIAHAAIAWADIgKAgIgCAEIgBACIjBJIIgBAAIgCABIgBAAIi8I4IAAABIgMAlgAi6q0QgEACgCADIgBABIpjQPIgBABIgBAEQAAADACADQACACADABQItDbKVBtIABAAIADAAIAEgBQADgCABgDIGByBIABgDIgBgDIgBgCIgCgDIgDgCIgCgBQl6gxlWhXQiIgkiEgqIgCAAIgEAAg");

        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 76.7, y: 63.8 }).wait(2));

        // 图层 1
        this.instance_2 = new lib.闲win();
        this.instance_2.setTransform(76.7, 63.8, 1, 1, 0, 0, 0, 84.9, 72.8);
        this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(97, 100, 0, 0))];
        this.instance_2.cache(-2, -2, 174, 150);

        this.instance_3 = new lib.闲hover();
        this.instance_3.setTransform(76.7, 63.8, 1, 1, 0, 0, 0, 84.9, 72.8);

        this.instance_2.mask = this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));

        // 图层 4
        this.instance_4 = new lib.闲字();
        this.instance_4.setTransform(84.9, 62.7, 1, 1, 0, 0, 0, 38.5, 40.9);
        this.instance_4.alpha = 0.801;
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);

        this.instance_5 = new lib.闲字();
        this.instance_5.setTransform(84.9, 62.7, 1, 1, 0, 0, 0, 38.5, 40.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 0.801 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.75 } }] }, 1).wait(3));

        // 图层 3
        this.instance_6 = new lib.闲区();
        this.instance_6.setTransform(76.7, 64.1, 1, 1, 0, 0, 0, 81.2, 69.5);
        this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-261.5, -262.4, 679, 656);


    (lib.bankerPairArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "win": 0, "down": 1, "hover": 2, "normal": 3 });

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

        // Layer 2
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(99, 4);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);

        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));

        // 图层 2
        this.instance = new lib.庄对区();
        this.instance.setTransform(66.8, 34.5, 1, 1, 0, 0, 0, 68, 34.2);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

        // 图层 7
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(56, -2, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 5);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));

        // 图层 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("Aq+FtIAAqDIAdAAQJigBIThRIABAAIAcgDIDOJtIgWAFIgDAAQp2BkrRACgAqmkAIgCABQgDADAAAEIAAI9QAAAEADADIACABQACACADAAQLLgCJxhiIABAAIADgBIABgBIADgFIAAgEIAAgCIi6osIgBgCIgBgDIgDgCIgDgBIgEAAIgCAAQiCAUiHARQmgAunTABIgFAAg");

        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 67.2, y: 34.7 }).wait(2));

        // 图层 1
        this.instance_2 = new lib.庄对win();
        this.instance_2.setTransform(67.2, 34.8, 1, 1, 0, 0, 0, 70.4, 36.5);

        this.instance_3 = new lib.庄对hover();
        this.instance_3.setTransform(66.9, 34.1, 1, 1, 0, 0, 0, 90.2, 46.8);

        this.instance_2.mask = this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));

        // 图层 4
        this.instance_4 = new lib.庄对();
        this.instance_4.setTransform(58.8, 34.8, 1, 1, 0, 0, 0, 26.2, 21.5);
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);

        this.instance_5 = new lib.庄对();
        this.instance_5.setTransform(58.8, 34.8, 1, 1, 0, 0, 0, 26.2, 21.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 1 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.801 } }] }, 1).wait(3));

        // 图层 3
        this.instance_6 = new lib.庄对区();
        this.instance_6.setTransform(66.8, 34.5, 1, 1, 0, 0, 0, 68, 34.2);
        this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-258.2, -256.7, 653, 585);


    (lib.bankerArea = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, { "win": 0, "down": 1, "hover": 2, "normal": 3 });

        // timeline functions:
        this.frame_0 = function () {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

        // Layer 2
        this.clearBtn = new lib.删除按钮();
        this.clearBtn.setTransform(84, 0);
        new cjs.ButtonHelper(this.clearBtn, 0, 1, 2, false, new lib.删除按钮(), 3);

        this.timeline.addTween(cjs.Tween.get(this.clearBtn).wait(4));

        // 图层 5
        this.instance = new lib.庄区();
        this.instance.setTransform(80.2, 66.4, 1, 1, 0, 0, 0, 81.3, 69.5);
        this.instance.alpha = 0;
        this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

        // 图层 6
        this.instance_1 = new lib.箭头动();
        this.instance_1.setTransform(54, 5, 1, 1, 0, 0, 0, 12, 10);
        this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 4);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({ _off: false }, 0).to({ _off: true }, 1).wait(1));

        // 图层 4 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_2 = new cjs.Graphics().p("AqDBmIAAAAIgEgLIjKpRIAXgDIAJgBQIQhEHHiOIAigKIKKRQIggAMQjoBdj6BIQlhBnmGBAIgbAGgAC3q0QnJCRoTBEIgCABIgEACQgCACgBADIAAACIAAACIAAACIGBSBQABAEADACIACAAIAFAAIACAAQGLhBFlhoQDxhGDhhYIAFgEIABgEIAAgFIgBgBIpkwPIgBgCQgCgDgDgBIgDgBIgDABg");

        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(2).to({ graphics: mask_graphics_2, x: 80.5, y: 66.9 }).wait(2));

        // 图层 1
        this.instance_2 = new lib.庄win();
        this.instance_2.setTransform(80.5, 66.9, 1, 1, 0, 0, 0, 85, 72.8);

        this.instance_3 = new lib.元件5();
        this.instance_3.setTransform(81.2, 60.9, 1, 1, 0, 0, 0, 104, 64.5);

        this.instance_2.mask = this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [] }, 1).to({ state: [{ t: this.instance_3 }] }, 1).to({ state: [] }, 1).wait(1));

        // 图层 3
        this.instance_4 = new lib.庄095();
        this.instance_4.setTransform(83.2, 67.3, 1, 1, 0, 0, 0, 43.5, 43);
        this.instance_4.alpha = 0.398;
        this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)", 0, 0, 122);

        this.instance_5 = new lib.庄095();
        this.instance_5.setTransform(83.2, 67.3, 1, 1, 0, 0, 0, 43.5, 43);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4, p: { alpha: 0.398 } }] }).to({ state: [{ t: this.instance_4, p: { alpha: 0.801 } }] }, 1).wait(3));

        // 图层 2
        this.instance_6 = new lib.庄区();
        this.instance_6.setTransform(80.2, 66.4, 1, 1, 0, 0, 0, 81.3, 69.5);
        this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)", 0, 0, 244);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({ alpha: 0.301 }, 0).wait(1).to({ alpha: 1 }, 0).wait(1).to({ alpha: 0 }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-258.1, -260.1, 680, 656);


    (lib.opBtns = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.clearBetsBtn = new lib.清除按钮();
        this.clearBetsBtn.setTransform(67, 26, 0.9, 0.9, 0, 0, 0, 67, 26);
        new cjs.ButtonHelper(this.clearBetsBtn, 0, 1, 2, false, new lib.清除按钮(), 3);

        this.openPaiBtn = new lib.开牌按钮();
        this.openPaiBtn.setTransform(217.5, 26, 0.9, 0.9, 0, 0, 0, 67, 26);
        new cjs.ButtonHelper(this.openPaiBtn, 0, 1, 2, false, new lib.开牌按钮(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.openPaiBtn }, { t: this.clearBetsBtn }] }).wait(1));

        // Layer 3
        this.flyPaiBtn = new lib.飞牌按钮();
        this.flyPaiBtn.setTransform(67, 26, 0.9, 0.9, 0, 0, 0, 67, 26);
        new cjs.ButtonHelper(this.flyPaiBtn, 0, 1, 2, false, new lib.飞牌按钮(), 3);

        this.reBetsBtn = new lib.重押按钮();
        this.reBetsBtn.setTransform(216.5, 26, 0.9, 0.9, 0, 0, 0, 67, 26);
        new cjs.ButtonHelper(this.reBetsBtn, 0, 1, 2, false, new lib.重押按钮(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.reBetsBtn }, { t: this.flyPaiBtn }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-13.3, -14.5, 327.2, 84);


    (lib.road_summary = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.sumTxt = new cjs.Text("38", "bold 12px 'Microsoft YaHei'", "#D0B900");
        this.sumTxt.name = "sumTxt";
        this.sumTxt.textAlign = "right";
        this.sumTxt.lineHeight = 18;
        this.sumTxt.lineWidth = 41;
        this.sumTxt.setTransform(115.5, 89.5, 1.011, 1.011);

        this.playerPairTxt = new cjs.Text("5", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.playerPairTxt.name = "playerPairTxt";
        this.playerPairTxt.textAlign = "right";
        this.playerPairTxt.lineHeight = 18;
        this.playerPairTxt.lineWidth = 41;
        this.playerPairTxt.setTransform(115.5, 71.5, 1.011, 1.011);

        this.bankerPairTxt = new cjs.Text("6", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.bankerPairTxt.name = "bankerPairTxt";
        this.bankerPairTxt.textAlign = "right";
        this.bankerPairTxt.lineHeight = 18;
        this.bankerPairTxt.lineWidth = 41;
        this.bankerPairTxt.setTransform(115.5, 53.3, 1.011, 1.011);

        this.tieTxt = new cjs.Text("8", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.tieTxt.name = "tieTxt";
        this.tieTxt.textAlign = "right";
        this.tieTxt.lineHeight = 18;
        this.tieTxt.lineWidth = 41;
        this.tieTxt.setTransform(115.5, 34.8, 1.011, 1.011);

        this.playerTxt = new cjs.Text("25", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.playerTxt.name = "playerTxt";
        this.playerTxt.textAlign = "right";
        this.playerTxt.lineHeight = 18;
        this.playerTxt.lineWidth = 41;
        this.playerTxt.setTransform(115.5, 17);

        this.bankerTxt = new cjs.Text("12", "bold 12px 'Microsoft YaHei'", "#FFFFFF");
        this.bankerTxt.name = "bankerTxt";
        this.bankerTxt.textAlign = "right";
        this.bankerTxt.lineHeight = 18;
        this.bankerTxt.lineWidth = 41;
        this.bankerTxt.setTransform(115.5, -0.5);

        this.playerAskBtn = new lib.Alpha0Btn();
        this.playerAskBtn.setTransform(0, 126.7, 1.538, 1);
        new cjs.ButtonHelper(this.playerAskBtn, 0, 1, 1);

        this.bankerAskBtn = new lib.Alpha0Btn();
        this.bankerAskBtn.setTransform(0, 108.4, 1.538, 1);
        new cjs.ButtonHelper(this.bankerAskBtn, 0, 1, 1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.bankerAskBtn }, { t: this.playerAskBtn }, { t: this.bankerTxt }, { t: this.playerTxt }, { t: this.tieTxt }, { t: this.bankerPairTxt }, { t: this.playerPairTxt }, { t: this.sumTxt }] }).wait(1));

        // road_icon
        this.askIconsMc2 = new lib.问路牌路图标集();
        this.askIconsMc2.setTransform(97.8, 135.5, 1, 1, 0, 0, 0, 17.3, 3.8);

        this.askIconsMc1 = new lib.问路牌路图标集();
        this.askIconsMc1.setTransform(98.3, 117.5, 1, 1, 0, 0, 0, 17.3, 3.8);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.askIconsMc1 }, { t: this.askIconsMc2 }] }).wait(1));

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DBC087").s().p("ACVA1IAAgGIgXAAIAAAGIgOAAIAAgsIAzAAIAAAsgAB+AiIAXAAIAAgMIgXAAgAACAlIASAAQAKAAAAgJIAAg6IglAAIAAgOIA1AAIAABLQAAAKgEAFQgEAEgHABIgaABIgDgPgAhpAlIAMABQAIAAAAgHIAAhAIgrAAIAAgNIA5AAIAABOQAAAIgCAEQgCAFgGACQgFABgPAAIgEgPgAipA0IAAhZIAPAAIAAA6QANgMAKgNIgSAAIAAgOIAWAAIAAgLIAPAAIAAALIAVAAIAAAOIgVAAIAAAJIADgEQAPAKAIAIIgKAKIgQgPIAAAcIgPAAIAAgfQgIAOgLAKIgIgLIAAAcgAgxAzIAAhXIAPAAIAABXgAA/AiIAEAAIAAgjIAKAAIAAAiIAGgBIAAgoIgOAAIAAglIAlAAIAAASQALgLAGgOIAPACIgFAJIAgAAIAAAMQgFAMgKAJQAJADALACIgEALQgRgDgMgFQgMAFgRADIgFgKQAMgCAKgEQgFgFgEgFIgFAFIgFgIIAAANIgJAAIAAALIAIAAIAAAMIgIAAIAAAQIAMgCIgBAOIgrAGgACJgPQAIgGAEgHIgYAAQAFAIAHAFgABSgUIALAAIAAgLIgLAAgAgYAhIAAgzIAsAAIAAAsIgeAAIAAAHgAgKAMIAQAAIAAgQIgQAAgAgjgvIANgFIAMAXIgOAFIgLgXgAicgvIAOgFIAKASIgPAFIgJgSg");
        this.shape.setTransform(21.5, 134.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#DBC087").s().p("ACYA1IAAgGIgYAAIAAAGIgNAAIAAgsIAyAAIAAAsgACAAiIAYAAIAAgMIgYAAgAAEAlIASAAQALAAAAgJIAAg6IglAAIAAgOIA0AAIAABLQAAAKgEAFQgDAEgHABIgaABIgEgPgAirAlQALgRAAgWIAAgjIAoAAIgEgLIARgEIAGAPIAkAAIAAANIhQAAIAAAWQAAAkgQASQgFgJgFgGgAgvAzIAAhXIAQAAIAABXgABCAiIADAAIAAgjIALAAIAAAiIAGgBIAAgoIgPAAIAAglIAmAAIAAASQAKgLAGgOIAQACIgFAJIAgAAIAAAMQgGAMgKAJQAJADALACIgEALQgQgDgMgFQgNAFgQADIgGgKQANgCAJgEQgFgFgDgFIgFAFIgFgIIAAANIgKAAIAAALIAJAAIAAAMIgJAAIAAAQIAMgCIAAAOIgsAGgACMgPQAHgGAEgHIgXAAQAEAIAIAFgABVgUIAKAAIAAgLIgKAAgAiVAvIAAgNIAjAAIAAgZIgcAAIAAgMIAcAAIAAgRIAPAAIAAARIAdAAIAAAMIgdAAIAAAZIAiAAIAAANgAgVAhIAAgzIAsAAIAAAsIgeAAIAAAHgAgHAMIAQAAIAAgQIgQAAgAgggvIANgFIAMAXIgPAFIgKgXg");
        this.shape_1.setTransform(21.8, 117.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#DBC087").s().p("AB1AqIgFAFIgNgHQgMAIgQAEIgGgOQALgBAIgDIgQgHIAHgKIgJAAIAAgLIAPAAIACgHIAHABIAAgLQgJAJgMAEIgEgKQAKgFAIgGIgQAAIAAgMIAJAAIgIgMIAKgGIAJANIgKAFIANAAIAAgVIANAAIAAAVIALAAIgJgFQAGgGADgHIALAGIgJAMIAGAAIAAAMIgTAAIAAAHIAEgFIANAIQAIgRAHgaIAOABIgEARIAbAAIAAAMIgFAAQgCAbgKATQAHAHAKAGQgEAEgFALQgJgHgHgJQgKALgLAGIgJgLgABfAGIAZAAIAAAKQgFAIgFAHIAKAEIgCADQAMgFAIgLQgFgKgDgMIgDAFIgHgHIgCADIgPgHIAAAGIgFAAIgDAGgABWAWIALAEQAFgEADgFIgQAAgACLgSQACARAGAKQAGgLABgUIgOAAIgBAEgAAKAmIAOABQAEAAACgCQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAIAAgUIABgMIg8AAQAAAfgNATIgMgOQAGgJACgLQACgLAAgVIAAgiIBWAAIAAAhIhGAAIAAAHIBKAAIAAApQAAAIgCADQgDAEgEACQgDACgYAAIgCgPgAgagaIA3AAIAAgIIg3AAgAiCAzQgQgBAAgPIAAgXIAPAAIAAATQAAAGAGAAIAQAAIAGgBQADgBAAgEIACgJIAOAHQgEAQgFADQgGADgGAAgAirAnIAKgaIANAFIgKAbgAhXATIANgGIAKAaIgNAGQgFgOgFgMgAgVAoIAAgfIArAAIAAAbIgcAAIAAAEgAgGAaIAOAAIAAgHIgOAAgAiAAMIAHgFIgkAAIAAgpIASAAIgIgNIAOgFIAKAPIgHADIARAAIAMgSIAQADIgKAPIASAAIAAApIgmAAIANAMIgLAKIgPgRgAiNgFIAvAAIAAgRIgvAAg");
        this.shape_2.setTransform(21.8, 99.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0043EE").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
        this.shape_3.setTransform(40.2, 81.4, 0.976, 0.976);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgrAmIAMAAQAHAAAAgGIAAhBIgrAAIAAgNIA6AAIAABOQAAAIgDAEQgCAFgFACQgFACgQgBIgDgOgAhrA0IAAhZIAOAAIAAA6QAOgMAJgNIgRAAIAAgOIAVAAIAAgLIAPAAIAAALIAWAAIAAAOIgWAAIAAAJIAEgEQAPAKAIAIIgLAKIgQgPIAAAcIgPAAIAAgeQgIANgKAKIgJgLIAAAcgAA7AkIARAAQAHAAAAgGIAAgwIgfAAIAAgOIAfAAIAAgTIAPAAIAAATIAKAAIAAAOIgKAAIAAA1QAAAIgDAEQgEAEgGAAIgWABIgEgQgAABAkQANgLAIgOIgTgcIAMgIIAOAXQAEgNACgOIggAAIAAgOIAvAAIAAAOQgEAXgIAQIAQAXIgNAJIgLgRQgIAOgNAMIgIgPgAAwgEIALgIIAUAYIgNAJIgSgZgAhfguIAPgGIAKASIgPAFIgKgRg");
        this.shape_4.setTransform(15.4, 81.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#DF0303").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
        this.shape_5.setTransform(40.7, 62.7, 0.976, 0.976);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AhuAlQALgQAAgWIAAgkIApAAIgFgKIASgFIAGAPIAjAAIAAANIhQAAIAAAWQAAAkgPASQgFgJgGgGgAA+AkIAQAAQAIAAAAgGIAAgwIgfAAIAAgPIAfAAIAAgSIAPAAIAAASIAKAAIAAAPIgKAAIAAA1QAAAIgEAEQgDAEgGABIgXAAIgDgQgAAEAkQAMgLAIgOIgTgcIAMgIIAOAXQAEgMACgOIggAAIAAgPIAvAAIAAAPQgDAWgIAQIAQAXIgOAJIgKgRQgJAPgMALIgIgPgAhXAwIAAgOIAjAAIAAgZIgcAAIAAgLIAcAAIAAgSIAPAAIAAASIAdAAIAAALIgdAAIAAAZIAiAAIAAAOgAAzgEIALgIIATAYIgNAJIgRgZg");
        this.shape_6.setTransform(15.6, 63.2);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#02A611").s().p("AgHAzIAAhlIAPAAIAABlg");
        this.shape_7.setTransform(41.4, 45.4, 1.143, 1.107, 30.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgeAzIAAgnQgGAMgIALIgFgRQALgMAGgNIgQAAIAAgPIASAAIAAgLIgPABIgCgOQAZgBAVgDIABANIgPADIAAAMIAPAAIAAAPIgPAAIAAAJIAEgCIANAMIgHAKIgKgKIAAAngAADAvIAAhaIAvAAIAABZIgOAAIAAgJIgTAAIAAAKgAARAWIATAAIAAgzIgTAAg");
        this.shape_8.setTransform(9.6, 46.1);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AAOAmIAMAAQAIAAAAgGIAAhBIgpAAIAAgNIA4AAIAABPQgBAHgCAEQgCAFgFACQgGACgPgBIgEgOgAgwA0IAAhZIAPAAIAAA6QANgMAKgNIgSAAIAAgOIAWAAIAAgLIANAAIAAALIAWAAIAAAOIgWAAIAAAJIAEgEQAPAKAHAIIgKAKIgQgPIAAAcIgNAAIAAgeQgIANgKAKIgJgLIAAAcgAgjgvIAOgFIAKASIgPAFIgJgSg");
        this.shape_9.setTransform(9.4, 27.3);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("Ag0AmQALgSAAgWIAAgjIApAAIgFgKIAQgFIAGAPIAjAAIAAAOIhOAAIAAAVQAAAkgPASQgFgIgGgGgAgdAwIAAgOIAhAAIAAgZIgaAAIAAgLIAaAAIAAgSIAPAAIAAASIAdAAIAAALIgdAAIAAAZIAiAAIAAAOg");
        this.shape_10.setTransform(9.8, 9.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 12), null, new cjs.Matrix2D(0.757, 0, 0, 0.694, -59.8, -11.3)).s().p("ApRBVIAAinISgAAIAAgCIAEAAIAACpg");
        this.shape_11.setTransform(60, 135.1);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAinQABAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgCIScAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIADAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_12.setTransform(60, 135.1);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 12), null, new cjs.Matrix2D(0.76, 0, 0, 0.696, -59.7, -11)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_13.setTransform(60, 117.5);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_14.setTransform(60, 117.5);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 13), null, new cjs.Matrix2D(0.789, 0, 0, 0.748, -96.3, -11.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_15.setTransform(60, 99.5);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_16.setTransform(60, 99.5);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 24), null, new cjs.Matrix2D(0.759, 0, 0, 0.719, -59.6, -11.9)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_17.setTransform(60, 81.5);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_18.setTransform(60, 81.5);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 22), null, new cjs.Matrix2D(0.767, 0, 0, 0.727, -60.2, -12.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_19.setTransform(60, 63.5);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_20.setTransform(60, 63.5);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 23), null, new cjs.Matrix2D(0.767, 0, 0, 0.727, -60.2, -12.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_21.setTransform(60, 45.5);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_22.setTransform(60, 45.5);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 24), null, new cjs.Matrix2D(0.768, 0, 0, 0.728, -60.2, -12.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_23.setTransform(60, 27.5);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_24.setTransform(60, 27.5);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["bjlskin_atlas_"], 22), null, new cjs.Matrix2D(0.767, 0, 0, 0.727, -60.2, -12.1)).s().p("ApRBVIAAipISkAAIAACpg");
        this.shape_25.setTransform(60, 9.5);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#391A09").s().p("ApRBaIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAipQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAEgBISjAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAACpQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
        this.shape_26.setTransform(60, 9.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -0.5, 120, 144.6);


    (lib.HistoryMc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // tip
        this.tipEquableMc = new lib.庄闲和提示();
        this.tipEquableMc.setTransform(347, 85.9, 0.5, 0.5, 0, 0, 0, 31, 34.5);

        this.timeline.addTween(cjs.Tween.get(this.tipEquableMc).wait(1));

        // 叶子1
        this.instance = new lib.叶子4();
        this.instance.setTransform(989, 0, 0.686, 0.687);

        this.instance_1 = new lib.叶子1();
        this.instance_1.setTransform(0, 1.3, 0.686, 0.687);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_1 }, { t: this.instance }] }).wait(1));

        // summary
        this.summaryPanelMc = new lib.road_summary();
        this.summaryPanelMc.setTransform(981.1, 131.9, 1, 1, 0, 0, 0, 60.9, 66);

        this.timeline.addTween(cjs.Tween.get(this.summaryPanelMc).wait(1));

        // Layer 2
        this.historyMc = new lib.spaceHolder();
        this.historyMc.setTransform(8.5, 68.5);

        this.xqlMc = new lib.spaceHolder();
        this.xqlMc.setTransform(632, 174.7);

        this.xiaoluMc = new lib.spaceHolder();
        this.xiaoluMc.setTransform(344.3, 175.2);

        this.dylMc = new lib.spaceHolder();
        this.dylMc.setTransform(344.3, 138.9);

        this.daluMc = new lib.spaceHolder();
        this.daluMc.setTransform(344, 67.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.daluMc }, { t: this.dylMc }, { t: this.xiaoluMc }, { t: this.xqlMc }, { t: this.historyMc }] }).wait(1));

        // Layer 8
        this.instance_2 = new lib._3网();
        this.instance_2.setTransform(858.9, 132.9, 1, 1, 0, 0, 0, 514.9, 66.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // bg
        this.instance_3 = new lib.历史记录();
        this.instance_3.setTransform(521.1, 133, 1, 1, 0, 0, 0, 514.1, 66.5);

        this.instance_4 = new lib.底1_1();
        this.instance_4.setTransform(527, 140.9, 1, 1, 0, 0, 0, 521, 75.2);
        this.instance_4.shadow = new cjs.Shadow("rgba(31,16,5,1)", 0, 2, 4);

        this.instance_5 = new lib.底框();
        this.instance_5.setTransform(525, 144, 1, 1.002, 0, 0, 0, 525, 82.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }] }).wait(1));

        // 叶子2
        this.instance_6 = new lib.叶子3();
        this.instance_6.setTransform(852, 18.9, 0.686, 0.687);

        this.instance_7 = new lib.叶子2();
        this.instance_7.setTransform(246.3, 28.2, 0.686, 0.687);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_7 }, { t: this.instance_6 }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 1052, 223.7);


    (lib.TableMc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // info
        this.limitedMc = new lib.限注框();
        this.limitedMc.setTransform(169.6, 234.3, 1, 1, 0, 0, 0, 101.5, 67);

        this.limitLabelMc = new lib.本桌限注();
        this.limitLabelMc.setTransform(77.8, 168.6, 1, 1.018, 0, 10.9, 0, 29.8, 7.3);
        this.limitLabelMc.shadow = new cjs.Shadow("rgba(0,0,0,1)", 0, 1, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.limitLabelMc }, { t: this.limitedMc }] }).wait(1));

        // chipsTips
        this.betsChipsTipsMc = new lib.spaceHolder();
        this.betsChipsTipsMc.setTransform(2, 2, 1, 1, 0, 0, 0, 2, 2);

        this.timeline.addTween(cjs.Tween.get(this.betsChipsTipsMc).wait(1));

        // sendPoker
        this.instance = new lib.玻璃();
        this.instance.setTransform(849.6, 27.3, 0.517, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 图层 2
        this.bankerPointMc = new lib.元件4();
        this.bankerPointMc.setTransform(589.8, 164.8, 1, 1, 0, 0, 0, 12.2, 18.8);

        this.playerPointMc = new lib.元件2();
        this.playerPointMc.setTransform(462.1, 164.9, 1, 1, 0, 0, 0, 12.2, 18.8);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.playerPointMc }, { t: this.bankerPointMc }] }).wait(1));

        // pokersArea
        this.miPokerBtn0 = new lib.亮牌();
        this.miPokerBtn0.setTransform(348.8, 333.5, 0.8, 0.8, 0, 0, 0, 26, 11);
        this.miPokerBtn0.shadow = new cjs.Shadow("rgba(0,0,0,1)", -1, 2, 9);
        new cjs.ButtonHelper(this.miPokerBtn0, 0, 1, 2, false, new lib.亮牌(), 3);

        this.playerChipsMc = new lib.spaceHolder();
        this.playerChipsMc.setTransform(527.7, 630.2);

        this.bankerChipsMc = new lib.spaceHolder();
        this.bankerChipsMc.setTransform(523, 2);

        this.pokerLayerMc = new lib.spaceHolder();

        this.recyclePokerMc = new lib.spaceHolder();
        this.recyclePokerMc.setTransform(55.5, 77.4, 1, 1, 0, 0, 0, 2, 2);

        this.sendPokerMc = new lib.spaceHolder();
        this.sendPokerMc.setTransform(854.5, 34, 1, 1, 0, 0, 0, 2, 2);

        this.pokerStartMc = new lib.spaceHolder();
        this.pokerStartMc.setTransform(800, 139, 1, 1, 0, 0, 0, 2, 2);

        this.miMc = new lib.spaceHolder();
        this.miMc.setTransform(524.5, 321.5, 1, 1, 0, 0, 0, 2, 2);

        this.PokerMc = new lib.spaceHolder();
        this.PokerMc.setTransform(526, 81.5, 1, 1, 0, 0, 0, 2, 2);

        this.miPokerBtn1 = new lib.亮牌();
        this.miPokerBtn1.setTransform(654.1, 333.5, 0.8, 0.8, 0, 0, 0, 26, 11);
        this.miPokerBtn1.shadow = new cjs.Shadow("rgba(0,0,0,1)", -1, 2, 9);
        new cjs.ButtonHelper(this.miPokerBtn1, 0, 1, 2, false, new lib.亮牌(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.miPokerBtn1 }, { t: this.PokerMc }, { t: this.miMc }, { t: this.pokerStartMc }, { t: this.sendPokerMc }, { t: this.recyclePokerMc }, { t: this.pokerLayerMc }, { t: this.bankerChipsMc }, { t: this.playerChipsMc }, { t: this.miPokerBtn0 }] }).wait(1));

        // win
        this.playerWinMc = new lib._03();
        this.playerWinMc.setTransform(448, 120.1, 1, 1, 0, 0, 0, 85, 44.6);

        this.bankerWinMc = new lib._03();
        this.bankerWinMc.setTransform(621.8, 125.1, 1, 1, 0, 0, 0, 39, 49.6);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.bankerWinMc }, { t: this.playerWinMc }] }).wait(1));

        // result
        this.betsErrorTipsMc = new lib.spaceHolder();
        this.betsErrorTipsMc.setTransform(525, 271);

        this.openPlayerPokerBtn = new lib.开牌_1();
        this.openPlayerPokerBtn.setTransform(416.8, 144.7, 0.8, 0.8, 0, 0, 0, 26, 11);
        this.openPlayerPokerBtn.shadow = new cjs.Shadow("rgba(0,0,0,1)", -1, 2, 9);
        new cjs.ButtonHelper(this.openPlayerPokerBtn, 0, 1, 2, false, new lib.开牌_1(), 3);

        this.openBankerPokerBtn = new lib.开牌_1();
        this.openBankerPokerBtn.setTransform(609.8, 144.7, 0.8, 0.8, 0, 0, 0, 26, 11);
        this.openBankerPokerBtn.shadow = new cjs.Shadow("rgba(0,0,0,1)", -1, 2, 9);
        new cjs.ButtonHelper(this.openBankerPokerBtn, 0, 1, 2, false, new lib.开牌_1(), 3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.openBankerPokerBtn }, { t: this.openPlayerPokerBtn }, { t: this.betsErrorTipsMc }] }).wait(1));

        // chipsArea
        this.betsChipsMc = new lib.spaceHolder();
        this.betsChipsMc.setTransform(2, 2, 1, 1, 0, 0, 0, 2, 2);

        this.timeline.addTween(cjs.Tween.get(this.betsChipsMc).wait(1));

        // opBtns
        this.opBtnsMc = new lib.opBtns();
        this.opBtnsMc.setTransform(513.9, 387, 1, 1, 0, 0, 0, 135.1, 25);

        this.timeline.addTween(cjs.Tween.get(this.opBtnsMc).wait(1));

        // betsValue
        this.mc4 = new lib.spaceHolder();
        this.mc4.setTransform(457.6, 277.5);

        this.mc3 = new lib.spaceHolder();
        this.mc3.setTransform(563.7, 277.5);

        this.mc0 = new lib.spaceHolder();
        this.mc0.setTransform(667.5, 215.6);

        this.mc2 = new lib.spaceHolder();
        this.mc2.setTransform(523.7, 208.5);

        this.mc1 = new lib.spaceHolder();
        this.mc1.setTransform(353.2, 211.6);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.mc1 }, { t: this.mc2 }, { t: this.mc0 }, { t: this.mc3 }, { t: this.mc4 }] }).wait(1));

        // bestArea
        this.betsItemMc1 = new lib.bankerArea();
        this.betsItemMc1.setTransform(781.3, 278.2, 1, 1, 0, 0, 0, 155.3, 131.7);

        this.betsItemMc2 = new lib.playerArea();
        this.betsItemMc2.setTransform(339.8, 208.2, 1, 1, 0, 0, 0, 74, 59.3);

        this.betsItemMc5 = new lib.playerPairArea();
        this.betsItemMc5.setTransform(456.5, 260.2, 1, 1, 0, 0, 0, 67, 35.4);

        this.betsItemMc4 = new lib.bankerPairArea();
        this.betsItemMc4.setTransform(579.6, 252.8, 1, 1, 0, 0, 0, 53.1, 27.7);

        this.betsItemMc3 = new lib.tieArea();
        this.betsItemMc3.setTransform(523.6, 201.8, 1, 1, 0, 0, 0, 114, 34.6);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.betsItemMc3 }, { t: this.betsItemMc4 }, { t: this.betsItemMc5 }, { t: this.betsItemMc2 }, { t: this.betsItemMc1 }] }).wait(1));

        // history
        this.historyMc = new lib.HistoryMc();
        this.historyMc.setTransform(382.4, 506, 1, 1, 0, 0, 0, 382.4, 66);

        this.timeline.addTween(cjs.Tween.get(this.historyMc).wait(1));

        // chipsBar
        this.chipsBarMc = new lib.chipsBar();
        this.chipsBarMc.setTransform(883.4, 455.8, 1, 1, 0, 0, 0, 173.8, 21.8);

        this.timeline.addTween(cjs.Tween.get(this.chipsBarMc).wait(1));

        // guid
        this.girlMc = new lib.spaceHolder();
        this.girlMc.setTransform(5, 271, 1, 1, 0, 0, 0, 2, 2);

        this.timeline.addTween(cjs.Tween.get(this.girlMc).wait(1));

        // bg
        this.pokerBoxMc = new lib.牌盒();
        this.pokerBoxMc.setTransform(946.6, 73.5, 1.087, 1.099, 0, 0, 0, 99.5, 73.2);

        this.instance_1 = new lib.主界面底图();
        this.instance_1.setTransform(525, 340, 1, 1, 0, 0, 0, 525, 340);

        this.instance_2 = new lib.下注区底图();
        this.instance_2.setTransform(523.5, 191.3, 1, 1, 0, 0, 0, 264.5, 108.8);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.pokerBoxMc }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -113.6, 1052, 793.8);


    // stage content:
    (lib.bjlskin = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层 1
        this.instance = new lib.TableMc();
        this.instance.setTransform(525, 328, 1, 1, 0, 0, 0, 525, 328);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(525, 226.4, 1052, 793.8);

})(bjllib = bjllib || {}, bjlimages = bjlimages || {}, bjlcreatejs = createjs || {}, ss = ss || {});
var bjllib, bjlimages, bjlcreatejs, ss;