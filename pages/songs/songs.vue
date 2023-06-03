<template>
	<view class="song">
		<!-- 遮罩 -->
		<view class="mask">
			<uni-nav-bar :border="false" background-color="rgba(21, 13, 13)"></uni-nav-bar>
			<!-- top -->
			<view class="top">
				<view class="zuo" @click="back"><uni-icons type="back" size="24" color="rgb(255, 255, 255)"></uni-icons>
				</view>
				<view class="zhong">这就是爱</view>
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
			<!-- 头像 -->
			<view class="avater">
				<view class="yuan">
					<view class="yuan-li"></view>
				</view>
				<view class="liavater1"></view>
				<view class="liavater2">
					<view class="liavater3">
						<image class="avater-zhen" src="http://source.ziyuan.site/avater.jpg" mode=""></image>
					</view>
				</view>
			</view>
			<!-- 播放设置 -->
			<view class="setting">
				<view class="setting-zuo" @click="orderzhen = !orderzhen">
					<!-- 随即图标 -->
					<image v-if="orderzhen"
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMDMyMDc0OTE2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY2NzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc2OCA3NjMuMDA4VjY4Mi42NjY2NjdsMjEzLjMzMzMzMyAxMjgtMjEzLjMzMzMzMyAxMjh2LTg5LjE3MzMzNGEzODQgMzg0IDAgMCAxLTI5OC41Mzg2NjctMjI4LjkwNjY2Nkw0NjkuMzMzMzMzIDYyMC4zNzMzMzNsLTAuMTI4IDAuMjU2QTM4NCAzODQgMCAwIDEgMTE2LjI2NjY2NyA4NTMuMzMzMzMzSDg1LjMzMzMzM3YtODUuMzMzMzMzaDMwLjkzMzMzNGEyOTguNjY2NjY3IDI5OC42NjY2NjcgMCAwIDAgMjc0LjUxNzMzMy0xODEuMDM0NjY3TDQyMi45MTIgNTEybC0zMi4xMjgtNzQuOTY1MzMzQTI5OC42NjY2NjcgMjk4LjY2NjY2NyAwIDAgMCAxMTYuMjY2NjY3IDI1Nkg4NS4zMzMzMzNWMTcwLjY2NjY2N2gzMC45MzMzMzRhMzg0IDM4NCAwIDAgMSAzNTIuOTM4NjY2IDIzMi43NDY2NjZMNDY5LjMzMzMzMyA0MDMuNjI2NjY3bDAuMTI4LTAuMjU2QTM4NCAzODQgMCAwIDEgNzY4IDE3NC41MDY2NjdWODUuMzMzMzMzbDIxMy4zMzMzMzMgMTI4LTIxMy4zMzMzMzMgMTI4VjI2MC45OTJhMjk4LjY2NjY2NyAyOTguNjY2NjY3IDAgMCAwLTIyMC4xMTczMzMgMTc2LjA0MjY2N0w1MTUuNzU0NjY3IDUxMmwzMi4xMjggNzQuOTY1MzMzQTI5OC42NjY2NjcgMjk4LjY2NjY2NyAwIDAgMCA3NjggNzYzLjAwOHoiIHAtaWQ9IjY2NzciIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4="
						mode=""></image>
					<!-- 顺序图标 -->
					<image v-else
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMDMyMTIxNjg0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc3ODgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTcyNS4zMzMzMzMgMTcwLjY2NjY2N1Y4OC4yMzQ2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAzNC45ODY2NjctMTYuNDI2NjY3bDE3NS43ODY2NjcgMTQ2LjQ3NDY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTEzLjY5NiAzNy43MTczMzNIODUuMzMzMzMzVjE3MC42NjY2NjdoNjQwek04NS4zMzMzMzMgNzY4aDg1My4zMzMzMzR2ODUuMzMzMzMzSDg1LjMzMzMzM3YtODUuMzMzMzMzeiBtMC0yOTguNjY2NjY3aDg1My4zMzMzMzR2ODUuMzMzMzM0SDg1LjMzMzMzM3YtODUuMzMzMzM0eiIgcC1pZD0iNzc4OSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg=="
						mode=""></image>
				</view>
				<view class="setting-zhong">
					<view class="lunbo1" @click="showsong">
						<view class="lunbo-shang">66666666666666</view>
						<view class="lunbo-shang">66666666666666</view>
						<view class="lunbo-shang">66666666666666</view>
						<view class="lunbo-shang">66666666666666</view>
						<view class="lunbo-shang">66666666666666</view>
						<view class="lunbo-shang">66666666666666</view>
						<view class="lunbo-shang">66666666666666</view>
					</view>
					<view class="lunbo2">222222</view>
				</view>
				<view class="setting-you">
					<image
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMDMyMTgwODQ4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkxMDgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTE5MiA3ODkuMzMzMzMzYTIxLjI0IDIxLjI0IDAgMCAxLTEyLjgtNC4yOCAzNDQuNTEzMzMzIDM0NC41MTMzMzMgMCAwIDEtOTkuMzMzMzMzLTExOEEzNDEuMjQ2NjY3IDM0MS4yNDY2NjcgMCAwIDEgMzg0IDE3MC42NjY2NjdoMjU2cTYuMzYgMCAxMi43MzMzMzMgMC4yMzMzMzNsLTQ5LjE1MzMzMy00OS4xNDY2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAzMC4xNzMzMzMtMzAuMTczMzMzbDg1LjMzMzMzNCA4NS4zMzMzMzNhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMSAwIDMwLjE3MzMzNGwtODUuMzMzMzM0IDg1LjMzMzMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTMwLjE3MzMzMy0zMC4xNzMzMzNsNDguNjY2NjY3LTQ4LjY2NjY2N1E2NDYuMTI2NjY3IDIxMy4zMzMzMzMgNjQwIDIxMy4zMzMzMzNIMzg0Yy0xNjQuNjY2NjY3IDAtMjk4LjY2NjY2NyAxMzQtMjk4LjY2NjY2NyAyOTguNjY2NjY3IDAgOTQuODMzMzMzIDQzLjU0NjY2NyAxODEuOTMzMzMzIDExOS40OCAyMzguOTY2NjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMTkyIDc4OS4zMzMzMzN6IG0yMjguNDMzMzMzIDE0My4wNmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwIDAtMzAuMTczMzMzbC00OS4xNTMzMzMtNDkuMTQ2NjY3cTYuMzY2NjY3IDAuMjMzMzMzIDEyLjczMzMzMyAwLjIzMzMzNEg2NDBhMzQxLjQ2IDM0MS40NiAwIDAgMCAzMDQuMTQ2NjY3LTQ5Ni40MiAzNDQuNTEzMzMzIDM0NC41MTMzMzMgMCAwIDAtOTkuMzMzMzM0LTExOCAyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMSAwLTI1LjYyNjY2NiAzNC4xMTMzMzNDODk1LjEyIDMzMC4wNjY2NjcgOTM4LjY2NjY2NyA0MTcuMTY2NjY3IDkzOC42NjY2NjcgNTEyYzAgMTY0LjY2NjY2Ny0xMzQgMjk4LjY2NjY2Ny0yOTguNjY2NjY3IDI5OC42NjY2NjdIMzg0cS02LjEyIDAtMTIuMjQ2NjY3LTAuMjQ2NjY3bDQ4LjY2NjY2Ny00OC42NjY2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMC0zMC4xNzMzMzMtMzAuMTczMzMzbC04NS4zMzMzMzQgODUuMzMzMzMzYTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAgMCAzMC4xNzMzMzRsODUuMzMzMzM0IDg1LjMzMzMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwIDMwLjE3MzMzMyAwek01NTQuNjY2NjY3IDYxOC42NjY2NjdWNDA1LjMzMzMzM2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTIxLjMzMzMzNC0yMS4zMzMzMzNoLTQyLjY2NjY2NmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwIDAgNDIuNjY2NjY3aDIxLjMzMzMzM3YxOTJhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMCA0Mi42NjY2NjcgMHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjkxMDkiPjwvcGF0aD48L3N2Zz4="
						mode=""></image>
				</view>
			</view>
			<!-- 音乐调节 -->
			<view class="tiaojie">
				<view class="zuo">
					<view class="zuo-img">
						<image
							src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMzcxMzYzMDExIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2MjY2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik05MzAuMjQ4Nzc5IDUxLjQyMTEzNmMtMTcuMzgyOTAyLTguMzkzMTU3LTM4LjA1Njc1OC02LjEwNzA5MS01My4xOTE0NTYgNS45MjkwMzZsLTUyMi40Nzk2NzkgNDE1LjI0OTQ2OWMtMTIuMDEwNTQ1IDkuNTQ4NDctMTkuMDE2MDk5IDI0LjA1NDg1OS0xOS4wMTYwOTkgMzkuNDAyNDA1IDAgMTUuMzQ3NTQ2IDcuMDA1NTU0IDI5Ljg1MzkzNSAxOS4wMTYwOTkgMzkuNDAyNDA1bDUyMi40Nzk2NzkgNDE1LjI0OTQ2OWM5LjA4MTg0MyA3LjIxOTQyNSAyMC4xNTQwMTYgMTAuOTI5OTM0IDMxLjMyMzQwMyAxMC45Mjk5MzQgNy40MzQzMiAwIDE0LjkxNzc1OC0xLjY0NTQ3NiAyMS44NjcwMy01LjAwMDg5NyAxNy40MDAyOTktOC4zOTkyOTcgMjguNDYwMTkyLTI2LjAxNDQ5IDI4LjQ2MDE5Mi00NS4zMzE0NDFMOTU4LjcwNzk0OCA5Ni43NTI1NzhDOTU4LjcwODk3MSA3Ny40MzU2MjcgOTQ3LjY0OTA3OCA1OS44MjA0MzQgOTMwLjI0ODc3OSA1MS40MjExMzZ6TTg1OC4wNDIyNDcgODIyLjk1MzA3OCA0NjYuNzkwMzMyIDUxMi4wMDIwNDdsMzkxLjI1MTkxNS0zMTAuOTUxMDMxTDg1OC4wNDIyNDcgODIyLjk1MzA3OHpNMTc4LjU0MDMyNiAxMTcuMjA2NDIyIDE3OC41NDAzMjYgOTE2LjczMTkyOGMwIDMxLjI3NDI4NC0yNS4zNTAzNjQgNTYuNjI0NjQ4LTU2LjYyNDY0OCA1Ni42MjQ2NDgtMzEuMjc1MzA3IDAtNTYuNjI0NjQ4LTI1LjM1MDM2NC01Ni42MjQ2NDgtNTYuNjI0NjQ4TDY1LjI5MTAyOSAxMTcuMjA2NDIyYzAtMzEuMjczMjYxIDI1LjM1MDM2NC01Ni42MjQ2NDggNTYuNjI0NjQ4LTU2LjYyNDY0OEMxNTMuMTg5OTYxIDYwLjU4MTc3NCAxNzguNTQwMzI2IDg1LjkzMzE2MSAxNzguNTQwMzI2IDExNy4yMDY0MjJ6IiBwLWlkPSIxNjI2NyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg=="
							mode=""></image>
					</view>
				</view>
				<view class="zhong" @click="player = !player">
					<!-- 暂停的图标 -->
					<image v-if="!player"
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMzcxMzg5MTczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NjcyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik00MjAuMzk3IDMxMC40NzNsMzA3Ljc4NiAxODMuMjA2YzIxLjk4NCAxNC42NTcgMTQuNjU3IDIxLjk4NCAwIDI5LjMxM2wtMzE1LjExNCAxOTAuNTM1Yy0yMS45ODQgMTQuNjU3LTI5LjMxMyA3LjMyOC0yOS4zMTMtMTQuNjU3di0zODEuMDY4YzAtMjEuOTg0IDE0LjY1Ny0yMS45ODQgMzYuNjQxLTcuMzI4ek00NDkuNzEgMjY2LjUwM2wzMDcuNzg2IDE4My4yMDZjNTEuMjk4IDM2LjY0MSA1MS4yOTggODcuOTM5IDAgMTE3LjI1MnYwbC0zMTUuMTE0IDE5MC41MzVjLTIxLjk4NCAxNC42NTctNTEuMjk4IDIxLjk4NC04MC42MTEgNy4zMjgtMjEuOTg0LTE0LjY1Ny0yOS4zMTMtMzYuNjQxLTI5LjMxMy02NS45NTR2LTM4MS4wNjhjMC0yMS45ODQgNy4zMjgtNDMuOTcgMjkuMzEzLTU4LjYyNiAyOS4zMTMtMTQuNjU3IDU4LjYyNi03LjMyOCA4Ny45MzkgNy4zMjh6TTUwOC4zMzYgMzJjLTI2My44MTcgMC00NzYuMzM2IDIxMi41MTktNDc2LjMzNiA0NzYuMzM2czIxMi41MTkgNDgzLjY2NCA0NzYuMzM2IDQ4My42NjRjMjYzLjgxNyAwIDQ4My42NjQtMjE5Ljg0OCA0ODMuNjY0LTQ4My42NjQgMC0yNjMuODE3LTIxOS44NDgtNDc2LjMzNi00ODMuNjY0LTQ3Ni4zMzZ2MHoiIHAtaWQ9IjE2NjczIiBmaWxsPSIjMmMyYzJjIj48L3BhdGg+PC9zdmc+"
						mode="" class="zhong-img"></image>
					<!-- 播放的图标 -->
					<image v-else
						src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMzcxNDA1NjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2OTIzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik01MTIgMEMyMjkuMjI3MTY4IDAgMCAyMjkuMjI3MTY4IDAgNTEyczIyOS4yMjcxNjggNTEyIDUxMiA1MTJTMTAyNCA3OTQuNzcyODMyIDEwMjQgNTEyIDc5NC43NzI4MzIgMCA1MTIgMHogbS02MC44MzE1NDYgNzA0Ljc0MjE0NWMwIDM0LjE5MDgwNS0yNS4wMjc4MzYgNjIuMTgwMjY4LTU1LjYxNzQxMyA2Mi4xODAyNjhzLTU1LjYxNzQxMy0yNy45NzU1NTktNTUuNjE3NDEzLTYyLjE4MDI2OFYzMTkuMjU3ODU1YzAtMzQuMTkwODA1IDI1LjAyNzgzNi02Mi4xODAyNjggNTUuNjE3NDEzLTYyLjE4MDI2OHM1NS42MTc0MTMgMjcuOTc1NTU5IDU1LjYxNzQxMyA2Mi4xODAyNjh6IG0yMjUuOTQ1NzQxIDBjMCAzNC4xOTA4MDUtMjUuMDI3ODM2IDYyLjE4MDI2OC01NS42MTc0MTMgNjIuMTgwMjY4cy01NS42MTc0MTMtMjcuOTc1NTU5LTU1LjYxNzQxMy02Mi4xODAyNjhWMzE5LjI1Nzg1NWMwLTM0LjE5MDgwNSAyNS4wMjc4MzYtNjIuMTgwMjY4IDU1LjYxNzQxMy02Mi4xODAyNjhzNTUuNjE3NDEzIDI3Ljk3NTU1OSA1NS42MTc0MTMgNjIuMTgwMjY4eiIgcC1pZD0iMTY5MjQiIGZpbGw9IiMyYzJjMmMiPjwvcGF0aD48L3N2Zz4="
						mode="" class="zhong-img"></image>
				</view>
				<view class="you">
					<view class="you-img">
						<image
							src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgxMzcxMzcyNDI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NDY5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik02ODMuODE2MTgxIDQ3MS44NTQ2NzUgMTQ3Ljg4OTIzNSA1MC42NzkyMzljLTE1LjM3NDE1Mi0xMi4wODQyMjMtMzYuMjc2MjA1LTE0LjMyMTE3LTUzLjg2Mjc0NS01Ljc3NjU2M0M3Ni40NTEyMDYgNTMuNDQ2MjU5IDY1LjI5MDAwNSA3MS4yNzYzNDcgNjUuMjkwMDA1IDkwLjgxOTQ0OGwwIDg0Mi4zNjQxNzNjMCAxOS41NDMxMDIgMTEuMTYxMjAxIDM3LjM3MzE4OSAyOC43MzU0NjEgNDUuOTE2NzcyIDcuMDkxNTEyIDMuNDQ3NTE5IDE0LjcxOTIzNiA1LjEzNTk3NCAyMi4zMTAxMjIgNS4xMzU5NzQgMTEuMjM2OTI1IDAgMjIuMzc4NjgzLTMuNzA3NDM4IDMxLjU1MjYyMy0xMC45MTI1MzdsNTM1LjkyNjk0Ni00MjEuMTg4NzM4YzEyLjMxNTQ5LTkuNjc4NDMgMTkuNTA2MjYzLTI0LjQ3ODUwOCAxOS41MDYyNjMtNDAuMTQwMjA5QzcwMy4zMjE0MiA0OTYuMzI4MDY2IDY5Ni4xMzA2NDcgNDgxLjUzMzEwNSA2ODMuODE2MTgxIDQ3MS44NTQ2NzV6TTE2Ny4zOTU0OTggODI4LjEzMTAwN2wwLTYzMi4yNTk5NjggNDAyLjI1MDQxIDMxNi4xMjM4NDRMMTY3LjM5NTQ5OCA4MjguMTMxMDA3ek05NTguNzA4OTcxIDExMS41NjU5NThsMCA4MTAuOTQyNTMzYzAgMzEuNzIwNDQ2LTI1LjcxMjYxNSA1Ny40MzQwODQtNTcuNDM0MDg0IDU3LjQzNDA4NC0zMS43MjE0NjkgMC01Ny40MzQwODQtMjUuNzEzNjM4LTU3LjQzNDA4NC01Ny40MzQwODRMODQzLjg0MDgwNCAxMTEuNTY1OTU4YzAtMzEuNzIxNDY5IDI1LjcxMjYxNS01Ny40MzQwODQgNTcuNDM0MDg0LTU3LjQzNDA4NEM5MzIuOTk2MzU2IDU0LjEzMTg3NSA5NTguNzA4OTcxIDc5Ljg0NDQ4OSA5NTguNzA4OTcxIDExMS41NjU5NTh6IiBwLWlkPSIxNjQ3MCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg=="
							mode=""></image>
					</view>
				</view>
			</view>
			<!-- footer -->
			<view class="footer"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//爱心的控制
				flag: false,
				//随机还是顺序图标的控制
				orderzhen: false,
				//控制是播放还是暂停的图标
				player: false
			};
		},
		methods: {
			aixin(e) {
				this.flag = !this.flag;
			},
			back() {
				console.log(666);
				uni.navigateBack({
					delta: 1
				});
			},
			//显示歌词页面
			showsong() {
				uni.navigateTo({
					url: '../detailsong/detailsong'
				})
			}
		}
	};
