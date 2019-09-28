<template>
  <div class="home" :style="{height:screen.height+'px'}">
      <ul class="h-ul">
          <li class="h-li" v-for="(item,index) of list" :key="index">
              <div class="hl-frame">
                  <div :class="{'hf-flex':true,'user':item.user}">
                      <div class="h-f-left">
                        <img :src="item.img" alt="" class="hfl-img" >
                      </div>
                      <div class="h-f-right">
                        <div class="ht-info" v-html="item.val"></div>
                      </div>
                  </div>
              </div>
          </li>
          <li style="height:50px;"></li>
      </ul>

      <div class="f-end">
        <div class="fe-div">
          <div class="h-f-left">
            <img src="data:image/png;base64,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" alt="" class="fe-img">
            <input class="upload" @change='add_img'  type="file" accept="image/*">
          </div>
          <div class="fi-center">
              <input type="text" class="fc-input" placeholder="请输入回复内容~" v-model="huifu" >
          </div>
          <span class="fi-right" @click="send_fn()">发送</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        const screen=window.screen;
        return {
            screen,
            huifu:'',
            list:[
                {
                    img:"",
                    name:"在线客服",
                    val:"你麻痹",
                    user:false
                }
            ]
        }
    },
    methods: {

		add_img(event){  
	            let imgData=event.target.files[0];
	            if(imgData.name){
                    this.list.push({
                        img:"",
                        name:"草拟小风",
                        val:`<img src='${window.URL.createObjectURL(imgData)}' style="width:100%;" />`,
                        user:true
                    })
	            }
	    },
        send_fn(){
            if(this.huifu){
                this.list.push({
                    img:"",
                    name:"草拟小风",
                    val:this.huifu,
                    user:true
                })
            }
        }
    }
}
</script>

<style scoped>
ul,li{
    padding:0;
    margin:0;
}

.upload{
	position:absolute;
	left:0;
	right:0;
	bottom:0;
	top:0;
	width:100%;
	height:100%;
	margin:0;
	padding:0;
	z-index:999;
	opacity:0;
}
.f-end{
    position:fixed;
    bottom:0;
    left:0;right:0;
    
}
.fe-div{
    display:flex;
    align-items:center;
    height:50px;
    padding:0 10px;
    background-color:#fff;
    
    box-shadow: 0 -1px 2px #ebedf0;
}
.fi-center{
    flex:1;
    padding:5px 10px;
    margin:0 10px;
    background: #F4F4F5;
    border-radius:20px;
    font-size:15px;
}
.fc-input{
    width:100%;
    box-sizing:border-box;
    background-color:transparent;
    border:none;
    outline:none;
    box-shadow: none;
}
.fe-img{
    display:block;
    width:30px;
    height:30px;
}
.home{
    background-color:#f6f6f6;
    overflow-y:scroll;
}
.hf-flex{
    display:flex;
    padding:10px;
}
.fi-right{
    white-space:nowrap;
    color:#2A7AEC;
    font-size:14px;
}
.fi-right:active{opacity:.7;}
.h-f-left{
    position:relative;
}
.h-f-right{
    flex:1;
    padding:0 12.5px;
}
.user .ht-info{
    color:#fff;
    border-radius:10px;
    border-top-right-radius: 0;
    background-color:#2A7AEC;
}
.user.hf-flex{
    flex-direction:row-reverse;
}
.ht-info{
    font-size:14px;
    color:#212121;
    font-weight:500;
    line-height:24px;
    padding:10px;
    background-color:#fff;
    border-radius:10px;
    border-top-left-radius:0;
}
.hfl-img{
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:aliceblue;
    display:block;
    
}

</style>