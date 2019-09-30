<template>
  <ul class="nav">
    <li
      @click="bindPage(0)"
      class="nav-item"
      :class="num===0?'current':''"
    >
      <p class="iconfont icon">&#xe602;</p>
      <p>首页</p>
    </li>
    <li
      @click="bindPage(1)"
      :class="num===1?'current':''"
      class="nav-item">
      <p class="iconfont icon">&#xe70c;</p>
      <p>救助</p>
    </li>
    <li
      @click="bindPage(2)"
      :class="num===2?'current':''"
      class="nav-item">
      <p class="iconfont icon">&#xe61d;</p>
      <p>消息</p>
    </li>
    <li
      @click="bindPage(3)"
      :class="num===3?'current':''"
      class="nav-item">
      <p class="iconfont icon">&#xe6a9;</p>
      <p>购物车</p>
    </li>
    <li
      @click="bindPage(4)"
      :class="num===4?'current':''"
      class="nav-item">
      <p class="iconfont icon">&#xe601;</p>
      <p>我的</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'footerNav',
    data() {
      return {
        num: 0
      }
    },
    created(){
      this.routerfn(this.$route)
    },
    methods: {
      routerfn(to) {
        switch (to.name) {
          case "index":
            this.num = 0;
            break;
          case "1":
            this.num = 1;
            break;
          case "msg":
            this.num = 2;
            break;
          case "3":
            this.num = 3;
            break;
          case "4":
            this.num = 4;
            break;
        }
      },
      bindPage(num) {
        this.num = num;
        this.toPage[num]()
      }
    },
    computed: {
      toPage() {
        return {
          0: () => {
            this.$router.push({
              path: '/index',
            })
          },
          1: () => {
            this.$router.push({
              name: 'map',
            })
          },
          2: () => {
            this.$router.push({
              name: 'message',
            })
          },
          3: () => {
            this.$router.push({
              name: 'shopping',
            })
          },
          4: () => {
            this.$router.push({
              name: 'me',
            })
          }
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .current {
    color: #2a7aec;
  }

  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2rem;
    z-index: 999;
    background: white;
    border-top: 1px solid #d0d0d0;
    font-size: 0.44rem;
    color: #a8abaf;
    padding-top: .1rem;
    .nav-item {
      text-align: center;
      .icon {
        background: #bef2ff;
        width: 1rem;
        margin: 0 auto .2rem auto;
        border: 1px dashed #2a7aec;
        color: black;
        font-size: .8rem;
      }
      p {
        padding: .1rem 0;

      }


    }

  }
</style>
