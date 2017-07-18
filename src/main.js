import Vue from 'vue'
import App from './App.vue'

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
