<template>
<div>
<!-- 获取代理号页面 -->
    


</div>
</template>

<script>
export default {
    data(){
        return{ 
        }
    },
    onLoad(){
        console.log('load')
        //,{deviceUserAgent	:this.data.deviceUserAgent} //https://www.baidu.com/
        // let  urls = 'https://AA1235.baidu.com' ;
        let urls = location.href;
        let  of = urls.indexOf('.')
        if(of != -1){ //下标6 
            let val = urls.substring(of-6,of);
            console.log(val,'查看前缀')
            console.log(urls.substring(of,urls.length),'查看后缀');
            uni.setStorageSync('agent',urls.substring(of-6,of))

            // uni.navigateTo({
            //     url:"/pages/reg?number=" + val
            // })
            //改成跳转固定网址：7-7  , 因为此页面路由跟 注册路由 不是同个网址
            window.location.href = 'https://site.xunli.bet/pages/reg?number=' + val;
            

        }
        

    },
    methods:{
    }



}





</script>






<style>


</style>