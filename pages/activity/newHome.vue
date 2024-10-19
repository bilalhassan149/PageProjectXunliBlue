<template>
  <div>
    <div>
      <img class="home-banners pc" src="@/static/activity/pc-home.jpg" />
      <img class="home-banners wap" src="@/static/activity/wap-home.jpg" />

      <b class="home-texts f-c">首存以下活动列表金额 - 获取终极豪礼</b>
      <div class="home-list f-c f-wrap">
        <div class="lists-body" v-for="(data, index) in list" :key="index">
          <img class="ac-img" src="@/static/activity/money.png" />
          <div class="f-c ac-moneys">{{ data.money }}</div>
          <span class="ac-texta">首存豪礼 {{ data.money }}</span>
          <span class="ac-textb">需首存金额</span>
          <div class="moneya">
            ¥
            <el-statistic
              group-separator=","
              :precision="2"
              decimal-separator="."
              :value="data.rmb"
            >
            </el-statistic>
          </div>
          <button class="f-c ac-btn" @click="btnFx(data.money, data.id)">
            立即兑换
          </button>
        </div>
      </div>

      <div class="a-btn f-c">
        <span class="a-shadow">活动规则</span>
        活动规则
      </div>
      <p class="a-content">
        1. 本活动汛利全员皆可参与；　
        <i></i>
        2. 首存豪礼：活动仅支持首次存款成功的账号，
        24小时内累计的首存总金额满足活动要求，请于30天内进行兑换即可获得对应礼金。
        （例如：会员首存金额达到50W即可申请18,888、6,888、5,888、3,888、1,888、388、138、88元礼金，八选一进行申请）;
        <i></i>
        3.
        一个账号只能领取一次首存豪礼，礼金有效兑换期为30天，礼金有效期内没有领取视为主动放弃礼金;　
        <i></i>
        4.
        礼金领取方式：会员在满足对应的条件后即可在活动页面点击“立即兑换”自助领取礼金，相关工作人员会按照申请顺序进行审核，礼金的
        审核状态可在“兑奖记录”中进行查看，审核通过后汛利娱乐会依次发放礼金，礼金将在5个工作日内派发至用户的中心钱包；
        <i></i>
        5. 提款要求：首存豪礼需6倍流水提款；
        <i></i>
        6.
        每位有效玩家、每1手机号码、电子邮箱、相同银行卡、每1个IP地址、每1台电脑使用者在活动期间每场赛事仅可享受1次优惠，
        如会员使用一切不正常投注、套利等违规行为，我们将保留无限期审核扣回礼金及所产生的利润权利；
        <i></i>
        7. 此为避免文字理解差异，汛利娱乐保留本活动最终解释权。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["vals"],
  data() {
    return {
      leftVal: 0, //进度
      result: "", // android 传过来的token
      results: "", //值2
      money: {
        totalValidAmount: "",
      }, // money-list
      total: 500000,
      bank: "", //银行卡
      apiBank: false,
      waits: false,
      list: [
        {
          rmb: 1000,
          money: 88,
          id: 401,
        },
        {
          rmb: 5000,
          money: 138,
          id: 402,
        },
        {
          rmb: 10000,
          money: 388,
          id: 403,
        },
        {
          rmb: 50000,
          money: 1888,
          id: 404,
        },
        {
          rmb: 80000,
          money: 3888,
          id: 405,
        },
        {
          rmb: 120000,
          money: 5888,
          id: 406,
        },
        {
          rmb: 200000,
          money: 6888,
          id: 407,
        },
        {
          rmb: 500000,
          money: 18888,
          id: 408,
        },
      ],
    };
  },
  onLoad(v) {
    // console.log(v, "load");
    this.forceReloadOnce();
  },
  methods: {
    forceReloadOnce() {
      if (!localStorage.getItem("pageReloaded")) {
        localStorage.setItem("pageReloaded", "true");
        window.location.reload();
      }
    },
    async bankFx() {
      // console.log("bank银行卡信息");
      await this.$ajax(this.$bank).then((res) => {
        if (res.code == 0) {
          this.apiBank = true;
          this.bank = res.allBankCard;
        } else {
          uni.showToast({
            title: res.msg,
            icon: "none",
          });
        }
      });
    },
    async btnFx(num, id) {
      // bank -set wait
      if (!this.apiBank) {
        await this.$ajax(this.$bank).then((res) => {
          if (res.code == 0) {
            this.apiBank = true;
            this.bank = res.allBankCard;
          } else {
            uni.showToast({
              title: res.msg,
              icon: "none",
            });
          }
        });

        // let url = "/userInfo/getAllBankCard";
        // await this.$res
        // .postRequest(url).then((res) => {
        //   if (res.code == 0) {
        //     this.apiBank = true;
        //     this.bank = res.data.allBankCard;
        //   } else {
        //     uni.showToast({
        //       title: res.data.msg,
        //       icon: "none",
        //     });
        //   }
        // });
        if (!this.apiBank) {
          return;
        }
      }
      if (this.bank == "") {
        uni.showToast({
          title: "请先绑定银行卡之后,再兑换",
          icon: "none",
        });
        return;
      }
      //申请活动
      let that = this;
      let data = {
        activityId: 4, //首存活动 id
        activityAwardId: id,
        //uniqueCode:'',
        applyAmount: num, //申请金额，晋级优惠必传
      };
      uni.showLoading({
        title: "加载中..",
        mask: true,
      });
      let params = new URLSearchParams(data);
      // let head = {
      //     'Auth-Token':uni.getStorageSync('tokens').token,
      // };
      that.$axios(that.$activity, params)
        .then((res) => {
          uni.showToast({
            title: res.msg,
            icon: "none",
          });
          uni.hideLoading();
        });
      //过3秒自动取消
      setTimeout((res) => {
        uni.hideLoading();
      }, 3000);
    },
  },
};
</script>

<style lang="scss">
.home-banners {
  max-width: 1920px;
  margin: 0 auto;
}

uni-page-body {
  background: #d9d9d9;
  padding-bottom: 50px;
  font-family: "Microsoft YaHei";
}

// 手机样式 活动页面
@media screen and (max-width: 768px) {
  uni-page-body {
    background: #fff;
    height: 100vh;
    overflow: auto;
  }
}
</style>
