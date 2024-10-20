<template>
  <div>
    <div class="pc">
      <!-- <LangNav></LangNav> -->

      <view class="main_view f-c">
        <view class="left_one pc">
          <text class="text_one">{{$t('home.first_deposit')}}</text>
          <view class="home-list-y f-c f-wrap">
            <div
              class="lists-body-y"
              v-for="(data, index) in list"
              :key="index"
            >
              <img class="ac-img-y" src="@/static/activity/y-money.png" />
              <div class="f-c ac-moneys-y">{{ data.money }}</div>
              <span class="ac-texta-y">{{$t('home.first_deposit_gift')}} {{ data.money }}</span>
              <span class="ac-textb-y">{{$t('home.req_deposit_amount')}}</span>
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
              <button class="f-c btns_y" @click="btnFx(data.money, data.id)">
                {{$t('home.redeem')}}
              </button>
            </div>
          </view>
        </view>
        <img class="right_one pc" src="@/static/activity/y-pc-home.png" />
      </view>

      <div class="a-btn-y f-c">{{$t('home.activity_rules')}}</div>
      <p class="a-content-y">
        {{$t('home.rule_1')}}
        <i></i>
        {{$t('home.rule_2')}}
        <i></i>
        {{$t('home.rule_3')}}
        <i></i>
        {{$t('home.rule_4')}}
        <i></i>
        {{$t('home.rule_5')}}
        <i></i>
        {{$t('home.rule_6')}}
        <i></i>
        {{$t('home.rule_7')}}
      </p>
    </div>

    <div class="wap">
      <!-- <LangNav></LangNav> -->

      <img class="home-banners wap" src="@/static/activity/y-wap-home.png" />

      <b class="home-texts f-s">{{$t('home.first_deposit')}}</b>
      <div class="home-list f-c f-wrap">
        <div class="lists-body" v-for="(data, index) in list" :key="index">
          <img class="ac-img" src="@/static/activity/y-money.png" />
          <div class="f-c ac-moneys">{{ data.money }}</div>
          <span class="ac-texta-y">{{$t('home.first_deposit_gift')}} {{ data.money }}</span>
          <span class="ac-textb-y">{{$t('home.req_deposit_amount')}}</span>
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
          <view class="f-c ac-btn" @click="btnFx(data.money, data.id)">
            {{$t('home.redeem')}}
          </view>
        </div>
      </div>

      <div class="a-btn f-c">
        <span class="a-shadow">活动规则</span>
        {{$t('home.activity_rules')}}
      </div>
      <p class="a-content">
        {{$t('home.rule_1')}}
        <i></i>
        {{$t('home.rule_2')}}
        <i></i>
        {{$t('home.rule_3')}}
        <i></i>
        {{$t('home.rule_4')}}
        <i></i>
        {{$t('home.rule_5')}}
        <i></i>
        {{$t('home.rule_6')}}
        <i></i>
        {{$t('home.rule_7')}}
      </p>
    </div>
  </div>
</template>

<script>
import state from "../../store/state";

import { localizationMixin } from "../../assets/localization";
export default {
  mixins: [localizationMixin],
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
    const searchParams = new URLSearchParams(window.location.search);
    uni.setStorageSync("lang", searchParams.get("lang")),
    console.log(v, "load");
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
  },
  methods: {
    async bankFx() {
      console.log("bank银行卡信息");
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
    },
    async btnFx(num, id) {
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
      // if (this.bank == "") {
      //   uni.showToast({
      //     title: this.$t('alerts.bind_bank_redeem'),
      //     icon: "none",
      //   });
      //   return;
      // } 
      let that = this;
      let data = {
        activityId: 4, 
        activityAwardId: id,
        applyAmount: num,
      };
      console.log(data,"data");

      uni.showLoading({
        title: this.$en(state.ens.alerts.loading),
        mask: true,
      });
      let params = new URLSearchParams(data);
      that.$axios(that.$activity, params).then((res) => {
        uni.showToast({
          title: state.codes[res.code],
          icon: "none",
        });
        uni.hideLoading();
      });
      setTimeout((res) => {
        uni.hideLoading();
      }, 3000);
    },
  },
};
</script>

