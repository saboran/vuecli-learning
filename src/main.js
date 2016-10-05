// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import VueResource from 'vue-resource/dist/vue-resource'

import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  render: h => h(App)
})

