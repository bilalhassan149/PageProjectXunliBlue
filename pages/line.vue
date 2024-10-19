<template>
<div :class="$i.deviceType == 'pc'?'bg':''">
    <div class="w-main " v-if="$i.deviceType == 'pc'">
        <div class="pc-logo">
            <img src="@/static/logo.png"  class="img">
        </div>
        <div class="f-c">
            <img class="figure" src="@/static/line/asset.png" >
            <div class="line f-c f-wrap">
                <div style="margin-bottom:30px"><img class="title" src="@/static/line/title.png"></div>
                <!-- 网站线路 -->
                <div class="line-bg f-c">
                    <div class="line-title f-c">
                        <img style="width:274px;" src="@/static/line/line-title.png">
                        <div class="line-title-text">网页版链接</div>
                    </div>
                    <!-- <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.h5Url">
                        <div class="line-icon f-c">
                            <div style="display: flex;align-items: baseline;">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="text">链接{{index}}</div>
                        <a :href="item">
                            <img class="button-go" src="@/static/line/btn-1.png">
                        </a>
                    </div> -->
                    <div class="line-icon-main ">
                        <div class="line-icon f-c">
                            <div style="display: flex;align-items: baseline;">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <!-- <div class="num">0.2秒</div> -->
                        <div class="text">链接1</div>
                        <a href="https://www.xunli05.com">
                            <img class="button-go" src="@/static/line/btn-1.png">
                        </a>
                    </div>
                    <div class="line-icon-main ">
                        <div class="line-icon f-c">
                            <div style="display: flex;align-items: baseline;">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <!-- <div class="num">0.2秒</div> -->
                        <div class="text">链接2</div>
                        <a href="https://www.xunli06.com">
                            <img class="button-go" src="@/static/line/btn-1.png">
                        </a>
                    </div>
                    <div class="line-icon-main">
                        <div class="line-icon f-c">
                            <div style="display: flex;align-items: baseline;">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <!-- <div class="num">0.2秒</div> -->
                        <div class="text">链接3</div>
                        <a href="https://www.xunli.bet">
                            <img class="button-go" src="@/static/line/btn-1.png">
                        </a>
                    </div>

                </div>
                <!-- 下线线路 -->
                <div class="line-bg f-c">
                    <div class="line-title f-c">
                        <img style="width:274px;" src="@/static/line/line-title.png">
                        <div class="line-title-text">APP下载链接</div>
                    </div>
                    <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.siteUrl">
                        <div class="line-icon f-c">
                            <div style="display: flex;align-items: baseline;">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <!-- <div class="num">0.2</div> -->
                        <div class="text">链接{{index+1}}</div>
                        <a :href="item">
                            <img class="button-go" src="@/static/line/btn-1.png">
                        </a>
                    </div>
					
                    <!-- <div class="line-icon-main line-color1">
                        <div class="line-icon f-c">
                            <div style="display: flex;align-items: baseline;">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="num">0.2</div>
                        <div class="text">线路2</div>
                        <a href="https://www.xunli.bet">
                            <img class="button-go" src="@/static/line/btn-1.png">
                        </a>
                    </div>
                    <div class="line-icon-main line-color2">
                        <div class="line-icon f-c">
                            <div style="display: flex;align-items: baseline;">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="num">0.2</div>
                        <div class="text">线路3</div>
                        <a href="https://www.xunli.bet">
                            <img class="button-go" src="@/static/line/btn-1.png">
                        </a>
                    </div>
                    <div class="line-icon-main">
                        <div class="line-icon f-c">
                            <div style="display: flex;align-items: baseline;">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="num">0.2</div>
                        <div class="text">线路4</div>
                        <a href="https://www.xunli.bet">
                            <img class="button-go" src="@/static/line/btn-1.png">
                        </a>
                    </div> -->

                </div>
            </div>
        </div>
    </div>
    <!-- 线路页 -->
    <footers style="margin-top:50px;" v-show="$i.deviceType == 'pc'"></footers>


    <!-- 手机版 -->
    <div v-if="$i.deviceType != 'pc'" class="wap">
        <div class="f-c wap-logo">
            <img src="@/static/logo.png" >
        </div>
        <div class="wap-line f-c f-wrap">
            <div ><img class="wap-figure" src="@/static/line/title.png"></div>
            <!-- 网站线路 -->
            <div class="line-bg f-c" >
                <div class="line-title f-c">
                    <img class="wap-title" src="@/static/line/line-title.png">
                    <div class="line-title-text">网站链接</div>
                </div>

                <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.h5Url">
                    <div class="line-icon f-c">
                        <div style="display: flex;align-items: baseline;">
                            <div class="i"></div>
                            <div class="i i1"></div>
                            <div class="i i2"></div>
                            <div class="i i3"></div>
                        </div>
                    </div>
                    <!-- <div class="num">0.2秒</div> -->
                    <div class="text">链接{{ index +1}}</div>
                    <a :href="item">
                        <img class="button-go" src="@/static/line/btn-1.png">
                    </a>
                </div>
                <!-- <div class="line-icon-main line-color1">
                    <div class="line-icon f-c">
                        <div style="display: flex;align-items: baseline;">
                            <div class="i"></div>
                            <div class="i i1"></div>
                            <div class="i i2"></div>
                            <div class="i i3"></div>
                        </div>
                    </div>
                    <div class="num">0.2秒</div>
                    <div class="text">线路2</div>
                    <a href="https://www.xunli.bet">
                        <img class="button-go" src="@/static/line/btn-1.png">
                    </a>
                </div>
                <div class="line-icon-main line-color2">
                    <div class="line-icon f-c">
                        <div style="display: flex;align-items: baseline;">
                            <div class="i"></div>
                            <div class="i i1"></div>
                            <div class="i i2"></div>
                            <div class="i i3"></div>
                        </div>
                    </div>
                    <div class="num">0.2秒</div>
                    <div class="text">线路3</div>
                    <a href="https://www.xunli.bet">
                        <img class="button-go" src="@/static/line/btn-1.png">
                    </a>
                </div>
                <div class="line-icon-main">
                    <div class="line-icon f-c">
                        <div style="display: flex;align-items: baseline;">
                            <div class="i"></div>
                            <div class="i i1"></div>
                            <div class="i i2"></div>
                            <div class="i i3"></div>
                        </div>
                    </div>
                    <div class="num">0.2秒</div>
                    <div class="text">线路4</div>
                    <a href="https://www.xunli.bet">
                        <img class="button-go" src="@/static/line/btn-1.png">
                    </a>
                </div> -->

            </div>
            <!-- 下线线路 -->
            <div class="line-bg f-c">
                <div class="line-title f-c">
                    <img class="wap-title" src="@/static/line/line-title.png">
                    <div class="line-title-text">APP下载链接</div>
                </div>

                <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.siteUrl">
                    <div class="line-icon f-c">
                        <div style="display: flex;align-items: baseline;">
                            <div class="i"></div>
                            <div class="i i1"></div>
                            <div class="i i2"></div>
                            <div class="i i3"></div>
                        </div>
                    </div>
                    <div class="text">链接{{ index +1}}</div>
                    <a :href="item">
                        <img class="button-go" src="@/static/line/btn-1.png">
                    </a>
                </div>
                <!-- <div class="line-icon-main line-color1">
                    <div class="line-icon f-c">
                        <div style="display: flex;align-items: baseline;">
                            <div class="i"></div>
                            <div class="i i1"></div>
                            <div class="i i2"></div>
                            <div class="i i3"></div>
                        </div>
                    </div>
                    <div class="num">0.2</div>
                    <div class="text">线路2</div>
                    <a href="https://www.xunli.bet">
                        <img class="button-go" src="@/static/line/btn-1.png">
                    </a>
                </div>
                <div class="line-icon-main line-color2">
                    <div class="line-icon f-c">
                        <div style="display: flex;align-items: baseline;">
                            <div class="i"></div>
                            <div class="i i1"></div>
                            <div class="i i2"></div>
                            <div class="i i3"></div>
                        </div>
                    </div>
                    <div class="num">0.2</div>
                    <div class="text">线路3</div>
                    <a href="https://www.xunli.bet">
                        <img class="button-go" src="@/static/line/btn-1.png">
                    </a>
                </div>
                <div class="line-icon-main">
                    <div class="line-icon f-c">
                        <div style="display: flex;align-items: baseline;">
                            <div class="i"></div>
                            <div class="i i1"></div>
                            <div class="i i2"></div>
                            <div class="i i3"></div>
                        </div>
                    </div>
                    <div class="num">0.2</div>
                    <div class="text">线路4</div>
                    <a href="https://www.xunli.bet">
                        <img class="button-go" src="@/static/line/btn-1.png">
                    </a>
                </div> -->

            </div>
            <!-- 联系客服 -->
            <div class="f-c about" @click="$about()">
                <img src="@/static/about.png">
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
  methods: {}
};
</script>

