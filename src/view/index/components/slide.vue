<template>
  <div class="slide">

    <div ref="wrapper" class="slide-nav">
      <ul class="slide-nav-wrap">
        <li
          :class="activeNum===index?'current':''"
          v-for="(item,index) of list"
        >
          推荐个案是
          <div v-show="activeNum===index" class="line"></div>
        </li>
      </ul>
    </div>

    <div class="container">
      <swiper :options="swiperOption" ref="mySwiperwrap">
        <!-- slides -->
        <swiper-slide :key="index" v-for="(item,index) of list" class="swiper-wrap">
          <ul class="list">
            <li v-for="item of 3" class="list-item">
              <div class="list-item-text">
                <p>专业汽车服务品牌，立足出行服 务,构建智慧生活平台？</p>
                <p class="people">19299观看</p>
              </div>
              <div class="list-item-img">
                <img src="http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg" alt="">
              </div>
            </li>
          </ul>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'slide',
    data() {
      return {
        list: [1, 1, 1, 1, 1, 1],
        activeNum: 0,
        swiperOption: {
          observeParents: true,
          observe: true,
          on: {
            slideChangeTransitionEnd: function () {
              this.activeNum = this.swiper.activeIndex;
            }.bind(this),
          },
        },
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        scrollY: false,
        click: true
      });
      console.log(this.scroll)
      console.log(this.swiper)
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperwrap.swiper
      }
    },
  }
</script>

<style scoped lang="less">
  .current {
    color: #212121;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .slide-nav {
    position: relative;
    height: 1.8rem;

    .slide-nav-wrap {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      text-align: center;
      line-height: 1.5rem;
      li {
        width: 4rem;
        font-size: 0.6rem;
        color: #353535;

        .line {
          height: .2rem;
          width: 1rem;
          background: #2a7aec;
          margin: 0 auto;
          border-radius: .3rem;
        }
      }
    }
  }

  .container{
    padding: 2px 0.6rem;
    box-sizing: border-box;
    //margin: 2px 0;
    .swiper-wrap{
      padding: 0 1px;box-sizing: border-box;
      .list {
        .list-item {
          display: flex;
          justify-content: space-between;
          margin: 0.6rem 0;
          .list-item-text {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 0.64rem;
            font-weight: bold;
            .people{
              color: #a2a2a2;
              font-size: 0.6rem;
              font-weight: normal;
            }
          }
          .list-item-img {
            width: 4.36rem;
            height: 3.28rem;
            border-radius: 0.16rem;
            overflow: hidden;
            background: red;
            img {
              width: 100%;
            }
          }
        }
      }
    }

  }


</style>
