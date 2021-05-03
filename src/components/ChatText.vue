<template>
  <div class="chattext">
    <div class="chattext-img" ref="img"><img :src="icon"/></div>
    <div class="chattext-content">
      <div class="chattext-name">{{name}}</div>
      <div class="chattext-text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatPage',
  props: ['icon','name','text'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chattext{
  positoin:fixed;
  width:90%;
  margin:15px 0;
  border:2px solid #CCCCCC;
  border-radius:15px;
  display:flex;
  padding:15px;
  text-align:left;
  transition:all 0.5s;
  -webkit-transition: all 0.5s;
  overflow:hidden;
}
@media(min-width:768px){
    .chattext{
    width:40%;
    margin-left:auto;
    margin-right:auto;
  }
}

.chattext-img img{
  height: 100px;
  width: 100px;
}
.chattext-content{
  width:60%;
  padding-left:15px;
  padding-top:15px;
}
.chattext-name{
  margin-bottom:15px;
  border-bottom:#AAFFFF;
}
.chattext-text{
  font-weight:lighter;
}
</style>
