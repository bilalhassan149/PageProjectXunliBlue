<template>
	<div>
		<div :class="$i.deviceType == 'pc' ? 'bg' : ''" v-show="$i.deviceType == 'pc'">
			<div class="down-main f">
				<img class="bot-icon" src="@/static/download/a/vector.png">
				<h2 class="down-app" title="汛利娱乐下载APP、真人、电竞、体育">
					下载APP
				</h2>
				
				<!-- app -->
				<div  class="f-c" style="margin-top: -100px;">
					<div class="down-body">
						<div class="down-title">下载 APP</div>
						<div class="down-title1">快速而稳定的指尖享受</div>
						<div class="down-content">
							汛利娱乐原创应用程序，流畅，尽享足球盛事，顶级电子竞技活动，现场娱乐活动。 彩票投注和电子游戏等，最新，最完整的娱乐活动都在您的手掌中。 扫描二维码下载并立即进行！
						</div>
						<div class="down-btn">
							<button>
								<img src="@/static/icons/android.svg" />
								<div>Android App</div>
							</button>
							<button>
								<img src="@/static/icons/android.svg" />
								<div>Apple App</div>
							</button>
						</div>
						<img class="down-ab-img" src="@/static/download/a/mobile.png">
						<div class="down-er f-c f">
							<vue-qr class="down-er-body" :text="$store.state.siteUrl" :size="200">
							</vue-qr>
							<h3 title="汛利娱乐下载APP、享受真人、电竞、体育" class="f-c">
								扫描以下载应用
							</h3>
						</div>
						<!-- 下线线路 -->
						<div class="line-bg f-c">
							<div class="line-icon-main" 
								v-for="(item,index) in $store.state.jsons.pcUrl"
								>
								<div class="line-icon f-c">
									<div style="display: flex;align-items: baseline;">
										<div class="i"></div>
										<div class="i i1"></div>
										<div class="i i2"></div>
										<div class="i i3"></div>
									</div>
								</div>
								<div class="text">网页链接{{ index+1 }}</div>
								<a :href="item">
									<img class="button-go" src="@/static/line/btn-1.png">
								</a>
							</div>
						</div>
					</div>
					<div>
						<img src="@/static/download/a/asset-1.png" class="down-imgs">
					</div>
					

				</div>

			</div>

			<!-- 下线线路 -->
			<!-- <div class="line-body">
				<div class="line-bg f-c">
					<div class="line-icon-main" 
						v-for="(item,index) in $store.state.jsons.pcUrl"
						>
						<div class="line-icon f-c">
							<div style="display: flex;align-items: baseline;">
								<div class="i"></div>
								<div class="i i1"></div>
								<div class="i i2"></div>
								<div class="i i3"></div>
							</div>
						</div>
						<div class="text">网页链接{{ index+1 }}</div>
						<a :href="item">
							<img class="button-go" src="@/static/line/btn-1.png">
						</a>
					</div>
				</div>
			</div> -->
			

			<!-- 弹窗 -->
			<div class="fixed" v-show="show">
				<div class="fixed-bor">
					<div class="title-alert mb">
						<i class="el-icon-close title-x" @click="show = false"></i>
					</div>
					<!-- 苹果 -->
					<el-carousel v-show="toggle" height="600px" indicator-position="outside" :autoplay="false">
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">苹果版本应用程序下载和安装指南</div>
									<div class="f-title1">第一步</div>
									<p class="f-p">打开手机二维码扫码工具扫描页面二维码，进入页面<br>下载</p>
								</div>
								<img class="aimg" src="@/static/download/ios-step-1.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">苹果版本应用程序下载和安装指南</div>
									<div class="f-title1">第二步</div>
									<p class="f-p">弹出下载提示,点击“安装”</p>
								</div>
								<img class="aimg" src="@/static/download/ios-step-2.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">苹果版本应用程序下载和安装指南</div>
									<div class="f-title1">第三步</div>
									<p class="f-p">打开手机二维码扫码工具扫描页面二维码，进入页面<br>下载</p>
								</div>
								<img class="aimg" src="@/static/download/ios-step-3.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">苹果版本应用程序下载和安装指南</div>
									<div class="f-title1">第四步</div>
									<p class="f-p">打开APP显示"未受信任的企业级开发者"，应去通用里面设置</p>
								</div>
								<img class="aimg" src="@/static/download/ios-step-4.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">苹果版本应用程序下载和安装指南</div>
									<div class="f-title1">第五步</div>
									<p class="f-p">打开设置"通用"，然后点击"设备管理器"</p>
								</div>
								<img class="aimg" src="@/static/download/ios-step-5.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">苹果版本应用程序下载和安装指南</div>
									<div class="f-title1">第六步</div>
									<p class="f-p">选择弹框对应的应用后，点击信任</p>
								</div>
								<img class="aimg" src="@/static/download/ios-step-6.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">苹果版本应用程序下载和安装指南</div>
									<div class="f-title1">第七步</div>
									<p class="f-p">再次点击信任，即可游戏</p>
								</div>
								<img class="aimg" src="@/static/download/ios-step-7.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">苹果版本应用程序下载和安装指南</div>
									<div class="f-title1">第八步</div>
									<p class="f-p">开始游戏</p>
								</div>
								<img class="aimg" src="@/static/download/ios-step-8.png">
							</div>
						</el-carousel-item>
					</el-carousel>

					<!-- 安卓 -->
					<el-carousel v-show="!toggle" height="600px" indicator-position="outside" :autoplay="false">
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">安卓版本应用程序下载和安装指南</div>
									<div class="f-title1">第一步</div>
									<p class="f-p">打开手机二维码扫码工具扫描页面二维码<br>进入页面下载点击“立即下载”</p>
								</div>
								<img class="aimg" src="@/static/download/step-1.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">安卓版本应用程序下载和安装指南</div>
									<div class="f-title1">第二步</div>
									<p class="f-p">弹出下载提示,点击“安装下载”</p>
								</div>
								<img class="aimg" src="@/static/download/step-2.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">安卓版本应用程序下载和安装指南</div>
									<div class="f-title1">第三步</div>
									<p class="f-p">下载完成点击“安装”</p>
								</div>
								<img class="aimg" src="@/static/download/step-3.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">安卓版本应用程序下载和安装指南</div>
									<div class="f-title1">第四步</div>
									<p class="f-p">再次点击“安装”</p>
								</div>
								<img class="aimg" src="@/static/download/step-4.png">
							</div>
						</el-carousel-item>
						<el-carousel-item class="banner">
							<div class="f-body">
								<div class="f-left">
									<div class="f-title">安卓版本应用程序下载和安装指南</div>
									<div class="f-title1">第五步</div>
									<p class="f-p">打开汛利体育即可开始游戏</p>
								</div>
								<img class="aimg" src="@/static/download/step-5.png">
							</div>
						</el-carousel-item>
					</el-carousel>

				</div>
			</div>

		</div>

		<!-- 手机端 -->
		<div v-show="$i.deviceType != 'pc'" class="wap">
			<div class="f-c">
				<img src="@/static/logo.png" style="width:260rpx;margin-top:60rpx;">
			</div>
			<div class="f-c">
				<img class="wap-banner" src="@/static/download/a/wap-banner.png">
			</div>
			<div class="f-c">
				<img class="wap-title" src="@/static/download/a/wap-title.png">
			</div>
			<!-- <div class="f-c wap-text">
				视频直播让您体验娱乐投注两不误
			</div> -->
			<div class="f-c">
				<div class=" wap-down" @click="downFx">立即下载</div>
			</div>
			<!--  @click="linkFx()" -->
			<div class="f-c">
				<div class=" wap-p f-c">若无法下载，请使用以下-网页版链接</div>
			</div>
			<div class="f-c">
				<div class=" wap-text2 f-c">为了您的隐私安全，请勿与“国家反诈中心” APP同设备使用</div>
			</div>
			<!-- <h3>{{$i}}</h3> -->

			<!-- <div class=" wap-bottom f-c">下滑查看安装教程
				<img class="img" src="@/static/download/a/arrow-down.png">
			</div> -->
			<!-- 线路 -->
			<div class="line-body">
				<div class="line-bg f-c">
					<!-- <div class="line-title f-c">
						<img style="width:274px;" src="@/static/line/line-title.png">
						<div class="line-title-text">线路</div>
					</div> -->
					<div class="line-icon-main" 
						v-for="(item,index) in $store.state.jsons.h5Url"
						>
						<div class="line-icon f-c">
							<div style="display: flex;align-items: baseline;">
								<div class="i"></div>
								<div class="i i1"></div>
								<div class="i i2"></div>
								<div class="i i3"></div>
							</div>
						</div>
						<!-- <div class="num">0.2</div> -->
						<div class="text">网页链接{{ index+1 }}</div>
						<a :href="item">
							<img class="button-go" src="@/static/line/btn-1.png">
						</a>
					</div>
					<!-- <div class="line-icon-main line-color1">
						<div class="line-icon f-c">
							<div style="display: flex;align-items: baseline;">
								<div class="i"></div>
								<div class="i i1"></div>
								<div class="i i2"></div>
								<div class="i i3"></div>
							</div>
						</div>
						<div class="num">0.2</div>
						<div class="text">线路2</div>
						<a href="https://www.xunli05.com">
							<img class="button-go" src="@/static/line/btn-1.png">
						</a>
					</div>
					<div class="line-icon-main line-color2">
						<div class="line-icon f-c">
							<div style="display: flex;align-items: baseline;">
								<div class="i"></div>
								<div class="i i1"></div>
								<div class="i i2"></div>
								<div class="i i3"></div>
							</div>
						</div>
						<div class="num">0.2</div>
						<div class="text">线路3</div>
						<a href="https://www.xunli06.com">
							<img class="button-go" src="@/static/line/btn-1.png">
						</a>
					</div> -->

				</div>
			</div>


		</div>










	</div>
