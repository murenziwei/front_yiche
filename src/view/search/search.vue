<template>
  <div class="search">
    <div class="header">
      <p>附近修理厂</p>
      <p @click="bindSearch" class="iconfont icon">&#xe642;</p>
    </div>

    <div class="location-wrap">
      <div class="location">
        <div class="iconfont location-icon">&#xe604;</div>
        <div>广州市天河大道北12号</div>
      </div>
    </div>
    <search-list></search-list>
  </div>
</template>

<script>
  import searchList from '@/components/search/search'

  export default {
    name: 'search',
    components: {
      searchList
    },
    methods: {
      bindSearch() {
        this.$router.push({
          name: 'searchList'
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .search {
    .header {
      font-size: 0.76rem;
      height: 2rem;
      text-align: center;
      position: relative;
      line-height: 2rem;
      .icon {
        position: absolute;
        width: 2rem;
        height: 100%;
        top: 0;
        right: 0;
      }
    }
    .location-wrap {
      padding: 0 0.5rem;
      margin: .5rem 0;
      .location {
        display: flex;
        align-items: center;
        color: #535353;
        font-size: 0.52rem;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, .3);
        padding: .4rem .2rem;
        .location-icon {
          color: #3e85eb;
          margin-right: .2rem;
        }
      }
    }

  }

</style>
