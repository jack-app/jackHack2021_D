<template>
  <div class="button">
    <button v-on:click="logout">logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Logout',
  methods: {
    logout: function(){
      firebase.auth().signOut();
      this.$router.push('/signin');
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
