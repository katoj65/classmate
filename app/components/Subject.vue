<template>
<Page>
<ActionBar title="Subject" backgroundColor="#2A9689" color="#fff">

<ActionItem  ios.position="right" android.position="actionBar" @tap="homeNav">
<Label class="fas" text.decode="&#xf03a;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>

<ActionItem  ios.position="right" android.position="actionBar" @tap="settings">
<Label class="fas" text.decode="&#xf144;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>


<ActionItem  ios.position="right" android.position="actionBar" @tap="settings">
<Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>
</ActionBar>

<ScrollView>
<StackLayout padding="10" spacing="15">
<Label :text="subject.name" class="h2" />

<StackLayout
v-for="(topic,key) in topics"
:key="key"
class="topic-card"
>
<Label :text="topic.name" class="text-title" />
<Label :text="topic.description" class="text-description" textWrap="true" />
</StackLayout>

<Label v-if="topics.length === 0" text="No topics available." class="empty-msg" />
</StackLayout>
</ScrollView>
</Page>
</template>
<script>


import { Http } from '@nativescript/core';
import Settings from './Settings.vue';
import Home from './Home.vue';
import Vue from 'nativescript-vue';
import { key } from './database/connection.js';

export default {
name:'Subjects',

props:{
subject:Object
},

components:{
Settings,

},

data(){return{
title:'Subject',
isLoading:false,
topics:[]

}},

methods: {
settings(){
this.$navigateTo(Settings,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
},


homeNav(){
Frame.topmost().navigate({
create() {
const page = new Vue({
render: h => h(Home)
}).$mount();
return page.$el.nativeView;
}
});
},


async getData(){
const id=this.subject.id;
this.isLoading= true;
await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/topic?select=*,sub_topic(name,description,id)&subject_id=eq.'+id,
method: 'GET',
headers: {
'apiKey': key,
'Authorization': 'Bearer ' + key,
'Content-Type': 'application/json',
'application': 'json'
}
}).then(response=>{
this.isLoading = false;
if(response.statusCode === 200) {

this.topics = response.content.toJSON();

}else{
console.log('Error:', response.statusCode);
}
console.log(response.content);
}).catch(error=>{console.log('Request failed:', error);});
}
},

mounted() {
this.getData();


}


}
</script>

<style scoped>
.h2 {
font-size: 20;
font-weight: bold;
color: #2A9689;
margin-bottom: 10;
}

.topic-card {

padding: 15;
border-radius: 10;
border-bottom-width: 1;
border-bottom-color: #e5e7eb;
}

.topic-title {
font-size: 16;
font-weight: bold;
color: #1f2937;
}

.topic-description {
font-size: 14;
color: #4b5563;
margin-top: 4;
}

.empty-msg {
text-align: center;
font-size: 16;
color: #9ca3af;
margin-top: 20;
}
</style>
