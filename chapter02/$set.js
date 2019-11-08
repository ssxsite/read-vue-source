import defineReactiveData from './defineReactiveData.js'
export default function $set(target,key,val) {
    target[key] = val;
    defineReactiveData(target,key,val);
}