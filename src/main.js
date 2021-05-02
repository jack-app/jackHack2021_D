import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAY4punfrdxReQc64n_guIFCEh8hui1vwU",
  authDomain: "emotional-chat-app.firebaseapp.com",
  databaseURL: "https://emotional-chat-app-default-rtdb.firebaseio.com",
  projectId: "emotional-chat-app",
  storageBucket: "emotional-chat-app.appspot.com",
  messagingSenderId: "250287877418",
  appId: "1:250287877418:web:0d40b682b7ff279215c253"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
