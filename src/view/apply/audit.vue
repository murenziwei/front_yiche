<template>
    <div class="s-body">
      <img src="@/assets/logo.png" alt="">
      <div class="text" :style="{color:color[ind]}">{{text}}</div>
    </div>
</template>

<script>
    export default {
      name: "audit",
      data(){
        return {
          ind:2,
          text:'--',
          color:[
            "red","blue","black"
          ]
        }
      },
      created(){
        console.log(this.$route);
        var ind=this.$route.query.status;
        this.ind=ind;
        switch (ind) {
          case "0":this.text="审核失败";break;
          case "1":this.text="审核通过";break;
          case "2":this.text="审核未通过";break;
          case "3":this.text="未提交审核";break;
        }
      }
    }
</script>

<style scoped>
.s-body{
  padding:50px 0;
  text-align:center;
  display:flex;
  flex-direction: column;
  align-items:center;
}
  .text{
    color:#212121;
    font-size:16px;
    margin:10px 0;
  }
</style>
