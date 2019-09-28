<template>
  <div>
    <div class="header">
      <p>登陆</p>
      <div @click="bindRegister" class="back iconfont">注册</div>
    </div>

    <div class="logo">
      <img src="@/assets/logo.png" alt="">
    </div>

    <div class="input-wrap">
      <div class="input-item">
        <div class="input-item-title">手机号</div>
        <div>
          <input v-model="info.phone" placeholder="请输入您的手机号码" type="number">
        </div>
      </div>
      <div class="input-item">
        <div class="input-item-title">密码</div>
        <div>
          <input v-model="info.pwd" placeholder="请输入您的手机号码" type="password">
        </div>
      </div>

      <div class="login">登陆</div>
      <div class="protocol">
        <div class="iconfont radio">&#xe905</div>
        <div>已阅读并同意 <span @click.stop="bindProtocol" style="color: #ec8e2a;">《乙车网用户协议》</span></div>
      </div>
    </div>


    <div class="auth">
      <div class="iconfont icon">&#xe70b;</div>
      <div>微信登陆</div>
    </div>

    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import {mapAction, mapState} from 'vuex'

  import headNav from '@/components/header/head'

  export default {
    name: 'login',
    data() {
      return {
        info: {
          phone: '',
          pwd: ''
        }
      }
    },
    mounted() {

    },
    methods:{
      bindProtocol(){
        this.$router.push({
          name: 'protocol'
        })
      },
      bindRegister(){
        this.$router.push({
          name: 'register'
        })
      }
    },
    components: {
      headNav
    }
  }
</script>

<style scoped lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(400px);
  }

  .header {
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    font-size: 0.76rem;
    position: relative;
    .back {
      position: absolute;
      right: 0.4rem;
      height: 100%;
      top: 0;
      color: #567aff;
      font-size: 0.6rem;
    }
  }

  .logo {
    width: 60%;
    margin: 0.8rem auto;
    img {
      width: 100%;
    }
  }

  .input-wrap {
    padding: 0 1.4rem;
    .input-item {
      display: flex;
      align-items: center;
      color: #a2a2a2;
      font-size: 0.64rem;
      margin: 1.2rem 0;
      .input-item-title {
        width: 2.4rem;
      }
    }
    .login {
      width: 100%;
      height: 1.76rem;
      border-radius: 8px;
      background: #2a7aec;
      text-align: center;
      line-height: 1.76rem;
      color: white;
      font-size: 0.64rem;
      box-shadow: 1px 1px 5px rgba(42, 122, 236, .5);
    }
    .protocol {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: .5rem;
      font-size: 0.52rem;
      .radio {
        margin-right: .4rem;
        color: #2a7aec;
      }
    }
  }

  .auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.52rem;
    color: #a2a2a2;
    margin-top: 5rem;
    .icon {
      width: 2rem;
      height: 2rem;
      margin-bottom: .5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px dashed #3699ff;

    }
  }

</style>
