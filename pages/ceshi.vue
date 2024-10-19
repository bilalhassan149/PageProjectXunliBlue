<template>
	<div class="content">
		<a href="https://www.baidu.com/?tn=88093251_104_hao_pg">测试跳转</a>
		<br>
		<div @click="ces">点击测试</div>
		<h3>{{ $store.state.sum }}</h3>
		<div @click="clicks">点击测试ajax</div>

		<br>
		<br>

		<input style="background:#ddd">
		<br>
		<div>969065</div>
		<br>
		<div @click="speech('亲，你有未处理的事务11156。')">语音测试</div>

		<h3>数字测试</h3>

		<br>
		<br>

		<div>
          <el-statistic title="男女比">
            <template slot="formatter"> 456/2 </template>
          </el-statistic>
        </div>

		<br>

		<div>
          <el-statistic group-separator="," :precision="2" decimal-separator="." :value="value1" :title="title">
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
            <template slot="suffix">
              <i class="el-icon-s-flag" style="color: blue"></i>
            </template>
          </el-statistic>
        </div>

		<!-- 转换2 -->
		<br>
		<div>
          <el-statistic group-separator=" "   :value="value3" :title="title"  decimal-separator=" " :precision="4"></el-statistic>
        </div>


		




	</div>
</template>

<script>
// import store from './store'	

export default {
	data() {
		return {
			title: 'Hello',
			value1: 4154.564,
			value2: 2222,
			value3: 66666123456,
			title: '今年的增长',
		}
	},
	onLoad() {
		console.log('load')
	},
	methods: {
		ces() {

			// this.$store.state.sum  = '你的';
			this.$store.state.sum = this.$store.state.sum + 2;
			console.log(this.$store.state.sum)
		},
		clicks() {
			this.$ajax(this.$reg).then(res => {
				console.log(res)
			})

		},
		// 语音播报的函数
		speech(txt) {
			var synth = null;
			var msg = null;
			synth = window.speechSynthesis;
			msg = new SpeechSynthesisUtterance();
			msg.lang = "zh-CN";
			msg.text = txt;
			// msg.volume = 90; //声音音量
			// msg.rate = 0.95; //语速
			synth.speak(msg);
			if (window.speechSynthesis.speaking) {
				console.log("音效有效");
			} else {
				console.log("音效失效");
			}

		},

	}
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
