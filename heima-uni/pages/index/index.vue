<template>
	<view class="home">
		<!-- 2. 完成首页轮播图的渲染 -->
		<!-- 利用uni提供的swiper组件，实现轮播图 -->
		<!-- swiper 滑块视图容器，一般用于左右滑动或上下滑动，比如banner轮播图。 -->
		<!-- 注意：滑动切换和滚动的区别，滑动切换是一屏一屏的切换。swiper下的每个swiper-item是一个滑动切换区域，不能停留在2个滑动区域之间。 -->
		<swiper :indicator-dots="true" :circular="true">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		
		<!-- 3. 实现导航的基本结构 -->
		<view class="nav">
			<!-- 5. 改造导航区域并跳转到商品列表页 pages/goods/goods.vue -->
			<!-- 9. 完成“联系我们”页面的地图和拨打电话 pages/contact/contact.vue -->
			<!-- 10. 实现“社区图片”左侧的结构和样式 pages/pics/pics.vue -->
			<view class="nav_item" v-for="item in navs" :key="item.id" @click="handleNavItem(item.path)">
				<view>
					<image :src="item.src"></image>
				</view>
				<text>{{item.text}}</text>
			</view>
		</view>
		
		<!-- 4. 完成推荐商品的基本结构 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
			<!-- 6. 封装商品列表组件并使用 -->
			<!-- 新建components目录，在components中，新建goods-list目录，在goods-list中，新建goods-list.vue -->
			<!-- 把下面代码剪切到goods-list.vue中,并把样式也剪切进去-->
			<!-- <view class="goods_list">
				<view class="goods_item" v-for="item in goods" :key="item.id">
					<image :src="item.src"></image>
					<view class="price">
						<text>￥{{item.newPrice}}</text>
						<text>￥{{item.oldPrice}}</text>
					</view>
					<view class="name">
						{{item.name}}
					</view>
				</view>
			</view> -->
			<goods-list :goods="goods" @goodsItemClick="handleGoodsDetail"></goods-list>
			<!-- 为什么要封装此组件？因为推荐商品不仅在首页有，而且黑马超市列表页也有，且样式完全一样。
			 所以封装之后，只需要引入组件，修改了组件中的代码，两个地方都会跟着变化。方便后期维护。
			 -->
		</view>
		
		<!-- 14. 实现资讯列表的结构和数据的获取 pages/news/news.vue -->
		<!-- 18. 点击商品列表导航至商品详情 pages/goods-detail/goods-detail  和 components/goods-list -->
		<!-- 19. 实现商品详情轮播图 pages/goods-detail/goods-detail-->
		
		<!-- 23. 完成小程序打包和发布：
			只需要在微信开发者工具中点击 “上传”按钮即可。
			发现“上传”按钮无法上传？是因为没有设置appid。去manifest.json中找到“微信小程序配置”-填写“微信小程序AppID”
			打开微信公众平台（https://mp.weixin.qq.com/）-如果没有微信小程序-则在首页（https://mp.weixin.qq.com/）点击“立即注册”去注册一个小程序。
			选择“小程序”进入小程序注册页面（https://mp.weixin.qq.com/wxopen/waregister?action=step1&token=&lang=zh_CN）并填写注册表单。完成注册。
			
			注册完成后，登录小程序。找到“开发”-“开发管理”-“开发设置”，就可以看到AppID。
			
			上传完成后，在微信公众平台“管理”-“版本管理”-“开发版本”就可以看到上传上去的个人仓库中的版本
				如果要提交审核，则点击“提交审核”按钮-“下一步”-“继续提交”-填写表单-“确定”
				
			审核通过后，如果要发布上线，则点击“发布”	
			
			注意点：
				1. 我们开发时，用的base_url是 “const BASE_URL = 'http://localhost:8082'”
				但小程序上线时，需要替换成“线上接口地址”。并且要把“线上接口地址”在微信公众平台中进行配置（“开发”-“开发管理”-“开发设置”-“服务器域名”）。
				
				2. 本地的字体图标在上传时，不会被打包。建议换成线上的字体图标	。可以把字体图标放在“码云gitee”，但通常放在线上服务器上。
				
				3. 发起的请求必须使用https协议。
				
				4. 服务器域名配置
				每个微信小程序需要事先设置一个通讯域名。小程序只可以跟指定的域名进行网络通信。
				包括普通HTTPS请求、上传文件、下载文件和webSocket通信。
				
				https应该要由后端开发人员或者运维人员去配置的。
				
				配置流程：
				服务器域名请在[小程序后台-开发-开发设置-服务器域名]中进行配置。
			
			
		 -->
		 
		 <!-- 24. 完成h5打包-->
		 <!-- 25. 完成android打包 -->
	</view>
</template>

