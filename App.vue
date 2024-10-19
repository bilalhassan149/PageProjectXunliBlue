<!-- <script>
import state from "./store/state";

export default {
  data() {
    return {
      errorApi: "",
      allTime: 0,
      allTimeClear: "",
    };
  },
  //onlaunch 阶段获取不到 vue-赋值
  //   onLaunch: function () {
  //     console.log("ver", "1.7");

  //     //WEB端 先获取父页面，初始化完成，在调用接收各端 token
  //     window.parent.postMessage(
  //       {
  //         name: "web",
  //       },
  //       "*"
  //     );
  //     this.$dataVal();

  //     //ping formal - api
  //     uni.showLoading({
  //       title: "加载中..",
  //     });
  //     setTimeout((res) => {
  //       uni.hideLoading();
  //     }, 1800);
  //     let that = this;
  //     let apiTrue = false;
  //     // let json = '/xlMain.json';
  //     let json = "/V2/xlMain.json";
  //     //计算延迟
  //     that.allTime = 0;
  //     that.allTimeClear = setInterval((res) => {
  //       that.allTime = that.allTime + 0.1;
  //        console.log(that.allTime)
  //     }, 100);
  //     setTimeout(function () {
  //       clearInterval(that.allTimeClear);
  //     }, 15000);
  //     //
  // 	console.log(that.$urls,"xxxxxxxxxxxxx");
  //     that.$urls.forEach((api, index) => {
  //       console.log(that.$time(api + json) + '测试')
  //       let urls = {
  //         urls: that.$time(api + json),
  //       };
  //       that
  //         .$ajax(urls)
  //         .then((res) => {
  //           uni.hideLoading();
  //           console.log(res, "api接口", api);
  //           //ping = ok
  //           if (!apiTrue) {
  //             apiTrue = true;
  //             state.jsonUrl = api;
  //             uni.setStorageSync("jsonUrl", state.jsonUrl);
  //             this.getJson(res);
  //             // bet - activity; bet.vue ~newBet.vue
  //             let url = {
  //               urls: state.jsonUrl + state.jsons.popularize,
  //             };
  //             this.$ajax(url).then((res) => {
  //               // this.vipData = res.validActivity;
  //               // this.totalzz(0)
  //               state.betVipData = res.validActivity;
  //               // uni.setStorageSync('VipData',state.betVipData)
  //               console.log(state.betVipData, "betvipdata");
  //               this.$bet(0);
  //               this.$VipData();
  //             });
  //             //
  //           }
  //           //time
  //           let t = that.allTime.toFixed(2);
  //           this.$set(state.jsonUrlPing, index, t);
  //         })
  //         .catch((res) => {
  //           uni.hideLoading();
  //           this.errorApi = api;
  //         });
  //     });
  //   },
  onLaunch: function () {
    console.log("ver", "0.1");
    //ping formal - api
    window.parent.postMessage(
      {
        name: "web",
      },
      "*"
    );
    this.$dataVal();
    uni.showLoading({
      title: "加载中..",
    });
    setTimeout((res) => {
      uni.hideLoading();
    }, 1800);
    let that = this;
    let apiTrue = false;
    let json = "/V2/xlMain.json";
    that.allTime = 0;
    that.allTimeClear = setInterval((res) => {
      that.allTime = that.allTime + 0.1;
      //  console.log(that.allTime)
    }, 100);
    setTimeout(function () {
      clearInterval(that.allTimeClear);
    }, 15000);
    console.log(that.$urls, "YYYYYYYYYYYYYYYYYY");
    that.$urls.forEach((api, index) => {
      console.log(api + json, "ceshi");
      let urls = {
        urls: that.$time(api + json),
      };
      that
        .$ajax(urls)
        .then((res) => {
          uni.hideLoading();
          console.log(res, "api接口",apiTrue, api);
          if (res.status == 200) {
            //ping = ok
            if (!apiTrue) {
              apiTrue = true;
              state.jsonUrl = api;
              console.log(res, "res");
              console.log(state.jsonUrl, "state.jsonUrl");
              uni.setStorageSync("jsonUrl", state.jsonUrl);
              console.log(res, "ressssss");
              this.getJson(res);
              let url = {
                urls: state.jsonUrl + state.jsons.popularize,
              };
              console.log(url, "urlurl");

              this.$ajax(url).then((res) => {
                console.log(res, "sdsdsdsdsd");
                state.betVipData = res.validActivity;
                console.log(state.betVipData, "betvipdata");
                this.$VipData();
                // this.$bet(1);
              });
            }
            // return;
            let t = that.allTime.toFixed(2);
            this.$set(state.jsonUrlPing, index, t);
          }
        })
        .catch((res) => {
          uni.hideLoading();
          this.errorApi = api;
        });
    });
  },

  methods: {
    getJson(res) {
      let that = this;
      uni.hideLoading();
      let n = res.data[0]; //jsons-main
      console.log(n, "qqqqqqqqqqqqqqq");
      state.apis = n.apiUrl;
      state.jsons = n;
      uni.setStorageSync("jsons", n);

      // ping time setTime  .. init data
      that.pingApi(n.apiUrl, n.apiTestMethod, 5);
      that.pingApi(n.iconUrl, n.iconTestMethod, 1);
      that.pingApi(n.siteUrl, n.siteTestMethod, 2);
      that.getApiUrl(n.apiUrl, n.apiTestMethod);

      // that.pingApi();
      // that.getApiUrl();
      // that.pingApi(n.pcUrl, '/img/logo.png', 3);
      // that.pingApi(n.h5Url, '/img/logo.png', 4);
      setTimeout((res) => {
        console.log(that.errorApi, "lianj");
        if (that.errorApi) {
          that.errorFx("404", that.errorApi);
        }
      }, 2000);
    },
    // icon-get-api
    pingApi(apiUrl, test, num) {
      let that = this;
      let ping = false;
      apiUrl.forEach((els, index) => {
        // let url = {urls:els + test,type:'get'};
        console.log(apiUrl, "apiUrlapiUrl");

        that.$res.getRequest(els + test).then((res) => {
          console.log(res.data.info, "pingApi");

          if (res.data.info == "success" && !ping) {
            //ping = ok ,   1-icon,2-siteUrl
            console.log(els, "elselselselsels");
            ping = true;
            if (num == 1) {
              that.$store.state.iconUrl = els;
              uni.setStorageSync("iconUrl", state.iconUrl);
            }
            if (num == 2) {
              that.$store.state.siteUrl = els;
              uni.setStorageSync("siteUrl", state.siteUrl);
            }
          }
          //time
          let t = that.allTime.toFixed(2);
          if (num == 1) {
            this.$set(state.iconPing, index, t);
          } else if (num == 2) {
            this.$set(state.sitePing, index, t);
          }
          if (num == 3) {
            this.$set(state.h5Ping, index, t);
          }
          if (num == 5) {
            if (!ping) {
              ping = true;
              state.apis = els;
              // state.apiUrl = els;
              console.log(els, "apis");
              uni.setStorageSync("apis", els);
              // uni.setStorageSync("apiUrl", els);

              state.ipData = res.data;
            }
            this.$set(state.apiPing, index, t);
          }
          //console.log('allTime',index,that.allTime,state.iconPing)
        });
      });
    },
    ////////////////////////////////////////////////
    getApiUrl(apiUrl, test) {
      console.log(apiUrl,"api接口BHB1"); //test "/test/ping"  for 请求 apiurl是否ping 通
      let that = this;
      let indexStatus = false;
      apiUrl.forEach((els, index) => {
        that.$res.getRequest(els + test).then((res) => {

          if (res.data.code == 0) {
            //ping = ok
            console.log(res.data.code,"api接口BHB2"); //test "/test/ping"  for 请求 apiurl是否ping 通

            if (!indexStatus) {
              indexStatus = true;
              state.apiUrl = els;
              uni.setStorageSync("apiUrl", els);
            }
            console.log(res, "api接口BHB", els);
            // return;
          } else {
            console.log(res, "失败api接口BHB：", els);
            that.sbSj(res.data.code, els);
          }
        });
      });
    },
    //////////////////////////////////////////////
    // getApiUrl() {
    //   const apiUrl = [
    //     `${
    //       document.domain === "localhost"
    //         ? state.protocol
    //         : window.location.protocol
    //     }//api.${
    //       document.domain === "localhost"
    //         ? state.defaultAPI
    //         : document.domain.split(".")[1]
    //     }.com`,
    //   ];
    //   state.apiUrl = apiUrl[0];
    //   uni.setStorageSync("apiUrl", state.apiUrl);
    // },

    // pingApi() {
    //   const iconUrl = [
    //     `${
    //       document.domain === "localhost"
    //         ? state.protocol
    //         : window.location.protocol
    //     }//static.${
    //       document.domain === "localhost"
    //         ? state.defaultAPI
    //         : document.domain.split(".")[1]
    //     }.com`,
    //   ];
    //   state.iconUrl = iconUrl[0];
    //   uni.setStorageSync("iconUrl", state.iconUrl);
    //   const siteUrl = [
    //     `${
    //       document.domain === "localhost"
    //         ? state.protocol
    //         : window.location.protocol
    //     }//site.${
    //       document.domain === "localhost"
    //         ? state.defaultAPI
    //         : document.domain.split(".")[1]
    //     }.com`,
    //   ];
    //   state.siteUrl = siteUrl[0];
    //   uni.setStorageSync("siteUrl", state.siteUrl);
    // },
    /////////////////////////////////////////////
    //错误上报 error -upload
    errorFx(code, urls) {
      let that = this;
      let data = {
        // userName: "活动页请求API错误",
        userName: "测试-活动页请求API错误",
        deviceType: 0,
        errorApi: urls,
        errorInfo: code,
      };
      this.$ajax(that.$error, data).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
/*每个页面公共css */
@import "static/css/style.scss";

page {
  background: #fff;
}
</style> -->
<script>
import state from './store/state'

export default {
	data(){
		return{
			errorApi:'',
			allTime:0,
			allTimeClear:'',
		}
	},
	//onlaunch 阶段获取不到 vue-赋值  
	onLaunch: function() {
		console.log('ver','0.2');

		//WEB端 先获取父页面，初始化完成，在调用接收各端 token
		window.parent.postMessage({
			name:'web'
		},'*')
		//接收各端 token
		this.$dataVal()

		//ping formal - api
		uni.showLoading({
			title:'加载中..'
		})
		setTimeout(res=>{
			uni.hideLoading()
		},1800);
		let that = this;
		let apiTrue = false;
		// let json = '/xlMain.json';
		let json = '/V2/xlMain.json';
		//计算延迟
		that.allTime = 0; 
		that.allTimeClear = setInterval(res=>{
			that.allTime = that.allTime+0.1;
			// console.log(that.allTime)
		},100)
		setTimeout(function(){
			clearInterval(that.allTimeClear)
		},15000)
		//
		that.$urls.forEach((api, index) => {
			// console.log(that.$time(api + json) + '测试')
			let urls = {
				urls:that.$time(api + json)
			}
			that.$ajax(urls).then((res) => {
				uni.hideLoading();
				console.log(res, "api接口", api);
				//ping = ok
				if (!apiTrue) {
					apiTrue = true;
					state.jsonUrl = api;
					uni.setStorageSync('jsonUrl', state.jsonUrl);
					this.getJson(res);
					// bet - activity; bet.vue ~newBet.vue
					let url = {
                        urls:state.jsonUrl + state.jsons.popularize,
                    };
                    this.$ajax(url).then((res) => {
                        // this.vipData = res.validActivity;
                        // this.totalzz(0)
						state.betVipData = res.validActivity;
						this.$bet(0)
                    });
					//
				}
				//time
				let t = that.allTime.toFixed(2);
				this.$set(state.jsonUrlPing,index,t)
			}).catch(res=>{
				uni.hideLoading();
				this.errorApi = api;
			});
		});

		
	},
	methods:{
		getJson(res) {
			let that = this;
			uni.hideLoading();
			let n = res[0]; //jsons-main
			state.api = n.apiUrl;
			state.jsons = n;
			// ping time setTime  .. init data
			that.pingApi(n.apiUrl, n.apiTestMethod,5);
			that.pingApi(n.iconUrl, n.iconTestMethod, 1);
			that.pingApi(n.siteUrl, n.siteTestMethod, 2);
			uni.setStorageSync("jsons", n);
			// that.pingApi(n.pcUrl, '/img/logo.png', 3);
			// that.pingApi(n.h5Url, '/img/logo.png', 4);
			setTimeout(res=>{
				// console.log(that.errorApi ,'lianj')
				if(that.errorApi){
					that.errorFx('404',that.errorApi)
				}
			},2000)
		},
		// icon-get-api
		pingApi(apiUrl, test, num) {
			let that = this;
			let ping = false;
			apiUrl.forEach((els, index) => {
				let url = {urls:els + test,type:'get'};
				that.$ajax(url).then((res) => {
					if (res.info == "success" && !ping) {
						//ping = ok ,   1-icon,2-siteUrl
						ping = true;
						if (num == 1) {
							that.$store.state.iconUrl = els;
							uni.setStorageSync("iconUrl", state.iconUrl);
						}
						if (num == 2) {
							that.$store.state.siteUrl = els;
							uni.setStorageSync("siteUrl", state.siteUrl);
						}

					}
					//time
					let t = that.allTime.toFixed(2);
					if (num == 1) {
						this.$set(state.iconPing,index,t)
					}else
					if (num == 2) {
						this.$set(state.sitePing,index,t)
					}
					if (num == 3) {
						this.$set(state.h5Ping,index,t)
					}
					if (num == 5) {
						if(!ping){
							ping = true;
							state.apis = els;
							uni.setStorageSync("apis", els);
							state.ipData = res.data;
						}
						this.$set(state.apiPing,index,t);

					}
					//console.log('allTime',index,that.allTime,state.iconPing)
				});
			});
		},
		//错误上报 error -upload 
		errorFx(code, urls) {
			let that = this;
			let data = {
				// userName: "活动页请求API错误",
				userName: "测试-活动页请求API错误",
				deviceType: 0,
				errorApi: urls,
				errorInfo: code,
			};
			this.$ajax(that.$error, data).then((res) => {
				console.log(res);
			});
		},



	}


}
</script>

<style>

/*每个页面公共css */
@import 'static/css/style.scss';

page{
	background:#fff;
}









</style>