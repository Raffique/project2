import { pushScopeId } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterUserView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    }, 
    {
      path: '/front',
      name: 'front',
      component: ()=> import('../views/FrontPageView.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/cars/new',
      name: 'newcar',
      component: () => import('../views/RegisterCarView.vue')
    },
    {
      path: '/cars/:car_id',
      name: 'car',
      props: true,
      component: () => import('../views/CarView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    
  ]
})

export default router
