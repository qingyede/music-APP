<template>
	<view class="home">
		<uni-nav-bar :border="false" background-color="#15161d"></uni-nav-bar>
		<!-- 搜索页面 -->
		<view class="sousuo">
			<input @input="ipting" confirm-type="search" @confirm="down" v-model.trim="ipt" class="ipt" type="text"
				placeholder="请输入内容" placeholder-class="pcs" />
			<image class="sousuoimg" @click="sousuo"
				src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgwMTY1NzY2ODg1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMxMTUiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik05MzQuMjQyMjMyIDg4NC42Mzc5NzUgNzM4LjI4NzI4MSA2OTUuNTYxNjg5bDEuODM2ODM1LTIuMzAyNDM5YzUyLjc2NzgwNy02NS4zMzgxMDEgODEuODI5NzAzLTE0Ny42MDI3MDkgODEuODI5NzAzLTIzMS41OTM2MzYgMC0yMDMuNzE2NzI4LTE2NS43NDI4NTgtMzY5LjQ3MzkxMy0zNjkuNDExNDkxLTM2OS40NzM5MTMtMjAzLjczMTA1NCAwLTM2OS41MDU2MzUgMTY1Ljc1NzE4NS0zNjkuNTA1NjM1IDM2OS40NzM5MTMgMCAyMDMuNzE1NzA1IDE2NS43NzQ1ODEgMzY5LjQ1NzU0IDM2OS41MDU2MzUgMzY5LjQ1NzU0IDg5LjI2NjA3IDAgMTc1LjUxMTMzOS0zMi40NTAwNjMgMjQyLjg0MTgxNy05MS4yODgxMjNsMi4yMDkzMTgtMS45Mjk5NTUgMTk1LjQ4NTI1MyAxODYuOTYzMTU5IDEuOTU5NjMxIDAgMC4wMzE3MjIgMS42MTg4N2M0Ljk0NzY4NSAzLjQ4MzMzNCAxMC41MTc1NDEgNS4zMTkxNDYgMTYuNTgzNyA1LjMxOTE0NiAxNi4xODA1MTggMCAyOS4zMDg1MTMtMTMuMTkyNDY0IDI5LjMwODUxMy0yOS4zMTA1NTlDOTQwLjk2MTI2IDg5Ni4yNzYwMzcgOTM4LjcyMzI5IDg5MC4yMzk1NTQgOTM0LjI0MjIzMiA4ODQuNjM3OTc1ek00NTIuNTQxMzA1IDc3Mi40MTMwMDhjLTE3MS4zNTg3NjMgMC0zMTAuNzQ2MzctMTM5LjM4ODYzMS0zMTAuNzQ2MzctMzEwLjc0NjM3IDAtMTcxLjM0MjM5IDEzOS4zODc2MDctMzEwLjcwMDMyMSAzMTAuNzQ2MzctMzEwLjcwMDMyMSAxNzEuMzA5NjQ0IDAgMzEwLjcwMDMyMSAxMzkuMzU3OTMxIDMxMC43MDAzMjEgMzEwLjcwMDMyMUM3NjMuMjQxNjI2IDYzMy4wMjQzNzcgNjIzLjg1MTk3MiA3NzIuNDEzMDA4IDQ1Mi41NDEzMDUgNzcyLjQxMzAwOHoiIGZpbGw9IiMwMEJCODQiIHAtaWQ9IjMxMTYiPjwvcGF0aD48L3N2Zz4="
				mode=""></image>
			<!-- 模糊搜索 -->
			<view class="mohusousuo" v-if="ipt">
				<view class="rsmohu" v-for="(item,index) in mohuList" :key="item.id" @click="tosongpage(index)">
					<view class="zuo">
						<image class="mohuimg"
							src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgwNTA0OTA5NjkzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI4MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTQ4Ny45MDU4ODIgNzg4LjA3ODQzMWEzMDEuMTc2NDcxIDMwMS4xNzY0NzEgMCAxIDEgMjEyLjIyOTAyLTg3Ljk0MzUyOSAyOTguNzY3MDU5IDI5OC43NjcwNTkgMCAwIDEtMjEyLjIyOTAyIDg3Ljk0MzUyOXogbTAtNTcwLjQyODIzNWEyNzAuMDU0OTAyIDI3MC4wNTQ5MDIgMCAxIDAgMTkwLjk0NTg4MyA3OS4xMDkwMiAyNjguNDQ4NjI3IDI2OC40NDg2MjcgMCAwIDAtMTkwLjk0NTg4My03OS4xMDkwMnogbTIwMC43ODQzMTQgNDcxLjg0MzEzN3oiIGZpbGw9IiM4YThhOGEiIHAtaWQ9IjI4MDQiPjwvcGF0aD48cGF0aCBkPSJNODIxLjQwODYyNyA4MzYuNDY3NDUxYTE1LjQ2MDM5MiAxNS40NjAzOTIgMCAwIDEtMTAuNjQxNTY4LTQuNDE3MjU1bC0xMTUuODUyNTQ5LTExNS44NTI1NDlhMTUuMDU4ODI0IDE1LjA1ODgyNCAwIDAgMSAyMS4yODMxMzctMjEuMjgzMTM3bDExNS44NTI1NDkgMTE1Ljg1MjU0OWExNS4wNTg4MjQgMTUuMDU4ODI0IDAgMCAxIDAgMjEuMjgzMTM3IDE1Ljg2MTk2MSAxNS44NjE5NjEgMCAwIDEtMTAuNjQxNTY5IDQuNDE3MjU1eiIgZmlsbD0iIzhhOGE4YSIgcC1pZD0iMjgwNSI+PC9wYXRoPjwvc3ZnPg=="
							mode="">
						</image>
						{{item.name}}-
					</view>
					<view class="you">
						{{item.ar[0].name}}
					</view>
				</view>
			</view>
		</view>
		<!-- 轮播图1 -->
		<view class="yi" @click="tosongs">
			<view class="yi-zuo">
				<image class="img"
					src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgwMTYxMDc3NzE1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxwYXRoIGQ9Ik0wIDBtMTg0LjMyIDBsNjU1LjM2IDBxMTg0LjMyIDAgMTg0LjMyIDE4NC4zMmwwIDY1NS4zNnEwIDE4NC4zMi0xODQuMzIgMTg0LjMybC02NTUuMzYgMHEtMTg0LjMyIDAtMTg0LjMyLTE4NC4zMmwwLTY1NS4zNnEwLTE4NC4zMiAxODQuMzItMTg0LjMyWiIgZmlsbD0iIzExMTExMSIgcC1pZD0iMjExOCI+PC9wYXRoPjxwYXRoIGQ9Ik0yMDQuMjc3NzYgNjcwLjU5NzEyYTI0Ni4yNTE1MiAyNDYuMjUxNTIgMCAwIDEgMjQ1Ljk3NTA0LTI0NS45NzUwNHYxNDcuNTc4ODhhOTguNDk4NTYgOTguNDk4NTYgMCAwIDAtOTguMzg1OTIgOTguMzg1OTJjMCA0OC4zNDMwNCAyNi4xNDI3MiAxMDAuMzUyIDgzLjU0ODE2IDEwMC4zNTIgMy44MTk1MiAwIDkzLjU1MjY0LTAuODgwNjQgOTMuNTUyNjQtNzcuMTk5MzZWMTM0LjM1OTA0aDE1Ny4yNjU5MmExMzMuMzE0NTYgMTMzLjMxNDU2IDAgMCAwIDEzMy4xMiAxMzIuOTk3MTJsLTAuMTMzMTIgMTQ3LjMxMjY0YTI3My4xNTIgMjczLjE1MiAwIDAgMS0xNDIuNjIyNzItMzguOTEybC0wLjA2MTQ0IDMxNy45ODI3MmMwIDE0Ni4wMDE5Mi0xMjQuMjQxOTIgMjI0Ljc3ODI0LTI0MS4xNDE3NiAyMjQuNzc4MjQtMTMxLjc0Nzg0IDAuMDMwNzItMjMxLjExNjgtMTA2LjU2NzY4LTIzMS4xMTY4LTI0Ny45MjA2NHoiIGZpbGw9IiNGRjQwNDAiIHAtaWQ9IjIxMTkiPjwvcGF0aD48cGF0aCBkPSJNMTY0LjkyNTQ0IDYzMS4yMzQ1NmEyNDYuMjUxNTIgMjQ2LjI1MTUyIDAgMCAxIDI0NS45NzUwNC0yNDUuOTc1MDR2MTQ3LjU3ODg4YTk4LjQ5ODU2IDk4LjQ5ODU2IDAgMCAwLTk4LjM4NTkyIDk4LjM4NTkyYzAgNDguMzQzMDQgMjYuMTQyNzIgMTAwLjM1MiA4My41NDgxNiAxMDAuMzUyIDMuODE5NTIgMCA5My41NTI2NC0wLjg4MDY0IDkzLjU1MjY0LTc3LjE5OTM2Vjk0Ljk5NjQ4aDE1Ny4yNjU5MmExMzMuMzE0NTYgMTMzLjMxNDU2IDAgMCAwIDEzMy4xMiAxMzIuOTk3MTJsLTAuMTMzMTIgMTQ3LjMxMjY0YTI3My4xNTIgMjczLjE1MiAwIDAgMS0xNDIuNjIyNzItMzguOTEybC0wLjA2MTQ0IDMxNy45ODI3MmMwIDE0Ni4wMDE5Mi0xMjQuMjQxOTIgMjI0Ljc3ODI0LTI0MS4xNDE3NiAyMjQuNzc4MjQtMTMxLjc0Nzg0IDAuMDMwNzItMjMxLjExNjgtMTA2LjU2NzY4LTIzMS4xMTY4LTI0Ny45MjA2NHoiIGZpbGw9IiMwMEY1RkYiIHAtaWQ9IjIxMjAiPjwvcGF0aD48cGF0aCBkPSJNNDEwLjkxMDcyIDQyNy41ODE0NGMtMTU4LjgyMjQgMjAuMTUyMzItMjg0LjQ0NjcyIDIyMi43Mi0xNTQuMTEyIDQwNS4wMDIyNCAxMjAuNDAxOTIgOTguNDc4MDggMzczLjY4ODMyIDQxLjIwNTc2IDM4MC43MDI3Mi0xNzEuODU3OTJsLTAuMTc0MDgtMzI0LjE0NzJhMjgwLjcyOTYgMjgwLjcyOTYgMCAwIDAgMTQyLjg4ODk2IDM4LjYyNTI4VjI2MS4yMjI0YTE0NC45ODgxNiAxNDQuOTg4MTYgMCAwIDEtNzIuODA2NC01NC44MjQ5NiAxMzUuMjM5NjggMTM1LjIzOTY4IDAgMCAxLTU0LjcwMjA4LTcyLjQ1ODI0aC0xMjMuNjY4NDhsLTAuMDgxOTIgNTYxLjQxODI0Yy0wLjExMjY0IDc4LjQ2OTEyLTEzMC45Njk2IDEwNi40MTQwOC0xNjQuMTg4MTYgMzAuMjU5Mi04My4xODk3Ni0zOS43NzIxNi02NC4zNzg4OC0xOTAuOTI0OCA0Ni4zMTU1Mi0xOTIuNTczNDR6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyMTIxIj48L3BhdGg+PC9zdmc+"
					mode=""></image>
			</view>
			<view class="yi-you">
				<u-swiper class="swiper1" :list="$store.state.list" keyName="image"></u-swiper>
				<view class="shang">抖音热歌</view>
				<view class="xia">抖音-记录美好生活</view>
			</view>
		</view>
		<!-- 轮播图2 -->
		<view class="er" @click="tosongswyy">
			<view class="er-zuo">
				<image class="img"
					src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgwMTYxNDc5NzY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxwYXRoIGQ9Ik0wIDBtMTg0LjMyIDBsNjU1LjM2IDBxMTg0LjMyIDAgMTg0LjMyIDE4NC4zMmwwIDY1NS4zNnEwIDE4NC4zMi0xODQuMzIgMTg0LjMybC02NTUuMzYgMHEtMTg0LjMyIDAtMTg0LjMyLTE4NC4zMmwwLTY1NS4zNnEwLTE4NC4zMiAxODQuMzItMTg0LjMyWiIgZmlsbD0iI0VBM0UzQyIgcC1pZD0iMjQ0OCI+PC9wYXRoPjxwYXRoIGQ9Ik01MjcuNjE2IDg0OS40Mzg3MmEzNzMuNjA2NCAzNzMuNjA2NCAwIDAgMS0xNjIuNTQ5NzYtMzkuMDA0MTZjLTExMi4zNjM1Mi01NS4xNjI4OC0xODAuMDA4OTYtMTc2LjI5MTg0LTE3Mi41NTQyNC0zMDguNjc0NTYgNy40MTM3Ni0xMzAuMzQ0OTYgODUuMTA0NjQtMjM3LjQ2NTYgMjAyLjc1Mi0yNzkuNTUyYTM1Ljg1MDI0IDM1Ljg1MDI0IDAgMCAxIDI0LjE1NjE2IDY3LjUxMjMyYy0xMDcuNjYzMzYgMzguNDkyMTYtMTUwLjgxNDcyIDEzNi44Njc4NC0xNTUuMjk5ODQgMjE2LjEzNTY4LTUuODY3NTIgMTAzLjUxNjE2IDQ2LjA4IDE5Ny43OTU4NCAxMzIuMzQxNzYgMjQwLjEzODI0IDEyNC42OTI0OCA2MC4zMDMzNiAyMTYuOTEzOTIgMjIuMzUzOTIgMjYwLjgyMzA0LTUuNjQyMjQgNTkuODAxNi0zOC4xNjQ0OCA5Ny44NjM2OC0xMDAuMDE0MDggOTYuOTUyMzItMTU3LjU1MjY0LTEuMDI0LTYzLjcyMzUyLTI0LjA2NC0xMjAuOTk1ODQtNjMuMjcyOTYtMTU3LjE0MzA0YTE0NS40MDggMTQ1LjQwOCAwIDAgMC02NS41ODcyLTM1LjI4NzA0cTIuODI2MjQgOS43Njg5NiA1LjY0MjI0IDE5LjMyMjg4YzEzLjM4MzY4IDQ1LjYzOTY4IDI0Ljk0NDY0IDg1LjA1MzQ0IDI1LjYgMTE0LjQwMTI4YTEzNC4yNjY4OCAxMzQuMjY2ODggMCAwIDEtMzcuNjkzNDQgOTcuNzYxMjggMTM5LjExMDQgMTM5LjExMDQgMCAwIDEtMTAwLjY1OTIgNDAuNDU4MjQgMTQwLjEwMzY4IDE0MC4xMDM2OCAwIDAgMS0xMDAuNDc0ODgtNDIuMjQgMTY5LjEyMzg0IDE2OS4xMjM4NCAwIDAgMS00Ni4yODQ4LTEyMi43NjczNmMxLjE5ODA4LTg1LjEyNTEyIDgwLjExNzc2LTE1My4yODI1NiAxNjIuODE2LTE3NS4xMDRhMzI0LjgwMjU2IDMyNC44MDI1NiAwIDAgMS02LjcxNzQ0LTY3LjA1MTUyIDkyLjA1NzYgOTIuMDU3NiAwIDAgMSA2OS4xODE0NC05MS44MTE4NGM0Ni4yMTMxMi0xMi41MzM3NiAxMDQuNDQ4IDUuMTkxNjggMTI0LjY2MTc2IDM3Ljg4OGEzNS44NCAzNS44NCAwIDAgMS0xMS43MDQzMiA0OS4zMTU4NCAzNS44NCAzNS44NCAwIDAgMS00OS4yNjQ2NC0xMS42NTMxMiA2Mi4zNDExMiA2Mi4zNDExMiAwIDAgMC00OC40NTU2OC01LjIxMjE2Yy00LjMyMTI4IDEuNzEwMDgtMTIuMzU5NjggNC45MDQ5Ni0xMi43NjkyOCAyMy4xMDE0NGEyNzAuODc4NzIgMjcwLjg3ODcyIDAgMCAwIDYuNzM3OTIgNTguNTExMzYgMjE3LjQ5NzYgMjE3LjQ5NzYgMCAwIDEgMTMzLjU2MDMyIDU3LjY1MTJjNTMuNTc1NjggNDkuMzg3NTIgODUuMDQzMiAxMjUuNDYwNDggODYuMzUzOTIgMjA4LjcxMTY4IDEuMjkwMjQgODEuODU4NTYtNDkuNzY2NCAxNjcuODY0MzItMTMwLjA0OCAyMTkuMTM2YTMxMC4xNDkxMiAzMTAuMTQ5MTIgMCAwIDEtMTY4LjI0MzIgNDguNjUwMjR6IG0yMy42NTQ0LTQ1Ny41NTM5MmMtNTYuNzcwNTYgMTUuNjY3Mi0xMDcuNDY4OCA2My4wMzc0NC0xMDguMDcyOTYgMTA2LjQyNDMyYTk4LjMwNCA5OC4zMDQgMCAwIDAgMjUuNjUxMiA3MS40MzQyNCA2OC4wNDQ4IDY4LjA0NDggMCAwIDAgNDkuMzY3MDQgMjAuODc5MzYgNjcuMjQ2MDggNjcuMjQ2MDggMCAwIDAgNDkuNDQ4OTYtMTguOTQ0IDYzLjE5MTA0IDYzLjE5MTA0IDAgMCAwIDE3LjIzMzkyLTQ2LjA4Yy0wLjQwOTYtMTkuNzkzOTItMTEuNzI0OC01OC4zNjgtMjIuNjcxMzYtOTUuNjkyOC0zLjYxNDcyLTEyLjQyMTEyLTcuMzUyMzItMjUuMTQ5NDQtMTAuOTU2OC0zOC4wMjExMnoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjI0NDkiPjwvcGF0aD48L3N2Zz4="
					mode=""></image>
			</view>
			<view class="er-you">
				<u-swiper class="swiper2" :list="$store.state.list1" keyName="image"></u-swiper>
				<view class="shang">网易云热歌</view>
				<view class="xia">网易云音乐</view>
			</view>
		</view>
		<!-- 轮播图3 -->
		<view class="san" @click="tosongsqqyy">
			<view class="san-zuo">
				<image class="img"
					src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgwMTYyNTI3MDk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxwYXRoIGQ9Ik01MDkuMTg2ODEzIDYwNS45NjA0NG0tMjk0LjI1OTM0IDBhMjk0LjI1OTM0MSAyOTQuMjU5MzQxIDAgMSAwIDU4OC41MTg2ODEgMCAyOTQuMjU5MzQxIDI5NC4yNTkzNDEgMCAxIDAtNTg4LjUxODY4MSAwWiIgZmlsbD0iI0YwRjQ0MCIgcC1pZD0iMjY2MiI+PC9wYXRoPjxwYXRoIGQ9Ik03MDMuMjk2NzAzIDU2OS45NTE2NDhjLTE3LjQ0MTc1OC00Mi43NjA0NC02NC43MDMyOTctNjcuNTE2NDg0LTEyMS41Mjk2Ny02OS43NjcwMzNsLTUzLjQ1MDU0OS0yNTAuMzczNjI2Yy0zLjkzODQ2Mi0xOS4xMjk2Ny0yMy4wNjgxMzItMzEuNTA3NjkyLTQyLjE5NzgwMy0yNy41NjkyMzEtMTkuMTI5NjcgMy45Mzg0NjItMzEuNTA3NjkyIDIzLjA2ODEzMi0yNy41NjkyMyA0Mi4xOTc4MDJsNTEuNzYyNjM3IDI0NC4xODQ2MTZjLTExLjI1Mjc0NyAyLjgxMzE4Ny0yMi41MDU0OTUgNi43NTE2NDgtMzMuNzU4MjQyIDExLjI1Mjc0Ny05Ny4zMzYyNjQgMzkuMzg0NjE1LTE1NC4xNjI2MzcgMTI2LjAzMDc2OS0xMjYuNTkzNDA2IDE5My41NDcyNTNzMTI4LjI4MTMxOSA5MC4wMjE5NzggMjI2LjE4MDIxOSA1MC42MzczNjJjOTcuODk4OTAxLTM5Ljk0NzI1MyAxNTQuNzI1Mjc1LTEyNi41OTM0MDcgMTI3LjE1NjA0NC0xOTQuMTA5ODl6IiBmaWxsPSIjNUNGMjQxIiBwLWlkPSIyNjYzIj48L3BhdGg+PHBhdGggZD0iTTQzNy43Mjc0OTUgMjk0LjI3MDk5N2E3OC4yMDY1OTMgMTQyLjkwOTg5IDYwIDEgMCAyNDcuNTI3MTktMTQyLjkwOTg5IDc4LjIwNjU5MyAxNDIuOTA5ODkgNjAgMSAwLTI0Ny41MjcxOSAxNDIuOTA5ODlaIiBmaWxsPSIjNUNGMjQxIiBwLWlkPSIyNjY0Ij48L3BhdGg+PC9zdmc+"
					mode=""></image>
			</view>
			<view class="san-you">
				<u-swiper class="swiper2" :list="$store.state.list2" keyName="image"></u-swiper>
				<view class="shang">QQ音乐</view>
				<view class="xia">QQ音乐</view>
			</view>
		</view>
		<!-- 轮播图4 -->
		<view class="si" @click="tosongsks">
			<view class="si-zuo">
				<image class="img"
					src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjgwNDI0ODM5MTgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MTEzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPjxwYXRoIGQ9Ik0wIDBtMTg0LjMyIDBsNjU1LjM2IDBxMTg0LjMyIDAgMTg0LjMyIDE4NC4zMmwwIDY1NS4zNnEwIDE4NC4zMi0xODQuMzIgMTg0LjMybC02NTUuMzYgMHEtMTg0LjMyIDAtMTg0LjMyLTE4NC4zMmwwLTY1NS4zNnEwLTE4NC4zMiAxODQuMzItMTg0LjMyWiIgZmlsbD0iI0ZGNjczNCIgcC1pZD0iMTUxMTQiPjwvcGF0aD48cGF0aCBkPSJNNzE2LjggMjI1LjI4YTgxLjkyIDgxLjkyIDAgMSAwIDgxLjkyIDgxLjkyIDgyLjAxMjE2IDgyLjAxMjE2IDAgMCAwLTgxLjkyLTgxLjkybTAtNzEuNjhhMTUzLjYgMTUzLjYgMCAxIDEtMTUzLjYgMTUzLjYgMTUzLjYgMTUzLjYgMCAwIDEgMTUzLjYtMTUzLjZ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIxNTExNSI+PC9wYXRoPjxwYXRoIGQ9Ik00NTAuNTYgMTYzLjg0YTExMi42NCAxMTIuNjQgMCAxIDAgMTEyLjY0IDExMi42NCAxMTIuNzYyODggMTEyLjc2Mjg4IDAgMCAwLTExMi42NC0xMTIuNjRtMC03MS42OGExODQuMzIgMTg0LjMyIDAgMSAxLTE4NC4zMiAxODQuMzIgMTg0LjMyIDE4NC4zMiAwIDAgMSAxODQuMzItMTg0LjMyeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMTUxMTYiPjwvcGF0aD48cGF0aCBkPSJNNTMyLjQ4IDU2My4yYTgxLjkyIDgxLjkyIDAgMCAwLTgxLjkyIDgxLjkydjkyLjE2YTgxLjkyIDgxLjkyIDAgMCAwIDgxLjkyIDgxLjkyaDE5NC41NmE4MS45MiA4MS45MiAwIDAgMCA4MS45Mi04MS45MnYtOTIuMTZhODEuOTIgODEuOTIgMCAwIDAtODEuOTItODEuOTJoLTE5NC41Nm0wLTcxLjY4aDE5NC41NmExNTMuNzc0MDggMTUzLjc3NDA4IDAgMCAxIDE1My42IDE1My42djkyLjE2YTE1My43NzQwOCAxNTMuNzc0MDggMCAwIDEtMTUzLjYgMTUzLjZoLTE5NC41NmExNTMuNzc0MDggMTUzLjc3NDA4IDAgMCAxLTE1My42LTE1My42di05Mi4xNmExNTMuNzc0MDggMTUzLjc3NDA4IDAgMCAxIDE1My42LTE1My42eiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMTUxMTciPjwvcGF0aD48cGF0aCBkPSJNMzczLjQ0MjU2IDY5MS4yYTIwLjI4NTQ0IDIwLjI4NTQ0IDAgMCAwLTEwLjMyMTkyLTE3Ljc3NjY0bC0xMTcuNDQyNTYtNjcuMTEyOTZhMjAuNDggMjAuNDggMCAwIDAtMzAuNjM4MDggMTcuNzc2NjR2MTM0LjIyNTkyYTIwLjQ4IDIwLjQ4IDAgMCAwIDMwLjYzODA4IDE3Ljc3NjY0bDExNy40NDI1Ni02Ny4xMTI5NmEyMC4yODU0NCAyMC4yODU0NCAwIDAgMCAxMC4zMjE5Mi0xNy43NzY2NG03MS42OCAwYTkyLjM2NDggOTIuMzY0OCAwIDAgMS00Ni40Mzg0IDgwLjAxNTM2bC0xMTcuNDQyNTYgNjcuMTEyOTZBOTIuMTYgOTIuMTYgMCAwIDEgMTQzLjM2IDc1OC4zMTI5NnYtMTM0LjIyNTkyYTkyLjE2IDkyLjE2IDAgMCAxIDEzNy44ODE2LTgwLjAxNTM2bDExNy40NDI1NiA2Ny4xMTI5NmE5Mi4zNjQ4IDkyLjM2NDggMCAwIDEgNDYuNDM4NCA4MC4wMTUzNnoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjE1MTE4Ij48L3BhdGg+PC9zdmc+"
					mode="">
					</images>
			</view>
			<view class="si-you">
				<u-swiper class="swiper2" :list="$store.state.list3" keyName="image"></u-swiper>
				<view class="shang">快手热歌</view>
				<view class="xia">快手热歌</view>
			</view>
		</view>
	</view>
	</view>

	</view>
