<template>
  <div>
    <head-nav>搜索</head-nav>

    <div class="search">
      <div class="search-left">
        <input v-model="content" placeholder="请输入想要搜索的内容" type="text">
        <div class="iconfont icon">&#xe642;</div>
      </div>
      <div class="search-right">
        取消
      </div>
    </div>
    <search-lists></search-lists>

  </div>
</template>

<script>

  import HeadNav from "../../components/header/head";

  import searchLists from '@/components/search/search'

  export default {
    name: 'searchList',
    data() {
      return {
        content: ''
      }
    },
    components: {
      HeadNav,
      searchLists
    }
  }
</script>

<style scoped lang="less">

  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.6rem;
    height: 1.3rem;
    .search-left {
      flex: 1;
      position: relative;
      height: 100%;
      line-height: 1.3rem;
      border-radius: 0.62rem;
      overflow: hidden;
      background: #f5f6f7;
      padding-left: .4rem;
      input {
        width: 100%;
        height: 100%;
        background: #f5f6f7;
      }
      .icon {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 2rem;
        text-align: center;
      }
    }
    .search-right {
      width: 1.6rem;
      text-align: right;
      font-size: 0.52rem;
    }
  }
</style>
