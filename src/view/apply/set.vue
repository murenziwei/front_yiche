<template>
  <form action="">
    <div class="f-body">

      <div class="f-row">
        <div class="fr-left">
          头像
        </div>
        <div class="fr-right is-center is-end">
          <img :src="user.logo" alt="" class="fr-img" v-show="user.logo">
          <div class="fr-icon"></div>
        </div>
        <input class="upload1" @change='add_img_two'  type="file" accept="image/*">
      </div>
      <div class="f-row">
        <div class="fr-left">
          修理厂名称
        </div>
        <div class="fr-right is-center is-end">
           <input type="text" class="fr-input" placeholder="请输入" v-model="user.name" @input="changefn" />
           <div class="fr-icon" ></div>
        </div>
      </div>
      <div class="f-row">
        <div class="fr-left">
          是否工作中
        </div>
        <div class="fr-right is-center is-end">
          <div class="lr-out" :style="{backgroundColor:(user.status==1?'#2A7AEC':'')}" @click="radinfn">
            <div class="lw-radio" :style="{transform:'translateX('+(user.status==1?'1.4':'0')+'rem)'}">
              <div class="lr-circle"></div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="isset">
        <div class="sub-btn" @click="submifn">修改</div>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: "approve",
    data(){
      const self = this;
      return {
        isfou:false,
        isset:false,
        user:{
          logo:'',
          paperwork:''
        },
        list:[]
      }
    },
    created(){
      this.go_data();
    },
    methods:{
      changefn(){
        if(!this.isset){
          this.isset=true;
        }
      },
      go_data(){
        this.api.post('/v1/store/info.do').then((res)=>{
          console.log(res,"没什么润用");
          if(res.code==1){
            this.user=res.data;
          }
        });
      },
      submifn(){
        let user=this.user;
        this.api.post("/v1/store/save.do",user).then((res)=>{
          console.log(res);
          if(res.code==1){
            this.navfn();
          }else{
            this.$message.info(res.msg);
          }
        })
      },
      navfn(){
        this.$router.go(-1)
      },
      radinfn(){
        if(!this.isset){
          this.isset=true;
        }
        this.user.status=this.user.status?0:1;
      },
      add_img_two(event){
        let imgData=event.target.files[0];

        if(imgData.name){
          console.log(imgData,"已经");
          this.api.upload("/upload.do",imgData).then((res)=>{
            console.log("我已经狼藉",res);
            if(res.code){

              if(!this.isset){
                this.isset=true;
              }
              this.user.logo=res.data.url;
            }else{
              this.$message.info("上传失败")
            }
          })
        }
      },
      delfn(ind){
        this.list.splice(ind,1)
      }
    }
  }
</script>

