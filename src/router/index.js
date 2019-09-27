import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import comp2 from '@/components/comp2';
import comp3 from '@/components/comp3';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      
    },
    {
      path:'./comp2',
      name:'comp2',
      component:comp2
    },
    {
      path:'./comp3',
      name:'comp3',
      component:comp3
    }
  ]
})
