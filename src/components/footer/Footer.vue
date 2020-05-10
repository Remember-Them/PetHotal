<template>
  <el-container>
    <el-footer>
      <div class="footer">
        <div class="message">
          <el-row type="flex" justify="center">
            <el-col :span="7">
              <dl>
                <dt>咨询</dt>
                <dd v-for="(item,index) in $store.getters.msgList.sort(compare)" :key="index">
                  <span>{{item.name}}</span>
                </dd>
              </dl>
              <div class="icon">
                <i class="fa fa-facebook my-icon" aria-hidden="true"></i>
                <i class="fa fa-twitter my-icon" aria-hidden="true"></i>
                <i class="fa fa-instagram my-icon" aria-hidden="true"></i>
                <i class="fa fa-pinterest my-icon" aria-hidden="true"></i>
                <i class="fa fa-youtube my-icon" aria-hidden="true"></i>
              </div>
            </el-col>
            <el-col :span="7">
              <dl>
                <dt>分类</dt>
                <dd v-for="(item,index) in $store.state.collectionsList" :key="index">
                  <span>{{item.name}}</span>
                </dd>
              </dl>
            </el-col>
            <el-col :span="7">
              <dt>通讯</dt>
              <p>订阅Petrocope邮件列表，以接收有关新到货，特别优惠和其他折扣信息的更新。</p>
              <input type="email" placeholder="输入你的电子邮箱" />
              <a class="btn" href="#">立即抢购</a>
            </el-col>
          </el-row>
        </div>
        <div class="brand">
          <h1>宠物酒店</h1>|
          <span class="brand-num">©2020</span>
          <span class="brand-support">Powered by Shopify</span>
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

.footer {
  max-width: 1319px;
  border-top: solid 1px #777;
}
.message {
  max-width: 1319px;
  height: 495px;
  margin-top: 80px;
  dt {
    font-size: 30px;
    margin-bottom: 20px;
  }
  dd {
    span {
      font-weight: 700;
      cursor: pointer;
      padding-bottom: 4px;
      &:hover {
        border-bottom: solid 2px #49bcab;
      }
    }
    .footerFontColor(#49bcab, 16px);
    line-height: 40px;
  }
  p {
    .footerFontColor(#777, 14px);
  }
  input {
    .widHei(380px, 45px);
    overflow: hidden;
    border: solid 1px #f5f5f5;
    border-radius: 5%;
    margin: 25px 0 20px 0;
  }
}
.icon {
  margin-top: 80px;
  .my-icon {
    cursor: pointer;
    .footerFontColor(#49bcab, 22px);
    transition: all 1s;
    margin-right: 23px;
    &:hover {
      color: #000;
    }
  }
}
.brand {
  border-top: solid 1px #777;
  h1 {
    display: inline;
    font-size: 30px;
    font-weight: normal;
    line-height: 102px;
    margin: 0px 2% 0 5%;
  }
  .brand-num {
    margin-left: 1%;
    .footerFontColor(#777, 12px);
  }
  .brand-support {
    .footerFontColor(#373232, 12px);
    cursor: pointer;
    transition: all 1s;
    &:hover {
      color: #49bcab;
    }
  }
}
.btn {
  .btnStyle(170px, 46px);
}
</style>