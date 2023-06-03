<template>
	<view class="page">
		<uni-nav-bar :border="false" background-color="#15161d"></uni-nav-bar>
		<!-- 歌词 -->
		<view class="song">
			<view class="li-song">
				<view class="li" v-for=" (lyric,index) in this.$store.state.rscurrentsonginfo.lyric" :key="index">
					{{lyric.word }}
				</view>
			</view>
		</view>
		<!-- footer -->
		<view class="footer">
			<view class="top">
				<view class="top2">
					<view class="top2-zuo">
						<image class="avater" :src="this.$store.state.rscurrentsonginfo.pic" mode=""></image>
					</view>
					<view class="zhong">
						<view class="top1">{{this.$store.state.rscurrentsonginfo.author }}</view>
						<view class="bottom1">{{this.$store.state.rscurrentsonginfo.songname}}</view>
					</view>
					<view class="you">
						<!-- 爱心一 -->
						<image @click="aixin" class="aixin" v-if="!flag"
							src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMTA4MDM4NTU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDYyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik00MzYuNDkyNTE2IDE2Mi4yMDYxNTFjNDQuMTU5NDMxIDM1LjI2NjU2IDEwNi44NTA5ODcgMzUuMjY2NTYgMTUxLjAxMjY5MyAwIDExMC40MzcyNjItODguMjQzNzY5IDI2MC4xMDA1NTEtNzMuNTI1NDc2IDM0My40NDI3NzMtMS40NzAwMDkgMTA0Ljc0MTU0NyA5MC41NTExODIgMTA0Ljc0MTU0NyAyNzEuNjUzNTQ3IDAgNDUyLjc1MzYzNi02My41Njc2NDQgMTE3Ljc2NjgyNy0yMTMuNzQyOTMzIDIzNS41MzEzNzgtMzU0Ljk1NzA4NCAzMjMuNzg4OGExMjAuOTczMDg0IDEyMC45NzMwODQgMCAwIDEtMTI3Ljk4NDA3MSAwQzMwNi43OTI2NzYgODQ5LjAyMTE1NiAxNTYuNjE1MTExIDczMS4yNTY2MDQgOTMuMDQ3NDY3IDYxMy40ODk3NzhjLTEwNC43MzY5OTYtMTgxLjEwMDA4OS0xMDQuNzM2OTk2LTM2Mi4yMDI0NTMgMC00NTIuNzUzNjM2IDgzLjM0NDQ5OC03Mi4wNTU0NjcgMjMzLjAwNzc4Ny04Ni43NzM3NiAzNDMuNDQ1MDQ5IDEuNDcwMDA5eiIgZmlsbD0iI2U2ZTZlNiIgcC1pZD0iMTA0NjMiPjwvcGF0aD48L3N2Zz4="
							mode=""></image>
						<!-- 爱心二 -->
						<image @click="aixin" class="aixin2" v-else :class="flag ? 'aixindonghua' : ''"
							src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMTA4MDM4NTU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDYyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik00MzYuNDkyNTE2IDE2Mi4yMDYxNTFjNDQuMTU5NDMxIDM1LjI2NjU2IDEwNi44NTA5ODcgMzUuMjY2NTYgMTUxLjAxMjY5MyAwIDExMC40MzcyNjItODguMjQzNzY5IDI2MC4xMDA1NTEtNzMuNTI1NDc2IDM0My40NDI3NzMtMS40NzAwMDkgMTA0Ljc0MTU0NyA5MC41NTExODIgMTA0Ljc0MTU0NyAyNzEuNjUzNTQ3IDAgNDUyLjc1MzYzNi02My41Njc2NDQgMTE3Ljc2NjgyNy0yMTMuNzQyOTMzIDIzNS41MzEzNzgtMzU0Ljk1NzA4NCAzMjMuNzg4OGExMjAuOTczMDg0IDEyMC45NzMwODQgMCAwIDEtMTI3Ljk4NDA3MSAwQzMwNi43OTI2NzYgODQ5LjAyMTE1NiAxNTYuNjE1MTExIDczMS4yNTY2MDQgOTMuMDQ3NDY3IDYxMy40ODk3NzhjLTEwNC43MzY5OTYtMTgxLjEwMDA4OS0xMDQuNzM2OTk2LTM2Mi4yMDI0NTMgMC00NTIuNzUzNjM2IDgzLjM0NDQ5OC03Mi4wNTU0NjcgMjMzLjAwNzc4Ny04Ni43NzM3NiAzNDMuNDQ1MDQ5IDEuNDcwMDA5eiIgZmlsbD0iI2Q4MWUwNiIgcC1pZD0iMTA0NjMiPjwvcGF0aD48L3N2Zz4="
							mode=""></image>
					</view>
				</view>
				<view class="bottom ">
					<view class="bottom-jindutiao">
						<view class="btm-zuo"><span>00:00</span></view>
						<slider class="slider" value="8" @change="slidered($event)" activeColor="#aa0000"
							backgroundColor="rgba(0, 0, 0, 0.3)" block-color="rgb(92, 92, 92)" block-size="11.5" />
						<view class="btm-you"><span>00:00</span></view>
					</view>
				</view>
			</view>
			<view class="bottom">
				<div class="anniu">
					<view class="li-anniu">
						<view class="pre-zuo" @click="changeorder">
							<!-- 0 -->
							<image v-if="$store.state.controlorder===0"
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMDMyMTIxNjg0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc3ODgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTcyNS4zMzMzMzMgMTcwLjY2NjY2N1Y4OC4yMzQ2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAzNC45ODY2NjctMTYuNDI2NjY3bDE3NS43ODY2NjcgMTQ2LjQ3NDY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTEzLjY5NiAzNy43MTczMzNIODUuMzMzMzMzVjE3MC42NjY2NjdoNjQwek04NS4zMzMzMzMgNzY4aDg1My4zMzMzMzR2ODUuMzMzMzMzSDg1LjMzMzMzM3YtODUuMzMzMzMzeiBtMC0yOTguNjY2NjY3aDg1My4zMzMzMzR2ODUuMzMzMzM0SDg1LjMzMzMzM3YtODUuMzMzMzM0eiIgcC1pZD0iNzc4OSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg=="
								mode=""></image>
							<!-- 1 -->
							<image v-else-if="$store.state.controlorder===1"
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMDMyMDc0OTE2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY2NzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc2OCA3NjMuMDA4VjY4Mi42NjY2NjdsMjEzLjMzMzMzMyAxMjgtMjEzLjMzMzMzMyAxMjh2LTg5LjE3MzMzNGEzODQgMzg0IDAgMCAxLTI5OC41Mzg2NjctMjI4LjkwNjY2Nkw0NjkuMzMzMzMzIDYyMC4zNzMzMzNsLTAuMTI4IDAuMjU2QTM4NCAzODQgMCAwIDEgMTE2LjI2NjY2NyA4NTMuMzMzMzMzSDg1LjMzMzMzM3YtODUuMzMzMzMzaDMwLjkzMzMzNGEyOTguNjY2NjY3IDI5OC42NjY2NjcgMCAwIDAgMjc0LjUxNzMzMy0xODEuMDM0NjY3TDQyMi45MTIgNTEybC0zMi4xMjgtNzQuOTY1MzMzQTI5OC42NjY2NjcgMjk4LjY2NjY2NyAwIDAgMCAxMTYuMjY2NjY3IDI1Nkg4NS4zMzMzMzNWMTcwLjY2NjY2N2gzMC45MzMzMzRhMzg0IDM4NCAwIDAgMSAzNTIuOTM4NjY2IDIzMi43NDY2NjZMNDY5LjMzMzMzMyA0MDMuNjI2NjY3bDAuMTI4LTAuMjU2QTM4NCAzODQgMCAwIDEgNzY4IDE3NC41MDY2NjdWODUuMzMzMzMzbDIxMy4zMzMzMzMgMTI4LTIxMy4zMzMzMzMgMTI4VjI2MC45OTJhMjk4LjY2NjY2NyAyOTguNjY2NjY3IDAgMCAwLTIyMC4xMTczMzMgMTc2LjA0MjY2N0w1MTUuNzU0NjY3IDUxMmwzMi4xMjggNzQuOTY1MzMzQTI5OC42NjY2NjcgMjk4LjY2NjY2NyAwIDAgMCA3NjggNzYzLjAwOHoiIHAtaWQ9IjY2NzciIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4="
								mode=""></image>
							<!-- 2 -->
							<image v-else-if="$store.state.controlorder===2"
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMDMyMTgwODQ4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkxMDgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTE5MiA3ODkuMzMzMzMzYTIxLjI0IDIxLjI0IDAgMCAxLTEyLjgtNC4yOCAzNDQuNTEzMzMzIDM0NC41MTMzMzMgMCAwIDEtOTkuMzMzMzMzLTExOEEzNDEuMjQ2NjY3IDM0MS4yNDY2NjcgMCAwIDEgMzg0IDE3MC42NjY2NjdoMjU2cTYuMzYgMCAxMi43MzMzMzMgMC4yMzMzMzNsLTQ5LjE1MzMzMy00OS4xNDY2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAzMC4xNzMzMzMtMzAuMTczMzMzbDg1LjMzMzMzNCA4NS4zMzMzMzNhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAwIDMwLjE3MzMzNGwtODUuMzMzMzM0IDg1LjMzMzMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTMwLjE3MzMzMy0zMC4xNzMzMzNsNDguNjY2NjY3LTQ4LjY2NjY2N1E2NDYuMTI2NjY3IDIxMy4zMzMzMzMgNjQwIDIxMy4zMzMzMzNIMzg0Yy0xNjQuNjY2NjY3IDAtMjk4LjY2NjY2NyAxMzQtMjk4LjY2NjY2NyAyOTguNjY2NjY3IDAgOTQuODMzMzMzIDQzLjU0NjY2NyAxODEuOTMzMzMzIDExOS40OCAyMzguOTY2NjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMTkyIDc4OS4zMzMzMzN6IG0yMjguNDMzMzMzIDE0My4wNmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwIDAtMzAuMTczMzMzbC00OS4xNTMzMzMtNDkuMTQ2NjY3cTYuMzY2NjY3IDAuMjMzMzMzIDEyLjczMzMzMyAwLjIzMzMzNEg2NDBhMzQxLjQ2IDM0MS40NiAwIDAgMCAzMDQuMTQ2NjY3LTQ5Ni40MiAzNDQuNTEzMzMzIDM0NC41MTMzMzMgMCAwIDAtOTkuMzMzMzM0LTExOCAyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMSAwLTI1LjYyNjY2NiAzNC4xMTMzMzNDODk1LjEyIDMzMC4wNjY2NjcgOTM4LjY2NjY2NyA0MTcuMTY2NjY3IDkzOC42NjY2NjcgNTEyYzAgMTY0LjY2NjY2Ny0xMzQgMjk4LjY2NjY2Ny0yOTguNjY2NjY3IDI5OC42NjY2NjdIMzg0cS02LjEyIDAtMTIuMjQ2NjY3LTAuMjQ2NjY3bDQ4LjY2NjY2Ny00OC42NjY2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMC0zMC4xNzMzMzMtMzAuMTczMzMzbC04NS4zMzMzMzQgODUuMzMzMzMzYTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAgMCAzMC4xNzMzMzRsODUuMzMzMzM0IDg1LjMzMzMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwIDMwLjE3MzMzMyAwek01NTQuNjY2NjY3IDYxOC42NjY2NjdWNDA1LjMzMzMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTIxLjMzMzMzNC0yMS4zMzMzMzNoLTQyLjY2NjY2NmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwIDAgNDIuNjY2NjY3aDIxLjMzMzMzM3YxOTJhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCA0Mi42NjY2NjcgMHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjkxMDkiPjwvcGF0aD48L3N2Zz4="
								mode=""></image>
						</view>
						<view class="zuo" @click="presong">
							<image
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMzcxMzYzMDExIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2MjY2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik05MzAuMjQ4Nzc5IDUxLjQyMTEzNmMtMTcuMzgyOTAyLTguMzkzMTU3LTM4LjA1Njc1OC02LjEwNzA5MS01My4xOTE0NTYgNS45MjkwMzZsLTUyMi40Nzk2NzkgNDE1LjI0OTQ2OWMtMTIuMDEwNTQ1IDkuNTQ4NDctMTkuMDE2MDk5IDI0LjA1NDg1OS0xOS4wMTYwOTkgMzkuNDAyNDA1IDAgMTUuMzQ3NTQ2IDcuMDA1NTU0IDI5Ljg1MzkzNSAxOS4wMTYwOTkgMzkuNDAyNDA1bDUyMi40Nzk2NzkgNDE1LjI0OTQ2OWM5LjA4MTg0MyA3LjIxOTQyNSAyMC4xNTQwMTYgMTAuOTI5OTM0IDMxLjMyMzQwMyAxMC45Mjk5MzQgNy40MzQzMiAwIDE0LjkxNzc1OC0xLjY0NTQ3NiAyMS44NjcwMy01LjAwMDg5NyAxNy40MDAyOTktOC4zOTkyOTcgMjguNDYwMTkyLTI2LjAxNDQ5IDI4LjQ2MDE5Mi00NS4zMzE0NDFMOTU4LjcwNzk0OCA5Ni43NTI1NzhDOTU4LjcwODk3MSA3Ny40MzU2MjcgOTQ3LjY0OTA3OCA1OS44MjA0MzQgOTMwLjI0ODc3OSA1MS40MjExMzZ6TTg1OC4wNDIyNDcgODIyLjk1MzA3OCA0NjYuNzkwMzMyIDUxMi4wMDIwNDdsMzkxLjI1MTkxNS0zMTAuOTUxMDMxTDg1OC4wNDIyNDcgODIyLjk1MzA3OHpNMTc4LjU0MDMyNiAxMTcuMjA2NDIyIDE3OC41NDAzMjYgOTE2LjczMTkyOGMwIDMxLjI3NDI4NC0yNS4zNTAzNjQgNTYuNjI0NjQ4LTU2LjYyNDY0OCA1Ni42MjQ2NDgtMzEuMjc1MzA3IDAtNTYuNjI0NjQ4LTI1LjM1MDM2NC01Ni42MjQ2NDgtNTYuNjI0NjQ4TDY1LjI5MTAyOSAxMTcuMjA2NDIyYzAtMzEuMjczMjYxIDI1LjM1MDM2NC01Ni42MjQ2NDggNTYuNjI0NjQ4LTU2LjYyNDY0OEMxNTMuMTg5OTYxIDYwLjU4MTc3NCAxNzguNTQwMzI2IDg1LjkzMzE2MSAxNzguNTQwMzI2IDExNy4yMDY0MjJ6IiBwLWlkPSIxNjI2NyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg=="
								mode=""></image>
						</view>
						<view class="zhong">
							<!-- 暂停的图标 -->
							<image v-if="!player"
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMzcxMzg5MTczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NjcyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik00MjAuMzk3IDMxMC40NzNsMzA3Ljc4NiAxODMuMjA2YzIxLjk4NCAxNC42NTcgMTQuNjU3IDIxLjk4NCAwIDI5LjMxM2wtMzE1LjExNCAxOTAuNTM1Yy0yMS45ODQgMTQuNjU3LTI5LjMxMyA3LjMyOC0yOS4zMTMtMTQuNjU3di0zODEuMDY4YzAtMjEuOTg0IDE0LjY1Ny0yMS45ODQgMzYuNjQxLTcuMzI4ek00NDkuNzEgMjY2LjUwM2wzMDcuNzg2IDE4My4yMDZjNTEuMjk4IDM2LjY0MSA1MS4yOTggODcuOTM5IDAgMTE3LjI1MnYwbC0zMTUuMTE0IDE5MC41MzVjLTIxLjk4NCAxNC42NTctNTEuMjk4IDIxLjk4NC04MC42MTEgNy4zMjgtMjEuOTg0LTE0LjY1Ny0yOS4zMTMtMzYuNjQxLTI5LjMxMy02NS45NTR2LTM4MS4wNjhjMC0yMS45ODQgNy4zMjgtNDMuOTcgMjkuMzEzLTU4LjYyNiAyOS4zMTMtMTQuNjU3IDU4LjYyNi03LjMyOCA4Ny45MzkgNy4zMjh6TTUwOC4zMzYgMzJjLTI2My44MTcgMC00NzYuMzM2IDIxMi41MTktNDc2LjMzNiA0NzYuMzM2czIxMi41MTkgNDgzLjY2NCA0NzYuMzM2IDQ4My42NjRjMjYzLjgxNyAwIDQ4My42NjQtMjE5Ljg0OCA0ODMuNjY0LTQ4My42NjQgMC0yNjMuODE3LTIxOS44NDgtNDc2LjMzNi00ODMuNjY0LTQ3Ni4zMzZ2MHoiIHAtaWQ9IjE2NjczIiBmaWxsPSIjMmMyYzJjIj48L3BhdGg+PC9zdmc+"
								mode="" class="zhong-img"></image>
							<!-- 播放的图标 -->
							<image v-else
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMzcxNDA1NjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2OTIzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik01MTIgMEMyMjkuMjI3MTY4IDAgMCAyMjkuMjI3MTY4IDAgNTEyczIyOS4yMjcxNjggNTEyIDUxMiA1MTJTMTAyNCA3OTQuNzcyODMyIDEwMjQgNTEyIDc5NC43NzI4MzIgMCA1MTIgMHogbS02MC44MzE1NDYgNzA0Ljc0MjE0NWMwIDM0LjE5MDgwNS0yNS4wMjc4MzYgNjIuMTgwMjY4LTU1LjYxNzQxMyA2Mi4xODAyNjhzLTU1LjYxNzQxMy0yNy45NzU1NTktNTUuNjE3NDEzLTYyLjE4MDI2OFYzMTkuMjU3ODU1YzAtMzQuMTkwODA1IDI1LjAyNzgzNi02Mi4xODAyNjggNTUuNjE3NDEzLTYyLjE4MDI2OHM1NS42MTc0MTMgMjcuOTc1NTU5IDU1LjYxNzQxMyA2Mi4xODAyNjh6IG0yMjUuOTQ1NzQxIDBjMCAzNC4xOTA4MDUtMjUuMDI3ODM2IDYyLjE4MDI2OC01NS42MTc0MTMgNjIuMTgwMjY4cy01NS42MTc0MTMtMjcuOTc1NTU5LTU1LjYxNzQxMy02Mi4xODAyNjhWMzE5LjI1Nzg1NWMwLTM0LjE5MDgwNSAyNS4wMjc4MzYtNjIuMTgwMjY4IDU1LjYxNzQxMy02Mi4xODAyNjhzNTUuNjE3NDEzIDI3Ljk3NTU1OSA1NS42MTc0MTMgNjIuMTgwMjY4eiIgcC1pZD0iMTY5MjQiIGZpbGw9IiMyYzJjMmMiPjwvcGF0aD48L3N2Zz4="
								mode="" class="zhong-img"></image>
						</view>
						<view class="you" @click="nextsong">
							<image
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMzcxMzcyNDI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NDY5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik02ODMuODE2MTgxIDQ3MS44NTQ2NzUgMTQ3Ljg4OTIzNSA1MC42NzkyMzljLTE1LjM3NDE1Mi0xMi4wODQyMjMtMzYuMjc2MjA1LTE0LjMyMTE3LTUzLjg2Mjc0NS01Ljc3NjU2M0M3Ni40NTEyMDYgNTMuNDQ2MjU5IDY1LjI5MDAwNSA3MS4yNzYzNDcgNjUuMjkwMDA1IDkwLjgxOTQ0OGwwIDg0Mi4zNjQxNzNjMCAxOS41NDMxMDIgMTEuMTYxMjAxIDM3LjM3MzE4OSAyOC43MzU0NjEgNDUuOTE2NzcyIDcuMDkxNTEyIDMuNDQ3NTE5IDE0LjcxOTIzNiA1LjEzNTk3NCAyMi4zMTAxMjIgNS4xMzU5NzQgMTEuMjM2OTI1IDAgMjIuMzc4NjgzLTMuNzA3NDM4IDMxLjU1MjYyMy0xMC45MTI1MzdsNTM1LjkyNjk0Ni00MjEuMTg4NzM4YzEyLjMxNTQ5LTkuNjc4NDMgMTkuNTA2MjYzLTI0LjQ3ODUwOCAxOS41MDYyNjMtNDAuMTQwMjA5QzcwMy4zMjE0MiA0OTYuMzI4MDY2IDY5Ni4xMzA2NDcgNDgxLjUzMzEwNSA2ODMuODE2MTgxIDQ3MS44NTQ2NzV6TTE2Ny4zOTU0OTggODI4LjEzMTAwN2wwLTYzMi4yNTk5NjggNDAyLjI1MDQxIDMxNi4xMjM4NDRMMTY3LjM5NTQ5OCA4MjguMTMxMDA3ek05NTguNzA4OTcxIDExMS41NjU5NThsMCA4MTAuOTQyNTMzYzAgMzEuNzIwNDQ2LTI1LjcxMjYxNSA1Ny40MzQwODQtNTcuNDM0MDg0IDU3LjQzNDA4NC0zMS43MjE0NjkgMC01Ny40MzQwODQtMjUuNzEzNjM4LTU3LjQzNDA4NC01Ny40MzQwODRMODQzLjg0MDgwNCAxMTEuNTY1OTU4YzAtMzEuNzIxNDY5IDI1LjcxMjYxNS01Ny40MzQwODQgNTcuNDM0MDg0LTU3LjQzNDA4NEM5MzIuOTk2MzU2IDU0LjEzMTg3NSA5NTguNzA4OTcxIDc5Ljg0NDQ4OSA5NTguNzA4OTcxIDExMS41NjU5NTh6IiBwLWlkPSIxNjQ3MCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg=="
								mode=""></image>
						</view>
						<view class="later-you">
							<image
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxNjMzNjUwOTMzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0ODUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiAxNDkuMzMzMzMzYTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjEuMzMzMzMzLTIxLjMzMzMzM2g0MjYuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMCA0Mi42NjY2NjdINTMzLjMzMzMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTIxLjMzMzMzMy0yMS4zMzMzMzR6TTY0IDU1NC42NjY2NjdoODk2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAgMC00Mi42NjY2NjdINjRhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCAwIDQyLjY2NjY2N3ogbTg5NiAzNDEuMzMzMzMzSDY0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAgMCA0Mi42NjY2NjdoODk2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAgMC00Mi42NjY2Njd6TTQ2OS4zMzMzMzMgMTY0LjU3MzMzM2MwIDI5LjA0NjY2Ny0yLjM4IDU2LjI5MzMzMy0zMS42NCA5NS42NTMzMzQtMjYuNzg2NjY3IDM2LTc1LjQyNjY2NyA4Mi43OC0xNjcuODggMTYxLjMzMzMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTI3LjYyNjY2NiAwYy05Mi40NTMzMzMtNzguNTgtMTQxLjA5MzMzMy0xMjUuMzMzMzMzLTE2Ny44OC0xNjEuMzMzMzMzQzQ1LjA0NjY2NyAyMjAuODY2NjY3IDQyLjY2NjY2NyAxOTMuNjIgNDIuNjY2NjY3IDE2NC41NzMzMzMgNDIuNjY2NjY3IDk3LjMzMzMzMyA5Ny4zMzMzMzMgNDIuNjY2NjY3IDE2NC41NzMzMzMgNDIuNjY2NjY3QTEyMS44NjY2NjcgMTIxLjg2NjY2NyAwIDAgMSAyNTYgODMuOTIgMTIxLjg2NjY2NyAxMjEuODY2NjY3IDAgMCAxIDM0Ny40MjY2NjcgNDIuNjY2NjY3QzQxNC42NjY2NjcgNDIuNjY2NjY3IDQ2OS4zMzMzMzMgOTcuMzMzMzMzIDQ2OS4zMzMzMzMgMTY0LjU3MzMzM3ogbS00Mi42NjY2NjYgMGE3OS4yNTMzMzMgNzkuMjUzMzMzIDAgMCAwLTE1MS4yOC0zMy4wNDY2NjYgMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMS0zOC43NzMzMzQgMEE3OS4yNTMzMzMgNzkuMjUzMzMzIDAgMCAwIDg1LjMzMzMzMyAxNjQuNTczMzMzYzAgMjQuMjQ2NjY3IDEuNTYgNDEuMDY2NjY3IDIzLjIxMzMzNCA3MC4xOTMzMzRDMTMxLjY1MzMzMyAyNjUuODQgMTc2LjEwNjY2NyAzMDguODYgMjU2IDM3Ny4yOTMzMzNjNzkuODkzMzMzLTY4LjQzMzMzMyAxMjQuMzQ2NjY3LTExMS40NTMzMzMgMTQ3LjQ1MzMzMy0xNDIuNTI2NjY2QzQyNS4xMDY2NjcgMjA1LjY0IDQyNi42NjY2NjcgMTg4LjgyIDQyNi42NjY2NjcgMTY0LjU3MzMzM3oiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjI0ODYiPjwvcGF0aD48L3N2Zz4="
								mode=""></image>
						</view>
					</view>
				</div>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//控制爱心
				flag: false,
				//播放图标的开关
				player: false,
				//偏移量
				offset: 1,
				//判断到底创建不创建
				id1: '',
				//TODO完成播放细致的修改
			}
		},
		async mounted() {
			this.prelocaldata()
			//第一次加载
			await this.betterhttp(this.$store.state.playerinfo)
			this.createMusic()
		},
		methods: {
			//判断是否创建音频上下文
			prelocaldata() {
				if (uni.getStorageSync('currentsonginfo')) {
					const res = JSON.parse(uni.getStorageSync('currentsonginfo'))
					this.id1 = res.majorKey
				} else {
					const res = uni.getStorageSync('currentsonginfo')
					this.id1 = res.majorKey
				}
			},
			//创建音频上下文的逻辑
			createMusic() {
				//判断是否创建音频上下文
				if (this.id1 !== this.$store.state.key) {
					this.musicplayer()
				} else {
					if (this.$store.state.ordernumkey == 0) {
						this.$store.state.music = uni.createInnerAudioContext()
						this.$store.state.music.autoplay = true
						this.$store.state.music.src = this.$store.state.rscurrentsonginfo.url
						//音频开始播放事件
						this.$store.state.music.onPlay(() => {
							console.log('开始播放');
						});
						//音频自然结束事件
						this.$store.state.music.onEnded(() => {
							this.player = false
						})
						this.$store.state.ordernumkey += 1
					}
					this.player = true
					console.log('不创建');
				}
			},
			musicplayer() {
				if (this.$store.state.music) {
					this.$store.state.music.pause()
					this.$store.state.music.destroy()
					this.player = true
				}
				this.$store.state.music = uni.createInnerAudioContext()
				this.$store.state.music.autoplay = true
				this.$store.state.music.src = this.$store.state.rscurrentsonginfo.url
				//音频开始播放事件
				this.$store.state.music.onPlay(() => {
					console.log('开始播放');
				});
				//音频自然结束事件
				this.$store.state.music.onEnded(() => {
					this.player = false
				})
			},
			//控制播放顺序  顺序0，随机1，循环2
			changeorder() {
				this.$store.state.controlorder += 1
				if (this.$store.state.controlorder > 2) {
					this.$store.state.controlorder = 0
				}
			},
			//控制爱心
			aixin() {
				this.flag = !this.flag
			},
			//一次滑动结束时候
			slidered(e) {
				console.log(e);
			},
			//获得当前id歌曲的全部信息
			async getcurrentinfo(id) {
				await this.songinfo(id)
			},
			//歌词初始化
			async initlyric(e) {
				const gecidata = []
				e.split(']')
					.toString()
					.split(',')
					.toString()
					.split('\n')
					.forEach((item) => {
						let wordandtime = item.split(',')
						if (wordandtime[1] === '') {
							wordandtime[1] = 'Music~~~'
						}
						if (wordandtime[0] === '') {
							wordandtime[0] = '[00:00.00'
							wordandtime[1] = 'Music~~~'
						}
						//歌曲歌词
						const word = wordandtime[1]
						const s = wordandtime[0].substr(1).split(':')
						const ms2 = Math.floor(s[1] * 1000)
						const ms1 = s[0] * 60 * 1000
						//歌曲歌词对应时间
						const time = ms1 + ms2

						const obj = {
							time: time,
							word: word
						}
						gecidata.push(obj)
					})
				await this.$store.commit('INITLYRIC', gecidata)
			},
			//整合资源
			resource(obj) {
				this.$store.state.userselectsong.forEach((item, index) => {
					if (item.id === obj.id) {
						const source = {
							majorKey: index,
							id: item.id,
							author: item.ar[0].name,
							songname: item.name,
							pic: item.al.picUrl,
							lyric: this.$store.state.initedlyric,
							url: this.$store.state.currentsongURL
						}
						this.$store.commit('RSSONGINFO', source)
					}
				})
			},
			//得到当前歌曲信息的关键抽离函数
			async songinfo(id) {
				const obj = {
					shili: this,
					id: id
				}
				//歌曲歌词
				await this.$store.dispatch('getlyric', obj)
				//歌曲url
				await this.$store.dispatch('getsongurl', obj)
				//歌词初始化
				await this.initlyric(this.$store.state.currentlyric)
				//整合当前歌曲的资源
				const obj2 = {
					id: id
				}
				await this.resource(obj2)
				let data = JSON.stringify(this.$store.state.rscurrentsonginfo)
				uni.setStorageSync('currentsonginfo', data)
			},
			// 下一首
			async nextsong() {
				if (this.$store.state.controlorder === 0 || this.$store.state.controlorder === 2) {
					await this.nextid()
				} else {
					await this.randomnextid()
				}
				this.betterhttp(this.$store.state.currentid)
			},
			// 获得顺序和循环状态下的下一首id
			async nextid() {
				let num = this.$store.state.key += 1
				if (num >= this.$store.state.userselectsong.length) {
					const data = {
						name: this.$store.state.userIpt,
						index: this.offset,
						shili: this
					}
					await this.$store.dispatch('pushsongs', data)
					//这里有问题会莫名报错
					await this.$store.commit('SAVECURRENTID', this.$store.state.userselectsong[
						num].id)
				} else {
					this.$store.state.userselectsong.forEach(async (item, index) => {
						if (index === this.$store.state.key) {
							await this.$store.commit('SAVECURRENTID', this.$store
								.state.userselectsong[num]
								.id)
						}
					})
				}
			},
			// 获得随机状态下的下一首id
			randomnextid() {
				const randomnum = this.getRandomIntInclusive(0, 19)
				this.$store.state.userselectsong.forEach(async (song, index) => {
					if (index === randomnum) {
						await this.$store.commit('SAVECURRENTID', song.id)
					}
				})
			},
			//上一首
			async presong() {
				await this.presongid()
				this.betterhttp(this.$store.state.currentid)
			},
			//获得上一首的id
			async presongid() {
				let num = this.$store.state.key -= 1
				if (num <= 0) {
					num = 0
					this.$store.state.key = 0
					await this.$store.commit('SAVECURRENTID', this.$store.state
						.userselectsong[0].id)
				} else {
					this.$store.state.userselectsong.forEach(async (item, index) => {
						if (index === this.$store.state.key) {
							await this.$store.commit('SAVECURRENTID', this
								.$store.state.userselectsong[num]
								.id)
						}
					})
				}
			},
			// 减少请求
			async betterhttp(id) {
				if (uni.getStorageSync('currentsonginfo')) {
					const res = JSON.parse(uni.getStorageSync('currentsonginfo'))
					const flag = res.majorKey
					if (flag == this.$store.state.key) {
						this.$store.state.rscurrentsonginfo = res
					} else {
						await this.getcurrentinfo(id)
					}
				} else {
					const res = uni.getStorageSync('currentsonginfo')
					const flag = res.majorKey
					if (flag == this.$store.state.key) {
						this.$store.state.rscurrentsonginfo = res
					} else {
						await this.getcurrentinfo(id)
					}
				}

			},
			//得到一个两数之间的随机整数，包括两个数在内
			getRandomIntInclusive(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) +
					min; //含最大值，含最小值
			}

		}

	}
