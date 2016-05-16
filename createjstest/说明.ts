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

//绑定指定的this,回调函数中的this便指向本类
loader.addEventListener("complete", this.handleComplete.bind(this));
//全局保存this,
//Config.loadingIndex.startLoadGameRes();//首先将指向本类的索引保存在全局变量中;
*/