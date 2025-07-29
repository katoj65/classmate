import Vue from 'nativescript-vue';
import Home from './components/Home';
import './css/app.css';



new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
