<template>
  <div class="slide">

    <div ref="wrapper" class="slide-nav">
      <ul class="slide-nav-wrap">
        <li
          @click="bindChangeSwiper(index,item.cate_id)"
          :class="activeNum===index?'current':''"
          v-for="(item,index) of list"
          ref="item"
        >
          {{item.title}}
          <div v-show="activeNum===index" class="line"></div>
        </li>
      </ul>
    </div>

    <div class="container">
      <swiper :options="swiperOption" ref="mySwiperwrap">
        <!-- slides -->
        <swiper-slide :key="index" v-for="(item,index) of slides" class="swiper-wrap">
          <div v-for="val of item">
            <ul v-if="val.imgs.length===1" class="list">
              <li class="list-item">
                <div class="list-item-text">
                  <p>{{val.title}}</p>
                  <p class="people">{{val.total_views}}观看</p>
                </div>
                <div class="list-item-img">
                  <img :src="val.imgs[0]" alt="">
                </div>
              </li>
            </ul>

            <ul v-if="val.imgs.length>1 && val.imgs.length<4" class="desc">
              <li @click="bindDesc(val.article_id)" class="desc-item">
                <p>{{val.title}}</p>
                <ul class="desc-item-wrap">
                  <li v-for="img of val.imgs" class="desc-item-wrap-item">
                    <img :src="img" alt="">
                  </li>
                </ul>
              </li>
            </ul>
          </div>
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
        list: [],
        slides: [],
        activeNum: 0,
        currentId: '',
        swiperOption: {
          observeParents: true,
          observe: true,
          on: {
            slideChangeTransitionEnd: function () {
              this.activeNum = this.swiper.activeIndex;
              this.scroll.scrollToElement(this.$refs.item[this.activeNum], 300)
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
      this.getNavList()
    },
    methods: {
      getNavList() {
        this.api.get('/v1/article/category.do', {
          position: 1
        }).then(res => {
          this.list = res.data;
          this.getSlides()
        })
      },
      getSlides() {
        const arr = this.list.map(item => {
          return new Promise((resolve, reject) => {
            this.api.post('/v1/article.do', {
              cate_id: item.cate_id
            }).then(res => {
              resolve(res.data.data)
            })
          })
        })

        Promise.all(arr).then(res => {
          this.slides = res;
          console.log(this.slides)
        }).catch(err => {
          //console.log(err)
          this.$message.info(err.msg)
        })
      },
      bindDesc(id) {
        this.$router.push({
          name: 'description',
          query: {
            id
          }
        })
      },
      bindChangeSwiper(index, id) {
        this.activeNum = index;
        this.scroll.scrollToElement(this.$refs.item[index], 300);
        this.swiper.slideTo(index, 300, false)
      }
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

  .container {
    padding: 2px 0.6rem;
    box-sizing: border-box;
    //margin: 2px 0;
    .swiper-wrap {
      padding: 0 1px;
      box-sizing: border-box;
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
            .people {
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
      .desc {
        margin: 1rem 0;
        .desc-item {
          p {
            font-size: 0.64rem;
            font-weight: bold;
            padding: .4rem 0;
            line-height: .8rem;
          }
          .desc-item-wrap {
            margin: .2rem 0;
            display: flex;
            justify-content: space-between;
            .desc-item-wrap-item {
              width: 30%;
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

  }


</style>
