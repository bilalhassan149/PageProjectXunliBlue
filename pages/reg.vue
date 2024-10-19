<template>
<div>

    <div class="bgs" 
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        >
        <div class="content">
            <div class="f-c">
                <img class="logo" src="@/static/logos.png">
            </div>
            <div class="re">
                <input class="inputs" v-model="data.username" placeholder="请输入账号" placeholder-class="colocP">
                <img src="@/static/reg/reg_user.png" class="icon-user">
                <div class="reg-alert f-c">
                    <img src="@/static/reg/alert.png">最少2个字母+数字组合，首位为字母
                </div>
            </div>
            <!-- password  -->
            <div class="re" >
                <div v-show="!show">
                    <input class="inputs" v-model="data.password" placeholder="请输入密码" type="password" placeholder-class="colocP">
                    <img src="@/static/reg/reg2.png" class="icon-user">
                    <img src="@/static/reg/show2.png" class="show"  @click="showFx">
                </div>
                <div v-show="show">
                    <input class="inputs" v-model="data.password" placeholder="请输入密码" type="text" placeholder-class="colocP">
                    <img src="@/static/reg/reg2.png" class="icon-user">
                    <img src="@/static/reg/show1.png" class="show"  @click="showFx">
                </div>
            </div>
            <div class="re">
                <div v-show="!show">
                    <input class="inputs" v-model="data.passwords" placeholder="确认密码" type="password" placeholder-class="colocP">
                    <img src="@/static/reg/reg2.png" class="icon-user">
                    <img src="@/static/reg/show2.png" class="show"  @click="showFx">
                </div>
                <div v-show="show">
                    <input class="inputs" v-model="data.passwords" placeholder="确认密码" type="text" placeholder-class="colocP">
                    <img src="@/static/reg/reg2.png" class="icon-user">
                    <img src="@/static/reg/show1.png" class="show"  @click="showFx">
                </div>
            </div>
            <!-- pass end -->
            <div class="re">
                <input class="inputs" v-model="data.phoneNo" placeholder="请输入手机号" type="number" placeholder-class="colocP">
                <img src="@/static/reg/tel.png" class="icon-user">
            </div>
            <div class="re">
                <input class="inputs" 
                v-model="data.smsCode" 
                placeholder="验证码" 
                placeholder-class="colocP">
                <img src="@/static/reg/reg1.png" class="icon-user">
                <div v-show="btnShow" class="send" @click="getCode">发送验证码</div>
                <div v-show="!btnShow" class="send code-time" >重新获取({{ time }})</div>
            </div>
            <!-- <div class="re">
                <input class="inputs" 
                    v-model="data.inviteCode" 
                    placeholder="请输入邀请码" 
                    placeholder-class="colocP"
                    disabled
                >
                <img src="@/static/reg/reg1.png" class="icon-user">
                <span class="maa">推荐码</span>
            </div> -->

            <div class="reg-btn f-c" @click="submitFx">注册</div>
            <!-- 联系客服 -->
            <div  class="about f-c" @click="$about()">
                <img src="@/static/about.png">
                联系客服
            </div>

        </div>


    </div>

    
    <!-- 弹窗跳转 -->
    <!-- <div class="line-body">
        <div class="line-bg f-c">
            <div class="line-icon-main ">
                <div class="line-icon f-c">
                    <div style="display: flex;align-items: baseline;">
                        <div class="i"></div>
                        <div class="i i1"></div>
                        <div class="i i2"></div>
                        <div class="i i3"></div>
                    </div>
                </div>
                <div class="text">网页链接1</div>
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
                <div class="text">网页链接2</div>
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
                <div class="text">网页链接3</div>
                <a href="https://www.xunli.bet">
                    <img class="button-go" src="@/static/line/btn-1.png">
                </a>
            </div>

        </div>
    </div> -->



</div>
</template>

