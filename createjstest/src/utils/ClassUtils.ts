module utils {
    export class ClassUtils {
        constructor() {

        }
        public static getClassName(ClassObj): string {
            var _text = ClassObj.toString();
            var _scriptArr = document.scripts;
            for (var i = 0; i < _scriptArr.length; i++) {
                var _start = _scriptArr[i]["text"].indexOf(_text);
                if (_start != -1) {
                    if (/^function\s*\(.*\).*\r\n/.test(_text)) {
                        var _tempArr = _scriptArr[i]["text"].substr(0, _start).split('\r\n');
                        return _tempArr[_tempArr.length - 1].replace(/(var)|(\s*)/g, '').replace(/=/g, '');
                    }
                    else
                        return _text.match(/^function\s*([^\(]+).*\r\n/)[1];
                }
            }
        }

        public static getObjByClass(className): Object {
            var func = eval(className);

           return  new func(arguments[1], arguments[2], arguments[3]);
        }
    }
}