<template>
  <div class="protocol">
    <head-nav>
      注册协议
    </head-nav>
    <div v-html="html">

    </div>
  </div>
</template>
<script>
  import headNav from '@/components/header/head'

  export default {
    name: 'protocol',
    data() {
      return {
        html: '<a href="www.baidu.com">1312312</a>'
      }
    },
    components: {
      headNav
    }
  }
</script>
<style scoped lang="less">
  .protocol {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: white;
  }
</style>
