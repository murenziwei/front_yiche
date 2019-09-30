<template>
  <div>
    <head-nav>
      我要询价
    </head-nav>
    <comments @comment="bindComment" type="1">
      <div class="title">
        <p>车架号：</p>
        <p>
          <input placeholder="请输入您的车架号" type="text">
        </p>
      </div>
    </comments>
  </div>
</template>

<script>
  import HeadNav from '@/components/header/head'
  import comments from '@/components/comment/comment'

  export default {
    name: 'inquiry',
    methods: {
      bindComment(data) {

      }
    },
    components: {
      HeadNav,
      comments
    },

  }
</script>

<style scoped>
  .title {
    display: flex;
    align-items: center;
    padding: .5rem 0.6rem;
    font-size: 0.64rem;
  }
</style>
