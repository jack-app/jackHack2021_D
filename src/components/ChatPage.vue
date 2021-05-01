<template>
  <div class="chatpage">
    チャットページ
    <ChatText v-for = "chattext in chattexts"
      :key ="chattext.key"
      :icon="chattext.icon"
      :name="chattext.name"
      :text="chattext.text"
    />
    <input type="text">
    <button>送信</button>
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
    }]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
