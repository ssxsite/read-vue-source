var vm = {
    data:{
        a:{
            b:{
                c:'c1'
            }
        }
    },
    // watch:{
    //     'a.b.c':{
    //         handler(newVal,oldVal){
    //             console.log('数据变化------',newVal,oldVal)
    //         }
    //     }
    // }
}

var data = {
    a:{
        b:{
            c:'c1'
        }
    }
}

var Observer  = require( './Observer.js')
var Watcher  = require( './Watcher.js')
var Dep  = require( './Dep.js')

function defineReactive(data,key,val) {
    if(typeof val === 'object'){
        new Observer(val)
    }

    let dep = new Dep();

    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get() {
            dep.depend()
            return val
        },
        set(newVal) {
            if(newVal === val){
                return
            }
            val = newVal
            dep.notify()
        }
    })
}

for (let key in data){
    defineReactive(data,key,data[key]);
}

var watcher01 = new Watcher(data,'a.b.c', function(newVal,oldVal){
    console.log('数据变化------',newVal,oldVal)
})


data.a.b.c = 'c2'
