<template>
	<view class="loading">
		<view class="box">
			<image src="../static/img/loading(1).gif" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "loading-page",
		data() {
			return {

			};
		}
	}
</script>

<style lang="less" scoped>
	.loading {
		position: relative;
		width: 100%;
		height: 100vh;
		background-color: #15161D;

		.box {
			position: relative;
			width: 60rpx;
			height: 60rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>