<script setup>
import AppLayout from './layouts/AppLayout.vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import { $navigateTo, computed } from 'nativescript-vue';
import Timetable from './templates/Timetable.vue'
import CreateProfile from './templates/CreateProfile.vue';
import AskPage from './AskPage.vue';



const user=computed(()=>{
return JSON.parse(ApplicationSettings.getString('user',null));
});


const aiNav=()=>{
$navigateTo(AskPage);
}



</script>




<template>
    <Page actionBarHidden="true">
        <GridLayout rows="*" columns="*">
            <!-- Main Content -->
            <app-layout>
                <create-profile :user="user" v-if="user.profile_status == 'registered'" />
                <timetable :user="user" v-else />
            </app-layout>

            <!-- FAB - Fixed at Bottom Right -->
            <StackLayout v-if="user.profile_status=='completed'"
            @tap="aiNav"
                horizontalAlignment="right"
                verticalAlignment="bottom"
                margin="20"
                backgroundColor="black"
                width="55"
                height="55"
                padding="32px"
                style="border-radius: 30; elevation: 6">
                <Label
                    text="send"
                    horizontalAlignment="center"
                    verticalAlignment="center"
                    color="white"
                    fontSize="25"
                    class="fa"
                />
            </StackLayout>

        </GridLayout>
    </Page>
    </template>