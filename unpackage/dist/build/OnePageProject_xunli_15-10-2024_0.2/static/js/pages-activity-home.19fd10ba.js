(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-home"],{"0684":function(t,a,i){t.exports=i.p+"static/img/4.f055ee8b.jpg"},"0cf0":function(t,a,i){t.exports=i.p+"static/img/schedule-icon.9e454279.png"},2345:function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pc[data-v-16242d08]{display:block}.wap[data-v-16242d08]{display:none}uni-page-body[data-v-16242d08]{background:#ebeefd;padding-bottom:50px;font-family:Microsoft YaHei}.banner[data-v-16242d08]{width:100%;overflow:hidden}.banner img[data-v-16242d08]{width:1920px;height:600px}.img-wap[data-v-16242d08]{display:none}.lists-main[data-v-16242d08]{width:1250px;flex-wrap:wrap;margin:0 auto}.list[data-v-16242d08]{background:#fff;box-shadow:2px 4px 8px #c7d5ff;border-radius:15px;padding:30px;text-align:center;margin:15px}.list .rmb[data-v-16242d08]{color:#f86c3b;font-size:18px;text-align:center;margin-bottom:13px}.list .btn[data-v-16242d08]{height:40px;width:218px;border-radius:50px;background:linear-gradient(#ffb891,#f86c3b);color:#fff;cursor:pointer}.list h3[data-v-16242d08]{font-size:24px;color:#404261;margin:14px 0}.list .texts[data-v-16242d08]{font-size:14px;color:#6c7ba8}.illustrate[data-v-16242d08]{box-shadow:2px 4px 8px #c7d5ff;border-radius:15px;background:#fff;padding:30px;width:1200px;margin:%?60?% auto 0 auto}.illustrate p[data-v-16242d08]{font-size:18px;color:#404261;line-height:24px;padding:20px 0;-webkit-user-select:text;user-select:text}.illustrate i[data-v-16242d08]{height:25px;width:100%;display:block}@media screen and (max-width:768px){.pc[data-v-16242d08]{display:none}.wap[data-v-16242d08]{display:block}.img-pc[data-v-16242d08]{display:none}.img-wap[data-v-16242d08]{display:block;width:100%}.lists-main[data-v-16242d08]{width:100%}.list[data-v-16242d08]{margin:%?12?%;padding:%?28?%;width:44.5%}.list img[data-v-16242d08]{width:100%}.list h3[data-v-16242d08]{font-size:%?28?%;margin:%?2?% 0}.list .texts[data-v-16242d08]{font-size:%?24?%}.list .rmb[data-v-16242d08]{font-size:%?26?%}.list .btn[data-v-16242d08]{width:100%;font-size:%?24?%;height:%?52?%}.illustrate[data-v-16242d08]{width:91%;overflow:hidden;padding:%?56?% %?30?% %?40?% %?30?%}.illustrate .img[data-v-16242d08]{width:750px}.illustrate p[data-v-16242d08]{color:#404261;font-size:%?24?%}.illustrate p i[data-v-16242d08]{height:%?40?%}}uni-page-body[data-v-16242d08]{height:100vh;overflow:auto}',""]),t.exports=a},2866:function(t,a,i){t.exports=i.p+"static/img/5.14443170.jpg"},"338d":function(t,a,i){"use strict";i("7a82");var s=i("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("d3b7"),i("3ca3"),i("ddb0"),i("9861");var n=s(i("c7eb")),e=s(i("1da1")),c={props:["vals"],data:function(){return{leftVal:0,result:"",results:"",money:{totalValidAmount:""},total:5e5,bank:"",apiBank:!1,waits:!1}},onLoad:function(t){console.log(t,"load")},methods:{bankFx:function(){var t=this;return(0,e.default)((0,n.default)().mark((function a(){return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("bank银行卡信息"),a.next=3,t.$ajax(t.$bank).then((function(a){0==a.code?(t.apiBank=!0,t.bank=a.data.allBankCard):uni.showToast({title:a.msg,icon:"none"})}));case 3:case"end":return a.stop()}}),a)})))()},btnFx:function(t,a){var i=this;return(0,e.default)((0,n.default)().mark((function s(){var e,c,d;return(0,n.default)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(i.apiBank){s.next=5;break}return s.next=3,i.$ajax(i.$bank).then((function(t){0==t.code?(i.apiBank=!0,i.bank=t.data.allBankCard):uni.showToast({title:t.msg,icon:"none"})}));case 3:if(i.apiBank){s.next=5;break}return s.abrupt("return");case 5:if(""!=i.bank){s.next=8;break}return uni.showToast({title:"请先绑定银行卡之后,再兑换",icon:"none"}),s.abrupt("return");case 8:e=i,c={activityId:4,activityAwardId:a,applyAmount:t},uni.showLoading({title:"加载中..",mask:!0}),d=new URLSearchParams(c),e.$axios(e.$activity,d).then((function(t){uni.showToast({title:t.msg,icon:"none"}),uni.hideLoading()})),setTimeout((function(t){uni.hideLoading()}),3e3);case 14:case"end":return s.stop()}}),s)})))()}}};a.default=c},"3f96":function(t,a,i){t.exports=i.p+"static/img/1.4639744f.jpg"},4500:function(t,a,i){t.exports=i.p+"static/img/icont.6bc3e2dc.png"},"4adc":function(t,a,i){t.exports=i.p+"static/img/home.aedd8638.jpg"},5638:function(t,a,i){"use strict";i.r(a);var s=i("af64"),n=i("5ae8");for(var e in n)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(e);i("eaf3");var c=i("f0c5"),d=Object(c["a"])(n["default"],s["b"],s["c"],!1,null,"16242d08",null,!1,s["a"],void 0);a["default"]=d.exports},"56d0":function(t,a,i){t.exports=i.p+"static/img/home1.42f53267.jpg"},"5ae8":function(t,a,i){"use strict";i.r(a);var s=i("338d"),n=i.n(s);for(var e in s)["default"].indexOf(e)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(e);a["default"]=n.a},"5cf8":function(t,a,i){t.exports=i.p+"static/img/3.2734a8c8.jpg"},"7a0d":function(t,a,i){t.exports=i.p+"static/img/7.c7f37601.png"},"8c9d":function(t,a,i){var s=i("2345");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("7e9a862e",s,!0,{sourceMap:!1,shadowMode:!1})},"948c":function(t,a,i){t.exports=i.p+"static/img/6.bba62d06.jpg"},af64:function(t,a,i){"use strict";i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){}));var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"banner f-c"},[s("img",{staticClass:"img-pc",attrs:{draggable:"false",src:i("4adc")}}),s("v-uni-image",{staticClass:"img-wap",attrs:{mode:"widthFix",src:i("56d0")}})],1),s("div",{staticClass:"schedule pc"},[s("v-uni-view",{staticClass:"schedule-re"},[s("img",{staticClass:"qiu",style:"left:"+t.leftVal+"%",attrs:{src:i("0cf0")}}),s("v-uni-view",{staticClass:"content-max-re"},[s("div",{staticClass:"content-max",style:"width:"+(t.leftVal+1)+"%"})])],1),s("img",{staticClass:"qiu-rmb",attrs:{src:i("7a0d")}}),t._m(0)],1),s("div",{staticClass:"schedule wap"},[s("v-uni-view",{staticClass:"schedule-re"},[s("v-uni-image",{staticClass:"qiu",style:"left:"+t.leftVal+"%",attrs:{mode:"widthFix",src:i("0cf0")}}),s("v-uni-view",{staticClass:"content-max-re"},[s("div",{staticClass:"content-max",style:"width:"+(t.leftVal+1)+"%"})])],1),s("v-uni-image",{staticClass:"qiu-rmb",attrs:{mode:"widthFix",src:i("7a0d")}}),t._m(1)],1),s("div",{staticClass:"lists-main f-c "},[s("div",{staticClass:"list"},[s("img",{attrs:{src:i("f7b5")}}),s("h3",[t._v("首存豪礼88元")]),s("span",{staticClass:"texts"},[t._v("需首存金额")]),s("div",{staticClass:"rmb"},[t._v("¥1,000")]),s("div",{staticClass:"btn f-c",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnFx(88,401)}}},[t._v("立即兑换")])]),s("div",{staticClass:"list"},[s("img",{attrs:{src:i("3f96")}}),s("h3",[t._v("首存豪礼138元")]),s("span",{staticClass:"texts"},[t._v("需首存金额")]),s("div",{staticClass:"rmb"},[t._v("¥5,000")]),s("div",{staticClass:"btn f-c",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnFx(138,402)}}},[t._v("立即兑换")])]),s("div",{staticClass:"list"},[s("img",{attrs:{src:i("d847")}}),s("h3",[t._v("首存豪礼388元")]),s("span",{staticClass:"texts"},[t._v("需首存金额")]),s("div",{staticClass:"rmb"},[t._v("¥10,000")]),s("div",{staticClass:"btn f-c",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnFx(388,403)}}},[t._v("立即兑换")])]),s("div",{staticClass:"list"},[s("img",{attrs:{src:i("5cf8")}}),s("h3",[t._v("首存豪礼1888元")]),s("span",{staticClass:"texts"},[t._v("需首存金额")]),s("div",{staticClass:"rmb"},[t._v("¥50,000")]),s("div",{staticClass:"btn f-c",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnFx(1888,404)}}},[t._v("立即兑换")])]),s("div",{staticClass:"list"},[s("img",{attrs:{src:i("0684")}}),s("h3",[t._v("首存豪礼3888元")]),s("span",{staticClass:"texts"},[t._v("需首存金额")]),s("div",{staticClass:"rmb"},[t._v("¥80,000")]),s("div",{staticClass:"btn f-c",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnFx(3888,405)}}},[t._v("立即兑换")])]),s("div",{staticClass:"list"},[s("img",{attrs:{src:i("2866")}}),s("h3",[t._v("首存豪礼5888元")]),s("span",{staticClass:"texts"},[t._v("需首存金额")]),s("div",{staticClass:"rmb"},[t._v("¥120,000")]),s("div",{staticClass:"btn f-c",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnFx(5888,406)}}},[t._v("立即兑换")])]),s("div",{staticClass:"list"},[s("img",{attrs:{src:i("948c")}}),s("h3",[t._v("首存豪礼6888元")]),s("span",{staticClass:"texts"},[t._v("需首存金额")]),s("div",{staticClass:"rmb"},[t._v("¥200,000")]),s("div",{staticClass:"btn f-c",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnFx(6888,407)}}},[t._v("立即兑换")])]),s("div",{staticClass:"list"},[s("img",{attrs:{src:i("7a0d")}}),s("h3",[t._v("首存豪礼18888元")]),s("span",{staticClass:"texts"},[t._v("需首存金额")]),s("div",{staticClass:"rmb"},[t._v("¥500,000")]),s("div",{staticClass:"btn f-c",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnFx(18888,408)}}},[t._v("立即兑换")])])]),t._m(2)])},n=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"f-s"},[a("div",{staticClass:"text"},[a("div",{staticClass:"f-c"},[this._v("首存以下活动列表金额 ----- 获取终极豪礼")])]),a("div",{staticClass:"text"},[a("div",{staticClass:"num"},[this._v("500,000元")]),a("div",{staticClass:"f-c"},[this._v("终极豪礼")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"f-s"},[a("div",{staticClass:"left"},[a("div",[a("span",{staticClass:"titles"},[this._v("首存以下活动列表金额 - 获取终极豪礼")])])]),a("div",{staticClass:"right"},[a("div",{staticStyle:{"text-align":"right"}},[this._v("终极豪礼")]),a("div",{staticClass:"num"},[this._v("500,000元")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"illustrate"},[a("div",{staticClass:"f-c"},[a("img",{staticClass:"img",attrs:{src:i("4500")}})]),a("p",[this._v("1.  本活动汛利全员皆可参与；"),a("i"),this._v("2.  首存豪礼：活动仅支持首次存款成功的账号， 24小时内累计的首存总金额满足活动要求，请于30天内进行兑换即可获得对应礼金。\n            （例如：会员首存金额达到50W即可申请18,888、6,888、5,888、3,888、1,888、388、138、88元礼金，八选一进行申请）;"),a("i"),this._v("3.  一个账号只能领取一次首存豪礼，礼金有效兑换期为30天，礼金有效期内没有领取视为主动放弃礼金;"),a("i"),this._v("4.  礼金领取方式：会员在满足对应的条件后即可在活动页面点击“立即兑换”自助领取礼金，相关工作人员会按照申请顺序进行审核，礼金的\n            审核状态可在“兑奖记录”中进行查看，审核通过后汛利娱乐会依次发放礼金，礼金将在5个工作日内派发至用户的中心钱包；"),a("i"),this._v("5.  提款要求：首存豪礼需6倍流水提款；"),a("i"),this._v("6.  每位有效玩家、每1手机号码、电子邮箱、相同银行卡、每1个IP地址、每1台电脑使用者在活动期间每场赛事仅可享受1次优惠，\n            如会员使用一切不正常投注、套利等违规行为，我们将保留无限期审核扣回礼金及所产生的利润权利；"),a("i"),this._v("7.  此为避免文字理解差异，汛利娱乐保留本活动最终解释权。")])])}]},d847:function(t,a,i){t.exports=i.p+"static/img/2.d737a4c0.jpg"},eaf3:function(t,a,i){"use strict";var s=i("8c9d"),n=i.n(s);n.a},f7b5:function(t,a,i){t.exports=i.p+"static/img/0.64bdd497.jpg"}}]);