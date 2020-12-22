import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
/**自动引入全局组件 */
import './globalComponents'
/** 让网页根据设备dpr和宽度，利用viewport和html根元素的font-size配合rem来适配不同尺寸的移动端设备 */
//import 'lib-flexible/flexible.js'

import axios from 'axios'
Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'

Vue.use(ElementUi)
Vue.config.productionTip = false

//全局指令 局部指令在vue实例中用 directives 声明
Vue.directive('loading', {
  //这个方法会被调用两次 
  //vue 定义指令的方法 除了update还有别的  见官方文档
  update(el, binding, vnode) {
    console.log(el, binding, vnode);
    //binding.value 指的是 绑定的值 这里是isLoading的值
    if (binding.value) {
      const div = document.createElement('div')
      div.innerHTML = "加载中..."
      div.setAttribute('id', 'loading')
      div.style.position = 'fixed'
      div.style.top = 0
      div.style.left = 0
      div.style.width = '100%'
      div.style.height = '100%'
      div.style.display = 'flex'  //弹性盒子
      div.style.justifyContent = 'center' //使内容横向居中
      div.style.alignItems = 'center' //是内容纵向居中
      div.style.color = 'white'
      div.style.background = 'rgba(0,0,0,.7)'
      document.body.appendChild(div)
    } else {
      document.body.removeChild(document.getElementById('loading'))
    }
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
