<template>
  <div class="binding">
    <head-nav>
      绑定手机
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
        <div class="input-item-title">邀请码</div>
        <div>
          <input v-model="info.inviteCode" placeholder="请输入邀请码（选填）" type="number">
        </div>
      </div>

      <div class="login">确定</div>
      <div class="protocol">
        <div class="iconfont radio">&#xe905</div>
        <div>已阅读并同意 <span @click.stop="bindProtocol" style="color: #ec8e2a;">《乙车网用户协议》</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import headNav from '@/components/header/head'

  export default {
    name: 'binding',
    data() {
      return {
        info: {
          code: '',
          phone: '',
          inviteCode: ''
        },
        str: '获取',
        timer: 60,
        str1: '',
      }
    },
    methods: {
      bindProtocol(){
        this.$router.push({
          name: 'protocol'
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

  .binding {
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
  }
</style>
