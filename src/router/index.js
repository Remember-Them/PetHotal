import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/components/home/Home')
const about = () => import('@/components/about/About')
const contacts = () => import('@/components/contacts/Contacts')
const catalog = () => import('@/components/catalog/Catalog')
const blog = () => import('@/components/blog/Blog')
const collections = () => import('@/components/collections/Collections')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/catalog',
      component: catalog
    },
    {
      path: '/collections',
      component: collections
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/blog',
      component: blog
    },
    {
      path: '/contacts',
      component: contacts
    }
  ]
})
