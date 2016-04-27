interface SquareConfig {
    color?: string;//
    width?: number;
    traceHello(info: string);
    time: number;
}

//var myaquare1: SquareConfig = { color: "123", time: 0 };//在没有traceHello方法时,可以这样创建
var myaquare1 = <SquareConfig>{};
myaquare1.color = "d";
myaquare1.traceHello = function (info: string) { };

module test {
   export class Mysquare implements SquareConfig {
        time = 0;
        public traceHello(info: string) {
            alert(info);
        }
    }
    //export = Mysquare;
}

class Mysquare2 extends test.Mysquare {

    public traceHello(info: string) {
        super.traceHello(info);
        alert(info);
    }

    private  nihao() {
        super.traceHello("nihao");
    }
}

interface searchFunt {
    //声明一个两个变量..
    (source: string, subString: string): boolean;
   // (a: string,b:string ): boolean;
}

interface StringArray {
    [index: number]: string;
    //length: number;
}
var myArray: StringArray;
myArray = ["Bob", "Fred"];

interface IClock1 {
    //time:number ;
    new (hour: number, minute: number);
    //trace();
}
class Clock1{
    currentTime: Date;
    time: number = 0;
constructor(h: number, m: number) { };

    trace():any {
    }
}
var cs: IClock1 = Clock1;
var newClock = new cs(7, 30);
console.log(newClock);

//Extending Interfaces
interface IShape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
//--接口继承接口,用，分割开多继承.
interface ISquare extends IShape, PenStroke {
    sideLength: number;
}
//---赋值..
var square = <ISquare>{};
square.color = "red";
square.sideLength = 100;
square.penWidth = 50;
var square2: ISquare = { sideLength: 0, color: "", penWidth: 0 };

interface Counter {
    //new (start: number);//声明一个开始变量
    interval: number;//声明一个间隔变量
    reset(): void;//声明一个重置function 方法
}

class hello implements Counter {
    public interval: number = 0;
    constructor(start: number) {
    }
    niaho = (start: number): string=>{
        return "";
    };
    public reset()
    {
    }
    export = hello;

}


//var counter1: Counter = hello;