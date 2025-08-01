import Vue from 'nativescript-vue';
import Home from './components/Home';
import Login from './components/Login.vue';
import './css/app.css';



new Vue({
  // render: (h) => h('frame', [h(Home)]),
 render: (h) => h('frame', [h(Login)]),

}).$start()
