/**
 *
 * @author 
 *
 */
class TestPanel extends createjs.MovieClip {
	public constructor() {
        super();
        this.createChildren();
	}
	
	protected createChildren():void
	{
        var text = new createjs.Text("hello testpanel", "normal 32px microsoft yahei", "#222222");
        text.x = 0;
        //text.textBaseline = "alphabetic";������һ��,����ʾ
        this.addChild(text);

	}
}
