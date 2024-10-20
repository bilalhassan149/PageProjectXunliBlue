<template>
  <!-- v-if="$store.state.apiUrl != null || $store.state.apiUrl != ''" -->
  <view >
    <view class="pc">
      <!-- <LangNav></LangNav> -->
      <view class="main_view f-c">
        <view class="left_one pc">
          <text class="text_left">{{ $t("bag.target_audience") }}</text>
          <p class="text_p">{{ $t("bag.sports_vip") }}</p>
          <text class="text_left">{{ $t("bag.activity_time") }}</text>
          <p class="text_p">{{ $t("bag.long") }}</p>
          <text class="text_left">{{ $t("bag.activity_time_deposit") }}</text>
          <p class="text_p">{{ $t("bag.within_24") }}</p>
          <text class="text_left">{{ $t("bag.activities") }}</text>
          <p class="text_p">
            {{ $t("bag.activities_details") }}
            <span style="color: red">{{
              $t("bag.event_details_extra_text")
            }}</span>
          </p>
          <text class="text_left">{{ $t("bag.event_details") }}</text>
          <p class="text_p" style="color: red">
            {{ $t("bag.event_details_msg") }}
          </p>

          <view class="" style="padding: 0; width: 710rpx">
            <view class="vip-border" style="margin-top: 0; width: 710rpx">
              <view class="vip-title" style="">
                <span>{{ $t("bag.belwo_red_title1") }}</span>
                <span>{{ $t("bag.belwo_red_title2") }}</span>
              </view>
              <view>
                <view
                  class="vip-content"
                  v-for="(item, index) in $store.state.matches"
                  :key="index"
                  style="padding: 60rpx 0"
                >
                  <span style="width: 38%"
                    >{{ item.leagueName }} <br />
                    {{ formatTimestamp(item.matchTime) }}
                  </span>
                  <span style="width: 38%">{{ item.matchName }}</span>
                </view>
              </view>
            </view>
          </view>
        </view>
        <img class="right_one pc" src="@/static/activity/bag/y-pc.png" />
      </view>

      <view class="content">
        <view class="vip-border">
          <view class="vip-title">
            <span>{{ $t("bag.member_level") }}</span>
            <span>{{ $t("bag.maximum_return") }}</span>
          </view>
          <view>
            <view
              class="vip-content"
              v-for="(item, index) in $store.state.ens.bag.indemnityBonus"
              :key="index"
            >
              <span>{{ item.vip }}</span>
              <span>{{ item.indemnityBonus }}</span>
            </view>
          </view>
        </view>
      </view>

      <view class="a-btn-y f-c">{{ $t("bag.activity_rules") }}</view>
      <p class="a-content-y">
        {{ $t("bag.rule_1") }}
        <i></i>
        {{ $t("bag.rule_2") }}
        <i></i>
        {{ $t("bag.rule_3") }}
        <i></i>
        {{ $t("bag.rule_4") }}
        <i></i>
        {{ $t("bag.rule_5") }}
        <i></i>
        {{ $t("bag.rule_6") }}
        <i></i>
        {{ $t("bag.rule_7") }}
        <i></i>
        {{ $t("bag.rule_8") }}
      </p>
    </view>

    <view class="wap">
      <!-- <LangNav></LangNav> -->

      <img class="home-banners wap" src="@/static/activity/bag/y-wap.png" />

      <view class="left_one_w">
        <text class="text_left_w">{{ $t("bag.target_audience") }}</text>
        <p class="text_p_w">{{ $t("bag.sports_vip") }}</p>
        <text class="text_left_w">{{ $t("bag.activity_time") }}</text>
        <p class="text_p_w">{{ $t("bag.long") }}</p>
        <text class="text_left_w">{{ $t("bag.activity_time_deposit") }}</text>
        <p class="text_p_w">{{ $t("bag.within_24") }}</p>
        <text class="text_left_w">{{ $t("bag.activities") }}</text>
        <p class="text_p_w">
          {{ $t("bag.activities_details") }}
          <span style="color: red">{{
            $t("bag.event_details_extra_text")
          }}</span>
        </p>
        <text class="text_left_w">{{ $t("bag.event_details") }}</text>
        <p class="text_p_w" style="color: red">
          {{ $t("bag.event_details_msg") }}
        </p>
      </view>

      <view class="content_w">
        <view
          class=""
          style="
            border-radius: 20rpx;
            overflow: hidden;
            width: 610rpx;
            margin: 0 auto;
          "
        >
          <view>
            <view class="vip-content_w">
              <span
                class="right_p"
                style="
                  padding: 16px 0 24px 0;
                  font-weight: 700 !important;
                  color: #003b3d;
                  background-color: #c1c1c1;
                "
                >{{ $t("bag.belwo_red_title1") }}</span
              >
              <span
                class="right_pp"
                style="
                  padding: 16px 0 24px 0;
                  font-weight: 700 !important;
                  color: #003b3d;
                  background-color: #c1c1c1;
                "
                >{{ $t("bag.belwo_red_title2") }}</span
              >
            </view>

            <view
              class="vip-content_w"
              style="background-color: #d9d9d9; padding: 20rpx 0"
              v-for="(item, index) in $store.state.matches"
              :key="index"
            >
              <span
                class="right_p f-c"
                style="background-color: #d9d9d9; width: 45%"
                >{{ item.leagueName }} <br />
                {{ formatTimestamp(item.matchTime) }}
              </span>
              <span
                class="right_pp f-c"
                style="background-color: #d9d9d9; width: 45%"
                >{{ item.matchName }}</span
              >
            </view>
          </view>
        </view>
      </view>

      <view class="content_w">
        <view class="vip-border_w">
          <view>
            <view class="vip-content_w">
              <span
                class="right_p"
                style="
                  padding: 16px 0 24px 0;
                  font-weight: 700 !important;
                  color: #003b3d;
                "
                >{{ $t("bag.member_level") }}</span
              >
              <span
                class="right_pp"
                style="
                  padding: 16px 0 24px 0;
                  font-weight: 700 !important;
                  color: #003b3d;
                "
                >{{ $t("bag.maximum_return") }}</span
              >
            </view>

            <view
              class="vip-content_w"
              v-for="(item, index) in $store.state.ens.bag.indemnityBonus"
              :key="index"
            >
              <span class="right_p f-c">{{ item.vip }}</span>
              <span class="right_pp f-c">{{ item.indemnityBonus }}</span>
            </view>
          </view>
        </view>
      </view>

      <view class="a-btn f-c">
        {{ $t("bag.activity_rules") }}
      </view>
      <p class="a-content">
        {{ $t("bag.rule_1") }}
        <i></i>
        {{ $t("bag.rule_2") }}
        <i></i>
        {{ $t("bag.rule_3") }}
        <i></i>
        {{ $t("bag.rule_4") }}
        <i></i>
        {{ $t("bag.rule_5") }}
        <i></i>
        {{ $t("bag.rule_6") }}
        <i></i>
        {{ $t("bag.rule_7") }}
        <i></i>
        {{ $t("bag.rule_8") }}
      </p>
    </view>
  </view>
