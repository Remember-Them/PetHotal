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

<style scoped>
/* 购物车计数css */
.header_cart_items {
  border-radius: 50%;
  background: #49bcab;
  width: 20px;
  height: 21px;
  line-height: 21px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  position: absolute;
  top: -18px;
  right: -18px;
}
/* 布局的样式 */
.el-col {
  margin: 20px 0;
  position: relative;
  height: 107px;
  border-radius: 4px;
}
.bg-purple-light {
  text-align: center;
}
.grid-content {
  border-radius: 4px;
  min-height: 107px;
}
.el-search {
  background: url("~@/assets/img/search.png") no-repeat;
  width: 30px;
  height: 30px;
  background-size: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.right {
  position: relative;
  padding-top: 10px;
  text-align: right;
}

/* 字体颜色 */
.contact_phone {
  color: #777;
  transition: all 0.3s ease 0.3s;
}
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

/* 购物车的样式 */
img.car {
  width: 29px;
  height: 25px;
}

.right-car {
  background: url("~@/assets/img/car.png") no-repeat;
  background-size: 25px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 25px;
  height: 25px;
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
}
.contact_phone:hover,
.right-wishlist:hover,
.right-language:hover,
.right-user:hover,
.blog:hover,
.catalog:hover,
.about:hover,
.collections:hover,
.contacts:hover,
.home:hover {
  color: #49bcab;
}
.el-search:hover {
  background: url("~@/assets/img/h-search.png") no-repeat;
  background-size: 30px;
  transition: all 0.7s ease 0.5s;
}
.right-car:hover {
  background: url("~@/assets/img/h-car.png") no-repeat;
  background-size: 25px;
  transition: all 0.7s ease 0.5s;
}
/* 导航的样式 */
nav {
  width: 100%;
  background: #f5f5f5;
  line-height: 44px;
  height: 44px;
}
.nav-content {
  margin: 0 auto;
  max-width: 600px;
  height: 34px;
}
.nav-content dl {
  float: left;
  width: 80px;
  height: 34px;
  text-align: center;
  margin-left: 17px;
  font-weight: bold;
  cursor: pointer;
}
</style>