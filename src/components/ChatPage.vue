<template>
  <div class="chatpage">
    チャットページ
    <ChatText v-for = "chattext in chattexts"
      :key ="chattext.key"
      :icon="chattext.icon"
      :name="chattext.name"
      :text="chattext.text"
    />
    <textarea v-model="input"></textarea>
    <button v-on:click = "doSend">送信</button>
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

</style>
