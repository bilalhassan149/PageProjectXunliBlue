<template>
  <view v-if="isLoading" class="loading-container">
    <img src="../static/loading.gif" class="loading-gif" />
  </view>
  <view v-else>
    <view
      :class="$i.deviceType == 'pc' ? 'bg' : ''"
      v-show="$i.deviceType == 'pc'"
    >
    <LangNav></LangNav>

      <view class="main_class">
        <view class="heading_yongle f-t">
          <image src="../static/download/a/logo.png"></image>
        </view>
        <view class="flex_view">
          <view class="flex_sub">
            <view class="heading_1">{{ $t("onePage.download_app") }}</view>
            <view class="heading_2">{{ $t("onePage.fast_fingertip") }}</view>
            <view class="heading_3">{{ $t("onePage.paragraph_1") }}</view>
            <view class="apps_flex f-t">
              <view class="app">
                <image
                  mode="widthFix"
                  src="../static/download/a/andriod.png"
                ></image>
                <view>{{ $t("onePage.andriod") }}</view>
              </view>
              <view class="app">
                <image
                  mode="widthFix"
                  src="../static/download/a/ios.png"
                ></image>
                <view>{{ $t("onePage.ios") }}</view>
              </view>
              <view class="app">
                <vue-qr class="vue_qr" :text="$store.state.siteUrl" :size="200">
                </vue-qr>
                <view>{{ $t("onePage.scan_Qr") }}</view>
              </view>
            </view>
            <view class="f-t flex">
              <view
                class="net_flex"
                v-for="(item, index) in $store.state.jsons.pcUrl"
                :key="index"
              >
                <view class="app">
                  <image
                    mode="widthFix"
                    src="../static/download/a/net.png"
                  ></image>
                  <view>{{ $t("onePage.web_link") }}{{ index + 1 }}</view>
                  <a :href="item" class="btns">{{ $t("onePage.enter_now") }}</a>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 手机端 -->
    <view v-show="$i.deviceType != 'pc'" class="wap">
      <LangNav></LangNav>
      <view class="f-c logo">
        <img src="@/static/logo.png" mode="widthFix" />
      </view>
      <view class="headings">
        <view class="heading_1">{{ $t("onePage.fast_fingertip_m_1") }}</view>
        <view class="heading_2">{{ $t("onePage.fast_fingertip_m_2") }}</view>
      </view>
      <view class="f-c">
        <img class="wap_banner" src="@/static/download/a/wap-banner.png" />
      </view>

      <view class="f-c">
        <view class="wap_down" @click="downFx">{{
          $t("onePage.download")
        }}</view>
      </view>
      <view class="wap_p">
        <view class="f-c">{{ $t("onePage.detail_1") }}</view>
        <view class="f-c" style="margin-top: 16rpx">
          {{ $t("onePage.detail_2") }}
        </view>
      </view>
      <view class="f-c flex">
        <view
          class="net_flex"
          v-for="(item, index) in $store.state.jsons.h5Url"
          :key="index"
        >
          <view class="app">
            <image mode="widthFix" src="../static/download/a/net_2.png"></image>
            <view>{{ $t("onePage.web_link") }}{{ index + 1 }}</view>
            <a :href="item" class="btns">{{ $t("onePage.enter_now") }}</a>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import vueQr from "vue-qr";
import { mapState } from "vuex";
import state from "../store/state";

import { localizationMixin } from "../assets/localization";
export default {
  mixins: [localizationMixin],
  components: {
    vueQr,
  },
  data() {
    return {
      isLoading: true, // loading state
      title: "Hello",
      show: false,
      toggle: false, //默认切换 苹果
      iosLink: "",
      link: "", //android
      web: "", //link-web
      siteUrl: "",
      QRcode: "",
    }; 
  },
  computed: {
    ...mapState({
      jsons: (state) => state.jsons,
    }),
  },
  watch: {
    jsons() {
      this.loadFx();
      //this.fetchData();
    },
  },
  created() {
    console.log(this.$i.deviceType, "deviceType");
    this.loadFx();

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

  },
  mounted() {},
  methods: {
    loadFx() {
      console.log(this.$i.platform, "下载");
      let that = this;
      let v = that.$store.state.jsons;
      if (state.jsons) {
        if (this.$i.platform != "windows") {
          let url = {
            urls: v.jsonUrl[0] + "" + v.staticResources,
          };
          console.log(url, "url");
          that.$ajax(url).then((r) => {
          
            let v = r.datas.downloadInfo;
            // console.log(v, "vvvvvvvvvvvvv");

            that.iosLink = v[0].downloadUrl;
            that.link = v[1].downloadUrl;
            that.web = v[2].indexUrl;
            // console.log(that.link, "download");
          });
        }
      }
    },
    downFx() {
      console.log(this.iosLink, this.link, "下载链接");
      // return
      if (this.$i.platform == "ios") {
        window.location.href = this.iosLink; //test-5-15
      } else {
        window.location.href = this.link;
      }
    },
    linkFx() {
      window.location.href = this.web;
    },
  },
}; 
</script>

