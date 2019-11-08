import defineReactiveData from './defineReactiveData.js'
export default class Observer{
    constructor(value){
        this.value = value
        if(!Array.isArray(this.value)){
            this.walk(this.value)
        }
    }

    walk(obj){
        const keys = Object.keys(obj);
        for (let i = 0,len = keys.length; i < len; i++) {
            if(typeof obj[keys[i]] === 'object'){
                new Observer(obj[keys[i]])
            }
            defineReactiveData(obj,keys[i],obj[keys[i]])
        }
    }
}
