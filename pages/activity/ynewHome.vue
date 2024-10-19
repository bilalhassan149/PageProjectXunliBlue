<template>
  <div>
    <div class="pc">
      <view class="main_view f-c">
        <view class="left_one pc">
          <text class="text_one">首存以下活动列表金额 - 获取终极豪礼</text>
          <view class="home-list-y f-c f-wrap">
            <div
              class="lists-body-y"
              v-for="(data, index) in list"
              :key="index"
            >
              <img class="ac-img-y" src="@/static/activity/y-money.png" />
              <div class="f-c ac-moneys-y">{{ data.money }}</div>
              <span class="ac-texta-y">首存豪礼 {{ data.money }}</span>
              <span class="ac-textb-y">需首存金额</span>
              <div class="moneya-y">
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
                立即兑换
              </button>
            </div>
          </view>
        </view>
        <img class="right_one pc" src="@/static/activity/y-pc-home.png" />
      </view>

      <div class="a-btn-y f-c">活动规则</div>
      <p class="a-content-y">
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

    <div class="wap">
      <img class="home-banners wap" src="@/static/activity/y-wap-home.png" />

      <b class="home-texts f-s">首存以下活动列表金额 - 获取终极豪礼</b>
      <div class="home-list f-c f-wrap">
        <div class="lists-body" v-for="(data, index) in list" :key="index">
          <img class="ac-img" src="@/static/activity/y-money.png" />
          <div class="f-c ac-moneys">{{ data.money }}</div>
          <span class="ac-texta-y">首存豪礼 {{ data.money }}</span>
          <span class="ac-textb-y">需首存金额</span>
          <div class="moneya-y">
            ¥
            <el-statistic
              group-separator=","
              :precision="2"
              decimal-separator="."
              :value="data.rmb"
            >
            </el-statistic>
          </div>
          <button class="f-c a-btn-yy" @click="btnFx(data.money, data.id)">
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
    console.log(v, "load");
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
            this.bank = res.data.allBankCard;
          } else {
            uni.showToast({
              title: res.msg,
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
      that.$axios(that.$activity, params).then((res) => {
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
    font-size: 18px;
    font-weight: 400;
    line-height: 15.24px;
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
    font-size: 18px;
    font-weight: 400;
    line-height: 15.24px;
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

  /deep/ .moneya-y {
    color: #304258;
    padding: 20rpx 0 20rpx 0;
    display: flex;
    align-items: center;
  }
  /deep/ .moneya-y .number {
    font-size: 36rpx !important;
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

@media screen and (max-width: 768px) {
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
    font-size: 12px;
    font-weight: 400;
    line-height: 15.24px;
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
    font-size: 12px;
    font-weight: 400;
    line-height: 15.24px;
    text-align: center;
  }

  /deep/ .moneya-y {
    color: #304258;
    padding: 20rpx 0 20rpx 0;
    display: flex;
    align-items: center;
  }
  /deep/ .moneya-y .number {
    font-size: 24rpx !important;
  }

  .a-btn-yy {
    font-weight: bold;
    font-size: 22.14rpx;
    border-radius: 100px;
    position: relative;
    background: #003b3d;
    height: 22px;
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
