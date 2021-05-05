<template>
  <div class="toppage">
    <div class="toppage-title inview" v-on:click="goLogin" >
      <h4 class="char"><img src="@/assets/1F(facemotion).png" alt=""></h4>
      <h4 class="char"><img src="@/assets/2a(facemotion).png" alt=""></h4>
      <h4 class="char"><img src="@/assets/3c(facemotion).png" alt=""></h4>
      <h4 class="char character"><img src="@/assets/4e(facemotion) (1).png" alt=""></h4>
      <h4 class="char"><img src="@/assets/5m(facemotion).png" alt=""></h4>
      <h4 class="char"><img src="@/assets/6o(facemotion).png" alt=""></h4>
      <h4 class="char"><img src="@/assets/7t(facemotion).png" alt=""></h4>
      <h4 class="char"><img src="@/assets/8i(facemotion).png" alt=""></h4>
      <h4 class="char"><img src="@/assets/9o(facemotion).png" alt=""></h4>
      <h4 class="char"><img src="@/assets/10n(facemotion).png" alt=""></h4>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    goLogin(){
      this.$router.push('/signup');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  width:100%;
  height:100%;
  font-family:Arial, Helvetica, sans-serif;
  background-color:teal;
  color:white;
  padding:0;
}

.toppage img{
  width:100%;
}

.toppage-title {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  opacity: 0;
  display:flex;
  width:100%;
}

.toppage-title.inview {
  opacity: 1;
}

.inview .char {
  display: inline-block;
  -webkit-animation-name: kf-toppage-chars;
          animation-name: kf-toppage-chars;
  -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
  -webkit-animation-timing-function: cubic-bezier(0.39, 1.57, 0.58, 1);
          animation-timing-function: cubic-bezier(0.39, 1.57, 0.58, 1);
  -webkit-animation-delay: 1.12s;
          animation-delay: 1.12s;
  -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
  -webkit-animation-direction: normal;
          animation-direction: normal;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

.inview .character{
  -webkit-animation-name:kf-character-chars;
          animation-name:kf-character-chars;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function:ease;
          animation-timing-function:ease;
  -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
  -webkit-animation-direction: normal;
          animation-direction: normal;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

.character{
  transform:rotate(0);
  transform-origin:center;
}

.inview .char:nth-child(1) {
  -webkit-animation-delay: 0.04s;
          animation-delay: 0.04s;
}

.inview .char:nth-child(2) {
  -webkit-animation-delay: 0.16s;
          animation-delay: 0.16s;
}

.inview .char:nth-child(3) {
  -webkit-animation-delay: 0.28s;
          animation-delay: 0.28s;
}

.inview .char:nth-child(4) {
  -webkit-animation-delay: 1.12s;
          animation-delay: 1.12s;
}

.inview .char:nth-child(5) {
  -webkit-animation-delay: 0.40s;
          animation-delay: 0.40s;
}

.inview .char:nth-child(6) {
  -webkit-animation-delay: 0.52s;
          animation-delay: 0.52s;
}

.inview .char:nth-child(7) {
  -webkit-animation-delay: 0.64s;
          animation-delay: 0.64s;
}

.inview .char:nth-child(8) {
  -webkit-animation-delay: 0.76s;
          animation-delay: 0.76s;
}

.inview .char:nth-child(9) {
  -webkit-animation-delay: 0.88s;
          animation-delay: 0.88s;
}

.inview .char:nth-child(10) {
  -webkit-animation-delay: 1.00s;
          animation-delay: 1.00s;
}

@keyframes kf-toppage-chars {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

@-webkit-keyframes kf-toppage-chars {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

@keyframes kf-character-chars{
  0% {
    transform:rotate(1deg) scale(100);
    opacity:0;
  }
  100%{
    transform:rotate(720deg) scale(1.5);
    opacity:1;
  }
}

@-webkit-keyframes kf-character-chars{
  0%{
    transform:rotate(1deg) scale(100);
    opacity:0;
  }
  100%{
    transform:rotate(720deg) scale(1.5);
    opacity:1;
  }
}

h4{
  height:auto;
  margin:auto;
}
</style>
