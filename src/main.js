import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router'
import { store } from './store'

import BmrModel from './components/Shared/BmrModel.vue'

Vue.component('bmr-model', BmrModel);
Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
