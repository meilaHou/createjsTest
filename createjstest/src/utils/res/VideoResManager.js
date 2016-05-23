var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VideoResManager = (function (_super) {
    __extends(VideoResManager, _super);
    function VideoResManager() {
        _super.call(this);
    }
    Object.defineProperty(VideoResManager, "objectarr", {
        get: function () {
            return VideoResManager.videoDic;
        },
        enumerable: true,
        configurable: true
    });
    VideoResManager.getHVideo = function (videoId) {
        if (this.videoDic[videoId]) {
            var lVideo = this.videoDic[videoId].hVideo;
        }
        else {
            var lVideo = document.getElementById(videoId);
        }
        if (!lVideo) {
            console.log("没有找到元素:" + videoId);
            return null;
        }
        if (this.videoDic[videoId]) {
            var lVideoDOMElement = this.videoDic[videoId].csVideo;
        }
        else {
            var lVideoDOMElement = new createjs.DOMElement(videoId);
        }
        if (!this.videoDic[videoId]) {
            this.videoDic[videoId] = new MVideo(videoId, lVideo, lVideoDOMElement);
        }
        ;
        return this.videoDic[videoId].hVideo;
    };
    VideoResManager.getCSVideo = function (videoId) {
        if (this.videoDic[videoId]) {
            var lVideoDOMElement = this.videoDic[videoId].csVideo;
        }
        else {
            var lVideoDOMElement = null;
            console.log(videoId + "不存在");
        }
        return lVideoDOMElement;
    };
    VideoResManager.createDOMElementVideo = function (lWidth, lHeight, lVideoPath, parentid) {
        var lParent = document.getElementById(parentid);
        if (!lParent) {
            var lMesg = "SWElementVideo.prototype.createDOMElementVideo:: Attempting to add a new video element to the DOM, however, unable to find specified DOM parent element [" + parentid + "] ";
            return null;
        }
        if (this.videoDic[parentid]) {
            var lVideo = this.videoDic[parentid].hVideo;
        }
        else {
            var lVideo = document.createElement('video');
        }
        lVideo.src = lVideoPath;
        lVideo.hidden = false;
        lVideo.width = lWidth;
        lVideo.height = lHeight;
        lVideo.volume = 1;
        lVideo.controls = true;
        lVideo.pause();
        var self = this;
        lVideo.addEventListener("error", function (evt) {
            var lErrMesg = "Error::SWElementVideo:: Error loading video element, event.type [" + evt.type + "] Media Details: [" + evt.target + "]";
            console.log(lErrMesg);
        });
        lParent.appendChild(lVideo);
        if (this.videoDic[parentid]) {
            var lVideoDOMElement = this.videoDic[parentid].csVideo;
        }
        else {
            var lVideoDOMElement = new createjs.DOMElement(lVideo);
        }
        if (!this.videoDic[parentid]) {
            this.videoDic[parentid] = new MVideo(parentid, lVideo, lVideoDOMElement);
        }
        ;
        return this.videoDic[parentid].csVideo;
    };
    ;
    VideoResManager.videoDic = new Array();
    return VideoResManager;
}(ResManager));
var MVideo = (function () {
    function MVideo(_name, _hvideo, _csVideo) {
        this.name = name;
        this.csVideo = _csVideo;
        this.hVideo = _hvideo;
    }
    return MVideo;
}());
