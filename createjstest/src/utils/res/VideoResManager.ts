/*
HTMLVideoElement: 从html中获取的video对象,不管是动态创建还是html设置,在ts或js中,都转换为HTMLVideoElement类;


*/

class VideoResManager extends ResManager{
    private static videoDic: Array<MVideo> = new Array<MVideo>();
    constructor() {
        super();
    }
    public static get objectarr(): Array<any> {
        return VideoResManager.videoDic;
    }
    ///获取html中已经存在的hvideo,
    public static getHVideo(videoId): HTMLVideoElement {
        if (this.videoDic[videoId]) {
            var lVideo = this.videoDic[videoId].hVideo;
        } else {
            var lVideo = document.getElementById(videoId) as HTMLVideoElement;
        }

        if (!lVideo) {
            console.log("没有找到元素:" + videoId);
            return null;
        }

        if (this.videoDic[videoId]) {
            var lVideoDOMElement = this.videoDic[videoId].csVideo;
        } else {
            var lVideoDOMElement = new createjs.DOMElement(videoId);
        }

        if (!this.videoDic[videoId]) {
            this.videoDic[videoId] = new MVideo(videoId, lVideo, lVideoDOMElement);
        };

        return this.videoDic[videoId].hVideo;
    }

    public static getCSVideo(videoId): createjs.DOMElement {
        if (this.videoDic[videoId]) {
            var lVideoDOMElement = this.videoDic[videoId].csVideo;
        } else {
            var lVideoDOMElement: createjs.DOMElement = null;
            console.log(videoId+"不存在");
        }
        return lVideoDOMElement;
    }
    ///创建video,添加到html页面,转换为createjs中的对象,方便添加到createjs的显示列表中,
    ///
    public static createDOMElementVideo(lWidth, lHeight, lVideoPath,parentid) {

        // Lets find the parent HTML Element (we will add our media element to the end of this element as a child element)
        // Lets make sure there is something here
        var lParent = document.getElementById(parentid);

        if (!lParent) {
            var lMesg = "SWElementVideo.prototype.createDOMElementVideo:: Attempting to add a new video element to the DOM, however, unable to find specified DOM parent element [" + parentid + "] ";
            return null;
        }

        // lets dynamically add a video element
        if (this.videoDic[parentid]) {
            var lVideo = this.videoDic[parentid].hVideo;
        } else {
            var lVideo = document.createElement('video');
        }
        
        lVideo.src = lVideoPath;

        lVideo.hidden = false;

        lVideo.width = lWidth;
        lVideo.height = lHeight;

        // Lets set the volume
        lVideo.volume = 1;
        lVideo.controls = true;

        lVideo.pause();

        // Add a listener for errors
        var self = this; // Store a reference to this
        lVideo.addEventListener("error", function (evt:ErrorEvent) {
            var lErrMesg = "Error::SWElementVideo:: Error loading video element, event.type [" + evt.type + "] Media Details: [" + evt.target + "]";
            console.log(lErrMesg);
        });


        // OK Lets add our media element as a child element of the specified parent HTML element.
        lParent.appendChild(lVideo);

        // Convert this to a dom element so that it can be added to our container (display list).
        if (this.videoDic[parentid]) {
            var lVideoDOMElement = this.videoDic[parentid].csVideo;
        } else {
            var lVideoDOMElement = new createjs.DOMElement(lVideo);
        }

        if (!this.videoDic[parentid]) {
            this.videoDic[parentid] = new MVideo(parentid, lVideo, lVideoDOMElement);
        };
        
        return this.videoDic[parentid].csVideo;

    }; // end_function createDOMElementVideo

} 

class MVideo {
    constructor(_name, _hvideo, _csVideo) {
        this.name = name;
        this.csVideo = _csVideo;
        this.hVideo = _hvideo;
    }
public hVideo: HTMLVideoElement;
public csVideo: createjs.DOMElement;
public name: string;

}