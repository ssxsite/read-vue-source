/* 每个key都对应多个依赖，可以放在一个数组单独管理 */
global.target = function (val) {
    console.log('set---')
   return val
}
function defineReactiveData(data,key,val) {
    let dep = [];//依赖数组
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            dep.push(global.target)
            return val
        },
        set:function (newVal) {
            if(val === newVal){
                return
            }
            val = newVal
            for (let i = 0; i < dep.length; i++) {
                dep[i](val)
            }
        }
    })
}

var obj = {
    name:'susie',
    age:18
}
for (let key in obj){
    defineReactiveData(obj,key,obj[key]);
}

/*
    test-----------
* */

console.log(obj.name)
console.log(obj.name)
obj.name = 'lili'




