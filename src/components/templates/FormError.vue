<template>
<Label v-if="props.error!=null" padding="5" textAlign="center" style="text-align:center;color:red;font-size:15px;" :text="props.error"/>
</template>
<script setup>
import { defineProps } from 'nativescript-vue';
const props=defineProps({
error : String
});
</script>
