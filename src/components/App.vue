<script setup>
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Home from './Home.vue';
import Login from './Login.vue';

const isLoggedIn=ApplicationSettings.getBoolean('isLoggedIn',false);

</script>
<template>
<Frame>
<Login v-if="isLoggedIn==false"/>
<Home v-else-if="isLoggedIn==true"/>
</Frame>
</template>