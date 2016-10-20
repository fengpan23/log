/**
 * Created by fp on 2016/10/13.
 */
"use strict";

function Log(options) {
    options = options || {};
    switch (options.env){
        case 'debug':
            //    文件 和 即时日志
            break;
        case 'develop':
            //    即时日志
            break;
        case 'product':
            //    文件 日志
            break;
        default:
    }
}
Log.prototype.info = function () {
    console.info.apply(console, arguments);
};

Log.prototype.error = function () {
    console.error.apply(console, arguments);
};

let timeRecord = new Map();
Log.prototype.timeStart = function (name) {
    timeRecord.set(name, +new Date());
};
Log.prototype.timeEnd = function (name) {
    if(timeRecord.has(name)){
        this.info('use time: ' + String(+new Date() - timeRecord.get(name)));
    }else{
        this.info('can not find start time name :' + name);
    }
};
let singleton, log;

/**
 * log module
 * @param options   {object} {singleton: Boolean, env: String ['debug' | 'develop' | 'product]}
 * @returns {Log}
 */
module.exports = function(options){
    if(singleton || options.singleton){
        singleton = singleton || options.singleton;
        return log && log.constructor  === Log ? log : new Log(options);
    }else{
        return new Log(options);
    }
};

//test
if(require.main !== module) return;
let l = new Log({});
l.timeStart('start');
setTimeout(() => {
    l.timeEnd('start')
}, 2000);
