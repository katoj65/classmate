<script setup>
import AppLayout from './layouts/AppLayout.vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import { $navigateTo, reactive, ref } from 'nativescript-vue';
import Timetable from './templates/Timetable.vue';
import CreateProfile from './templates/CreateProfile.vue';
import AskPage from './AskPage.vue';

const aiNav = () => {
  $navigateTo(AskPage);
};

const isLoading = ref(false);
const row = reactive({
  user: null,
  status: null,
});

const getUserData = () => {
  isLoading.value = true;
  try {
    const store = ApplicationSettings.getString('user', null);

    const data = store ? JSON.parse(store) : null;

    if (data) {
      row.user = data;
      row.status = data.profile_status ?? null;
    } else {
      row.user = null;
      row.status = null;
    }

    console.log("User Data:", row);
  } catch (e) {
    console.error("Error parsing user data", e);
    row.user = null;
    row.status = null;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
<Page actionBarHidden="true" @navigatedTo="getUserData">
  <GridLayout rows="*" columns="*">
    <app-layout>
      <timetable />
    </app-layout>

    <StackLayout
      v-if="row.user && row.status === 'completed'"
      @tap="aiNav"
      horizontalAlignment="right"
      verticalAlignment="bottom"
      margin="20"
      backgroundColor="black"
      width="55"
      height="55"
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