</script>

<style lang="less" scoped>
	.page {
		width: 100%;
		height: 100vh;
		background-color: #15161d;
		touch-action: none;
	}

	image {
		width: 100%;
		height: 100%;
		transform: scale(.7);
	}

	.title {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		// height: 100rpx;
		text-align: center;
		color: aliceblue;
		padding-left: 100rpx;
		padding-right: 100rpx;
		box-sizing: border-box;

		.top {
			// height: 54rpx;
			// line-height: 54rpx;
			font-size: 30rpx;
			font-weight: 900;
		}

		.bottom2 {
			height: 46rpx;
			font-size: 26rpx;
			color: aqua;
			line-height: 46rpx;
		}
	}

	.song {
		position: relative;
		width: 100%;
		height: 1100rpx;
		box-sizing: border-box;
		padding-left: 100rpx;
		padding-right: 100rpx;
		margin-top: 116rpx;
		overflow: auto;

		.li-song {
			position: absolute;
			top: 2rpx;
			left: 0;
			width: 100%;
			height: 94%;
			word-break: break-all;
			letter-spacing: 3rpx;
			padding: 104rpx;
			box-sizing: border-box;
			font-size: 32rpx;


			.li {
				width: 100%;
				min-height: 78rpx;
				text-align: center;
				color: #575C57;
				margin-top: 16rpx;
				transition: all, .2s;
			}
		}
	}

	.footer {
		display: flex;
		flex-direction: column;
		position: fixed;
		bottom: 0rpx;
		left: 0;
		width: 100%;
		height: 355rpx;
		// background-color: #fff;

		.top {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 160rpx;
			box-sizing: border-box;
			padding-left: 40rpx;
			padding-right: 40rpx;

			.top2 {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 110rpx;

				.top2-zuo {
					width: 102rpx;
					height: 102rpx;
					border-radius: 50%;

					.avater {
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 50%;
					}
				}

				.zhong {
					display: flex;
					flex-direction: column;
					justify-content: left;
					flex: 1;
					height: 80rpx;
					box-sizing: border-box;
					margin-right: 40rpx;
					line-height: 40rpx;

					.top1 {
						height: 50%;
						font-size: 32rpx;
						font-weight: 700;
						color: rgb(0, 0, 0);
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						width: 80%;
						color: #fff;
					}

					.bottom1 {
						height: 50%;
						font-size: 24rpx;
						font-weight: 400;
						color: #fff;
					}
				}

				.you {
					width: 40rpx;
					height: 40rpx;
					line-height: 40rpx;
					margin-right: 60rpx;

					image {
						width: 100%;
						height: 100%;
						transform: scale(1);
					}
				}
			}

			.bottom {
				display: flex;
				align-items: center;
				width: 100%;
				height: 50rpx;

				.bottom-jindutiao {
					position: relative;
					width: 95%;
					margin: auto;

					.btm-zuo {
						position: absolute;
						top: 22rpx;
						left: -24rpx;
						font-size: 24rpx;
						color: #5C5C5C;

						span {
							display: block;
							font-size: 20rpx;
							transform: scale(.9);
						}
					}

					.btm-you {
						position: absolute;
						top: 24rpx;
						right: -20rpx;
						font-size: 24rpx;
						color: #5C5C5C;

						span {
							display: block;
							font-size: 20rpx;
							transform: scale(.9);
						}
					}
				}
			}
		}

		.bottom {
			height: 160rpx;

			.anniu {
				height: 160rpx;
				box-sizing: border-box;
				padding-left: 80rpx;
				padding-right: 80rpx;

				.li-anniu {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 95%;
					height: 100%;

					.pre-zuo {
						width: 60rpx;
						height: 60rpx;
					}

					.zuo {
						width: 60rpx;
						height: 60rpx;
					}

					.zhong {
						width: 160rpx;
						height: 160rpx;
					}

					.you {
						width: 60rpx;
						height: 60rpx;
					}

					.later-you {
						width: 60rpx;
						height: 60rpx;
					}
				}
			}
		}
	}

	.aixindonghua {
		transition: all, 0.3s;
		animation: aixinde 1s 1;
	}

	@keyframes aixinde {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(1.2);
		}
	}

	//正在播放的歌词样式
	.playimg {
		font-size: 38rpx;
		color: #fff !important;
	}

	.slider {
		width: 88%;
		margin: 20rpx auto;
	}
</style>