<template>
  <div class="signup">
    <h2 class="title">Sign up</h2>
    <div class="main">
      <div class="main-content">
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
import firebase from 'firebase'
Vue.use(Croppa);

export default {
  name: 'SignUp',
  data () {
    return {
      email : '',
      username: '',
      password: '',
      myCroppa: null,
      canvas: null,
      ctx: null,
    }
  },
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.login();
      }else{
        return
      }
    });
  },
  mounted(){
    this.canvas= this.$refs.canvas2
    this.ctx=this.canvas.getContext('2d')
  },
  methods: {
    signUp(){
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          let user = firebase.auth().currentUser;
          let encoded=encodeURI(this.username)
          this.generateImage()
          user.updateProfile({
            displayName:this.username,
            photoURL:"https://firebasestorage.googleapis.com/v0/b/emotional-chat-app.appspot.com/o/face%2F"+encoded+".png?alt=media"
          })
        }).catch((error)=>{
          alert(error.message);
        })
    },
    login(){
      this.$router.push('/join')
    },
    generateImage() {
      let storage = firebase.storage()
      let encoded=encodeURI(this.username)
      let pathReference = storage.ref("face/"+encoded+".png")
      let url =this.myCroppa.generateDataUrl()
      pathReference.putString(url,'data_url')
      this.draw();
      pathReference = storage.ref("face/"+encoded+"sad.png")
      url =this.myCroppa.generateDataUrl()
      pathReference.putString(url,'data_url')
      this.draw2();
      pathReference = storage.ref("face/"+encoded+"happy.png")
      url =this.myCroppa.generateDataUrl()
      pathReference.putString(url,'data_url')
    },
    draw(){
      let imageData=this.ctx.getImageData(0,0,400,400);
      let former = imageData.data;
      let latter = [];
      for (let y = 0; y < 400; ++y) {
        for (let x = 0; x < 400; ++x) {
          let base = (y * 400 + x) * 4;
          if(140<= x && x<= 260 && 290<= y && y<=350){
            // なんかピクセルに書き込む
            let offy=y-290;
            let formaty=offy/60;
            let d = Math.abs(x-200)/60;
            latter[base + 0] = former[((Math.floor(60*Math.pow(formaty,d+1))+290)*400+x)*4+0];  // Red
            latter[base + 1] = former[((Math.floor(60*Math.pow(formaty,d+1))+290)*400+x)*4+1];  // Green
            latter[base + 2] = former[((Math.floor(60*Math.pow(formaty,d+1))+290)*400+x)*4+2]; // Blue
            latter[base + 3] = 255;  // Alpha
          }else{
            latter[base + 0] = former[base+0];  // Red
            latter[base + 1] = former[base+1];  // Green
            latter[base + 2] = former[base+2]; // Blue
            latter[base + 3] = 255;
          }
        }
      }
      for (let y = 0; y < 400; ++y) {
        for (let x = 0; x < 400; ++x) {
          let base = (y * 400 + x) * 4;
          // なんかピクセルに書き込む
          former[base + 0] = latter[base + 0]  // Red
          former[base + 1] = latter[base + 1] ;  // Green
          former[base + 2] = latter[base + 2] ; // Blue
          former[base + 3] = latter[base + 3] ;  // Alpha
        }
      }
      this.ctx.putImageData(imageData,0,0)
    },
    draw2(){
      let imageData=this.ctx.getImageData(0,0,400,400);
      let former = imageData.data;
      let latter = [];
      for (let y = 0; y < 400; ++y) {
        for (let x = 0; x < 400; ++x) {
          let base = (y * 400 + x) * 4;
          if(140<= x && x<= 260 && 290<= y && y<=350){
            // なんかピクセルに書き込む
            let offy=y-290;
            let formaty=offy/60;
            let d = Math.abs(x-200)/60;
            let fixd=Math.pow(1-d,2/3)
            latter[base + 0] = former[((Math.floor(60*Math.pow(formaty,fixd))+290)*400+x)*4+0];  // Red
            latter[base + 1] = former[((Math.floor(60*Math.pow(formaty,fixd))+290)*400+x)*4+1];  // Green
            latter[base + 2] = former[((Math.floor(60*Math.pow(formaty,fixd))+290)*400+x)*4+2]; // Blue
            latter[base + 3] = 255;  // Alpha
          }else{
            latter[base + 0] = former[base+0];  // Red
            latter[base + 1] = former[base+1];  // Green
            latter[base + 2] = former[base+2]; // Blue
            latter[base + 3] = 255;
          }
        }
      }
      for (let y = 0; y < 400; ++y) {
        for (let x = 0; x < 400; ++x) {
          let base = (y * 400 + x) * 4;
          // なんかピクセルに書き込む
          former[base + 0] = latter[base + 0]  // Red
          former[base + 1] = latter[base + 1] ;  // Green
          former[base + 2] = latter[base + 2] ; // Blue
          former[base + 3] = latter[base + 3] ;  // Alpha
        }
      }
      this.ctx.putImageData(imageData,0,0)
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

.inputfield{
  padding-bottom: 5px;
}

.main{
  position:relative;
  margin: 0 auto;
  top:80px;
  width:500px;
  height:400px;
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