<script>
export default {
    data(){
        return{
            data:{
                username:'',  //没有区分大小写
                password:'',
                passwords:'',//确认密码
                phoneNo:'', //手机号码
                smsCode:'', //短信验证码
                inviteCode:'', //邀请码 //BB1292
                deviceType:uni.getDeviceInfo().deviceType == 'pc'?'0':'4', //设备类型   0-PC浏览器；1-手机浏览器 ；2-Android App ；3-iOS App；4-其他
                deviceUserAgent	:navigator.userAgent,//登录注册固定参数二：设备型号（将设备的 User-Agent 传人）
                deviceCode:uni.getDeviceInfo().deviceId, //登录注册固定参数三：设备码，一台设备一个设备码，没有就传一个 uuid码
                deviceVersion:uni.getDeviceInfo().system, //版本web端
            },
            show:false,
            btnShow:true,
            time: 60, //倒计时
            timer: "", //计时器名称
            loading:false,
        }
    },
    onLoad(data){
        let that = this;


        if(data.number){
            uni.showToast({
                title:'加载中',
                icon:'none'
            })
            
            uni.setStorageSync('id',data.number)
            let url = window.location.href;
            let id = window.location.href.indexOf('?number');
            url = url.substring(0,id)
            console.log(url)
            window.location.href = url;
        }else{
            //推荐码
            this.data.inviteCode = uni.getStorageSync('id')
        }
        console.log('id',this.data.inviteCode)
        // console.log('load')
        // console.log(JSON.stringify(this.data))
        // //,{deviceUserAgent	:this.data.deviceUserAgent} //https://www.baidu.com/
        // let  urls = 'https://AA1234.baidu.com' ;
        // let  of = urls.indexOf('.')
        // if(of != -1){ //下标6 
        //     console.log(urls.substring(of-6,of),'查看前缀')
        //     console.log(urls.substring(of,urls.length),'查看后缀')
        // }
        //推荐码
        // this.data.inviteCode = uni.getStorageSync('agent');

    },
    methods:{
        showFx(){
            this.show  = !this.show;
        },
        getCode(){
            if(this.data.username.length <6){
                this.$message.error("请输入账号,不小于6位")
                return
            }
            if (this.data.phoneNo.length == 11) {
                let data = {
                    phoneNo: this.data.phoneNo
                }
                let params = new URLSearchParams(data);
                this.$axios(this.$regCode,params).then(res=>{
                    if (res.code == 0) {
                        this.interval();
                        this.btnShow = false;
                        this.$message({
                            message:'发送成功',
                            type:'success'
                        })
                    } else  {
                        this.$message.error(res.msg)
                    }
                    

                })
            } else {
                this.$message.error("手机号格式不正确")
            }
        },
        //获取验证码倒计时
        interval() {
            this.timer = setInterval(() => {
                this.time--;
                if (this.time <= 0) {
                clearInterval(this.timer);
                this.time = 60;
                this.btnShow = true;
                }
            }, 1000);
        },
        submitFx(){
            var Ytel = /^1[3-9]\d{9}$/;	//验证手机
            var Ymi= /^(?![^a-zA-Z]+$)(?!\D+$).{6,10}/; //不低于6位密码 英文+数字组合
            let that = this;

            if(this.data.username.length <6){
                uni.showToast({
                    title:'请输入账号,不小于6位',
                    icon:'none'
                })
                // this.$message.error("请输入账号,不小于6位")
                return
            }
            if(this.data.password == '' || !Ymi.test(this.data.password)){
                uni.showToast({
                    title:'密码不低于6位+英文组合。',
                    icon:'none'
                })
                // this.$message.error("密码不低于6位+英文组合")
                return
            }
            if(this.data.passwords != this.data.password ){
                uni.showToast({
                    title:'两次密码不一致',
                    icon:'none'
                })
                // this.$message.error("两次密码不一致")
                return
            }
            if(this.data.phoneNo == '' || !Ytel.test(this.data.phoneNo)){
                uni.showToast({
                    title:'手机格式错误',
                    icon:'none'
                })
                // this.$message.error('手机格式错误')
                return
            }
            if(this.data.smsCode ==''){
                uni.showToast({
                    title:'验证码错误',
                    icon:'none'
                })
                // this.$message.error("验证码错误")
                return
            }

            let head = {
                'Auth-Token':uni.getDeviceInfo().deviceId,
                'Content-Type':'application/x-www-form-urlencoded',
                "accept-language":"zh-CN,zh;q=0.9,en-US;",
            }
            if(!that.loading){
                that.loading = true;
                this.$ajax(this.$reg,this.data,head).then(res=>{
                    console.log(res)
                    if(res.code == 0){
                        that.loading = false;
                        uni.showToast({
                            title:'注册成功，欢迎登录汛利娱乐游玩。',
                            icon:'none'
                        })
                        //跳转电脑端7-7
                        // setTimeout(function(){
                        //     uni.navigateTo({
                        //         url:'/pages/line'
                        //     })
                        // },800)

                        if(this.$i.platform == 'android' || this.$i.platform =='ios'){
                            setTimeout(function(){
                                // window.location.href = "https://m.xunli.bet/";
                                window.location.href = that.$store.state.jsons.h5Url[0];
                                
                            },800)
                        }else{
                            //跳转电脑端7-7
                            setTimeout(function(){
                                window.location.href = that.$store.state.jsons.pcUrl[0];
                                // "https://www.xunli06.com/";
                            },800)
                        }
                        
                        
                        
                    }else{
                        this.$message.error(res.msg)
                        that.loading = false;
                    }
                })
            }

        },
        ceshi(){
            this.$message({
                message:'成功',
                type:'success'
            })
        }
    }



}





