<template>
  <div class="price">
    <head-nav>配件询价</head-nav>
    <div class="wrap">
      <ul class="content">
        <li @click="bindDesc" v-for="item of 6" class="content-item">
          <div class="content-item-title">
            <p>车架号：182992929020</p>
            <p class="status">待回复</p>
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
          <div class="content-footer">
            <div class="content-footer-title">最新回复：</div>
            <div class="content-footer-comment">您好，最新配件还有的，已帮您放进订单了，请核对后支付。</div>
          </div>

          <div class="content-btn">
            <div class="content-btn-immediately">立即回复</div>
            <div class="content-btn-look">查看订单</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import headNav from '@/components/header/head'

  export default {
    name: 'price',
    methods: {
      bindDesc() {
        this.$router.push({
          name: 'detail'
        })
      }
    },
    components: {
      headNav
    }
  }
</script>

<style scoped lang="less">

  .wrap {
    padding: 0 0.6rem;
    box-sizing: border-box;
    background: #f7f7f7;
    .content-item {
      padding: 0.6rem 0;
      background: white;
      margin-top: .5rem;
      .content-item-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.56rem;
        padding: 0.4rem 0;
        .status {
          font-size: 0.52rem;
          color: #ff9500;
        }
      }
      .content-item-comment {
        background: #f7f7f7;
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
      .content-footer {
        display: flex;
        font-size: 0.52rem;
        padding: 0.4rem 0;
        background: #f7f7f7;
        .content-footer-title {
          width: 2.6rem;
          font-weight: bold;
        }
        .content-footer-comment {
          flex: 1;
          color: #535353;
          line-height: .65rem;
        }
      }
      .content-btn {
        display: flex;
        justify-content: flex-end;
        margin-top: .5rem;
        div {
          width: 4rem;
          height: 1.36rem;
          border-radius: 0.16rem;
          font-size: 0.64rem;
          text-align: center;
          line-height: 1.36rem;
          color: white;
        }
        .content-btn-immediately {
          background: #2a7aec;
          box-shadow: 1px 1px 8px #2a7aec;
        }
        .content-btn-look {
          background: #ff9500;
          box-shadow: 1px 1px 8px #ff9500;
          margin-left: .5rem;
        }
      }
    }
  }
</style>
