<template>
	
	<view class="pics">
		<!-- 10. 实现社区图片左侧的结构和样式-->
		<!-- 左侧列表可以竖直滚动，直接使用uni提供的 scroll-view组件 -->
		<!-- scroll-view：可滚动视图区域。用于区域滚动 -->
		<!-- <scroll-view class="left" scroll-y>
			<view class="active">家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
			<view>家居生活</view>
		</scroll-view> -->
		
		<!-- 11. 实现左侧数据渲染和点击高亮 -->
		<scroll-view class="left" scroll-y>
			<view 
			:class="cur === index ? 'active':''" 
			v-for="(item, index) in cates" :key="item.id" 
			@click="handleLeftClick(index, item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		
		<!-- 12. 实现右侧数据的渲染 -->
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in pics" :key="item.src">
				<!-- 13. 完成图片的预览功能 -->
				<image :src="item.src" @click="handlePreviewImage(item.src)"></image>
				<text>{{item.text}}</text>
			</view>
			<text v-if="pics.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	import { getPicsCate, getPics } from '@/api/index.js'
	export default {
		data() {
			return {
				cates: [
					{
						id: 14,
						title: '家居生活'
					},
					{
						id: 15,
						title: '摄影设计'
					},
					{
						id: 16,
						title: '明星美女'
					},
					{
						id: 17,
						title: '空间设计'
					},
					{
						id: 18,
						title: '户型装饰'
					},
					{
						id: 19,
						title: '广告摄影'
					},
					{
						id: 20,
						title: '摄影学习'
					},
					{
						id: 21,
						title: '摄影器材'
					},
					{
						id: 22,
						title: '明星写真'
					},
					{
						id: 23,
						title: '清纯甜美'
					},
					{
						id: 24,
						title: '古典美女'
					}
				],
				cur: 0,
				pics: [
					{
						src: 'http://yun.itheima.com/Upload/Images/20210716/60f0f1f22f2a3.jpg',
						text: '鸿蒙开发系统教程，HarmonyOS 2.0鸿蒙应用开发实战教程'
					},
					{
						src: 'http://yun.itheima.com/Upload/Images/20210416/6079621233532.jpg',
						text: 'Java零基础入门到精通'
					},
					{
						src: 'http://yun.itheima.com/Upload/Images/20210423/6082b3d8a3f0e.jpg',
						text: '详解百度地图原理与应用_Java进阶教程'
					},
					{
						src: 'http://yun.itheima.com/Upload/Images/20210416/607963f9d9559.jpg',
						text: 'Java数据结构与算法'
					},
					{
						src: 'http://yun.itheima.com/Upload/Images/20210106/5ff5333eb8b0c.jpg',
						text: 'Java从零基础到独立编写游戏项目'
					},
					{
						src: 'http://yun.itheima.com/Upload/Images/20210416/607961af690ec.jpg',
						text: '9天快速掌握java基础，更适合小白学习的Java基础'
					},
					{
						src: 'http://yun.itheima.com/Upload/Images/20200304/5e5f06ad9c45c.jpg',
						text: '2020年抗疫之作java基础进阶13天'
					},
					{
						src: 'http://yun.itheima.com/Upload/Images/20200116/5e1fd16ee8aa3.jpg',
						text: '系统学习让你轻松定义java类加载器'
					}
				]
			}
		},
		onLoad() {
			this.getCate()
		},
		methods: {
			// 获取左侧图片分类
			async getCate() {
				const res = await getPicsCate()
				this.cates = res.data.message
				
				// 默认一进来，加载对应第1个的右侧数据
				this.handleLeftClick(0, this.cates[0].id) 
			},
			async handleLeftClick(index, cateid) {
				this.cur = index
				
				// 获取右侧的数据
				const res = await getPics(cateid)
				this.pics = res.data.message
			},
			handlePreviewImage(current) {
				const urls = this.pics.map(item => {
					return item.src
				})
				// 直接使用uni提供的API- uni.previewImage
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
// 垂直方向，撑满屏幕：1. page {height:100%} 2.最外层的 .pics{height:100%}
page {
	height: 100%;
}
.pics {
	height: 100%;
	display: flex;
	.left {
		height: 100%; // 3. 左侧必须要设置高度，否则滚动条会一直显示在屏幕最右侧。
		width: 200rpx;
		border-right: 1px solid #eee;
		view {
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active {
			background: $shop-color;
			color: #ffffff;
		}
	}
	.right {
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
		.item {
			image {
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
			}
			text {
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
