import Observer from './Observer.js'
import Watcher from './Watcher.js'
import $set from './$set.js'

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

new Observer(vm.data);//响应式数据初始化已经完成
//新增一个属性

vm.data.a.b.d = 'd1'


var expOrFn = 'data.a.b.d'
var cb = function(newVal,oldVal){
    console.log("数据变化了---",newVal,oldVal)
}
var watcher = new Watcher(vm,expOrFn,cb)
vm.data.a.b.d = 'd'

//测试结果:d属性并不能监听到


vm.$set = $set;
vm.$set(vm.data.a.b,'d','d1');
var expOrFn = 'data.a.b.d'
var cb = function(newVal,oldVal){
    console.log("数据变化了---",newVal,oldVal)
}
var watcher = new Watcher(vm,expOrFn,cb)
vm.data.a.b.d = 'd2'

//测试结果:d属性并可以监听到

var expOrFn2 = function () {
    console.log(data.a.b)
    console.log(data.age)
}

var cb2 = function(newVal,oldVal){
    console.log("数据变化了---",newVal,oldVal)
}

var watcher = new Watcher(vm,expOrFn2,cb2)

setTimeout(()=>{
    vm.data.a.b = 'b2'
},2000)





