/*
* 用Object.defineProperty实现一个数据监听的方法
* */

function defineReactiveData(data,key,val) {
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function () {
            console.log('get-')
            return val
        },
        set:function (newVal) {
            if(val === newVal){
                return
            }
            val = newVal
            console.log('set-')
        }
    })
}


//test-----
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
vm.data.name = 'lili'


/*
存在的问题：
1.Object的属性增加或者删除的时候，都不能监听到变化,需要使用vm.$set。
* */

vm.data.like = 'banana';
console.log('vm.data.like',vm.data.like);
vm.data.like = 'apple';

/*
在get里面收集依赖， 在set里面触发依赖。看demo02
* */
