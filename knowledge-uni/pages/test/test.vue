<template>
	<view>
		这个是test页面
	</view>
</template>

<script>
	export default {
		onLoad(options) { // options为object类型，会序列化上个页面传递的参数
			console.log('test页面接收到的参数', options)
		}
	}
</script>

<style>
</style>
