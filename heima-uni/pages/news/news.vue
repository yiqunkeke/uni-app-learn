<template>
	<view class="news">
		<!-- 14. 实现资讯列表的结构和数据的获取 -->
		<!-- <view class="news_item">
			<image src="http://yun.itheima.com/Upload/Images/20200116/5e1fd16ee8aa3.jpg"></image>
			<view class="right">
				<view class="title">
					9天快速掌握java基础，更适合小白学习的Java基础
				</view>
				<view class="info">
					<text>发表时间：</text>
					<text>浏览：</text>
				</view>
			</view>
		</view> -->
		
		<!-- 15. 实现newsItem组件的封装 components/news-list/news-list.vue -->
		<!-- 把下面的代码剪切放到 components/news-list/news-list.vue，记得样式一起剪切-->
		
		<!-- <view class="news_item" v-for="item in newsList">
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
		</view> -->	
		
		<!-- <news-item :list="newsList"></news-item> -->
		
		<!-- 为什么要封装？封装的目的是为了复用组件。
		如果同一段代码，可能在2处用到，样式一致，
		则可以将此部分代码封装为组件，分别在需要的地方引入并使用组件。
		 
		什么时候应该封装组件？当某一处代码需要在不同的地方出现时。如果不是，则可以不封装。
		 -->
		
		
		<!-- 16. 实现列表跳转详情并传递id -->
		<!-- 在封装的组件内部，绑定click事件，并通过 $emit形式在父组件中触发。在父组件中处理事件的响应。 -->
		<!-- 最好不要在封装的组件内部处理事件的响应，否则组件在多处引用时，就会有相同的事件响应。就无法达到复用组件的目的。 -->
		<!-- 同时，最好在父组件中请求数据，再传递给封装的组件。这样也达到了灵活运用组件的目的 -->
		<news-item :list="newsList" @itemClick="goDetail"></news-item>
		
		<!-- 17. 完成资讯详情页面 pages/news-detail/news-detail.vue  重点掌握rich-text组件：可以解析html内容 -->
	</view>
</template>

<script>
	import {getNewsList} from '@/api/index.js'
	import newsItem from '@/components/news-item/news-item.vue'
	export default {
		components: {
			'news-item': newsItem
		},
		data() {
			return {
				newsList:[
					{
						id: 1,
						imageSrc: 'http://yun.itheima.com/Upload/Images/20200116/5e1fd16ee8aa3.jpg',
						title: '9天快速掌握java基础，更适合小白学习的Java基础',
						publishTime: '2021-08-30',
						visitorsNumber: '30'
					},
					{
						id: 2,
						imageSrc: 'http://yun.itheima.com/Upload/Images/20200304/5e5f06ad9c45c.jpg',
						title: '2020年抗疫之作java基础进阶13天',
						publishTime: '2021-09-30',
						visitorsNumber: '100'
					}
				]
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews() {
				const res = await getNewsList()
				this.newsList = res.data.message
			},
			goDetail(id) {
				uni.navigateTo({
					url: `/pages/news-detail/news-detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
.news {
	
	/* .news_item {
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
	} */
}
</style>
