<script setup>
import { $navigateTo, ref, defineProps, onBeforeUnmount } from 'nativescript-vue';
import subjectApi from './api/subjectApi';
import TopicPage from './TopicPage.vue';
import Skeleton from './templates/Skeleton.vue';
import { StackLayout } from '@nativescript/core';

const props=defineProps({
id : Number
});


const isLoading=ref(false);
const title=ref(null);
const topics=ref([]);
const isActive=true;

const topicNav=(id)=>{
$navigateTo(TopicPage,{
props:{
id:id
}
});
}



const getTopics = async ()=>{
isLoading.value=true;
try{

const id=props.id;
const api=new subjectApi();
let data=await api.getSubject(id);

if(!isActive){
return;
}

if(data.statusCode==200){

data=data.content.toJSON();
data.forEach(element => {
title.value=element.name||'';
topics.value=element.topic;
});

}else{
console.log(data.statusCode);
}

isLoading.value=false;

}catch(error){
console.log(error);
}



}




onBeforeUnmount(()=>{
isLoading.value=false;
title.value=null;
topics.value=[];
});





</script>


<template>
    <Page actionBarHidden="true"  @navigatedTo="getTopics">
      <StackLayout backgroundColor="#F9FAFB" height="100%">

        <!-- Header -->
        <StackLayout padding="20" backgroundColor="#F0F2F5">
          <Label :text="title" fontSize="22" fontWeight="bold" color="#1F2937" textAlignment="left"/>
          <Label text="Topics Overview" fontSize="14" color="#6B7280" textAlignment="left" marginTop="6"/>
        </StackLayout>








<!-- Topics List -->
<ScrollView height="100%" v-if="isLoading==false">


<StackLayout padding="20" spacing="16" v-if="topics.length>0">
<!-- Topic Card -->
<StackLayout backgroundColor="#FFFFFF" borderRadius="14" padding="16" v-for="(t,key) in topics" :key="key"  @tap="topicNav(t.id)">
<Label :text="t.name" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="6"/>
<Label :text="t.description" fontSize="14" color="#4B5563" textWrap="true"/>
</StackLayout>


</StackLayout>
<StackLayout padding="15" v-else>
<Label text="No topics"></Label>
</StackLayout>





</ScrollView>

<StackLayout v-else padding="15">
<Skeleton/>
</StackLayout>





</StackLayout>
</Page>
  </template>

  <style scoped>
  StackLayout[backgroundColor="#FFFFFF"] {
    shadow-color: #00000033;
    shadow-opacity: 0.05;
    shadow-radius: 6;
    shadow-offset-height: 2;
  }
  </style>
