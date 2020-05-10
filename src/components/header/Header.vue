<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <a class="contact_phone" href="tel:176-3364-0299">
            <span>电话:</span>17633640299
          </a>
          <el-button type="text" class="el-search" @click="open"></el-button>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple-light">
          <a class="header_logo" href="#">
            <img
              src="//cdn.shopify.com/s/files/1/0269/6694/9975/files/logo_210x100_crop_center@2x.png?v=1586263241"
              alt="Pets"
              style="max-width: 210px"
            />
          </a>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple right">
          <span class="right-wishlist">收藏夹</span>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link right-language">
              地区
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>USA</el-dropdown-item>
              <el-dropdown-item>China</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="right-user">用户</span>
          <div class="right-car" slot="reference">
            <span id="cart_items" class="header_cart_items">1</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <nav>
      <div class="nav-content">
        <router-link
          tag="dl"
          :to="`/${item.class}`"
          v-for="(item,index) in $store.getters.navList"
          :class="item.class"
          :key="index"
        >{{item.name}}</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: "请输入搜索内容",
        dangerouslyUseHTMLString: true,
        message: h("p", null, [
          h("input", { class: "i-search" }),
          h("button", { class: "b-search" })
        ]),
        customClass: "search",
        showCancelButton: true
      });
    }
  }
};
</script>

<style lang="less" scoped>
.bgStyle(@url,@size) {
  background: url("~@/assets/img/@{url}") no-repeat;
  background-size: @size;
  width: @size;
  height: @size;
}
.widHei(@width,@height,@textAgain,@bg) {
  width: @width;
  height: @height;
  text-align: @textAgain;
  line-height: @height;
  background: @bg;
}
/* 布局的样式 */
.el-col {
  margin: 20px 0;
  position: relative;
  height: 107px;
  border-radius: 4px;
  .bg-purple-light {
    text-align: center;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 107px;
    .el-search {
      .bgStyle("search.png", 30px);
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.7s ease 0.5s;
      &:hover {
        .bgStyle("h-search.png", 30px);
      }
    }
    /* 字体颜色 */
    .contact_phone {
      color: #777;
      transition: all 0.3s ease 0.3s;
    }
  }
}
.right {
  position: relative;
  padding-top: 10px;
  text-align: right;
  .right-wishlist,
  .right-user,
  .right-language {
    margin-right: 25px;
    color: #777;
    font-size: 15px;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease 0.3s;
  }
  .right-car {
    .bgStyle("car.png", 25px);
    position: absolute;
    bottom: 5%;
    right: 5%;
    cursor: pointer;
    transition: all 0.7s ease 0.5s;
    &:hover {
      .bgStyle("h-car.png", 25px);
    }
    /* 购物车计数css */
    .header_cart_items {
      border-radius: 50%;
      .widHei(20px, 21px, center, #49bcab);
      font-size: 12px;
      color: #fff;
      position: absolute;
      top: -18px;
      right: -18px;
    }
  }
}

/* 导航的样式 */
nav {
  .widHei(100%, 44px, center, #f5f5f5);
  .nav-content {
    margin: 0 auto;
    max-width: 600px;
    height: 34px;
    dl {
      float: left;
      .widHei(80px, 40px, center, #f5f5f5);
      margin-left: 17px;
      font-weight: bold;
      cursor: pointer;
    }
    /* 延迟更改字体及图片颜色 */
    .blog,
    .about,
    .contacts,
    .catalog,
    .home,
    .collections {
      transition: all 0.3s ease 0.3s;
      &:hover {
        color: #49bcab;
      }
    }
  }
}
/* 购物车的样式 */
</style>