<template>
  <div id="orderDetails">
    <topNav class="topNav">订单详情</topNav>
    <div class="orderDetails">
      <div class="header">
        <img
          class="head-img"
          src="/static/images/xq-bg.png"
        />
        <div class="head-cont">
          <div class="head-txt">
            <div v-if="state==0">代发货</div>
            <div v-if="state==1">代收货</div>
            <div v-if="state==2">已完成</div>
            <div>恭喜您完成此笔订单</div>
          </div>
          <img v-if="state==2" class="head-icon" src="/static/images/yiwancheng.png" />
          <img v-if="state==1" class="head-icon" src="/static/images/daifahuo.png" />
          <img v-if="state==0" class="head-icon" src="/static/images/daishouhuo.png" />
        </div>
      </div>

      <div class="sele-address">
        <img class="address-icon" src="/static/images/dizhi.png" />
        <div class="address-txt" wx:if="code.address">
          <div>code.address.linkman code.address.phone</div>
          <div>code.address.address</div>
        </div>
        <div  v-if="!code.address" class="flex">请选择收货地址</div>
        <img class="goaddress" src="/static/images/right-jiantou.png" />
      </div>

      <div class="commodity-info">
        <div class="commodity-info-title">商品信息</div>
        <div class="orderInfo" v-for="(v,i) in 2" :key="i">
          <img
            class="orderimg"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569674206890&di=e3523ffed46324810b5a514cc3cad1d6&imgtype=0&src=http%3A%2F%2Fwww.itmop.com%2Fupload%2F2017-10%2F15077104718698774.jpg"
          />
          <div class="ordertxt">
            <span>code.goods_name</span>
            <div class="price">
              <span>￥code.unit_price</span>
              <span>xcode.nums</span>
            </div>
          </div>
        </div>
        <!-- <div class="orderInfo">
            <image class="orderimg" src="http://n.sinaimg.cn/sinacn08/710/w1920h1190/20180321/4fe5-fyskeuc9976378.jpg" mode="scaleToFill" />
            <div class="ordertxt">
                <span>香薰精油三项器香薰精油三项器香薰精油三项器香薰精油三项器香薰精油三项器香薰精油三项器香薰精油三项器香薰精油三项器</span>
                <div class="price">
                    <span>￥1388.00</span>
                    <span>x2</span>
                </div>
            </div>
        </div>-->
        <div class="expressage-price">
          <span>快递费</span>
          <span>￥code.express_price</span>
        </div>
        <div class="commodity-price">
          <span>商品总价</span>
          <span>￥code.total_price</span>
        </div>
        <div class="remark">
          <span>备注</span>
          <span v-if="code.remark">code.remark</span>
          <span v-if="!code.remark">--</span>
        </div>
      </div>

      <div class="order-info">
        <div class="order-info-title">订单信息</div>
        <div class="order-info-list">
          <span>订单号</span>
          <span>code.order_num</span>
        </div>
        <div class="order-info-list">
          <span>下单时间</span>
          <span>code.create_time</span>
        </div>
        <div class="order-info-list">
          <span>收货地址</span>
          <div class="address">
            <div>code.linkman code.phone</div>
            <div>code.address</div>
          </div>
        </div>
        <div class="order-info-list" v-if="state>=1">
          <span>发货时间</span>
          <span>code.send_time</span>
        </div>
        <div class="order-info-list" v-if="state>=2">
          <span>收货时间</span>
          <span>code.receive_time</span>
        </div>

        <div class="call-service">
          <img src="/static/images/kefu.png" />
          <span>联系客服</span>
          <button open-type="contact" bindcontact="handleContact">联系客服</button>
        </div>
      </div>
    </div>
    <!-- <mybutton class="mybutto" v-on:bindclick="bindclick(0)">确认收货</mybutton> -->
    <mybuttons class="pay">
      <div>微信支付</div>
      <div>支付宝支付</div>
    </mybuttons>
  </div>
</template>

<script>
import mybuttons from "@/components/conmon/buttons";
import mybutton from "@/components/conmon/button";
import topNav from "@/components/header/head";
export default {
  data() {
    return {
      state: 0,
      code: {}
    };
  },
  components: {
    mybuttons,
    mybutton,
    topNav
  }
};
</script>

