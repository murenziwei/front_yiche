<template>
  <div class="home" :style="{height:screen.height+'px'}">
      <ul class="h-ul">
          <li class="h-li" v-for="(item,index) of 2" :key="index">
              <div class="hl-frame">
                  <router-link class="hf-flex" to="/message/service">
                      <div class="h-f-left">
                        <img src="" alt="" class="hfl-img" >
                        <div class="active" v-show="index===0">3</div>
                      </div>
                      <div class="h-f-right">
                        <div class="hfr-top">
                            <div class="ht-text">晓峰脑残</div>
                            <div class="ht-time">283928398:00 ；000 </div>
                        </div>
                        <p class="ht-info over2">沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风</p>
                      </div>
                  </router-link>
              </div>
          </li>
          <li class="h-li">
              <div class="hl-frame">
                  <router-link class="hf-flex" to="/message/xtdata">
                      <div class="h-f-left">
                        <img src="" alt="" class="hfl-img" >
                      </div>
                      <div class="h-f-right">
                        <div class="hfr-top">
                            <div class="ht-text">晓峰脑残</div>
                            <div class="ht-time">283928398:00 ；000 </div>
                        </div>
                        <p class="ht-info over2">沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风沙雕小风</p>
                      </div>
                  </router-link>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        const screen=window.screen;
        return {
            screen
        }
    }
}
</script>

<style scoped>
ul,li{
    padding:0;
    margin:0;
}
.over2{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.h-li{
    background-color:#fff;
    /* border-bottom:1px solid #eee; */
    box-shadow: 0 1px 2px #ebedf0;
    margin-bottom:1px;
}
.h-li:active{
    opacity:.7;
}
.hf-flex{
    display:flex;
    align-items:center;
    padding:10px;
}
.h-f-left{
    position:relative;
}
.h-f-left .active{
    position:absolute;
    z-index:2;
    right:0px;
    top:0px;
    height:15px;
    padding:2px;
    min-width:15px;
    line-height:15px;
    text-align:center;
    border-radius:50%;
    background-color:red;
    font-size:10px;
    color:#fff;
}
.h-f-right{
    flex:1;
    padding-left:12.5px;
}
.hfr-top{
    display:flex;
    align-items:center;
    line-height:24px;
}
.ht-text{
    flex:1;
    font-size:16px;
    color:#212121;
    font-weight:500;
}
.ht-time{
    font-size:13px;
    color:#999;
}
.ht-info{
    font-size:14px;
    color:#212121;
    font-weight:500;
    opacity:.8;
    line-height:24px;
}
.hfl-img{
    width:60px;
    height:60px;
    border-radius:50%;
    background-color:aliceblue;
    display:block;
    
}

</style>