<style scoped lang="less">

  .lr-out{
    width:2.6rem;
    height:1.2rem;
    background-color:#fff;

    border-radius:20px;
    box-shadow:inset 0 0 5px #eee;
  }
  .lw-radio{
    width:2.6rem;
    height:1.2rem;
    border-radius:20px;
    position:relative;
    transform:translateX(0);
    animation:all .2s;
    .lr-circle{
      width:1.2rem;
      height:1.2rem;
      border-radius:20px;
      box-shadow:0 0 10px #eee;
      background-color:#fff;
    }
  }
  .sub-btn{
    height:1.7rem;
    line-height:1.7rem;
    display:block;
    border-radius:5px;
    color:#fff;
    background-color:#2A7AEC;
    font-size:.6rem;
    text-align:center;
    margin:10px 0;
  }
  .sub-btn:active{opacity:.7;}
  .del-div{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    height:30px;
    text-align:center;
    z-index:2;
    line-height:30px;
    background-color:rgba(0,0,0,0.7);
    color:#fff;
    font-size:11px;
  }
  .span:active{opacity:.7;}
  .ff_img{
    border:1px dashed #8a8a8a;
    width:100px;
    height:100px;
    background-position:center;
    background-size:20px 20px;
    background-repeat:no-repeat;
    background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABTUlEQVR4Xu2bzW0CMRCF53VAB4EO6CB0EGjGPkKO62YCHZAOUgJUQAmDjIgUkYg92RNpv5X2tJJn/Hb8975d2cQvTbz/hgBUQJACpZSlu3/U8JI2KaWviFTChsAwDDtJ29ppd3/POe8QIEABKiBA9FtIhgBzAJMgqwDLIPsANkLsBNkKcxbgMMRpkOMwfgCGCI4QlhieIKYornCEP4kr/Kh6JTaS3lq/DXdfmVm963WUdOwQ8/BIoH5VQCnlYmaz1slEtO/up5zz4mfsvwQ4mdlLRIIdYp5TSvMxASq0XLdORlIt/9d7nE93bz4EJO1Hh0Drjn+3DxmCDEGGIEOQIcgQZAgyBBmCDEGGIEOQIcgQZAgyBBmCDEGGIEO9/MinrnCvJDBFMUUxRadtilYIa2b7+5yzntxvc70m27E4Yd8HjCXW6zkC9FL6v8a5Ak4bxFAJfxV4AAAAAElFTkSuQmCC');
  }
  .upload{
    display:flex;
    flex-wrap:wrap;
  }
  .upload1{

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
  .up-li{
    position:relative;
    text-align:center;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:90px;
    height:90px;
    background-color:#FAFAFA;
    margin:0px 12.5px 12.5px 0;
    border-radius:4px;

  }

  .add-icon{
    width:25px;height:25px;

  }
  .add_text{
    padding-top:5px;
    color:#999;
    font-size:15px;
  }
  .ul-img{
    width:90px;
    height:90px;
  }




  .fr-input{
    width:100%;
    font-size:.6rem;
  }
  .fr-input::placeholder{
    font-size:.6rem;
  }
  .f-body{
    padding:5px 12.5px;
  }
  .fr-icon{
    width:16px;
    height:16px;
    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACIklEQVR4Xu3bTWrCQBQH8DeoRygUlLroolcQCT2BimRd6Om66EYkeoK2tD1EF1pqoWdwzCsDCqHgBDIz70PrfhL/v2Rm3iQZA4G/0WjU7XQ6j4h4N5/PV4GHI29uQs44Ho+v2u32EwD0AeDLGJPNZrN1yDGp2zYG2Id/BYBu5U+rQ2gMkOd5HxFfAKD356qpQmgM4ELvEd4B4FIrQhCACz2dTq+NMe5OUIkQDKAdIQqAZoRoAFoRogLUIWy328FyudxQz/W+80UH8CEg4spam0lCSAKgCSEZgBaEpAAaEJIDSEcgAZCMQAYgFYEUQCICOYA0BBaACsIbAFxUKzXqYokNwIWeTCY3rVbrmROBFUACAjsAN4IIgDqEsiwHRVH8pFhFigGoQfgoyzJLgSAKgANBHAA1gkgASgSxAFQIogF8CACw3u12w6IovkNmB/EAdQjW2tvFYvHZFEEFQA3Cxlo7bIrwD9D01qFsd2zR5MaBk+8CvvAnPwh6lsvRSmOxYwBFeNeNRQL4HpTEXhmKA6B+SiQKgDq8qC7AEV4MAFd4EQCc4dkBuMOzAkgIzwYgJTwLwP7DSvZXYofFHGkdcOyrUur3gdWVLBmAxPBkXUBqeBIAyeGTA0gPnxRAQ/hkAFrCJwHQFD46gLbwUQF8W2ckfiYftRLUvG8ouBLUHD64C2gPHwRwCuGDAM5+66zTO+vN04dpJM/zHiI+IOK9xu3zv2m+lV+IP3yoAAAAAElFTkSuQmCC");
    background-repeat:no-repeat;
    background-size:16px 16px;
  }
  .fr-img{
    width:50px;
    height:50px;
    background-color:aliceblue;
    border-radius:50%;
  }
  .f-row{
    display:flex;
    align-items:center;
    padding:10px 0;
    border-bottom:1px solid #eee;
    position:relative;
  }
  .f-row.no-center{
    align-items:flex-start;
  }
  .fr-left{
    font-size:.6rem;
  }
  .fr-right{
    flex:1;
    display:flex;
    /*flex-wrap:wrap;*/
    padding:0 7px;
  }
  .is-center{
    align-items:center;
  }
  .is-end{
    justify-content: flex-end;
  }
  .fr-img{
    width:50px;
    height:50px;
  }
</style>