</template>

<script>
import vueQr from "vue-qr";
import { mapState } from "vuex";
import state from '../store/state'

export default {
	components: {
		vueQr,
	},
	data() {
		return {
			title: "Hello",
			show: false,
			toggle: true, //默认切换 苹果
			iosLink: '',
			link: '',//android
			web: '',//link-web
			siteUrl: '',
			QRcode: '',

		};
	},
	computed: {
		...mapState({
			jsons: (state) => state.jsons,
		}),
	},
	watch: {
		jsons() {
			this.loadFx();
			//this.fetchData();

		},
	},
	created() {
		console.log(this.$i.deviceType,'222222222222')
		this.loadFx();
	},
	mounted() {
	},
	methods: {
		 //二维码生成
		//  fetchData() {
		// 	let data = this.$store.state.jsons.siteUrl;
		// 	data.forEach(element => {
		// 		this.siteUrl = element;
		// 	});
		// 	// console.log(this.siteUrl, "siteurl")
		// 	uni.request({
		// 		url: this.$store.state.url,
		// 		success: (res) => {
		// 			// let result = res.data;
		// 			// console.log(result, "res2")
		// 			let responseData = res.data.datas.downloadInfo;
		// 			// console.log(responseData, "res")
		// 			responseData.forEach(element => {
		// 				if (element.deviceName == "downloadPage") {
		// 					this.QRcode = element.indexUrl;
		// 				}
		// 			});
		// 			// console.log(this.QRcode, "QRCODE")
		// 		},
		// 		fail: (err) => {
		// 			console.error('Error fetching data:', err);
		// 		}
		// 	});
		// },
		loadFx() {
			console.log(this.$i.platform,'下载')
			let that = this;
			let v = that.$store.state.jsons;
			if(state.jsons){
				if (this.$i.platform != "windows") {
					//单页面改成直接请求  //http://json.xunli10.com/xlStaticResources.json
					let url = {
						// urls: 'http://json.xunli10.com/xlStaticResources.json',
						urls: v.jsonUrl[0] + '' + v.staticResources,
					}
					console.log(url,"url")
					that.$ajax(url).then(r => {
						let v = r.datas.downloadInfo;
					console.log(v,"vvvvvvvvvvvvv")
						
						that.iosLink = v[0].downloadUrl;
						that.link = v[1].downloadUrl;
						that.web = v[2].indexUrl;
						console.log(that.link, 'download')
					})
				}
			}
			
		},
		downFx() {
			console.log(this.iosLink,this.link,'下载链接')
			// return
			if (this.$i.platform == 'ios') {
				window.location.href = this.iosLink; 	//test-5-15
				//  window.location.href="https://kjro68pqo9.xyz:19865/UhKtAJF9"; 	//test-5-15
			} else {
				window.location.href = this.link;
				//  window.location.href="http://www1.xunli10.com/install/apk/xunli1.0.0.apk";
			}

		},
		linkFx() {
			window.location.href=this.web;
		}



	}
};
</script>

