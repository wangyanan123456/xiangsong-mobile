import Vue from 'vue'
import Router from 'vue-router'
import My from '@/components/my/my.vue'
import Try from '@/components/try/try.vue'
import Place from '@/components/place/place.vue'
import Hi from '@/components/hi/hi.vue'
import Loading from '@/components/loading/loading.vue'
import TryCard from '@/components/tryCard/tryCard.vue'
import NoCard from '@/components/NoTryCard/NoTryCard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: My,
      children:[
        {
          path:'/',
          component:Loading
        },
        {
          path:'/isTryCard',
          component:TryCard
        },
        {
          path:'/noTryCard',
          component:NoCard
        }
      ]
    },
    {
      path: '/try',
      component: Try,
      children: [
        {
          path: '/',
          component: Hi
        },
         {
          path: '/place',
          component: Place
        },
      ]
    }
  ]
})
