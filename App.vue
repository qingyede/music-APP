<script>
	export default {
		onShow() {
			// console.log(uni.getSystemInfoSync().platform === 'android');
			// console.log(uni.getSystemInfoSync().statusBarHeight);
			// this.$refs.page.paddingTop = this.statusBarHeight;
		},
		data() {
			return {
				// isApp: uni.getSystemInfoSync().platform === 'android',
				// 状态栏高度
				// statusBarHeight: uni.getSystemInfoSync().statusBarHeight
			};
		}
	};
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>