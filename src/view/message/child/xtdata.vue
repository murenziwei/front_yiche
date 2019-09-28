<template>
  <div class="home" :style="{height:screen.height+'px'}">
      <ul class="h-ul">
          <li class="h-li" v-for="(item,index) of 2" :key="index">
              <div class="hl-time">
                  09232323:039434
              </div>
              <div class="hl-frame">
                  <div class="hf-top">
                      <img src="" alt="" class="ft-img">
                      <span class="ft-name over2">易车网小</span>
                  </div>
                  <div class="ft-content">
                      <div>
                          <img src="" alt="" style="display:block;background-color:#f6f6f6;width:100%;height:200px;border-radius:5px;" >
                      </div>
                      安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放
                  </div>
                  <div class="ft-footer">
                      <router-link to="/message/xdetail" class="ff-a">查看详情</router-link>
                  </div>
              </div>
          </li>
          <li class="h-li" v-for="(item,index) of 2" :key="index">
              <div class="hl-time">
                  09232323:039434
              </div>
              <div class="hl-frame">
                  <div class="hf-top">
                      <img src="" alt="" class="ft-img">
                      <span class="ft-name over2">易车网小</span>
                  </div>
                  <div class="ft-content">
                      安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放
                      安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放
                      安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放
                      安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放安徽人佛我节假日放假就爱我居然放
                  </div>
                  <div class="ft-footer">
                      <router-link to="/message/xdetail" class="ff-a">查看详情</router-link>
                  </div>
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

.hl-frame{
    background: #fff;
    border-radius:5px;
    padding:10px;
    padding-bottom:0;
}
.home{
    overflow-y:scroll;
    background-color:#f1f1f1;
    padding:0 10px;
}
.hl-time{
    color:#999;
    font-size:16px;
    text-align:center;
    line-height:48px;
}
.hf-top{
    display:flex;
    align-items:center;

}
.ft-img{
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:aliceblue;
}

.ft-content{
    margin-top:10px;
    font-size:15px;
    color:#212121;
    line-height:24px;
    font-weight:500;
    max-height:272px;
    overflow-y:hidden;
}
.ft-name{
    font-size:15px;
    color:#212121;
    line-height:24px;
    font-weight:600;
    padding:0 10px;
}
.ft-footer{
    text-align:right;
    padding:10px 0;
}
.ff-a{
    color:#2A7AEC;
    font-size:15px;
    text-decoration: none;
    
}
.ff-a:active{
    opacity:.7;
}
</style>