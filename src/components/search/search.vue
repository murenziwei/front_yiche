<template>
  <div class="list">
    <ul class="list-wrap">
      <li v-for="item of 5" class="list-wrap-item">
        <div class="list-wrap-item-left">
          <p class="list-wrap-item-left-img">
            <img src="http://img2.imgtn.bdimg.com/it/u=884937065,4015868281&fm=11&gp=0.jpg" alt="">
          </p>
          <div class="list-wrap-item-left-text">
            <p class="list-wrap-item-left-text-title">东南汽修厂</p>
            <p class="list-wrap-item-left-text-desc">广州市天河大道北12号asdasdasdas送达大厦sdas</p>
            <p class="list-wrap-item-left-text-distance">距离您<span>293米</span></p>
          </div>
        </div>
        <div class="list-wrap-item-right">
          <p class="iconfont list-wrap-item-right-phone">&#xe724;</p>
          <p class="iconfont list-wrap-item-right-map">&#xe646;</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'searchList'
  }
</script>
<style scoped lang="less">

  .list {
    padding: 0 0.6rem;
    .list-wrap {
      .list-wrap-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        .list-wrap-item-left {
          flex: 1;
          display: flex;
          align-items: center;
          overflow: hidden;
          .list-wrap-item-left-img {
            width: 3.08rem;
            height: 3.08rem;
            border-radius: 0.16rem;
            margin-right: .5rem;
            background: red;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .list-wrap-item-left-text {
            flex: 1;
            font-size: 0.52rem;
            width: 100%;
            overflow: hidden;/*超出部分隐藏*/
            text-overflow:ellipsis;/* 超出部分显示省略号 */
            white-space: nowrap;
            .list-wrap-item-left-text-title {
              font-size: 0.68rem;
              font-weight: bold;
              padding: .3rem 0;
            }
            .list-wrap-item-left-text-desc{
              width: 100%;
              overflow: hidden;/*超出部分隐藏*/
              text-overflow:ellipsis;/* 超出部分显示省略号 */
              white-space: nowrap;
            }
            .list-wrap-item-left-text-distance {
              margin-top: 0.8rem;
              span {
                color: #ff9500;
              }
            }
          }
        }
        .list-wrap-item-right {
          width: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          color: #4f95fa;
          .list-wrap-item-right-phone {
            width: 1.68rem;
            height: 1.68rem;
            border-radius: 50%;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, .4);
            line-height: 1.68rem;
          }
          .list-wrap-item-right-map {
            width: 1.68rem;
            margin-top: .4rem;
          }
        }
      }
    }
  }

</style>
