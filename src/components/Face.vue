<template>
  <div>
    <p>顔の編集をお試しできます（アップロードされません）</p>
    <div>
      <croppa v-model="myCroppa" ref="input" :width="200" :height="200" canvas-color="transparent"></croppa>
    </div>
    <button @click = "draw">sad</button>
    <button @click = "draw2">smile</button>
    <div>
      <canvas ref="output" width="400" height="400"></canvas>
    </div>

  </div>
</template>

<script>
import Vue from "vue";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";
Vue.use(Croppa);

export default {
  data: ()=>({
    inctx: null,
    outctx:null
  }),
  mounted(){
    this.inctx=this.$refs.input.getContext('2d')
    this.outctx=this.$refs.output.getContext('2d')
  },
  methods:{
    draw(){
      let imageData=this.inctx.getImageData(0,0,400,400);
      let former = imageData.data;
      let latter = [];
      for (let y = 0; y < 400; ++y) {
        for (let x = 0; x < 400; ++x) {
          let base = (y * 400 + x) * 4;
          if(140<= x && x<= 260 && 290<= y && y<=350){
            // なんかピクセルに書き込む
            let offy=y-290;
            let formaty=offy/60;
            let d = Math.abs(x-200)/60;
            let fixd=1+d
            latter[base + 0] = former[((Math.floor(60*Math.pow(formaty,fixd))+290)*400+x)*4+0];  // Red
            latter[base + 1] = former[((Math.floor(60*Math.pow(formaty,fixd))+290)*400+x)*4+1];  // Green
            latter[base + 2] = former[((Math.floor(60*Math.pow(formaty,fixd))+290)*400+x)*4+2]; // Blue
            latter[base + 3] = 255;  // Alpha
          }else{
            latter[base + 0] = former[base+0];  // Red
            latter[base + 1] = former[base+1];  // Green
            latter[base + 2] = former[base+2]; // Blue
            latter[base + 3] = 255;
          }
        }
      }
      for (let y = 0; y < 400; ++y) {
        for (let x = 0; x < 400; ++x) {
          let base = (y * 400 + x) * 4;
          // なんかピクセルに書き込む
          former[base + 0] = latter[base + 0]  // Red
          former[base + 1] = latter[base + 1] ;  // Green
          former[base + 2] = latter[base + 2] ; // Blue
          former[base + 3] = latter[base + 3] ;  // Alpha
        }
      }
      this.outctx.putImageData(imageData,0,0)
    },
    draw2(){
      let imageData=this.inctx.getImageData(0,0,400,400);
      let former = imageData.data;
      let latter = [];
      for (let y = 0; y < 400; ++y) {
        for (let x = 0; x < 400; ++x) {
          let base = (y * 400 + x) * 4;
          if(140<= x && x<= 260 && 290<= y && y<=350){
            // なんかピクセルに書き込む
            let offy=y-290;
            let formaty=offy/60;
            let d = Math.abs(x-200)/60;
            let fixd=Math.pow(1-d,2/3)
            latter[base + 0] = former[((Math.floor(60*Math.pow(formaty,fixd))+290)*400+x)*4+0];  // Red
            latter[base + 1] = former[((Math.floor(60*Math.pow(formaty,fixd))+290)*400+x)*4+1];  // Green
            latter[base + 2] = former[((Math.floor(60*Math.pow(formaty,fixd))+290)*400+x)*4+2]; // Blue
            latter[base + 3] = 255;  // Alpha
          }else{
            latter[base + 0] = former[base+0];  // Red
            latter[base + 1] = former[base+1];  // Green
            latter[base + 2] = former[base+2]; // Blue
            latter[base + 3] = 255;
          }
        }
      }
      for (let y = 0; y < 400; ++y) {
        for (let x = 0; x < 400; ++x) {
          let base = (y * 400 + x) * 4;
          // なんかピクセルに書き込む
          former[base + 0] = latter[base + 0]  // Red
          former[base + 1] = latter[base + 1] ;  // Green
          former[base + 2] = latter[base + 2] ; // Blue
          former[base + 3] = latter[base + 3] ;  // Alpha
        }
      }
      this.outctx.putImageData(imageData,0,0)
    }
  }
}
</script>
