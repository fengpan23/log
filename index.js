/**
 * Created by fp on 2016/10/13.
 */
"use strict";

function Log(opt) {
    let options = opt;
    if(options.debug){
        //    文件 和 即时日志
    }else if(options.develop){
    //    即时日志
    }else if(options.product){
    //    文件 日志
    }

    function L() {

    }
    L.prototype.info = function () {
        console.info.apply(console, arguments);
    };

    L.prototype.error = function () {
        console.error.apply(console, arguments);
    };

    let timeRecord = new Map();
    L.prototype.timeStart = function (name) {
        timeRecord.set(name, +new Date());
    };
    L.prototype.timeEnd = function (name) {
        if(timeRecord.has(name)){
            this.info('use time: ' + String(+new Date() - timeRecord.get(name)));
        }else{
            this.info('can not find start time name :' + name);
        }
    };
    return global.log = new L();
}
module.exports = Log;

//test
if(require.main !== module) return;
new Log({});
log.timeStart('start');
setTimeout(() => {
    log.timeEnd('start')
}, 2000);
