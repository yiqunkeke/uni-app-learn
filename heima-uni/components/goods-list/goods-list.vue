<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id" @click="handleNavigate(item.id)">
			<image :src="item.src"></image>
			<view class="price">
				<text>￥{{item.newPrice}}</text>
				<text>￥{{item.oldPrice}}</text>
			</view>
			<view class="name">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			'goods': {
				type: Array,
				required: true,
				default: () => {
					return []
				}
			}
		},
		methods: {
			handleNavigate(id) {
				this.$emit('goodsItemClick', id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods_item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			image {
				width:100%;
				height: 120px;
				margin: 5px auto 10px auto;
				display: block;
			}
			.price {
				color: $shop-color;
				font-size: 36rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
