<template>
    <view class="">
        <div class="pc" >
            <view class="headings f-c">
                <view class="left">
                    <p class="head1">投注礼金</p>
                    <p class="head2"> 投注 50,000 起每月既可享最高 58,888 元</p>
                    <view class="buttons f-s">
                        <div class="btn f-c" v-for="(v, index) in btnData" :key="index"
                        @click="btnFx(v, index)">
                            {{ v.name }}
                        </div>
                    </view>
                </view>
                <img class=" right bet-banner pc" draggable="false" src="@/static/activity/bet/y-pc.png">
            </view>
            <div class="bet-body">
                <!-- 进度条 -->
                <div class="bet-schedule">
                    <div class="f-s">
                        <div class="text">
                            <div class="num-body">
                                <el-statistic group-separator="," :precision="2" decimal-separator="." 
                                    :value="money ? money : 0"
                                    class="num">
                                </el-statistic>
                            </div>
                            <div class="f-c">上月有效投注金额</div>
                        </div>
                        <div class="text">
                            <div class="num">
                                <el-statistic  group-separator="," :precision="0" decimal-separator="." :value="Number($store.state.betTotal)"
                                    class="num">
                                </el-statistic>
                                元
                            </div>
                            <div class="f-c">终极豪礼</div>
                        </div>
                    </div>
                    <div  class="bet-state-bg">
                        <img class="bet-state" v-if="money && $store.state.betTotal"  :style="'width:' + (money / $store.state.betTotal * 100) + '%'" 
                            src="@/static/activity/bet/y-state.png"
                        >
                    </div>
                </div>


            </div>
            


        </div>

        <div class="wap">
            <image class="home-banners wap" mode="widthFix" src="@/static/activity/bet/y-wap.png"></image>
           
           <div class="titles">

            <b class="bet-title">
                投注礼金
            </b>
            <p class="bet-title">
                投注 50,000 起每月既可享最高 58,888 元
            </p>

           </div>
           
            <!-- 进度条 -->
            <div class="bet-schedule-h5">
                <div class="f-s">
                    <el-statistic group-separator="," :precision="2" decimal-separator="." 
                        :value="money ? money : 0"
                        class="num">
                    </el-statistic>
                    <div class="num">
                        <el-statistic group-separator="," :precision="0" decimal-separator="." :value="Number($store.state.betTotal)"
                            class="num">
                        </el-statistic>
                        元
                    </div>
                </div>
                <div  class="bet-state-bg">
                    <img class="bet-state" v-if="money && $store.state.betTotal" 
                        :style="'width:' + (money / $store.state.betTotal * 100) + '%'" 
                        src="@/static/activity/bet/y-state-h5.png"
                    >
                </div>
                <div class="f-s">
                    <div class="texta">上月有效投注金额</div>
                    <div class="texta">终极豪礼</div>
                </div>
            </div>
            <div class="f-c">
                <div class="btnType f-c" :class="index == btns ? 'on' : ''" v-for="(v, index) in btnData" :key="index"
                    @click="btnFx(v, index)">
                    {{ v.name }}
                </div>
            </div>
        </div>
        
        

        <!-- 列表 -->
        <transition name="fade" mode="out-in">
            <div class="home-list f-c f-wrap" v-show="btns == 0">
                <div class="lists-body-y" v-for="(v,index) in $store.state.betVipData.sports" :key="index">
                    <img class="ac-img" src="@/static/activity/y-money.png">
                    <div class="f-c ac-moneys">{{v.bonus}}</div>
                    <span class="ac-texta">投注豪礼 {{v.bonus}}</span>
                    <span class="ac-textb">需有效投注金额</span>
                    <div class="moneya">¥
                        <el-statistic group-separator="," :precision="0" decimal-separator="." 
                            :value="Number(v.valid)" 
                            >
                        </el-statistic>
                    </div>
                    <button class="f-c ac-btn" @click="submitFx(v)">立即兑换</button>
                </div>
            </div>
        </transition>
        <!-- 电竞 -->
        <transition name="fade" mode="out-in">
            <div class="home-list f-c f-wrap" v-show="btns == 1">
                <div class="lists-body-y" v-for="(v,index) in $store.state.betVipData.games" :key="index">
                    <img class="ac-img" src="@/static/activity/y-money.png">
                    <div class="f-c ac-moneys">{{v.bonus}}</div>
                    <span class="ac-texta">投注豪礼 {{v.bonus}}</span>
                    <span class="ac-textb">需有效投注金额</span>
                    <div class="moneya">¥
                        <el-statistic group-separator="," :precision="0" decimal-separator="." 
                            :value="Number(v.valid)" 
                            >
                        </el-statistic>
                    </div>
                    <button class="f-c ac-btn" @click="submitFx(v)">立即兑换</button>
                </div>
            </div>
        </transition>
        <!-- 棋牌 -->
        <transition name="fade" mode="out-in">
            <div class="home-list f-c f-wrap" v-show="btns == 2">
                <div class="lists-body-y" v-for="(v,index) in $store.state.betVipData.boardGame" :key="index">
                    <img class="ac-img" src="@/static/activity/y-money.png">
                    <div class="f-c ac-moneys">{{v.bonus}}</div>
                    <span class="ac-texta">投注豪礼 {{v.bonus}}</span>
                    <span class="ac-textb">需有效投注金额</span>
                    <div class="moneya">¥
                        <el-statistic group-separator="," :precision="0" decimal-separator="." 
                            :value="Number(v.valid)" 
                            >
                        </el-statistic>
                    </div>
                    <button class="f-c ac-btn" @click="submitFx(v)">立即兑换</button>
                </div>
            </div>
        </transition>

        <!-- 活动规则 -->
        <div class="a-btn s f-c">
            <!-- <span class="a-shadow">活动规则</span> -->
            活动规则
        </div>
        <p class="a-content-y">
            1. 每个自然月期间内，根据会员在体育场馆（汛利体育和IM体育）、电竞场馆、棋牌场馆三大类型场馆中的任意一个场馆所产生的月累计有效投注额，达到档位都可申领对应投注豪礼，且可以申请一次；
            <i></i>
            例：会员上月体育场馆累计有效投注额达到25,000,000，电竞场馆累计有效投注额达到25,000,000，汛利棋牌场馆累计有效投注额达到100,000,000，即可选择118、388、1,688、2,888、6,888、16,888、20,888、58,888元彩金，八选一进行申请，且可以申请一次。
            <i></i>
            2.
            礼金领取方式：会员在满足对应的条件后即可在活动页面点击“立即兑换”自助领取礼金，相关工作人员会按照申请顺序进行审核，礼金的审核状态可在“兑奖记录”中进行查看，审核通过后汛利娱乐会依次发放礼金，礼金将在5个工作日内派发至用户的中心钱包；
            <i></i>
            3. 提款要求：投注豪礼需6倍流水提款；
            <i></i>
            4.
            任何低于欧洲盘1.5或亚洲盘0.5水位的投注以及在同一赛事中同时投注对等盘口，将不计算在投注额内；任何走盘、取消的赛事将不计算在有效投注。（例如：下注100元，亚洲盘赔率0.5，如赢派彩50元，有效投注为50元；如输本金100元，有效投注为100元）；
            <i></i>
            5. 每位有效玩家、每1手机号码、电子邮箱、相同银行卡、每1个IP地址、每1台电脑使用者在活动期间每场赛事仅可享受1次优惠，如会员使用一切不正常投注、套利等违规行为，我们将保留无限期审核扣回礼金及所产生的利润权利；
            <i></i>
            6. 如会员使用一切不正常投注、套利行为，本公司将保留冻结账号盈利及余额等权利；
            <i></i>
            7. 在申请此优惠前，请您先完善真实姓名、手机、银行卡等个人信息；
            <i></i>
            8. 为避免文字理解差异，汛利娱乐保留本活动最终解释权。
        </p>

       



    </view>