</template>

<script>
	// import debounce from 'lodash.debounce'
	// import {
	// 	TEST_DATA
	// } from '@/api/http.js'
	export default {
		data() {
			return {
				//搜索框的value
				ipt: '',
				//模糊搜索的结果
				mohuList: [],
				timer: null
			};

		},
		mounted() {

		},
		methods: {
			//点击搜索图标时触发模糊搜索
			sousuo() {
				const data = {
					keywords: this.ipt
				}
				this.$http.get('/cloudsearch', data, {
					showLoading: false
				}).then(res => {
					this.mohuList = res.result.songs
				})
			},
			//处理模糊查询结果的显示与隐藏(使用了lodash)
			// ipting: debounce(function() {
			// 	if (this.ipt !== '') {
			// 		const data = {
			// 			keywords: this.ipt
			// 		}
			// 		this.$http.get('/cloudsearch', data, {
			// 			showLoading: false
			// 		}).then(res => {
			// 			// this.mohuing = true
			// 			this.mohuList = res.result.songs
			// 			this.$store.commit('USERIPT', this.ipt)
			// 		})
			// 	}
			// }, 5),
			//处理模糊查询结果的显示与隐藏(没使用使用了lodash)
			ipting() {
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					if (this.ipt !== '') {
						const data = {
							keywords: this.ipt
						}
						this.$http.get('/cloudsearch', data, {
							showLoading: false
						}).then(res => {
							// this.mohuing = true
							this.mohuList = res.result.songs
							// this.$store.commit('USERIPT', this.ipt)
						})
					}

				}, 1)
			},

			async down() {
				const data = {
					shili: this,
					name: this.ipt
				}
				await this.$store.dispatch('entertosong', data)
				await this.$store.commit('ENTERIPT', this.ipt)
				this.$store.commit('USERIPT', data.name)
				uni.navigateTo({
					url: '/pages/searchSongs/searchSongs'
				})
				this.ipt = ''
			},
			//点击抖音去往抖音歌曲页面
			async tosongs() {
				const data = {
					shili: this,
					name: '抖音'
				}
				await this.$store.dispatch('userselect', data)
				await this.$store.commit('DYIPT', '抖音')
				this.$store.commit('USERIPT', data.name)
				uni.navigateTo({
					url: '/pages/searchSongs/searchSongs'
				})
			},
			//点击网易云去往网易云歌曲页面
			async tosongswyy() {
				const data = {
					shili: this,
					name: '网易云音乐'
				}
				await this.$store.dispatch('userselect', data)
				await this.$store.commit('WYYIPT', '网易云音乐')
				this.$store.commit('USERIPT', data.name)
				uni.navigateTo({
					url: '/pages/searchSongs/searchSongs'
				})
			},
			//点击qq音乐去往qq音乐歌曲页面
			async tosongsqqyy() {
				const data = {
					shili: this,
					name: 'qq音乐'
				}
				await this.$store.dispatch('userselect', data)
				await this.$store.commit('QQYYIPT', 'qq音乐')
				this.$store.commit('USERIPT', data.name)
				uni.navigateTo({
					url: '/pages/searchSongs/searchSongs'
				})
			},
			//点击快手去往快手歌曲页面
			async tosongsks() {
				const data = {
					shili: this,
					name: '快手音乐'
				}
				await this.$store.dispatch('userselect', data)
				await this.$store.commit('KSIPT', '网易云音乐')
				// await this.$store.dispatch('userselect', songinfoObj)
				this.$store.commit('USERIPT', data.name)
				uni.navigateTo({
					url: '/pages/searchSongs/searchSongs'
				})
			},
			async tosongpage(index) {
				const songinfoObj = {
					shili: this,
					name: this.ipt
				}
				const currentSong = {
					id: this.mohuList[index].id
				}
				await this.$store.dispatch('userselect', songinfoObj)
				//派发用户当前选中的歌的id任务
				await this.$store.dispatch('userselectsongid', currentSong)
				this.ipt = ''
				uni.navigateTo({
					url: '/pages/searchSongs/searchSongs'
				})
			}
		}
	};
