import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Simulate from '../views/Simulate.vue'
import SimulateSingle from '../views/SimulateSingle.vue'
import SimulateUncertainty from '../views/SimulateUncertainty.vue'
import Resources from '../views/Resources.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/simulate',
    name: 'Simulate',
    component: Simulate
  },
  {
    path: '/simulate-single',
    name: 'Single Point Simulation',
    component: SimulateSingle
  },
  {
    path: '/simulate-uncertainty',
    name: 'Simulation with Uncertainty',
    component: SimulateUncertainty
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
