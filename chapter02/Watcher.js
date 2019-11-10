import parsePah from './parsePath.js'
export default class Watcher {
    constructor(vm,expOrFn,cb){
        this.vm = vm;
        if(typeof expOrFn === 'Function'){
            this.getter = expOrFn
        }else {
            this.getter = parsePah(expOrFn);
        }
        this.cb = cb;
        this.value = this.get()
    }

    get(){
        window.target = this;//关键一：window.target指向自己
        let value = this.getter.call(this.vm,this.vm);//关键二：执行getter,就触发了Dep.depend,也就把this加入到Dep中
        window.target = undefined;
        return value;
    }

    update(){
        const oldValue = this.value;
        this.value = this.getter.call(this.vm,this.vm);
        this.cb.call(this,this.value,oldValue);
    }
}



