</script>

<style lang="less" scoped>
	.song {
		width: 100%;
		height: 100vh;
		background: linear-gradient(241.89deg, rgba(255, 2.24, 0, 1) 17.516%, rgba(88.19, 0.77, 0, 1) 76.207%);
		overflow: hidden;

		// opacity: 0.5;
		.mask {
			width: 100%;
			height: 100%;
			background: linear-gradient(241.89deg, rgba(21, 13, 13) 100.516%, rgba(36, 13, 12) 76.207%, rgba(47, 13, 12));
			opacity: 0.9;
		}
	}

	image {
		width: 100%;
		height: 100%;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 668rpx;
		height: 48rpx;
		margin: auto;
	}

	.zhong {
		color: #fff;
		line-height: 48rpx;
		font-size: 28rpx;
	}

	.zuo {
		width: 48rpx;
		height: 48rpx;
	}

	.you {
		position: relative;
		width: 40rpx;
		height: 40rpx;

		.aixin {
			position: absolute;
			top: 0;
			left: 0;
			width: 40rpx;
			height: 40rpx;
		}

		.aixin2 {
			position: absolute;
			top: 0;
			left: 0;
			width: 40rpx;
			height: 40rpx;
		}
	}

	.avater {
		position: relative;
		width: 592rpx;
		height: 592rpx;
		border-radius: 50%;
		margin: 152rpx auto;
		border: 11rpx solid #f70200;

		.yuan {
			position: absolute;
			top: 18rpx;
			left: 128rpx;
			width: 40rpx;
			height: 40rpx;
			background-color: #660002;
			border-radius: 50%;
			filter: drop-shadow(2rpx 2rpx 20rpx red);

			.yuan-li {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 24rpx;
				height: 24rpx;
				// background-color: #FF0005;
				border-radius: 50%;
				filter: drop-shadow(2rpx 2rpx 20rpx red);
			}
		}

		.liavater1 {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 480rpx;
			height: 480rpx;
			border-radius: 50%;
			border: 14rpx solid #ff0005;
			background-color: #660002;
		}

		.liavater2 {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 422rpx;
			height: 422rpx;
			border-radius: 50%;
			border: 2rpx solid rgb(255, 255, 255);

			.liavater3 {
				width: 100%;
				height: 100%;

				.avater-zhen {
					object-fit: cover;
					border-radius: 50%;
					/*    盒子投影*/
					-webkit-box-reflect: below 0rpx -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent), to(rgba(250, 250, 250, 0.2)));
				}
			}
		}
	}

	.setting {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 496rpx;
		height: 104rpx;
		margin: 80rpx auto;
		box-sizing: border-box;

		.setting-zuo {
			width: 48rpx;
			height: 48rpx;
			margin-right: 28rpx;
		}

		.setting-zhong {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-width: 298rpx;
			height: 104rpx;
			word-wrap: break-word;
			// background-color: red;
			text-align: center;

			.lunbo1 {
				height: 60rpx;
				// background-color: blue;
				color: rgb(255, 255, 255);
				font-size: 40rpx;
				line-height: 40rpx;
				word-wrap: normal;
				overflow: hidden;

				.lunbo-shang {
					width: 100%;
					height: 100%;
				}
			}

			.lunbo2 {
				height: 44rpx;
				// background-color: pink;
				color: rgb(188, 188, 188);
				font-size: 24rpx;
				line-height: 50rpx;
			}
		}

		.setting-you {
			width: 48rpx;
			height: 48rpx;
			left: 28rpx;
			margin-left: 28rpx;
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

	.tiaojie {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 460rpx;
		height: 160rpx;
		margin: auto;
		margin-top: 80rpx;

		.zuo {
			position: relative;
			flex: 1;
			height: 100%;

			.zuo-img {
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				width: 80rpx;
				height: 50rpx;
			}
		}

		.zhong {
			position: relative;
			flex: 1;
			background: -webkit-linear-gradient(left, #3f0d0d, #ea0201);
			height: 100%;
			border-radius: 50%;

			.zhong-img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 100rpx;
				height: 100rpx;
			}
		}

		.you {
			position: relative;
			flex: 1;
			height: 100%;

			.you-img {
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-50%);
				width: 80rpx;
				height: 50rpx;
			}
		}
	}

	.footer {
		width: 880rpx;
		height: 880rpx;
		background-color: red;
		border-radius: 50%;
		margin-left: -66rpx;
		margin-top: 100rpx;
		background-color: #442625;
	}
</style>