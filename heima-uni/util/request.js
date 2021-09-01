// 步骤1：
const BASE_URL = 'http://localhost:8082' // 后端ip
// 导出一个函数
export const myRequest = (options) => {
	// 可以直接在里面写uni.request()
	// uni.request({
	// 	url: ''
	// })
	
	// 但是异步处理的封装，使用promise封装会更好。所以在函数中返回一个promise对象
	return new Promise((resolve, reject) => {
		uni.request({
			// 在这里把url拆成两部分：域名 + 路由，把域名定义成常量，方便后期更换
			// 路由，通过在调用时，传递进来的对象中获取。
			url: BASE_URL + options.url,
			method: options.method || 'GET', // method 也从调用时传递进来的参数中获取，当不传时默认为GET
			data: options.data || {}, // data 同上
			// HTTP请求成功
			success: (res) => {
				// 接口失败
				if(res.data.status !== 0) {
					return uni.showToast({
						title: '接口失败',
						icon: 'error'
					})
				}
				// 接口成功
				resolve(res)
			},
			// HTTP请求失败
			fail: (err) => {
				uni.showToast({
					title: '请求失败',
					icon: 'error'
				})
				reject(err)
			}
		})
	})
}

// 使用方式：可以通过调用myRequest()并且传递一个对象参数
// myRequest({
// 	url: '/api/getlunbo',
// 	mothod: 'POST',
// 	data: {}
// })


// 步骤2：
// 定义好myRequest函数之后，以后基本上每个页面都会用到这个myRequest去发请求。
// 所以我们需要在main.js中去导入并挂在到全局：

// import { myRequest } from './util/api.js'
// Vue.prototype.$myRequest = myRequest

// 步骤3：在.vue文件中，就可以通过 this.$myRequest() 来调用
