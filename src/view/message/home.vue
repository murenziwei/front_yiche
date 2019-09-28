<template>
  <div class="home" :style="{height:screen.height+'px'}">
      <router-view />
  </div>
</template>

<script>
export default {
    data() {
        const screen=window.screen;
        return {
            screen
        }
    }
}
</script>

<style scoped>
</style>