<template>
  <el-container>
    <el-footer>
      <div class="footer">
        <div class="message">
          <el-row type="flex" justify="center">
            <el-col :span="7">
              <dl>
                <dt>咨询</dt>
                <dd
                  v-for="(item,index) in $store.getters.msgList.sort(compare)"
                  :key="index"
                ><span>{{item.name}}</span></dd>
              </dl>
              <div class="icon">
                <i class="fa fa-facebook my-icon" aria-hidden="true"></i>
                <i class="fa fa-twitter my-icon" aria-hidden="true"></i>
                <i class="fa fa-instagram my-icon" aria-hidden="true"></i>
                <i class="fa fa-pinterest my-icon" aria-hidden="true"></i>
                <i class="fa fa-youtube my-icon" aria-hidden="true"></i>
              </div>
            </el-col>
            <el-col :span="6">
              <dl>
                <dt>分类</dt>
                <dd v-for="(item,index) in $store.state.collectionsList" :key="index"><span>{{item.name}}</span></dd>
              </dl>
            </el-col>
            <el-col :span="8">
              <a class="btn" href="#">立即抢购</a>
            </el-col>
          </el-row>
        </div>
        <div class="brand">
          <h1>宠物酒店</h1>
          <span>| ©20 20 Powered by Shopify</span>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      ishImg: true
    };
  },
  methods: {
    compare(x, y) {
      const min = x.msgindex;
      const max = y.msgindex;
      if (min < max) {
        return -1;
      } else if (min > max) {
        return 1;
      } else {
        return 0;
      }
    },
    changeImg(index) {
      this.shareList[index].img = this.shareList[index].hImg;
    },
    changehImg(index) {
      this.shareList[index].img = this.shareList[index].nImg;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";
.footerFontColor(@color,@font) {
  font-size: @font;
  color: @color;
}

.my-icon {
  cursor: pointer;
  .footerFontColor(#49bcab, 22px);
  transition: all 1s;
  .margin(0,23px,0,0);
  &:hover {
    color: #000;
  }
}
.footer {
  max-width: 1319px;
  border-top: solid 1px #777;
  h1 {
    display: inline;
    font-size: 30px;
    font-weight: normal;
    line-height: 102px;
  .margin(0,0,0,5%);
  }
}
.message {
  max-width: 1319px;
  height: 495px;
  .margin(80px,0,0,0);
  dt {
    font-size: 30px;
  .margin(0,0,20px,0);
  }
  dd {
    span{
      font-weight: 700;
      cursor: pointer;
      padding-bottom: 4px;
      &:hover{
        border-bottom : solid 2px #49bcab ; 
      }
    }
    .footerFontColor(#49bcab, 16px);
    line-height: 40px;
  }
}
.icon {
  .margin(80px,0,0,0);
}
.share {
  display: block;
  float: left;
  width: 25px;
  height: 25px;
  .margin(20%,20px,0,0);
  img {
    width: 100%;
  }
}
.brand {
  border-top: solid 1px #777;
}
.btn {
  .btnStyle(170px, 46px);
}
</style>