</template>

<script>
import { localizationMixin } from "../../assets/localization";
import state from "../../store/state";

export default {
  mixins: [localizationMixin],
  props: ["vals"],
  data() {
    return {
      // matches: "",
      urls: this.$match,
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
    this.$MatchFx();
    const searchParams = new URLSearchParams(window.location.search);
    uni.setStorageSync("lang", searchParams.get("lang"));
    // console.log(v, "load");
  },
  // mounted() {
  //   this.$MatchFx(); 
  // },
  // beforeMount() {
  //   this.$MatchFx();
    
  // },
  
  beforeCreate() {
    uni.removeStorageSync("lang");
    uni.removeStorageSync("alreadyRedirected");
  },
  created() {
    // this.MatchFx();
    const lang = uni.getStorageSync("lang");
    const alreadyRedirected = uni.getStorageSync("alreadyRedirected");
    if (lang && !alreadyRedirected) {
      uni.setStorageSync("alreadyRedirected", "true");
      const searchParams = new URLSearchParams(window.location.search);
      if (!searchParams.has("redirected")) {
        searchParams.set("redirected", "true");
        window.location.search = searchParams.toString();
      }
    }
  },
  methods: {
    formatTimestamp(timestamp) {
      const time =
        timestamp.toString().length === 10 ? timestamp * 1000 : timestamp;
      const date = new Date(time);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },

    // MatchFx() {
    //   let that = this;
    //   let head = {
    //     "Auth-Token": uni.getDeviceInfo().deviceId,
    //   };
    //   this.$ajax(this.urls, head).then((res) => {
    //     this.matches = res.data.indemnityMatch;
    //     if (res.code == 0) {
    //       this.isshow = 1;

    //       uni.showToast({
    //         title: state.codes[res.code],
    //         icon: "none",
    //       });
    //     } else {
    //       uni.showToast({
    //         title: state.codes[res.code],
    //         icon: "none",
    //       });
    //       this.isshow = 0;
    //     }
    //   });
    // },

    async bankFx() {
      // console.log("bank银行卡信息");
      await this.$ajax(this.$bank).then((res) => {
        // console.log(res,"ews");

        if (res.code == 0) {
          this.apiBank = true;
          this.bank = res.data.allBankCard;
        } else {
          uni.showToast({
            title: state.codes[res.code],
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
            this.bank = res.data.allBankCard;
          } else {
            uni.showToast({
              title: state.codes[res.code],
              icon: "none",
            });
          }
        });
        if (!this.apiBank) {
          return;
        }
      }
      if (this.bank == "") {
        uni.showToast({
          title: this.$t("alerts.bind_bank_redeem"),
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
        title: this.$en(state.ens.alerts.loading),
        mask: true,
      });
      let params = new URLSearchParams(data);
      // let head = {
      //     'Auth-Token':uni.getStorageSync('tokens').token,
      // };
      that.$axios(that.$activity, params).then((res) => {
        uni.showToast({
          title: state.codes[res.code],
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
.main_view {
  background: #003b3d;
  max-width: 1920px;
  height: 970px;

  /////////////////// cards//////////
  .left_one {
    padding: 0 0 0 220px;
    .text_left {
      font-family: Microsoft YaHei UI;
      font-size: 20px;
      font-weight: 700;
      line-height: 25.4px;
      text-align: left;
      text-align: left;
      color: #fff;
      margin-bottom: 12px;
    }
    .text_p {
      color: #fff;
      font-family: Microsoft YaHei UI;
      font-size: 16px;
      font-weight: 400;
      line-height: 20.32px;
      text-align: left;
      margin-bottom: 24px;
    }
  }

  .right_one {
    max-width: 2200rpx;
    height: 970px;
    margin: 0 0 0 auto;
  }
}

.content {
  padding: 30rpx 38rpx 0 38rpx;
}
.vip-border {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px -3px 8px 0px #00000069;
  width: 940px;
  margin: 0 auto;
  margin-top: 130rpx;
}
.vip-title {
  background: #008d91;
  height: 88rpx;
  width: 100%;
  color: #fff;
  font-weight: 700;
  font-size: 28rpx;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.vip-title span {
  width: 50%;
  text-align: center;
}
.vip-content {
  background: #dedede;
  height: 88rpx;
  font-size: 14px;
  font-weight: 700;
  color: #003b3d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.vip-content:nth-of-type(even) {
  background: #c1c1c1;
}
.vip-content span {
  width: 50%;
  text-align: center;
}

.a-btn-y {
  margin: 73px auto 20px auto;
  font-weight: bold;
  font-size: 32px;
  position: relative;
  background: #003b3d;
  color: transparent;
  -webkit-background-clip: text;
}

.a-btn-y.s {
  margin: 54px auto 38px auto;
}
.a-content-y {
  padding: 40px;
  font-size: 14px;
  width: 1300px;
  color: #003b3d;
  line-height: 38rpx;
  // border-radius: 40rpx;
  background: #ececec;
  margin: 0 auto;
  box-shadow: 4px 15px 60px rgba(0, 0, 0, 0.2);
}
.a-content-y i {
  display: block;
  height: 10px;
}

@media screen and (max-width: 768px) {
  .left_one_w {
    z-index: 101;
    margin-left: 70rpx;
    margin-top: -280rpx;
    .text_left_w {
      font-family: Microsoft YaHei UI;
      font-size: 12px;
      font-weight: 700;
      line-height: 15.24px;
      letter-spacing: -0.5px;
      text-align: left;
      color: #003b3d;
    }
    .text_p_w {
      font-family: Microsoft YaHei UI;
      font-size: 12px;
      font-weight: 400;
      line-height: 15.24px;
      letter-spacing: -0.5px;
      text-align: left;
      color: #003b3d;
      margin-bottom: 32rpx;
      width: 606rpx;
    }
  }

  .content_w {
    padding: 30rpx 70rpx 0 70rpx;
  }
  .vip-border_w {
    border-radius: 40rpx;
    overflow: hidden;
    width: 610rpx;
    margin: 0 auto;
  }
  .vip-title {
    background: #dedede;
    color: #fff;
    font-weight: bold;
    font-size: 24rpx;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .vip-title span {
    width: 50%;
    text-align: center;
  }
  .vip-content_w {
    font-size: 24rpx;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .vip-content span {
    width: 50%;
    text-align: center;
  }
  .right_p {
    width: 50%;
    text-align: center;
    background: #dedede;
    height: 88rpx;
    color: #003b3d;
  }
  .right_pp {
    height: 88rpx;
    width: 50%;
    text-align: center;
    background: #c1c1c1;
    color: #008d91;
  }

  .a-btn {
    width: 460rpx;
    height: 66rpx;
    margin: 80rpx auto 24rpx auto !important;
    font-family: Microsoft YaHei UI;
    font-size: 18px;
    font-weight: 700;
    line-height: 15.24px;
    text-align: center;
    background: none;
    color: #003b3d;
  }

  .a-content {
    padding: 0 44rpx 0 70rpx;
    font-size: 24rpx;
    color: #008d91;
    line-height: 50rpx;
    width: auto;
    background: #fff;
    box-shadow: none;
  }
  .a-content i {
    height: 10rpx;
  }

  .ac-img {
    width: 160rpx;
  }
}

uni-page-body {
  background: #d9d9d9;
  padding-bottom: 50px;
  font-family: "Microsoft YaHei";
}

@media screen and (max-width: 768px) {
  uni-page-body {
    background: #fff;
    height: 100vh;
    overflow: auto;
  }
}
</style>