<style lang="scss">
.main_view {
  background: linear-gradient(180deg, #eba430 0%, #e38f2d 53.5%, #ac6b18 100%);
  max-width: 1920px;
  height: 970px;

  /////////////////// cards//////////
  .left_one {
    .text_one {
      font-family: Microsoft YaHei UI;
      font-size: 30px;
      font-weight: 700;
      line-height: 38.1px;
      letter-spacing: -0.5px;
      text-align: left;
      color: #fff;
      padding: 0 0 0 220px;
    }
    .home-list-y {
      margin: 0 auto;
      width: 830px;
      margin-top: 39px;
      margin-left: 272rpx;
      .lists-body-y {
        width: 286rpx;
        //height: 380rpx;
        background: #fff;
        font-size: 47rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0rpx 0 20rpx 0;
        margin: 0 15px 23px 15px;
        flex-direction: column;
        text-align: center;
      }
    }
  }
  .ac-img-y {
    width: 122px;
  }
  .ac-textb-y {
    color: #008d91;
    font-family: Microsoft YaHei UI;
    font-size: 32rpx;
    font-weight: 400;
    line-height: 30.24rpx;
    text-align: center;
    margin-top: 12rpx;
  }
  .ac-moneys-y {
    min-width: 140rpx;
    font-weight: bold;
    color: #fff;
    padding: 8rpx 20rpx;
    background: linear-gradient(37.22deg, #003b3d 11.39%, #008d91 108.35%);
    border-radius: 20rpx;
    box-shadow: 0 0 20rpx 0 #333;
    margin: -40rpx 0 26rpx 0;
    font-size: 18px;
  }
  .ac-texta-y {
    color: #003b3d;
    font-family: Microsoft YaHei UI;
    font-size: 32rpx;
    font-weight: 400;
    line-height: 30.24rpx;
    text-align: center;
  }
  .btns_y {
    color: #fff;
    background: #008d91;
    font-size: 47rpx;
    height: 44rpx;
    width: 192rpx;
    margin: 0 auto;
    font-family: Microsoft YaHei UI;
    font-size: 11.07px;
    font-weight: 400;
    line-height: 14.06px;
    letter-spacing: -0.4612903296947479px;
    text-align: center;
    border-radius: 0 !important;
  }

  .right_one {
    max-width: 470px;
    height: 970px;
    margin: 0 auto;
  }
}

.a-btn-y {
  margin: 150px auto 20px auto;
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
/deep/ .moneya {
  color: #008d91;
  padding: 10rpx 0 10rpx 0;
  font-size: 32rpx !important;
  display: flex;
  align-items: center;
}
/deep/.number {
  font-weight: 400;
  color: #008d91;
  font-size: 32rpx !important;
  padding: 0 2rpx !important;
}
.ac-btn{
  margin-top: 20rpx;
  background: #008d91;
  color: #fff;
  font-size: 47rpx;
  padding: 8.14rpx 30.88rpx;
}
@media screen and (max-width: 768px) {

  .ac-btn {
    margin-top: 20rpx;
    background: #008d91;
    font-size: 22rpx;
    color: #fff;
    padding: 8.14rpx 30.88rpx;
  }

  /deep/ .moneya {
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
  .home-texts {
    font-size: 24rpx;
    color: #003b3d;
    padding: 40rpx 0 46rpx 60rpx;
    font-weight: bold;
    text-align: left;
  }
  .lists-body {
    width: 310rpx;
    border-radius: 0;
    background: #d9d9d9;
    font-size: 24rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20rpx 20rpx 20rpx;
    margin: 0 18rpx 24rpx 18rpx;
    flex-direction: column;
    text-align: center;
  }

  .ac-textb-y {
    color: #008d91;
    font-family: Microsoft YaHei UI;
    font-size: 24rpx;
    font-weight: 400;
    line-height: 30rpx;
    text-align: center;
    margin-top: 12rpx;
  }
  .ac-moneys {
    font-weight: bold;
    color: #fff;
    padding: 10rpx 20rpx;
    background: linear-gradient(37.22deg, #003b3d 11.39%, #008d91 108.35%);
    border-radius: 15rpx;
    box-shadow: 0 0 20rpx 0 #333;
    margin: -40rpx 0 20rpx 0;
  }
  .ac-texta-y {
    color: #003b3d;
    font-family: Microsoft YaHei UI;
    font-size: 24rpx;
    font-weight: 400;
    line-height: 30rpx;
    text-align: center;
  }

  .a-btn-yy {
    font-weight: bold;
    font-size: 22.14rpx;
    border-radius: 100px;
    position: relative;
    background: #003b3d;
    height: 22px;
    padding: 10px;
    color: #d9d9d9;
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

  .a-content{
	padding: 0 44rpx 0 70rpx;
	font-size:24rpx;
	color:#008D91;
	line-height: 50rpx;
	width: auto;
	background: #fff;
	box-shadow: none;
}
.a-content i{
	height:10rpx;
}

.ac-img{
    width:160rpx;
}

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
