<script setup>
import { $navigateTo,defineProps,ref,onBeforeMount } from 'nativescript-vue';
import SubtopicPage from './SubtopicPage.vue';
import topicApi from './api/topicApi';
import Skeleton from './templates/Skeleton.vue';





const props=defineProps({
id:Number
});

const isLoading=ref(false);
const title=ref(null);
const subjectName=ref(null);
const description=ref(null);
const subTopic=ref([]);




const subtopicNav=(id)=>{
$navigateTo(SubtopicPage,
{
props:{id:id},
clearHistory: false
});
}


const getTopDetails= async ()=>{
const id=props.id;
isLoading.value=true;
try{
const api=new topicApi();
const data=await api.getTopic(id);


if(data.statusCode==200){
const row=data.content.toJSON();
row.forEach(element => {
title.value=element.name;
description.value=element.description;
subTopic.value=element.sub_topic;
subjectName.value='Topic in the '+element.subject.name+' subject';
});

isLoading.value=false;
}else{
console.log(data);
}

}catch(error){
console.log(error);
}
}









onBeforeMount(()=>{
isLoading.value=false;
title.value=null;
subTopic.value=[];
description.value=null;
subjectName.value=null;
});


</script>





<template>
<Page actionBarHidden="true" @navigatedTo="getTopDetails">
<StackLayout backgroundColor="#F9FAFB" height="100%">

<!-- Header -->
<StackLayout padding="20" backgroundColor="#f0f2f5">
<Label :text="title" fontSize="22" fontWeight="bold" color="#2C3E50"/>
<Label :text="subjectName" fontSize="14" color="#7F8C8D" marginTop="4"/>
</StackLayout>

<!-- Subtopics List -->


<ScrollView height="100%">
  <StackLayout padding="20" spacing="15">

    <!-- Topic Description -->
    <Label
      :text="description"
      fontSize="14"
      color="#2C3E50"
      textWrap="true"
      marginBottom="10"
    />

    <!-- Subtopics Section -->
    <StackLayout v-if="!isLoading">
      <StackLayout v-if="subTopic.length > 0" spacing="10">
        <StackLayout
          padding="15"
          backgroundColor="white"
          borderRadius="15"
          shadowColor="#00000033"
          shadowOpacity="0.1"
          shadowRadius="4"
          @tap="subtopicNav(i)"
          v-for="(i,key) in subTopic"
          :key="key">

          <Label :text="i.name" fontSize="16" fontWeight="bold" color="#2C3E50"/>
          <Label :text="i.description" fontSize="14" color="#7F8C8D" marginTop="4" textWrap="true"/>

        </StackLayout>
      </StackLayout>

      <StackLayout v-else>
        <Label text="No content available" color="#6B7280"/>
      </StackLayout>
    </StackLayout>

    <!-- Loading Skeleton -->
    <Skeleton v-else padding="15"/>

  </StackLayout>
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
