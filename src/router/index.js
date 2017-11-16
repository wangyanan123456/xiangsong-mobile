import Vue from 'vue'
import Router from 'vue-router'
import My from '@/components/my/my.vue'
import Try from '@/components/try/try.vue'
import Place from '@/components/place/place.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: My
    },
    {
      path: '/try',
      component: Try,
      children: [
        {
          path: 'place',
          component: Place
        }
      ]
    }
  ]
})
