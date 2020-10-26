import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/test',
    redirect:'/test/1',
    component: ()=>import('../views/TestPage'),
    children:[
      {
        path: '/test/:id',
        name: 'test',
        component: ()=>import('../views/Test')
      },
    ]
  },
  {
    path: '/result',
    name: 'result',
    component: ()=> import('../views/Result')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
