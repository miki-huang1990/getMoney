<template>
<div class="add-card">
    <x-header title="添加银行卡"></x-header>
    <group>
        <popup-picker title="开户银行" :data="list1" v-model="brank" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder=""></popup-picker>
        <x-input title="银行账号" v-model="cardNumber" placeholder="" novalidate :show-clear="false"></x-input>
        <x-input title="开户名称" v-model="brandName" placeholder="" novalidate :show-clear="false"></x-input>
        <x-input title="开户支行" v-model="brandBranch" placeholder="" novalidate :show-clear="false"></x-input>
    </group>
    <div class="submit-box">
        <x-button type="primary" @click.native="handleSubmit">确认提交</x-button>
    </div>
</div>
</template>
<script>
import { XInput, XButton, XHeader, Datetime, PopupPicker, Group, Cell, Picker, Divider, XSwitch } from 'vux'

export default {
  components: {
    XHeader,
    Datetime,
    PopupPicker,
    Group,
    Cell,
    Picker,
    XButton,
    Divider,
    XSwitch,
    XInput
  },
  data () {
    return {
      brank: [],
      cardNumber: '',
      brandName: '',
      brandBranch: '',
      list1: [['招商银行', '广发银行', '建设银行', '农业银行', '兴业银行', '阿里巴巴银行', 'XX银行']]
    }
  },
  methods: {
    onChange (val) {
      console.log('val change', val)
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    },
    handleSubmit () {
      alert(222)
    }
  }
}
</script>
<style lang="less">
.add-card{
    .weui-cell{
        padding: 20px 15px;
    }
    .submit-box{
        padding: 30px 15px;
    }
}
</style>


