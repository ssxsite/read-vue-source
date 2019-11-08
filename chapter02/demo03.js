/* 用Watcher来抽象实际的依赖 */
import Watcher from './Watcher.js'
import Dep from './Dep.js'

function defineReactive(data,key,val) {
    let dep = new Dep();//依赖数组
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            dep.depend();
            return val
        },
        set:function (newVal) {
            if(val === newVal){
                return
            }
            val = newVal
            dep.notify();
        }
    })
}


/*
    test-----------
* */

var vm = {
    data:{
        name:'ssx',
        age:18
    }
}

for (let key in vm.data){
    defineReactive(vm.data,key,vm.data[key]);
}

/* 假设我们写了一个watch，它是如何执行的？ */
// vm.watch('name',function(newVal,oldVal){
//     console.log("数据变化了---",newVal,oldVal)
// })

var expOrFn = 'data.name'
var cb = function(newVal,oldVal){
    console.log("数据变化了---",newVal,oldVal)
}
var watcher = new Watcher(vm,expOrFn,cb)
vm.data.name = 'lili'








