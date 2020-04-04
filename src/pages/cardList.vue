<template>
<div class="card-list">
    <x-header title="我的银行卡"><router-link slot="right" to='/cardAdd'>添加</router-link></x-header>
    <scroller height="-96" lock-x @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="box2">
          <div class="card disabled">
              <p class="card-brank">中国银行（已使用）</p>
              <p class="card-no">6788**********5689</p>
              <p class="card-user">持卡人：林XX</p>
          </div>
          <div class="card" v-for="i in bottomCount" :key="i" :style="{'backgroundColor': colors[Math.floor(Math.random() * colors.length)]}">
              <p class="card-brank">中国银行</p>
              <p class="card-no">6788**********5689</p>
              <p class="card-user">持卡人：林XX</p>
          </div>
          <load-more tip="loading"></load-more>
      </div>
    </scroller>
    <tabbar>
        <tabbar-item link="/taskList">
            <span slot="label">任务</span>
        </tabbar-item>
        <tabbar-item selected>
            <span slot="label">银行卡</span>
        </tabbar-item>
        <tabbar-item link="/mine">
            <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</div>

</template>
<script>
import { Tabbar, XHeader, TabbarItem, FormPreview, Group, Cell, Scroller, Divider, Spinner, XButton, LoadMore } from 'vux'
export default {
  components: {
    Tabbar,
    XHeader,
    TabbarItem,
    Group,
    Cell,
    Scroller,
    Divider,
    Spinner,
    XButton,
    LoadMore,
    FormPreview
  },
  data () {
    return {
      bottomCount: 20,
      onFetching: false,
      disabledColor: '#c6c6c6', // 已使用色号
    //   colors: ['#125bcd', '#0e5da8', '#27a037', '#c20913'], // 随机银行卡颜色
      colors: ['#1685a9', '#177cb0', '#065279', '#44cef6'], // 随机银行卡颜色
      list: [{
        label: '开户行：',
        value: '中国银行'
      }, {
        label: '卡号：',
        value: '46557654365436543'
      }, {
        label: '持卡人：',
        value: '范德萨'
      }]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({top: 0})
    })
  },
  methods: {
    onScrollBottom () {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
          this.bottomCount += 10
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 2000)
      }
    }
  }
}
</script>
<style lang="less">
.card-list{
    .box2:first-child{
            margin-top: 15px;
        }
    .card{
        height: 100px;
        border-radius: 5px;
        color: #fff;
        margin: 0 15px 15px;
        padding: 15px;
        background-color: #125bcd;
        &.disabled{
            background-color: #c6c6c6;
        }
        
        &-brank{
            font-size: 16px;
        }
        &-no{
            font-size: 18px;
            text-align: center;
            padding: 15px 0 15px;
            letter-spacing: 5px;
        }
        &-user{
            font-size: 14px;
        }
    }
}
</style>


