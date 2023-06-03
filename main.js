import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
import store from '@/store/index.js'
import axios from 'axios'
import lodash from 'lodash'
import {
	install as http
} from '@/uni_modules/gt-axios-request/js_sdk/install.js'
Vue.use(http)
Vue.use(uView);



Vue.prototype.$lodash = lodash

Vue.config.productionTip = false
App.mpType = 'app'

try {
	function isPromise(obj) {
		return (
			!!obj &&
			(typeof obj === "object" || typeof obj === "function") &&
			typeof obj.then === "function"
		);
	}

	// 统一 vue2 API Promise 化返回格式与 vue3 保持一致
	uni.addInterceptor({
		returnValue(res) {
			if (!isPromise(res)) {
				return res;
			}
			return new Promise((resolve, reject) => {
				res.then((res) => {
					if (res[0]) {
						reject(res[0]);
					} else {
						resolve(res[1]);
					}
				});
			});
		},
	});
} catch (error) {}

const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif