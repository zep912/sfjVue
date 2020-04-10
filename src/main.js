import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import VueAMap from 'vue-amap';
import stores from './http/stores';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import './assets/iconfont/iconfont.css';
import axios from 'axios';
import $ from 'jquery'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    /* 需要注册百度地图开发者来获取你的ak */
    ak: 'u6vzTey4WMBeVAbC3SokRMGT3br2sejy'
});
import $http from './http/http';
Vue.prototype.$http = $http;

// require styles
import 'swiper/dist/css/swiper.css';
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper /* { default global options } */ );
Vue.prototype.$axios = axios;
Vue.prototype.$stores = stores;
Vue.prototype.token = sessionStorage.getItem("token");
Vue.prototype.uploadUrl = 'http://192.168.0.133:9001/jjkj/sfj/api/support/uploadFile';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: '1701f997718ccd11c23f645c82ff5271',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'MarkerClusterer'],
    v: '1.4.4',
    uiVersion: '1.0.11'
});

import './assets/css/normalize.css';
import './assets/font/font.css';
import './assets/css/common.css';

Vue.config.productionTip = false;
window.sfj = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

// export default that;
