import Dep from './Dep.js'

export default function defineReactiveData (data, key, val) {
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
           dep.notify();
        }
    })
}







