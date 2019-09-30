<template>
    <div>
      <div class="qh">
        <router-link class="q-head" to="/repset" >
          <div class="qh-left">
            <img :src="user.logo" alt="" class="ql-pic">
            <div class="ql-info">
              <div class="qi-name">{{user.name||'暂无'}}</div>
              <div>
                <div :class="{'qi-status':true,'stop':(user.status==0)}">
                  {{user.status==1?'工作中':'休息中'}}
                </div>
              </div>
              <div class="qi-phone">
                {{user.phone||'--'}}
              </div>
            </div>
          </div>
          <div class="fr-icon">
          </div>
        </router-link>
      </div>
      <div class="qb">
        <div class="q-body">
          <div class="qb-tabs">
            <div class="qt-item active">
              <div class="qi-text">
                我的订单
              </div>
            </div>
            <div class="qt-item ">
              <div class="qi-text">
                我要抢单
              </div>
            </div>
          </div>
          <div class="qb-content">
            <div>
              <ul class="dc-ul">
                <li class="dc-li">
                  <div class="dl-frame">
                    <div class="df-h">
                      <div class="dh-l">
                        订单号：232132323
                      </div>
                      <div class="dh-r orange">
                        服务中
                      </div>
                    </div>
                    <div class="df-b">
                      <div class="db-l">
                        <img src="@/assets/logo.png" alt="" class="dl-pic">
                      </div>
                      <div class="db-r">
                        <div class="d-r-name">MarryUI</div>
                        <div class="d-r-time">
                          2019-9-93 23;03424接单
                        </div>
                      </div>
                    </div>
                    <div class="df-f">
                      <div class="df-btn blue">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAET0lEQVR4Xu2bXVITQRCAu2fRskoS8QSS2rwbTiCcwHACkxMIj5ZJGSqhfCScADyBeALxBMJ7UtETGHaxysLstNVLgoCb3ZnZn+wKeZ6Znf76d3omCHf8h3dcfrgHcG8Bd5yAsQs8ej9aXSJ4xvwmCN9/val8KyJLbQCl3uAVAm4BQO26wITUdN9WD4sGQRnA491RzSJ5cFvwGxCINt129ahIEJQAlLvD14DQjxSMYOx4ogKdyjhybE4GRAIo9YYHCNBQ3S8BHbut6obq+EWPCwWw3B32BcJrg01uOy072mIMFk56ylwAy93RukD52eiDBOOLJbFWhMwwF0CpNzhCwJdGAACAiI7cdnXTdH5W8+YCKPeGFHcTksTGebtyHHedNOcHApimvK9xP0xAH9xWVTmAxv2eyfxAALH8/9YunIl4mue0mDqAvLtB6gCAYMdp2x0T88xiTuoA7roFnDkteyULTZp+IzgNdkYr5SX5w3TR6bwzSaJeyDTIApR7Qz7QPDGEcOahWP/5tnJiOD+zafMrwe7gGBFfGOzk7MIStSKUwSzb/EqwO+wAwjtdAFSwnsBcACbVIBGcum37RqdIF2DW40OPw+XekPt8ft9P6ZfznB8kQ7L9gP8NgK4bSIL987bNDdPC/KJbYnrZ4MRp2WuFkT4sC8yEKHUHdUT8qCqUh2KtCPl/Jk+kBUyLIuVg+F81RU2tIO8HoOvWrGQBPKGkFwu+OROxludGiJYL8GDdLlHhm6JBQc/gniD39wPKLuADuTwmc0BUPiXm/dJUD4CBKzC3PKdGbQCX8UDzyoxgTEDNPN4cGwFgVyhZ8hgRnqsWSDwuEXfojFaWH8JzlN6qROs0btFlBgAA+IXIQ09yx0c5HviwCLactr2vA+5GPQJ4AAhXfUYuvIisHdPWmzGAaW2gVSbPBCGAQ3citnXqhKiDmZ92PaupsybvJxaAaZnMp789A42eeCiaSibM2ceSo+uaD/weAfcxOzoWFhuAbwm9wSECvjKAwCroOL/FfpjmSt3BR0Ssq67PbvHbspoqfclEAMSGwJoT0P8HBAfbJbmn80LlCpJi5kkMQGwIf9V7QkD+GyMkrEWafYRZSID+ecvenjcsUQAJQlC1dqVxYZ2qxAHkFcKFJSpBMSEVAHmEMK9HkRoAH8LuoIGE/Lhy4b+FAGCpp30Efj2qVzEmjMxp2YHKTtUCZjJw2fxg4h0a3jXGRhF2Y5UJgJkE5d7QtGqMBSHsEJYpAJaCa3ohvX6G1hD6SCNzADNVTu8b+Dmt+t2jgR1E3VYvDMAtt2DXSBwEAX1yW9XQM8TCAVxZxO6gARIaSbmGH/g8sR51PM4NgBkIjhEoZUMgsOaMrIKIvrieVY8S3j9vGLhVZlP8JoiUdUKqISA/vAgFwiZPZPV1ukO5BvAPae4HWjf/q8RjSMBYqbESoLpiAUjB9u4BpAC1UEveW0Ch1JXCZv8AY6jYUPtCLOIAAAAASUVORK5CYII=" alt="" class="df-icon">
                        <span class="df-text">联系TA</span>
                      </div>
                      <div class="df-btn">
                        <span class="df-text">打开导航</span>
                      </div>
                      <div class="df-btn">
                        <span class="df-text">完成订单</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="dc-li">
                  <div class="dl-frame">
                    <div class="df-h">
                      <div class="dh-l">
                        订单号：232132323
                      </div>
                    </div>
                    <div class="flex-body">

                      <div class="flex1 df-b">
                        <div class="db-l">
                          <img src="@/assets/logo.png" alt="" class="dl-pic">
                        </div>
                        <div class="db-r">
                          <div class="d-r-name">MarryUI</div>
                          <div class="dh-l">
                            距离你
                            <span class="orange">1239米</span>

                          </div>
                        </div>
                      </div>
                      <div class="df-f">
                        <div class="df-btn loca">
                          <img src="data:image/png;base64,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" alt="" class="l-icon" />
                        </div>
                        <div class="df-btn orange">
                          <span class="df-text">接单</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return {
          user:{

          }
        }
      },
      mounted(){
        this.go_status();
      },
      methods:{
        go_status(){
          this.api.get('/v1/store/check.do').then((res)=>{
            if(res.code==1){
              var status=res.data.status;
              switch (status) {
                case 1:this.go_data();break;
                case 3:this.$router.replace("/approve");break;
                default:this.$router.replace("/audit?status="+status);
              }
              this.go_data();
            }
          });
        },
        go_data(){
          this.api.post('/v1/store/info.do').then((res)=>{
            console.log(res,"没什么润用");
            if(res.code==1){
              this.user=res.data;
            }
          });
        }
      }
    }
