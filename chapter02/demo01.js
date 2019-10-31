/*
* 用Object.defineProperty实现一个数据监听的方法
* */

function defineReactiveData(data,key,val) {
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            console.log('get---------')
            return val
        },
        set:function (newVal) {
            if(val === newVal){
                return
            }
            val = newVal
            console.log('set---------')
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

//test-----
obj.name = 'susie'
console.log(obj.name)
obj.name = 'lili'

/*
在get里面收集依赖， 在set里面触发依赖。看demo02
* */
