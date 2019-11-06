var parsePah  = require( './parsePath.js')
const Watcher = class Watcher {
    constructor(vm,expOrFn,cb){
        this.vm = vm;
        this.getter = parsePah(expOrFn);
        this.cb = cb;
        this.value = this.get()
    }

    get(){
        global.target = this;//关键一：target指向自己
        let value = this.getter.call(this.vm,this.vm);//关键二：执行getter,就触发了Dep.depend,也就把this加入到Dep中
        global.target = undefined;
        return value;
    }

    update(){
        const oldValue = this.value;
        this.value = this.get();
        this.cb.call(this,this.value,oldValue);
    }
}

module.exports = Watcher

/* test ---------j*/
/* 假设我们写了下面这一个watch，它实际是如何运行的？*/

/* vm，这里简单模拟一个vm实例，实际上，vm就是一个obj而已。*/
const vm = {
    data:{
        a:'a1',
        b:'b1',
    }
}

// vm.watch('a',function(newVal,oldVal){
//     console.log(newVal,oldVal)
// })




var Dep  = require( './Dep.js')

function defineReactiveData(data,key,val) {
    let dep = new Dep();//依赖数组
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            dep.depend()
            return val
        },
        set:function (newVal) {
            if(val === newVal){
                return
            }
            val = newVal
            dep.notify()
        }
    })
}

for (let key in vm.data){
    defineReactiveData(vm.data,key,vm.data[key]);
}


var expOrFn = 'a'
var cb = function(newVal,oldVal){
    console.log(newVal,oldVal)
}

var watcher = new Watcher(vm,expOrFn,cb)

vm.data.a = 'a2'










