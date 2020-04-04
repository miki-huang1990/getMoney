<template>
    <div class="task-list">
        <tab>
            <tab-item selected @on-item-click="onItemClick">全部任务</tab-item>
            <tab-item @on-item-click="onItemClick">我的任务</tab-item>
        </tab>
        <scroller height="-96" lock-x @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
            <div>
                <router-link to='/taskDetail'><form-preview v-for="i in bottomCount" :key="i" header-label="任务名称任务名称" :body-items="list"></form-preview></router-link>
                <load-more tip="loading"></load-more>
            </div>
        </scroller>
        <tabbar>
            <tabbar-item selected>
                <span slot="label">任务</span>
            </tabbar-item>
            <tabbar-item link="/cardList">
                <span slot="label">银行卡</span>
            </tabbar-item>
            <tabbar-item link="/mine">
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
      bottomCount: 20,
      onFetching: false,
      list: [{
        label: '所需保证金：',
        value: '2000元'
      }, {
        label: '剩余时间：',
        value: '15天'
      }, {
        label: '奖励金额：',
        value: '258元'
      }]
    }
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    }
  }
}
</script>
<style lang="less">
.task-list{
    .vux-form-preview{
        margin-bottom: 15px;
        .weui-form-preview__hd .weui-form-preview__label{
            font-size: 16px;
            color: #000;
        }
        .weui-form-preview__bd {
            .weui-form-preview__value{
                text-align: left;
            }
            .weui-form-preview__label{
                min-width: auto;
                margin-right: 0;
            }
        }
    }
    .vux-form-preview{
        border-radius: 5px;
        margin: 7px 15px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
}
</style>