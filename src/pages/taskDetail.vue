<template>
    <div class="task-detail">
        <x-header title="任务详情"></x-header>
        <div class="content">
            <div class="content__task">充值返现任务1
                <br/>所需保证金：2000元
                <br/>剩余时间：15天
                <br/>奖励金额：258元
            </div>
            <div class="content__desc">
                <p>任务说明：</p>
                <p class="content__desc_p">每个相同户名的银行卡只能领取一个任务，请在领取任务后1小时内添加客服微信/QQ领取保证金充值方式，并完成充值。</p>
                <p>用户保证金及奖励金额领取方式：</p>
                <p class="content__desc_p">用户完成保证金充值后，请联系客服领取58元任务奖励红包，用户保证金2000元及剩余200元奖励金额将在任务到期之日前返还到绑定的银行账号内。</p>
                <p>客服联系方式：微信lingqian888</p>
            </div>
            <div class="submit-box">
                <x-button type="primary" :disabled="isTake" @click.native="handleTake">领取任务</x-button>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store/index'
import { XHeader, XButton } from 'vux'
export default {
  components: {
    XHeader,
    XButton
  },
  data () {
    return {
      isTake: false
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
    handleTake () {
      let params = {
        phone: store.state.phone,
        taskId: 12
      }
      this.showLoading()
      this.$http.post('/api/takeTask', params).then((response) => {          // 这里使用了ES6的语法
        this.hideLoading()
        this.$vux.toast.text('您已成功领取任务，请在1小时内联系客服并完成保证金充值', 'top')
        this.isTake = true
      }).catch((error) => {
        this.hideLoading()
        console.log(error)       // 请求失败返回的数据
      })
    }
  }
}
</script>
<style lang="less" scoped>
.task-detail{
    .content{
      padding: 20px 15px;
      &__task{
          font-size: 16px;
          padding-bottom: 20px;
      }
      &__desc{
          color: #f00;
          font-size: 14px;
          padding-bottom: 20px;
          &_p{
              text-indent: 2em;
              padding-bottom: 20px;
          }
      }
    }
}
</style>


