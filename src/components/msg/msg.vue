<template>
  <transition>
    <div class="message" :class="type" v-show="show">
      <div class="content">
        <span class="text">{{text}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'msg',
    props: {
      type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val)
//['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
      },
      text: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .message {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  .content{
    width: 5rem;
    border-radius: .5rem;
    background: rgba(0,0,0,.7);
    color: white;
    text-align: center;
    line-height: 1rem;
    font-size: .6rem;
    padding: .4rem;
  }


</style>
