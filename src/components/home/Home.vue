<template>
  <div class="container">
    <div class="cover">
      <el-row type="flex" justify="center">
        <el-col :span="16" class="home-left">
          <img
            src="//cdn.shopify.com/s/files/1/0269/6694/9975/files/ban_60_6815b05a-02ab-43df-aec5-993cd50529c8_1197x700_crop_center.png?v=1586259746"
            alt
          />
          <div class="left-text">
            <h4>所有的流行品牌</h4>
            <h2>
              你 的 毛 孩 子
              <br />宠物
            </h2>
            <a class="btn" href="#">立即抢购</a>
          </div>
        </el-col>
        <el-col :span="4" class="home-content">
          <div class="content-top">
            <img
              src="//cdn.shopify.com/s/files/1/0269/6694/9975/files/ban_20_1_top_590x700_crop_center.png?v=1586258799"
              alt
            />
            <div class="content-text-top">
              <h4>让你的猫快乐</h4>
              <h2>猫咪</h2>
              <a class="content-btn" href="#">立即抢购</a>
            </div>
          </div>
          <div class="content-bottom">
            <img
              src="//cdn.shopify.com/s/files/1/0269/6694/9975/files/ban_20_1_bottom_590x700_crop_center.png?v=1586258812"
              alt
            />
            <div class="content-text-bottom">
              <h2>销量</h2>
              <h4>最多可享受20%的折扣</h4>
              <a class="content-btn" href="#">立即抢购</a>
            </div>
          </div>
        </el-col>
        <el-col :span="4" class="home-right">
          <div class="right-top">
            <img
              src="//cdn.shopify.com/s/files/1/0269/6694/9975/files/ban_20_2_top_590x700_crop_center.png?v=1586258845"
              alt
            />
            <div class="right-text-top">
              <h4>狗服装及配饰</h4>
              <h2>小狗</h2>
              <a class="right-btn" href="#">立即抢购</a>
            </div>
          </div>
          <div class="right-bottom">
            <img
              src="//cdn.shopify.com/s/files/1/0269/6694/9975/files/ban_20_2_bottom_590x700_crop_center.png?v=1586258856"
              alt
            />
            <div class="right-text-bottom">
              <h4>满足您宠物的味蕾</h4>
              <h2>狗粮</h2>
              <a class="right-btn" href="#">立即抢购</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="goods">
      <div class="featured-products">
        <h1>特色产品</h1>
        <el-row type="flex" justify="center">
          <el-col :span="5" class="elcol" v-for="item in topFourList" :key="item.id">
            <router-link tag="dl" class="item" to=" ">
              <img :src="item.image" />
              <dd class="goods-name">{{item.name}}</dd>
              <dd class="price" v-show="item.price!=''&&item.costPrice==''">￥{{item.price}}</dd>
              <dd class="mprice" v-show="item.minPrice!=''&&item.price==''">
                ￥{{item.minPrice}} -
                <em>￥{{item.maxPrice}}</em>
              </dd>
              <dd class="costprice" v-show="item.price!=''&&item.costPrice!=''">
                ￥{{item.price}}
                <em>￥{{item.costPrice}}</em>
              </dd>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <div class="recommend">
        <el-row type="flex" justify="center">
          <el-col :span="24" class="poster">
            <img
              src="//cdn.shopify.com/s/files/1/0269/6694/9975/files/ban_100_2048x670_crop_top.png?v=1586325245"
              alt
            />
            <div class="poster-text">
              <h5>给 猫 猫 狗 狗</h5>
              <h3>找</h3>
              <h4>
                属于他们的
                <br />新家啦!
              </h4>
              <a class="btn" href="#">立即抢购</a>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="9">
            <div class="recommend-left">
              <h2>
                Sheri Orthocomfort深盘拥抱的最
                <br />好的朋友
              </h2>
              <p>
                Leopet Htbt10 75x60小型犬床75x60x19厘米非常适合猫，小
                <br />型犬和其他不超过25磅的宠物，我们舒适的床将您的毛孩子带
                <br />到了最好的地方！
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="recommend-content">
              <img
                src="//cdn.shopify.com/s/files/1/0269/6694/9975/files/prod_505x505_crop_top.png?v=1586347211"
                alt
              />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="recommend-right">
              <span class="before-price">￥273.00</span>
              <br />
              <span class="after-price">￥162.00</span>
              <br />
              <a class="btn" href="#">立即抢购</a>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="featured-products">
      <h1>特色产品</h1>
      <el-row type="flex" justify="center">
        <el-col :span="5" class="elcol" v-for="item in topafterList" :key="item.id">
          <router-link tag="dl" class="item" to=" ">
            <img :src="item.image" />
            <dd class="goods-name">{{item.name}}</dd>
            <dd class="price" v-show="item.price!=''&&item.costPrice==''">￥{{item.price}}</dd>
            <dd class="mprice" v-show="item.minPrice!=''&&item.price==''">
              ￥{{item.minPrice}} -
              <em>￥{{item.maxPrice}}</em>
            </dd>
            <dd class="costprice" v-show="item.price!=''&&item.costPrice!=''">
              ￥{{item.price}}
              <em>￥{{item.costPrice}}</em>
            </dd>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      goodsList: [
        {
          name: "Halo Pet Microchip扫描仪...",
          image:
            "//cdn.shopify.com/s/files/1/0269/6694/9975/products/halo_pet_microchip_scanner_mid06_1_280x280_crop_top.png?v=1586183342",
          price: 175,
          costPrice: "",
          minPrice: "",
          maxPrice: "",
          isHave: 1,
          id: 1
        },
        {
          name: "兴设计骨头碗...",
          image:
            "//cdn.shopify.com/s/files/1/0269/6694/9975/products/hing_designs_the_bone_bowl_with_non_slip_rubber_feet_1_280x280_crop_top.png?v=1586183324",
          price: 182,
          costPrice: "",
          minPrice: "",
          maxPrice: "",
          isHave: 0,
          id: 2
        },
        {
          name: "Leopet Htbt10 75x60小号D ... ",
          image:
            "//cdn.shopify.com/s/files/1/0269/6694/9975/products/leopet_htbt10_75x60_small_dog_bed_75x60x19_cm_different_colours_1_280x280_crop_top.png?v=1586183306",
          price: 224,
          minPrice: "",
          maxPrice: "",
          costPrice: 327,
          isHave: 1,
          id: 3
        },
        {
          name: "Leopet Kbm001 2grau Cat Tre...",
          image:
            "//cdn.shopify.com/s/files/1/0269/6694/9975/products/leopet_kbm0012grau_cat_tree_scratching_post_kitten_climbing_excercise_1_280x280_crop_top.png?v=1586183285",
          minPrice: 84,
          maxPrice: 210,
          price: "",
          costPrice: "",
          isHave: 1,
          id: 4
        },
        {
          name: "Halo Pet HDP狗靴",
          image:
            "//cdn.shopify.com/s/files/1/0269/6694/9975/products/hdp_dog_boots_1_280x280_crop_top.png?v=1586183332",
          price: "",
          minPrice: 84,
          maxPrice: 210,
          costPrice: "",
          isHave: 1,
          id: 5
        },
        {
          name: "Leopet Htbt03狗床",
          image:
            "//cdn.shopify.com/s/files/1/0269/6694/9975/products/leopet_htbt03_dog_bed_different_sizes_and_colours_1_280x280_crop_top.png?v=1586183315",
          price: "",
          minPrice: 103,
          maxPrice: 252,
          costPrice: "",
          isHave: 1,
          id: 6
        },
        {
          name: "Leopet Kbd010猫爬树工具",
          image:
            "//cdn.shopify.com/s/files/1/0269/6694/9975/products/leopet_kbd010_cat_tree_scratching_post_kitten_climbing_excercise_1_280x280_crop_top.png?v=1586183297",
          price: 231,
          costPrice: "",
          minPrice: "",
          maxPrice: "",
          isHave: 1,
          id: 7
        },
        {
          name: "Leopet Tspb09狗狗提包",
          image:
            "//cdn.shopify.com/s/files/1/0269/6694/9975/products/leopet_tspb09_playpen_for_puppies_and_small_animals_different_colours_1_280x280_crop_top.png?v=1586183275",
          price: 105,
          costPrice: "",
          minPrice: "",
          maxPrice: "",
          isHave: 1,
          id: 8
        }
      ]
    };
  },
  computed: {
    topFourList() {
      return this.goodsList.filter(item => {
        return item.id < 5;
      });
    },
    topafterList() {
      return this.goodsList.filter(item => {
        return item.id > 4;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/variable.less";
.homeStyle(@width,@color,@tac,@lineHei,@margin) {
  width: @width;
  color: @color;
  text-align: @tac;
  line-height: @lineHei;
  margin: @margin;
}
.left-text-Style(@fonsize,@marBot) {
  font-size: @fonsize;
  margin-bottom: @marBot;
}
.positionStyle(@position,@lineHei) {
  position: @position;
  line-height: @lineHei;
}
.homeFontBtn() {
  transition: all 0.3s ease 0.3s;
  border: none;
  color: #000;
  margin-top: 10px;
  font-size: 12px;
}

.productsItemStyle() {
  font-weight: bold;
  font-size: 16px;
  color: #49bcab;
  line-height: 15px;
}
.productsFont(@fontSize,@lineHei) {
  font-size: @fontSize;
  line-height: @lineHei;
}

.container img {
  width: 100%;
}
/* 左边图 */
.home-left {
  .homeStyle(780px, #333, left, 425px, 20px 0 0 0.1%);
  .positionStyle(relative, 20px);
  .left-text {
    position: absolute;
    top: 25%;
    right: 20%;
    h4 {
      .left-text-Style(30px, 10px);
    }
    h2 {
      .left-text-Style(35px, 20px);
      line-height: 40px;
    }
  }
}

/* 图片之间的布局 */
.home-content {
  .homeStyle(253px, #333, center, 425px, 20px 12px 0 12px);
  h2 {
    margin-bottom: 10px;
    font-size: 25px;
  }
  h4 {
    font-size: 14px;
  }
  .content-btn {
    .homeFontBtn();
    &:hover {
      color: #49bcab;
    }
  }
  .content-top {
    .positionStyle(relative, 25px);
    .content-text-top {
      position: absolute;
      text-align: left;
      left: 15%;
      bottom: 15%;
    }
  }
  .content-bottom {
    transition: all 0.3s ease 0.3s;
    .positionStyle(relative, 25px);
    bottom: -1%;
    .content-text-bottom {
      position: absolute;
      top: 30%;
      left: 18%;
      color: white;
      h2 {
        font-size: 30px;
        margin-bottom: 0px;
      }
      h4 {
        font-size: 15px;
      }
      a {
        color: white;
        &:hover {
          color: black;
        }
      }
    }
  }
}

.home-right {
  .homeStyle(253px, #333, center, 425px, 20px 0 0 0);
  h2 {
    font-size: 25px;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 14px;
  }
  .right-btn {
    .homeFontBtn();
    &:hover {
      color: #49bcab;
    }
  }
  .right-top {
    .positionStyle(relative, 25px);
    .right-text-top {
      position: absolute;
      text-align: left;
      left: 15%;
      bottom: 15%;
    }
  }
  .right-bottom {
    transition: all 0.3s ease 0.3s;
    .positionStyle(relative, 25px);
    bottom: -1%;
    .right-text-bottom {
      position: absolute;
      top: 10%;
      left: 15%;
      text-align: left;
    }
  }
}
// btn样式
.btn {
  .btnStyle();
}

/* 商品列表样式 */

.featured-products {
  margin-bottom: 100px;
  h1 {
    margin: 100px 0 50px 0;
    text-indent: 7%;
  }
  img {
    cursor: pointer;
    width: 100%;
    background: rgba(0, 0, 0, 0.04);
  }
  .elcol {
    margin-left: 20px;
    .item {
      text-align: center;
      .price {
        .productsItemStyle();
      }
      .costprice {
        .productsItemStyle();
        em {
          color: #777777;
          font-size: 14px;
          text-decoration: line-through;
          font-weight: normal;
        }
      }
      .goods-name {
        color: #383838;
        .productsFont(16px, 50px);
      }
      .mprice {
        .productsFont(16px, 15px);
        font-weight: bold;
        color: #49bcab;
      }
    }
  }
}

/* 商品海报样式 */
.recommend {
  .poster {
    width: 1319px;
    position: relative;
    img {
      width: 100%;
    }
    .poster-text {
      position: absolute;
      top: 20%;
      right: 15%;
      h3 {
        font-size: 80px;
      }
      h4 {
        font-size: 28px;
        margin-bottom: 20px;
      }
      h5 {
        font-size: 30px;
        font-weight: normal;
      }
    }
  }
  .recommend-left {
    h2 {
      margin: 30% 0 4% 0;
      .productsFont(28px, 30px);
    }
    p {
      color: #777;
      .productsFont(16px, 25px);
    }
  }
  .recommend-content {
    img {
      width: 190%;
    }
  }
  .recommend-right {
    margin: 35% 0 0 60%;
    overflow: hidden;
    .after-price {
      display: block;
      .productsFont(40px, 1em);
      font-weight: 700;
      color: #000;
      margin: 10px 0;
    }
    .before-price {
      .productsFont(20px, 1em);
      font-weight: 400;
      text-decoration: line-through;
      color: #777;
      margin-left: 50%;
    }
  }
}
</style>