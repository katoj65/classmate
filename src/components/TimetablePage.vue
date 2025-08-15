<script setup>
import { $navigateTo } from 'nativescript-vue';
import TimetableDayPage from './TimetableDayPage.vue';




const timetableDayNav=()=>{
$navigateTo(TimetableDayPage);
}
</script>

<template>
<Page actionBarHidden="true">
<StackLayout class="page-container">

<!-- Header -->
<StackLayout class="header" backgroundColor="#f0f2f5">
<Label text="Weekly Revision Timetable" class="header-title"/>
<Label text="Your study plan for the week" class="header-subtitle"/>
</StackLayout>

<!-- Timetable List -->
<ScrollView>
<StackLayout class="timetable-list">
<StackLayout v-for="day in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']" :key="day" class="timetable-card" @tap="timetableDayNav">

<Label :text="day" class="day-title"/>
<GridLayout columns="*, auto" rows="auto" class="subject-row">
<Label text="Subject: Mathematics" col="0" class="subject-text"/>
<Label text="alarm_on" col="1" class="fa time-icon"/>
</GridLayout>
<Label text="Time: 8:00 AM - 9:00 AM" class="time-text"/>
</StackLayout>
</StackLayout>
</ScrollView>
</StackLayout>
</Page>
</template>

<style scoped>
.page-container {
background-color: #F9FAFB; /* Same soft grey-white as before */
height: 100%;
}

.header {
padding: 20;
background-color: white;
}

.header-title {
font-size: 20;
font-weight: bold;
color: #2C3E50;
}

.header-subtitle {
font-size: 14;
color: #7F8C8D;
margin-top: 4;
}

.timetable-list {
padding: 15;
}

.timetable-card {
background-color: white;
border-radius: 16;
padding: 15;
margin-bottom: 15;
shadow-color: #000;
shadow-opacity: 0.08;
shadow-radius: 4;
elevation: 1;
}

.day-title {
font-size: 18;
font-weight: bold;
color: #34495E;
}

.subject-row {
margin-top: 8;
margin-bottom: 4;
}

.subject-text {
font-size: 15;
color: #7F8C8D;
}

.time-icon {
font-size: 20;
color: #7F8C8D;
}

.time-text {
font-size: 14;
color: #95A5A6;
}

.fab {
position: absolute;
bottom: 20;
right: 20;
background-color: #3498DB;
width: 56;
height: 56;
border-radius: 28;
justify-content: center;
align-items: center;
shadow-color: #000;
shadow-opacity: 0.25;
shadow-radius: 6;
elevation: 4;
}

.fab-icon {
font-size: 28;
color: white;
text-align: center;
}
</style>