</template>
    
<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            btnData: [
                { name: '体育', val: 1 },
                { name: '电竞', val: 2 },
                { name: '棋牌', val: 4 },
            ],
            btns: 0,//按钮样式
            money: '',
            upMoney: '',
            totalImg: '',
            vals: '1',
            vipData: '',// 数组请求数组
        }
    },
    computed:{
        ...mapState({
            apis: (state) => state.apis
        })
    },
    watch:{
        apis() {
            this.dataFx();
        },
    },
    onLoad(v) {
        console.log(v)
        if (v.id) {
            this.btns = v.id;
        }
        this.dataFx();
    },
    methods: {
        dataFx(){
            let that = this;
            if (that.$store.state.apis) {
                this.betMoneyFx()
            }
        },
        betMoneyFx() {
            let that = this;
            //投注礼金-获取流水
            let data = {
                gameType: this.vals,
            }
            let params = new URLSearchParams(data);
            console.log(params)
            uni.showLoading({ 
                title: "加载中..",
                mask:true
            });
            // 这里获取上月-流水
            that.$axios(that.$money,params).then(res=>{
                uni.hideLoading();
                if(res.code == 0){
                    that.money = res.data.totalValid;
                } else{
                    // Temporary not to prompt   暂时不提示
                    // uni.showToast({
                    //     title:res.msg,
                    //     icon:'none'
                    // })
                }
                
            })
            // 这里获取本月-流水
            // that.$axios(that.$thisMoney,params).then(res=>{
            //     uni.hideLoading();
            //     if(res.code == 0){
            //         that.money = res.data.totalValid;
            //     } else{
            //         // uni.showToast({
            //         //     title:res.msg,
            //         //     icon:'none'
            //         // })
            //     }
                
            // })


        },
        btnFx(v,index){
            this.btns = index;
            this.vals = v.val;
            this.betMoneyFx();
            this.$bet(index)
        }, 
        submitFx(v) {
            //申请活动
            let that = this;
            // let ids =  that.btns == 0 ? id :that.btns ==1?(id+8):(id+16);
            let data = {
                activityId: v.actiivityId,
                activityAwardId: v.actiivityAwardId,
                applyAmount: v.bonus,//申请金额，晋级优惠必传
                //  uniqueCode:'',
            };
            uni.showLoading({
                title: '加载中..',
                mask: true
            })
            let params = new URLSearchParams(data);

            that.$axios(that.$activity, params).then(res => {
                uni.showToast({
                    title: res.msg,
                    icon: 'none'
                })
                uni.hideLoading()
                console.log(res)
            })

            //过3秒自动取消
            setTimeout(res => {
                uni.hideLoading()
            }, 3000)
        }

    }
}
</script>
    
