import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyDiQWwDTkgULq_oKontkOVOm1jP8LYowbk",
    authDomain: "address-list-a13c8.firebaseapp.com",
    databaseURL: "https://address-list-a13c8.firebaseio.com",
    projectId: "address-list-a13c8",
    storageBucket: "address-list-a13c8.appspot.com",
    messagingSenderId: "265828605907",
    appId: "1:265828605907:web:ec7db0431719dde0f4d926",
    measurementId: "G-5CY9CGZ8E4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