<style scoped lang="less">
#orderDetails {
  padding-top: 1.8rem;
}
.topNav {
  width: 100%;
  background-color: #fff;
  position: fixed !important;
  top: 0;
  z-index: 999;
}
.mybutto {
  position: static;
  transform: none;
}
.orderDetails {
  background-color: #f7f7f7;
  position: relative;
  //   padding-bottom: 2.02rem;
}

.header {
  height: 4.12rem;
  overflow: hidden;
  position: relative;
}

.head-img {
  width: 100%;
  height: 4.12rem;
  position: absolute;
  z-index: 99;
}

.head-cont {
  display: flex;
  height: 4.12rem;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.8rem;
  padding-right: 0.96rem;
  position: relative;
  z-index: 100;
}

.head-txt {
  font-size: 0.64rem;
  line-height: 0.64rem;
  color: #fff;
}

.head-txt div:nth-of-type(2) {
  font-size: 0.56rem;
  line-height: 0.56rem;
  color: #fff;
  opacity: 0.6;
  margin-top: 0.44rem;
}

.head-icon {
  width: 1.44rem;
  height: 1.44rem;
}

.sele-address {
  display: flex;
  align-items: center;
  font-size: 0.56rem;
  line-height: 0.56rem;
  color: #666;
  padding: 0.7rem 0;
  background-color: #fff;
}

.address-icon {
  width: 0.64rem;
  height: 0.72rem;
  margin: 0 0.46rem;
}
.flex {
  flex: 1;
}
.address-txt {
  flex: 1;
}

.address-txt view:nth-of-type(1) {
  font-size: 0.64rem;
  line-height: 0.64rem;
  color: #212121;
  margin-bottom: 0.52rem;
}

.goaddress {
  width: 0.28rem;
  height: 0.46rem;
  margin-right: 0.5rem;
}

.commodity-info,
.order-info {
  width: 13.28rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.24rem;
  margin: 0.52rem auto;
  padding: 0 0.4rem;
  overflow: hidden;
}

.commodity-info-title {
  font-size: 0.56rem;
  line-height: 0.56rem;
  color: #666666;
  margin-top: 0.5rem;
  margin-bottom: 0.64rem;
}

.orderInfo {
  display: flex;
  margin: 0.4rem 0;
}

.orderimg {
  width: 3.04rem;
  height: 3.04rem;
  margin-right: 0.4rem;
}

.ordertxt {
  flex: 1;
  padding: 0.24rem 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.ordertxt > span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 0.56rem;
}

.price {
  font-size: 0.56rem;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price span:nth-of-type(2) {
  font-size: 0.48rem;
  color: #666;
}

.expressage-price,
.commodity-price,
.remark {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.88rem;
  border-top: 1px solid #f8f8f8;
  font-size: 0.6rem;
  color: #999;
}

.expressage-price span:nth-of-type(2) {
  font-size: 0.56rem;
  color: #000;
}

.commodity-price {
  color: #000;
}

.commodity-price span:nth-of-type(2) {
  font-size: 0.76rem;
  color: #f12d24;
}

.remark {
  height: auto;
  line-height: 0.6rem;
  padding: 0.64rem 0;
}

.remark span:nth-of-type(1) {
  width: 2.8rem;
}

.remark span:nth-of-type(2) {
  flex: 1;
  overflow: hidden;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  text-overflow: ellipsis;
}

.order-info-title {
  font-size: 0.56rem;
  line-height: 0.56rem;
  color: #666666;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
}

.order-info-list {
  display: flex;
  align-items: center;
  padding: 0.64rem 0;
  border-bottom: 1px solid #f8f8f8;
}

.order-info-list span:nth-of-type(1) {
  width: 2.8rem;
  color: #999;
  font-size: 0.6rem;
  line-height: 0.6rem;
  overflow: hidden;
}

.order-info-list span:nth-of-type(2) {
  flex: 1;
  color: #212121;
  font-size: 0.6rem;
  line-height: 0.6rem;
}

.address {
  flex: 1;
  font-size: 0.56rem;
}

.address div:nth-of-type(2) {
  color: #666;
}
.call-service {
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.call-service button {
  width: 100%;
  position: absolute;
  opacity: 0;
}
.call-service img {
  width: 0.76rem;
  height: 0.76rem;
  margin-right: 0.4rem;
}

.call-service span {
  font-size: 0.68rem;
  color: #353535;
  font-weight: 500;
}
</style>