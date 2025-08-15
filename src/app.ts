import { createApp,h } from 'nativescript-vue';
import App from './components/App.vue';
import './app.css';
import * as ApplicationSettings from '@nativescript/core/application-settings';





//set navigation bar color for android
import { Application, Color } from '@nativescript/core';
Application.on(Application.launchEvent, function () {
if (global.isAndroid) {
const activity = Application.android.startActivity || Application.android.foregroundActivity;
const window = activity.getWindow();
window.setNavigationBarColor(new Color("#030712").android);
}
});


const session=ApplicationSettings.getString('user','');
//ApplicationSettings.clear();
createApp(App).start();

