<template>
  <div class="detail">
      <div>
          <div class="d-body">
              <div class="db-header">
                  请问你有手机吗？
              </div>
              <div class="db-bottom">
                  <div class="db-left">
                      2019-02-12
                  </div>
                  <div class="db-right">
                      2923人阅读
                  </div>
              </div>
          </div>
          <div class="html" v-html="`<h1>标题我最大</h1><p>我草你小风</p>`"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail{
    padding:10px;
}
.db-header{
    font-size:18px;
    font-weight:600;
    
}
.db-bottom{
    display:flex;
    align-items:center;
    justify-content: space-between;
    font-size:14px;
    color:#999;
    padding:10px 0;
    border-bottom:1px solid #eee;
}
.html{
    padding:10px 0;
}
</style>