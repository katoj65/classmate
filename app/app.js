import Vue from 'nativescript-vue';
import Home from './components/Home';
import Login from './components/Login.vue';
import CreateProfile from './components/CreateProfile.vue';
import { SecureStorage } from "@heywhy/ns-secure-storage";

import './css/app.css';


//set navigation bar color for android
import { Application, Color } from '@nativescript/core';
Application.on(Application.launchEvent, function () {
if (global.isAndroid) {
const activity = Application.android.startActivity || Application.android.foregroundActivity;
const window = activity.getWindow();
window.setNavigationBarColor(new Color("#0C0A09").android);
}
});


//storage settings

const session = new SecureStorage();
let user= await session.get({key: 'user'});
user =JSON.parse(user);
new Vue({
  render: (h) => h('frame', [h(user!=null?Home:Login)]),
  }).$start();