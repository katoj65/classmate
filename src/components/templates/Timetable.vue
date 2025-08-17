<script setup>
import { defineProps, ref, onMounted, onBeforeUnmount, $navigateTo } from 'nativescript-vue';
import Time from '../controllers/time';
import { FormattedString } from '@nativescript/core';
import TimetablePage from '../TimetablePage.vue';
import TimetableDayPage from '../TimetableDayPage.vue';

const props = defineProps({
user: Object
});

const hours = ref(null);
const date = ref(null);
const time = ref(null);
const greetings = ref('Hello');

const timer = () => {
const t = new Time();
let currentTime = t.getCurrentTime();

hours.value = currentTime.hours;
date.value = currentTime.dateTime;
time.value = currentTime.time;

if (hours.value >= 0 && hours.value < 12) {
greetings.value = 'Good Morning';
} else if (hours.value >= 12 && hours.value < 17) {
greetings.value = 'Good Afternoon';
} else if (hours.value >= 17 && hours.value < 24) {
greetings.value = 'Good Evening';
}
};


const timetable=ref([
{ day: 'Monday', subject: 'Mathematics', time: '8:00 AM - 9:00 AM', status: 'done' },
{ day: 'Tuesday', subject: 'English', time: '9:00 AM - 10:00 AM', status: 'pending' },
{ day: 'Wednesday', subject: 'Biology', time: '10:30 AM - 11:30 AM', status: 'missed' },
{ day: 'Thursday', subject: 'History', time: '8:00 AM - 9:00 AM', status: 'done' },
{ day: 'Friday', subject: 'Chemistry', time: '9:00 AM - 10:00 AM', status: 'pending' },
{ day: 'Saturday', subject: 'Chemistry', time: '9:00 AM - 10:00 AM', status: 'pending' },
{ day: 'Sunday', subject: 'Chemistry', time: '9:00 AM - 10:00 AM', status: 'pending' }
]);




let intervalId;
onMounted(() => {
intervalId = setInterval(timer, 1000);
console.log(props.user);
});
onBeforeUnmount(() => {
clearInterval(intervalId);
});

const timetableNav=()=>{
$navigateTo(TimetablePage);
}

const timetableDay=()=>{
$navigateTo(TimetableDayPage);
}



const userData=()=>{





}







</script>

<template>
<StackLayout padding="20" backgroundColor="#F9FAFB">

<!-- Greeting / Header -->
<!-- <Label
:text="greetings+' '+props.user.first_name+' 🎉'"
fontSize="24"
fontWeight="bold"
color="#111827"
style="text-transform: capitalize;"
/> -->
<Label
:text="'Today is '+date+' - '+time"
fontSize="14"
marginTop="5"
color="#6B7280"
/>

<!-- <Label marginTop="10" fontSize="15">
<FormattedString>
<Span :text="'You are in  '+user.class+'  '" color="#374151"/>
</FormattedString>
</Label> -->

<!-- Section Title -->
<Label
@tap="timetableNav"
text="Weekly Revision Timetable"
marginTop="20"
fontSize="18"
fontWeight="bold"
color="#111827"
/>

<!-- Timetable Cards -->
<StackLayout marginTop="15" spacing="15">






<!-- Monday -->
<StackLayout padding="15" backgroundColor="#FFFFFF" style="border-radius: 16; elevation: 2;" v-for="(entry, index) in timetable" :key="index" marginBottom="2" @tap="timetableDay">
<GridLayout columns="*, auto" verticalAlignment="center">
<Label fontSize="18" fontWeight="bold" color="#111827">
<FormattedString>
<Span text="calendar_month" class="fa" fontSize="18" color="#111827"/>
<Span :text="' '+entry.day"/>
</FormattedString>
</Label>
<Label text="done" class="fa" col="1" fontSize="18" color="#10B981"/>
</GridLayout>
<GridLayout columns="auto, *" marginTop="8" verticalAlignment="center">
<Label text="book" class="fa" fontSize="16" color="#6B7280"/>
<Label :text="entry.subject" col="1" fontSize="15" color="#374151"/>
</GridLayout>
<GridLayout columns="auto, *" marginTop="5" verticalAlignment="center">
<Label text="alarm_on" class="fa" fontSize="16" color="#6B7280"/>
<Label :text="' ' + entry.time" col="1" fontSize="14" color="#4B5563"/>
</GridLayout>
</StackLayout>






</StackLayout>
</StackLayout>
</template>
