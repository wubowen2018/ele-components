//注册全局组件
import Vue from 'vue'
import BackTop from '../components/backTop/BackTop.vue'
import AccountLogin from '../components/accountLogin/AccountLogin.vue'
import PhoneLogin from '../components/accountLogin/PhoneLogin.vue' 
import Puzzle from '../components/puzzle/Puzzle.vue'
import GoDuch from '../components/goDuch/GoDuch.vue' 

Vue.component('backTop', BackTop)
Vue.component('accountLogin', AccountLogin)
Vue.component('phoneLogin', PhoneLogin)
Vue.component('dPuzzle', Puzzle)
Vue.component('goDuch', GoDuch)