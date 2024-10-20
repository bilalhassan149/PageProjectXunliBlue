<template>
  <div>
    <!-- 获取代理号页面 -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    console.log("load");
    // let  urls = 'https://AA1235.baidu.com' ;
    let urls = location.href;
    // let urls = `https://bb55as13.lok88.com/pages/register`;

    let match = urls.match(/https:\/\/([a-zA-Z0-9]{6,8})\./);

    if (match) {
      let val = match[1];
      uni.setStorageSync("agent", val);
      console.log(`Saved value: ${val}`);

      if (urls.includes("lok")) {
        const match = urls.match(/lok(\d+)/);
        let Number = "";
        if (match) {
          Number = match[1];
        }
        window.location.href =
          `https://site.lok${Number}.com/pages/reg?number=` + val;
      } else {
        window.location.href = `https://site.lok88.com/pages/reg?number=` + val;
      }
    } else {
      console.log("No match found in the URL");
    }

    // let of = urls.indexOf(".");
    // if (of != -1) {

    //   //下标6
    //   let val = urls.substring(of - 6, of);
    //   console.log(val, "查看前缀");
    //   console.log(urls.substring(of, urls.length), "查看后缀");
    //   uni.setStorageSync("agent", urls.substring(of - 6, of));
    //   console.log(val, "val", urls.substring(of, urls.length), "ulrs");

    //   if (urls.includes("lok")) {
    //     const match = urls.match(/lok(\d+)/);
    //     let Number = "";
    //     if (match) {
    //       Number = match[1];
    //     }
    //     window.location.href =
    //       `https://site.lok${Number}.com/pages/reg?number=` + val;
    //   } else {
    //     window.location.href = `https://site.lok88.com/pages/reg?number=` + val;
    //   }
    // }
  },
  methods: {},
};
</script>

<style></style>