<style lang="scss">
.bg {
  background: url("@/static/bg.png") top;
  overflow: hidden;
  height: 100vh;
}
.pc-logo{
	display: flex;
	width: 1200px;
	margin: 0px auto;
	justify-content: right;
}
.pc-logo .img{
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




// wap /* 设置了浏览器宽度不大于768px时生效*/
@media screen and (max-width: 769px) {
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
  }
  .wap-figure {
    width: 601rpx;
    margin: 0 0 50rpx 0; 
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
  // .line-icon {
  //   width: 77rpx;
  //   height: 77rpx;
  // }
  // .line-icon .i {
  //   width: 6.8rpx;
  //   height: 19.5rpx;
  // }
  // .line-icon .i1 {
  //   height: 25rpx;
  // }
  // .line-icon .i2 {
  //   height: 29.5rpx;
  // }
  // .line-icon .i3 {
  //   height: 40rpx;
  // }
  // .line-bg .num {
  //   font-size: 30rpx;
  //   margin-top: 10rpx;
  // }
  // .line-bg .text {
  //   font-size: 24rpx;
  //   margin: 12rpx 0 10rpx 0;
  // }
  // .button-go {
  //   width: 150rpx;
  // }
  .line-title-text {
    font-size: 30rpx;
    line-height: 64rpx;
  }
  .about {
    width: 90%;
    height: 76rpx;
    margin: 0 20rpx;
    background: url("@/static/line/btn-2.png") no-repeat;
    background-size: 100% 100%;
    font-size:24rpx;
    color:#fff;
  }
  .about img{
      margin-right:20rpx;
      width:40rpx;
  }
}
</style>