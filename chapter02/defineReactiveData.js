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

module.exports = defineReactiveData

/*
    test-----------
* */
// var obj = {
//     name:'susie',
//     age:18
// }
// for (let key in obj){
//     defineReactiveData(obj,key,obj[key]);
// }
// console.log(obj.age)
// console.log(obj.age)
// obj.age = 19






