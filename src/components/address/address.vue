<template>
  <div id="address">
    <topNav class="topNav">收货地址</topNav>
    <div class="selectAddress">
      <div class="addressList" v-for="(v,i) in 3" :key="i" @click="selectAddress">
        <div class="userAddress">
          <div class="user">
            <span>迪丽热巴</span>
            <span>12345678978</span>
          </div>
          <div class="addressinfo">广东省广州市广东省广州市广东省广州市广东省广州市广东省广州市广东省广州市</div>
          <div class="default" v-if="i==0">默认</div>
        </div>
        <div class="compile" @click.stop="navigator(1)">编辑</div>
        <div class="delete" @click.stop="addressdel">删除</div>
      </div>
    </div>
    <mybutton v-on:bindclick="bindclick(0)">新增地址</mybutton>
  </div>
</template>

<script>
import topNav from "@/components/header/head";
import mybutton from "@/components/conmon/button";
export default {
  name: "addresslist",
  data() {
    return {
      show: true
    };
  },
  components: {
    topNav,
    mybutton
  },
  methods: {
    selectAddress() {
      console.log("选择此项地址");
    },
    navigator(e) {
      console.log("去编辑");
      this.$router.push("address/editaddress?id=" + e);
    },
    addressdel() {
      console.log("去删除");
      this.$dialog.confirm({
        title: "标题",
        message: "弹窗内容",

        beforeClose(e, done) {
          done();
          if (e == "overlay") {
            console.log("用户点击蒙层");
          }
          if (e == "confirm") {
            console.log("用户点击确定");
          }
          if (e == "cancel") {
            console.log("用户点击取消");
          }
        },
        closeOnClickOverlay: true,
        closeOnPopstate: true
      });
    },
    bindclick(e) {
      console.log("新增地址");
      this.$router.push("address/editAddress?id=" + e);
    }
  }
};
</script>

<style scoped lang="less">
#address {
  height: 100%;
  background-color: #f8f8f8;
}
.topNav {
  width: 100%;
  background-color: #fff;
  position: absolute !important;
}
.selectAddress {
  //   height: 100vh;
  //   box-sizing: border-box;

  padding-top: 1.8rem;
  padding-bottom: 2rem;
  background-color: #f8f8f8;
}

.addressList {
  margin-bottom: 0.4rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0.64rem 0.5rem;
}

.userAddress {
  flex: 1;
}
.user {
  margin-bottom: 0.16rem;
}
.user span:nth-of-type(1) {
  font-size: 0.6rem;
  line-height: 0.64rem;
  font-weight: bold;
  padding-right: 0.56rem;
}

.user span:nth-of-type(2) {
  font-size: 0.56rem;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}

.addressinfo {
  font-size: 0.56rem;
}

.default {
  width: 1.92rem;
  height: 0.84rem;
  line-height: 0.84rem;
  background: rgba(255, 149, 0, 1);
  border-radius: 0.08rem;
  font-size: 0.52rem;
  color: #fff;
  text-align: center;
  margin-top: 0.56rem;
}

.compile,
.delete {
  font-size: 0.52rem;
  margin-left: 0.82rem;
  color: #888;
}
</style>
