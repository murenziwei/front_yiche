<template>
    <div class="page">
      <div class="swi">

        <swiper :options="swiperOption" ref="mySwiperwrap">
          <!-- slides -->
          <swiper-slide :key="index" v-for="(item,index) of imgUrls" class="item-img">
            <img class="swi-img" :src="item" alt=""  :style="{width:'100%',height:((scene.width-25)*0.467)+'px'}">
          </swiper-slide>

        </swiper>
        <div class="vsi-fixed">
          <ul class="vsi">
            <li v-for="(image, index) in imgUrls" :key="index" :class="{'v-li':true,'active':index===activeNum}"></li>
          </ul>
        </div>
      </div>
      <div class="page-body" :style="{height:(scene.height-25-(scene.width-25)*0.467)+'px'}">
        <div class="i-header">
          <img src="@/assets/logo.png" alt="" class="i-code" >
          <div class="i-go">
            我的邀请码：2834492739829
          </div>
        </div>
        <div class="i-bottom">
          <img src="@/assets/logo.png" alt="" class="i-icon">
          <div class="i-text">
            微信邀请
          </div>
        </div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "invite",

        computed: {
          swiper() {
            return this.$refs.mySwiperwrap.swiper
          }
        },
        data(){
          let that=this;
          const scene=window.screen;
          return {
            scene,
            imgUrls: [
              'http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg',
              'http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg',
              'http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg',
            ],
            activeNum: 0,
            swiperOption: {
              autoplay:true,
              on: {
                slideChange: function(e){
                  that.activeNum = that.swiper.activeIndex;
                  console.log(that.activeNum,"num");
                }
              },
            }
          }
        },
    }
</script>

<style lang="less" scoped>
  .swi{position:relative;}
  .vsi-fixed{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:30px;
    z-index:2;
    .vsi{
      display:flex;
      align-items:center;
      justify-content:center;
      .v-li{
        margin:5px;
        width:6px;
        height:6px;
        border-radius:16px;
        background-color:#fff;
        opacity:.5;
        &.active{
          width:14px;
          opacity:1;
        }
      }
    }
  }
  .swi-img{
    border-radius:6px;
  }
.page{
  padding:12.5px;
}
.i-header{
  text-align: center;
}
.i-go{
  padding:10px;
  color:#fff;
  font-size:13px;
  background-color:#2A7AEC;
  margin:10px auto;
}
.i-go:active{
  opacity:.7;
}
.i-code{
  width:120px;
  height:120px;
  background-color:aliceblue;
  display:inline-block;
}
.i-bottom{
  text-align:center;
}
.i-icon{
  width:50px;
  height:50px;
}
.i-text{
  color:#999;
  font-size:12px;
  margin:3px 0;
}
.page-body{
  display:flex;
  align-items:center;
  flex-direction: column;
  justify-content: space-around;
}
</style>
