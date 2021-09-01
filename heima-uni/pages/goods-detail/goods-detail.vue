<template>
	<view class="goods-detail">
		<!-- 19. 实现商品详情轮播图 -->
		<swiper indicator-dots>
			<swiper-item v-for="item in images" :key="item.id">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		
		<!-- 20. 实现详情其他部分的结构 -->
		<!-- <view class="box1">
			<view class="price">
				<text>￥6788</text>
				<text>￥8788</text>
			</view>
			<view class="goodsName">
				从0到1学前端，打卡学习赢好礼
			</view>
		</view>		
		<view class="box2">
			<view>开课时间：2021年09月02日 10:00开课</view>
			<view>参与方式：报名联系播妞QQ：3077485083</view>
		</view>
		<view class="box3">
			<view class="title">
				课程介绍
			</view>
			<view class="content">
				2021年黑马程序员重磅推出从0到1学前端，由2位擅长各自讲授阶段及知识点的大牛老师联合出品，让你0基础28小时即可掌握网页开发，40小时即可掌握移动端开发，采用大厂编码规范，课程项目遵循企业级开发流程，由浅入深的讲解前端网页开发的每个技术要点，每天都以综合案例的形式，确保同学们能水到渠成的完成企业级实战项目「小兔鲜儿项目」的首页开发，后面提高班的移动web阶段，更让学生学到爽，让每位同学能达成 
				Zero to Hero 的强势蜕变!
			</view>
		</view> -->
		
		<!-- 21. 完成详情页面的数据渲染 -->
		<view class="box1">
			<view class="price">
				<text>￥{{detail.price}}</text>
				<text>￥{{detail.oldPrice}}</text>
			</view>
			<view class="goodsName">
				{{detail.goodsName}}
			</view>
		</view>		
		<view class="box2">
			<view>开课时间：{{detail.time}}开课</view>
			<view>参与方式：报名联系播妞QQ：{{detail.qqNumber}}</view>
		</view>
		<view class="box3">
			<view class="title">
				课程介绍
			</view>
			<view class="content">
				<rich-text :nodes="detail.content"></rich-text>
			</view>
		</view>
		
		<!-- 22. 利用uni-ui实现底部导航区域 -->
		<!-- 在uni官网上“组件”-“扩展组件uni ui”-“GoodsNav商品导航”-“使用HBuilderX导入插件”。导入成功后，在uni_modules目录下多出uni-goods-nav目录 -->
		<view class="fixed">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import { getGoodsDetailImages, getGoodsInfo } from '@/api/index.js'
	import uniGoodsNav from '@/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue' // 引入 uni-ui扩展组件
	export default {
		components: {uniGoodsNav}, // 注册 uni-ui扩展组件
		data() {
			return {
				id: null,
				images: [
					{
						id: 'swiper01',
						src:'http://yun.itheima.com/Upload/Images/2021-08-30/612c70cd03dbc.jpg'
					},
					{
						id: 'swiper02',
						src: 'http://yun.itheima.com/Upload/Images/2021-06-10/60c1c796e2d2d.jpg'
					},
					{
						id: 'swiper03',
						src: 'http://yun.itheima.com/Upload/Images/2021-06-10/60c1c83f1da95.jpg'
					}
				],
				detail: {
					price: 6788,
					oldPrice: 8788,
					goodsName: '从0到1学前端，打卡学习赢好礼',
					time: '2021年09月02日 10:00',
					qqNumber: '3077485083',
					content: `<div><p style="white-space: normal;"><span style="background-color: rgb(255, 255, 255); color: rgb(54, 96, 146); font-family: arial; font-size: 16px; text-align: justify;"></span></p><p style="white-space: normal;"><span style="color: rgb(54, 96, 146); font-size: 16px;">【参与方式</span><span style="color: rgb(54, 96, 146); font-size: 16px;">】</span><br></p><p style="white-space: normal;">参与打卡学习笔记，可以获得书籍鼠标垫等好礼</p><p><strong><span style="font-size: 20px;">报名联系播妞QQ：3077485083</span></strong></p><p style="white-space: normal;"><span style="background-color: rgb(255, 255, 255); color: rgb(54, 96, 146); font-family: arial; font-size: 16px; text-align: justify;">【课程简介】</span><br></p><p>2021年黑马程序员重磅推出从0到1学前端，由2位擅长各自讲授阶段及知识点的大牛老师联合出品，让你0基础28小时即可掌握网页开发，40小时即可掌握移动端开发，采用大厂编码规范，课程项目遵循企业级开发流程，由浅入深的讲解前端网页开发的每个技术要点，每天都以综合案例的形式，确保同学们能水到渠成的完成企业级实战项目「小兔鲜儿项目」的首页开发，后面提高班的移动web阶段，更让学生学到爽，让每位同学能达成 
Zero to Hero 的强势蜕变!</p><p style="white-space: normal;"><span style="color: rgb(54, 96, 146); font-family: arial; font-size: 16px; text-align: justify; background-color: rgb(255, 255, 255);">【主讲内容】</span></p><p>1.零基础28小时即可掌握网页开发</p><p>2.40小时快速掌握移动端开发</p><p>3.由浅入深的讲解前端网页开发每个技术要点</p><p>4.采用大厂编码规范，企业级实战开发小兔儿鲜首页</p></div>`
				},
				options: [
					{
						icon: 'headphones',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 2
					}],
					buttonGroup: [{
					  text: '加入购物车',
					  backgroundColor: '#ff0000',
					  color: '#fff'
					},
					{
					  text: '立即购买',
					  backgroundColor: '#ffa200',
					  color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getImages()
			this.getGoodsDetail()
		},
		methods: {
			async getImages() {
				const res = await getGoodsDetailImages(this.id)
				this.images = res.data.message
			},
			async getGoodsDetail() {
				const res = await getGoodsInfo(this.id)
				this.detail = res.data.message
			},
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			},
			buttonClick (e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
.goods-detail {
	swiper {
		image {
			width: 100%;
			height: 350rpx;
		}
	}
	.box1 {
		padding: 10px;
		border-bottom: 10rpx solid #eee;
		.price {
			font-size: 35rpx;
			color: $shop-color;
			line-height: 80rpx;
			text:nth-child(2) {
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}
		.goodsName {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	.box2 {
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
		border-bottom: 10rpx solid #eee;
	}
	.box3 {
		padding-bottom: 50px;
		.title {
			font-size: 32rpx;
			padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}
		.content {
			padding: 10px;
			font-size: 28rpx;
			color: #333;
			line-height: 55rpx;
		}
	}
	.fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
}
</style>
