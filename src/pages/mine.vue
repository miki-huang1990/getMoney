<template>
    <div class="mine-page">
        <x-header :left-options="{showBack: false}">我的</x-header>
        <div class="user">
            <img src="../../static/image/1.jpeg" alt="">
            13800138000
        </div>
        <group>
            <cell title="我的保证金： " :value="500"></cell>
            <cell title="待领取奖励： " :value="500"></cell>
            <cell title="我的任务" is-link link="/taskList"></cell>
            <cell title="联系客服" is-link to=""></cell>
        </group>
        <tabbar>
            <tabbar-item link="/taskList">
                <span slot="label">任务</span>
            </tabbar-item>
            <tabbar-item link="/cardList">
                <span slot="label">银行卡</span>
            </tabbar-item>
            <tabbar-item selected>
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
import { Tabbar, XHeader, TabbarItem, Tab, TabItem, FormPreview, Group, Cell, Scroller, Divider, Spinner, XButton, LoadMore } from 'vux'
export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    FormPreview,
    Group,
    Cell,
    Scroller,
    Divider,
    Spinner,
    XButton,
    LoadMore
  },
  data () {
    return {
      type: '1'
    }
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    }
  }
}
</script>
<style lang="less" scoped>
.mine-page{
    .user{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-top: 15px;
        padding-left: 15px;
        img{
            width: 20vw;
            height: 20vw;
            border-radius: 50%;
            margin-right: 5vw;
        }
    }
}
</style>



