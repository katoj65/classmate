<template>
<Page>
<ActionBar title="Senior One Class" backgroundColor="#2A9689" color="#fff">
<ActionItem android.position="actionBar" ios.position="right" @tap="goHome">
<Label text.decode="&#xf060;" class="fas" style="color: #fff; font-size: 20px;" />
</ActionItem>
</ActionBar>

<ScrollView>
<StackLayout backgroundColor="#ffffff">

<!-- Clean Title Section -->
<StackLayout class="title-section">
<Label text="Senior One Subjects" class="main-title" />
<Label text="Start exploring your learning journey" class="subtitle" />
</StackLayout>

<!-- Subject List -->
<!-- Reduced bottom padding and spacing -->
<StackLayout padding="20, 20, 10, 20" spacing="12">
<StackLayout v-for="(subject, index) in row.subjects" :key="index" class="subject-card" height="100">
<GridLayout columns="auto, *, auto" rows="auto" verticalAlignment="center">
<!-- Icon -->
<Label text.decode="&#xf03a;" class="fas" col="0" fontSize="20" />

<!-- Text Info -->
<StackLayout col="1" class="subject-info" marginLeft="15">
<Label :text="subject.name" class="subject-name" />
<Label :text="subject.description" class="subject-desc" textWrap="true" />
</StackLayout>

<!-- Arrow Icon -->
<Label text="›" class="arrow-icon" col="2" />
</GridLayout>
</StackLayout>
</StackLayout>

</StackLayout>
</ScrollView>
</Page>
</template>

<script>
import { Http } from "@nativescript/core";
import { key } from './database/connection.js';
import Notification from './Notification.vue';
import Search from './Search.vue';
import Settings from './Settings.vue';
import Subject from "./Subject.vue";

export default {
name: 'Home',
components: {
Settings,
Notification,
Search,
Subject,
},

data() {
return {
title: 'ClassMate',
isLoading: false,
row: {
classID: 1,
class: null,
subjects: []
},
};
},

methods: {
async getData() {
this.isLoading = true;
try {
const response = await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/class?select=*,subject(name,description,id)&id=eq.' + this.row.classID,
method: 'GET',
headers: {
'apikey': key,
'Authorization': 'Bearer ' + key,
'Content-Type': 'application/json'
}
});

if (response.statusCode == 200) {
this.isLoading = false;
const data = response.content.toJSON();
if (data.length > 0) {
data.forEach(element => {
this.row.class = element;
this.row.subjects = element.subject;
});
}
} else {
console.log('Error fetching data:', response.statusCode);
}
} catch (error) {
console.error('Request failed:', error);
}
},

goHome() {
// Your home navigation method here
},
},

mounted() {
this.getData();
}
};
</script>

<style scoped>
.title-section {
background-color: #ffffff;
padding: 30 20 10 20;
}

.main-title {
font-size: 20;
font-weight: bold;
color: #2A9689;
text-align: center;
}

.subtitle {
font-size: 14;
color: #6B7280;
text-align: center;
margin-top: 4;
}

.subject-card {
padding: 12;
background-color: #F9FAFB;
border-radius: 8;
border-bottom-width: 1;
border-color: #E5E7EB;
margin-bottom: 0; /* Removed bottom margin */
}

.subject-icon {
font-size: 18;
color: #2A9689;
margin-right: 12;
vertical-align: center;
}

.subject-name {
font-size: 16;
font-weight: 600;
color: #111827;
}

.subject-desc {
font-size: 14;
color: #6B7280;
}

.arrow-icon {
font-size: 20;
color: #9CA3AF;
margin-left: 8;
vertical-align: center;
}
</style>
