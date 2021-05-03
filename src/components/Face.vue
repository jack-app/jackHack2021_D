<template>
  <div>
    <img ref="img" src='@/assets/koko.png' />
    <canvas ref="canvas" width="200" height="200"></canvas>
  </div>
</template>

<script>
export default {
  data: ()=>({
    canvas: null,
    ctx: null,
    img: null
  }),
  mounted(){
    this.canvas= this.$refs.canvas
    this.ctx=this.canvas.getContext('2d')
    this.img=new Image();
    this.$refs.img.onload=()=>{
      self.ctx.drawImage(self.$refs.img,0,0,200,200)
      self.draw()
    }
  },
  methods:{
    draw(){
      let imageData=this.ctx.getImageData(0,0,200,200);
      let former = imageData.data;
      let latter = [];
      for (let y = 0; y < 200; ++y) {
        for (let x = 0; x < 200; ++x) {
          let base = (y * 200 + x) * 4;
          if(70<= x && x<= 130 && 145<= y && y<=175){
            // なんかピクセルに書き込む
            let offy=y-145;
            let formaty=offy/30;
            let d = Math.abs(x-100)/30;
            latter[base + 0] = former[((Math.floor(30*Math.pow(formaty,d+1))+145)*200+x)*4+0];  // Red
            latter[base + 1] = former[((Math.floor(30*Math.pow(formaty,d+1))+145)*200+x)*4+1];  // Green
            latter[base + 2] = former[((Math.floor(30*Math.pow(formaty,d+1))+145)*200+x)*4+2]; // Blue
            latter[base + 3] = 255;  // Alpha
          }else{
            latter[base + 0] = former[base+0];  // Red
            latter[base + 1] = former[base+1];  // Green
            latter[base + 2] = former[base+2]; // Blue
            latter[base + 3] = 255;
          }
        }
      }
      for (let y = 0; y < 200; ++y) {
        for (let x = 0; x < 200; ++x) {
          let base = (y * 200 + x) * 4;
          // なんかピクセルに書き込む
          former[base + 0] = latter[base + 0]  // Red
          former[base + 1] = latter[base + 1] ;  // Green
          former[base + 2] = latter[base + 2] ; // Blue
          former[base + 3] = latter[base + 3] ;  // Alpha
        }
      }
      this.ctx.putImageData(imageData,0,0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
