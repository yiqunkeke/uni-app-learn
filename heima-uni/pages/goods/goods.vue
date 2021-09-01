<template>
	<view>
		<goods-list :goods="goods" @goodsItemClick="handleGoodsDetail"></goods-list>
		<view class="isOver" v-if="flag">
			------------------ 我是有底线的 -----------------
		</view>
	</view>
</template>

<script>
	import goodsList from '@/components/goods-list/goods-list.vue'
	import { getGoodsList } from '@/api/index.js'
	export default {
		components: {
			'goods-list': goodsList
		},
		data() {
			return {
				pageIndex: 1,
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
					},
					{
						id: 'good05',
						src: 'http://yun.itheima.com/Upload/Images/20210817/611b76f6cb6fe.jpg',
						newPrice: '2195',
						oldPrice: '2499',
						name: 'Vue 3.0深入响应式原理'
					},
					{
						id: 'good06',
						src: 'http://yun.itheima.com/Upload/Images/20210816/611a207ed1050.jpg',
						newPrice: '2195',
						oldPrice: '2499',
						name: '体育赛事数据分析'
					},
					{
						id: 'good07',
						src: 'http://yun.itheima.com/Upload/Images/20210812/6114e9e6cddce.jpg',
						newPrice: '2195',
						oldPrice: '2499',
						name: 'AI赋能企业：揭秘黑马AI平台'
					},
					{
						id: 'good08',
						src: 'http://yun.itheima.com/Upload/Images/20210819/611e0198be903.jpg',
						newPrice: '2195',
						oldPrice: '2499',
						name: 'Vue 3.0深入响应式原理'
					}
				],
				flag: false
			}
		},
		onLoad() {
			this.getData()
		},
		// 7. 实现上拉加载数据
		onReachBottom() {
			console.log('触底了')
			// 此处需要添加节流阀：当没有更多数据的时候，触底，不需要再发请求。
			// 同时显示“我是有底线的”
			if(this.goods.length / 10 < this.pageIndex) return this.flag = true
			
			this.pageIndex ++
			this.getData() // 重新获取数据
		},
		// 8. 开启下拉刷新
		// 需要在pages.json中对应的页面中配置style.enablePullDownRefresh为true
		onPullDownRefresh() {
			console.log('下拉刷新了')
			this.pageIndex = 1
			this.goods = []
			this.flag = false
			setTimeout(() => {
				// 给getData传递一个回调函数，并且在回调函数中调用uni.stopPullDownRefresh
				this.getData(() => {
					uni.stopPullDownRefresh()
				})
			}, 1000)
		},
		methods: {
			async getData(callback) {
				// 8.  开启下拉刷新： 并在getData中通过callback来接收回调函数。
				callback && callback()
				
				console.log(this.goods.length)
				const res = await getGoodsList(this.pageIndex)
				this.goods = [...this.goods, ...res.data.goods]
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
.isOver {
	color: #ccc;
	text-align: center;
	padding-bottom: 30rpx;
}
</style>
