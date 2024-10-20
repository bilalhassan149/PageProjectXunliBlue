<template>
  <view>
    <loading :isshow="isshow"></loading>

    <view class="bgs">
      <view @click="$about()" class="support_1">
        <image src="@/static/reg/support.png" mode="widthFix"></image>
      </view>
      <LangNav
        class="change_password"
        style="
          z-index: 2000;
          padding: 0rpx;
          margin-right: 48rpx;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: end;
          align-items: center;
          top: 40rpx;
        "
      ></LangNav>

      <view class="content">
        <view class="f-c loogo">
          <img class="logo" src="@/static/reg/logo.png" />
        </view>
        <view v-show="isLargeScreen" class="sign_up_m f-c">{{
          $t("rules.signUp_title")
        }}</view>
        <view v-show="isLargeScreen" class="sign_up_m_msg f-c">{{
          $t("rules.signup_subtitle")
        }}</view>

        <view class="nav_bg f-c">
          <view
            class="nav_btn"
            @click="RegFx(0)"
            :class="regtype == 0 ? 'active' : ''"
            >{{ $t("sign_up.signUp_phoneNumber") }}</view
          >
          <view
            class="nav_btn"
            @click="RegFx(1)"
            :class="regtype == 1 ? 'active' : ''"
            >{{ $t("sign_up.signUp_email") }}</view
          >
        </view>
        <view class="sign_up f-c">{{ $t("rules.signUp_title") }}</view>
        <!-- Register By Phone -->
        <view class="Phone_number" v-if="regtype == 0">
          <view class="re">
            <input
              class="inputs"
              :placeholder="$t('rules.userNamePlaceholder')"
              type="text"
              :value="formData.username"
              @input="getformdata"
              data-type="username"
              maxlength="11"
              placeholder-class="colocP"
            />
          </view>
          <!-- password  -->
          <view class="re">
            <input
              :type="isshowpass1 == 0 ? 'password' : 'text'"
              class="inputs"
              :placeholder="$t('rules.passwordPlaceholder')"
              :value="formData.password"
              @input="getformdata"
              data-type="password"
              placeholder-class="colocP"
            />
            <view class="show" @click="showpass(1)">
              <img
                :src="
                  isshowpass1 == 0
                    ? '../static/reg/show2.png'
                    : '../static/reg/show1.png'
                "
                mode="widthFix"
              />
            </view>
          </view>
          <view class="re">
            <input
              :type="isshowpass1 == 0 ? 'password' : 'text'"
              class="inputs"
              :placeholder="$t('rules.passwordPlaceholder')"
              :value="formData.passwords"
              @input="getformdata"
              data-type="passwords"
              placeholder-class="colocP"
            />
            <view class="show" @click="showpass(1)">
              <img
                :src="
                  isshowpass1 == 0
                    ? '../static/reg/show2.png'
                    : '../static/reg/show1.png'
                "
                mode="widthFix"
              />
            </view>
          </view>

          <!-- pass end -->
          <view class="re">
            <input
              class="inputs"
              :placeholder="$t('rules.phoneNumPlaceholder')"
              type="text"
              :value="formData.phoneNo"
              @input="getformdata"
              maxlength="11"
              data-type="phoneNo"
              placeholder-class="colocP"
            />
          </view>

          <view class="re">
            <input
              class="inputs"
              maxlength="8"
              :value="formData.smsCode"
              @input="getformdata"
              data-type="smsCode"
              :placeholder="$t('rules.verficationPlaceholder')"
              placeholder-class="colocP"
              type="text"
            />
            <view v-show="btnShow" class="send code-time" @click="getcode">
              {{ $t("rules.send_otp") }}
            </view>
            <view v-show="!btnShow" class="send code-time"> {{ time2 }}s </view>
          </view>
        </view>

        <!-- Register By Email -->
        <view class="Email_Address" v-if="regtype == 1">
          <view class="re">
            <input
              class="inputs"
              :value="emailData.username"
              @input="getformdata_email"
              data-type="username"
              type="text"
              :placeholder="$t('rules.userNamePlaceholder')"
              placeholder-class="colocP"
            />
          </view>
          <!-- password  -->
          <view class="re">
            <input
              :type="isshowpass1 == 0 ? 'password' : 'text'"
              class="inputs"
              :placeholder="$t('rules.passwordPlaceholder')"
              :value="emailData.password"
              @input="getformdata_email"
              data-type="password"
              placeholder-class="colocP"
            />
            <view class="show" @click="showpass(1)">
              <img
                :src="
                  isshowpass1 == 0
                    ? '../static/reg/show2.png'
                    : '../static/reg/show1.png'
                "
                mode="widthFix"
              />
            </view>
          </view>
          <view class="re">
            <input
              :type="isshowpass1 == 0 ? 'password' : 'text'"
              class="inputs"
              :placeholder="$t('rules.passwordPlaceholder')"
              :value="emailData.passwords"
              @input="getformdata_email"
              data-type="passwords"
              placeholder-class="colocP"
            />
            <view class="show" @click="showpass(1)">
              <img
                :src="
                  isshowpass1 == 0
                    ? '../static/reg/show2.png'
                    : '../static/reg/show1.png'
                "
                mode="widthFix"
              />
            </view>
          </view>

          <!-- pass end -->

          <view class="re">
            <input
              class="inputs"
              :placeholder="$t('rules.email_address')"
              :value="emailData.email"
              @input="getformdata_email"
              maxlength="50"
              type="text"
              data-type="email"
              placeholder-class="colocP"
            />
          </view>

           <view class="re">
            <input
              class="inputs"
              maxlength="8"
              :value="emailData.emailCode"
              @input="getformdata_email"
              data-type="emailCode"
              :placeholder="$t('rules.verficationPlaceholder')"
              placeholder-class="colocP"
              type="text"
            />
            <view v-show="btnShow1" class="send code-time" @click="getcode_email">
              {{ $t("rules.send_otp") }}
            </view>
            <view v-show="!btnShow1" class="send code-time"> {{ time_email }}s </view>
          </view>

        </view>
        <!-- submit button  -->
        <view v-if="regtype == 0" class="reg-btn f-c" @click="submitFx_Phone">{{
          $t("rules.submit")
        }}</view>
        <view v-if="regtype == 1" class="reg-btn f-c" @click="submitFx_Email">{{
          $t("rules.submit")
        }}</view>
        <view class="about f-c" @click="$about()">
          <img src="@/static/about.png" />
          {{ $t("rules.go") }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { localizationMixin } from "../assets/localization";
import state from "../store/state";

export default {
  mixins: [localizationMixin],
  data() {
    return {
      formData: {
        username: "",
        password: "",
        passwords: "",
        phoneNo: "",
        smsCode: "",
        inviteCode: "",
        deviceType: "",
        deviceUserAgent: "",
        deviceCode: "",
        deviceVersion: "",
      },
      
      emailData: {
        username: "",
        password: "",
        passwords: "",
        email: "",
        emailCode: "",
        inviteCode: "",
        deviceType: "",
        deviceUserAgent: "",
        deviceCode: "",
        deviceVersion: "",
      },
      isshowpass1: 0,
      yzmtext: state.ens.settings.sent_otp,




      dajishi: "dajishi",
      yzmbtntype: 0,
      userName: "",
      password: "",
      timer: null, 
      isLargeScreen: window.innerWidth > 768,
      navi: true,
      regtype: 0,
      show: false,
      btnShow: true,
      btnShow1: true,
      time_email:180,
      time2: 60,
      loading: false,
      urls: this.$reg,
      isshow: 0,
    };
  },
  onLoad(data) {
    this.getphoneMes();
    this.getphoneMes_email();

    this.isshow = 1;
    setTimeout((res) => {
      this.isshow = 0;
    }, 2000);

    if (data.number) {
      uni.showToast({
        title: this.$en(state.ens.alerts.loading),
        icon: "none",
      });

      uni.setStorageSync("id", data.number);
      let url = window.location.href;
      let id = window.location.href.indexOf("?number");
      url = url.substring(0, id);
      console.log(url);
      window.location.href = url;
    } else {
      this.formData.inviteCode = uni.getStorageSync("id");
      this.emailData.inviteCode = uni.getStorageSync("id");
    }
    console.log("id", this.formData.inviteCode, this.emailData.inviteCode);
  },
  watch: {
    "emailData.email": function (newVal, oldVal) {
      if (newVal !== oldVal) {
        clearInterval(this.timer);
        this.time_email = 180;
        this.btnShow1 = true;
      }
    },
    "emailData.username": function (newVal, oldVal) {
      if (newVal !== oldVal) {
        clearInterval(this.timer);
        this.time_email = 180;
        this.btnShow1 = true;
      }
    },
    "emailData.password": function (newVal, oldVal) {
      if (newVal !== oldVal) {
        clearInterval(this.timer);
        this.time_email = 180;
        this.btnShow1 = true;
      }
    },
    "emailData.passwords": function (newVal, oldVal) {
      if (newVal !== oldVal) {
        clearInterval(this.timer);
        this.time_email = 180;
        this.btnShow1 = true;
      }
    },
    "formData.phoneNo": function (newVal, oldVal) {
      if (newVal !== oldVal) {
        clearInterval(this.timer);
        this.time2 = 60;
        this.btnShow = true;
      }
    },
    "formData.username": function (newVal, oldVal) {
      if (newVal !== oldVal) {
        clearInterval(this.timer);
        this.time2 = 60;
        this.btnShow = true;
      }
    },
    "formData.password": function (newVal, oldVal) {
      if (newVal !== oldVal) {
        clearInterval(this.timer);
        this.time2 = 60;
        this.btnShow = true;
      }
    },
    "formData.passwords": function (newVal, oldVal) {
      if (newVal !== oldVal) {
        clearInterval(this.timer);
        this.time2 = 60;
        this.btnShow = true;
      }
    },
  },
  methods: {
    getformdata(e) {
      let _this = this;
      _this.formData[e.currentTarget.dataset.type] = e.detail.value;
    },
    getformdata_email(e) {
      let _this = this;
      _this.emailData[e.currentTarget.dataset.type] = e.detail.value;
    },
    getphoneMes() {
      let _this = this;
      uni.getSystemInfo({
        success(res) {
          _this.formData.deviceType = 1;
          _this.formData.deviceUserAgent = res.ua;
          _this.formData.deviceCode = res.deviceId;
          _this.formData.deviceVersion = res.system;
          console.log("获取手机信息---->", res);
        },
      });
    },
    getphoneMes_email() {
      let _this = this;
      uni.getSystemInfo({
        success(res) {
          _this.emailData.deviceType = 1;
          _this.emailData.deviceUserAgent = res.ua;
          _this.emailData.deviceCode = res.deviceId;
          _this.emailData.deviceVersion = res.system;
          console.log("获取手机信息---->", res);
        },
      });
    },
    showpass(e) {
      if (e == 1) {
        if (this["isshowpass" + e] == 0) {
          this["isshowpass" + e] = 1;
        } else {
          this["isshowpass" + e] = 0;
        }
      }
      if (e == 2) {
        if (this["isshowpass" + e] == 0) {
          this["isshowpass" + e] = 1;
        } else {
          this["isshowpass" + e] = 0;
        }
      }
    },

    RegFx(e) {
      this.regtype = e;
    },

    showFx() {
      this.show = !this.show;
    },

    getcode() {
      let _this = this;

      if (!state.rule.username.test(_this.formData.username)) {
        uni.showToast({
          title: _this.$t("rules.username"),
          icon: "none",
        });
        return false;
      }

      if (!state.rule.password.test(_this.formData.password)) {
        uni.showToast({
          title: _this.$t("rules.password"),
          icon: "none",
        });
        return false;
      }

      if (_this.formData.password != _this.formData.passwords) {
        uni.showToast({
          title: _this.$t("rules.new_password"),
          icon: "none",
        });
        return false;
      }

      if (this.formData.phoneNo == "") {
        uni.showToast({
          title: _this.$t("rules.phoneNo"),
          icon: "none",
        });
      } else {
        if (this.yzmbtntype == 1) {
          uni.showToast({
            title: state.ens.settings.sent_otp,
            icon: "none",
          });
        } else {
          // let url = _this.$globalApi.sendRegisterSms;
          let data = {
            phoneNo: _this.formData.phoneNo,
          };
          let params = new URLSearchParams(data);
          console.log(data, params, _this.formData.phoneNo, "phone");
          _this.$store.state.apis = uni.getStorageSync("apis");
          _this.$axios(_this.$regCode, params).then((res) => {
            console.log(res);
            if (res.code === 0) {
              this.btnShow = false;
              this.time2 = 60; // Reset timer to 60
              if (this.timer) {
                clearInterval(this.timer);
              }
              this.timer = setInterval(() => {
                this.time2--;
                if (this.time2 <= 0) {
                  clearInterval(this.timer);
                  this.time2 = 60;
                  this.btnShow = true;
                }
              }, 1000);

              uni.showToast({
                title: state.codes[res.code],
                icon: "none",
              });
            } else {
              uni.showToast({
                title: state.codes[res.code],
                icon: "none",
              });
              this.btnShow = true;
            }
          });
        }
      }
    },
    getcode_email() {
      let _this = this;

      if (!state.rule.username.test(_this.emailData.username)) {
        uni.showToast({
          title: _this.$t("rules.username"),
          icon: "none",
        });
        return false;
      }

      if (!state.rule.password.test(_this.emailData.password)) {
        uni.showToast({
          title: _this.$t("rules.password"),
          icon: "none",
        });
        return false;
      }

      if (_this.emailData.password != _this.emailData.passwords) {
        uni.showToast({
          title: _this.$t("rules.new_password"),
          icon: "none",
        });
        return false;
      }

      if (!state.rule.email.test(_this.emailData.email)) {
        uni.showToast({
          title: _this.$t("rules.email"),
          icon: "none",
        });
        return false;
      } else {
        if (this.yzmbtntype == 1) {
          uni.showToast({
            title: state.ens.settings.sent_otp,
            icon: "none",
          });
        } else {
          let data = {
            email:_this.emailData.email,
          };
          let params = new URLSearchParams(data);
          console.log(data, params, _this.emailData.email, "email");
          _this.$store.state.apis = uni.getStorageSync("apis");
          _this.$axios(_this.$emailCode, params).then((res) => {
            console.log(res);
            if (res.code === 0) {
              this.btnShow1 = false;
              this.time_email = 180; // Reset timer to 60
              if (this.timer) {
                clearInterval(this.timer);
              }
              this.timer = setInterval(() => {
                this.time_email--;
                // console.log(this.time_email); // Debug: log the countdown

                if (this.time_email <= 0) {
                  clearInterval(this.timer);
                  this.time_email = 180;
                  this.btnShow1 = true;
                }
              }, 1000);

              uni.showToast({
                title: state.codes[res.code],
                icon: "none",
              });
            } else {
              uni.showToast({
                title: state.codes[res.code],
                icon: "none",
              });
              this.btnShow1 = true;
            }
          });
        }
      }
    },
    submitFx_Phone() {
      if (!this.formData.phoneNo) {
        uni.showToast({
          title: this.$t("rules.phoneNo"),
          icon: "none",
        });
        return false;
      }
      if (!this.formData.smsCode) {
        uni.showToast({
          title: this.$t("rules.code"),
          icon: "none",
        });
        return false;
      }
      this.psotallfrom();
    },
    submitFx_Email() {
      if (!state.rule.email.test(this.emailData.email)) {
        uni.showToast({
          title: this.$t("rules.email"),
          icon: "none",
        });
        return false;
      }
      if (!this.emailData.emailCode) {
        uni.showToast({
          title: 'this.$t("rules.code")',
          icon: "none",
        });
        return false;
      }
      this.psotallfrom_email();
    },
    psotallfrom() {
      let _this = this;

      if (_this.formData.passwords == _this.formData.password) {
        let url = _this.$reg;
        // delete _this.formData.passwords;
        let datas = _this.formData;
        let head = {
          "Auth-Token": uni.getDeviceInfo().deviceId,
          "Content-Type": "application/x-www-form-urlencoded",
          "accept-language": "zh-CN,zh;q=0.9,en-US;",
        };
        _this.$ajax(url, datas, head).then((res) => {
          console.log(res);
          if (res.code === 0) {
            this.isshow = 1;
            console.log(res, "res/sucess");
            uni.showToast({
              title: state.codes[res.code],
              icon: "none",
            });

            if (this.$i.platform == "android" || this.$i.platform == "ios") {
              setTimeout(function () {
                window.location.href = state.jsons.h5Url[0];
              }, 2000);
            } else {
              setTimeout(function () {
                window.location.href = state.jsons.pcUrl[0];
              }, 2000);
            }
          } else {
            uni.showToast({
              title: state.codes[res.code],
              icon: "none",
            });
          }
        });
      } else {
        uni.showToast({
          title: state.ens.settings.password_dont_match_error,
          icon: "none",
        });
      }
    },
    psotallfrom_email() {
      let _this = this;

      if (_this.emailData.passwords == _this.emailData.password) {
        let url = _this.$regEmail;
        let datas = _this.emailData;
        let head = {
          "Auth-Token": uni.getDeviceInfo().deviceId,
          "Content-Type": "application/x-www-form-urlencoded",
          "accept-language": "zh-CN,zh;q=0.9,en-US;",
        };
        _this.$ajax(url, datas, head).then((res) => {
          console.log(res);
          if (res.code === 0) {
            this.isshow = 1;
            console.log(res, "res/sucess");
            uni.showToast({
              title: state.codes[res.code],
              icon: "none",
            });

            if (this.$i.platform == "android" || this.$i.platform == "ios") {
              setTimeout(function () {
                window.location.href = state.jsons.h5Url[0];
              }, 2000);
            } else {
              setTimeout(function () {
                window.location.href = state.jsons.pcUrl[0];
              }, 2000);
            }
          } else {
            uni.showToast({
              title: state.codes[res.code],
              icon: "none",
            });
          }
        });
      } else {
        uni.showToast({
          title: state.ens.settings.password_dont_match_error,
          icon: "none",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav_bg {
  height: 128rpx;
  border-radius: 40rpx;
  overflow: hidden;
  margin: 76rpx 0 64rpx 0;
  font-family: Microsoft YaHei UI;
  font-size: 48rpx;
  font-weight: 400;
  line-height: 60.96rpx;
  text-align: center;
  background: #d9d9d9;

  .nav_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 128rpx;
    color: #6b6b6b;
  }

  .nav_btn.active {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 128rpx;
    color: #f7f7f7;
    background: #008d91;
  }
}
.sign_up {
  font-family: Microsoft YaHei UI;
  font-size: 64rpx;
  font-weight: 700;
  line-height: 80.128rpx;
  text-align: left;
  color: #ffffff;
  margin-bottom: 64rpx;
}
.sign_up_m,
.sign_up_m_msg {
  display: none !important;
}

uni-page-body {
  background: url("@/static/reg/regbg.png") no-repeat center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.support_1 {
  display: none;
}
.line-body {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content {
  width: 1016rpx;
}
.f-t {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.f-c {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  /* width:192px; */
  width: 430rpx;
  margin-bottom: 50rpx;
}
.inputs {
  background: #d9d9d9;
  border-radius: 20rpx;
  width: 100%;
  height: 128rpx;
  padding-left: 48rpx;
  color: #6b6b6b;
  font-family: Microsoft YaHei UI;
  font-size: 48rpx;
  font-weight: 400;
  line-height: 60.96rpx;
  text-align: left;
}
.re {
  position: relative;
  margin-bottom: 16rpx;
}

.reg-alert {
  color: #ff5050;
  font-size: 28rpx;
  height: 60rpx;
  display: none;
  margin-bottom: -20rpx;
}

.colocP {
  color: #6b6b6bad;
}
.reg-btn {
  background: #6b6b6b;
  border-radius: 20rpx;
  width: 100%;
  height: 128rpx;
  color: #fff;
  cursor: pointer;
  font-family: Microsoft YaHei UI;
  font-size: 48rpx;
  font-weight: 400;
  line-height: 60.96rpx;
  text-align: center;
}
.about {
  color: #fff;
  margin: 60rpx 0 0 0;
  font-size: 32rpx;
  text-decoration-line: none;
  cursor: pointer;
}
.about img {
  width: 70rpx;
  height: 70rpx;
  margin-right: 28rpx;
}
.show {
  position: absolute;
  right: 30rpx;
  top: 40rpx;
  height: 48rpx;
  cursor: pointer;
  img {
    height: 48rpx;
  }
}

.send {
  color: #fff;
  cursor: pointer;
  position: absolute;
  right: 24rpx;
  top: 14rpx;
  border-radius: 10rpx;
  padding: 16rpx 48rpx;
  background: #6b6b6b;
  font-family: Microsoft YaHei UI;
  font-size: 48rpx;
  font-weight: 400;
  line-height: 60.96rpx;
  text-align: center;
}
.maa {
  position: absolute;
  font-size: 28rpx;
  color: red;
  top: 24rpx;
  right: 30rpx;
}

.code-time {
  color: #003b3d;
  cursor: pointer;
  position: absolute;
  right: 24rpx;
  top: 36rpx;
  border-radius: 40rpx;
  padding: 0rpx 46rpx;
  background: #ababab;
  font-family: Microsoft YaHei UI;
  font-size: 24rpx;
  font-weight: 400;
  line-height: 62rpx;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .nav_bg {
    background: url("@/static/reg/navi.png") no-repeat;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 66rpx;
    border-radius: 108rpx;
    overflow: hidden;
    margin: 76rpx 0 64rpx 0;
    font-family: Microsoft YaHei UI;
    font-size: 24rpx;
    font-weight: 400;
    line-height: 60.96rpx;
    text-align: center;
    padding: 0 6rpx;
    .nav_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 54rpx;
      color: #ffffff;
    }

    .nav_btn.active {
      border-radius: 108rpx !important;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 54rpx;
      color: #003b3d;
      background-color: #ffffff;
    }
  }
  .sign_up {
    font-family: Microsoft YaHei UI;
    font-size: 64rpx;
    font-weight: 700;
    line-height: 80.128rpx;
    text-align: center;
    color: #ffffff;
    margin-bottom: 64rpx;
  }

  uni-page-body {
    background: url("@/static/reg/m_regbg.png") no-repeat center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
  }
  .support_1 {
    display: block;
    width: 88rpx;
    height: 88rpx;
    position: absolute;
    top: 82rpx;
    right: 160rpx;

    image {
      display: block;
      width: 100%;
    }
  }

  .change_password {
    position: absolute;
    right: -12rpx !important;
    top: 114rpx !important;
  }
  .sign_up {
    display: none !important;
  }
  .sign_up_m {
    display: block !important;
    font-family: Microsoft YaHei UI;
    font-size: 52rpx;
    font-weight: 700;
    line-height: 33.02px;
    text-align: center;
    color: #003b3d;
  }
  .sign_up_m_msg {
    display: block !important;
    font-family: Microsoft YaHei UI;
    font-size: 24rpx;
    font-weight: 400;
    line-height: 30.48rpx;
    text-align: center;
    margin-top: 16rpx;
    color: #008d91;
  }
  .line-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content {
    width: 612rpx;
  }
  .f-t {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .f-c {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    display: none;
    width: 430rpx;
    margin-bottom: 50rpx;
  }
  .inputs {
    background: none;
    border-radius: 0;
    width: 100%;
    height: 88rpx;
    padding-left: 32rpx;
    color: #003b3d;
    font-family: Microsoft YaHei UI;
    font-size: 32rpx;
    font-weight: 400;
    line-height: 60rpx;
    text-align: left;
    border-bottom: 4rpx solid #003b3d;
  }
  .re {
    position: relative;
    margin-bottom: 16rpx;
  }

  .reg-alert {
    color: #ff5050;
    font-size: 28rpx;
    height: 60rpx;
    display: none;
    margin-bottom: -20rpx;
  }

  .colocP {
    color: #003b3d;
  }
  .reg-btn {
    background: #003b3d;
    border-radius: 10px;
    width: 183px;
    height: 33px;
    color: #ffffff;
    cursor: pointer;
    font-family: Microsoft YaHei UI;
    font-size: 12px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    margin: 38px auto 0 auto;
  }
  .about {
    display: none !important;
  }

  .show {
    position: absolute;
    right: 30rpx;
    top: 20rpx;
    height: 48rpx;
    cursor: pointer;
  }

  .send {
    color: #fff;
    cursor: pointer;
    position: absolute;
    right: 24rpx;
    top: 14rpx;
    border-radius: 40rpx;
    padding: 0rpx 46rpx;
    background: #ababab;
    font-family: Microsoft YaHei UI;
    font-size: 24rpx;
    font-weight: 400;
    line-height: 60rpx;
    text-align: center;
  }
  .maa {
    position: absolute;
    font-size: 28rpx;
    color: red;
    top: 24rpx;
    right: 30rpx;
  }

  .code-time {
    color: #003b3d;
    cursor: pointer;
    position: absolute;
    right: 24rpx;
    top: 14rpx;
    border-radius: 40rpx;
    padding: 0rpx 46rpx;
    background: #ababab;
    font-family: Microsoft YaHei UI;
    font-size: 24rpx;
    font-weight: 400;
    line-height: 60rpx;
    text-align: center;
  }
}
/*
.pcs1{
  display: flex !important;
  width: 180px !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 25px 0 0 0 !important;
  padding: 5px !important;
  background: #C4C4C4 !important;
  border-radius: 6px !important;
  box-shadow: 3px 4px 9px 0px rgba(49, 128, 76, .5) !important;
}*/
</style>
