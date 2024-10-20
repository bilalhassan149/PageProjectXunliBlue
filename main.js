import Vue from "vue";
import App from "./App";

import store from "./store";
import state from "./store/state"
Vue.config.productionTip = false;
// 引入element-ui插件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import axios from "axios";
// fx
import { tokenFx, about, bet,MatchFx } from "./assets/allFx";

import RequestSender from "./common/js/request.js";
Vue.prototype.$res = RequestSender;

// api
import globalAPI from "./common/js/globalAPI";
Vue.prototype.$globalApi = globalAPI;
// ping time 拼接时间
Vue.prototype.$time = function (url) {
  return url + "?time=" + new Date().getTime();
}; 
//使用此 请求
// const currentUrl = window.location.hostname;
// if (currentUrl.includes('lok')) {
//   const match = currentUrl.match(/lok(\d+)/);
//   let Number = ""; 
//   if (match) { 
//     Number = match[1]; 
//   }
//   Vue.prototype.$urls = [`https://json.lok${Number}.com`];
//   Vue.prototype.urls = [`http://api.lok${Number}.com`];
// } else {
//   Vue.prototype.$urls = ["https://json."+state.defaultAPI+".com"];
//   Vue.prototype.urls = ["http://api."+state.defaultAPI+".com"];
// } 

Vue.prototype.$urls = [
  `${state.protocol
  }//json.${
    state.defaultAPI
  }.com`,
];

// Vue.prototype.$urls = ["https://json.lok66.com"]; //formal winlok

//
// const urls = "http://api.lok88.com"; //线上网址
// Vue.prototype.urls = urls; //全局url
Vue.prototype.$token = {
  "Auth-Token": uni.getDeviceInfo().deviceId,
  "Content-Type": "application/x-www-form-urlencoded",
  "accept-language": "zh-CN,zh;q=0.9,en-US;",
};

Vue.prototype.$en = function (val) {
  return val.replace(/\n/g, "<br>");
};
Vue.prototype.$en2 = function (a, b) {
  let that = this;
  let vals = that.$store.state.ens[a][b];
  console.log("test", "------", that.$store.state.ens[a][b]);
  return vals.replace(/\n/g, "<br>");
};



import loading from "./components/loading/loading.vue";
Vue.component("loading", loading);

import LangNav from "./components/LangNav/LangNav.vue";
Vue.component("LangNav", LangNav);

// import RequestSender from "./common/js/request.js";
// Vue.prototype.$res = RequestSender;


Vue.prototype.$time = function (url) {
  return url + "?time=" + new Date().getTime();
};

Vue.prototype.$i = uni.getDeviceInfo(); //设备信息
// uni.getDeviceInfo().deviceType == 'pc'?'0':'4', //设备类型   0-PC浏览器；1-手机浏览器 ；2-Android App ；3-iOS App；4-其他
// navigator.userAgent,//登录注册固定参数二：设备型号（将设备的 User-Agent 传人）
// getDeviceInfo().deviceId, //登录注册固定参数三：设备码，一台设备一个设备码，没有就传一个 uuid码

//api---------------------------------------------------------------------------------
//注册 -get
Vue.prototype.$reg = { url: "userRegister/register", type: "post" };

Vue.prototype.$regCode = { url: "userRegister/sendRegisterSms", type: "post" };

Vue.prototype.$regEmail = { url: "userRegister/registerByEmail", type: "post" };

Vue.prototype.$match = { url: "systemInfo/getIndemnityMatch", type: "post" };

Vue.prototype.$betRewardQuery = { url: "activityApply/betReward/query", type: "post" };
Vue.prototype.$betRewardReceive = { url: "activityApply/betReward/receive", type: "POST" };

Vue.prototype.$newMemberMission_query = { url: "activityApply/newMemberMission/query", type: "POST" };
Vue.prototype.$newMemberMission_receive = { url: "activityApply/newMemberMission/receive", type: "POST" };

Vue.prototype.$betMissionQuery = { url: "activityApply/betMission/query", type: "POST" };
Vue.prototype.$betMissionReceive = { url: "activityApply/betMission/receive", type: "POST" };



 
Vue.prototype.$emailCode = {
  url: "userRegister/sendRegisterEmail",
  type: "post",
};

//登录 - 发送验证
Vue.prototype.$getCode = { url: "userLogin/sendLoginSms", type: "post" };
//注册 - 发送验证 
//登录接口
Vue.prototype.$login = { url: "userRegister/register" };
//活动申请
Vue.prototype.$activity = { url: "activityApply/applyActivity", type: "post" };

