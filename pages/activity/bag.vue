<template>
    <!-- 赛事包赔页 -->
<div class="">
    <div class="banner f-c">
        <img class="img-pc" draggable="false" src="@/static/activity/banner.jpg">
        <image class="img-wap" mode="widthFix" src="@/static/activity/wap-bag.jpg"></image>
    </div>

    <!-- 活动对象 -->
    <div class="activity-main">
        <div class="a-bor">
            <div class="a-name">活动对象：</div>
            <div class="old-content">汛利体育VIP1及以上会员</div>
        </div>
        <div class="a-bor">
            <div class="a-name">活动时间：</div>
            <div class="old-content">长期</div>
        </div>
        <div class="a-bor">
            <div class="a-name">活动存款时间：</div>
            <div class="old-content">指定赛事开始前24小时内</div>
        </div>
        <div class="a-bor">
            <div class="old-content"><div class="a-name s" style="margin-bottom: 5px;">活动内容：</div>
            若会员投注于指定赛事结算后，本场赛事的总负盈利可获得100%本金返还，最高1888元，仅需一倍流水即可出款。<br>如果会员同时间在所有体育场馆参与指定活动赛事，活动结算时盈亏将累计计算。</div>
        </div>
        
        <!-- vip等级 -->
        <div class="a-vip">
            <div class="a-vip-title f-a" >
                <div class="f-c">会员等级</div>
                <div class="f-c">最高返还</div>
            </div>
            <div class="a-list" >
                <div class="f-c">VIP1及VIP2</div>
                <div class="f-c">38</div>
            </div>
            <div class="a-list">
                <div class="f-c">VIP3</div>
                <div class="f-c">58</div>
            </div>
            <div class="a-list">
                <div class="f-c">VIP4</div>
                <div class="f-c">88</div>
            </div>
            <div class="a-list">
                <div class="f-c">VIP5</div>
                <div class="f-c">118</div>
            </div>
            <div class="a-list">
                <div class="f-c">VIP6</div>
                <div class="f-c">188</div>
            </div>
            <div class="a-list">
                <div class="f-c">VIP7</div>
                <div class="f-c">218</div>
            </div>
            <div class="a-list">
                <div class="f-c">VIP8</div>
                <div class="f-c">328</div>
            </div>
            <div class="a-list">
                <div class="f-c">VIP9</div>
                <div class="f-c">458</div>
            </div>
            <div class="a-list">
                <div class="f-c">VIP10</div>
                <div class="f-c">1888</div>
            </div>
        </div>
        <div class="a-alert mt ">
            <b style="color:red;">注：</b>
            玩家VIP10投注指定比赛总下注1888元。比赛结束后负盈利1888元，汛利体育将全额返还1888元，仅需一倍流水即可出款。
        </div>
        
    </div>

    <!-- 活动规则 -->
    <div class="illustrate">
        <div class="f-c">
            <img class="img" src="@/static/activity/icont.png">
        </div>
        <p>
            1.  本活动仅限体育场馆参与；　
            <i></i>
            <!-- 2.  参加活动会员需在指定赛事开始前24小时内存款达888元或以上即可获得参加优惠资格； -->
            2.  会员VIP等级以指定赛事开始前系统VIP等级为准；　
            <i></i>
            3.  以上负盈利仅对已结算并产生输赢结果的投注额进行计算，任何走水、串关、取消的赛事将不计算在有效投注。任何低于欧洲盘1.5或亚洲盘0.5水位的投注以及在同一赛事中同时投注对等盘口， 将不计算在投注额内；
            <i></i>
            4.  每位真实有效玩家/每1手机号码/电子邮箱/户籍地址/现居地址/同1银行卡/每一IP地址/每1台电脑或上网设备，每场赛事仅能参加并享受一次优惠活动，若有违规者，将不享受此红利；
            <i></i>
            <!-- 6.  本活动不与体育首存共享，与其他优惠活动共享； -->
            5.  彩金仅需一倍流水即可出款；
            <i></i>
            <!-- 6.  会员无需申请，满足申请条件的会员系统会在48小时内进行派奖，相关部门审核后派发至“福利中心”（比赛结束后48小时内），请在发放彩金后的30天内，前往“福利中心”点击领取，逾期作废，请注意查收； -->
            6. 会员无需申请，满足申请条件的会员系统会在48小时内进行派奖，可以在交易记录中-选择红利记录中查看。
            <i></i>
            7.  若发现有套利客户，对赌或不诚实获取盈利之行为，将取消其优惠资格；
            <i></i>
            8.  此活动最终解释权归汛利体育所有。
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

