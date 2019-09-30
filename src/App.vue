<template>
  <div>
    <keep-alive :exclude="['description']">
      <router-view/>
    </keep-alive>
    <footer-nav v-if="$route.meta.isFooter"></footer-nav>
  </div>
</template>

<script>
  import footerNav from './components/footer/footerNav'

  export default {
    name: 'App',
    components: {
      footerNav
    }
  }
</script>

<style>
  body,html,#app{
    width: 100%;
    height: 100%;
  }
  input::-webkit-input-placeholder {
    font-size: 0.56rem;
    color: #c5c5c5;
  }
</style>