Vue.prototype.$redemptionNewMember = { url: state.ens.newMemberFirstRecharge.redemptionApi, type: "post" };
Vue.prototype.$redemptionPerDay = { url: state.ens.perDayFirstRecharge.redemptionApi, type: "post" };


Vue.prototype.$activity = { url: "activityApply/applyActivity", type: "post" };

//活动申请 - 获取上月流水总额
// gameType（1-体育；2-电竞；4-棋牌）
const moneyUrl = { url: "userInfo/getLastMonthTotalValid", type: "post" };
Vue.prototype.$money = moneyUrl;
//获取本月流水
Vue.prototype.$thisMoney = {
  url: "userInfo/getThisMonthTotalValid",
  type: "post",
};
// 获取银行卡
Vue.prototype.$bank = { url: "userInfo/getAllBankCard", type: "post" };
//上报 错误api
Vue.prototype.$error = { url: "systemInfo/recordApiError" };

// 全局方法------------------------------------------------------------------
// 接收父页面 数据，活动 token
Vue.prototype.$dataVal = tokenFx;
// 联系方式
Vue.prototype.$about = about;
// bet data ，  获取投注数据
Vue.prototype.$bet = bet;

Vue.prototype.$MatchFx = MatchFx;

/**
 * 发送请求
 */
Vue.prototype.$ajax = baseRequest;

function baseRequest(v, data, head) {
  return new Promise((reslove, reject) => {
    let that = this;
    let state = that.$store.state;
    // return
    uni.request({
      url: v.urls || state.apis + "/" + v.url,
      method: v.type || "GET",
      header: head || {
        "Auth-Token": state.token,
        // 'Auth-Token': "79ea4758-346c-4db8-b114-bd0ef2b1ec4c",
        "accept-language": "zh-CN,zh;q=0.9,en-US;",
      },
      data: data || {},
      withCredentials: true,
      success: (res) => {
        if (res.data.status == 200 || res.statusCode == 200) {
          reslove(res.data);
        } else if (res.data.status == 501) {
          // uni.reLaunch({
          // 	url: '/pages/home'
          // })
          reject(res.data);
        } else {
          // uni.showToast({
          // 	title:res.data.message?res.data.message:res.statusCode+'网络请求失败',
          // 	icon:'none'
          // })
          reject(
            res.data.message
              ? res.data.message
              : res.statusCode || "网络请求失败"
          );
        }
      },
      fail: () => {
        reject("请求失败");
      },
    });
  });
}

Vue.prototype.$ajax2 = baseRequest2;

function baseRequest2(v, data, head) {
  return new Promise((reslove, reject) => {
    let that = this;
    let state = that.$store.state;
    // return
    uni.request({
      url: v.urls || state.apis + "/" + v.url,
      method: v.type || "POST",
      header: head || {
        "Auth-Token": state.token,
        // 'Auth-Token': "79ea4758-346c-4db8-b114-bd0ef2b1ec4c",
        "accept-language": "zh-CN,zh;q=0.9,en-US;",
      },
      data: data || {},
      withCredentials: true,
      success: (res) => {
        if (res.data.status == 200 || res.statusCode == 200) {
          reslove(res.data);
        } else if (res.data.status == 501) {
          // uni.reLaunch({
          // 	url: '/pages/home'
          // })
          reject(res.data);
        } else {
          // uni.showToast({
          // 	title:res.data.message?res.data.message:res.statusCode+'网络请求失败',
          // 	icon:'none'
          // })
          reject(
            res.data.message
              ? res.data.message
              : res.statusCode || "网络请求失败"
          );
        }
      },
      fail: () => {
        reject("请求失败");
      },
    });
  });
}



// axios 请求
Vue.prototype.$axios = axiosFx;
function axiosFx(v, data, head) {
  console.log(this.$store.state.apis,"apis");

  let that = this;
  let state = that.$store.state;
  return new Promise(async (reslove, reject) => {
    let a = await axios({
      url: state.apis + "/" + v.url,
      method: v.type || "GET",
      headers: {
        "Auth-Token": state.token,
        // 'Auth-Token': "9adae78d-9bd6-4a21-b46a-ab6f0ca02ed7",
        "accept-language": "zh-CN,zh;q=0.9,en-US;",
      },
      data: data || {},
      withCredentials: true,
    });

    if (a.status == 200 || res.statusCode == 200) {
      reslove(a.data);
    } else {
      // uni.showToast({
      // 	title:'请求失败' + res,
      // 	icon:'none'
      // })
      reject("请求失败");
    }
  });
}

App.mpType = "app";

const app = new Vue({
  store,
  ...App,
});
app.$mount();
