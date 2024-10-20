<template>
<div :class="$i.deviceType == 'pc'?'bg':'wap'">
    <div class="w-main" >
        <div class="pc-logo f-c">
            <img src="@/static/logo.png"  class="img">
            <div><b>当前IP地址：</b>
                <span class="ipColor">{{ $store.state.ipData.yourIP }}</span>
            </div>
            <!-- <div class="ifr-main">
                <iframe src="https://www.ip138.com/" class="ifr"></iframe>
            </div> -->
            
        </div>
        <div class="f-c">
            <div class="line f-c f-wrap">
                <div class="line-bgs f-c">
					<b class="for-title">线路A:</b>
                    <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.apiUrl">
                        <div class="line-icon f-c">
                            <div class="for-icon">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="for-time">{{index+1}}-延迟 
                            {{ $store.state.apiPing[index]?$store.state.apiPing[index]:'--' }} 秒
                        </div>
                        <!-- <div class="text" @click="copy()">{{item}}</div> -->
                    </div>
                </div>
                
                <!--  -->
                <div class="line-bgs f-c">
					<b class="for-title">线路B:</b>
                    <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.iconUrl">
                        <div class="line-icon f-c">
                            <div class="for-icon">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="for-time">{{index+1}}-延迟 {{ $store.state.iconPing[index]?$store.state.iconPing[index]:'--' }} 秒</div>
                        <!-- <div class="text" @click="copy()">{{item}}</div> -->
                    </div>
                </div>
                <!--  -->
                <div class="line-bgs f-c">
					<b class="for-title">线路C:</b>
                    <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.jsonUrl">
                        <div class="line-icon f-c">
                            <div class="for-icon">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="for-time">{{index+1}}-延迟 
                            {{ $store.state.jsonUrlPing[index]?$store.state.jsonUrlPing[index]:'--' }} 秒
                        </div>
                        <!-- <div class="text" @click="copy()">{{item}}</div> -->
                    </div>
                </div>
                <!-- 下线线路 -->
                <div class="line-bgs f-c">
					<b class="for-title">线路D:</b>
                    
                    <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.siteUrl">
                        <!-- <a :href="item" class="line-a"></a> -->
                        <div class="line-icon f-c">
                            <div class="for-icon">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="for-time">{{index+1}}-延迟 {{ $store.state.sitePing[index]?$store.state.sitePing[index]:'--' }} 秒</div>
                        <!-- <div class="text" @click="copy()">{{item}}</div> -->
                    </div>
                </div>
                
                <!--  -->
                <!-- <div class="line-bgs f-c">
					<b class="for-title">电脑端链接:</b>
                    <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.pcUrl">
                        <div class="line-icon f-c">
                            <div class="for-icon">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="for-time">
                            请直接访问结果 
                        </div>
                        <a :href="item" class="link">{{item}}</a>
                    </div>
                </div>
                <div class="line-bgs f-c">
					<b class="for-title">手机端链接:</b>
                    <div class="line-icon-main" v-for="(item,index) in $store.state.jsons.h5Url">
                        <div class="line-icon f-c">
                            <div class="for-icon">
                                <div class="i"></div>
                                <div class="i i1"></div>
                                <div class="i i2"></div>
                                <div class="i i3"></div>
                            </div>
                        </div>
                        <div class="for-time">
                            请直接访问结果 
                        </div>
                        <a :href="item" class="link">{{item}}</a>
                    </div>
                </div> -->
                




            </div>
        </div>
    </div>
    <!-- 线路页 -->



    

</div>
</template>

<script>
import state from "../store/state";
export default {
  data() {
    return {
        sss:[],
        testTime:0,
		testTimeClear:'',
    };
  },
  onLoad(){
    // let that = this;
    // that.testTime = 0; 
    // that.testTimeClear = setInterval(res=>{
    //     that.testTime = that.testTime+0.1;
    //     // console.log(that.testTime)
    // },100)
    // setTimeout(function(){
    //     clearInterval(that.testTimeClear)
    // },15000)
  },
  methods: {
    copy(){
        // state.aa = 'test';
        // state.iconPing[2] = 999;
        // console.log(state)
        // this.$forceUpdate()
       
    },

  }
};
</script>

<style lang="scss">
.bg {
  background: url("@/static/bg.png") top;
  overflow: hidden;
  min-height: 100vh;
  background-size:100% 100%;
}
.pc-logo{
	display: flex;
	width: 1200px;
	margin: 0px auto;
	// justify-content: right;
    align-items: center;
    font-size:20px;
    padding:30px 0 20px 0;
}
.pc-logo .img{
	width: 360rpx;
    margin: 0 60rpx 0px 0;
}
.figure {
  width: 600px;
}
.line {
  // width: 530px;
  width: 1200px;
  min-height: 600px;
}
.line .title {
  width: 390px;
}
.text{
	margin:20rpx 10rpx;
	user-select: all;
    color:#2dbd00;
}
.for-title{
	font-size:26px;
	margin-right:40px;
    width:100px;
}
.for-time{
	color: #037d3a;
	font-weight: bold;
	margin:10px 0 0 0;
}
.for-icon{
	display: flex;
	align-items: baseline;
}
.line-icon{
    width:47px !important;
    height:47px !important;
    
}
.line-icon-main{
    width:220px;
}
.line-bgs{
    padding:40rpx 0 ;
}
.ipColor{
    color:#2dbd00;
    font-weight: bold;
}
.ifr{
    width: 1000px;
    height: 300px;
    margin: -90px 0 0 -190px;
}
.ifr-main{
    overflow: hidden;
    height: 150px;
    width: 600px;
    border-radius: 100px;
    margin: 0 0 10px 0;
}
.line-a{
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    text-decoration: none;
    .text{
        text-decoration: underline;
    }
}


// wap /* 设置了浏览器宽度不大于768px时生效*/
@media screen and (max-width: 769px) {
  .wap {
    background: url("@/static/line/wap-bg.png");
    min-height: 100vh;
    background-size: 100% 100%;
    // padding-bottom: 60rpx;
  }
  .ipColor{
    width:100%;
    display: inline-block;
  }
  .pc-logo{
    width: 100%;
    font-size:32rpx;
    padding: 40rpx 0 0rpx 90rpx;
  }
  .pc-logo .img{
	width: 290rpx;
    margin: 0 36rpx 0px 0;
  }
  .line{
    width:100%;
  }
  .line-a,.line-icon-main{
    flex-direction: row;
    justify-content: center;
  }
  .line-bgs{
    width: 100%;
    flex-wrap: wrap;
    padding: 0 0 0 0;
    position: relative;
  }
  .for-title{
    margin: 0 0 0px 0;
    text-align: center;
    font-size: 20px;
    position: absolute;
    left: 10px;
  }
  .line-icon-main{
    width:100%;
    .link{
        margin:0 0 0 20rpx;
    }
  }
  .line-icon {
    width: 30px !important;
    height: 32px !important;
    margin: 0 0 12rpx 0;
  }
  .line-icon .i{
    width: 6rpx;
    height: 16rpx;
    margin-left: 4rpx;
  }
  .line-icon .i1{
    height: 22rpx;
  }
  .line-icon .i2{
    height: 28rpx;
  }
  .line-icon .i3{
    height: 32rpx;
  }
  .for-time{
    margin: 0 0rpx 0 12rpx;
  }






}


</style>