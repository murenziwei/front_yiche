<template>
  <div class="reset">
    <head-nav>
      重置密码
    </head-nav>

    <div class="input-wrap">
      <div class="input-item">
        <div class="input-item-title">手机号</div>
        <div>
          <input v-model="info.phone" placeholder="请输入您的手机号码" type="number">
        </div>
      </div>
      <div class="input-item">
        <div class="input-item-title">验证码</div>
        <div class="input-item-middle">
          <input v-model="info.code" placeholder="请输入验证码" type="number">
        </div>
        <div @click="getCode" class="get-code">
          {{str}}<span class="text">{{str1}}</span>
        </div>
      </div>
      <div class="input-item">
        <div class="input-item-title">登录密码</div>
        <div>
          <input v-model="info.oldPwd" placeholder="请输入新的登录密码" type="password">
        </div>
      </div>
      <div class="input-item">
        <div class="input-item-title">确认密码</div>
        <div>
          <input v-model="info.newPwd" placeholder="确认新的登录密码" type="password">
        </div>
      </div>

      <div @click="bindRest" class="login">确定</div>

    </div>
  </div>
</template>

<script>
  import headNav from '@/components/header/head'

  export default {
    name: 'reset',
    data() {
      return {
        info: {
          code: '',
          phone: '',
          oldPwd: '',
          newPwd: '',
        },
        str: '获取',
        timer: 60,
        str1: '',
      }
    },
    methods: {
      bindRest() {
        const info = this.info;
        this.api.post('/v1/user/forgetPassword.do', {
          phone: info.phone,
          code: info.code,
          password: info.oldPwd,
          en_password: info.newPwd
        }).then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.access_token);
          this.$message.info(res.msg);
          this.$router.push({
            name: 'index'
          })
        })
      },
      getCode() {
        if (this.str === '获取') {
          if (this.info.phone.length === 11) {
            timer();
            /*this.api.post('/system/checkMobile', {
              phone: this.info.phone
            }).then(res => {
              console.log(res)
            })*/
          } else {
            this.$message.info('手机不正确')
          }

        }
        let that = this;

        function timer() {
          setTimeout(() => {
            if (that.timer <= 0) {
              that.timer = 60;
              that.str = '获取验证码';
              that.str1 = '';
            } else {
              that.timer = --that.timer;
              that.str = that.timer;
              that.str1 = 's后重新获取';
              timer()
            }
          }, 1000)
        }

      }
    },
    components: {
      headNav
    }
  }
</script>

<style scoped lang="less">

  .reset {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: white;
    .input-wrap {
      padding: 0 1.4rem;
      .input-item {
        display: flex;
        align-items: center;
        color: #a2a2a2;
        font-size: 0.64rem;
        margin: 1.2rem 0;
        .input-item-title {
          width: 3rem;
        }
        .get-code {
          flex: 1;
          text-align: right;
          font-size: 0.64rem;
          color: #2a7aec;
        }
        .input-item-middle {
          width: 4rem;
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
    }
  }
</style>
