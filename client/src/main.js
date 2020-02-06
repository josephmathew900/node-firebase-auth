import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAH25iBbOBoI752_2iz62I0KUiNEPKf22o",
  authDomain: "nodefirebase-d00d5.firebaseapp.com",
  databaseURL: "https://nodefirebase-d00d5.firebaseio.com",
  projectId: "nodefirebase-d00d5",
  storageBucket: "nodefirebase-d00d5.appspot.com",
  messagingSenderId: "1018848797651",
  appId: "1:1018848797651:web:846179ba0748abc2580526"
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
