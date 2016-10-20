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

    function log() {

    }
    log.constructor = console.constructor;

    let timeRecord = new Map();
    log.constructor.timeStart = function (name) {
        timeRecord.set(name, +new Date());
    };
    log.constructor.timeEnd = function (name) {
        if(timeRecord.has(name)){
            log('use time: ' + +new Date() - timeRecord.get(name));
        }else{
            log('can not find start time name :' + name);
        }
    };

    return global.log = new log();
}
module.exports = Log;