<template>
  <div id="editaddress">
    <topNav class="topNav">{{state==0?'编辑地址':'新增地址'}}</topNav>
    <div class="editAddress">
      <div class="editoradd-list">
        <div class="field-name">收货人</div>
        <div class="field-content">
          <input data-index="0" v-model="code.linkman" placeholder="请输入收货人" />
        </div>
      </div>
      <div class="editoradd-list">
        <div class="field-name">联系方式</div>
        <div class="field-content">
          <input
            data-index="1"
            type="number"
            maxlength="11"
            v-model="code.phone"
            placeholder="请输入联系方式"
          />
        </div>
      </div>
      <div class="editoradd-list">
        <div class="field-name">地区</div>
        <div class="field-content">
          <input placeholder="例：广州市白云区" />
        </div>
      </div>
      <div class="editoradd-list">
        <div class="field-name">详细地址</div>
        <div class="field-content">
          <textarea maxlength="50" v-model="code.address" placeholder="请输入详细地址" />
        </div>
      </div>
      <div class="default" v-bind:class="{ 'go' : active }">
        <div>默认收货地址</div>
        <div class="switch" @click="oncCheckbox">
          <div class="circle"></div>
        </div>
      </div>
      <mybutton v-on:bindclick="bindclick(0)">新增地址</mybutton>
    </div>
  </div>
</template>

<script>
import topNav from "@/components/header/head";
import mybutton from "@/components/conmon/button";
export default {
  data() {
    return {
      active: false,
      state: 0,
      code: {},
      region: []
    };
  },
  components: {
    topNav,
    mybutton
  },
  mounted(){
      console.log(this.$route.query) 
      this.state=this.$route.query.id
  },
  methods: {
    // 新增地址
    bindclick() {
        // 数据准备
        console.log(this.code)
    },
    // 选中默认收货地址
    oncCheckbox(){
        this.active=!this.active
    }
  }
};
</script>

<style scoped>
.topNav {
  width: 100%;
  background-color: #fff;
  position: fixed !important;
  top: 0;
  z-index: 99;
}
#editAddress {
  height: 100%;
  background-color: #f8f8f8;
  padding-top: 1.8rem;
}

.editoradd-list,
.default {
  display: flex;
  align-items: center;
  height: 1.8rem;
  border-bottom: 1px solid #f8f8f8;
  background-color: #fff;
}

.field-name {
  width: 2.9rem;
  padding-left: 0.6rem;
  font-size: 0.6rem;
  line-height: 0.6rem;
  color: #666;
}

.field-content {
  flex: 1;
  overflow: hidden;
}

input {
    display: block;
  font-size: 0.6rem;
  padding: 0;
  margin: 0;
  height: 1rem;
  line-height: 1.1rem;
  width: 100%;
  /* border: 1px solid red; */
}

.editoradd-list:nth-of-type(4) {
  padding: 0;
  align-items: initial;
  height: auto;
  padding: 0;
  margin: 0;
  padding-top: 0.7rem;
}

textarea {
  font-size: 0.6rem;
  display: block;
  width: 100%;
  height: 2.2rem;
  /* padding: 0; */
  /* margin: 0; */
  /* text-indent: 0; */
  /* line-height: 0; */
  /* position: relative;
  left: -0.2rem; */
}

.default {
  height: 2rem;
  margin: 0.4rem 0;
  justify-content: space-between;
  padding: 0 0.6rem;
  font-size: 0.6rem;
  color: #666;
}

.switch {
  width: 2.08rem;
  height: 1.12rem;
  background-color: #efefef;
  border-radius: 0.56rem;
}

.circle {
  width: 0.96rem;
  height: 0.96rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: -4px 0px 10px 0px rgba(42,122,236,0.56);
  border-radius: 0.48rem;
  position: relative;
  top: 0.08rem;
  left: 0.08rem;
  transition: all 0.3s ease-in-out;
}
.go .circle {
  left: 1.08rem;
}
.go .switch {
  background: #2A7AEC;
}

.del {
  height: 2rem;
  line-height: 2rem;
  background-color: #fff;
  font-size: 0.6rem;
  color: #2f3437;
  text-align: center;
}
</style>