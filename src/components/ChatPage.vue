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
    <input type="text">
    <button class="btn btn-secondary">送信<i class="fal fa-paper-plane"></i></button>
    </div>
  </div>
</template>
<script>
import ChatText from './ChatText.vue'

export default {
  name: 'ChatPage',
  components:{
    ChatText
  },
  data: () => ({
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
  })
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
