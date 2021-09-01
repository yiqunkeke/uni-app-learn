<template>
	<view>
		<view class="title">--------------------text 组件--------------------</view>
		<!-- text 组件 -->
		<!-- text 文本组件，类似于 span，用于包裹文本内容 -->
		<!-- text 组件只支持嵌套text，不支持其它组件或自定义组件，否则会引发在不同平台的渲染差异 -->
		<view>
			<text>唱歌跳舞打篮球</text>
		</view>
		<!-- selectable属性，定义文本是否可选 -->
		<!-- 除了text组件，其他组件都无法长按选中 -->
		<view selectable>
			<text>唱歌跳舞打篮球</text>
		</view>
		<!-- space属性，显示连续空格 -->
		<!-- ensp：2个空格等于一个字 -->
		<view>
			<text space="ensp">唱歌    跳舞打篮球</text>
		</view>
		<!-- emsp: 1个空格等于一个字 -->
		<view>
			<text space="emsp">唱歌    跳舞打篮球</text>
		</view>
		<!-- nbsp：根据字号，设置的空格大小 -->
		<view>
			<text space="nbsp" style="font-size: 30px;">唱歌    跳舞打篮球</text>
		</view>
		<!-- decode 可以解析的有： &nbsp; &lt; &gt; &amp; &ensp; &emsp; -->
		<view>
			<text>&amp;</text>
		</view>
		
		<view class="title">--------------------view 组件--------------------</view>
		<!-- view 组件 -->
		<!-- view 视图容器，类似于 div，用于包裹各种元素内容 -->
		<!-- hover-class属性: 按下去的样式类。 当hover-class="none"时，没有点击态效果 -->
		<view class="box" hover-class="box-active">
			我是一个大盒子
		</view>
		<!-- hover-stop-propagation属性：阻止本节点的祖先节点出现点击态 -->
		<!-- hover-start-time属性：按住多久出现点击态 -->
		<!-- hover-stay-time属性：手指松开后点击态保留时间 -->
		<view class="box2" hover-class="box2-active">
			<view class="box" hover-class="box-active" hover-stop-propagation :hover-start-time="2000" :hover-stay-time="2000">我是一个大盒子</view>
		</view>
		
		<view class="title">--------------------button 组件--------------------</view>
		<!-- button 组件 -->
		<button>按钮</button>
		<!-- size属性：设置按钮大小 -->
		<button size="mini">mini按钮</button>
		<!-- type属性：按钮的类型 primary、default 白色、warn 红色-->
		<button type="primary">primary按钮</button>
		<button type="default">default按钮</button>
		<button type="warn">warn按钮</button>
		<!-- plain属性：按钮是否镂空，即背景透明，只有边框 -->
		<button type="primary" plain>plain按钮</button>
		<!-- disabled属性：禁用按钮 -->
		<button type="primary" disabled>disabled按钮</button>
		<!-- loading属性 -->
		<button loading>loading按钮</button>
		
		<view class="title">--------------------image 组件--------------------</view>
		<!-- image 组件 -->
		<!-- image组件默认宽度 300px、高度 225px； -->
		<image src="../../static/tabbar/my-sel.png"></image>
		<!-- mode属性：值为 aspectFill 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。 -->
		<image src="../../static/tabbar/my-sel.png" mode="aspectFill"></image>
		<!-- 值为 aspectFit：保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 -->
		<image src="../../static/tabbar/my-sel.png" mode="aspectFit"></image>
		
		<view class="title">--------------------uni-app中的样式--------------------</view>
		<!-- uni-app中的样式 -->
		<!-- rpx即响应式px,一种根据屏幕宽度自适应的动态单位。以 750宽的屏幕为基准， 750rpx恰好为屏幕宽度。屏幕变宽，rpx实际显示效果会等比放大。 -->
		<view class="box1">
			样式的学习-rpx
			<text>使用scss</text>
		</view>
		
		<view class="title">--------------------数据绑定的学习--------------------</view>
		<!-- 数据绑定的学习 -->
		<!-- 完全采用vue中的数据绑定：把数据直接定义在data中。
			data是一个函数，并且返回一个对象。
		 -->
		<view>{{msg}}</view>
		<view>{{'世界'+'你好'}}</view>
		<view>{{1+1}}</view>
		<view>{{flag ? '我是真的':'我是假的'}}</view>
		
		<view class="title">--------------------v-bind--------------------</view>
		<!-- v-bind 和 v-for -->
		<!-- 完全采用vue中的 -->
		<image :src="imgUrl"></image>
		
		<view class="title">--------------------v-for--------------------</view>
		<view v-for="(item, index) in arr" :key="item.id">
			序号：{{index}}，名字：{{item.name}} ，年龄：{{item.age}}
		</view>
		
		<view class="title">--------------------uni中的事件--------------------</view>
		<!-- uni 中的事件 -->
		<!-- 完全采用vue中的。通过$event获取事件对象 -->
		<button @click="handleClick(20, $event)">按钮</button>
		
		<view class="title">--------------------uni中的生命周期--------------------</view>
		<!-- uni中的生命周期：应用的生命周期和页面的生命周期 -->
		<!-- 应用的生命周期，应该在App.vue中定义。请至App.vue中查看 -->
		<!-- onLoad和onReady不会触发多次。onShow和onHide会多次触发 -->
		<!-- tabbar的页面展现过一次后就保留在内存中，再次切换tabbar页面，只会触发每个页面的onShow，不会再触发onLoad -->
		<!-- onUnload 页面卸载时触发 -->
		
		<view class="title">------------onPullDownRefresh下拉刷新-------------</view>
		<!-- onPullDownRefresh 下拉刷新时触发 
			在js中定义onPullDownRefresh处理函数（和onLoad等生命周期函数同级），监听该页面用户下拉刷新事件。
			1. 需要在 pages.json里，找到当前页面的pages节点，并在style选项中开启 enablePullDownRefresh。
			2. 当处理完数据刷新后，uni.stopPullDownRefresh 可以停止当前页面的下拉刷新。
		-->
		<!-- 也可以通过uni.startPullDownRefresh方法手动开启下拉刷新 -->
		<!-- onPullDownRefresh -->
		<view>
			这是列表
		</view>
		<view v-for="(item, index) in list" :key="index">
			{{item}}
		</view>
		<button @click="handlePullDown">点击时，手动开启下拉刷新</button>
		
		<view class="title">--------------onReachBottom-上拉加载--------------</view>
		<!-- onReachBottom ：可以监视页面滚动条什么时候触底（不是scroll-view滚到底）。常用于下拉下一页数据。
		且与onLoad等生命周期函数同级。 -->
		<!-- onReachBottomDistance ：页面上拉触底事件触发时，距离页面底部的距离，单位只支持px -->
		
		<view class="title">--------------------网络请求--------------------</view>
		<!-- 在uni中可以调用 uni.request方法进行发送网络请求 -->
		<!-- 需要注意的是： 在小程序中，网络相关的API在使用前需要配置域名白名单 -->
		<button @click="handleGetData">发送get请求</button>
		
		<view class="title">--------------------数据缓存--------------------</view>
		<!-- setStorage、getStorage、removeStorage 以及 setStorageSync、getStorageSync、removeStorageSync 同步方法-->
		<button @click="handleSetStorage">设置数据到本地缓存</button>
		<button @click="handleGetStorage" type="primary">获取本地缓存中的数据</button>
		<button @click="handleRemoveStorage" type="warn">删除本地缓存中的数据</button>
		<!-- 还有clearStorage、clearStorageSync，但这两个很少用到。 -->
		<!-- 注意：在 h5中，uni-app的Storage为 localStorage，浏览器限制5M大小，是缓存概念，可能会被清理 -->
		<!-- 在小程序中为其自带的 storage api，除非用户主动删除，否则数据一直都可用。 -->
		
		<view class="title">-------------------上传图片、预览图片-------------------</view>
		<button @click="handleChooseImg">上传图片</button>
		<image v-for="(item,index) in imgList" :key="item" :src="item" @click="handlePreviewImg(item)"></image>
		
		<view class="title">------------------条件注释实现跨端兼容-----------------</view>
		<!-- uni-app 已将常用的组件、js api封装到框架中，开发者按照uni-app规范开发即可保证多平台兼容，大部分业务均可满足。 -->
		<!-- 但每个平台有自己的一些特性，因此会存在一些无法跨平台的情况。
			* 大量写 if else 会造成代码执行性能低下和管理混乱
			* 编译到不同的工程后二次修改，会让后续升级变的很麻烦
		 -->
		 <!-- 写法：以 #ifdef 和 #endif 实现条件编译：
		 条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同的平台 -->	 
		 <!-- #ifdef H5  -->
		 <view class="viewStyle">我只需要在H5中显示</view>
		 <!-- #endif -->
		 <!-- #ifdef MP-WEIXIN -->
		 <view class="viewStyle">我只需要在小程序中显示</view>
		 <!-- #endif -->
		 
		 <view class="title">---------------------两种方式导航跳转--------------------</view>
		 <!-- 一种方式是声明式跳转、另一种是编程式跳转。
			声明式跳转：利用navigator组件进行跳转； 编程式跳转就是利用 js api 进行跳转。
		  -->
		  <!-- 跳转后的页面，左上角默认会有返回按钮。即保留当前页面跳转 -->
		  <navigator url="/pages/test/test">跳转到test普通页面</navigator>
		  <!-- 跳转到tabbar页面，必须设置 open-type="switchTab"。是关闭当前页，跳转(会触发onUnload) -->
		  <navigator url="/pages/message/message" open-type="switchTab">跳转到tabbar的信息页面</navigator>
		  <!-- 也是把当前页面进行关闭，再跳转(会触发onUnload)：会触发onUnload生命周期，且跳转后的页面左上角无返回按钮 -->
		  <navigator url="/pages/test/test" open-type="redirect">跳转到test普通页面,并用 redirect</navigator>
		
		  <button @click="handleGoTest">跳转到test普通页面</button>		
		  <button @click="handleGoMessage" type="primary">跳转到tabbar的信息页面</button>	
		  <button @click="handleGoTest2">跳转到test普通页面,并关闭当前页面</button>
		  <!-- 总结：open-type="switchTab" 和 uni.switchTab({}) 都会关闭所有非tab页面，跳转；
					open-type="redirect" 和 uni.redirectTo({}) 都是关闭当前页，跳转 
					navigateTo({}) 是保留当前页，跳转，使用 uni.navigateBack可以返回到原页面 -->	
					
		  <view class="title">---------------------跳转并传递参数--------------------</view>	
		  <!-- 通过?id=80&age=10方式传递 -->
		  <!-- 在onLoad生命周期中，通过onLoad的默认参数options进行接收 -->
		  <navigator url="/pages/test/test?id=80&age=10">跳转到test，并传递参数</navigator>
		  <button @click="handleGoTest3">跳转到test并传递参数</button>
		  
		  <view class="title">------------uni-app中组件的创建和使用-----------</view>
		  <!-- 在uni-app中，可以通过创建一个后缀名为 vue的文件，即创建一个组件。
				其他组件可以通过import的方式导入该组件，并且在components进行注册，在template中使用 -->
		  <test v-if="flag"></test>
		  
		  <view class="title">----------------组件的生命周期---------------</view>
		  <!-- beforeCreate/created、beforeMount/mounted、beforeUpdate/updated、beforeDestroy/destroyed -->
		  <!-- 去 components/test.vue中查看详细说明 -->
		  <button @click="handleToggleTest">切换上面test组件的显示与隐藏</button>
		  
		  <view class="title">----------------组件的通信---------------</view>
		  <!-- 父传子： 在父组件中通过属性绑定的方式传递给子组件，在子组件中通过props接收 -->
		  <!-- 子传父：在子组件中通过$emit来触发自定义事件并传值，在父组件中监听事件并接收值 -->
		  <test :msg="msg" @myEvent="handleGetNum"></test>
		  
		  <!-- 兄弟组件之间： 通过uni.$on() 注册全局事件，通过uni.$emit() 触发全局事件，进行通信-->
		  <compA></compA>
		  <compB></compB>
		  
		  <view class="title">------------uni-ui组件库的基本介绍和使用-----------</view>
		  <!-- uni-ui 是DCloud提供的一个跨端ui库，它是基于vue组件的，felx布局的、无dom的跨全端ui框架 -->
		  <!-- uni-ui不包括基础组件,它是基础组件的补充-->
		  <!-- 需要使用hx导入插件后才能使用，导入之后的插件放在uni_modules目录下 -->
		  <uni-calendar 
			  :insert="true"
			  :lunar="true" 
			  :start-date="'2019-3-2'"
			  :end-date="'2019-5-20'"
		   />
		  
	</view>	
