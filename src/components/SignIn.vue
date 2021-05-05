<template>
  <div class="signin">
    <h2 class="title">Sign in</h2>
    <div class="main">
      <div class="main-content">
        <p>入力によらずgyuttoeとして</p>
        <p>ログインされます</p>
        <input type="text" placeholder="email" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button class="btn btn-info" v-on:click="signIn">Sign in</button>
        <p>You don't have an account?</p>
        <router-link to="/signup">create account now!!</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default{
  methods: {
    signIn: function(){
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
