import Vue from 'vue'
import Vuex from 'vuex'
import {
	install as http
} from '@/uni_modules/gt-axios-request/js_sdk/install.js'
Vue.use(http)

const actions = {
	//第一次用户选择歌曲的请求
	async userselect(context, value) {
		const data = {
			keywords: value.name,
			limit: 20
		}
		const res = await value.shili.$http.get('/cloudsearch', data, {
			showLoading: false
		})
		context.commit('USERSONGS', res)
	},
	//用户当前选中的歌的id任务
	userselectsongid(context, value) {
		context.commit('USERSELECTSONGSID', value)
	},
	//后续用户选择歌曲的请求，上拉进行分页请求
	async pushsongs(context, value) {
		const data = {
			keywords: value.name,
			limit: 20,
			offset: value.index * 20
		}
		if (data.offset + 20 >= context.state.songCount && context.state.num === 0) {
			context.state.num = 1
			// //这是最后一次的请求
			const data2 = {
				keywords: value.name,
				limit: context.state.songCount - data.offset + 20,
				offset: data.offset - 20
			}
			const res = await value.shili.$http.get('/cloudsearch', data2, {
				showLoading: false
			})
			value = res.result.songs
			context.commit('PUSHSONGS', value)
		} else if (data.offset < context.state.songCount) {
			const res = await value.shili.$http.get('/cloudsearch', data, {
				showLoading: false
			})
			value = res.result.songs
			context.commit('PUSHSONGS', value)
		} else {
			return
		}
	},
	//跳转到播放页面
	toplayer(context, value) {
		context.commit('TOPLAYER', value)
	},
	//使用enter键获得用户选择的信息
	async entertosong(context, value) {
		const data = {
			keywords: value.name,
			limit: 11
		}
		const res = await value.shili.$http.get('/cloudsearch', data, {
			showLoading: false
		})
		value = res.result.songs
		context.commit('ENTERTOSONG', value)
	},
	//得到抖音的图片
	async getdouyin(context, value) {
		const data = {
			keywords: value.name,
			limit: 3
		}
		const res = await value.shili.$http.get('/cloudsearch', data, {
			showLoading: false
		})
		value = res.result.songs
		context.commit('GETDOUYIN', value)
	},
	//得到网易云的图片
	async getwyy(context, value) {
		const data = {
			keywords: value.name,
			limit: 3
		}
		const res = await value.shili.$http.get('/cloudsearch', data, {
			showLoading: false
		})
		value = res.result.songs
		context.commit('GETWYY', value)
	},
	//得到qq音乐的图片
	async getqqyy(context, value) {
		const data = {
			keywords: value.name,
			limit: 3
		}
		const res = await value.shili.$http.get('/cloudsearch', data, {
			showLoading: false
		})
		value = res.result.songs
		context.commit('GETQQYY', value)
	},
	//得到qq音乐的图片
	async getks(context, value) {
		const data = {
			keywords: value.name,
			limit: 3
		}
		const res = await value.shili.$http.get('/cloudsearch', data, {
			showLoading: false
		})
		value = res.result.songs
		context.commit('GETKS', value)
	},
	//得到当前歌曲的歌词
	async getlyric(context, value) {
		const res = await value.shili.$http.get(`/lyric?id=${value.id}`, {
			showLoading: false
		})
		value = res.lrc.lyric
		context.commit('GETLYRIC', value)
	},
	//得到当前歌曲的url
	async getsongurl(context, value) {
		const res = await value.shili.$http.get(`/song/url/v1?id=${value.id}&level=jyeffect`, {
			showLoading: false
		})
		value = res.data[0].url
		context.commit('GETSONGURL', value)
	}
}
const mutations = {
	////第一次用户选择歌曲的请求
	USERSONGS(state, value) {
		state.songCount = value.result.songCount
		state.userselectsong = value.result.songs
	},
	//用户输入的搜索关键词
	USERIPT(state, value) {
		state.userIpt = value
	},
	//分页请求
	PUSHSONGS(state, value) {
		for (let i = 0; i < value.length; i++) {
			state.userselectsong.push(value[i])
		}
		console.log(state.userselectsong);
	},
	//用户当前选中的歌的id任务
	USERSELECTSONGSID(state, value) {
		state.userdedailsongsinfo = value
	},
	//跳转到播放页面
	TOPLAYER(state, value) {
		state.playerinfo = value
	},
	//使用enter键获得用户选择的信息
	ENTERTOSONG(state, value) {
		state.userselectsong = value
	},
	//得到抖音的图片
	GETDOUYIN(state, value) {
		state.list.forEach((item, index) => {
			item.image = value[0].al.picUrl
		})
	},
	//得到网易云的图片
	GETWYY(state, value) {
		state.list1.forEach((item, index) => {
			item.image = value[2].al.picUrl
		})
	},
	//得到QQ音乐的图片
	GETQQYY(state, value) {
		state.list2.forEach((item, index) => {
			item.image = value[1].al.picUrl
		})
	}, //得到快手的图片
	GETKS(state, value) {
		state.list3.forEach((item, index) => {
			item.image = value[0].al.picUrl
		})
	},
	//抖音的ipt
	DYIPT(state, value) {
		state.userIpt = value
	},
	//网易云的ipt
	WYYIPT(state, value) {
		state.userIpt = value
	},
	//qq音乐的ipt
	QQYYIPT(state, value) {
		state.userIpt = value
	},
	//快手的ipt
	KSIPT(state, value) {
		state.userIpt = value
	},
	//enter的ipt
	ENTERIPT(state, value) {
		state.userIpt = value
	},
	//得到当前歌曲的歌词
	GETLYRIC(state, value) {
		state.currentlyric = value
	},
	//得到当前歌曲的url
	GETSONGURL(state, value) {
		state.currentsongURL = value
	},
	//初始化过后的歌词
	INITLYRIC(state, value) {
		state.initedlyric = value
	},
	//最终的用户选择的当前歌曲信息
	RSSONGINFO(state, value) {
		state.rscurrentsonginfo = value
	},
	//keynum
	KEYNUM(state, value) {
		state.key = value
	},
	//当前歌曲id
	SAVECURRENTID(state, value) {
		state.currentid = value
	}
}

const state = {
	//轮播图1图片的路径
	list: [{
		image: ''
	}],
	//轮播图2图片的路径
	list1: [{
		image: ''
	}],
	//轮播图3图片的路径
	list2: [{
		image: ''
	}],
	//轮播图4图片的路径
	list3: [{
		image: ''
	}],
	//用户选择的音乐
	userselectsong: [],
	//用户输入的搜索关键词
	userIpt: '',
	//搜索请求的偏移量
	offsetindex: 1,
	songCount: 0,
	//用户当前选中的歌的id任务
	userdedailsongsinfo: [],
	//跳转到播放页面需要携带的数据
	playerinfo: [],
	//播放顺序
	controlorder: 0,
	//当前歌曲的歌词
	currentlyric: '',
	//当前歌曲的url
	currentsongURL: '',
	//初始化过后的歌词
	initedlyric: [],
	//最终的用户选择的当前歌曲信息
	rscurrentsonginfo: [],
	//key
	key: 0,
	//当前歌曲id
	currentid: 0,
	//是否显示loading
	isloading: false,
	//明亮度
	isbrightness: false,
	//证明是第一次
	num: 0,
	//音频上下文
	music: null,
	ordernumkey: 0
}
Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	mutations,
	state
})