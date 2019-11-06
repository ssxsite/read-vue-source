const bailRE = /[^\w.$]/
const parsePah = function parsePah(path) {
    if(bailRE.test(path)){
        return
    }
    const segments = path.split('.')
    return function (obj) {
        for (let i = 0,len = segments.length; i < len; i++) {
            obj = obj[segments[i]]
        }
        return obj
    }
}

module.exports = parsePah
/* test---------*/
// var test_obj = {
//     a:{
//         b:{
//             c:'c1'
//         }
//     }
// }
// var test_path = 'a.b.c'
//
// console.log('c:',parsePah(test_path).call(test_obj,test_obj));




