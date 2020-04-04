import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginForPhone from '@/LoginForPhone'
import CardAdd from '@/pages/cardAdd'
import CardList from '@/pages/cardList'
import TaskList from '@/pages/taskList'
import Mine from '@/pages/mine'
import TaskDetail from '@/pages/taskDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'LoginForPhone',
      component: LoginForPhone
    },
    {
      path: '/cardAdd',
      name: 'CardAdd',
      component: CardAdd
    },
    {
      path: '/cardList',
      name: 'CardList',
      component: CardList
    },
    {
      path: '/taskList',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/taskDetail',
      name: 'TaskDetail',
      component: TaskDetail
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
