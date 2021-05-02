<template>
  <div class="chattext">
    <img :src="icon"/>
    {{name}}
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'ChatPage',
  props: ['icon','name','text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
