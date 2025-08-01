<template>
<Page>
<ActionBar title="Create Timetable" backgroundColor="#2A9689" color="#fff">
<ActionItem ios.position="right" android.position="actionBar">
<Label class="fas" text.decode="&#xf142;" style="color:#fff; font-size: 20px; padding-left: 30px;" @tap="settingsNav"/>
</ActionItem>
</ActionBar>

<ScrollView>
<StackLayout padding="24" spacing="24" backgroundColor="#ffffff">

<!-- Welcome Message -->
<Label text="Add subject to timetable" class="welcome" marginBottom="10"/>


<!-- Subject Picker -->
<Label text="Select Subject" class="label" />
<ListPicker :items="subjects" v-model="selectedIndex" class="input" />


<!-- Subject Picker -->
<Label text="Select Subject" class="label" marginTop="20" />
<ListPicker :items="days"  class="input" />




<GridLayout columns="*,*" columnGap="10" marginTop="20">
  <StackLayout col="0">
    <Label text="Start Time" class="label" />
    <ListPicker :items="hours" class="input" />
  </StackLayout>

  <StackLayout col="1" paddingLeft="10">
    <Label text="End Time" class="label" />
    <ListPicker :items="hours" class="input" />
  </StackLayout>
</GridLayout>


<!-- Submit Button -->
<Button text="➕ Add to Timetable" @tap="submit" class="btn" marginTop="20" />

</StackLayout>
</ScrollView>
</Page>
</template>

<script>
import Settings from './Settings.vue';
export default {
name: 'create_timetable',
components:{Settings},
data() {
return {
subjects: ['Mathematics', 'English', 'Biology', 'History', 'Chemistry'],
selectedIndex: 0,
time: new Date(),
days:[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
hours:[1,2,3,4,5,6,7,8,9,10,11,12],
};
},
methods: {
submit() {
const subject = this.subjects[this.selectedIndex];
alert(`✔️ ${subject} added to your timetable!`);
},

settingsNav() {
this.$navigateTo(Settings,
{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
}





}
};
</script>

<style scoped>
.welcome {
font-size: 20;
font-weight: bold;
color: #2A9689;
text-align: left;
}

.label {
font-size: 16;
font-weight: 600;
color: #374151;
}

.input {
border-width: 1;
border-color: #CBD5E1;
border-radius: 8;
padding: 10;
background-color: #F9FAFB;
}

.btn {
background-color: #2A9689;
color: white;
font-size: 16;
padding: 12;
border-radius: 10;
font-weight: bold;
}
</style>
