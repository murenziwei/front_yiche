<template>
  <div id="order">
    <topNav class="topNav">订单</topNav>
    <div class="nav">
      <ul @click="navCut($event)">
        <li data-index="0" :class="active == 0? 'active' : ''">全部</li>
        <li data-index="1" :class="active == 1? 'active' : ''">代付款</li>
        <li data-index="2" :class="active == 2? 'active' : ''">待发货</li>
        <li data-index="3" :class="active == 3? 'active' : ''">待收货</li>
        <li data-index="4" :class="active == 4? 'active' : ''">已完成</li>
      </ul>
    </div>
    <div class="order">
      <div class="orderList" @click="navigator" v-for="(v,i) in 10" :key="i">
        <div class="type">
          <span>订单号：</span>
          <span>13245678978</span>
          <span>代发货</span>
        </div>
        <div class="orderInfo">
          <img
            class="userimg"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569674206890&di=e3523ffed46324810b5a514cc3cad1d6&imgtype=0&src=http%3A%2F%2Fwww.itmop.com%2Fupload%2F2017-10%2F15077104718698774.jpg"
          />
          <div class="ordertxt">
            <span>奥尔非农afsonfi发萨尔偶发农三富哦萨尔分配节目泼洒解放SOEff</span>
            <div class="price">
              <span>￥1999</span>
              <span>x8</span>
            </div>
          </div>
        </div>
        <div class="Confirm-the-delivery">
          <!-- 代付款 -->
          <div class="wx">微信支付</div>
          <div class="zfb">支付宝支付</div>
          <div>取消订单</div>
          <!-- 代发货 -->
          <!-- <div>联系客服</div> -->
          <!-- 待收货 -->
          <!-- <div>确认收货</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from "@/components/header/head";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    topNav
  },
  activated() {
    this.active = this.$route.query.state || 0;
  },
  methods: {
    navCut(e) {
      this.active = +e.target.dataset.index;
    },
    navigator() {
      // 跳转订单详情
      this.$router.push("order/orderDetails");
    }
  }
};
</script>

<style scoped lang="less">
.topNav {
  width: 100%;
  background-color: #fff;
  position: fixed !important;
  top: 0;
  z-index: 99;
}
#order {
  padding-top: 3.8rem;
  height: 100%;
  background-color: #f7f7f7;
}
.order {
  background-color: #f7f7f7;
}
.nav {
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 1.8rem;
  ul {
    display: flex;
    color: #666;
    font-size: 0.6rem;
    li {
      text-align: center;
      padding-top: 0.48rem;
      padding-bottom: 0.96rem;
      display: block;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: all 1 ease-in-out;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -0.34rem;
        transition: all 1 ease-in-out;
      }
    }
    .active {
      font-weight: bold;
      color: #2a7aec;
      transition: all 1 ease-in-out;
      &::after {
        width: 0.68rem;
        height: 0.68rem;
        background-color: #2a7aec;
      }
    }
  }
}

.orderList {
  overflow: hidden;
  margin: 0.46rem auto;
  padding: 0 0.52rem;
  background-color: #fff;
  padding-bottom: 0.8rem;
  width: 14.08rem;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 0.24rem;
}

.type {
  padding-top: 0.88rem;
  padding-bottom: 0.36rem;
  font-size: 0.52rem;
  line-height: 0.52rem;
}

.type span:nth-of-type(3) {
  font-weight: normal;
  font-size: 0.52rem;
  color: #ff9500;
  float: right;
}

.orderInfo {
  display: flex;
}

.orderInfo img {
  width: 3.2rem;
  height: 3.2rem;
}

.ordertxt {
  flex: 1;
  padding: 0.32rem 0;
  padding-left: 0.4rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.ordertxt > span {
  overflow: hidden;
  -overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #212121;
  font-size: 0.56rem;
}

.price {
  display: flex;
  justify-content: space-between;
}

.price span:nth-of-type(1) {
  font-size: 0.56rem;
  font-weight: bold;
  color: rgba(207, 56, 41, 1);
}

.price span:nth-of-type(2) {
  font-size: 0.52rem;
  color: #666;
}

.Confirm-the-delivery {
  height: 1rem;
  margin-top: 0.64rem;
}
.Confirm-the-delivery div {
  // width: 3rem;
  padding: 0 0.5rem;
  height: 0.96rem;
  border: 1px solid #999;
  border-radius: 0.48rem;
  font-size: 0.52rem;
  color: #999;
  line-height: 0.96rem;
  text-align: center;
  background-color: #fff;
  float: right;
  margin-left: 0.4rem;
}
.Confirm-the-delivery .zfb {
  border: 1px solid #2a7aec;
  color: #2a7aec;
}
.Confirm-the-delivery .wx {
  border: 1px solid #1daf00;
  color: #1daf00;
}
</style>