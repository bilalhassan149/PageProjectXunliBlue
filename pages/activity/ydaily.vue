<template>
    <view class="">
        <div class="pc" >
            <view class="headings f-c">
                <view class="left">
                    <p class="head2">
						活动有效时间 <b>12</b>月<b>1</b>日 <b>00:00</b>时 到 <b>12</b>月<b>31</b>日 <b>24:00</b> 时
					</p>
                </view>
                <img class=" right bet-banner pc" draggable="false" src="@/static/activity/bet/y-daily-pc.png">
            </view>
        </div>

        <div class="wap">
            <image class="home-banners wap" mode="widthFix" src="@/static/activity/bet/y-daily-wap.png"></image>
           
           <div class="titles">
            <p class="bet-title">
                活动有效时间 <b>12</b>月<b>1</b>日 <b>00:00</b>时 到 <b>12</b>月<b>31</b>日 <b>24:00</b> 时
            </p>
           </div>
        </div>
        
        

        <!-- 活动规则 -->
        <div class="a-btn s f-c">
			活动规则
        </div>
        <p class="a-content-y">
			1.本活动汛利娱乐所有充值渠道都可参与；
            <i></i>
            2.
            用户当日第一笔充值将赠送充值总数的1%，单笔充值金额大于500，例：充值500元到账505元，需要一倍流水提款；
            <i></i>
            3. 一个账号一天内只会赠送一笔豪礼，充值后将自动获取该活动金额；
            <i></i>
            4. 每位有效玩家、每1手机号码、电子邮箱、相同银行卡、每1个IP地址、每1台电脑使用者在活动期间每场赛事仅可享受1次优惠，如会员使用一切不正常投注、套利等违规行为，我们将保留无限期审核扣回礼金及所产生的利润权利；
            <i></i>
            5. 如会员使用一切不正常投注、套利行为，本公司将保留冻结账号盈利及余额等权利；
            <i></i>
            6. 在申请此优惠前，请您先完善真实姓名、手机、银行卡等个人信息；
            <i></i>
            7. 为避免文字理解差异，汛利娱乐保留本活动最终解释权。
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
                 
                }
                
            })
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
    background: #AE597E;
    .left{
        display:block;
        .head2{
			width: 400px;
            margin-top:8px ;
			font-family: Microsoft YaHei UI;
			font-size: 40px;
			font-weight: 700;
			line-height: 56.5px;
			letter-spacing: -0.5px;
            text-align: left;
            color: #ffffff;

        }
    
    }
    .bet-banner{
        width: 774px;
        max-width: 1080px;
        margin: 0 0 0 186px;
		height: 970px;
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

.a-btn{
    margin: 150px auto 20px auto;
    font-weight: 700;
    font-size:64rpx;
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







@media screen and (max-width:768px) {
	.a-btn{
		margin: 150px auto 20px auto;
		font-family: Microsoft YaHei UI;
		font-size: 32rpx;
		font-weight: 700;
		line-height: 15.24px;
		text-align: center;
		
		position: relative;
		background: #003B3D;
		color:transparent;
		-webkit-background-clip: text;
	}
	.a-btn.s{
		margin: 54px auto 38px auto;
	}

    .a-content-y{
        padding:0 40px 40px 40px ;
        font-size:14px;
        max-width:1300px;
        color:#003B3D;
        line-height: 38rpx;
        background:none;
        margin:0 auto;
        box-shadow: 0px 0px 0px 0px #00000033;
    }
    .titles{
        margin:48rpx 0;
        
        .bet-title{
           text-align: center;
			color: #008D91;
		   font-size: 24rpx;
        }
    }
   
   
    uni-page-body{
        background: #fff;
        height:100vh;
        overflow: auto;
    }
   
   
}

// end

.fade-enter-active {
    transition: all 0.5s;
}
.fade-enter {
    opacity: 0.3;
}

.fade-leave-active {
    transition: all 0.2s; 
}
.fade-leave-to {
    opacity: 0.7;
}
</style>