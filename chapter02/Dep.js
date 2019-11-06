module.exports = class Dep {
    constructor(){
        this.subs = []
    }
    addSubs(sub){
        this.subs.push(sub)
    }
    removeSubs(sub){
        remove(this.subs,sub)
    }

    notify(){
        for (let i = 0,len = this.subs.length; i < len; i++) {
            this.subs[i].update()
        }
    }

    depend(){
        this.addSubs(global.target)
    }
}


function remove(arr,item) {
    if(arr.length){
        let index = arr.indexOf(item);
        if(index > -1){
            arr.splice(index,1)
        }
    }
}