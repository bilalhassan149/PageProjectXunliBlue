<template>
<div>
    <div class="daily-bg">
        <div>
            <div class="daily-banner pc">
                <img class="img" src="@/static/activity/daily-pc.jpg">
            </div>
            <image class="imgw wap" mode="widthFix" src="@/static/activity/daily.jpg"></image>
        </div>
        
        <div class="daily-date">
            活动有效时间<br>
            2024年1月1日00:00时 到 2024年1月31日23:59时
            <!-- 活动有效时间 12月4日 04:00 时 到 12月31日 23:59 时 -->
        </div>
        <!-- 活动规则 -->
        <div class="a-btn mar f-c">
            <span class="a-shadow">活动规则</span>
            活动规则
        </div>
        <p class="a-content" >
            1.本活动汛利娱乐仅虚拟币充值渠道可参与；
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

    </div>


    

</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style lang="scss">
.daily-bg{
    background:#D9D9D9;
    overflow: hidden;
}
.daily-banner{
    background:#fff;
    width:100%;
    text-align: center;
}
.daily-banner img{
    display: block;
    margin: 0 auto;
}
.daily-date{
    color:#304258;
    font-size: 40px;
    font-weight: bold;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:100px 0 60px 0;
    text-align: center;
}
.a-content{
    margin-bottom: 100px ;
}
.a-btn.mar{
    margin: 54px auto 15px auto;
}

// 手机样式 wap
@media screen and (max-width:768px) {
    .daily-bg{
        background: none;
    }
    .daily-date{
        font-size:24rpx;
        margin: 0;
    }
    .daily-title{
        width:460rpx;
        height:66rpx;
        background: url(@/static/activity/button.png) no-repeat center;
        background-size: 100% 100%;
        margin: 34rpx auto 24rpx auto ;
        font-weight: bold;
        font-size:24rpx;
        color:#fff;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .a-btn.mar{
        margin: 24rpx auto !important;
    }
    .a-content{
        margin-bottom: 60rpx ;
    }



}





</style>