<style lang="scss">

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff; /* Adjust the background color if needed */
}

.loading-gif {
  width: 100px; /* Adjust the size of the GIF if needed */
  height: 100px;
}

uni-page-body {
  background: url("../static/download/a/bgDownLoadApp.png") no-repeat center;
  min-height: 100vh;
  background-size: 1920px;
}

.down-main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.down-app {
  font-weight: bold;
  font-size: 178px;
  /* color: #fff; */
  color: #ededed;
  margin: 75px 0 0 0;
}

.down-body {
  width: 975px;
  height: 450px;
  border-radius: 33px;
  background: linear-gradient(#c91d05, #441209);
  padding: 50px 0 0 80px;
  color: #f9f9f9;
  box-shadow: 4px 0 39px rgba(0, 0, 0, 0.65);
  position: relative;
}

.down-title {
  font-weight: bold;
  font-size: 40px;
}

.down-title1 {
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
}

.down-content {
  font-size: 14px;
  width: 400px;
}

.down-ab-img {
  position: absolute;
  right: 70px;
  bottom: 0;
  width: 460px;
}

.down-er {
  position: absolute;
  right: -80px;
  top: 95px;
}

.down-er-body {
  border-radius: 10px;
  box-shadow: 4px 0 39px rgba(0, 0, 0, 0.65);
  width: 188px;
  height: 188px;
}

.down-er h3 {
  font-size: 14px;
  margin-top: 15px;
  background: linear-gradient(169deg, #c91d05 -5.74%, #441209 103.22%);
  border-radius: 50px;
  height: 44px;
  padding: 0 20px;
  /* width:200px; */
}

.down-imgs {
  margin-left: 110px;
  width: 500px;
}

.down-btn {
  display: flex;
  padding: 15px 0 0 0;
  width: 350px;
}

.down-btn button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #fff;
  width: 163px;
  height: 44px;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 700;
  color: #c01c05;
  border: none;
}

.down-main .line-bg .text {
  color: #fff;
}

.down-main .line-icon {
  box-shadow: none;
}

.bot-icon {
  margin-top: 20px;
}

#er {
  margin: 30px 0 56px 0;
}

.text-app {
  color: #494949;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 5px;
}

