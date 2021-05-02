<template>
  <div class="chatpage">
    <header>
    チャットページ
    </header>
    <div class="chatpage-text">
    <ChatText v-for = "chattext in chattexts"
      :key ="chattext.key"
      :icon="chattext.icon"
      :name="chattext.name"
      :text="chattext.text"
    />
    </div>
    <div class="chatpage-submit">
      <input type="text" v-model="input">
      <button v-on:click = "doSend" class="btn btn-secondary">送信<i class="fal fa-paper-plane"></i></button>
    </div>
  </div>
</template>
<script>
import ChatText from './ChatText.vue'
import firebase from 'firebase'

export default {
  name: 'ChatPage',
  components:{
    ChatText
  },
  data: () => ({
    room : "room2",
    name : "namae",
    input : "",
    chattexts:[{
      key:1,
      icon:require('@/assets/logo.png'),
      name:"ねこ",
      text:"にゃー"
    },{
      key:2,
      icon:require('@/assets/logo.png'),
      name:"いぬ",
      text:"わん"
    },{
      key:3,
      icon:require('@/assets/logo.png'),
      name:"きつね",
      text:"こん"
    },{
      key:4,
      icon:require('@/assets/logo.png'),
      name:"きつね",
      text:"こん"
    },{
      key:5,
      icon:require('@/assets/logo.png'),
      name:"きつね",
      text:"こん"
    },{
      key:6,
      icon:require('@/assets/logo.png'),
      name:"きつね",
      text:"こん"
    },{
      key:7,
      icon:require('@/assets/logo.png'),
      name:"きつね",
      text:"こん"
    }]
  }),
  created(){
    let ref = firebase.database().ref(this.room+'/message')
    ref.limitToLast(5).on('child_added',this.childAdded)
  },
  methods: {
    childAdded(snap){
      const message=snap.val()
      this.chattexts.push({
        key: snap.key,
        name: message.name,
        text: message.text,
      })
    },
    doSend(){
      let emotions = this.emotion(this.input);
      firebase.database().ref(this.room+'/message').push({
        text: this.input,
        name: this.name,
        emotions: emotions
      }, () => {
        this.input = ''
      })
    },
    emotion(message){
      let happy = [
        "嬉しい",
        "楽しい",
        "やった"
      ];
      let sad = [
        "悲しい",
        "辛い",
        "残念"
      ];
      let happiness = 0;
      let sadness = 0;
      happy.forEach((word) => {
        if(message.indexOf(word)!==-1){
          happiness++;
        }
      });
      sad.forEach((word) => {
        if(message.indexOf(word)!==-1){
          sadness++;
        }
      });
      return {happiness: happiness, sadness: sadness}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .chatpage{
 background-color:;
 font-weight:600;
 height:;
 }
  header{
  background-color:#78FF94;
  color:white;
  height:40px;
  line-height:40px;
  opacity:0.8;
  position:fixed;
  width:100%;
  }

  .chatpage-text{
  padding:40px;
  min-width:450px;
  margin:0 auto;
  padding-bottom:45px;
  justify-content:space-around;
  }
  .chatpage-submit{
  position:fixed;
  margin:0 auto;
  width:100%;
  bottom:0;
  background-color:white;
  opacity:0.8;
  }

</style>