</script>

<style lang="less" scoped>
	.home {
		height: 100%;
		background-color: #15161d;
	}

	.sousuo {
		position: relative;
		width: 640rpx;
		height: 80rpx;
		background-color: rgb(0, 0, 0);
		border-radius: 16rpx;
		border: 2rpx solid rgb(74, 74, 74);
		box-sizing: border-box;
		margin: auto;

		.sousuoimg {
			position: absolute;
			top: 50%;
			right: 30rpx;
			transform: translateY(-50%) scale(1.3);
			width: 24rpx;
			height: 24rpx;

		}

		.ipt {
			width: 100%;
			height: 100%;
			text-align: center;
			color: rgb(0, 187, 132);
		}

		.mohusousuo {
			position: absolute;
			top: 80rpx;
			left: 50rpx;
			width: 80%;
			max-height: 600rpx;
			z-index: 999;
			border-radius: 10rpx;
			line-height: 60rpx;
			overflow-y: auto;

			.rsmohu {
				display: flex;
				width: 100%;
				height: 60rpx;
				background-color: #fff;
				color: aqua;
				font-size: 28rpx;

				.zuo {
					position: relative;
					padding-left: 60rpx;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;

					.mohuimg {
						position: absolute;
						top: 50%;
						left: 30rpx;
						transform: translate(-50%, -50%);
						width: 40rpx;
						height: 40rpx;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}

				.you {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}
	}

	.pcs {
		color: rgb(255, 255, 255);
		font-size: 24rpx;
	}

	.yi {
		display: flex;
		// justify-content: space-between;
		align-items: center;
		width: 719rpx;
		height: 280rpx;
		margin: 80rpx 0 0 37rpx;
	}

	.yi-zuo {
		width: 70rpx;
		height: 70rpx;
		margin-right: 16rpx;
		border-radius: 8rpx;
		// background-image: url(/static/img/dy.svg);
		// background-repeat: no-repeat;
		background-size: cover;
		overflow: hidden;
		border: 2rpx solid pink;
		box-shadow: 2rpx 2rpx 2rpx skyblue;
	}

	.yi-you {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 632rpx;
		height: 100%;

		// background-color: blue;
		.shang {
			position: absolute;
			top: 40rpx;
			right: 0;
			width: 244rpx;
			height: 56rpx;
			background: rgb(255, 255, 255);
			font-size: 28rpx;
			line-height: 56rpx;
			border-radius: 8rpx;
			text-align: center;
			background: rgba(255, 255, 255, 0.32);
			backdrop-filter: saturate(180%) blur(12rpx);
			opacity: 0.74;
			color: #000;
		}

		.xia {
			position: absolute;
			top: 144rpx;
			left: 40rpx;
			width: 486rpx;
			height: 96rpx;
			margin: auto;
			line-height: 48rpx;
			color: rgb(255, 255, 255);
			font-size: 32rpx;
			letter-spacing: 1rpx;
		}
	}

	.er {
		display: flex;
		// justify-content: space-between;
		align-items: center;
		width: 719rpx;
		height: 280rpx;
		margin: 52rpx 0 0 37rpx;
	}

	.er-zuo {
		width: 70rpx;
		height: 70rpx;
		margin-right: 16rpx;
		border-radius: 8rpx;
		// background-image: url(/static/img/wyy.svg);
		// background-repeat: no-repeat;
		background-size: cover;
		overflow: hidden;
		border: 2rpx solid pink;
		box-shadow: 2rpx 2rpx 2rpx red;
	}

	.er-you {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 632rpx;
		height: 100%;

		// background-color: blue;
		.shang {
			position: absolute;
			top: 40rpx;
			right: 0;
			width: 244rpx;
			height: 56rpx;
			background: rgb(255, 255, 255);
			font-size: 28rpx;
			line-height: 56rpx;
			border-radius: 8rpx;
			text-align: center;
			background: rgba(255, 255, 255, 0.32);
			backdrop-filter: saturate(180%) blur(12rpx);
			opacity: 0.74;
			color: red;
		}

		.xia {
			position: absolute;
			top: 144rpx;
			left: 40rpx;
			width: 486rpx;
			height: 96rpx;
			margin: auto;
			line-height: 48rpx;
			color: rgb(255, 255, 255);
			font-size: 32rpx;
			letter-spacing: 1rpx;
		}
	}

	.swiper1 {
		opacity: 0.8;
	}

	.swiper2 {
		opacity: 0.6;
	}

	.swiper {
		opacity: 0.4;
	}

	.san {
		display: flex;
		// justify-content: space-between;
		align-items: center;
		width: 719rpx;
		height: 280rpx;
		margin: 80rpx 0 0 37rpx;
	}

	.san-zuo {
		width: 70rpx;
		height: 70rpx;
		margin-right: 16rpx;
		border-radius: 8rpx;
		// background-image: url(/static/img/qq.svg);
		// background-repeat: no-repeat;
		background-size: cover;
		overflow: hidden;
		border: 2rpx solid #fff;
		box-shadow: 2rpx 2rpx 2rpx seagreen;
	}

	.san-you {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 632rpx;
		height: 100%;

		// background-color: blue;
		.shang {
			position: absolute;
			top: 40rpx;
			right: 0;
			width: 244rpx;
			height: 56rpx;
			background: rgb(255, 255, 255);
			font-size: 28rpx;
			line-height: 56rpx;
			border-radius: 8rpx;
			text-align: center;
			background: rgba(255, 255, 255, 0.32);
			backdrop-filter: saturate(180%) blur(12rpx);
			opacity: 0.74;
			color: seagreen;
		}

		.xia {
			position: absolute;
			top: 144rpx;
			left: 40rpx;
			width: 486rpx;
			height: 96rpx;
			margin: auto;
			line-height: 48rpx;
			color: rgb(255, 255, 255);
			font-size: 32rpx;
			letter-spacing: 1rpx;
		}
	}

	.si {
		display: flex;
		// justify-content: space-between;
		align-items: center;
		width: 719rpx;
		height: 280rpx;
		margin: 80rpx 0 0 37rpx;
	}

	.si-zuo {
		width: 70rpx;
		height: 70rpx;
		margin-right: 16rpx;
		border-radius: 8rpx;
		// background-image: url(/static/img/dy.svg);
		// background-repeat: no-repeat;
		background-size: cover;
		overflow: hidden;
		border: 2rpx solid pink;
		box-shadow: 2rpx 2rpx 2rpx skyblue;
	}

	.si-you {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 632rpx;
		height: 100%;

		// background-color: blue;
		.shang {
			position: absolute;
			top: 40rpx;
			right: 0;
			width: 244rpx;
			height: 56rpx;
			background: rgb(255, 255, 255);
			font-size: 28rpx;
			line-height: 56rpx;
			border-radius: 8rpx;
			text-align: center;
			background: rgba(255, 255, 255, 0.32);
			backdrop-filter: saturate(180%) blur(12rpx);
			opacity: 0.74;
			color: #FF6734;
		}

		.xia {
			position: absolute;
			top: 144rpx;
			left: 40rpx;
			width: 486rpx;
			height: 96rpx;
			margin: auto;
			line-height: 48rpx;
			color: rgb(255, 255, 255);
			font-size: 32rpx;
			letter-spacing: 1rpx;
		}
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.jilu {
		display: flex;
		flex-wrap: wrap;
		background-color: #fff;
		width: 100%;
		min-height: 40rpx;
	}

	.jilukey {
		height: 40rpx;
		border: 2rpx solid green;
		border-radius: 6rpx;
		line-height: 40rpx;
		background-color: #000;
		color: #fff;
		overflow: hidden;
		margin-right: 16rpx;
		margin-top: 8rpx;
	}
</style>