<template>
  <div class="signup">
    <h2 class="title">Sign up</h2>
    <div class="main">
      <div class="main-content">
        <p>入力によらずgyuttoeとしてログインされます</p>
        <div class="inputfield">
          <input type="text" placeholder="email" v-model="email">
          <input type="password" placeholder="Password" v-model="password">
          <input type="text" placeholder="Username" v-model="username">
        </div>
        <div class="image">
          <croppa v-model="myCroppa" ref="canvas2" :width="200" :height="200" canvas-color="transparent"></croppa>
        </div>
        <button class="btn btn-info" v-on:click="signUp">Register</button>
        <p>Do you have an account?
          <router-link to="/signin">sign in now!!</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Croppa from "vue-croppa";
Vue.use(Croppa);

export default {
  name: 'SignUp',
  data () {
    return {
      myCroppa: null,
      canvas: null,
      ctx: null,
    }
  },
  methods: {
    signUp(){
      this.$router.push('/join')
    },
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

.inputfield{
  padding-bottom: 5px;
}

.main{
  position:relative;
  margin: 0 auto;
  top:80px;
  width:500px;
  height:450px;
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

.select-file{
  background-color: none;
  position:relative;
  /*margin:0 auto;*/
  width: 360px;
  height: 80px;
  left:70px;
  margin-top:10px;
}
.profile-img{
  width:80px;
  position: absolute;
  left: 0px;
  display: inline;
  border:2px solid  teal;
  background-color: white;
}
.select-btn{
  position: absolute;
  top:20px;
  left:80px;
  background-color: ;
  width:280px;
}
p{
  margin-top: 10px;
}
.btn{
  margin-top: 10px;
}
</style>