</template>

<script>
	import test from '../../components/test.vue'
	import compA from '../../components/a.vue'
	import compB from '../../components/b.vue'
	export default {
		components: {
			test,
			compA,
			compB
		},
		data() {
			return {
				msg: "hello",
				flag: true,
				imgUrl: "../../static/logo.png",
				arr: [
					{
						name: '宋小宝',
						age: 20,
						id: 80
					},
					{
						name: '刘能',
						age: 30,
						id: 81
					},
					{
						name: '赵四',
						age: 50,
						id: 82
					},
					{
						name: '小沈阳',
						age: 20,
						id: 83
					}
				],
				list: ['前端', 'Java', 'UI', '测试', '大数据'],
				imgList: []
			}
		},
		methods : {
			// 点击事件
			handleClick(num, e) {
				console.log('点击我了', num, e)
			},
			// 在自定义事件中，手动开启下拉刷新
			handlePullDown() {
				uni.startPullDownRefresh() // 会开启下拉刷新，调用onPullDownRefresh
			},
			// 发送get请求
			handleGetData() {
				uni.request({
					url: "http://10.206.104.5:8888/api/v1/smartcooler/devsnapshot/list?Index=1&PageSize=10&DeviceLink="
				})
			},
			// 设置本地缓存
			handleSetStorage() {
				// uni.setStorage({
				// 	key: 'id',
				// 	data: 80,
				// 	success: () => {
				// 		console.log('设置成功')
				// 	}
				// })
				
				// 通常用同步方式设置
				uni.setStorageSync('id', 80)
			},
			// 获取本地缓存中的数据
			handleGetStorage() {
				// uni.getStorage({
				// 	key: 'id',
				// 	success: (res) => {
				// 		console.log('获取成功', res.data)
				// 	}
				// })
				
				// 通常用同步方式获取，定义变量来接收即可
				const res = uni.getStorageSync('id')
				console.log(res)
			},
			// 删除本地缓存中的数据 
			handleRemoveStorage() {
				// uni.removeStorage({
				// 	key: 'id',
				// 	success: () => {
				// 		console.log('删除成功')
				// 	}
				// })
				
				// 通常用同步方式删除
				uni.removeStorageSync('id')
			},
			// 选择图片-从本地相册选择图片或使用相机拍照
			handleChooseImg() {
				uni.chooseImage({
					count: 5, // count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
					success: res => {
						this.imgList = res.tempFilePaths
					}
				})
			},
			// 点击预览图片
			handlePreviewImg(current) {
				uni.previewImage({
					current, // current 为当前显示图片的链接/索引值
					urls: this.imgList // urls 是需要预览的图片链接列表
				})
			},
			// js api 方式跳转页面
			handleGoTest() {
				// 保留当前页面，并进行跳转。
				uni.navigateTo({
					url: '/pages/test/test'
				})
			},
			handleGoMessage() {
				// 跳转到tabbar页面，并关闭所有非tabbar页面
				uni.switchTab({
					url: "/pages/message/message"
				})
			},
			handleGoTest2() {
				// 关闭当前页，跳转
				uni.redirectTo({
					url:"/pages/test/test"
				})
			},
			handleGoTest3() {
				// 跳转并传参
				uni.navigateTo({
					url: "/pages/test/test?id=100&age=20"
				})
			},
			handleToggleTest() {
				this.flag = ! this.flag
			},
			handleGetNum(num) {
				console.log('父组件拿到了num', num)
			}
		},
		// 监听-下拉刷新
		onPullDownRefresh() {
			console.log('触发了下拉刷新')
			this.list = ['前端', 'Java', 'UI', '测试', '大数据', 'JavaScript']
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 2000)
		},
		// 监听页面触底---上拉加载
		onReachBottom() {
			console.log('页面触底了');
			this.list = [...this.list, '英语','逻辑思维','美术','钢琴','跆拳道']
		},
		// js 的条件编译
		onLoad() {
			// #ifdef H5
			console.log('我只需要在 h5 中打印')
			// #endif
			
			// #ifdef MP-WEIXIN
			console.log('我只需要在微信小程序中打印')
			// #endif
		},
		onUnload() {
			console.log('页面卸载了')
		}
	}
