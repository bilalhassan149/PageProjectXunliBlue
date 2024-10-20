<template>
  <view>
    <div class="pc">
      <!-- <LangNav></LangNav> -->
      <view class="headings f-c">
        <view class="left">
          <!-- <p class="head2" >fjdsgfjsdhgfjh</p> -->
        </view>
        <img
          class="right bet-banner pc"
          draggable="false"
          src="@/static/activity/bet/y-daily-pc.png"
        />
      </view>
    </div>

    <div class="wap">
      <!-- <LangNav></LangNav> -->
      <image
        class="home-banners wap"
        mode="widthFix"
        src="@/static/activity/bet/y-daily-wap.png"
      ></image> 

      <div class="titles">
        <!-- <p class="bet-title" v-html="$t('daily.event_date')"></p> -->
      </div>
    </div>

    <!-- 活动规则 -->
    <div class="a-btn s f-c">
      {{ $t("daily.activity_rules") }}
    </div>
    <p class="a-content-y">
      {{ $t("daily.rule_1") }}
      <i></i>
      {{ $t("daily.rule_2") }}
      <i></i>
      {{ $t("daily.rule_3") }}
      <i></i>
      {{ $t("daily.rule_4") }}
      <i></i>
      {{ $t("daily.rule_5") }}
      <i></i>
      {{ $t("daily.rule_6") }}
      <i></i>
      {{ $t("daily.rule_7") }}
    </p>
  </view>
</template>

