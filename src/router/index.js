import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import AINav from '@/components/AINav'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
