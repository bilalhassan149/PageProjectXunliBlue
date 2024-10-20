<script>
import state from "./store/state";

const lang = uni.getStorageSync("lang");
export default {
  data() {
    return {
      errorApi: "",
      allTime: 0,
      allTimeClear: "",
    };
  },
  //onlaunch 阶段获取不到 vue-赋值
  onLaunch: function () {
    console.log("ver", "1.09");
    //WEB端 先获取父页面，初始化完成，在调用接收各端 token
    window.parent.postMessage(
      {
        name: "web",
      },
      "*"
    );
    //接收各端 token
    this.$dataVal();

    //ping formal - api
    //  uni.showLoading({
    //    title: this.$en(state.ens.alerts.loading),
    //  });

    // setTimeout((res) => {
    //  uni.hideLoading();

    // }, 1800);

    let that = this;
    let apiTrue = false;
    // let json = '/xlMain.json';
    let json =
      lang === "en"
        ? "/main_en.json"
        : lang === "cn"
        ? "/main_cn.json"
        : lang === "fn"
        ? "/main_tc.json"
        : "/main_tc.json";
    //计算延迟
    that.allTime = 0;
    that.allTimeClear = setInterval((res) => {
      that.allTime = that.allTime + 0.1;
      // console.log(that.allTime)
    }, 100);
    setTimeout(function () {
      clearInterval(that.allTimeClear);
    }, 15000);
    //
    that.$urls.forEach((api, index) => {
      // console.log(that.$time(api + json) + '测试')
      let urls = {
        urls: that.$time(api + json),
      };
      that
        .$ajax(urls)
        .then((res) => {
          uni.hideLoading();

          console.log(res, "api接口", api);

          //ping = ok
          if (!apiTrue) {
            apiTrue = true;
            state.jsonUrl = api;
            uni.setStorageSync("jsonUrl", state.jsonUrl);
            this.getJson(res);
            // bet - activity; bet.vue ~newBet.vue
            let url = {
              urls: state.jsonUrl + state.jsons.popularize,
            };
            this.$ajax(url).then((res) => {
              // this.vipData = res.validActivity;
              // this.totalzz(0)
              state.betVipData = res.validActivity;
              this.$bet(0);
            });
            //
          } 
          //time
          let t = that.allTime.toFixed(2);
          this.$set(state.jsonUrlPing, index, t);
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
      let n = res[0]; //jsons-main
      state.api = n.apiUrl;
      state.jsons = n;
      // console.log(n,"nnnnnnnnnnnnnnnnnnnnnnnn")
      // ping time setTime  .. init data
      // that.pingApi(n.apiUrl, n.apiTestMethod, 5);
      // that.pingApi(n.iconUrl, n.iconTestMethod, 1);
      // that.pingApi(n.siteUrl, n.siteTestMethod, 2);
      that.getApiUrl();
      that.pingApi();
      that.getbanner(
        n.staticResourcesVersionNo,
        state.jsonUrl + n.staticResources
      );

      uni.setStorageSync("jsons", n);
      that.codeFx(n.responseCodeVersionNo, state.jsonUrl + n.responseCode);
      // that.pingApi(n.pcUrl, '/img/logo.png', 3);
      // that.pingApi(n.h5Url, '/img/logo.png', 4);

      setTimeout((res) => {
        // console.log(that.errorApi ,'lianj')
        if (that.errorApi) {
          that.errorFx("404", that.errorApi);
        }
      }, 2000);
    },
    async getbanner(ver, url) {
      // console.log(ver,url,"uuuuuuuu")
      let old = state.static;
      if (!old || old.ver !== ver) {
        await this.$res.getRequest(this.$time(url)).then((res) => {
          state.static = res.data.datas;
          state.static.ver = ver; //VersionNo
        });
      }

      //rule
      let rules = state.static.regularExpression; //获取正则
      let obj = Object.keys(rules);
      obj.forEach((res) => {
        rules[res] = new RegExp(rules[res]);
      });
      state.rule = rules;
      console.log(state.rule, "state.rule");
    },
    codeFx(ver, url) {
      let old = state.codes;
      if (!old || state.ver.codes != ver) {
        // console.log(
        //   ver, url,
        //   "fgdfgdf"
        // );

        this.$res.getRequest(this.$time(url)).then((res) => {
          // console.log(
          //    res,
          //     "fgdfgdf"
          //   );
          state.codes = res.data;
          state.ver.codes = ver;
          uni.setStorageSync("codes", state.codes);
          uni.setStorageSync("ver", state.ver);
        });
      }
    },
    getApiUrl() {
      const apiUrl = [`${state.protocol}//api.${state.defaultAPI}.com`];
      state.apiUrl = apiUrl[0];
      state.apis = apiUrl[0];

      uni.setStorageSync("apis", state.apis);
      uni.setStorageSync("apiUrl", state.apiUrl);

      //  this.$betRewardReceive();
    },

    // icon-get-api
    pingApi() {
      const iconUrl = [`${state.protocol}//img.${state.defaultAPI}.com`];
      state.iconUrl = iconUrl[0];
      uni.setStorageSync("iconUrl", state.iconUrl);
      const siteUrl = [`${state.protocol}//site.${state.defaultAPI}.com`];
      state.siteUrl = siteUrl[0];
      uni.setStorageSync("siteUrl", state.siteUrl);
      // console.log(apiUrl, test, num,"asdasd")
      // let that = this;
      // let ping = false;
      // apiUrl.forEach((els, index) => {
      //   let url = els + test;
      //   let time = new Date().getTime();
      //   that.$res.getRequest(url + "?time=" + time).then((res) => {
      //     if (res.info == "success" && !ping) {
      //       //ping = ok ,   1-icon,2-siteUrl
      //       ping = true;
      //       if (num == 1) {
      //         that.$store.state.iconUrl = els;
      //         uni.setStorageSync("iconUrl", state.iconUrl);
      //       }
      //       if (num == 2) {
      //         that.$store.state.siteUrl = els;
      //         uni.setStorageSync("siteUrl", state.siteUrl);
      //       }
      //     }
      //     //time
      //     let t = that.allTime.toFixed(2);
      //     if (num == 1) {
      //       this.$set(state.iconPing, index, t);
      //     } else if (num == 2) {
      //       this.$set(state.sitePing, index, t);
      //     }
      //     if (num == 3) {
      //       this.$set(state.h5Ping, index, t);
      //     }
      //     if (num == 5) {
      //       if (!ping) {
      //         ping = true;
      //         state.apis = els;
      //         uni.setStorageSync("apis", els);
      //         state.ipData = res.data;
      //       }
      //       this.$set(state.apiPing, index, t);
      //     }
      //     //console.log('allTime',index,that.allTime,state.iconPing)
      //   });
      // });
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
  },
};
</script>

<style>
/*每个页面公共css */
@import "static/css/style.scss";

page {
  background: #fff;
}
</style>
