import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: "/", component: "Landing" },
  { path: "/cakes", component: "Cakes" },
  { path: "/animals", component: "Animals" }
  ];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