<style lang="scss" scoped>
.headings{
    width: 100%;
    height: 970px;
    background: #6A2729;
    .left{
        display:block;
        .head1{
            font-family: Microsoft YaHei UI;
            font-size: 70px;
            font-weight: 700;
            line-height: 89px;
            letter-spacing: 0em;
            text-align: left;
            color: #ffffff;
        }
        .head2{
            margin-top:8px ;
            font-family: Microsoft YaHei UI;
            font-size: 30px;
            font-weight: 400;
            line-height: 38px;
            letter-spacing: -0.5px;
            text-align: left;
            color: #ffffff;

        }
        .buttons{
            margin-top: 24px;
            .btn{
                width: 152px;
                height: 48px;
                top: 589px;
                left: 233.63px;
                padding: 10 21 10 21;
                gap: 8px;
                color: #ffffff;
                background: #008D91;
                cursor: pointer;
            }
        }
    }
    .bet-banner{
        width: 774px;
        max-width: 1080px;
        margin: 0 0 0 186px;
    }

}

.lists-body-y{
    width:600rpx;
    background:#D9D9D9;
    font-size:47rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40rpx 80rpx 60rpx 80rpx;
    margin:0 15px 23px 15px; 
    flex-direction: column;
    text-align: center;
}
.ac-textb{
    color: #008D91;
}
.ac-moneys{
    font-weight: bold;
    color:#fff;
    padding: 8rpx 30rpx;
    background: linear-gradient(37.22deg, #003B3D 11.39%, #008D91 108.35%);
    border-radius: 20rpx;
    box-shadow: 0 0 20rpx 0 #333;
    margin: -40rpx 0 20rpx 0;
}
.ac-texta{
    color:#003B3D;
}
.ac-btn{
    color:#fff;
    background:#008D91;
    font-size:47rpx;
    height:90rpx;
    width:420rpx;
}

/deep/ .moneya{
    color:#008D91;
    padding: 20rpx 0 20rpx 0;
    display: flex;
    align-items: center;
    
}
/deep/ .moneya .number{
    color:#008D91;
    font-size:47rpx !important;
}
.a-btn{
    // width:460rpx;
    margin: 150px auto 20px auto;
    font-weight: bold;
    font-size:40px;
    position: relative;
    background: #003B3D;
    color:transparent;
    -webkit-background-clip: text;
}
.a-btn.s{
    margin: 54px auto 38px auto;
}
.a-content-y{
    padding: 40px ;
    font-size:14px;
    max-width:1300px;
    color:#003B3D;
    line-height: 38rpx;
    background:#ffffff;
    margin:0 auto;
    box-shadow: 4px 15px 60px 0px #00000033;
}
.a-content-y i{
    display: block;
    height:10px;
}

uni-page-body {
    background: #ffffff;
    padding-bottom: 50px;
    font-family: "Microsoft YaHei";
}




// new style
.bet-body{
    width:1300px;
    margin:0 auto;
}
.bet-schedule{
    margin: 60px 0 75px 0;
    .text{
        font-size:14px;
        color: #008D91;

    }
    .num-body{
        font-weight: bold;
    }
    .num{
        display: flex;
        align-items: center;
    }
    .number{
        font-size:40px;
    }
    /deep/ .el-statistic .con .number{
        color: #008D91 !important;
        font-size:16px;
        font-weight: 700;
        margin-bottom: 8px;
    }
    .bet-state-bg{
        width:100%;
        background:url('@/static/activity/bet/y-state-bg.png') no-repeat;
        background-size:100% 100%;
        height:14px;
        margin-top: 11px;
        //padding: 0 10px;
    }
    .bet-state{
        height: 28px;
        margin: 7px 0;
        border-radius: 50px;
    }


}

// 手机样式
@media screen and (max-width:768px) {

    .a-content-y{
        padding: 40px ;
        font-size:14px;
        max-width:1300px;
        color:#003B3D;
        line-height: 38rpx;
        background:none;
        margin:0 auto;
        box-shadow: 4px 15px 60px 0px #00000033;
    }
    .titles{
        margin:48rpx 0;
        
        .bet-title{
           padding:0 70rpx;
        }
    }
   
    .btnType {
        width: 208rpx;
        height: 74rpx;
        font-size: 24rpx;
        margin: 0 6rpx 100rpx 6rpx;
        border-radius: 6px;
        border: 2px solid #008D91;
    }
    .on{
        background: #008D91;
        color: #ffffff;
    }
    uni-page-body{
        background: #fff;
        height:100vh;
        overflow: auto;
    }
   
    .bet-schedule-h5{
        margin: 0 88rpx 30rpx 88rpx;
        /deep/ .el-statistic .con .number,.num{
            font-size:12px;
            color:#9F9F9F;
            display: flex;
            align-items: center;
            font-weight:bold;
        }
        .bet-state-bg{
            width:100%;
            background:url('@/static/activity/bet/y-state-bg-h5.png') no-repeat;
            background-size:100% 100%;
            height:16rpx;
            margin: 10rpx 0;
            display: flex;
            align-items: center;
            padding: 0 10rpx;
        }
        .bet-state{
            height: 20rpx;
            border-radius: 20rpx;
        }
        .texta{
            font-size:24rpx;
            color:#9F9F9F;

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
</style>