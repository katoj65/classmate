<script setup>
import AppLayout from './layouts/AppLayout.vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import { $navigateTo, ref } from 'nativescript-vue';
import Timetable from './templates/Timetable.vue';
import CreateProfile from './templates/CreateProfile.vue';
import AskPage from './AskPage.vue';




const user = ref(null);

// load user safely
try {
  const stored = ApplicationSettings.getString('user', null);
  user.value = stored ? JSON.parse(stored) : null;
} catch (e) {
  console.log("Failed to parse user:", e);
  user.value = null;
}

const aiNav = () => {
  $navigateTo(AskPage);
};
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="*" columns="*">
      <app-layout>
        <!-- Show create profile if no user OR profile not completed -->
        <create-profile v-if="!user || user.profile_status !== 'completed'" :user="user" />

        <!-- Show timetable only if user exists and profile completed -->
        <timetable v-else :user="user" />
      </app-layout>

      <!-- FAB only if profile completed -->
      <StackLayout
        v-if="user && user.profile_status === 'completed'"
        @tap="aiNav"
        horizontalAlignment="right"
        verticalAlignment="bottom"
        margin="20"
        backgroundColor="black"
        width="55"
        height="55"
        padding="32px"
        style="border-radius: 30; elevation: 6"
      >
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
