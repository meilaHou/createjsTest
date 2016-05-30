/*
资源路径问题
            var loader = new loadingcreatejs.LoadQueue(false);
//加载json的路径是相对于运行这一行代码的ts文件的路径
            loader.loadFile({ src: "./egame/images/loading_atlas_.json?1463196773695", type: "spritesheet", id: "loading_atlas_" }, true);
            loader.loadManifest(loadinglib.properties.manifest);
//json中的文件路径,是针对preloadjs的ts文件的路径;
            {"images": ["../egame/images/loading_atlas_.png"],
*/
/*
ts编译成js

编译ts文件的顺序,
首先是被使用和被引用的,然后紧接着是有引用别人的ts文件;
所以,有时候,需要将引用的文件手动添加到ts文件上,这样防止在编译时首先编译的是有引用其他ts的ts文件;

/*
this 的指向
方法一
 -             //this.exportRoot.instance.btnclick = function () {这个shis,是当前类的this,instance是一个movieclip,可以动态指定变量
 -             //    this.btn1.addEventListener("click", btnClick);这个this,是this.exportRoot.instance
 -             //    var that = this;                               这个this,是this.exportRoot.instance
 -             //    function btnClick(evt) {
 -             //        alert("btn1 点击2");
 -             //        that.progressMc.gotoAndStop(90);
 -
 -             //    }
 -
 -             //}
 -             // this.exportRoot.instance.btnclick();
方法二
 -             this.exportRoot.instance.btn1.addEventListener("click", btnClick2);
 -             function btnClick2(evt) {
 -                 alert("btn1 点击2");
 -                 this.exportRoot.instance.progressMc.gotoAndStop(90);
 -             }
两种方法实现同一个效果;

//绑定指定的this,回调函数中的this便指向本类(执行此行代码的类)
loader.addEventListener("complete", this.handleComplete.bind(this));
//全局保存this,
//Config.loadingIndex.startLoadGameRes();//首先将指向本类的索引保存在全局变量中;

继承关系中,父类中使用的this
1.静态类继承中,使用子类的调用父类方法时,父类中的this,代表子类
不管这个父类方法使用了其他方法还是没有,是私有还是公有,其中的this,均是指子类
2.静态类继承中,get 函数体内,指向的是父类
3.this.属性,指向的是子类;
*/

/*
文本文件加载的问题:
//文本文件的加载注意 文本的文字编码;不然返回undefined,如果没有这个文件,获取时,返回null;

*/

    /*
    音频和视频的加载
    1.html5标签
    2.createjs加载
    2.1 音频的加载
    2.1.1 loadqueue 预加载,
    2.1.2 sound 加载
    2.2视频的加载
    2.2.1loadqueque 预加载


    音频和视频的界面显示:
    1.html5标签
    2.画板中的自定义事件响应

    音频和视频的控制,通过代码控制


    */

//游戏中的资源管理
    /*
    包含下载功能,下载界面所需的内容;通用资源下载用资源管理器下载并管理;
    1.板块的加载,首先加载显示对象的资源,其次加载音频视频和将来用到的资源;
    这里的资源处理在板块内部;
    2.通用资源加载,用资源管理器下载并管理;
    统一保存在各自资源类型的管理类中;


    板块卸载之后,移除所有的侦听,生成的对象;
    但保留所有的已经加载的资源;
    已经加载的资源下次加载无需重新加载??同样的方式加载的貌似只需请求和少量下载;

    */