<script>
import { mapState } from "vuex";
import state from "../../store/state";
import { localizationMixin } from "../../assets/localization";
export default {
  mixins: [localizationMixin],
  data() {
    return {
      btnData: [
        { name: "体育", val: 1 },
        { name: "电竞", val: 2 },
        { name: "棋牌", val: 4 },
      ],
      btns: 0, //按钮样式
      money: "",
      upMoney: "",
      totalImg: "",
      vals: "1",
      vipData: "",
    };
  },
  computed: {
    ...mapState({
      apis: (state) => state.apis,
    }),
  },
  watch: {
    apis() {
      this.dataFx();
    },
  },
  onLoad(v) {
    const searchParams = new URLSearchParams(window.location.search);
    uni.setStorageSync("lang", searchParams.get("lang")),
    console.log(v);
    if (v.id) {
      this.btns = v.id;
    }
    this.dataFx();
  },
  beforeCreate() {
    uni.removeStorageSync('lang');
    uni.removeStorageSync('alreadyRedirected');
  },
  created() {
    const lang = uni.getStorageSync('lang');
    const alreadyRedirected = uni.getStorageSync('alreadyRedirected');
    if (lang && !alreadyRedirected) {
      uni.setStorageSync('alreadyRedirected', 'true');
      const searchParams = new URLSearchParams(window.location.search);
      if (!searchParams.has('redirected')) {
        searchParams.set('redirected', 'true');
        window.location.search = searchParams.toString();
      }
    }
    // window.addEventListener('beforeunload', this.clearStorage);
  },
  unmounted() {
    uni.clearStorage();
    // console.log("ly")
  },
  // beforeDestroy() {
  //   // Remove event listener when component is destroyed
  //   window.removeEventListener('beforeunload', this.clearStorage);
  // },
  methods: {
    // clearStorage() {
    //   uni.clearStorage();
    // },
    dataFx() {
      let that = this;
      if (that.$store.state.apis) {
        this.betMoneyFx();
      }
    },
    betMoneyFx() {
      let that = this;
      //投注礼金-获取流水
      let data = {
        gameType: this.vals,
      };
      let params = new URLSearchParams(data);
      console.log(params);
      uni.showLoading({
        title: this.$en(state.ens.alerts.loading),
        mask: true,
      });
      // 这里获取上月-流水
      that.$axios(that.$money, params).then((res) => {
        uni.hideLoading();
        if (res.code == 0) {
          that.money = res.data.totalValid;
        } else {
        }
      }); 
    },
    btnFx(v, index) {
      this.btns = index;
      this.vals = v.val;
      this.betMoneyFx();
      this.$bet(index);
    },
    submitFx(v) {
      //申请活动
      let that = this;
      // let ids =  that.btns == 0 ? id :that.btns ==1?(id+8):(id+16);
      let data = {
        activityId: v.actiivityId,
        activityAwardId: v.actiivityAwardId,
        applyAmount: v.bonus, //申请金额，晋级优惠必传
        //  uniqueCode:'',
      };
      uni.showLoading({
        title: this.$en(state.ens.alerts.loading),
        mask: true,
      });
      let params = new URLSearchParams(data);

      that.$axios(that.$activity, params).then((res) => {
        // console.log(res,"ydaily")
        uni.showToast({ 
          title: state.codes[res.code],
          icon: "none",
        });
        uni.hideLoading();
        console.log(res);
      });

      //过3秒自动取消
      setTimeout((res) => {
        uni.hideLoading();
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.headings {
  width: 100%;
  height: 970px;
  background: #ae597e;
  .left {
    display: block;
    .head2 {
      width: 400px;
      margin-top: 8px;
      font-family: Microsoft YaHei UI;
      font-size: 40px;
      font-weight: 700;
      line-height: 56.5px;
      letter-spacing: -0.5px;
      text-align: left;
      color: #ffffff;
    }
  }
  .bet-banner {
    width: 774px;
    max-width: 1080px;
    margin: 0 0 0 186px;
    height: 970px;
  }
}

.lists-body-y {
  width: 600rpx;
  background: #d9d9d9;
  font-size: 47rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40rpx 80rpx 60rpx 80rpx;
  margin: 0 15px 23px 15px;
  flex-direction: column;
  text-align: center;
}
.ac-textb {
  color: #008d91;
}
.ac-moneys {
  font-weight: bold;
  color: #fff;
  padding: 8rpx 30rpx;
  background: linear-gradient(37.22deg, #003b3d 11.39%, #008d91 108.35%);
  border-radius: 20rpx;
  box-shadow: 0 0 20rpx 0 #333;
  margin: -40rpx 0 20rpx 0;
}
.ac-texta {
  color: #003b3d;
}
.ac-btn {
  color: #fff;
  background: #008d91;
  font-size: 47rpx;
  height: 90rpx;
  width: 420rpx;
}

.a-btn {
  margin: 150px auto 20px auto;
  font-weight: 700;
  font-size: 64rpx;
  position: relative;
  background: #003b3d;
  color: transparent;
  -webkit-background-clip: text;
}
.a-btn.s {
  margin: 54px auto 38px auto;
}
.a-content-y {
  padding: 40px;
  font-size: 14px;
  max-width: 1300px;
  color: #003b3d;
  line-height: 38rpx;
  background: #ffffff;
  margin: 0 auto;
  box-shadow: 4px 15px 60px 0px #00000033;
}
.a-content-y i {
  display: block;
  height: 10px;
}

uni-page-body {
  background: #ffffff;
  padding-bottom: 50px;
  font-family: "Microsoft YaHei";
}

@media screen and (max-width: 768px) {
  .a-btn {
    margin: 150px auto 20px auto;
    font-family: Microsoft YaHei UI;
    font-size: 32rpx;
    font-weight: 700;
    line-height: 15.24px;
    text-align: center;

    position: relative;
    background: #003b3d;
    color: transparent;
    -webkit-background-clip: text;
  }
  .a-btn.s {
    margin: 54px auto 38px auto;
  }

  .a-content-y {
    padding: 0 40px 40px 40px;
    font-size: 14px;
    max-width: 1300px;
    color: #003b3d;
    line-height: 38rpx;
    background: none;
    margin: 0 auto;
    box-shadow: 0px 0px 0px 0px #00000033;
  }
  .titles {
    margin: 48rpx 0;

    .bet-title {
      text-align: center;
      color: #008d91;
      font-size: 24rpx;
    }
  }

  uni-page-body {
    background: #fff;
    height: 100vh;
    overflow: auto;
  }
}

// end

.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter {
  opacity: 0.3;
}

.fade-leave-active {
  transition: all 0.2s;
}
.fade-leave-to {
  opacity: 0.7;
}
</style>
