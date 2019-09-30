<template>
  <div class="detail">
    <head-nav>询价详情</head-nav>

    <div class="headers">
      <div class="header-left">
        <p>车架号：1928292020011</p>
        <p>下单时间：2018-12-22</p>
      </div>
      <div class="header-right">
        已下单
      </div>
    </div>

    <ul class="comment">
      <li v-for="item of 5" class="comment-item">
        <div class="comment-item-title">
          <div class="comment-item-user">
            <p class="comment-item-user-img">
              <img src="http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg" alt="">
            </p>
            <p>名字</p>
          </div>
          <p>2019-09-10 09:20:18</p>
        </div>
        <div class="content-item-comment">
          <p>请问最新的配件还有吗？</p>
          <ul class="content-item-comment-wrap">
            <li class="content-item-comment-img" v-for="item of 5">
              <div>
                <img src="http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg" alt="">
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>


    <div @click="bindReply" class="btn">
      <div>立即回复</div>
    </div>
  </div>
</template>

<script>
  import headNav from '@/components/header/head'

  export default {
    name: 'detail',
    components: {
      headNav
    },
    methods: {
      bindReply() {
        this.$router.push({
          name: 'reply'
        })
      }
    }
  }
</script>

<style scoped lang="less">

  .detail {

    .headers {
      padding: .7rem 0.6rem;
      background: #2e7ff2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-left {
        font-size: 0.6rem;
        color: #c8dfff;
        p {
          padding: 0.3rem 0;
        }
      }
      .header-right {
        font-size: 0.6rem;
        color: white;
        padding: 0.3rem 0.7rem;
        border: 1px solid white;
        border-radius: .1rem;
      }
    }

    .comment {
      padding: 0 0.6rem;
      margin: .8rem 0;
      .comment-item {
        margin-top: .6rem;
        .comment-item-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.52rem;
          color: #aaaaaa;
          .comment-item-user {
            display: flex;
            align-items: center;
            font-size: 0.56rem;
            color: #2a7aec;
            .comment-item-user-img {
              width: 1.4rem;
              height: 1.4rem;
              border-radius: 50%;
              overflow: hidden;
              margin-right: .4rem;
              background: red;
              img {
                width: 100%;
              }
            }
          }
        }
        .content-item-comment {
          p {
            font-size: 0.68rem;
            font-weight: bold;
            padding: 0.4rem 0;
          }
          .content-item-comment-wrap {
            display: flex;
            flex-wrap: wrap;
            .content-item-comment-img {
              width: 33.33333%;
              margin: .2rem 0;
              div {
                width: 3.96rem;
                height: 3.96rem;
                border-radius: 0.16rem;
                background: red;
                overflow: hidden;
                margin: 0 auto;
                img {
                  width: 100%;
                }
              }

            }
          }
        }
      }
    }

    .btn {
      position: fixed;
      bottom: .5rem;
      width: 100%;
      div {
        font-size: 0.64rem;
        color: white;
        width: 90%;
        height: 1.6rem;
        line-height: 1.6rem;
        text-align: center;
        background: #2a7aec;
        border-radius: 0.16rem;
        margin: 0 auto;
      }
    }
  }

</style>
