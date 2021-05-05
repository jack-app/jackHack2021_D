import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import ChatPage from '../components/ChatPage.vue'
import Top from '../components/Top.vue'
import Join from '../components/Join.vue'
import Trim from '../components/TrimImage.vue'
import Face from '../components/Face.vue'
import firebase from 'firebase'


Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },{
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },{
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },{
      path: '/chat/:room',
      name: 'ChatPage',
      component: ChatPage,
      props:true
    },{
      path: '/join',
      name: 'Join',
      component: Join
    },{
      path: '/trim',
      name: 'Trim',
      component: Trim
    },{
      path: '/face',
      name: 'Face',
      component: Face
    }
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
