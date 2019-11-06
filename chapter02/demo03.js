/* 使用专门的Dep来管理依赖 */
global.target = {
    update:function () {
        console.log('set---')
    }
}
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

console.log(vm.data.name)
console.log(vm.data.name)
vm.data.name = 'lili'




