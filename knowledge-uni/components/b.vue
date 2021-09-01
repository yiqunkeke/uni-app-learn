<template>
	<view>
		这是b组件，b组件中的age是:{{age}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				age: 0
			}
		},
		created() {
			// 注册全局事件，通过uni.$on()注册一个全局事件updateAge
			// 在其他组件中，可以通过 uni.$emit()触发全局事件，并传递参数
			uni.$on('updateAge', age => {
				this.age += age
			})
		}
	}
</script>

<style>
</style>
