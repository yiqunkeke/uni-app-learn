import { myRequest } from "../util/request.js"

// 获取首页轮播数据
export function getSwiperImgs() {
	return myRequest({
		url: '/api/getlunbo'
	})
}

// 获取商品列表数据
export function getGoodsList(pageIndex) {
	return myRequest({
		url: '/api/getGoodsList/' + pageIndex,
	})
}

// 获取社区图片-左侧分类
export function getPicsCate(){
	return myRequest({
		url: '/api/getimgcategory'
	})
}

// 获取社区图片-右侧的数据
export function getPics(cateid) {
	return myRequest({
		url: `/api/getimages/${cateid}`
	})
}

// 获取资讯列表数据
export function getNewsList() {
	return myRequest({
		url: '/api/getNewsList'
	})
}

// 获取资讯详情
export function getNewsDetail(id) {
	return myRequest({
		url: `/api/getNews/${id}`
	})
}

// 获取商品详情轮播图数据
export function getGoodsDetailImages(id) {
	return myRequest({
		url: `/api/getGoodsLunbo/${id}`
	})
}

// 获取商品详情
export function getGoodsInfo(id){
	return myRequest({
		url: `/api/getGoodsInfo/${id}`
	})
}