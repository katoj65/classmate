import Vue from 'nativescript-vue';
import Home from './components/Home';
import Login from './components/Login.vue';
import './css/app.css';
import * as ApplicationSettings from '@nativescript/core/application-settings'



//set navigation bar color for android
import { Application, Color } from '@nativescript/core';
Application.on(Application.launchEvent, function () {
if (global.isAndroid) {
const activity = Application.android.startActivity || Application.android.foregroundActivity;
const window = activity.getWindow();
window.setNavigationBarColor(new Color("#030712").android);
}
});






import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
state: {
user:null,
},
mutations: {
setUser(state, user) {
state.user = user;
}
}
});




//session goes here
const session=ApplicationSettings.getBoolean('isActive', false);
//ApplicationSettings.clear();


new Vue({
store,
render: (h) => h('frame', [h(session==true?Home:Login)])
}).$start();
