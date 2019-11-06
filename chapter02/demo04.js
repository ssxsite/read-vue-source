/* 用Watcher来抽象实际的依赖 */
const Watcher =  require( './Watcher.js')
// global.target = {
//     update:function () {
//         console.log('set---')
//     }
// }
const Dep  = require( './Dep.js')
function defineReactiveData(data,key,val) {
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
        name:'susie',
        age:18
    }
}

for (let key in vm.data){
    defineReactiveData(vm.data,key,vm.data[key]);
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






