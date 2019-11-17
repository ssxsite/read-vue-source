/* 用ES6的class来实现Vue */
import {init} from './initFuns'
class Vue{
    constructor(options){
        this._init(options)
    }
    // _init = init 这样写语法错误
    _init(options){ //只能这样写，那这里就会有很多原型方法，代码不优雅，不利于维护
        console.log(options)
    }
    $set(){

    }
    $nextTick(){

    }
}


var vue = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
})