<template>
<RootLayout>
  <GridLayout rows="auto, *">
<!-- Header -->
<GridLayout
row="0"
columns="*, auto, auto"
backgroundColor="#f0f2f5"
padding="12">
<!-- Title -->
<Label
  col="0"
  :text="title?title:'ClassMate'"
  color="black"
  fontSize="20"
  fontWeight="bold"
  verticalAlignment="middle"
/>

<!-- First Material Icon -->
<Label
  col="1"
  text="dehaze"
  color="black"
  fontSize="24"
  verticalAlignment="middle"
  marginLeft="16"
  class="fa"
  @tap="subjectsNav"
/>

<!-- Second Material Icon -->
<Label
  col="2"
  text="more_vert"
  color="black"
  fontSize="24"
  verticalAlignment="middle"
  marginLeft="16"
  class="fa"
  @tap="searchNav"
/>
</GridLayout>

          <!-- Content -->
          <StackLayout row="1" backgroundColor="white" height="100%">
            <ScrollView height="100%">
              <StackLayout>
                <slot/>
              </StackLayout>
            </ScrollView>
          </StackLayout>
        </GridLayout>
</RootLayout>
</template>
<script setup>
  import { $navigateTo, defineProps  } from 'nativescript-vue';
  import Search from '../Search.vue';
  import ClassPage from '../ClassPage.vue';

const props=defineProps({
title : String,
});

const searchNav=()=>{
$navigateTo(Search);
}

const subjectsNav=()=>{
$navigateTo(ClassPage);
}


  </script>
