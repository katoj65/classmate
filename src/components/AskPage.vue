<script setup>
import * as ApplicationSettings from '@nativescript/core/application-settings';
import { computed } from 'nativescript-vue';
import AppLayout from './layouts/AppLayout.vue';

const user=computed(()=>{
return JSON.parse(ApplicationSettings.getString('user',null));
});

</script>
<template>
<Page actionBarHidden="true">
<app-layout :title="'Ask Question'">

<Label text="This is the AI page"></Label>

</app-layout>
</Page>
</template>
