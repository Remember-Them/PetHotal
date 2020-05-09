import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryList: [{
        name: "主页",
        class: "home",
        msgindex: 1,
        navindex: 1
      },
      {
        name: "搜索",
        class: "home",
        msgindex: 2
      },
      {
        name: "商品目录",
        class: "catalog",
        navindex: 2
      },
      {
        name: "商品分类",
        class: "collections",
        msgindex: 4,
        navindex: 3
      },
      {
        name: "关于",
        class: "about",
        msgindex: 5,
        navindex: 4
      },
      {
        name: "博客",
        class: "blog",
        msgindex: 3,
        navindex: 5
      },
      {
        name: "联系我们",
        class: "contacts",
        navindex: 6,
        msgindex: 6
      }
    ],
    collectionsList: [{
        name: '鸟类',
        class: 'birds'
      },
      {
        name: '猫类',
        class: 'cats'
      },
      {
        name: '狗类',
        class: 'dogs'
      },
      {
        name: '鱼类',
        class: 'fish'
      },
      {
        name: '爬虫类',
        class: 'reptiles'
      },
      {
        name: '小宠物',
        class: 'smallPets'
      }
    ]
  },
  getters: {
    navList(state) {
      return state.categoryList.filter(item => {
        return item.navindex
      })
    },
    msgList(state) {
      return state.categoryList.filter(item => {
        return item.msgindex
      })
    }
  },
  mutations: {

  }
});
