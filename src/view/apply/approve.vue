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
        <div class="fr-right is-center">
          <input type="text" class="fr-input" placeholder="请输入" v-model="user.name" />
        </div>
      </div>
      <div class="f-row">
        <div class="fr-left">
          联系方式
        </div>
        <div class="fr-right is-center">
          <input type="text" class="fr-input" placeholder="请输入" v-model="user.phone" />
        </div>
      </div>
      <div class="f-row no-center">
        <div class="fr-left">
          营业执照
        </div>
        <div class="fr-right">
          <div class="row_val">
            <div class="upload">
              <div class="up-li" v-show="user.paperwork">
                <img class="ul-img" :src="user.paperwork"  />
              </div>
              <div class="up-li">
                <input class="upload1" @change='add_img'  type="file" accept="image/*">

                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABTUlEQVR4Xu2bzW0CMRCF53VAB4EO6CB0EGjGPkKO62YCHZAOUgJUQAmDjIgUkYg92RNpv5X2tJJn/Hb8975d2cQvTbz/hgBUQJACpZSlu3/U8JI2KaWviFTChsAwDDtJ29ppd3/POe8QIEABKiBA9FtIhgBzAJMgqwDLIPsANkLsBNkKcxbgMMRpkOMwfgCGCI4QlhieIKYornCEP4kr/Kh6JTaS3lq/DXdfmVm963WUdOwQ8/BIoH5VQCnlYmaz1slEtO/up5zz4mfsvwQ4mdlLRIIdYp5TSvMxASq0XLdORlIt/9d7nE93bz4EJO1Hh0Drjn+3DxmCDEGGIEOQIcgQZAgyBBmCDEGGIEOQIcgQZAgyBBmCDEGGIEO9/MinrnCvJDBFMUUxRadtilYIa2b7+5yzntxvc70m27E4Yd8HjCXW6zkC9FL6v8a5Ak4bxFAJfxV4AAAAAElFTkSuQmCC" class="add-icon" />
                <div class="add_text">上传</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="f-row">
        <div class="fr-left">
          具体位置
        </div>
        <div class="fr-right is-center">
          <input type="text" class="fr-input" placeholder="请输入" v-model="user.address" />
        </div>
      </div>

      <div class="f-row">
        <div class="fr-left">
          定位
        </div>
      </div>
      <div style="height:400px;">
        <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
        </el-amap>
      </div>
      <div>
        <div class="sub-btn" @click="submifn">提交审核</div>
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
            user:{
              logo:'',
              paperwork:''
            },
            list:[],
            pic:'',
            center: [121.59996, 31.197646],
            lng: 0,
            lat: 0,
            loaded: false,
            plugin: [{
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              timeout: 100,          //超过10秒后停止定位，默认：无穷大
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showButton: true,        //显示定位按钮，默认：true
              buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
              showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
              extensions:'all',
              pName: 'Geolocation',
              events: {
                init(o) {
                  // o 是高德地图定位插件实例
                  o.getCurrentPosition((status, result) => {
                    console.log(result)
                    if (result && result.position) {
                      self.user.longitude = result.position.lng;
                      self.user.latitude = result.position.lat;
                      self.lng = result.position.lng;
                      self.lat = result.position.lat;
                      self.center = [self.lng, self.lat];
                      self.loaded = true;
                      self.$nextTick();
                    }
                  });
                }
              }
            }]
          }
        },

        methods:{
          submifn(){
            let user=this.user,judge=false;
            for(let i in user){
               if(!user[i]){
                 judge=true;
               }
            }
            if(judge){
              this.$message.info("请务必填完！");
            }else{
              this.api.post("/v1/store/apply.do",user).then((res)=>{
                console.log(res);
                if(res.code==1){
                  this.navfn();
                }else{
                  this.$message.info(res.msg);
                }
              })
            }

          },
          navfn(){
            this.$router.replace("/audit?status=2");
          },
          add_img(event){
            let imgData=event.target.files[0];
            if(imgData.name){

              this.api.upload("/upload.do",imgData).then((res)=>{
                console.log("我已经狼藉",res);
                if(res.code){
                  this.user.paperwork=res.data.url;
                }else{
                  this.$message.info("上传失败")
                }
              })
            }
          },
          add_img_two(event){
            let imgData=event.target.files[0];

            if(imgData.name){
              console.log(imgData,"已经");
              this.api.upload("/upload.do",imgData).then((res)=>{
                console.log("我已经狼藉",res);
                if(res.code){
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

<style scoped>
  .sub-btn{
    height:40px;
    line-height:40px;
    display:block;
    border-radius:5px;
    color:#fff;
    background-color:#2A7AEC;
    font-size:14px;
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
    font-size:16px;
  }
  .fr-input::placeholder{
    font-size:16px;
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
  font-size:15px;
}
  .fr-right{
    flex:1;
    display:flex;
    flex-wrap:wrap;
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
