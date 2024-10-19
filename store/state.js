let state = {
  head: {
    "content-type": "application/x-www-form-urlencoded", //H5 add
    "accept-language": "zh-CN,zh;q=0.9,en-US;",
    "auth-token": uni.getStorageSync("memberInfo").authToken,

  },
  sum: 1, //当前的和
  token: uni.getStorageSync("tokens") ? uni.getStorageSync("tokens").token : "", //token
  apiUrl:uni.getStorageSync('apiUrl'),
  apis: uni.getStorageSync("apis"),
  ipData: "", 
  jsons: uni.getStorageSync("jsons") ? uni.getStorageSync("jsons") : "",
  jsonsN: 0,
  url: "https://info.xunli05.com/xlStaticResources.json",
  // temporary-api
  jsonUrl: uni.getStorageSync("jsonUrl"),
  siteUrl: localStorage.getItem("siteUrl"),
  iconUrl: localStorage.getItem("iconUrl"),
  VipData:uni.getStorageSync('VipData'),
  // for ping time 拼接时间
  allTime: 0,
  iconPing: [],
  sitePing: [],
  jsonUrlPing: [],
  pcPing: [],
  h5Ping: [],
  apiPing: [],
  betVipData: {},
  betTotal: "",
  betTotalImg: "",
  defaultAPI: "xunli08", //formal
  protocol: "https:", 
//   defaultAPI: "xl0735", //test
//   protocol: "http:",
};

//输出暴露store
export default state;
