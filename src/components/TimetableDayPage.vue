<script setup>
import { $navigateTo } from 'nativescript-vue';
import TimetableContent from './modals/TimetableContent.vue';



const contentNav=()=>{
$navigateTo(TimetableContent);
}


</script>



<template>
<Page actionBarHidden="true">
<StackLayout backgroundColor="#F9FAFB" height="100%">


<!-- Header -->
  <StackLayout padding="20" backgroundColor="#F0F2F5">
  <StackLayout orientation="horizontal" backgroundColor="#F0F2F5">
  <Label text="Today's Timetable" fontSize="22" fontWeight="bold" color="#1F2937" textAlignment="center" width="80%"/>
  <Label text="edit_calendar" width="20%" class="fa" fontSize="30" color="#E5E7EB" style="color:silver;"/>
  </StackLayout>
  <Label text="Friday, 15 August 2025" fontSize="14" color="#6B7280" textAlignment="center" marginTop="4" borderRadius="14" backgroundColor="#E5E7EB" padding="6" width="100%"/>
  </StackLayout>






        <!-- Timetable List -->
        <ScrollView>
          <StackLayout padding="20" spacing="16">


<GridLayout columns="auto, *, auto" backgroundColor="#FFFFFF" borderRadius="14" padding="16" shadowColor="#000" shadowOpacity="0.05" shadowRadius="6" shadowOffsetHeight="2" v-for="(i,key) in 10" :key="key" @tap="contentNav">
<!-- Bullet -->
<Label text="" color="#6B7280" fontSize="18" verticalAlignment="top"/>

<!-- Content -->
<StackLayout col="1" spacing="4">
<Label text="08:00 AM - 09:00 AM" fontSize="12" color="#6B7280"/>
<Label text="Mathematics" fontSize="18" fontWeight="bold" color="#1F2937"/>
<Label text="Algebra and Quadratic Equations" fontSize="14" color="#4B5563" textWrap="true"/>
</StackLayout>

<!-- Right Icon -->
<Label col="2" class="fa" text="more_vert" fontSize="20" color="#6B7280" verticalAlignment="center"/>
</GridLayout>






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
