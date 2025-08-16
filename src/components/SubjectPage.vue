<script setup>
import { $navigateTo, onMounted, ref, defineProps } from 'nativescript-vue';
import subjectApi from './api/subjectApi';
import TopicPage from './TopicPage.vue';

const props=defineProps({
id : Number
});


const isLoading=ref(false);
const title=ref('');
const topics=ref([]);


const topicNav=()=>{
$navigateTo(TopicPage);
}

onMounted(async ()=>{
console.log(props);





});













</script>


<template>
    <Page actionBarHidden="true">
      <StackLayout backgroundColor="#F9FAFB" height="100%">

        <!-- Header -->
        <StackLayout padding="20" backgroundColor="#F0F2F5">
          <Label text="Mathematics" fontSize="22" fontWeight="bold" color="#1F2937" textAlignment="left"/>
          <Label text="Topics Overview" fontSize="14" color="#6B7280" textAlignment="left" marginTop="6"/>
        </StackLayout>








        <!-- Topics List -->
        <ScrollView height="100%">
          <StackLayout padding="20" spacing="16">

            <!-- Topic Card -->
            <StackLayout backgroundColor="#FFFFFF" borderRadius="14" padding="16" @tap="topicNav">
              <Label text="Algebra" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="6"/>
              <Label text="Learn about variables, expressions, and solving equations." fontSize="14" color="#4B5563" textWrap="true"/>
            </StackLayout>

            <StackLayout backgroundColor="#FFFFFF" borderRadius="14" padding="16" @tap="topicNav">
              <Label text="Geometry" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="6"/>
              <Label text="Understand shapes, angles, and theorems with practical examples." fontSize="14" color="#4B5563" textWrap="true"/>
            </StackLayout>

            <StackLayout backgroundColor="#FFFFFF" borderRadius="14" padding="16" @tap="topicNav">
              <Label text="Trigonometry" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="6"/>
              <Label text="Explore sine, cosine, tangent, and their applications in solving problems." fontSize="14" color="#4B5563" textWrap="true"/>
            </StackLayout>

            <StackLayout backgroundColor="#FFFFFF" borderRadius="14" padding="16" @tap="topicNav">
              <Label text="Statistics" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="6"/>
              <Label text="Learn about data collection, analysis, and representation with examples." fontSize="14" color="#4B5563" textWrap="true"/>
            </StackLayout>

          </StackLayout>
        </ScrollView>








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
