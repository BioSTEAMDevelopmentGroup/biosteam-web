import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Simulate from '../views/Simulate.vue'
import SimulateSingle from '../views/SimulateSingle.vue'
import SimulateUncertainty from '../views/SimulateUncertainty.vue'
import Resources from '../views/About.vue'
import Docs from '../views/Docs.vue'
import Publications from "@/views/Publications";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    // {
    //   path: '/#startexplore',
    //   name: 'startexplore',
    //   component: Home
    // },
  {
    path: '/simulate',
    name: 'Simulate',
    component: Simulate
  },
  {
    path: '/simulate/simulate-single',
    name: 'Single Point Simulation',
    component: SimulateSingle
  },
  {
    path: '/simulate/simulate-uncertainty',
    name: 'Simulation with Uncertainty',
    component: SimulateUncertainty
  },
  {
    path: '/about',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs
  },
    {
      path: '/publications',
      name: 'Publications',
      component: Publications
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
})

export default router
