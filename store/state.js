import cn from "../locales/cn.json";
import en from "../locales/en.json";
import fn from "../locales/fn.json";
import ct from "../locales/ct.json"; 
import { v4 as uuidv4 } from 'uuid'; // Import uuid package
const lang = uni.getStorageSync("lang");
// const lang = uni.getStorageSync("jsons").language;
// console.log(uni.getStorageSync("jsons").language,"josn");

let state = {
  // ens: uni.getStorageSync("lang") === "en" ? en : (uni.getStorageSync("lang") === "fn" ? fn : cn),
  ens: lang === "en" ? en : lang === "fn" ? fn : lang === "cn" ? cn : ct,

  lang2: uni.getStorageSync("lang"),

  sum: 1, //当前的和
  head: {
    "content-type": "application/x-www-form-urlencoded", //H5 add
    "accept-language": "zh-CN,zh;q=0.9,en-US;",
    "auth-token": uni.getStorageSync("memberInfo").authToken,
  },
 
  token: uni.getStorageSync("tokens") ? uni.getStorageSync("tokens").token : "", //token
  //apiUrl:uni.getStorageSync('apiUrl'),
  apis: uni.getStorageSync("apis"),
  ipData: "",
  jsons: uni.getStorageSync("jsons") ? uni.getStorageSync("jsons") : "",
  jsonsN: 0,
  // url: "http://json.lok88.com/xlStaticResources.json",
  // url: 'http://json.yl0508.com/xlStaticResources.json',
  matches:'',
  // temporary-api
  jsonUrl: uni.getStorageSync("jsonUrl"),
  siteUrl: uni.getStorageSync("siteUrl"),
  iconUrl: uni.getStorageSync("iconUrl"),
  // for ping time 拼接时间
  allTime: 0,
  // defaultAPI: "lok88",//formal
  // protocol:"https:",
  defaultAPI: "yl0508", //test
  protocol: "http:",
  rule:'',
  iconPing: [],
  sitePing: [],
  jsonUrlPing: [],
  pcPing: [],
  h5Ping: [],
  apiPing: [],
  betVipData: {},
  betTotal: "",
  betTotalImg: "",
  // url1: "www.lok88.com",
  url2: "",
  url3: "",
  isshow:1,
  codes: uni.getStorageSync("codes"), //code-error-save
  ver: uni.getStorageSync("ver")
  ? uni.getStorageSync("ver")
  : {
      appIndex: "",
      codes: "", //responseCode
      allStatus: "",
      type: "", // news-type
    },
};

//输出暴露store
export default state;