<script>
	// @ 表示项目根目录
	import { getSwiperImgs } from '@/api/index.js'
	import goodsList from  '@/components/goods-list/goods-list.vue' // 引入组件
	export default {
		components: {
			'goods-list': goodsList // 注册组件
		},
		data() {
			return {
				swipers: [
					{
						id: 'swiper01',
						src:'http://yun.itheima.com/Upload/Images/2021-06-10/60c1c73d2e0c9.jpg'
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
				navs: [
					{
						id: 'nav01',
						src: '/static/icon/nav1.png',
						text: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						id: 'nav02',
						src: '/static/icon/nav2.png',
						text: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						id: 'nav03',
						src: '/static/icon/nav3.png',
						text: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						id: 'nav04',
						src: '/static/icon/nav4.png',
						text: '学习视频',
						path: '/pages/videos/videos'
					}
				],
				goods: [
					{
						id: 'good01',
						src: 'http://yun.itheima.com/Upload/Images/20210819/611e0198be903.jpg',
						newPrice: '2195',
						oldPrice: '2499',
						name: 'UI图标网格系统全方位解密'
					},
					{
						id: 'good02',
						src: 'http://yun.itheima.com/Upload/Images/20210817/611b76f6cb6fe.jpg',
						newPrice: '2195',
						oldPrice: '2499',
						name: 'AI赋能企业：揭秘黑马AI平台'
					},
					{
						id: 'good03',
						src: 'http://yun.itheima.com/Upload/Images/20210816/611a207ed1050.jpg',
						newPrice: '2195',
						oldPrice: '2499',
						name: 'Vue 3.0深入响应式原理'
					},
					{
						id: 'good04',
						src: 'http://yun.itheima.com/Upload/Images/20210812/6114e9e6cddce.jpg',
						newPrice: '2195',
						oldPrice: '2499',
						name: '体育赛事数据分析'
					}
				]
			}
		},
		// onShow会触发多次，onReady页面初次渲染完成，
		onLoad() {
			this.getSwipers()
		},
		methods: {
			// 1. 获取轮播图的数据
			// 方式1： 使用uni提供的API uni.request发请求
			// getSwipers() {
			// 	uni.request({
			// 		method:'GET', // 默认为GET，可省略
			// 		url:'http://localhost:8082/api/lunbo',
			// 		success: res => {
			// 			// 如果 status === 0 代表接口请求成功，否则失败 
			// 			if(res.data.status !== 0) {
			// 				// 使用uni提供的API uni.showToast提示
			// 				return uni.showToast({
			// 					title: '请求失败'
			// 				})
			// 			}
			// 			this.swipers = res.data.message
			// 		}
			// 	})
			// },
			
			// 方式2：使用async await 修饰 uni.request
			// async getSwipers() {
			// 	const res = await uni.request({
			// 		url: 'http://localhost:8082/api/lunbo'
			// 	})
			// 	console.log(res)
			// },
			
			// 方式3： 把 uni.request 进行封装。为什么要封装？
			// 原因1：在自己封装的方法中，可以对所有的请求进行统一的拦截。发送请求时，直接调用自己封装好的方法。
			// 原因2：在每个请求中，url的'http://localhost:8082'这部分域名都是相同的。
			// 而且本地测试的域名与上线之后的域名有可能不相同。如果在每个请求中都重复写一次，那么再修改的时候，就需要修改多处，很不方便。
			// 新建 util目录，新建 request.js，并在main.js中挂在封装好的myRequest函数，然后此处使用 this.$myRequest调用
			// async getSwipers() {
			// 	const res = await this.$myRequest({
			// 		url: '/api/getlunbo'
			// 	})
			// 	this.swipers = res.data.message
			// },
			
			// 方式4：提取api到单独的文件。
			// 原因1：现在每次通过this.$myRequest调用时，都要在.vue业务文件中写 url: '/api/getlunbo'。
			// 当请求越来越多，.vue文件中就会有大量的这种url: '/api/getlunbo'，一旦后端的路由(path)发生改变，则需要在.vue中多处修改。
			// 为了便于维护，需要统一把路由(path)在一个文件中管理。新建api目录，新建index.js
			async getSwipers() {
				const res = await getSwiperImgs() 
				this.swipers = res.data.swipers
			},
					
			// 点击navItem跳转
			handleNavItem(url) {
				console.log(url)
				uni.navigateTo({
					url
				})
			},
			// 导航到商品详情页
			handleGoodsDetail(id) {
				uni.navigateTo({
					url: `/pages/goods-detail/goods-detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	// 可以直接使用 uni中的swiper、image等标签选择器
	.home {
		// 轮播图
		swiper {
			width: 750rpx;
			height: 380rpx;
			image {
				height: 100%;
				width: 100%;
			}
		}
		// 导航
		.nav {
			display: flex;
			margin-top: 30rpx;
			.nav_item {
				width: 25%;
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				view {
					width: 120rpx;
					height: 120rpx;
					background: #cde5f1;
					border-radius: 60rpx;
					margin-bottom: 10rpx;
					image {
						width: 50rpx;
						height: 50rpx;
						margin-top: 30rpx;
					}
				}
				text {
					font-size: 30rpx;
				}
			}
		}
		// 推荐商品
		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color; // 这个红色是主题色，在uni.scss中定义成变量。
				text-align: center;
				letter-spacing: 20px;
				margin: 10rpx 0;
				background: #fff;
			}
			// 封装goods-list组件：把以下样式剪切到components/goods-list/goods-list.vue中去。
			/* .goods_list {
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
			} */
		}
	}
</style>
