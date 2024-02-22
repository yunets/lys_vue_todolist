import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import AINav from '@/components/AINav'
import MeiZi from '@/components/MeiZi'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AINav',
      component: MeiZi
    },
    {
      path: '/AINav',
      name: 'AINav',
      component: AINav
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: TodoList
    }
  ]
})
