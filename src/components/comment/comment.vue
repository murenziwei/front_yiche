<template>
  <div>
    <slot></slot>
    <div class="content">
      <textarea v-model="content" placeholder="请输入您要回复的内容" rows="4"></textarea>
    </div>

    <div class="img">
      <div class="img-item" v-for="item of fileList">
        <img :src="item.base64" alt="">
      </div>
      <div class="img-add">
        <input
          accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
          @change="bindImg"
          type="file"
          multiple
        />
        +
      </div>
    </div>

    <div class="footer">
      <div @click="bindComment" v-if="type==2" class="btn">
        确认
      </div>
      <div @click="bindComment" v-if="type==1" class="btn">
        立即咨询
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'comment',
    props: ['type'],
    data() {
      return {
        fileList: [],
        content: ''
      }
    },
    methods: {
      bindComment() {
        this.$emit('comment', {
          fileList: this.fileList,
          content: this.content
        })
      },
      bindImg(e) {
        if (e.target.files.length) {
          Array.from(e.target.files).forEach(item => {
            this.base64(item)
          })
        }
      },
      base64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.fileList.push({
            base64: reader.result,
            file: file
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #b3b3b3;
    font-size: 0.64rem;
  }

  input:-moz-placeholder, textarea:-moz-placeholder {
    color: #b3b3b3;
    font-size: 0.64rem;
  }

  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #b3b3b3;
    font-size: 0.64rem;
  }

  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color: #b3b3b3;
    font-size: 0.64rem;
  }

  .content {
    padding: 0 0.6rem;
    textarea {
      width: 100%;
      font-size: .6rem;
    }
  }

  .img {
    padding: 0 0.6rem;

    display: flex;
    flex-wrap: wrap;
    .img-item {
      width: 4rem;
      height: 4rem;
      border-radius: 0.16rem;
      margin-right: .4rem;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .img-add {
      width: 4rem;
      height: 4rem;
      border-radius: 0.16rem;
      border: 1px solid #ccc;
      font-size: 3rem;
      text-align: center;
      line-height: 4rem;
      position: relative;
      input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }

  .footer {
    margin-top: 3rem;
    .btn {
      font-size: 0.64rem;
      color: white;
      width: 90%;
      height: 1.6rem;
      line-height: 1.6rem;
      text-align: center;
      background: #2a7aec;
      border-radius: 0.16rem;
      margin: 0 auto;
    }
  }


</style>