.schedule{
    background:url('@/static/activity/schedule-back.png') center no-repeat;
    width:1210px;
    margin:  0 auto;
    padding-top:115px;
    height: 200px;
    position: relative;
    overflow: hidden;
}
.schedule .text{
    color:#6C7BA8;
    font-size:16px;
}
.schedule .text .num{
    font-size:28px;
    color:#404261;
    margin-right:3px;
}
.qiu{
    width:45px;
    height:45px;
    position:absolute;
    left:0;
    top:70px;
}
.qiu-rmb{
    width:100px;
    height:100px;
    position:absolute;
    right:30px;
    top:0px;
}
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

.activity-main{
    border-radius: 15px;
    overflow: hidden;
    background:#fff;
    padding: 30px;
    box-shadow:2px 4px 6px #c7d4f9;
    width:1200px;
    margin: 0 auto;
}
.a-name{
    font-size:18px;
    color:#F86C3B;
    min-width:128px;
}
.old-content{
    font-size:18px;
    color:#404261;
}
.a-bor{
    margin-bottom: 20px;
    display: flex;
}
.a-vip{
    border-radius: 15px;
    overflow: hidden;
    margin-top:10px;
}
.a-vip-title{
    background:#F86C3B;
    color:#fff;
    font-size:18px;
    display: flex;
    height:60px;
}
.a-list{
    height:60px;
    font-size:18px;
    color:#404261;
    display: flex;
}
.a-list:nth-of-type(even){
    background: #F7F9FE;
}
.a-list div{
    width:50%;
}
.a-alert{
    color:#404261;
    font-size:18px;
}




// 手机样式
@media screen and (max-width:768px){
    .pc{display: none;}
    .wap{display: block;}
    .img-pc{display: none;}
    .img-wap{display: block;width:100%;}

    .schedule{
        background:#fff url('@/static/activity/wapt.png') center no-repeat;
        width:100%;
        border-radius: 30rpx;
        width: 700rpx;
        box-shadow: 4rpx 6rpx 12rpx #c7d5ff;
        background-size:92% 36rpx;
        height:292rpx;
        padding: 26rpx;
        background-position-y: 144rpx;
        margin-bottom: 20rpx;
    }
    .qiu-rmb{
        width:100rpx;
        right:30rpx;
        top:30rpx;
    }
    .qiu{
        width:52rpx;
        left: 0;
        top: 132rpx;
        margin-left: 20rpx;
    }
    .right{
        position:absolute;
        right:30rpx;
        bottom: 30rpx;
        color:#6C7BA8;
        font-size:24rpx;
    }
    .right .num{
        font-size:28rpx;
        color:#404261;
        font-weight: bold;
    }
    .left{
        position:absolute;
        left:30rpx;
        top: 30rpx;
        font-size:24rpx;
    }
    .left .num{
        color: #404261;
        font-size:42rpx;
        font-weight:bold;
        margin-right:6rpx;
    }
    .left .titles{
        color:#fff;
        background:linear-gradient(#FFB891,#F86C3B);
        border-top-right-radius: 10rpx;
        border-bottom-right-radius: 10rpx;
        min-width:150rpx;
        height:42rpx;
        margin-left:-30rpx;
        padding:20rpx;
    }
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
    .activity-main{
        padding: 30rpx;
        width:91%;
    }
    .a-list,.a-vip-title{
        height:80rpx;
        font-size:24rpx;
    }
    .a-name{
        font-size:24rpx;
        min-width: auto;
    }
    .a-name.s{
        min-width: 135rpx;
    }
    .old-content{
        font-size:24rpx;
        display: flex;
    }
    .a-bor{
        margin-bottom: 40rpx;
        display: flex;
    }
    .a-vip{
        border-radius: 30rpx;
        overflow: hidden;
        margin-top:20rpx;
    }
    .a-alert{font-size:24rpx;padding: 0 20rpx;}







}


uni-page-body{
    height:100vh;
    overflow: auto;
}








</style>