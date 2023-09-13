import { createApp } from 'vue'
import AppComponent from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import VueSweetAlert from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import store from './store'

const App = createApp(AppComponent)

App.use(store)

App.use(VueSweetAlert);
App.mount('#app')



