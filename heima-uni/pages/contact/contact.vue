<template>
	<view class="contact">
		<image src="http://yun.itheima.com/Upload/Images/20210816/611a207ed1050.jpg"></image>
		<view class="info">
			<!-- 实现拨打电话：使用uni提供的API- uni.makePhoneCall -->
			<view @click="handleCall">
				联系电话： 400-618-9090（点击拨打）
			</view>
			<view>
			校区地址：上海市松江区莘砖公路518号
			</view>
		</view>
		<!-- 9 实现地图: 直接使用uni提供的地图组件。 -->
		<!-- 通过 longitude, latitude 属性使地图默认定位在某个位置。可以通过百度地图的API-开发文档-坐标拾取器，来查询longitude和 latitude的值：https://lbsyun.baidu.com/ -->
		<!-- 通过 markers 属性可以在地图上增加标记点 -->
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 121.326864, // 中心经度
				latitude: 31.100262, // 中心纬度
				scale: 16, // 缩放级别，取值范围为3-20， 默认为 16
				markers: []
			}
		},
		onLoad() {
			this.markers.push({
						id:0,
						latitude: 121.326864,
						longitude: 31.100262,
						alpha: 0.5, 
						iconPath: '../../static/cooler.png',
						width: 44,
						height: 44
					})
		},
		methods: {
			handleCall(){
				uni.makePhoneCall({
					phoneNumber: '400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact {
	image {
		width: 750rpx;
		height: 320rpx;
	}
	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
