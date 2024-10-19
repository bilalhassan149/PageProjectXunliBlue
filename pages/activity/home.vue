<template>
    <div  >
        <div class="banner f-c">
            <img class="img-pc" draggable="false" src="@/static/activity/home.jpg">
            <image class="img-wap" mode="widthFix" src="@/static/activity/home1.jpg"></image>
        </div>
        <!-- 进度条 -->
        <div class="schedule pc">
            <!-- 进度条内 -->
            
            <view class="schedule-re">
                <img class="qiu" :style="'left:'+ leftVal+'%'" src="@/static/activity/schedule-icon.png">
                <view class="content-max-re">
                    <div class="content-max" :style="'width:'+ (leftVal+1)+'%'"></div>
                </view>
            </view>
            
    
            <img class="qiu-rmb" src="@/static/activity/7.png">
            <div class="f-s">
                <div class="text">
                    <!-- <div class="num-body">
                        <el-statistic group-separator="," :precision="2" decimal-separator="." :value="money.totalValidAmount" class="num"></el-statistic>
                        元
                    </div>
                    <div class="f-c">首存金额</div> -->
                    <div class="f-c">首存以下活动列表金额 ----- 获取终极豪礼</div>
                </div>
                <div class="text">
                    <div class="num">500,000元</div>
                    <div class="f-c">终极豪礼</div>
                </div>
            </div>
        </div>
        <!-- <h3 >测试-：{{$store.state.token}}</h3> -->
    
    
        <!-- wap -->
        <div class="schedule wap">
            <view class="schedule-re">
                <image mode="widthFix" class="qiu" :style="'left:'+ leftVal+'%'" src="@/static/activity/schedule-icon.png"></image>
                <view class="content-max-re">
                    <div class="content-max" :style="'width:'+ (leftVal+1)+'%'"></div>
                </view>
            </view>
            <image mode="widthFix" class="qiu-rmb" src="@/static/activity/7.png"></image>
    
            <div class="f-s">
                <div class="left">
                    <div >
                        <span class="titles">首存以下活动列表金额 - 获取终极豪礼</span>
                    </div>
                    <!-- <div class="num-body">
                        <el-statistic group-separator="," :precision="2" decimal-separator="." :value="money.totalValidAmount" class="num"></el-statistic>
                        元
                    </div> -->
                </div>
                <div class="right">
                    <div style="text-align: right;">终极豪礼</div>
                    <div class="num">500,000元</div>
                </div>
            </div>
        </div>
        <!-- 列表 -->
        <div class="lists-main f-c ">
            <div class="list">
                <img src="@/static/activity/0.jpg">
                <h3>首存豪礼88元</h3>
                <span class="texts">需首存金额</span>
                <div class="rmb">¥1,000</div>
                <div class="btn f-c" @click="btnFx(88,401)">立即兑换</div>
            </div>
            <div class="list">
                <img src="@/static/activity/1.jpg">
                <h3>首存豪礼138元</h3>
                <span class="texts">需首存金额</span>
                <div class="rmb">¥5,000</div>
                <div class="btn f-c" @click="btnFx(138,402)">立即兑换</div>
            </div>
            <div class="list">
                <img src="@/static/activity/2.jpg">
                <h3>首存豪礼388元</h3>
                <span class="texts">需首存金额</span>
                <div class="rmb">¥10,000</div>
                <div class="btn f-c" @click="btnFx(388,403)">立即兑换</div>
            </div>
            <div class="list">
                <img src="@/static/activity/3.jpg">
                <h3>首存豪礼1888元</h3>
                <span class="texts">需首存金额</span>
                <div class="rmb">¥50,000</div>
                <div class="btn f-c" @click="btnFx(1888,404)">立即兑换</div>
            </div>
            <div class="list">
                <img src="@/static/activity/4.jpg">
                <h3>首存豪礼3888元</h3>
                <span class="texts">需首存金额</span>
                <div class="rmb">¥80,000</div>
                <div class="btn f-c" @click="btnFx(3888,405)">立即兑换</div>
            </div>
            <div class="list">
                <img src="@/static/activity/5.jpg">
                <h3>首存豪礼5888元</h3>
                <span class="texts">需首存金额</span>
                <div class="rmb">¥120,000</div>
                <div class="btn f-c" @click="btnFx(5888,406)">立即兑换</div>
            </div>
            <div class="list">
                <img src="@/static/activity/6.jpg">
                <h3>首存豪礼6888元</h3>
                <span class="texts">需首存金额</span>
                <div class="rmb">¥200,000</div>
                <div class="btn f-c" @click="btnFx(6888,407)">立即兑换</div>
            </div>
            <div class="list">
                <img src="@/static/activity/7.png">
                <h3>首存豪礼18888元</h3>
                <span class="texts">需首存金额</span>
                <div class="rmb">¥500,000</div>
                <div class="btn f-c" @click="btnFx(18888,408)">立即兑换</div>
            </div>
        </div>
        <!-- 活动规则 -->
        <div class="illustrate">
            <div class="f-c">
                <img class="img" src="@/static/activity/icont.png">
            </div>
            <p>
                1.  本活动汛利全员皆可参与；　
                <i></i>
                2.  首存豪礼：活动仅支持首次存款成功的账号， 24小时内累计的首存总金额满足活动要求，请于30天内进行兑换即可获得对应礼金。
                （例如：会员首存金额达到50W即可申请18,888、6,888、5,888、3,888、1,888、388、138、88元礼金，八选一进行申请）;
                <i></i>
                3.  一个账号只能领取一次首存豪礼，礼金有效兑换期为30天，礼金有效期内没有领取视为主动放弃礼金;　
                <i></i>
                4.  礼金领取方式：会员在满足对应的条件后即可在活动页面点击“立即兑换”自助领取礼金，相关工作人员会按照申请顺序进行审核，礼金的
                审核状态可在“兑奖记录”中进行查看，审核通过后汛利娱乐会依次发放礼金，礼金将在5个工作日内派发至用户的中心钱包；
                <i></i>
                5.  提款要求：首存豪礼需6倍流水提款；
                <i></i>
                6.  每位有效玩家、每1手机号码、电子邮箱、相同银行卡、每1个IP地址、每1台电脑使用者在活动期间每场赛事仅可享受1次优惠，
                如会员使用一切不正常投注、套利等违规行为，我们将保留无限期审核扣回礼金及所产生的利润权利；
                <i></i>
                7.  此为避免文字理解差异，汛利娱乐保留本活动最终解释权。
            </p>
        </div>
    
    
    
    
    </div>
    </template>
    
    <script>
    
    export default {
        props:['vals'],
        data(){
            return{
                leftVal:0,//进度
                result:'',// android 传过来的token
                results:'',//值2
                money:{
                    totalValidAmount:'',
                }, // money-list
                total:500000,
                bank:'',//银行卡
                apiBank:false,
                waits:false,
            }
        },
        onLoad(v){
            console.log(v,'load')
            
        },
        methods:{
            async bankFx(){
                console.log("bank银行卡信息");
                await this.$ajax(this.$bank).then((res) => {
                    if(res.code == 0){
                        this.apiBank = true;
                        this.bank = res.data.allBankCard;
                    }else{
                        uni.showToast({
                            title:res.msg,
                            icon:'none'
                        })
                    }
                });
            },
            async btnFx(num,id){
               
                // bank -set wait
                if(!this.apiBank){
                    await this.$ajax(this.$bank).then((res) => {
                        if(res.code == 0){
                            this.apiBank = true;
                            this.bank = res.data.allBankCard;
                        }else{
                            uni.showToast({
                                title:res.msg,
                                icon:'none'
                            })
                        }
                    });
                    if(!this.apiBank){
                        return
                    }
                }
                if(this.bank == ''){
                    uni.showToast({
                        title:'请先绑定银行卡之后,再兑换',
                        icon:'none'
                    })
                    return
                }
                //申请活动
                let that = this;
                let data = {
                    activityId:4, //首存活动 id
                    activityAwardId:id,
                    //uniqueCode:'',
                    applyAmount:num,//申请金额，晋级优惠必传
                };
                uni.showLoading({
                    title:'加载中..',
                    mask:true
                })
                let params = new URLSearchParams(data);
                // let head = {
                //     'Auth-Token':uni.getStorageSync('tokens').token, 
                // };
                that.$axios(that.$activity,params).then(res=>{
                    uni.showToast({
                        title:res.msg,
                        icon:'none'
                    })
                    uni.hideLoading()
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
    
    uni-page-body{
        background:#EBEEFD;
        padding-bottom:50px;
        font-family: "Microsoft YaHei";
    }
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
    }
    .list{
        background:#fff;
        box-shadow: 2px 4px 8px #c7d5ff;
        border-radius: 15px;
        padding: 30px;
        text-align: center;
        margin: 15px;
    }
    
    .list .rmb{
        color:#F86C3B;
        font-size:18px;
        text-align: center;
        margin-bottom: 13px;
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
        margin: 60rpx auto 0 auto;
    }
    
    .illustrate p{
        font-size:18px;
        color:#404261;
        line-height:24px;
        padding: 20px 0;
        user-select: text;
    }
    .illustrate i{
        height:25px;
        width:100%;
        display: block;
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
        .list .rmb{font-size:26rpx;}
        .list .btn{width:100%;font-size:24rpx;height:52rpx;}
        .illustrate{width:91%;overflow: hidden;padding:56rpx 30rpx 40rpx 30rpx;}
        .illustrate .img{width:750px;}
        .illustrate p{
            color:#404261;
            font-size:24rpx;
        }
        .illustrate p i{height:40rpx;}
    
    
    
        
    
    
    
    
    }
    
    
    uni-page-body{
        height:100vh;
        overflow: auto;
    }
    
    
    
    
    
    
    
    
    
    
    
    </style>