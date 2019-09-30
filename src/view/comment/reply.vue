<template>
  <div>
    <head-nav>
      回复
    </head-nav>
    <comments @comment="bindComment" type="2"></comments>
  </div>
</template>

<script>
  import headNav from '@/components/header/head'
  import comments from '@/components/comment/comment'

  export default {
    name: 'comment',
    methods: {
      bindComment(data) {

      }
    },
    components: {
      headNav,
      comments
    }
  }
</script>

<style scoped lang="less">


</style>
