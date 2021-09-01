<template>
	<view>
		这是a组件，<button size="mini" type="primary" @click="handleAddAge">点击按钮，修改b组件中age的值</button>
	</view>
</template>

<script>
	export default {
		methods: {
			// 修改b组件中的age
			handleAddAge() {
				// 通过uni.$emit() 触发全局事件updateAge。此全局事件是在b组件中通过uni.$on注册的。
				uni.$emit('updateAge', 10)
			}
		}
	}
</script>

<style>
</style>
