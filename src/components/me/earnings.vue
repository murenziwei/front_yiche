<template>
  <div id="earnings">
    <topNav class="topNav">收益中心</topNav>
    <div class="card">
      <div class="txt">
        <div class="money">1928.00</div>
        <span>可提现余额（元）</span>
      </div>
      <div class="but">立即提现</div>
    </div>
    <div class="nav">
      <ul @click="navCut($event)">
        <li data-index="0" :class="active == 0? 'active' : ''">我的好友</li>
        <li data-index="1" :class="active == 1? 'active' : ''">收益记录</li>
      </ul>
    </div>
    <div class="scllo">
      <div class="fun_list" v-for="(v,i) in 10" :key="i">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569674206890&di=e3523ffed46324810b5a514cc3cad1d6&imgtype=0&src=http%3A%2F%2Fwww.itmop.com%2Fupload%2F2017-10%2F15077104718698774.jpg"
        />
        <div class="txt">
          <div>迪丽热巴</div>
          <span>2019-09-10注册</span>
        </div>
        <div class="price">￥183.00</div>
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
  methods: {
    navCut(e) {
      this.active = +e.target.dataset.index;
    }
  }
};
</script>

<style scoped lang="less">
#earnings {
  padding-top: 1.8rem;
  display: flex;
  height: 100vh;
  flex-flow: column;
  box-sizing: border-box;
}
.topNav {
  width: 100%;
  background-color: #fff;
  position: fixed !important;
  top: 0;
  z-index: 99;
}
.card {
  width: 13.96rem;
  height: 6.08rem;
  background-color: red;
  background: url("/static/images/shouyi-bg.png");
  background-size: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .money {
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 0.86rem;
  }
  span {
    font-size: 0.64rem;
    line-height: 0.64rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    opacity: 0.6;
  }
  .txt {
    margin-left: 1.24rem;
  }
  .but {
    margin-right: 0.72rem;
    width: 3.16rem;
    height: 1.12rem;
    line-height: 1.12rem;
    background: rgba(228, 239, 255, 1);
    border-radius: 0.56rem;
    font-size: 0.6rem;
    font-weight: 400;
    text-align: center;
    color: rgba(42, 122, 236, 1);
  }
}
.nav {
  background-color: #fff;
  width: 100%;
  ul {
    display: flex;
    color: #666;
    font-size: 0.6rem;
    li {
      text-align: center;
      height: 2.4rem;
      line-height: 2.4rem;
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
.scllo {
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;
  .fun_list:nth-of-type(1){
    margin-top: .86rem;
  }
  .fun_list {
    height: 1.4rem;
    display: flex;
    align-items: center;
    margin: 1.22rem 0;
    img {
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      margin-left: 0.54rem;
      margin-right: 0.38rem;
    }
    .txt {
      flex: 1;
      height: 1.4rem;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      padding: 0.06rem 0;
      div {
        font-size: 0.56rem;
        font-weight: 400;
        color: rgba(3, 3, 3, 1);
      }
      span {
        font-size: 0.52rem;
        font-weight: 400;
        color: rgba(171, 171, 171, 1);
      }
    }
    .price {
      padding-right: .54rem;
      font-size: .64rem;
      font-weight: 500;
      color: rgba(33, 33, 33, 1);
    }
  }
}
</style>