import { createRouter, createWebHistory ,type RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] =[
  {path:'/login',component:()=>import('@/views/Login/index.vue'),children:[{path:'son',component:()=>import('@/views/Login/son.vue')}]},
  {path:'/layout',component:()=>import('@/views/Layout/index.vue'),children:[{path:'home',component:()=>import('@/views/Home/index.vue')}]}
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass:'linkactvite'
  
    
})

export default router
