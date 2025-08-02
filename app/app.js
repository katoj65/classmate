import Vue from 'nativescript-vue';
import Home from './components/Home';
import Login from './components/Login.vue';
import CreateProfile from './components/CreateProfile.vue';

import './css/app.css';


//set navigation bar color for android
import { Application, Color } from '@nativescript/core';
Application.on(Application.launchEvent, function () {
if (global.isAndroid) {
const activity = Application.android.startActivity || Application.android.foregroundActivity;
const window = activity.getWindow();
window.setNavigationBarColor(new Color("#2A9689").android);
}
});





new Vue({
  // render: (h) => h('frame', [h(Home)]),
 render: (h) => h('frame', [h(Login)]),
}).$start()
