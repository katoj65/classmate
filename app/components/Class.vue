<template>
<page>
<ActionBar  :title="title!=null?title:'Classmate'" backgroundColor="#2A9689" style="color:#fff;">

<ActionItem  ios.position="right" android.position="actionBar" @tap="classMenuModel">
<Label class="fas" text.decode="&#xf038;" style="color:#fff;font-size:20px;"/>
</ActionItem>

<ActionItem ios.position="right" android.position="actionBar" @tap="notificationNav">
<Label class="fas" text.decode="&#xf0f3;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>

<ActionItem  ios.position="right" android.position="actionBar" @tap="settings">
<Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>
</ActionBar>


<GridLayout rows="*" columns="*">
<ScrollView>
<StackLayout>



<StackLayout
v-for="(s, key) in row.subjects" :key="key" orientation="horizontal" padding="12" @tap="subjectNavigator(s)"
>
<Label text.decode="&#xf111;" class="fas large-icon" verticalAlignment="center" marginRight="14" style="font-size:17px;color:#e5e7eb;"/>
<StackLayout verticalAlignment="center">
<Label :text="s.name" class="text-title" />
<Label :text="s.description" class="text-description" />
</StackLayout>
</StackLayout>
</StackLayout>
</ScrollView>
</GridLayout>





</page>
</template>


<script>
import { Http, } from "@nativescript/core";
import * as ApplicationSettings from '@nativescript/core/application-settings'
import About from "./About.vue";
import { key } from './database/connection.js';
import Notification from './Notification.vue';
import Search from './Search.vue';
import Settings from './Settings.vue';
import Subject from "./Subject.vue";
import ClassMenu from "./class/ClassMenu.vue";



export default {
name:'Home',
components: {
Settings,
Notification,
Search,
Subject,
About
},


data() {
return {
title:'',
isLoading:false,
row:{
classID:1,
class:null,
subjects:[]
},

}
},



methods:{
async getData(){
//user details
const user=JSON.parse(ApplicationSettings.getString('user',null));
const userClass=user.class;
this.title=userClass;

this.isLoading = true;
await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/class?select=*,subject(name,description,id)&name=eq.'+userClass,
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
}).then(response => {
if (response.statusCode==200) {

this.isLoading = false;
const data = response.content.toJSON();
if(data.length > 0){
data.forEach(element => {
this.row.class = element;
this.row.subjects = element.subject;
});
}

}else{
console.log('Error fetching data:', response.statusCode);
}

}).catch(error => {
console.error('Request failed:', error);
});


},





settings(){
this.$navigateTo(Settings,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
},



notificationNav() {
this.$navigateTo(Notification,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
},



searchNav(){
this.$navigateTo(Search,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
},

subjectNavigator(item){
this.$navigateTo(Subject, {
props: { subject: item },
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});

},

aboutNav(){
this.$navigateTo(About);
},

classMenuModel(){
this.$showModal(ClassMenu,{
fullscreen: true,

}).then((menu)=>{

});
}







},

mounted() {
this.getData();

}




};
</script>
