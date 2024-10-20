<template>
  <view :class="$store.state.lang2 == 'en' ? 'english' : 'chinese'">
    <div class="pc">
      <!-- <LangNav></LangNav> -->
      <view class="headings f-c">
        <view class="left">
          <p class="head1">{{ $t("bet.betting_bonus") }}</p>
          <p class="head2">{{ $t("bet.bet_enjoy") }}</p>
          <view class="buttons f-s">
            <div
              class="btn f-c"
              v-for="(v, index) in btnData"
              :key="index"
              @click="btnFx(v, index)"
            >
              {{ v.name }}
            </div>
          </view>
        </view>
        <img
          class="right bet-banner pc"
          draggable="false"
          src="@/static/activity/bet/y-pc.png"
        />
      </view>
      <div class="bet-body">
        <!-- 进度条 -->
        <div class="bet-schedule">
          <div class="f-s">
            <div class="text">
              <div class="num-body">
                <el-statistic
                  group-separator=","
                  :precision="2"
                  decimal-separator="."
                  :value="money ? money : 0"
                  class="num"
                >
                </el-statistic>
              </div>
              <div class="f-c">{{ $t("bet.last_month") }}</div>
            </div>
            <div class="text">
              <div class="num">
                <el-statistic
                  group-separator=","
                  :precision="0"
                  decimal-separator="."
                  :value="Number($store.state.betTotal)"
                  class="num"
                >
                </el-statistic>
                {{ $t("onePage.yaun") }}
              </div>
              <div class="f-c">{{ $t("bet.ultimate_gift") }}</div>
            </div>
          </div>
          <div class="bet-state-bg">
            <img
              class="bet-state"
              v-if="money && $store.state.betTotal"
              :style="'width:' + (money / $store.state.betTotal) * 100 + '%'"
              src="@/static/activity/bet/y-state.png"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="wap">
      <!-- <LangNav></LangNav> -->
      <image
        class="home-banners wap"
        mode="widthFix"
        src="@/static/activity/bet/y-wap.png"
      ></image>

      <div class="titles">
        <b class="bet-title">
          {{ $t("bet.betting_bonus") }}
        </b>
        <p class="bet-title">
          {{ $t("bet.bet_enjoy") }}
        </p>
      </div>

      <!-- 进度条 -->
      <div class="bet-schedule-h5">
        <div class="f-s">
          <el-statistic
            group-separator=","
            :precision="2"
            decimal-separator="."
            :value="money ? money : 0"
            class="num"
          >
          </el-statistic>
          <div class="num">
            <el-statistic
              group-separator=","
              :precision="0"
              decimal-separator="."
              :value="Number($store.state.betTotal)"
              class="num"
            >
            </el-statistic>
            {{ $t("onePage.yaun") }}
          </div>
        </div>
        <div class="bet-state-bg">
          <img
            class="bet-state"
            v-if="money && $store.state.betTotal"
            :style="'width:' + (money / $store.state.betTotal) * 100 + '%'"
            src="@/static/activity/bet/y-state-h5.png"
          />
        </div>
        <div class="f-s">
          <div class="texta">{{ $t("bet.last_month") }}</div>
          <div class="texta">{{ $t("bet.ultimate_gift") }}</div>
        </div>
      </div>
      <div class="f-c">
        <div
          class="btnType f-c"
          :class="index == btns ? 'on' : ''"
          v-for="(v, index) in btnData"
          :key="index"
          @click="btnFx(v, index)"
        >
          {{ v.name }}
        </div>
      </div>
    </div>

    <!-- 列表 -->
    <transition name="fade" mode="out-in">
      <div class="home-list f-c f-wrap" v-show="btns == 0">
        <div
          class="lists-body-y"
          v-for="(v, index) in $store.state.betVipData.sports"
          :key="index"
        >
          <img class="ac-img" src="@/static/activity/y-money.png" />
          <div class="f-c ac-moneys">{{ v.bonus }}</div>
          <span class="ac-texta"
            >{{ $t("bet.bet_bonus_2") }} {{ v.bonus }}</span
          >
          <span class="ac-textb">{{ $t("bet.req_deposit_amount") }}</span>
          <div class="moneya2">
            ¥
            <el-statistic
              group-separator=","
              :precision="0"
              decimal-separator="."
              :value="Number(v.valid)"
            >
            </el-statistic>
          </div>
          <view class="f-c ac-btn" @click="submitFx(v)">
            {{ $t("home.redeem") }}
          </view>
        </div>
      </div>
    </transition>
    <!-- 电竞 -->
    <transition name="fade" mode="out-in">
      <div class="home-list f-c f-wrap" v-show="btns == 1">
        <div
          class="lists-body-y"
          v-for="(v, index) in $store.state.betVipData.games"
          :key="index"
        >
          <img class="ac-img" src="@/static/activity/y-money.png" />
          <div class="f-c ac-moneys">{{ v.bonus }}</div>
          <span class="ac-texta"
            >{{ $t("bet.bet_bonus_2") }} {{ v.bonus }}</span
          >
          <span class="ac-textb">{{ $t("bet.req_deposit_amount") }} </span>
          <div class="moneya2">
            ¥
            <el-statistic
              group-separator=","
              :precision="0"
              decimal-separator="."
              :value="Number(v.valid)"
            >
            </el-statistic>
          </div>
          <view class="f-c ac-btn" @click="submitFx(v)">
            {{ $t("home.redeem") }}
          </view>
        </div>
      </div>
    </transition>
    <!-- 棋牌 -->
    <transition name="fade" mode="out-in">
      <div class="home-list f-c f-wrap" v-show="btns == 2">
        <div
          class="lists-body-y"
          v-for="(v, index) in $store.state.betVipData.boardGame"
          :key="index"
        >
          <img class="ac-img" src="@/static/activity/y-money.png" />
          <div class="f-c ac-moneys">{{ v.bonus }}</div>
          <span class="ac-texta"
            >{{ $t("bet.bet_bonus_2") }} {{ v.bonus }}</span
          >
          <span class="ac-textb">{{ $t("bet.req_deposit_amount") }} </span>
          <div class="moneya2">
            ¥
            <el-statistic
              group-separator=","
              :precision="0"
              decimal-separator="."
              :value="Number(v.valid)"
            >
            </el-statistic>
          </div>
          <button class="f-c ac-btn" @click="submitFx(v)">
            {{ $t("home.redeem") }}
          </button>
        </div>
      </div>
    </transition>

    <div class="a-btn f-c">
      {{ $t("bet.activity_rules") }}
    </div>
    <p class="a-content-y">
      {{ $t("bet.rule_1") }}
      <i></i>
      {{ $t("bet.rule_2") }}
      <i></i>
      {{ $t("bet.rule_3") }}
      <i></i>
      {{ $t("bet.rule_4") }}
      <i></i>
      {{ $t("bet.rule_5") }}
      <i></i>
      {{ $t("bet.rule_6") }}
      <i></i>
      {{ $t("bet.rule_7") }}
      <i></i>
      {{ $t("bet.rule_8") }}
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
      vipData: "", // 数组请求数组
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
    uni.setStorageSync("lang", searchParams.get("lang")), console.log(v);
    if (v.id) {
      this.btns = v.id;
    }
    this.dataFx();
  },
  beforeCreate() {
    uni.removeStorageSync("lang");
    uni.removeStorageSync("alreadyRedirected");
  },
  created() {
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
        console.log(res, "res");
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
  background: #6a2729;
  .left {
    width: 30%;
    display: block;
    .head1 {
      font-family: Microsoft YaHei UI;
      font-size: 70px;
      font-weight: 700;
      line-height: 89px;
      letter-spacing: 0em;
      text-align: left;
      color: #ffffff;
    }
    .head2 {
      margin-top: 8px;
      font-family: Microsoft YaHei UI;
      font-size: 30px;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: -0.5px;
      text-align: left;
      color: #ffffff;
    }
    .buttons {
      margin-top: 24px;
      .btn {
        width: 152px;
        height: 48px;
        top: 589px;
        left: 233.63px;
        padding: 10 21 10 21;
        gap: 8px;
        color: #ffffff;
        background: #008d91;
        cursor: pointer;
      }
    }
  }
  .bet-banner {
    width: 774px;
    max-width: 1080px;
    margin: 0 0 0 186px;
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
.ac-btn{
  margin-top: 20rpx;
  background: #008d91;
  color: #fff;
  font-size: 47rpx;
  padding: 8.14rpx 30.88rpx;
}



/deep/ .moneya {
  color: #008d91;
  padding: 20rpx 0 20rpx 0;
  display: flex;
  align-items: center;
}
/deep/ .moneya .number {
  color: #008d91;
  font-size: 47rpx !important;
}
.a-btn {
  font-family: Microsoft YaHei UI;
  font-size: 47rpx;
  font-weight: 700;
  line-height: 30.24rpx;
  text-align: center;
  color: #003b3d;
  background: none;
}
/deep/ .moneya2 {
  color: #008d91;
  padding: 10rpx 0 10rpx 0;
  font-size: 32rpx !important;
  display: flex;
  align-items: center;
}
/deep/.number {
  font-weight: 700;
  color: #008d91;
  font-size: 32rpx !important;
  padding: 0 2rpx !important;
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

// new style
.bet-body {
  width: 1300px;
  margin: 0 auto;
}
.bet-schedule {
  margin: 60px 0 75px 0;
  .text {
    font-size: 14px;
    color: #008d91;
  }
  .num-body {
    font-weight: bold;
  }
  .num {
    display: flex;
    align-items: center;
  }
  .number {
    font-size: 40px;
  }
  /deep/ .el-statistic .con .number {
    color: #008d91 !important;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .bet-state-bg {
    width: 100%;
    background: url("@/static/activity/bet/y-state-bg.png") no-repeat;
    background-size: 100% 100%;
    height: 14px;
    margin-top: 11px;
    //padding: 0 10px;
  }
  .bet-state {
    height: 28px;
    margin: 7px 0;
    border-radius: 50px;
  }
}
// 手机样式
@media screen and (max-width: 768px) {

  /deep/ .moneya2 {
    color: #008d91;
    padding: 10rpx 0 10rpx 0;
    font-size: 24rpx !important;
    display: flex;
    align-items: center;
  }
  /deep/.number {
  font-weight: 400;
    color: #008d91;
    font-size: 24rpx !important;
    padding: 0 2rpx !important;
  }
  .ac-btn {
    margin-top: 20rpx;
    background: #008d91;
    font-size: 22rpx;
    color: #fff;
    padding: 8.14rpx 30.88rpx;
  }
  .a-content-y {
    padding: 40px;
    font-size: 14px;
    max-width: 1300px;
    color: #003b3d;
    line-height: 38rpx;
    background: none;
    margin: 0 auto;
    box-shadow: 4px 15px 60px 0px #00000033;
  }
  .titles {
    margin: 48rpx 0;

    .bet-title {
      padding: 0 70rpx;
    }
  }

  .btnType {
    width: 208rpx;
    height: 74rpx;
    font-size: 24rpx;
    margin: 0 6rpx 100rpx 6rpx;
    border-radius: 6px;
    border: 2px solid #008d91;
  }
  .on {
    background: #008d91;
    color: #ffffff;
  }
  uni-page-body {
    background: #fff;
    height: 100vh;
    overflow: auto;
  }

  .bet-schedule-h5 {
    margin: 0 88rpx 30rpx 88rpx;
    /deep/ .el-statistic .con .number,
    .num {
      font-size: 12px;
      color: #9f9f9f;
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    .bet-state-bg {
      width: 100%;
      background: url("@/static/activity/bet/y-state-bg-h5.png") no-repeat;
      background-size: 100% 100%;
      height: 16rpx;
      margin: 10rpx 0;
      display: flex;
      align-items: center;
      padding: 0 10rpx;
    }
    .bet-state {
      height: 20rpx;
      border-radius: 20rpx;
    }
    .texta {
      font-size: 24rpx;
      color: #9f9f9f;
    }
  }
}

// end
//按钮动画切换
.fade-enter-active {
  transition: all 0.5s; //过度是2秒
}
.fade-enter {
  opacity: 0.3;
}

.fade-leave-active {
  transition: all 0.2s; //过度是2秒
}
.fade-leave-to {
  opacity: 0.7;
}

.chinese {
  letter-spacing: 2.8rpx !important;
}
.english {
  letter-spacing: 0px !important;
}
</style>
