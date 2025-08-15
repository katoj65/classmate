<script setup>
import classApi from './api/classApi';
import { $navigateTo, ref, onMounted } from 'nativescript-vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Skeleton from './templates/Skeleton.vue';
import SubjectPage from './SubjectPage.vue';




const title=ref('Subjects available');
const subjects=ref([]);
const isLoading=ref(false);

const topicsNav=()=>{
$navigateTo(SubjectPage);
}




onMounted(async ()=>{
isLoading.value=true;
const user=JSON.parse(ApplicationSettings.getString('user',null));
const api = new classApi();
const response = await api.userClass(user.class);
isLoading.value=false;
if(response.statusCode==200){
const data=response.content.toJSON();
data.forEach(element => {
title.value=element.name+' subjects.';
subjects.value=element.subject;
});

}else{
console.log(response.statusCode);
}



});





</script>





<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">

<!-- Header -->
<StackLayout padding="20" backgroundColor="#f0f2f5">
<Label text="Subjects" fontSize="22" fontWeight="bold" color="#2C3E50"/>
<Label :text="title" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>

<!-- Subjects List -->
<ScrollView>




<StackLayout padding="20" spacing="15" v-if="isLoading==false">

<StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4" @tap="topicsNav" v-for="(s,key) in subjects" :key="key">
<Label :text="s.name" fontSize="18" fontWeight="bold" color="#2C3E50"/>
<Label :text="s.topic.length>1?'Subject covers '+s.topic.length+' topics':'Subject has no topics'" fontSize="14" color="#7F8C8D" marginTop="4"/>
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