<style scoped> 
uni-page-body {
	background: url("../static/download/a/bgDownLoadApp.png") no-repeat center;
    min-height: 100vh;
    background-size: 1920px;
}

.down-main {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
	position: relative;
}
.down-app{
	font-weight: bold;
	font-size: 178px;
	/* color: #fff; */
    color: #ededed;
	margin: 75px 0 0 0;
}
.down-body{
	width:975px;
	height:450px;
	border-radius: 33px;
	background:linear-gradient(#C91D05,#441209);
	/* padding: 70px 0 0 80px; */
	padding: 50px 0 0 80px;
	color:#F9F9F9;
	box-shadow: 4px 0 39px rgb(0, 0, 0, 0.65);
	position: relative;
	/* margin: -90px; */
}
.down-title{
	font-weight: bold;
	font-size:40px;
}
.down-title1{
	font-weight: bold;
	font-size:20px;
	margin: 10px 0;
}
.down-content{
	font-size: 14px;
	width:400px;
}
.down-ab-img{
	position: absolute;
    right: 70px;
    bottom: 0;
    width: 460px;
}
.down-er{
    position: absolute;
    right: -80px;
    top: 95px;
}
.down-er-body{
	border-radius: 10px;
	box-shadow: 4px 0 39px rgb(0, 0, 0, 0.65);
	width:188px;
	height: 188px;
}
.down-er h3{
	font-size:14px;
	margin-top:15px;
	background:linear-gradient(169deg,#c91d05 -5.74%,#441209 103.22%);
	border-radius: 50px;
	height:44px;
	padding:0 20px;
	/* width:200px; */
}
.down-imgs{
	margin-left: 110px;
    width: 500px;
}
.down-btn{
	display: flex;
	padding: 15px 0 0 0;
	width:350px;
}
.down-btn button{
	display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: #fff;
    width: 163px;
    height: 44px;
    flex-shrink: 0;
    font-size: 14px;
    font-weight: 700;
    color: #c01c05;
    border: none;
}
.down-main .line-bg .text{
	color:#fff;
}
.down-main .line-icon{
	box-shadow:none;
}



.bot-icon{
	margin-top:20px;
}

#er {
	/* width: 212px; */
	margin: 30px 0 56px 0;
}

.text-app {
	color: #494949;
	font-size: 16px;
	line-height: 32px;
	text-align: center;
	font-weight: 400;
	margin-bottom: 5px;
}

.btn {
	width: 114px;
	height: 40px;
	color: #fff;
	border: 0;
	cursor: pointer;
	border-radius: 6px;
	background: linear-gradient(45deg, #ffa756, #ff5200);
	font-size: 14px;
	line-height: 40px;
	outline: none;
}

.f-btn {
	width: 114px;
	height: 40px;
	color: #9e9e9e;
	background: #ffffff;
	border: 0;
	cursor: pointer;
	border-radius: 6px;
	font-size: 14px;
	line-height: 40px;
	outline: none;
	border-radius: 100px;
	margin: 0 10px;
}

.btns {
	color: #fff;
	border-radius: 100px;
	background: linear-gradient(45deg, #ffa756, #ff5200);
	cursor: pointer;
}

.title-alert {
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}

.title-x {
	position: absolute;
	font-size: 24px;
	top: -16px;
	right: -16px;
	background: #f3f7fe;
	box-shadow: -4px 4px 8px -2px #ddd;
	border-radius: 100px;
	width: 35px;
	height: 35px;
	text-align: center;
	line-height: 35px;
	color: #ddd;
	cursor: pointer;
}

.fixed {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgb(65 66 76/0.6);
	z-index: 2;
}

.h3-text {
	font-size: 30px;
	margin: 5px 0 15px 0;
	color: #363858;
}

.img-ab {
	width: 880px;
	position: absolute;
	left: 500px;
	top: 150px;
}

/* 轮播图样式 */
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
	background-color: rgb(221 225 255 / 30%);
}

.el-carousel__item:nth-child(2n+1) {
	background-color:rgb(221 225 255 / 80%);
} */
/deep/ .el-carousel__button {
	height: 10px;
	border-radius: 30px;
	opacity: 1;
	background: #dbdcde;
	width: 15px;
}

/deep/ .is-active .el-carousel__button {
	background-color: #f86c3b;
	width: 35px;
}

.img {
	width: 260px;
}

/*新加样式*/
.fixed-bor {
	background: #f3f7fe;
	border-radius: 10px;
	min-height: 700px;
	/* width:790px; */
	width: 850px;
	position: fixed;
	z-index: 3;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.er-bg {
	background: url("@/static/download/a/asset-stand.png") bottom no-repeat;
	background-size: 100%;
	/* min-height: 400px; */
	min-height: 480px;
	width: 100%;
}

.er-bor {
	width: 280px;
	min-height: 530px;
	background: url("@/static/download/a/card-1.png") top no-repeat;
	background-size: 100%;
	margin: 0 10px;
}

.er-bor1 {
	background: url("@/static/download/a/qr-frame.png") top no-repeat;
	background-size: 100%;
	text-align: center;
	width: 150px;
	margin: 70px auto 0 auto;
}

.er-bor .img {
	margin-top: 3px;
	width: 143px;
}

.textss {
	color: #5b6c9d;
	text-align: left;
	line-height: 26px;
	font-size: 17.5px;
	width: 620px;
	margin-bottom: 30px;
}

.er-text {
	color: #6877a5;
	font-size: 14px;
}

.er-bor h3 {
	font-size: 12.5px;
	margin-top: 15px;
}

.xian {
	height: 3px;
	/* width: 120%; */
	width: 100%;
	background: #b0c4ff;
	border: 1px solid #f1f1f1;
	border-radius: 2px;
	margin: 3px 0 3px 0%;
}

.er-bor .btns {
	width: 80px;
	margin: 5px 0 0 0;
}



.f-title {
	color: #404261;
	font-size: 40px;
	font-weight: bold;
	margin-bottom: 65px;
}

.f-title1 {
	color: #404261;
	font-size: 22px;
	margin-bottom: 10px;
}

.f-p {
	color: #6f82b8;
	font-size: 17px;
}

.aimg {
	width: 375px;
}

.f-body {
	display: flex;
}

.f-left {
	padding: 0 25px 0 40px;
	align-items: initial;
}

/* 5-14 pc端-扫一扫更新 */
.sao {}

.sao-text {
	font-size: 19px;
	text-shadow: 0 5px 5px rgb(16, 16, 16, 0.14);
	color: #666;
	text-align: center;
	width: 20px;
	margin-bottom: 20px;
	margin-right: 20px;
}

.sao-er {
	position: relative;
	padding-right: 44px;
	border-right: 1px solid #e9d8c9;
}

.sao-bor {
	/* position: absolute;
	left:0;
	top:0; */
	width: 265px;
	height: 265px;
}

.sao-img {
	position: absolute;
	left: 22px;
	/* top: 50px; */
	top: 16px;
	width: 220px;
	height: 220px;
	box-shadow: 0 5px 5px rgb(16, 16, 16, 0.14);
}

.sao-body {
	padding-left: 20px;
}

.sao-btn {
	border-bottom: 1px solid #cacaca;
	text-align: center;
}

.sao-btn .texts {
	color: #666;
	font-size: 19px;
	text-shadow: 0 5px 5px rgb(16, 16, 16, 0.14);
	font-weight: bold;
}

.sao-btn .botton {
	width: 132px;
	height: 54px;
	margin: 5px 0 5px 0;
	cursor: pointer;
}

.sao-btn .bor {
	box-shadow: 0 5px 5px rgb(16, 16, 16, 0.14);
	height: 1px;
	width: 150px;
}


/* 样式设置 */

.down-main .line-bg{
	width: 350px;
    background: none;
    padding-top: 0;
    padding: 30px 0;
}
.line-body{
	width: 1310px;
    margin: 0 auto;
}


/* 扫一扫 end */








/* 手机端 */
@media screen and (max-width: 769px) {
	uni-page-body {
		background: url("../static/wap-bg1.jpg") top !important;
		/* background: url("../static/wap-bg.png") top !important; */
		min-height: 100vh;
		background-size: 100% 100% !important;
	}

	.wap-banner {
		width: 660rpx;
		height: 660rpx;
	}

	.wap-title {
		width: 400rpx;
		margin-bottom: 20rpx;
		margin-top:-30px;
	}

	.wap-text {
		font-size: 34rpx;
		color: #404261;
		margin-bottom: 34rpx;
	}

	.wap-down {
		width: 600rpx;
		height: 76rpx;
		line-height: 68rpx;
		text-align: center;;
		font-size: 30rpx;
		color: #fff;
		background: url("@/static/wap-btn.png") no-repeat;
		background-size: 100% 100%; 
		/* margin: 0 0 22rpx 0; */
		border-radius: 30px;
	}

	.wap-p {
		font-size: 24rpx;
		/* color: #F86C3B; */
		color: #7b0000;
		width: 600rpx;
		height: 70rpx;
		border-radius: 10rpx;
		/* border: 1px solid #F86C3B; */
		/* text-shadow: 1px 1px 5px #ff8c63; */
		text-shadow: 1px 1px 5px #ff7676;
    	font-weight: bold;
	}

	.wap-text2 {
		color: #6C7BA8;
		font-size: 22rpx;
	}

	.wap-bottom {
		color: #404261;
		font-size: 30rpx;
		margin: 60rpx 0;
	}

	.wap-bottom img {
		margin-left: 20rpx;
		width: 20rpx;
	}

	.line-bg{
		width:100%;
		background:none ;
		padding-top:0;
		margin: 40rpx 0 0 0;
	}
	.line-body{
		width: 100%;
		margin: 0 auto;
	}




}
</style>