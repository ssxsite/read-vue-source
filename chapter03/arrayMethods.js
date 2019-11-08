const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

['push','pop','shift','unshift','splice','sort','reverse'].forEach(method =>{
    const originMethod = arrayProto[method];
    Object.defineProperty(arrayMethods,method,{
        value:function mutator(...args) {
            //然后我们就可以在这里动手脚了，就是实现数组变化监听
            console.log(`${method}变化监听`);
            return originMethod.apply(this,args);
        },
        enumerable:false,
        configurable:true,
        writable:true
    })
})

module.exports = arrayMethods