// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/index.scss'
import './axios'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/graphic'
import 'echarts/lib/chart/heatmap'
import 'echarts/lib/chart/gauge'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/themeRiver'
import ECharts from 'vue-echarts/components/ECharts' 
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

Vue.use(ElementUI, {
  // size: 'small'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
