<template>
	<view>
		<view class="news_item" v-for="item in list" :key="item.id" @click="handleNavigate(item.id)">
			<image :src="item.imageSrc"></image>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.publishTime}}</text>
					<text>浏览：{{item.visitorsNumber}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		methods: {
			handleNavigate(id) {
				// 此组件为封装组件，最好不用在封装组件内写具体跳转
				// 应该交由父组件去做跳转。----方便在其他.vue组件中复用。
				// 所以此处调用 this.$emit()向父组件中触发自定义事件
				this.$emit('itemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image {
			width: 120rpx;
			min-width: 120px;
			height: 120rpx;
		}
		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title {
				font-size: 30rpx;
			}
			.info {
				font-size: 24rpx;
				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
