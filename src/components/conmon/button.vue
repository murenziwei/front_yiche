<template>
  <div class="submit" v-bind:style="{ top:screenHeight+ 'px' }" @click="$emit('bindclick')">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mybutton",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight //屏幕高度
    };
  },
  mounted() {
    var _this = this;
    var screenHeight = this.screenHeight;
    window.onresize = function() {
      if (document.documentElement.clientHeight + 150 < screenHeight) return; //如果页面波动大于150px则底部不做改变
      // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
  },
  methods:{
  }
};
</script>

<style lang="less">
.submit {
  width: 100%;
  height: 2rem;
  background-color: #fff;
  box-shadow: 0px -1px 0px 0px rgba(229, 229, 229, 0.64);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  transform: translateY(-100%);
  div {
    width: 13.9rem;
    height: 1.76rem;
    background: rgba(42, 122, 236, 1);
    box-shadow: 0px 5px 15px 0px rgba(42, 122, 236, 0.38),
      0px 3px 20px 0px rgba(42, 122, 236, 0.22);
    border-radius: 0.16rem;
    font-size: 0.68rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 1.76rem;
    text-align: center;
  }
}
</style>