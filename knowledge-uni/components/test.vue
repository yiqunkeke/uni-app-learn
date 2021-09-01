<template>
	<view id="myView">
		<view>
			这是test组件 ，子组件的num是：{{num}} ，接收到父组件的msg是:{{msg}}
		</view>
		<button @click="handleSend" size="mini">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		props: ['msg'],
		data() {
			return {
				num: 3,
				intervalId: null, // 定时器id
			}
		},
		// 组件的生命周期
		
		// 实例创建完成之前
		beforeCreate() {
			console.log('beforeCreate', this.num) // undefined
		},
		created() {
			console.log('created', this.num) 
			// 销毁组件时，需要清除定时器
			// this.intervalId = setInterval(() => {
			// 		console.log('执行定时器')
			// }, 1000)
		},
		// 组件挂载完成之前
		beforeMount() {
			console.log('beforeMount', document.getElementById("myView")) // null
		},
		mounted() {
			console.log('mounted', document.getElementById("myView"))
		},
		destroyed() {
			console.log('组件销毁了')
			// clearInterval(this.intervalId) // 清除定时器
		},
		methods: {
			// 向父组件传递num数据
			handleSend() {
				this.$emit('myEvent', this.num)
			}
		}
	}
</script>

<style>
</style>