</script>






<style>
uni-page-body{
    background: #ddd;
}
.line-body{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}


.bgs{
    background: url('@/static/reg/regbg.jpg') top center no-repeat;
    min-height:100vh;
    overflow: hidden;
}
.content{
    width:410px;
    overflow: hidden;
    margin: 0 auto; 
    /* margin-top:205px; */
    margin-top:150px;
    min-height: 400px;
    background: rgba(0,0,0,0.85);
    padding: 50px 30px 40px 30px;
    border-radius: 10px;
}
.f-c{
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo{
    /* width:192px; */
    width:430rpx;
    margin-bottom: 50rpx;
    
}
.inputs{
    background: linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,.4),hsla(0,0%,100%,.3),hsla(0,0%,100%,.2),hsla(0,0%,100%,.1),hsla(0,0%,100%,.1),hsla(0,0%,100%,.1),hsla(0,0%,100%,.1),hsla(0,0%,100%,.2),hsla(0,0%,100%,.3),hsla(0,0%,100%,.4),hsla(0,0%,100%,.5));
    /* background: url('@/static/reg/border.png') no-repeat; */
    background-size:100%;
    border-radius: 10px;
    width:100%;
    height:46px;
    padding-left:60px;
    font-size:16px;
    color: #fff;
}
.re{    
    position:relative;
    margin-bottom: 20px;
}
.icon-user{
    position: absolute;
    width:30px;
    height:30px;
    left:20px;
    top:8px;
}
.reg-alert{
    color:#FF5050;
    font-size:14px;
    height: 30px;
    display: none;
    margin-bottom: -10px;
}
.reg-alert img{
    width:15px;
    height:15px;
    margin-right:4px;
}
.colocP{color:#c3c3c3;}
.reg-btn{
    /* background: url('@/static/btn45.png') no-repeat; */
    background: linear-gradient(180deg,#f5a377,#f76e3d);
    border-radius: 16rpx;
    width:100%;
    height:90rpx;
    background-size:100%;
    font-size:32rpx;
    color:#fff;
    cursor: pointer;
}
.about{
    color:#fff;
    margin: 60rpx 0 0px 0;
    font-size: 32rpx;
    text-decoration-line: none;
    cursor: pointer;
}
.about img{width:35px;height:35px;margin-right:14px;}
.show{
    position: absolute;
    right:15px;
    top:15px;
    cursor: pointer;
}

.send{
    height: 30px;
    border-radius: 0;
    color: #fff;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 7px;
    font-size: 14px;
    background: linear-gradient(180deg,#f5a377,#f76e3d);
    border-radius: 20px;
    padding: 5px 10px;
}
.maa{
    position: absolute;
    font-size:14px;
    color:red;
    top:12px;
    right:15px;
}

.code-time {
  width: 105px;
  height: 30px;
  background: #9eadbd;
  border-radius: 4px;
  font-size: 14px;
  margin-left: 12px;
  cursor: not-allowed;
  position: absolute;
  right: 11px;
  color: #fff;
  top:7px;
}


@media screen and (max-width:768px){
    .content{
        width: calc(100% - 60rpx);
        /* margin: 0px 12px;
        margin-top: 120rpx; */
        margin: 0;
        position:fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }


}

/deep/ .el-loading-text,/deep/ .el-icon-loading{color:#ffc800 !important;}


</style>