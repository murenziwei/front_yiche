<template>
  <div class="wrap">
    <div class="header">
      <swiper :options="swiperOption" ref="mySwiperwrap">
        <!-- slides -->
        <swiper-slide :key="index" v-for="(item,index) of imgUrls" class="item-img">
          <img :src="item" alt="">
        </swiper-slide>
      </swiper>

      <div class="search">
        <div class="search-input">
          <div class="iconfont">
            &#xe642;
          </div>
          <div>
            <input placeholder="搜索修理厂" type="text">
          </div>
        </div>
      </div>
      <div class='dots-wrap'>
        <div class="dots">
          <div
            :class="activeNum===index?'current-dot':''"
            v-for="(item,index) of imgUrls">
          </div>
        </div>
      </div>
    </div>


    <div class="content">
      <div class="option">
        <div class="option-item">
          <div class="iconfont icon">&#xea8b;</div>
          <div>配件咨询</div>
        </div>
        <div class="option-item">
          <div class="iconfont icon">&#xea36;</div>
          <div>附近修理厂</div>
        </div>
        <div class="option-item">
          <div class="iconfont icon">&#xe68e;</div>
          <div>零件抢购</div>
        </div>
        <div class="option-item">
          <div class="iconfont icon">&#xe600;</div>
          <div>汽配大世界</div>
        </div>
        <div class="option-item">
          <div class="iconfont icon">&#xe611;</div>
          <div>敬请期待</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <slide></slide>
    </div>
  </div>
</template>

<script>
  import slide from './components/slide'
  export default {
    name: 'index',
    data() {
      return {
        imgUrls: [
          'http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg',
          'http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg',
          'http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg',
        ],
        activeNum: 0,
        swiperOption: {
          observeParents: true,
          observe: true,
          on: {
            slideChangeTransitionEnd: function () {
              this.activeNum = this.swiper.activeIndex;
            }.bind(this)
          },
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperwrap.swiper
      }
    },
    components:{
      slide
    }
  }
</script>

<style scoped lang="less">
  .current-dot {
    width: 0.7rem !important;
    height: 0.16rem !important;
    background: white !important;
  }

  .header {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    .search {
      z-index: 99;
      position: absolute;
      top: 1rem;
      width: 100%;
      height: 1.4rem;
      .search-input {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        border-radius: 0.16rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        input {
          text-align: center;
        }
      }
    }
    .dots-wrap {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.8rem;
      display: flex;
      justify-content: center;
      z-index: 99;
      .dots {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        div {
          margin: 0 0.2rem;
          width: 0.32rem;
          height: 0.16rem;
          border-radius: 0.08rem;
          background: rgba(255, 255, 255, .5);
          transition: all .3s;
        }
      }

    }
  }

  .content{
    padding: 0 0.6rem;
    .option {
      display: flex;
      justify-content: space-between;
      font-size: 0.48rem;
      text-align: center;
      margin: 1rem 0;
      .option-item {
        .icon {
          width: 1.14rem;
          height: 1.14rem;
          border: 1px dashed #3699ff;
          background: rgba(22,208,255,.5);
          margin: 0 auto;
          line-height: 1.14rem;
          font-size: 1rem;
          margin-bottom: .3rem;
          color: #2a7aec;
        }
      }

    }
  }



</style>
