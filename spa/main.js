// import page components
import Home from './components/Home'
import About from './components/About'
import Weather from './components/Weather'
import WeatherResults from './components/WeatherResults'
import Report from './components/Report'
// import DailyForecastCard from './components/DailyForecastCard.vue'
// import the vue instance
import Vue from 'vue'
// import the App component
import App from './App'
// import the vue router
import VueRouter from 'vue-router'
import axios from 'axios'
// tell vue to use the router
Vue.use(VueRouter)
Vue.prototype.$axios = axios

// define your routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/weather', name: 'Weather', component: Weather },
  { path: '/weatherresults', name: 'WeatherResults', props: true, component: WeatherResults },
  // { path: '/weatherresults', name: 'WeatherResults', component: WeatherResults, DailyForecastCard },
  { path: '/report', name: 'Report', props: true, component: Report }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
// instatinat the vue instance
new Vue({
  // define the selector for the root component
  el: '#app',
  // pass the template to the root component
  template: '<App/>',
  // declare components that the root component can access
  components: { App },
  // pass in the router to the Vue instance
  router
}).$mount('#app')// mount the router on the app
