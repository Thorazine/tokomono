import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Toko from '@/components/Toko'
import Mono from '@/components/Mono'
import Contact from '@/components/Contact'
import NotFound from '@/components/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Toko',
      component: Toko
    },
    {
      path: '/mono',
      name: 'Mono',
      component: Mono
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        robots: 'noindex,follow'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.robots) {
    console.log(to.meta.robots)
    document.querySelector('meta[name="robots"]').setAttribute('content', to.meta.robots)
  } else {
    document.querySelector('meta[name="robots"]').setAttribute('content', 'index,follow')
  }
  next()
})

export default router
