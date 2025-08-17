<script setup>
import * as ApplicationSettings from '@nativescript/core/application-settings';
import { computed, onNavigateTo } from 'nativescript-vue';
import AppLayout from './layouts/AppLayout.vue';

const user = computed(() => {
  try {
    const stored = ApplicationSettings.getString('user', null);
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    console.log("Failed to parse user:", e);
    return null;
  }
});


const test=()=>{
console.log('some information goes here');
}



</script>

<template>
  <Page actionBarHidden="true" @navigateTo="test">
    <app-layout :title="'Ask Question'">
      <Label text="This is the AI page" />
    </app-layout>
  </Page>
</template>
