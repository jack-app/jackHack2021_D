<template>
  <div class="joinpage">
    join your room.
    <div>
      <input type="text" v-model="room">
      <button v-on:click="goChat">done</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data: () => ({
    room :''
  }),
  methods: {
    goChat(){
      this.$router.push('/chat/'+this.room);
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joinpage{
  padding: 80px 80px 80px 80px;
  font-size:50px;
  background-color: #e6ffe9;
  color:#000055;
  font-style: italic;
}
</style>
