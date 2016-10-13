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
        console.log.apply(console, arguments);
    }
    return global.log = log;
}
module.exports = Log;