.btn {
  width: 114px;
  height: 40px;
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  background: linear-gradient(45deg, #ffa756, #ff5200);
  font-size: 14px;
  line-height: 40px;
  outline: none;
}

.f-btn {
  width: 114px;
  height: 40px;
  color: #9e9e9e;
  background: #ffffff;
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  line-height: 40px;
  outline: none;
  border-radius: 100px;
  margin: 0 10px;
}

.btns {
  color: #fff;
  border-radius: 100px;
  background: linear-gradient(45deg, #ffa756, #ff5200);
  cursor: pointer;
}

.title-alert {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.title-x {
  position: absolute;
  font-size: 24px;
  top: -16px;
  right: -16px;
  background: #f3f7fe;
  box-shadow: -4px 4px 8px -2px #ddd;
  border-radius: 100px;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  color: #ddd;
  cursor: pointer;
}

.fixed {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

.h3-text {
  font-size: 30px;
  margin: 5px 0 15px 0;
  color: #363858;
}

.img-ab {
  width: 880px;
  position: absolute;
  left: 500px;
  top: 150px;
}

/* 轮播图样式 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
	background-color: rgba(221 225 255 / 30%);
}

.el-carousel__item:nth-child(2n+1) {
	background-color:rgba(221 225 255 / 80%);
} */
/deep/ .el-carousel__button {
  height: 10px;
  border-radius: 30px;
  opacity: 1;
  background: #dbdcde;
  width: 15px;
}

/deep/ .is-active .el-carousel__button {
  background-color: #f86c3b;
  width: 35px;
}

.img {
  width: 260px;
}

/*新加样式*/
.fixed-bor {
  background: #f3f7fe;
  border-radius: 10px;
  min-height: 700px;
  /* width:790px; */
  width: 850px;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.textss {
  color: #5b6c9d;
  text-align: left;
  line-height: 26px;
  font-size: 17.5px;
  width: 620px;
  margin-bottom: 30px;
}

.er-text {
  color: #6877a5;
  font-size: 14px;
}

.er-bor h3 {
  font-size: 12.5px;
  margin-top: 15px;
}

.xian {
  height: 3px;
  /* width: 120%; */
  width: 100%;
  background: #b0c4ff;
  border: 1px solid #f1f1f1;
  border-radius: 2px;
  margin: 3px 0 3px 0%;
}

.er-bor .btns {
  width: 80px;
  margin: 5px 0 0 0;
}

.f-title {
  color: #404261;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 65px;
}

.f-title1 {
  color: #404261;
  font-size: 22px;
  margin-bottom: 10px;
}

.f-p {
  color: #6f82b8;
  font-size: 17px;
}

.aimg {
  width: 375px;
}

.f-body {
  display: flex;
}

.f-left {
  padding: 0 25px 0 40px;
  align-items: initial;
}

/* 5-14 pc端-扫一扫更新 */
.sao {
}

.sao-text {
  font-size: 19px;
  text-shadow: 0 5px 5px rgba(16, 16, 16, 0.14);
  color: #666;
  text-align: center;
  width: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
}

.sao-er {
  position: relative;
  padding-right: 44px;
  border-right: 1px solid #e9d8c9;
}

.sao-bor {
  /* position: absolute;
	left:0;
	top:0; */
  width: 265px;
  height: 265px;
}

.sao-img {
  position: absolute;
  left: 22px;
  /* top: 50px; */
  top: 16px;
  width: 220px;
  height: 220px;
  box-shadow: 0 5px 5px rgba(16, 16, 16, 0.14);
}

.sao-body {
  padding-left: 20px;
}

.sao-btn {
  border-bottom: 1px solid #cacaca;
  text-align: center;
}

.sao-btn .texts {
  color: #666;
  font-size: 19px;
  text-shadow: 0 5px 5px rgba(16, 16, 16, 0.14);
  font-weight: bold;
}

.sao-btn .botton {
  width: 132px;
  height: 54px;
  margin: 5px 0 5px 0;
  cursor: pointer;
}

.sao-btn .bor {
  box-shadow: 0 5px 5px rgba(16, 16, 16, 0.14);
  height: 1px;
  width: 150px;
}

/* 样式设置 */

.down-main .line-bg {
  width: 350px;
  background: none;
  padding-top: 0;
  padding: 30px 0;
}

.line-body {
  width: 1310px;
  margin: 0 auto;
}
/* 扫一扫 end */

/* 手机端 */
@media screen and (max-width: 769px) {
  uni-page-body {
    background: none;
    min-height: 100vh;
    background-size: 100% 100% !important;
  }

  .logo {
    padding-top: 112rpx;

    img {
      width: 332rpx;
      height: 96.108rpx;
    }
  }

  .headings {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48rpx;

    .heading_1 {
      font-family: Microsoft YaHei UI;
      font-size: 32rpx;
      font-weight: 700;
      line-height: 40.64rpx;
      color: #1e7a7a;
    }

    .heading_2 {
      margin-top: 16rpx;
      font-family: Microsoft YaHei UI;
      font-size: 24rpx;
      font-weight: 400;
      line-height: 30.48rpx;
      color: #1e7a7a;
    }
  }

  .wap_banner {
    margin-top: 22rpx;
    width: 608rpx;
    height: 566rpx;
  }

  .wap_down {
    margin-top: 46rpx;
    color: #ffffff;
    width: 366rpx;
    height: 66rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20rpx;
    background: #003b3d;
    box-shadow: 0rpx 8rpx 8rpx 0rpx #00000040;
    font-family: Microsoft YaHei UI;
    font-size: 18.174rpx;
    font-weight: 700;
    line-height: 24.108rpx;
  }

  .wap_p {
    margin-top: 48rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Microsoft YaHei UI;
    font-size: 22rpx;
    font-weight: 400;
    line-height: 12.54px;
    text-align: center;
    color: #008d91;
    padding: 0 36rpx;
  }

  .flex {
    gap: 16rpx;
    padding-bottom: 86rpx;

    .net_flex {
      margin-top: 48rpx;

      .app {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        image {
          width: 80rpx;
          height: 80rpx;
        }

        view {
          font-family: Microsoft YaHei UI;
          font-size: 24rpx;
          font-weight: 400;
          line-height: 30.48rpx;
          text-align: center;
          margin-top: 16rpx;
        }

        .btns {
          font-size: 24rpx;
          font-weight: 400;
          text-decoration: none;
          margin-top: 18rpx;
          width: 170.138rpx;
          height: 52.154rpx;
          border-radius: 36rpx;
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
          background: #d9d9d9;
          color: #008d91;
        }
      }
    }
  }
}

.main_class {
  margin: 0 408rpx 0 382rpx;

  .heading_yongle {
    padding: 256rpx 0 0 214rpx;
    margin: 0 0 -27px 0;
    z-index: 2;

    image {
      width: 370rpx;
      height: 108rpx;
    }

    /*view {
      font-family: Microsoft YaHei UI;
      font-size: 54rpx;
      font-weight: 700;
      line-height: 68.57rpx;
      text-align: left;
      margin-left: 12rpx;
      color: #008d91;
    }*/
  }

  .flex_view {
    width: 100%;
    height: 1466rpx;
    background-image: url("../static/download/a/asset-1.png");
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;

    .flex_sub {
      padding: 296rpx 0 0 276rpx;
      color: #f9f9f9;
      text-align: left;

      .heading_1 {
        font-family: Microsoft YaHei UI;
        font-size: 80rpx;
        font-weight: 700;
        line-height: 100.16rpx;
      }

      .heading_2 {
        font-family: Microsoft YaHei UI;
        font-size: 40rpx;
        font-weight: 700;
        line-height: 50.8rpx;
        margin-top: 16rpx;
      }

      .heading_3 {
        font-family: Microsoft YaHei UI;
        font-size: 28rpx;
        font-weight: 400;
        line-height: 34.156rpx;
        width: 840rpx;
        margin-top: 16rpx;
      }

      .apps_flex {
        margin-top: 48rpx;
        gap: 30rpx;

        .app {
          .vue_qr {
            width: 294rpx;
            height: 294rpx;
            border-radius: 40rpx;
          }

          image {
            width: 294rpx;
            height: 294rpx;
          }

          view {
            font-family: Microsoft YaHei UI;
            font-size: 24rpx;
            font-weight: 400;
            line-height: 30.48rpx;
            text-align: center;
            margin-top: 16rpx;
          }
        }
      }

      .flex {
        gap: 48rpx;

        .net_flex {
          margin-top: 74rpx;

          .app {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            image {
              width: 80rpx;
              height: 80rpx;
            }

            view {
              font-family: Microsoft YaHei UI;
              font-size: 24rpx;
              font-weight: 400;
              line-height: 30.48rpx;
              text-align: center;
              margin-top: 16rpx;
            }

            .btns {
              text-decoration: none;
              font-size: 24rpx;
              font-weight: 400;
              margin-top: 28rpx;
              width: 170.138rpx;
              height: 52.154rpx;
              border-radius: 36rpx;
              display: flex;
              text-align: center;
              align-items: center;
              justify-content: center;
              background: #d9d9d9;
              color: #008d91;
            }
          }
        }
      }
    }
  }
}

.f-t {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.nav {
  display: flex;
  justify-content: end;
  align-items: center;
  img{

    margin: 16rpx 0 0 16rpx; 
    height: 23px; 
    width: 30px
  }

}
.lang-container {
  width: 432rpx;
  background-color: #ffffff;
  box-shadow: 4px 15px 60px 0px #00000033;
  color: #003b3d;
  border-radius: 20px;
  position: absolute;
  top: 42px;
  right: 0;
  padding: 0 14px;
  font-size: 12px;
  .lang {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 12px;
    border-bottom: 1px solid #003b3d;
    .lang_text {
      display: flex;
      align-items: center;
      gap: 8px;
      .flag {
        width: 24px;
        height: 17px;
      }
    }
  }
  .lang:last-child {
    border: none;
  }
}
</style>
