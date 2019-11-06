var defineReactiveData  = require( './defineReactiveData.js')
const Observer = class Observer{
    constructor(value){
        this.value = value

        if(!Array.isArray(this.value)){
            this.walk(this.value)
        }
    }

    walk(obj){
        const keys = Object.keys(obj);
        for (let i = 0,len = keys.length; i < len; i++) {
            defineReactiveData(obj,keys[i],obj[keys[i]])
        }
    }
}

module.exports = Observer