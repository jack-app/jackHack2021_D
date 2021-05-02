<template>
  <div>
    <h2 style="margin: 0;">Vue-Croppa</h2>
    <hr>
    <croppa v-model="myCroppa" canvas-color="transparent"></croppa>
    <br>
    <button @click="generateImage">画像作成</button>
    <br>
    <p>{{ imgUrl }}</p>
    <br>
    <img class="output" :src="imgUrl" ref="canvas">
  </div>
</template>

<script>
import Vue from "vue";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";

Vue.use(Croppa);

export default {
  data() {
    return {
      myCroppa: null,
      imgUrl: ""
    };
  },
  methods: {
    generateImage: function() {
      let url = this.myCroppa.generateDataUrl();
      if (!url) {
        alert("no image");
        return;
      }
      this.imgUrl = url;
      console.log(this.imgUrl);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
