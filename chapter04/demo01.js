import Vue from 'vue'
import App from './app.vue'

// 在body下创建一个根节点

new Vue({
    el: '#root',
    render: function (createElement) {
        return createElement(App)
    }
})