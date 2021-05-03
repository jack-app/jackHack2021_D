<template>
  <div class="signin">
    <h2 class="title">Sign in</h2>

    <div class="main">
      <div class="main-content">

      <input type="text" placeholder="email" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <button class="btn btn-info">Sign in</button>
      <p>You don't have an account?</p>
        <router-link to="/signup">create account now!!</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignIn',
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.login();
      }else{
        return
      }
    });
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function(){
      firebase.auth().signInWithEmailAndPassword(this.username, this.password)
        .then(()=>{
          console.log("ログイン成功");
        })
        .catch(()=>{
          console.log("エラーしました");
        });
    },
    login: function(){
      this.$router.push('/join')
    }
  }
}
</script>

<style scoped>
*{
  font-family:Arial, Helvetica, sans-serif;

}


.title{
  color:white;
  background-color:teal;
  padding:10px;
  position:fixed;
  width:100%;

}


.main{
  position:relative;
  margin: 0 auto;
  top:80px;
  width:300px;
  height:300px;
  background-color:#CEDADA;
}

input{
  display:block;
  margin:0 auto;

}
.main-content{
  position: relative;
  top:50%;
  transform: translate(0%,-50%);

}
.btn{
  margin-top: 10px;
}
p{
  margin-top: 10px;
}
</style>
