import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hello from '../components/HelloWorld.vue'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import ChatPage from '../components/ChatPage.vue'
import Top from '../components/Top.vue'
import Join from '../components/Join.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/hello',
    name: 'Hello',
    component: Hello
  },{
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },{
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },{
    path: '/chat',
    name: 'ChatPage',
    component: ChatPage
  },{
    path: '/top',
    name: 'Top',
    component: Top
  },{
    path: '/join',
    name: 'Join',
    component: Join
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
