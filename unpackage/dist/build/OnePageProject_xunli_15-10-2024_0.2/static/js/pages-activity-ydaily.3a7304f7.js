(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-ydaily"],{"0339":function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{},[i("div",{staticClass:"pc"},[i("v-uni-view",{staticClass:"headings f-c"},[i("v-uni-view",{staticClass:"left"},[i("p",{staticClass:"head2"},[t._v("活动有效时间"),i("b",[t._v("12")]),t._v("月"),i("b",[t._v("1")]),t._v("日"),i("b",[t._v("00:00")]),t._v("时 到"),i("b",[t._v("12")]),t._v("月"),i("b",[t._v("31")]),t._v("日"),i("b",[t._v("24:00")]),t._v("时")])]),i("img",{staticClass:" right bet-banner pc",attrs:{draggable:"false",src:n("5c5f")}})],1)],1),i("div",{staticClass:"wap"},[i("v-uni-image",{staticClass:"home-banners wap",attrs:{mode:"widthFix",src:n("17dd")}}),i("div",{staticClass:"titles"},[i("p",{staticClass:"bet-title"},[t._v("活动有效时间"),i("b",[t._v("12")]),t._v("月"),i("b",[t._v("1")]),t._v("日"),i("b",[t._v("00:00")]),t._v("时 到"),i("b",[t._v("12")]),t._v("月"),i("b",[t._v("31")]),t._v("日"),i("b",[t._v("24:00")]),t._v("时")])])],1),i("div",{staticClass:"a-btn s f-c"},[t._v("活动规则")]),i("p",{staticClass:"a-content-y"},[t._v("1.本活动汛利娱乐所有充值渠道都可参与；"),i("i"),t._v("2.\n            用户当日第一笔充值将赠送充值总数的1%，单笔充值金额大于500，例：充值500元到账505元，需要一倍流水提款；"),i("i"),t._v("3. 一个账号一天内只会赠送一笔豪礼，充值后将自动获取该活动金额；"),i("i"),t._v("4. 每位有效玩家、每1手机号码、电子邮箱、相同银行卡、每1个IP地址、每1台电脑使用者在活动期间每场赛事仅可享受1次优惠，如会员使用一切不正常投注、套利等违规行为，我们将保留无限期审核扣回礼金及所产生的利润权利；"),i("i"),t._v("5. 如会员使用一切不正常投注、套利行为，本公司将保留冻结账号盈利及余额等权利；"),i("i"),t._v("6. 在申请此优惠前，请您先完善真实姓名、手机、银行卡等个人信息；"),i("i"),t._v("7. 为避免文字理解差异，汛利娱乐保留本活动最终解释权。")])])},e=[]},"0604":function(t,a,n){var i=n("e6bb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("20122170",i,!0,{sourceMap:!1,shadowMode:!1})},"17dd":function(t,a,n){t.exports=n.p+"static/img/y-daily-wap.ce5f897d.png"},2784:function(t,a,n){"use strict";n.r(a);var i=n("b302"),e=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(o);a["default"]=e.a},"5c5f":function(t,a,n){t.exports=n.p+"static/img/y-daily-pc.615cf247.png"},6685:function(t,a,n){"use strict";n.r(a);var i=n("0339"),e=n("2784");for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(o);n("92ec");var d=n("f0c5"),s=Object(d["a"])(e["default"],i["b"],i["c"],!1,null,"7414b718",null,!1,i["a"],void 0);a["default"]=s.exports},"92ec":function(t,a,n){"use strict";var i=n("0604"),e=n.n(i);e.a},b302:function(t,a,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("d3b7"),n("3ca3"),n("ddb0"),n("9861");var e=i(n("5530")),o=n("26cb"),d={data:function(){return{btnData:[{name:"体育",val:1},{name:"电竞",val:2},{name:"棋牌",val:4}],btns:0,money:"",upMoney:"",totalImg:"",vals:"1",vipData:""}},computed:(0,e.default)({},(0,o.mapState)({apis:function(t){return t.apis}})),watch:{apis:function(){this.dataFx()}},onLoad:function(t){console.log(t),t.id&&(this.btns=t.id),this.dataFx()},methods:{dataFx:function(){this.$store.state.apis&&this.betMoneyFx()},betMoneyFx:function(){var t=this,a={gameType:this.vals},n=new URLSearchParams(a);console.log(n),uni.showLoading({title:"加载中..",mask:!0}),t.$axios(t.$money,n).then((function(a){uni.hideLoading(),0==a.code&&(t.money=a.data.totalValid)}))},btnFx:function(t,a){this.btns=a,this.vals=t.val,this.betMoneyFx(),this.$bet(a)},submitFx:function(t){var a={activityId:t.actiivityId,activityAwardId:t.actiivityAwardId,applyAmount:t.bonus};uni.showLoading({title:"加载中..",mask:!0});var n=new URLSearchParams(a);this.$axios(this.$activity,n).then((function(t){uni.showToast({title:t.msg,icon:"none"}),uni.hideLoading(),console.log(t)})),setTimeout((function(t){uni.hideLoading()}),3e3)}}};a.default=d},e6bb:function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.headings[data-v-7414b718]{width:100%;height:970px;background:#ae597e}.headings .left[data-v-7414b718]{display:block}.headings .left .head2[data-v-7414b718]{width:400px;margin-top:8px;font-family:Microsoft YaHei UI;font-size:40px;font-weight:700;line-height:56.5px;letter-spacing:-.5px;text-align:left;color:#fff}.headings .bet-banner[data-v-7414b718]{width:774px;max-width:1080px;margin:0 0 0 186px;height:970px}.lists-body-y[data-v-7414b718]{width:%?600?%;background:#d9d9d9;font-size:%?47?%;display:flex;justify-content:center;align-items:center;padding:%?40?% %?80?% %?60?% %?80?%;margin:0 15px 23px 15px;flex-direction:column;text-align:center}.ac-textb[data-v-7414b718]{color:#008d91}.ac-moneys[data-v-7414b718]{font-weight:700;color:#fff;padding:%?8?% %?30?%;background:linear-gradient(37.22deg,#003b3d 11.39%,#008d91 108.35%);border-radius:%?20?%;box-shadow:0 0 %?20?% 0 #333;margin:%?-40?% 0 %?20?% 0}.ac-texta[data-v-7414b718]{color:#003b3d}.ac-btn[data-v-7414b718]{color:#fff;background:#008d91;font-size:%?47?%;height:%?90?%;width:%?420?%}.a-btn[data-v-7414b718]{margin:150px auto 20px auto;font-weight:700;font-size:%?64?%;position:relative;background:#003b3d;color:transparent;-webkit-background-clip:text}.a-btn.s[data-v-7414b718]{margin:54px auto 38px auto}.a-content-y[data-v-7414b718]{padding:40px;font-size:14px;max-width:1300px;color:#003b3d;line-height:%?38?%;background:#fff;margin:0 auto;box-shadow:4px 15px 60px 0 rgba(0,0,0,.2)}.a-content-y i[data-v-7414b718]{display:block;height:10px}uni-page-body[data-v-7414b718]{background:#fff;padding-bottom:50px;font-family:Microsoft YaHei}@media screen and (max-width:768px){.a-btn[data-v-7414b718]{margin:150px auto 20px auto;font-family:Microsoft YaHei UI;font-size:%?32?%;font-weight:700;line-height:15.24px;text-align:center;position:relative;background:#003b3d;color:transparent;-webkit-background-clip:text}.a-btn.s[data-v-7414b718]{margin:54px auto 38px auto}.a-content-y[data-v-7414b718]{padding:0 40px 40px 40px;font-size:14px;max-width:1300px;color:#003b3d;line-height:%?38?%;background:none;margin:0 auto;box-shadow:0 0 0 0 rgba(0,0,0,.2)}.titles[data-v-7414b718]{margin:%?48?% 0}.titles .bet-title[data-v-7414b718]{text-align:center;color:#008d91;font-size:%?24?%}uni-page-body[data-v-7414b718]{background:#fff;height:100vh;overflow:auto}}.fade-enter-active[data-v-7414b718]{transition:all .5s}.fade-enter[data-v-7414b718]{opacity:.3}.fade-leave-active[data-v-7414b718]{transition:all .2s}.fade-leave-to[data-v-7414b718]{opacity:.7}',""]),t.exports=a}}]);