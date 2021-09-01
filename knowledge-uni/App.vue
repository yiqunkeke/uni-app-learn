<script>
	export default {
		// 代表小程序启动之后，不会触发多次
		onLaunch: function() {
			console.log('App Launch')
		},
		// onShow和onHide会多次触发
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.box1 {
		color: #FFFFFF;
	}
</style>
