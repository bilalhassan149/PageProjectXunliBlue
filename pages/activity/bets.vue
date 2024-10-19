<template>
    <div class="">
        <div class="banner f-c">
            <img class="img-pc" draggable="false" src="@/static/activity/bet/banner.png">
            <image class="img-wap" mode="widthFix" src="@/static/activity/bet/banner1.png"></image>
        </div>
        <!-- 按钮 -->
        <div class="f-c">
            <!-- :class="index == btns?'on':''"  点击效果，暂时取消 -->
            <div class="btnType f-c" :class="index == btns?'on':''"  
                v-for="(v,index) in btnData" :key="index"  
                @click="btnFx(v,index)"
                >
                {{v.name}}
            </div>
        </div>
    
        <!-- 进度条 -->
        <div class="schedule pc">
            <div class="schedule-re">
                <img class="qiu" :style="'left:'+ (money / $store.state.betTotal * 100)+'%'" src="@/static/activity/schedule-icon.png">
                <view class="content-max-re">
                    <div class="content-max" :style="'width:'+ ((money / $store.state.betTotal * 100)+1)+'%'"></div>
                </view>
            </div>
            <img class="qiu-rmb" :src="$store.state.iconUrl + $store.state.betTotalImg">
            <div class="f-s">
                <div class="text">
                    <div class="num-body">
                        <el-statistic group-separator="," :precision="2" decimal-separator="." 
                        :value="money?money:0" class="num"></el-statistic>
                        元
                    </div>
                    <div class="f-c">本月有效投注金额</div>
                </div>
                <div class="text">
                    <div class="num">
                        <el-statistic group-separator="," 
                            :precision="0" 
                            decimal-separator="." 
                            :value="Number($store.state.betTotal)" class="num">
                        </el-statistic>
                        元
                    </div>
                    <div class="f-c">终极豪礼</div>
                </div>
            </div>
        </div>
    
        <div class="schedule wap">
            <div class="f-s">
                <div class="left">
                    <div >
                        <span class="titles">本月有效投注金额</span>
                    </div>
                    <div class="num-body">
                        <el-statistic group-separator="," 
                        :precision="2" 
                        decimal-separator="." 
                        :value="money?money:0" class="num"></el-statistic>
                        元 
                    </div>
                </div>
                <div class="right">
                    <div style="text-align: right;">终极豪礼</div>
                    <div class="num">
                        ￥
                        <el-statistic group-separator="," 
                        :precision="2" 
                        decimal-separator="." 
                        :value="Number($store.state.betTotal)" class="num"></el-statistic>
                        元
                    </div>
                </div>
            </div>
            <view class="schedule-re">
                <image mode="widthFix" class="qiu" :style="'left:'+ (money / $store.state.betTotal * 100)+'%'" src="@/static/activity/schedule-icon.png"></image>
                <view class="content-max-re">
                    <div class="content-max" :style="'width:'+ ((money / $store.state.betTotal * 100)+1)+'%'"></div>
                </view>
            </view>
            <image mode="widthFix" class="qiu-rmb" :src="$store.state.iconUrl + $store.state.betTotalImg"></image>
    
        </div>
        <!-- 列表 -->
        <transition name="fade" mode="out-in">
            <div class="lists-main f-c " v-show="btns == 0">
                <div class="list" v-for="(v,index) in $store.state.betVipData.sports" :key="index" >
                    <img :src="$store.state.iconUrl + v.imageUrl">
                    <h3>投注豪礼{{v.bonus}}元</h3>
                    <span class="texts">需有效投注金额</span>
                    <el-statistic 
                        group-separator="," 
                        :precision="0" 
                        decimal-separator="." 
                        :value="Number(v.valid)" 
                        class="moneys"
                        >
                        <template slot="prefix">
                            <span class="rmb-icon">¥</span>
                        </template>
                    </el-statistic>
                    <div class="btn f-c" @click="submitFx(v)">立即兑换</div>
                </div>
            </div>
        </transition>
        <!-- 电竞 -->
        <transition name="fade" mode="out-in">
            <div class="lists-main f-c " v-show="btns == 1">
                <div class="list" v-for="(v,index) in $store.state.betVipData.games" :key="index" >
                    <img :src="$store.state.iconUrl + v.imageUrl">
                    <h3>投注豪礼{{v.bonus}}元</h3>
                    <span class="texts">需有效投注金额</span>
                    <el-statistic 
                        group-separator="," 
                        :precision="0" 
                        decimal-separator="." 
                        :value="Number(v.valid)" 
                        class="moneys"
                        >
                        <template slot="prefix">
                            <span class="rmb-icon">¥</span>
                        </template>
                    </el-statistic>
                    <div class="btn f-c" @click="submitFx(v)">立即兑换</div>
                </div>
            </div>
        </transition>
        <!-- 棋牌 -->
        <transition name="fade" mode="out-in">
            <div class="lists-main f-c " v-show="btns == 2">
                <div class="list" v-for="(v,index) in $store.state.betVipData.boardGame" :key="index" >
                    <img :src="$store.state.iconUrl + v.imageUrl">
                    <h3>投注豪礼{{v.bonus}}元</h3>
                    <span class="texts">需有效投注金额</span>
                    <el-statistic 
                        group-separator="," 
                        :precision="0" 
                        decimal-separator="." 
                        :value="Number(v.valid)" 
                        class="moneys"
                        >
                        <template slot="prefix">
                            <span class="rmb-icon">¥</span>
                        </template>
                    </el-statistic>
                    <div class="btn f-c" @click="submitFx(v)">立即兑换</div>
                </div>
            </div>
        </transition>
        <!-- 活动规则 -->
        <div class="illustrate">
            <div class="f-c">
                <img class="img" src="@/static/activity/icont.png">
            </div>
            <p>
                1.  每个自然月期间内，根据会员在体育场馆（汛利体育和IM体育）、电竞场馆、棋牌场馆三大类型场馆中的任意一个场馆所产生的月累计有效投注额，达到档位都可申领对应投注豪礼，且可以申请一次；
                <i></i>
                例：会员本月体育场馆累计有效投注额达到25,000,000，电竞场馆累计有效投注额达到25,000,000，汛利棋牌场馆累计有效投注额达到100,000,000，即可选择118、388、1,688、2,888、6,888、16,888、20,888、58,888元彩金，八选一进行申请，且可以申请一次。
                <i></i>
                2.  礼金领取方式：会员在满足对应的条件后即可在活动页面点击“立即兑换”自助领取礼金，相关工作人员会按照申请顺序进行审核，礼金的审核状态可在“兑奖记录”中进行查看，审核通过后汛利娱乐会依次发放礼金，礼金将在5个工作日内派发至用户的中心钱包；
                <i></i>
                3.  提款要求：投注豪礼需6倍流水提款；
                <i></i>
                4.  任何低于欧洲盘1.5或亚洲盘0.5水位的投注以及在同一赛事中同时投注对等盘口，将不计算在投注额内；任何走盘、取消的赛事将不计算在有效投注。（例如：下注100元，亚洲盘赔率0.5，如赢派彩50元，有效投注为50元；如输本金100元，有效投注为100元）；
                <i></i>
                5.  每位有效玩家、每1手机号码、电子邮箱、相同银行卡、每1个IP地址、每1台电脑使用者在活动期间每场赛事仅可享受1次优惠，如会员使用一切不正常投注、套利等违规行为，我们将保留无限期审核扣回礼金及所产生的利润权利；
                <i></i>
                6.  如会员使用一切不正常投注、套利行为，本公司将保留冻结账号盈利及余额等权利；
                <i></i>
                7.  在申请此优惠前，请您先完善真实姓名、手机、银行卡等个人信息；
                <i></i>
                8.  为避免文字理解差异，汛利娱乐保留本活动最终解释权。
            </p>
        </div>
    
    
    
    
    </div>
    </template>
    
    <script>
    import {mapState} from 'vuex'
    
    export default {
        data(){
            return{
                btnData:[
                    {name:'体育',val:1},
                    {name:'电竞',val:2},
                    {name:'棋牌',val:4},
                ],
                btns:0,//按钮样式
                money:'',  //bet -monry
                vals:'1', //按钮传参类型
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
        onLoad(v){
            console.log(v)
            if(v.id){
                this.btns = v.id;
            }
            this.dataFx();
        },
        methods:{
            dataFx(){
                let that = this;
                if (that.$store.state.apis) {
                    this.betMoneyFx()
                }
            },
            betMoneyFx(){
                let that = this;
                //投注礼金-获取流水
                let data = {
                    gameType :this.vals,
                }
                let params = new URLSearchParams(data);
                console.log(params)
                uni.showLoading({ 
                    title: "加载中..",
                    mask:true
                });
                // 这里获取本月-流水
                // that.$axios(that.$money,params).then(res=>{
                //     uni.hideLoading();
                //     if(res.code == 0){
                //         that.money = res.data.totalValid;
                //     } else{
                //         // Temporary not to prompt   暂时不提示
                //         // uni.showToast({
                //         //     title:res.msg,
                //         //     icon:'none'
                //         // })
                //     }
                    
                // })
                // 这里获取本月-流水
                that.$axios(that.$thisMoney,params).then(res=>{
                    uni.hideLoading();
                    if(res.code == 0){
                        that.money = res.data.totalValid;
                    } else{
                        // uni.showToast({
                        //     title:res.msg,
                        //     icon:'none'
                        // })
                    }
                    
                })
            },
            btnFx(v,index){
                this.btns = index;
                this.vals = v.val;
                this.betMoneyFx();
                this.$bet(index)
            }, 
            submitFx(v){
                //申请活动
                let that = this;
                // let ids =  that.btns == 0 ? id :that.btns ==1?(id+8):(id+16);
                let data = { 
                    activityId:v.actiivityId, 
                    activityAwardId:v.actiivityAwardId,
                    applyAmount:v.bonus ,//申请金额，晋级优惠必传
                  //  uniqueCode:'',
                };
                uni.showLoading({
                    title:'加载中..',
                    mask:true
                })
                let params = new URLSearchParams(data);
    
                that.$axios(that.$activity,params).then(res=>{
                    uni.showToast({
                        title:res.msg,
                        icon:'none'
                    })
                    uni.hideLoading()
                    console.log(res)
                })

                //过3秒自动取消
                setTimeout(res=>{
                    uni.hideLoading()
                },3000)
    
    
    
    
            }
    
        }
    }
    </script>
    
    <style lang="scss">
    .pc{display: block;}
    .wap{display: none;}
    
    uni-page-body{background:#EBEEFD;padding-bottom:50px;font-family: "Microsoft YaHei";}
    .banner{
        width: 100%;
        overflow: hidden;
    }
    .banner img{
        width:1920px;
        height:600px;
    }
    .img-wap{display: none;}
    
    
    
    .lists-main{
        width: 1250px;
        flex-wrap: wrap;
        margin: 0 auto;
        // transition: all ease-out .3s;
    }
    .list{
        background:#fff;
        box-shadow: 2px 4px 8px #c7d5ff;
        border-radius: 15px;
        padding: 30px;
        text-align: center;
        margin: 15px;
    }
    /deep/ .moneys{
        padding: 5px 0;
        margin-bottom: 13px;
    }
    
    /deep/ .moneys .number,.list .rmb,.rmb-icon{
        color:#F86C3B;
        font-size:18px;
        text-align: center;
    }
    .list .btn{
        height:40px;
        width:218px;
        border-radius: 50px;
        background: linear-gradient(#FFB891,#F86C3B);
        color:#fff;
        cursor: pointer;
    }
    .list h3{
        font-size:24px;
        color:#404261;
        margin:  14px 0;
    }
    .list .texts{
        font-size:14px;
        color:#6C7BA8;
    }
    
    .illustrate{
        box-shadow: 2px 4px 8px #c7d5ff;
        border-radius: 15px;
        background: #fff;
        padding: 30px;
        width:1200px;
        margin: 0 auto;
        margin-top:30px;
    }
    
    .illustrate p{
        font-size:18px;
        color:#404261;
        line-height:24px;
        padding: 20px 0;
    }
    .illustrate i{
        height:25px;
        width:100%;
        display: block;
    }
    
    // 按钮
    .btnType{
        width:160px;
        height:50px;
        border:2px solid #fff;
        border-radius: 50px;
        box-shadow: 4rpx 4rpx 10rpx #bbbdff;
        color:#6C7BA8;
        font-size:20px;
        margin: 0 15px;
        background: linear-gradient(180deg,rgba(255,255,255,0.9),#F2F6FE,#E7EEFE,rgba(255,255,255,0.8));
        //#FFFFFF  #F2F6FE  #E7EEFE  #FFFFFF
        cursor: pointer;
        transition: all ease-out .3s;
    }
    .btnType.on{
        background: linear-gradient(180deg,#FFB891,#F86C3B);
        color:#fff;
    }
    
    
    // 手机样式
    @media screen and (max-width:768px){
        .pc{display: none;}
        .wap{display: block;}
        .img-pc{display: none;}
        .img-wap{display: block;width:100%;}
    
        
        .lists-main{width:100%;}
        .list{
            margin: 12rpx;
            padding: 28rpx;
            width:44.5%;
        }
        .list img{width:100%;}
        .list h3{font-size:28rpx;margin: 2rpx 0;}
        .list .texts{font-size:24rpx;}
        .list .rmb,/deep/  .moneys .number{
            font-size:26rpx;
            padding: 2px 0 0 0 ;
        }
        .moneys{
            margin-bottom: 6rpx;
            padding: 2px 0;
        }
        .rmb-icon{
            font-size: 26rpx;
            margin-bottom: 4rpx;
            margin-right: 2rpx;
        }
        .list .btn{width:100%;font-size:24rpx;height:52rpx;}
        .illustrate{width:91%;overflow: hidden;padding:56rpx 30rpx 40rpx 30rpx;}
        .illustrate .img{width:750px;}
        .illustrate p{
            color:#404261;
            font-size:24rpx;
        }
        .illustrate p i{height:40rpx;}
    
        .btnType{
            width:212rpx;
            height:76rpx;
            font-size:32rpx;
            border:4rpx solid #fff;
            margin: 0 14rpx 30rpx 14rpx;
        }
        
    
    
    
    
    
    
    }
    
    
    
    uni-page-body{
        height:100vh;
        overflow: auto;
    }
    
    
    .fade-enter-active{
        transition: all 0.5s; //过度是2秒
    }
    .fade-enter{
        opacity: 0.3;
    }
    
    .fade-leave-active{
        transition: all 0.2s; //过度是2秒
    }
    .fade-leave-to{
        opacity: 0.7;
    }
    
    
    
    
    
    </style>