<template>
    <div>
      <div v-html="html"></div>
    </div>
</template>

<script>
    export default {
        name: "about",
        data(){
          return {
            html:`<h1>欧科技</h1>`
          }
        }
    }
</script>

<style scoped>

</style>
