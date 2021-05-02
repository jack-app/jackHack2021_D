<template>
  <div class="signup">
    <h2 class="title">Sign up</h2>
    <div class="main">
      <div class="main-content">
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">

        <div class="select-file">
          <img class="profile-img" src='@/assets/logo.png'/>
          <input class="select-btn" type="file" name="pic">
        </div>

        <button class="btn btn-info">Register</button>
        <p>Do you have an account?
          <router-link to="/signin">sign in now!!</router-link>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
$(.btn-info).on("submit",(e)=>{
e.preventDefualt();


  const email=$(.).val();
  const password=$(.).val();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('ユーザを作成しました');
    })
    .catch(catchErrorOnCreateUser);
  });

const login=()=>{
console.log("ログイン完了");

};

firebase.auth().onAuthStateChanged((user)=>{

  if(user{
    currentUID=user.uid;
    login();
  })
  else{
  return
  };
});


export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {}
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
  width:500px;
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
