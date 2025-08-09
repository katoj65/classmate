<template>
<Page>
<ActionBar title="ClassMate" backgroundColor="#2A9689" color="#fff">
<ActionItem ios.position="right" android.position="actionBar" @tap="homeNav">
<Label class="fas" text.decode="&#xf038;" style="color:#fff;font-size:20px;" />
</ActionItem>
<ActionItem ios.position="right" android.position="actionBar">
<Label class="fas" text.decode="&#xf0f3;" style="color:#fff;font-size:20px;padding-left:30px;" />
</ActionItem>
<ActionItem ios.position="right" android.position="actionBar" @tap="settingsNav">
<Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;" />
</ActionItem>
</ActionBar>

<GridLayout rows="*" columns="*" v-if="userData.profile_status=='completed'">

<!-- Main content -->
<ScrollView row="0" col="0">

<StackLayout padding="20" spacing="20">

<!-- Welcome Message -->
<Label :text="this.greetings+' '+userData.first_name+'! 🎉'" class="h1" textWrap="true"  style="text-transform:capitalize"/>

<Label :text="date+' - '+time" class="h2" v-if="date!=null"/>


<!-- Class Info -->
<Label  class="h2" @tap="homeNav">
<FormattedString>
<Span :text="'You are in: '+userData.class+'  '"/>
<Span class="fas h1" text.decode="&#xf058;" style="font-size:18px;"/>
</FormattedString>
</Label>

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
<Label class="text-title">
<FormattedString>
<Span class="fas h1" text.decode="&#xf073;" style="font-size:16px;"/>
<Span :text="' '+entry.day"/>
</FormattedString>
</Label>



<GridLayout columns="*, auto" rows="auto" verticalAlignment="center">
<Label :text="'Subject: ' + entry.subject" col="0" class="text-description" />
<Label :text="getStatusIcon(entry.status)" col="1" class="status-icon" />
</GridLayout>

<Label :text="'Time: ' + entry.time" class="text-description" />
</StackLayout>
</StackLayout>


<StackLayout height="150">

<Button
class="no-shadow-button"
marginTop="20"
backgroundColor="#E8FCF3"
borderRadius="10"
fontWeight="bold"
@tap="addItemNav">
<FormattedString>
<Span text.decode="&#xf055;  " class="fas" style="font-size:17px;"/>
<Span text="Add subject" style="font-size:17px;">
</Span>
</FormattedString>
</Button>




</StackLayout>




</StackLayout>
<!-- <StackLayout>
<create-profile :user="row.user" />
</StackLayout> -->

</ScrollView>




<!-- FAB -->
<Button text.decode="&#xf1d8;" class="fab fas" row="0" col="0" @tap="askAiNav" horizontalAlignment="right" verticalAlignment="bottom" padding="15" margin="20"/>

</GridLayout>

<GridLayout rows="*" columns="*" v-else>
<create-student-profile :user="user"/>
</GridLayout>




















</Page>
</template>

<script>
import AddTimeTable from './AddTimeTable.vue';
import Class from './Class.vue';
import Time from './controllers/time';
import Sqlite from 'nativescript-sqlite';
import AskAi from './AskAi.vue';
import Test from './Test.vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import CreateStudentProfile from './templates/CreateStudentProfile.vue';
import Settings from './Settings.vue';
import { FormattedString } from '@nativescript/core';
export default {
name: 'Welcome',
props:{
user:Object
},

components: {
Class,
AddTimeTable,
AskAi,
Test,
CreateStudentProfile
},


data() {
return {
userData:{},

row:{
myTimetable:[],
},

database:null,
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


},

async initaliseDatabase(){
if(!Sqlite.exists("classmate.db")) {
console.log("Creating new DB...");
}else{
console.log('Database exist');
}

//create database instance
await new Sqlite('classmate.db').then((db)=>{
this.database = db;

//create table
db.execSQL('CREATE TABLE IF NOT EXISTS timetable (id INTEGER PRIMARY KEY AUTOINCREMENT, user_email TEXT, subject TEXT, day TEXT, from_time TEXT, to_time TEXT, status TEXT)');

//query timetable data
db.all("SELECT * FROM timetable WHERE user_email = ?",['katoj65@gmail.com']).then(timeTableData=>{
console.log(timeTableData);
this.row.myTimetable=timeTableData;
}).catch(error=>console.error("Error querying timetable:", error));
}).catch((error)=>{
console.error("Error creating DB:", error);});
},

addItemNav(){
this.$navigateTo(AddTimeTable,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
},

askAiNav(){
this.$navigateTo(Test,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
},

getUserData(){
const data=JSON.parse(ApplicationSettings.getString('user',null));
this.userData=data;
},
settingsNav(){
this.$navigateTo(Settings,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
},



},

mounted(){
setInterval(this.timer, 1000);
this.initaliseDatabase();
this.getUserData();
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



.no-shadow-button {
elevation: 0;
android-elevation: 0;          /* Android: removes shadow */
shadow-opacity: 0;      /* iOS: removes shadow */
shadow-radius: 0;
shadow-color: transparent;
shadow-offset: 0 0;
}



</style>
