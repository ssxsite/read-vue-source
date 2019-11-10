import Watcher from "../vue/src/core/observer/watcher";
import {handleError, isPlainObject} from "../vue/src/core/util";

Vue.prototype.$watch = function (
    expOrFn: string | Function,
    cb: any,
    options?: Object
): Function {
    const vm: Component = this
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)//原理
    if (options.immediate) {
        cb.call(vm, watcher.value)
    }
    return function unwatchFn () {
        watcher.teardown()
    }
}