</script>

<style lang="less" scoped>
  ul,li{
    padding:0;margin:0;
  }
  .flex1{flex:1}
  .flex-body{
    display:flex;
    align-items:center;
  }
  .df-icon{
    width:.5rem;
    height:.5rem;
  }
  .df-f{
    display:flex;
    align-items:center;
    justify-content: flex-end;
  }
  .dc-li{
    box-shadow: 0 0 2px #eee;
    margin-top:12.5px;
  }
  .db-r{
    padding:0 6px;
  }
  .df-b{
    display:flex;
    align-items:center;
    padding:10px 0;
    .dl-pic{
      width:2rem;
      height:2rem;
      border-radius:50%;
    }
    .d-r-name{
      font-size:.5rem;
      font-weight:600;
      line-height:2;
      color:#000;
    }
    .d-r-time{
      color:#999;
      font-size:.5rem;
      line-height:2;
    }
  }
  .df-btn{
    margin:5px;
    display:inline-flex;
    align-items:center;
    padding:0 6px;
    height:1rem;
    border-radius:3px;
    box-shadow:0 0px 3px #999;
    border:1px solid #999;
    &:active{
     opacity:.7;
    }
    &.blue{

      box-shadow:0 0px 3px rgba(14,132,221,.5);
      border:1px solid #0E84DD;
      .df-text{
        color:#0E84DD;
      }
    }
    &.loca{
      padding:0;
      width:1rem;
      height:1rem;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content: center;
      box-shadow:0 0 5px rgba(0,0,0,.1);
      border-color:transparent;
      .l-icon{
        width:.5rem;
        height:.5rem;

      }
    }
    &.orange{
      padding:0 0.6rem;
      border-radius:4px;
      box-shadow:0 1px 5px #FF9406;
      font-size:.6rem;
      color:#fff;
      background-color:#FF9406;
      border-color:#FF9406;
      .df-text{
        color:#FFF;
      }
    }
    .df-text{
      font-size:.4rem;
      color:#999;
    }
  }
  .dl-frame{
    padding:12.5px;

  }
  .df-h{
    display:flex;
    justify-content:space-between;

  }
  .dh-l{
    font-size:.5rem;
    opacity:.8;
    color:#000;
    flex:1;
  }
  .dh-r{
    font-size:.5rem;
  }
  .orange{
    color:#FF9406;
  }
  .qb-tabs{
    display:flex;
    align-items:center;
    height:2rem;
    width:100%;
    justify-content: space-around;
    .qt-item{
      position:relative;
      height:2rem;
      line-height:2rem;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      .qi-text{
        font-size:.5rem;
      }
      &.active{
        .qi-text{
          color:#0E84DD;
        }
      }
      &.active:after{
        position:absolute;
        content:"";
        display:block;
        width:12px;
        height:12px;
        background-color:#0E84DD;
        bottom:-6px;
        margin:0 auto;
        left:0;right:0;
        border-radius:50%;
      }
    }
  }
  .qh{
    padding:12.5px;
  }
  .q-head{
    display:flex;
    align-items:center;
    border-radius:5px;
    box-shadow: 0 3px 10px 2px rgba(40, 120, 255, 0.1), 0 8px 12px 1px rgba(0, 0, 0, 0.05);
    padding:6px;
    .qh-left{
      flex:1;
      display:flex;
      align-items:center;
      .ql-pic{
        width:4rem;
        height:4rem;
        border-radius:5px;
        background-color:aliceblue;
      }
      .ql-info{

        padding:0 6px;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        height:3rem;
      }
      .qi-name{
        font-size:.6rem;
        color:#212121;
        font-weight: 500;
      }
      .qi-status{
        padding:4px 6px;
        border-radius:4px;
        box-shadow:0 1px 5px #FF9406;
        font-size:.4rem;
        color:#fff;
        background-color:#FF9406;
        display:inline-block;

        text-align:center;
        &.stop{
          background-color:#DADADA;
          box-shadow:0 1px 5px #DADADA;
        }
      }
      .qi-phone{
        color:#999;
        font-size:.5rem;
      }
    }
  }
  .fr-icon{
    width:12px;
    height:12px;
    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACIklEQVR4Xu3bTWrCQBQH8DeoRygUlLroolcQCT2BimRd6Om66EYkeoK2tD1EF1pqoWdwzCsDCqHgBDIz70PrfhL/v2Rm3iQZA4G/0WjU7XQ6j4h4N5/PV4GHI29uQs44Ho+v2u32EwD0AeDLGJPNZrN1yDGp2zYG2Id/BYBu5U+rQ2gMkOd5HxFfAKD356qpQmgM4ELvEd4B4FIrQhCACz2dTq+NMe5OUIkQDKAdIQqAZoRoAFoRogLUIWy328FyudxQz/W+80UH8CEg4spam0lCSAKgCSEZgBaEpAAaEJIDSEcgAZCMQAYgFYEUQCICOYA0BBaACsIbAFxUKzXqYokNwIWeTCY3rVbrmROBFUACAjsAN4IIgDqEsiwHRVH8pFhFigGoQfgoyzJLgSAKgANBHAA1gkgASgSxAFQIogF8CACw3u12w6IovkNmB/EAdQjW2tvFYvHZFEEFQA3Cxlo7bIrwD9D01qFsd2zR5MaBk+8CvvAnPwh6lsvRSmOxYwBFeNeNRQL4HpTEXhmKA6B+SiQKgDq8qC7AEV4MAFd4EQCc4dkBuMOzAkgIzwYgJTwLwP7DSvZXYofFHGkdcOyrUur3gdWVLBmAxPBkXUBqeBIAyeGTA0gPnxRAQ/hkAFrCJwHQFD46gLbwUQF8W2ckfiYftRLUvG8ouBLUHD64C2gPHwRwCuGDAM5+66zTO+vN04dpJM/zHiI+IOK9xu3zv2m+lV+IP3yoAAAAAElFTkSuQmCC");
    background-repeat:no-repeat;
    background-size:12px 12px;
  }
</style>
