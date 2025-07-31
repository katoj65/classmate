<template>
<Page>
<ActionBar title="ClassMate" backgroundColor="#2A9689" color="#fff">

<ActionItem ios.position="right" android.position="actionBar" @tap="homeNav">
<Label class="fas" text.decode="&#xf518;" style="color:#fff;font-size:20px;" />
</ActionItem>

<ActionItem ios.position="right" android.position="actionBar">
<Label class="fas" text.decode="&#xf0f3;" style="color:#fff;font-size:20px;padding-left:30px;" />
</ActionItem>

<ActionItem ios.position="right" android.position="actionBar">
<Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;" />
</ActionItem>

</ActionBar>

<GridLayout rows="*" columns="*">

<!-- Main content -->
<ScrollView row="0" col="0">
<StackLayout padding="20" spacing="20">

<!-- Welcome Message -->
<Label :text="greetings+' ' + user.name + '! 🎉'" class="h1" textWrap="true" />

<Label :text="date+' - '+time" class="h2" v-if="date!=null"/>


<!-- Class Info -->
<Label :text="'You are in: ' + user.class" class="h2" @tap="homeNav"/>

<!-- Timetable Header -->
<Label text="📚 Your Reading Timetable" class="h2" />

<!-- Timetable List -->
<StackLayout>
<StackLayout
v-for="(entry, index) in timetable"
:key="index"
padding="10"
borderBottomWidth="1"
borderBottomColor="#E5E7EB"

>
<Label :text="'📅 ' + entry.day" class="text-title" />

<GridLayout columns="*, auto" rows="auto" verticalAlignment="center">
<Label :text="'Subject: ' + entry.subject" col="0" class="text-description" />
<Label :text="getStatusIcon(entry.status)" col="1" class="status-icon" />
</GridLayout>

<Label :text="'Time: ' + entry.time" class="text-description" />
</StackLayout>
</StackLayout>

</StackLayout>
</ScrollView>

<!-- FAB -->
<Button
text.decode="&#xf1d8;"
class="fab fas"
row="0"
col="0"
@tap="onFabTap"
horizontalAlignment="right"
verticalAlignment="bottom"
padding="15"
margin="20"
/>

</GridLayout>
</Page>
</template>

<script>
import Class from './Class.vue';
import Time from './controllers/time';
export default {
name: 'Welcome',
components: {
Class
},

data() {
return {
greetings:'Hello',
hours:null,
date:null,
time:null,
user: {
name: 'Joshua',
class: 'Senior One'
},
timetable: [
{ day: 'Monday', subject: 'Mathematics', time: '8:00 AM - 9:00 AM', status: 'done' },
{ day: 'Tuesday', subject: 'English', time: '9:00 AM - 10:00 AM', status: 'pending' },
{ day: 'Wednesday', subject: 'Biology', time: '10:30 AM - 11:30 AM', status: 'missed' },
{ day: 'Thursday', subject: 'History', time: '8:00 AM - 9:00 AM', status: 'done' },
{ day: 'Friday', subject: 'Chemistry', time: '9:00 AM - 10:00 AM', status: 'pending' }
]
};
},

methods: {
getStatusIcon(status) {
switch (status) {
case 'done': return '✅';
case 'pending': return '⏳';
case 'missed': return '❌';
default: return '❓';
}
},
onFabTap() {
alert('FAB tapped! Add a new timetable entry?');
},
homeNav() {
this.$navigateTo(Class,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
},
timer(){
const time=new Time;
let currentTime = time.getCurrentTime();
this.hours=currentTime.hours;
this.date=currentTime.dateTime;
this.time=currentTime.time;
if (this.hours >= 0 && this.hours < 12) {
this.greetings = 'Good Morning';
}else if (this.hours >= 12 && this.hours < 17) {
this.greetings = 'Good Afternoon';
}else if (this.hours >= 17 && this.hours < 24) {
this.greetings = 'Good Evening';
}


}

},

mounted(){
setInterval(this.timer, 1000);

},

beforeDestroy() {
clearInterval(this.timer);
}




};
</script>

<style scoped>
.h1 {
font-size: 24;
font-weight: bold;
color: #2A9689;
}
.h2 {
font-size: 18;
font-weight: bold;
margin-bottom: 10;
}
.text-title {
font-weight: bold;
font-size: 16;
}
.text-description {
font-size: 14;
color: #555;
}
.status-icon {
font-size: 18;
margin-left: 10;
color: #4B5563;
}
.fab {
background-color: #2A9689;
color: white;
border-radius: 50;
height: 60;
width: 60;
font-size: 22;
vertical-align: middle;
text-align: center;
elevation: 8;
margin-bottom:50px;
}
</style>
