<template>
	<view class="searchSongs">
		<!-- 头部 -->
		<uni-nav-bar class="top-nav" fixed="true" :border="false" background-color="#15161d">
		</uni-nav-bar>
		<!-- 主体 -->
		<view class="main" :class="isbrightness?'light1':'light2'">
			<view class="top-top">
				<view class="top">
					<uni-icons class="back" type="back" size="26" color="#15161d"></uni-icons>
				</view>
			</view>
			<!--内容  -->
			<view @click="toplayerpage(item.id)" class="content" v-for=" (item,index) in showsongsList" :key="index">
				<view class="yi">{{index+1}}</view>
				<view class="er">
					<lazyLoad :src="item.al.picUrl" width="96rpx" height="96rpx"></lazyLoad>
				</view>
				<view class="san">
					<view class="top">{{item.name}}</view>
					<view class="bottom">{{item.ar[0].name }}-{{item.al.name}}</view>
				</view>
				<view class="si">
					<view class="span">
						...
					</view>
				</view>
			</view>
		</view>

		<view class="loading" v-if="isloading">
			<image src="../../static/loading(4).gif" mode=""></image>
		</view>
	</view>
</template>

<script>
	import
	lazyLoad
	from '../../uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.vue'
	export default {
		data() {
			return {
				//用户选择的数据
				selectinfo: [],
				//需要展示的数据
				showsongsList: [],
				//用户选择的歌曲id
				songId: [],
				//下拉时候自增的num
				offset: 0,
				//
				isloading: this.$store.state.isloading,
				isbrightness: this.$store.state.isbrightness
			}
		},
		components: {
			lazyLoad
		},
		async onReachBottom() {
			this.offset += 1
			const data = {
				name: this.$store.state.userIpt,
				index: this.offset,
				shili: this
			}
			//开启请求动画
			this.isloading = true
			this.isbrightness = true
			//关闭请求动画
			await this.$store.dispatch('pushsongs', data)
			this.isloading = false
			this.isbrightness = false
		},
		mounted() {
			this.$store.state.num = 0
			this.$nextTick(() => {
				this.showsongsList = this.$store.state.userselectsong
				this.songId = this.$store.state.userdedailsongsinfo
				//用户选中的歌曲，并且滚动到中间，高亮显示
				this.scrollmid()
			})
		},

		methods: {
			//得到用户选中的歌曲，并且滚动到中间，高亮显示
			scrollmid() {
				this.showsongsList.forEach((item, index) => {
					if (item.id === this.songId.id) {
						const selectsong = this.showsongsList.splice(index, 1)
						this.showsongsList.unshift(selectsong[0])
					}
				})
			},
			//跳转页面
			async toplayerpage(item) {
				//用户选择的歌曲的id
				await this.$store.dispatch('toplayer', item)
				await this.$store.state.userselectsong.some((song, index) => {
					if (song.id === item) {
						this.$store.commit('KEYNUM', index)
						return true
					}
				})
				uni.navigateTo({
					url: '/pages/detailsong/detailsong'
				})

			}
		}
	}
</script>

<style lang="less" scoped>
	.light1 {
		filter: brightness(0.45);
	}

	.light2 {
		filter: brightness(1);
	}

	.loading {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 652rpx;
		height: 60rpx;
		margin: auto;
		margin-top: -18rpx;
		transition: all .2s;

		image {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 60rpx;
			height: 60rpx;
		}
	}

	.searchSongs {
		width: 100%;
		height: 100%;
		background-color: #15161D;
	}

	image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		will-change: transform
	}

	.main {
		width: 100%;
		transition: all .2s;
	}

	.top-top {
		width: 100%;
		padding-left: 20rpx;
		padding-right: 20rpx;
		box-sizing: border-box;
		// border-bottom: 4rpx solid #15161d;

		.top {
			width: 100%;
			height: 60rpx;
			line-height: 60rpx;
		}
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 652rpx;
		height: 127.64rpx;
		margin: 16rpx auto;
		color: #fff;
		font-size: 36rpx;

		.yi {
			height: 48rpx;
			line-height: 48rpx;
			font-size: 32rpx;
		}

		.er {
			width: 96rpx;
			height: 96rpx;
			line-height: 96rpx;
			border-radius: 20rpx;
			overflow: hidden;

			image {
				width: 96rpx;
				height: 96rpx;
			}
		}

		.san {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 406rpx;
			height: 123.64rpx;
			font-size: 32rpx;

			.top {
				width: 100%;
				height: 50%;
				line-height: 65rpx;
				color: #fff;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.bottom {
				width: 100%;
				height: 50%;
				line-height: 48rpx;
				color: rgb(130, 130, 130);
				font-size: 26rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}

		.si {
			position: relative;
			width: 20rpx;
			height: 48rpx;
			line-height: 48rpx;

			.span {
				position: absolute;
				top: 2rpx;
				left: -30rpx;
				transform: rotate(-90deg);
				color: #888888;
				font-size: 50rpx;
			}
		}
	}

	.currentsong {
		color: #000;
		background-color: #fff;
	}
</style>