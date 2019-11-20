/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chapter02/Dep.js":
/*!**************************!*\
  !*** ./chapter02/Dep.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Dep = function () {\n    function Dep() {\n        _classCallCheck(this, Dep);\n\n        this.subs = [];\n    }\n\n    _createClass(Dep, [{\n        key: \"addSubs\",\n        value: function addSubs(sub) {\n            this.subs.push(sub);\n        }\n    }, {\n        key: \"removeSubs\",\n        value: function removeSubs(sub) {\n            remove(this.subs, sub);\n        }\n    }, {\n        key: \"notify\",\n        value: function notify() {\n            for (var i = 0, len = this.subs.length; i < len; i++) {\n                this.subs[i].update();\n            }\n        }\n    }, {\n        key: \"depend\",\n        value: function depend() {\n            this.addSubs(window.target);\n        }\n    }]);\n\n    return Dep;\n}();\n\nexports.default = Dep;\n\n\nfunction remove(arr, item) {\n    if (arr.length) {\n        var index = arr.indexOf(item);\n        if (index > -1) {\n            arr.splice(index, 1);\n        }\n    }\n}\n\n//# sourceURL=webpack:///./chapter02/Dep.js?");

/***/ }),

/***/ "./chapter02/Observer.js":
/*!*******************************!*\
  !*** ./chapter02/Observer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _defineReactiveData = __webpack_require__(/*! ./defineReactiveData.js */ \"./chapter02/defineReactiveData.js\");\n\nvar _defineReactiveData2 = _interopRequireDefault(_defineReactiveData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Observer = function () {\n    function Observer(value) {\n        _classCallCheck(this, Observer);\n\n        this.value = value;\n        if (!Array.isArray(this.value)) {\n            this.walk(this.value);\n        }\n    }\n\n    _createClass(Observer, [{\n        key: 'walk',\n        value: function walk(obj) {\n            var keys = Object.keys(obj);\n            for (var i = 0, len = keys.length; i < len; i++) {\n                if (_typeof(obj[keys[i]]) === 'object') {\n                    new Observer(obj[keys[i]]);\n                }\n                (0, _defineReactiveData2.default)(obj, keys[i], obj[keys[i]]);\n            }\n        }\n    }]);\n\n    return Observer;\n}();\n\nexports.default = Observer;\n\n//# sourceURL=webpack:///./chapter02/Observer.js?");

/***/ }),

/***/ "./chapter02/Watcher.js":
/*!******************************!*\
  !*** ./chapter02/Watcher.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _parsePath = __webpack_require__(/*! ./parsePath.js */ \"./chapter02/parsePath.js\");\n\nvar _parsePath2 = _interopRequireDefault(_parsePath);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Watcher = function () {\n    function Watcher(vm, expOrFn, cb) {\n        _classCallCheck(this, Watcher);\n\n        this.vm = vm;\n        if (typeof expOrFn === 'Function') {\n            this.getter = expOrFn;\n        } else {\n            this.getter = (0, _parsePath2.default)(expOrFn);\n        }\n        this.cb = cb;\n        this.value = this.get();\n    }\n\n    _createClass(Watcher, [{\n        key: 'get',\n        value: function get() {\n            window.target = this; //关键一：window.target指向自己\n            var value = this.getter.call(this.vm, this.vm); //关键二：执行getter,就触发了Dep.depend,也就把this加入到Dep中\n            window.target = undefined;\n            return value;\n        }\n    }, {\n        key: 'update',\n        value: function update() {\n            var oldValue = this.value;\n            this.value = this.getter.call(this.vm, this.vm);\n            this.cb.call(this, this.value, oldValue);\n        }\n    }]);\n\n    return Watcher;\n}();\n\nexports.default = Watcher;\n\n//# sourceURL=webpack:///./chapter02/Watcher.js?");

/***/ }),

/***/ "./chapter02/defineReactiveData.js":
/*!*****************************************!*\
  !*** ./chapter02/defineReactiveData.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = defineReactiveData;\n\nvar _Dep = __webpack_require__(/*! ./Dep.js */ \"./chapter02/Dep.js\");\n\nvar _Dep2 = _interopRequireDefault(_Dep);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction defineReactiveData(data, key, val) {\n    var dep = new _Dep2.default(); //依赖数组\n    Object.defineProperty(data, key, {\n        enumerable: true,\n        configurable: true,\n        get: function get() {\n            dep.depend();\n            return val;\n        },\n        set: function set(newVal) {\n            if (val === newVal) {\n                return;\n            }\n            val = newVal;\n            dep.notify();\n        }\n    });\n}\n\n//# sourceURL=webpack:///./chapter02/defineReactiveData.js?");

/***/ }),

/***/ "./chapter02/demo04.js":
/*!*****************************!*\
  !*** ./chapter02/demo04.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Observer = __webpack_require__(/*! ./Observer.js */ \"./chapter02/Observer.js\");\n\nvar _Observer2 = _interopRequireDefault(_Observer);\n\nvar _Watcher = __webpack_require__(/*! ./Watcher.js */ \"./chapter02/Watcher.js\");\n\nvar _Watcher2 = _interopRequireDefault(_Watcher);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\r\n    test-----------\r\n* */\n\nvar vm = {\n    data: {\n        a: {\n            b: {\n                c: 'c1'\n            }\n        },\n        age: 18\n    }\n};\n\nnew _Observer2.default(vm.data);\n\n/* 假设我们写了一个watch，它是如何执行的？ */\n// vm.watch('name',function(newVal,oldVal){\n//     console.log(\"数据变化了---\",newVal,oldVal)\n// })\n\nvar expOrFn = 'data';\nvar cb = function cb(newVal, oldVal) {\n    console.log(\"数据变化了---\", newVal, oldVal);\n};\nvar watcher = new _Watcher2.default(vm, expOrFn, cb);\nvm.data.a.b.c = 'c2';\n\n//# sourceURL=webpack:///./chapter02/demo04.js?");

/***/ }),

/***/ "./chapter02/parsePath.js":
/*!********************************!*\
  !*** ./chapter02/parsePath.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = parsePah;\nvar bailRE = /[^\\w.$]/;\nfunction parsePah(path) {\n    if (bailRE.test(path)) {\n        return;\n    }\n    var segments = path.split('.');\n    return function (obj) {\n        for (var i = 0, len = segments.length; i < len; i++) {\n            obj = obj[segments[i]];\n        }\n        return obj;\n    };\n}\n\n/* test---------*/\n// var test_obj = {\n//     a:{\n//         b:{\n//             c:'c1'\n//         }\n//     }\n// }\n// var test_path = 'a.b.c'\n//\n// console.log('c:',parsePah(test_path).call(test_obj,test_obj));\n\n//# sourceURL=webpack:///./chapter02/parsePath.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./chapter02/demo04.js */ \"./chapter02/demo04.js\");\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });