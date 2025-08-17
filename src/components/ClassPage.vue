<script setup>
import classApi from './api/classApi';
import { $navigateTo, ref, onUnmounted } from 'nativescript-vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Skeleton from './templates/Skeleton.vue';
import SubjectPage from './SubjectPage.vue';




const title=ref(null);
const subjects=ref([]);
const isLoading=ref(false);

const topicsNav=(id)=>{
$navigateTo(SubjectPage,{
props:{
id:id
}
});
}

const getSubjects = async ()=>{
isLoading.value=true;

try{
const user=JSON.parse(ApplicationSettings.getString('user',null));
const api = new classApi();
const response = await api.userClass(user.class);

if(response.statusCode==200){
const data=response.content.toJSON();
data.forEach(element => {
title.value=element.name+' subjects.';
subjects.value=element.subject;
});

}else{
console.log(response.statusCode);
}

isLoading.value=false;

}catch(error){
console.log(error);
}
}





onUnmounted(()=>{
isLoading.value=false;
title.value=null;
subjects.value=[];
});






</script>





<template>
<Page actionBarHidden="true"  @navigatedTo="getSubjects">
<StackLayout backgroundColor="#F9FAFB" height="100%">

<!-- Header -->
<StackLayout padding="20" backgroundColor="#f0f2f5">
<Label text="Subjects" fontSize="22" fontWeight="bold" color="#2C3E50"/>
<Label :text="title" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>

<!-- Subjects List -->
<ScrollView height="100%">




<StackLayout padding="20" spacing="15" v-if="isLoading==false">
<StackLayout v-if="subjects.length>0">
<StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4" @tap="topicsNav(s.id)" v-for="(s,key) in subjects" :key="key">
<Label :text="s.name" fontSize="18" fontWeight="bold" color="#2C3E50"/>
<Label :text="s.topic.length>1?'Subject covers '+s.topic.length+' topics':'Subject has no topics'" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>
</StackLayout>
<StackLayout v-else>
<Label text="No subjects"></Label>
</StackLayout>
</StackLayout>
<skeleton v-else padding="15"/>


</ScrollView>
</StackLayout>


</Page>
</template>
<style scoped>
StackLayout[backgroundColor="white"] {
  margin-bottom: 10;
  padding: 15;
  border-radius: 15;
  shadow-color: #00000033;
  shadow-opacity: 0.1;
  shadow-radius: 4;
}
</style>
