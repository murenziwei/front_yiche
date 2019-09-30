<template>
  <div id="me">
    <div class="header">
      <div class="h-top">
        我的
        <img src="/static/images/shezhi.png" />
      </div>
      <div class="h-content">
        <div class="user-img">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569674206890&di=e3523ffed46324810b5a514cc3cad1d6&imgtype=0&src=http%3A%2F%2Fwww.itmop.com%2Fupload%2F2017-10%2F15077104718698774.jpg"
          />
        </div>

        <div class="user-name">江南修理厂</div>
      </div>
    </div>
    <div class="myorder">
      <div class="order-top">
        <span>我的订单</span>
        <span @click="gotoOrder(0)">更多 ></span>
      </div>
      <div class="order-content">
        <ul>
          <li @click="gotoOrder(1)">
            <img src="/static/images/order1.png" alt />
            <span>代付款</span>
          </li>
          <li @click="gotoOrder(2)">
            <img src="/static/images/order2.png" alt />
            <span>代发货</span>
          </li>
          <li @click="gotoOrder(3)">
            <img src="/static/images/order3.png" alt />
            <span>已发货</span>
          </li>
          <li @click="gotoOrder(4)">
            <img src="/static/images/order4.png" alt />
            <span>已完成</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="funList">
      <ul>
        <li @click="switcher('address')">
          <img class="orderimg" src="/static/images/me1.png" />
          <span>收货地址</span>
          <img class="orderimg" src="/static/images/right-jiantou.png" />
        </li>
        <li @click="switcher('me/earnings')">
          <img class="orderimg" src="/static/images/me2.png" />
          <span>收益中心</span>
          <img class="orderimg" src="/static/images/right-jiantou.png" />
        </li>
        <li>
          <img class="orderimg" src="/static/images/me3.png" />
          <span>在线客服</span>
          <img class="orderimg" src="/static/images/right-jiantou.png" />
        </li>
        <li @click="switcher('/invite')">
          <img class="orderimg" src="/static/images/me4.png" />
          <span>邀请好友</span>
          <img class="orderimg" src="/static/images/right-jiantou.png" />
        </li>
        <li @click="switcher('/about')">
          <img class="orderimg" src="/static/images/me5.png" />
          <span>关于乙车网</span>
          <img class="orderimg" src="/static/images/right-jiantou.png" />
        </li>
        <li @click="switcher('/repairing')">
          <img class="orderimg" src="/static/images/me6.png" />
          <span>汽修中心</span>
          <img class="orderimg" src="/static/images/right-jiantou.png" />
        </li>
      </ul>
    </div>
    <footerNav />
  </div>
</template>

<script>
import footerNav from "@/components/footer/footerNav";
export default {
  data() {
    return {};
  },
  methods: {
    // 路由跳转 参数为路径
    switcher(e) {
      this.$router.push(e);
    },
    gotoOrder(e) {
      this.$router.push("order?state=" + e);
    }
  },
  components: {
    footerNav
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 7.48rem;
    background: url("/static/images/wode-bg.png");
    background-size: 100%;
  .h-top {
    font-size: 0.76rem;
    position: relative;
    text-align: center;
    font-weight: 500;
    opacity: 0.99;
    padding-top: 0.48rem;
    padding-bottom: 1.14rem;
    color: #fff;
    img {
      position: absolute;
      right: 0.56rem;
      width: 0.72rem;
      height: 0.72rem;
    }
  }
  .h-content {
    text-align: center;
    font-size: 0.68rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    .user-img {
      width: 2.82rem;
      height: 2.82rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      margin-bottom: 0.24rem;
    }
    img {
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
    }
  }
}
.myorder {
  width: 13.92rem;
  height: 4.52rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 15px 0px rgba(212, 213, 213, 0.32);
  border-radius: 0.16rem;
  position: relative;
  top: -0.4rem;
  margin: 0 auto;
  .order-top {
    font-size: 0.56rem;
    font-weight: 500;
    color: rgba(46, 46, 46, 1);
    line-height: 0.56rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.44rem;
    padding-top: 0.46rem;
    span:nth-of-type(2) {
      font-size: 0.48rem;
      font-weight: 400;
      color: rgba(169, 172, 176, 1);
      line-height: 0.56rem;
    }
  }
  .order-content {
    margin-top: 0.9rem;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        span {
          font-size: 0.56rem;
          font-weight: 400;
          color: rgba(47, 52, 55, 1);
        }
        img {
          display: block;
          width: 1rem;
          height: 1rem;
          margin: 0 auto;
          margin-bottom: 0.4rem;
        }
      }
    }
  }
}
.funList {
  ul {
    padding-left: 0.74rem;
    padding-right: 0.6rem;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;

    border-bottom: 1px solid #eee;
    img:nth-of-type(1) {
      width: 0.8rem;
      height: 0.8rem;
    }
    span {
      padding-left: 0.28rem;
      flex: 1;
      font-size: 0.6rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
    img:nth-of-type(2) {
      width: 0.24rem;
      height: 0.42rem;
    }
  }
}
</style>
