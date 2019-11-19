import Observer from './Observer.js'
import Watcher from './Watcher.js'

/*
    test-----------
* */

var vm = {
    data:{
        a:{
         b:{
             c:'c1'
         }
        },
        age:18
    }
}

new Observer(vm.data)

/* 假设我们写了一个watch，它是如何执行的？ */
// vm.watch('name',function(newVal,oldVal){
//     console.log("数据变化了---",newVal,oldVal)
// })

var expOrFn = 'data'
var cb = function(newVal,oldVal){
    console.log("数据变化了---",newVal,oldVal)
}
var watcher = new Watcher(vm,expOrFn,cb)
vm.data.a.b.c = 'c2'






