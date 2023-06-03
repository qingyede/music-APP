<template>
	<view class="content">
		<!-- A -->
		<view class="a">
			<view class="a-zi">A</view>
		</view>
		<!-- 字 -->
		<view class="zi">
			<view class="zi-yi">Welcome in Azoera</view>
			<view class="zi-er">Log in or sign up to explore new Azoera features</view>
		</view>
		<!-- Login -->
		<view class="demglu">
			<view class="zuo">
				<view class="shang" :class="isSignup ? 'color' : ''" @click="isSignup = false">Log in</view>
				<view class="xia" :class="!isSignup ? 'color' : ''" @click="isSignup = true">Sign up</view>
			</view>
			<view class="you">
				<view class="Signup" v-if="isSignup">
					<view class="you-shang"><input class="ipt" type="text" placeholder="Type your phone here" /></view>
					<view class="you-zhong"><input class="ipt" type="text" placeholder="Type your password" /></view>
					<view class="you-xia"><input class="ipt" type="text" placeholder="Confirm your password" /></view>
				</view>
				<!-- --------------------------------------- -->
				<view class="Login" v-else>
					<view class="you-shang"><input class="ipt" type="text" placeholder="Type your phone here" /></view>
					<view class="you-zhong" :class="!isSignup ? 'top' : ''"><input class="ipt" type="text"
							placeholder="Type your password" /></view>
				</view>
			</view>
		</view>
		<!-- help -->
		<view class="help">Help? FAQ</view>
		<view class="footer" @click="tohome">{{ wenzi }}</view>
	</view>
</template>

<script>
	import {
		forEach
	} from 'lodash';
	export default {
		data() {
			return {
				//控制登录注册页面的显示
				isSignup: true,
				//控制登陆注册文字的变化
				SignupOrLogin: ''
			};
		},
		mounted() {
			this.getindeximg()
			this.getindeximgwyy()
			this.getindeximgqq()
			this.getindeximgks()
		},
		computed: {
			wenzi() {
				if (this.isSignup) {
					return (this.SignupOrLogin = 'Sign me up');
				} else {
					return (this.SignupOrLogin = 'Log me up');
				}
			}
		},
		onShow() {},
		methods: {
			//跳转页面
			tohome() {
				// this.$router.push('/pages/home/home');
				uni.switchTab({
					url: '/pages/home/home'
				});
			},
			//得到首页抖音的轮播图图片
			getindeximg() {
				const data = {
					shili: this,
					name: '抖音'
				}
				this.$store.dispatch('getdouyin', data)
			},
			//得到首页网易云的轮播图图片
			getindeximgwyy() {
				const data = {
					shili: this,
					name: '网易云'
				}
				this.$store.dispatch('getwyy', data)
			},
			//得到首页网易云的轮播图图片
			getindeximgqq() {
				const data = {
					shili: this,
					name: 'qq音乐'
				}
				this.$store.dispatch('getqqyy', data)
			},
			//得到首页网易云的轮播图图片
			getindeximgks() {
				const data = {
					shili: this,
					name: '快手'
				}
				this.$store.dispatch('getks', data)
			}
		}
	};
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		width: 100%;
		height: 100vh;
		flex-direction: column;
		background-color: #15161d;
		font-family: hln;
		overflow: hidden;
	}

	.a {
		position: relative;
		width: 80rpx;
		height: 80rpx;
		background-color: #000;
		margin: 120rpx 550rpx 0 120rpx;
		border-radius: 8rpx;
	}

	.a-zi {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 60rpx;
		height: 60rpx;
		background-color: blue;
		font-family: hln;
		text-align: center;
		line-height: 60rpx;
		background: linear-gradient(180deg, rgba(0, 187, 132, 1) 0%, rgba(61, 135, 255, 1) 48%, rgba(212, 95, 242, 1) 100%);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 800;
	}

	.zi {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 508rpx;
		height: 162rpx;
		margin: 80rpx 122rpx 0 120rpx;
		font-family: hln;
		font-size: 32rpx;

		.zi-yi {
			height: 48rpx;
			line-height: 48rpx;
			color: rgb(255, 255, 255);
			letter-spacing: 2rpx;
			font-weight: 800;
			font-size: 34rpx;
		}

		.zi-er {
			height: 96rpx;
			line-height: 48rpx;
			letter-spacing: 2rpx;
			font-weight: 600;
			color: rgb(255, 255, 255);
			opacity: 0.4;
		}
	}

	.demglu {
		display: flex;
		// justify-content: space-between;
		width: 100%;
		height: 344rpx;
		// margin: 120rpx 0 0 120rpx;
		margin-top: 120rpx;
		margin-left: 120rpx;

		.zuo {
			position: relative;
			width: 156rpx;
			height: 100%;
			font-size: 28rpx;
			font-family: hln;
			text-align: left;
			letter-spacing: 1rpx;
			font-weight: 600;

			.shang {
				position: absolute;
				top: 3.2667vw;
				left: -3.73vw;
				width: 100rpx;
				height: 48rpx;
				transform: rotate(-90deg);
				transform-origin: center;
				color: rgb(255, 255, 255);
				transition: all 0.2s;
			}

			.xia {
				position: absolute;
				bottom: 9.26vw;
				left: -5.733vw;
				width: 124rpx;
				height: 48rpx;
				margin-top: 81rpx;
				transform: rotate(-90deg);
				transform-origin: center;
				color: rgb(255, 255, 255);
				transition: all 0.2s;
			}
		}

		.you {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 490rpx;
			height: 100%;

			.you-shang {
				height: 96rpx;
				background-color: rgb(0, 0, 0);
				border-top-left-radius: 16rpx;
				border-bottom-left-radius: 16rpx;
				margin-top: 10rpx;
			}

			.you-zhong {
				height: 96rpx;
				background-color: rgb(0, 0, 0);
				border-top-left-radius: 16rpx;
				border-bottom-left-radius: 16rpx;
				margin-top: 10rpx;
			}

			.you-xia {
				height: 96rpx;
				background-color: rgb(0, 0, 0);
				border-top-left-radius: 16rpx;
				border-bottom-left-radius: 16rpx;
				margin-top: 10rpx;
			}
		}
	}

	.ipt {
		width: 100%;
		height: 100%;
		line-height: 96rpx;
		border-top-left-radius: 16rpx;
		border-bottom-left-radius: 16rpx;
		padding-left: 40rpx;
		box-sizing: border-box;
		color: rgb(255, 255, 255);
		font-size: 24rpx;
		font-family: hln;
		opacity: 0.3;
		border: 2rpx solid rgb(74, 74, 74);
		transition: all 0.2s;
	}

	.help {
		width: 136rpx;
		height: 42rpx;
		margin: 28rpx 69.86rpx 0 580.14rpx;
		line-height: 42rpx;
		font-size: 24rpx;
		color: rgb(255, 255, 255);
		font-weight: 600;
	}

	.footer {
		width: 392rpx;
		height: 88rpx;
		background-color: rgb(0, 187, 132);
		border-radius: 16rpx;
		margin: 110rpx 80rpx 160rpx 272rpx;
		color: rgb(255, 255, 255);
		font-size: 28rpx;
		line-height: 88rpx;
		text-align: center;
	}

	.color {
		opacity: 0.5;
	}

	.top {
		margin-top: 100rpx;
	}
</style>