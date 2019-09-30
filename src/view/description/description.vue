<template>
  <div>
    <head-nav>详情</head-nav>
    <div class="headers">
      <h1>{{content.title}}</h1>
      <div class="info">
        <p>{{content.created_at}}</p>
        <p>{{content.total_views}}人已阅读</p>
      </div>
    </div>

    <div v-html="content.content">

    </div>
  </div>
</template>

<script>
  import HeadNav from "../../components/header/head";

  export default {
    name: 'description',
    data() {
      return {
        content: ''
      }
    },
    mounted(){
      this.api.post('/v1/article/detail.do',{
        article_id: this.$route.query.id
      }).then(res=>{
        this.content=res.data
      })
    },
    components: {HeadNav}
  }
</script>

<style scoped lang="less">
  .headers {
    padding: 0 0.6rem;
    h1 {
      font-size: 0.68rem;
      padding: .4rem 0;
      font-weight: bold;
      line-height: .8rem;
    }
    .info {
      display: flex;
      justify-content: space-between;
      font-size: 0.52rem;
      padding: .4rem 0;
    }
  }
</style>
