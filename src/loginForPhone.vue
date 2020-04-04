<template>
    <div class="login-page">
        <div class="logo-box">
            <span class="logo">LOGO</span>
        </div>
        <group title="手机验证码登录">
            <x-input label-width="4em" title="+86" type="tel" :max="11" v-model="phone" placeholder="请输入您的手机号码"></x-input>
            <x-input label-width="4em" title="验证码" type="tel" :max="6" v-model="verifyCode" placeholder="请输入验证码">
                <x-button v-show="!sendAuthCode" slot="right" mini disabled>重新获取 ({{auth_time}}s)</x-button> 
                <x-button v-show="sendAuthCode" slot="right" type="primary" mini @click.native="getAuthCode">获取验证码</x-button>
            </x-input>    
        </group>
        <div class="submit-box">
            <x-button type="primary" @click.native="handleLogin">登录</x-button>
        </div>
        <div class="agreement-box">
            <check-icon :value.sync="agreement" type="plain">我已仔细阅读并认可<span class="agreement">《用户协议》</span></check-icon>
        </div>
    </div>
</template>
<script>
import store from '@/store/index'
import { XInput, XButton, Toast, Group, CheckIcon } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Toast,
    Group,
    CheckIcon
  },
  data () {
    return {
      phone: '',
      verifyCode: '',
      logining: false,
      agreement: false,
      sendAuthCode: true, /* 布尔值，通过v-show控制显示‘获取按钮'还是‘倒计时' */
      auth_time: 0 /* 倒计时 计数器 */
    }
  },
  methods: {
    showLoading () {
      this.$vux.loading.show({
        text: 'Loading'
      })
    },
    hideLoading () {
      this.$vux.loading.hide()
    },
    getAuthCode () {
      let verification = /^1[345678]\d{9}$/.test(this.phone)
      if (!verification) {
        this.$vux.toast.text('手机格式不正确', 'top')
        return
      }

      const url = '/api/getCode'
      let params = {
        phone: this.phone
      }
      this.showLoading()
      this.$http.post(url, params).then((response) => {          // 这里使用了ES6的语法
        this.hideLoading()
        this.sendAuthCode = false
        // 设置倒计时秒
        this.auth_time = 60
        let authTimer = setInterval(() => {
          this.auth_time--
          if (this.auth_time <= 0) {
            this.sendAuthCode = true
            clearInterval(authTimer)
          }
        }, 1000)
      }).catch((error) => {
        this.hideLoading()
        console.log(error)       // 请求失败返回的数据
      })
    },
    handleLogin () {
      // 点击发送
      let verification = /^\d{6}$/.test(this.code)
      if (!verification) {
        this.$vux.toast.text('验证码格式不正确', 'top')
        return
      }
      this.showLoading()
      let params = {
        phone: this.phone,
        code: this.verifyCode
      }
      this.$http.post('/api/login', params).then((response) => {          // 这里使用了ES6的语法
        this.hideLoading()
        localStorage.setItem('token', response.token)
        store.commit('loginSuccess', response.token)
        this.$router.push('/taskList')
      }).catch((error) => {
        this.hideLoading()
        this.$vux.toast.text('验证码不正确', 'top')
        console.log(error)       // 请求失败返回的数据
      })
    }
  }
}
</script>
<style lang="less">
.login-page{
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .weui-cell{
        padding: 20px 15px;
    }
    .weui-cells__title{
        font-size: 20px;
        color: #000;
    }
    .logo-box{
        text-align: center;
        margin-bottom: 10vh;
        span{
            width: 35vw;
            height: 22vw;
            line-height: 22vw;
            display: inline-block;
            background-color: #F8F8F8;
        }
    }
    .submit-box{
        padding: 30px 15px 0 15px;
    }
    .second-tip{
        font-size: 16px;
    }
    .agreement-box{
        padding-left: 13px;
        padding-top: 20px;
        .agreement{
            color: #409eff;
        }
    }
}

</style>