</script>

<style lang="scss">
	/* @import 可以导入外联样式表， */
	/* @import 后跟需要导入的外联样式的相对路径，注意，需要用 ; 表示语句的结束。 */
	@import url("./a.css");
	
	.box {
		width: 100px;
		height: 100px;
		background: #4CD964;
	}
	.box-active {
		background: red;
	}
	.box2 {
		width: 200px;
		height: 200px;
		background: #007AFF;
		margin-top: 20px;
	}
	.box2-active {
		background: yellow;
	}
	/* 样式的学习：rpx，基准是 750 rpx */
	/* 支持基本常用的选择器 class、id、element */
	/* 在uni-app中不能使用 * 选择器 */
	/* page 相当于 body 节点 */
	/* 定义在App.vue中的样式为全局样式，作用于每一个页面. 
	   在pages目录下的 vue文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖App.vue中相同的选择器*/
	/* 使用 scss，需要安装插件。 */
	/* 使用 font 字体图标：使用方式与普通web项目相同，需要注意以下几点：
		1. 字体文件小于 40kb, uni-app会自动将其转化为 base64 格式
		2. 字体文件大于等于40kb,需要开发者自己转化，否则使用将不生效
		3. 字体文件的引用路径推荐使用 ~@ 开头的绝对路径：
		
		@font-face {
			font-family: test1-icon;
			src: url('~@/static/iconfont.ttf');
		}
	 */
	.box1 {
		width: 375rpx;
		height: 375rpx;
		background: #007AFF;
		/* color: #fff; */
		font-size: 30rpx;
		text {
			color: yellow;
		}
	}
	.title {
		text-align: center;
		margin-top: 20px;
		margin-bottom: 20px;
		color: #000;
		font-size: 17px;
		font-weight: bold;
	}
	// 样式的条件编译
	// 希望只在 h5 中是蓝色
	// #ifdef H5
	.viewStyle {
		color: #007AFF;
	}
	// #endif
	// 希望只在微信小程序中是粉色
	// #ifdef MP-WEIXIN
	.viewStyle {
		color: hotpink;
	}
	// #endif
</style>
