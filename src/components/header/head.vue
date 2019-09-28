<template>
  <div class="header">
    <slot></slot>
    <div @click="back" class="back iconfont">&#xe66b;</div>
  </div>
</template>
<script>

  export default {
    name: 'headNav',
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">

  .header {
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    font-size: 0.76rem;
    position: relative;
    .back {
      position: absolute;
      left: 0.4rem;
      height: 100%;
      top: 0;
    }

  }
</style>
