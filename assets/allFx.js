import state from "../store/state";

// bet data ，  获取投注数据
export function bet(index) {
  let n0 = state.betVipData.sports;
  let n1 = state.betVipData.games;
  let n2 = state.betVipData.boardGame;
  if (index == 0) {
    state.betTotal = n0[n0.length - 1].valid;
    state.betTotalImg = n0[n0.length - 1].imageUrl;
  } else if (index == 1) {
    state.betTotal = n1[n1.length - 1].valid; 
    state.betTotalImg = n1[n1.length - 1].imageUrl;
  } else {
    state.betTotal = n2[n2.length - 1].valid;
    state.betTotalImg = n2[n2.length - 1].imageUrl;
  }
}

// 联系客服
export function about() {
  let that = this;
  let json = that.$store.state.jsons;
  let url = {
    urls: that.$store.state.jsonUrl + json.thirdPartyInfo,
  };
  let data = uni.getStorageSync("id") + " 的推广游客";
  this.$ajax(url).then((res) => {
    // console.log(res.datas);
    window.open(
      res.datas.customerService.url + '?metadata={"name":"' + data + '"}',
      "_blank"
    );
  });
}

export function VipData() {
	let that = this
  let json = that.$store.state.jsons;
  let url = {
    urls: that.$store.state.jsonUrl + json.popularize,
  };
  // console.log(url,"url");
  this.$ajax(url).then((res) => {
    state.VipData = res.validActivity;
    uni.setStorageSync("VipData", state.VipData);
    // console.log(state.betVipData, "betvipdata");
  });
}

// token
export function tokenFx() {
  // console.log("活动id");
  let that = this;
  //接收H5、pc value
  window.addEventListener("message", (e) => {
    if (e.data.token) {
      that.$store.state.token = e.data.token;
      // console.log(that.$store.state.token,'to------------存储成功')
      uni.setStorage({
        key: "tokens",
        data: e.data,
        success() {
          //	console.log('H5存储成功',that.$store.state.token) // id=80
        },
      });
    }
  });
  //if(that.$i.platform == 'android' || that.$i.platform =='ios'){
  window.transferConsultResult = function (value) {
    let datas = {
      token: value,
    };
    that.$store.state.token = value;
    uni.setStorage({
      key: "tokens",
      data: datas,
      success() {
        console.log("存储成功app");
      },
    });
  }; // 把本地方法挂载到window中
  //}
}

//复制文字
export function copy(text) {
  uni.setClipboardData({
    data: text,
    success() {
      uni.showToast({
        title: "复制成功",
        icon: "none",
      });
    },
    fail() {
      uni.showToast({
        title: "不支持复制，或请刷新浏览器在试试",
        icon: "none",
      });
    },
  });
}
