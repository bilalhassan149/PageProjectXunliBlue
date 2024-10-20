<template>
  <div :class="$i.deviceType == 'pc' ? 'bg' : ''">
    <div class="w-main" v-if="$i.deviceType == 'pc'">
      <div class="pc-logo">
        <img src="@/static/logo.png" class="img" />
      </div>
      <div class="f-c">
        <img class="figure" src="@/static/line/asset.png" />
        <div class="line f-c f-wrap">
          <div style="margin-bottom: 30px">
            <view class="text_title">公平公正 畅玩娱乐</view>
            <view class="text_title_sub">深受信赖的投注平合</view>
          </div>
          <!-- 网站线路 -->
          <div class="line-bg f-c">
            <div class="line-title f-c">
              <img style="width: 274px; filter: invert(1) brightness(0.7) sepia(5) hue-rotate(122deg) saturate(9);" src="@/static/line/line-title.png" />
              <div class="line-title-text">网页版链接</div>
            </div>
            <div class="line-icon-main">
              <div class="line-icon f-c">
                <div style="display: flex; align-items: baseline">
                  <div class="i"></div>
                  <div class="i i1"></div>
                  <div class="i i2"></div>
                  <div class="i i3"></div>
                </div>
              </div>
              <div class="text">链接1</div>
              <a href="http://www.pc.yl0508.com">
                <view class="button-go">立即进入</view>
              </a>
            </div>
            <div class="line-icon-main">
              <div class="line-icon f-c">
                <div style="display: flex; align-items: baseline">
                  <div class="i"></div>
                  <div class="i i1"></div>
                  <div class="i i2"></div>
                  <div class="i i3"></div>
                </div>
              </div>
              <div class="text">链接2</div>
              <a href="http://www.pc.yl0508.com">
                <view class="button-go">立即进入</view>
              </a>
            </div>
            <div class="line-icon-main">
              <div class="line-icon f-c">
                <div style="display: flex; align-items: baseline">
                  <div class="i"></div>
                  <div class="i i1"></div>
                  <div class="i i2"></div>
                  <div class="i i3"></div>
                </div>
              </div>
              <div class="text">链接3</div>
              <a href="http://www.pc.yl0508.com">
                <view class="button-go">立即进入</view>
              </a>
            </div>
          </div>
          <!-- 下线线路 -->
          <div class="line-bg f-c">
            <div class="line-title f-c">
    
              <img style="width: 274px; filter: invert(1) brightness(0.7) sepia(5) hue-rotate(122deg) saturate(9);" src="@/static/line/line-title.png" />
              <div class="line-title-text">APP下载链接</div>
            </div>
            <div
              class="line-icon-main"
              v-for="(item, index) in $store.state.jsons.siteUrl"
              :key="index"
            >
              <div class="line-icon f-c">
                <div style="display: flex; align-items: baseline">
                  <div class="i"></div>
                  <div class="i i1"></div>
                  <div class="i i2"></div>
                  <div class="i i3"></div>
                </div>
              </div>
              <div class="text">链接{{ index + 1 }}</div>
              <a :href="item">
                <view class="button-go">立即进入</view>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 线路页 -->
    <footers style="margin-top: 50px" v-show="$i.deviceType == 'pc'"></footers>

    <!-- 手机版 -->
    <div v-if="$i.deviceType != 'pc'" class="wap">
      <div class="f-c wap-logo">
        <img src="@/static/logo.png" />
      </div>
      <div class="wap-line f-c f-wrap">
        <div class="wap-figure">公平公正 畅玩娱乐</div>
        <div class="wap-figure_sub">深受信赖的投注平合</div>

        <!-- 网站线路 -->
        <div class="line-bg f-c">
          <div class="line-title f-c">
            <img class="wap-title" src="@/static/line/line-title.png" />
            <div class="line-title-text">网站链接</div>
          </div>

          <div
            class="line-icon-main"
            v-for="(item, index) in $store.state.jsons.h5Url"
            :key="index"
          >
            <div class="line-icon f-c">
              <div style="display: flex; align-items: baseline">
                <div class="i"></div>
                <div class="i i1"></div>
                <div class="i i2"></div>
                <div class="i i3"></div>
              </div>
            </div>
            <!-- <div class="num">0.2秒</div> -->
            <div class="text">链接{{ index + 1 }}</div>
            <a :href="item">
              <view class="button-go">立即进入</view>
            </a>
          </div>
        </div>
        <!-- 下线线路 -->
        <div class="line-bg f-c">
          <div class="line-title f-c">
            <img class="wap-title" src="@/static/line/line-title.png" />
            <div class="line-title-text">APP下载链接</div>
          </div>

          <div
            class="line-icon-main"
            v-for="(item, index) in $store.state.jsons.siteUrl"
            :key="index"
          >
            <div class="line-icon f-c">
              <div style="display: flex; align-items: baseline">
                <div class="i"></div>
                <div class="i i1"></div>
                <div class="i i2"></div>
                <div class="i i3"></div>
              </div>
            </div>
            <div class="text">链接{{ index + 1 }}</div>
            <a :href="item">
              <view class="button-go">立即进入</view>
            </a>
          </div>
        </div>
        <!-- 联系客服 -->
        <div class="f-c about" @click="$about()">
          <img src="@/static/about.png" />
          联系客服
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import footers from "@/components/footers/footers";
export default {
  components: { footers },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.bg {
  background: url("@/static/bg.png") top;
  overflow: hidden;
  height: 100%;
}
.pc-logo {
  display: flex;
  width: 1200px;
  margin: 0px auto;
  justify-content: right;
}
.pc-logo .img {
  width: 180px;
  margin: 30px 219px 0px 0;
}
.figure {
  width: 600px;
}
.line {
  width: 530px;
  min-height: 600px;
}
.line .title {
  width: 390px;
}
.text_title{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: MicrosoftYaHeiUI;
    font-size: 60rpx;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 0.16rpx;
    text-align: center;
    color: #008D91;
}
.text_title_sub{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: MicrosoftYaHeiUI;
    font-size: 40rpx;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 0.16rpx;
    text-align: center;
    color: #008D91;
}
.button-go {
    color: #fff;
    width: 150rpx;
    height: 50rpx;
    border-radius: 100rpx;
    background: #003b3d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Microsoft YaHei UI;
    font-size: 12px;
    font-weight: 700;
    line-height: 15.24px;
    text-align: center;
  }
@media screen and (max-width: 769px) {
  .button-go {
    color: #fff;
    width: 150rpx;
    height: 50rpx;
    border-radius: 100rpx;
    background: #003b3d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Microsoft YaHei UI;
    font-size: 12px;
    font-weight: 700;
    line-height: 15.24px;
    text-align: center;
  }
  .wap {
    background: url("@/static/line/wap-bg.png");
    height: 100vh;
    background-size: 100% 100%;
  }
  .wap-logo img {
    width: 260rpx;
    margin: 60rpx 0;
  }
  .wap-title {
    width: 420rpx;
    filter: invert(1) brightness(0.7) sepia(5) hue-rotate(122deg) saturate(9);
  }
  .wap-figure {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: MicrosoftYaHeiUI;
    font-size: 60rpx;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 0.16rpx;
    text-align: center;
    color: #008D91;
  }
  .wap-figure_sub {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: MicrosoftYaHeiUI;
    font-size: 40rpx;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 0.16rpx;
    text-align: center;
    color: #008D91;
  }
  .wap-line {
    width: 100%;
  }
  .line-bg {
    padding: 100rpx 30rpx 70rpx 30rpx;
    margin-bottom: 20px;
    margin: 0px 0 20rpx 0;
  }
  .line-icon-main {
    padding: 0 10rpx;
    //new
    width: 35%;
  }
  .line-title-text {
    font-size: 30rpx;
    line-height: 64rpx;
  }
  .about {
    width: 90%;
    height: 76rpx;
    margin: 0 20rpx;
    background: #003B3D;
    font-size: 24rpx;
    color: #fff;
    border-radius: 20rpx;
  }
  .about img {
    margin-right: 20rpx;
    width: 40rpx;
  }
}
</style>
