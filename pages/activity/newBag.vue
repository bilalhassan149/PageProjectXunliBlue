<template>
    <!-- 赛事包赔页 -->
    <div class="bag-bg">
    <div class="opa-bg">
        <!-- <div class="bag-bg pc" ></div> -->
    
        <img class="bag-banner pc" src="@/static/activity/bag/pc.png">
        <img class="home-banners wap" src="@/static/activity/bag/wap.jpg">
        <div class="bag-content">
            <div class="bag-title">活动对象：</div>
            <div class="bag-text">汛利体育VIP1及以上会员</div>
    
            <div class="bag-title">活动时间：</div>
            <div class="bag-text">长期</div>
    
            <div class="bag-title">活动存款时间：</div>
            <div class="bag-text">指定赛事开始前24小时内</div>
    
            <div class="bag-title">活动内容：</div>
            <div class="bag-text">
                若会员投注于指定赛事结算后，本场赛事的总负盈利可获得100%本金返还，最高1888元，仅需一倍流水即可出款。
                <br>如果会员同时间在所有体育场馆参与指定活动赛事，活动结算时盈亏将累计计算。
            </div>
        </div>
        
    
        <div class="content">
            <div class="vip-border">
                <div class="vip-title">
                    <span>会员等级</span>
                    <span>最高返还</span>
                </div>
                <div>
                    <div class="vip-content">
                        <span>VIP1 & VIP2</span>
                        <span>38</span>
                    </div>
                    <div class="vip-content">
                        <span>VIP3</span>
                        <span>58</span>
                    </div>
                    <div class="vip-content">
                        <span>VIP4</span>
                        <span>88</span>
                    </div>
                    <div class="vip-content">
                        <span>VIP5</span>
                        <span>118</span>
                    </div>
                    <div class="vip-content">
                        <span>VIP6</span>
                        <span>188</span>
                    </div>
                    <div class="vip-content">
                        <span>VIP7</span>
                        <span>218</span>
                    </div>
                    <div class="vip-content">
                        <span>VIP8</span>
                        <span>328</span>
                    </div>
                    <div class="vip-content">
                        <span>VIP9</span>
                        <span>458</span>
                    </div>
                    <div class="vip-content">
                        <span>VIP10</span>
                        <span>1888</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="a-btn f-c s">
            <span class="a-shadow">活动规则</span>
            活动规则
        </div>
        <p class="a-content">
            1.  本活动仅限体育场馆参与；　
            <i></i>
            2.  会员VIP等级以指定赛事开始前系统VIP等级为准；　
            <i></i>
            3.  以上负盈利仅对已结算并产生输赢结果的投注额进行计算，任何走水、串关、取消的赛事将不计算在有效投注。任何低于欧洲盘1.5或亚洲盘0.5水位的投注以及在同一赛事中同时投注对等盘口， 将不计算在投注额内；
            <i></i>
            4.  每位真实有效玩家/每1手机号码/电子邮箱/户籍地址/现居地址/同1银行卡/每一IP地址/每1台电脑或上网设备，每场赛事仅能参加并享受一次优惠活动，若有违规者，将不享受此红利；
            <i></i>
            5.  彩金仅需一倍流水即可出款；
            <i></i>
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
    
    <style lang="scss" scoped>
    uni-page-body{
        font-family: "Microsoft YaHei";
    }
    .bag-bg{
        width:100%;
        // height:100%;
        z-index: -1;
        background:url('@/static/activity/bag/bg.jpg') no-repeat top;
        background-size:100% 100%;
    }
    .opa-bg{
        background:rgba(255,255,255, 0.6);
        padding-bottom:50px;
    }
    
    
    .bag-banner{
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
    }
    .content{
        padding: 30rpx 38rpx 0 38rpx;
    }
    .vip-border{
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 0 10px;
        width:940px;
        margin: 0 auto;
    }
    .vip-title{
        background: linear-gradient(#99210D,#CC542C);
        height:88rpx;
        width:100%;
        color:#fff;
        font-weight:bold;
        font-size:24rpx;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .vip-title span{
        width:50%;
        text-align: center;
    }
    .vip-content{
        background:#647182;
        height:88rpx;
        font-size:12px;
        color:#fff;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .vip-content:nth-of-type(even){
        
        background:#304258;
    }
    .vip-content span{
        width:50%;
        text-align: center;
    }
    .bag-content{
        background: #ECECEC;
        border-radius: 20px;
        padding: 70rpx 90rpx;
        width:1300px;
        margin: 27px auto;
        box-shadow:4px 15px 15px rgba(0,0,0,0.2);
    }
    .bag-title{
        color:#304258;
        font-size:16px;
        font-weight: bold;
        line-height: 36px;
    }
    .bag-text{
        color:#304258;
        font-size:14px;
        margin: 0 0 30px 0;
        padding-left: 24px;
    }
    
    
    
    
    
    
    
    
    
    
    // 手机样式 活动页面
    @media screen and (max-width:768px){
        uni-page-body{
            background: #fff;
            height:100vh;
            overflow: auto;
        }
        .bag-bg{
            background: none;
        }
        .a-content{
            padding: 0 60rpx 0 70rpx;
        }
        .vip-border{
            width:auto;
        }
        .bag-content{
            padding: 0 0 0 68rpx;
            width:auto;
            background: none;
            box-shadow: none;
        }
        .bag-title{
            color:#304258;
            font-size:24rpx;
            line-height: 48rpx;
        }
        .bag-text{
            color:#304258;
            font-size:24rpx;
            margin: 0 0 24rpx 0;
            padding: 0 20rpx 0 0;
        }
        // .a-btn{
        //     margin: 80rpx auto 24rpx auto;
        // }
    
    
    
    
    
    }
    
    
    </style>