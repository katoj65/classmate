<template>
<ScrollView>
<StackLayout
padding="20"
margin="15"
backgroundColor="#ffffff"
borderRadius="5"
width="90%"
alignSelf="center"
elevation="4"
shadowColor="#000"
shadowOffsetWidth="0"
shadowOffsetHeight="2"
shadowOpacity="0.2"
shadowRadius="4">



<!-- Icon -->
<StackLayout
width="90"
height="90"
borderRadius="45"
borderWidth="0"
borderColor="#2A9689"
justifyContent="center"
alignItems="center"
backgroundColor="#E0F2F1"
horizontalAlignment="center"
marginBottom="16"
padding="15">

<Label text.decode="&#xf007;" class="fas" fontWeight="900" fontSize="40" color="#2A9689" textAlignment="center"/>
</StackLayout>


<!-- Details -->
<StackLayout spacing="8" marginBottom="20">
<Label
:text="''" fontSize="20" fontWeight="bold" textAlignment="center" style="text-transform: capitalize;"/>
<Label :text="'email'" fontSize="14" color="#666666" textAlignment="center"/>
<Label text="Student" fontSize="14" color="#888888" textAlignment="center"/>
</StackLayout>




<StackLayout>



<!-- Gender selector -->
<StackLayout padding="0" marginBottom="20">
<!-- Label -->
<Label
text="Gender"
fontWeight="bold"
color="#2A9689"
fontSize="16"
marginBottom="10"
/>
<!-- Selector with arrows -->
<FlexboxLayout
flexDirection="row"
justifyContent="space-between"
alignItems="center"
backgroundColor="#ffffff"
borderRadius="12"
borderColor="#2A9689"
borderWidth="1"
height="50"
paddingLeft="12"
paddingRight="12"
>

<!-- Previous Button -->
<Label
width="20%"
text.decode="&#xf104;"
fontWeight="900"
fontSize="20"
color="#2A9689"
class="fas"
textAlignment="center"
horizontalAlignment="center"
@tap="prevGender"/>

<!-- Selected Class Display -->
<Label :text="myGender.selected"
fontSize="16"
fontWeight="bold"
color="#333"
width="60%"
textAlignment="center"
horizontalAlignment="center"
/>

<!-- Next Button -->
<Label
width="20%"
text.decode="&#xf105;"
fontWeight="900"
fontSize="20"
color="#2A9689"
class="fas"
horizontalAlignment="center"
textAlignment="center"
@tap="nextGender"/>

</FlexboxLayout>
</StackLayout>








<!-- Date of Birth -->
<StackLayout padding="0" marginBottom="20">
<!-- Label -->
<Label
text="Date of Birth"
fontWeight="bold"
color="#2A9689"
fontSize="16"
marginBottom="6"
/>

<!-- Inline Fields -->
<FlexboxLayout
flexDirection="row"
justifyContent="space-between"
alignItems="center"
gap="12"
>
<!-- Day -->
<TextField
hint="DD"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
borderColor="#2A9689"
borderWidth="1"
width="30%"
keyboardType="number"
margin="0"
maxLength="2"
v-model="form.day"
/>

<!-- Month -->
<TextField
hint="MM"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
borderColor="#2A9689"
borderWidth="1"
width="30%"
keyboardType="number"
margin="0"
maxLength="2"
v-model="form.month"
/>

<!-- Year -->
<TextField
hint="YYYY"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
borderColor="#2A9689"
borderWidth="1"
width="30%"
keyboardType="number"
margin="0"
maxLength="4"
v-model="form.year"
/>
</FlexboxLayout>
</StackLayout>

<!-- Phone Number -->
<StackLayout padding="0" marginBottom="20">
<Label
text="Phone Number"
fontWeight="bold"
color="#2A9689"
fontSize="16"
marginBottom="6"
/>
<TextField
hint="Enter phone number"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
borderColor="#2A9689"
borderWidth="1"
height="50"
keyboardType="phone"
margin="0"
v-model="form.tel"
/>
</StackLayout>



<!-- School -->
<StackLayout padding="0" marginBottom="20">
<Label
text="School"
fontWeight="bold"
color="#2A9689"
fontSize="16"
marginBottom="6"
/>
<TextField
hint="Enter school name"
backgroundColor="#ffffff"
borderRadius="12"
padding="12"
fontSize="14"
color="#333"
borderColor="#2A9689"
borderWidth="1"
height="50"
autocorrect="false"
autocapitalizationType="none"
margin="0"
v-model="form.school"
/>
</StackLayout>











<!-- Class selector -->
<StackLayout padding="0" marginBottom="20">
<!-- Label -->
<Label
text="Class"
fontWeight="bold"
color="#2A9689"
fontSize="16"
marginBottom="10"
/>
<!-- Selector with arrows -->
<FlexboxLayout
flexDirection="row"
justifyContent="space-between"
alignItems="center"
backgroundColor="#ffffff"
borderRadius="12"
borderColor="#2A9689"
borderWidth="1"
height="50"
paddingLeft="12"
paddingRight="12"
>

<!-- Previous Button -->
<Label
width="20%"
text.decode="&#xf104;"
fontWeight="900"
fontSize="20"
color="#2A9689"
class="fas"
textAlignment="center"
horizontalAlignment="center"
@tap="prevClass"/>

<!-- Selected Class Display -->
<Label :text="myClass.selected"
fontSize="16"
fontWeight="bold"
color="#333"
width="60%"
textAlignment="center"
horizontalAlignment="center"
/>

<!-- Next Button -->
<Label
width="20%"
text.decode="&#xf105;"
fontWeight="900"
fontSize="20"
color="#2A9689"
class="fas"
horizontalAlignment="center"
textAlignment="center"
@tap="nextClass"/>

</FlexboxLayout>
</StackLayout>

<!-- Save Button -->
<Button text="Save" backgroundColor="#2A9689" color="#ffffff" fontSize="16" fontWeight="bold" height="50" borderRadius="12" margin="0" marginTop="24" @tap="submit"/>

</StackLayout>












</StackLayout>
</ScrollView>
</template>
<script>
import { SecureStorage } from "@heywhy/ns-secure-storage";
import Auth from "../api/authApi";

export default {
name: 'CreateProfile',
components:{

},
data(){return{
isLoading: false,
row:{
user:null,
},


myClass:{
classes: ['Senior One', 'Senior Two', 'Senior Three', 'Senior Four', 'Senior Five', 'Senior Six'],
index: 0,
selected:'Senior One',
},

myGender:{
index:0,
gender:['Male','Female','Other'],
selected:'Male',
},

form:{
day:'12',
month:'02',
year:'1999',
tel:'0752567534',
school:'Kikaaya College School',
},

formError:null,



}},


methods: {
async getUserData(){
const user=this.$store.state.user;
this.row.user=user;
},

//class
prevClass() {
if(this.myClass.index ===this.myClass.classes.length){
this.myClass.index=5;
}
if(this.myClass.index>0){
this.myClass.index--;
this.myClass.selected= this.myClass.classes[this.myClass.index];
}
},
nextClass() {
const length= this.myClass.classes.length;
if(this.myClass.index < length){
this.myClass.index++;
this.myClass.selected= this.myClass.classes[this.myClass.index];
}
},

//genders
prevGender() {
if(this.myGender.index ===this.myGender.gender.length){
this.myGender.index=2;
}
if(this.myGender.index>0){
this.myGender.index--;
this.myGender.selected= this.myGender.gender[this.myGender.index];
}
},
nextGender() {
const length= this.myGender.gender.length;
if(this.myGender.index < length){
this.myGender.index++;
this.myGender.selected= this.myGender.gender[this.myGender.index];
}
},



//submit form
submit(){
if(!this.form.day || !this.form.month || !this.form.year || !this.form.tel) {
alert('Please fill in all fields.');
return;
}

const input={
gender: this.myGender.selected,
class: this.myClass.selected,
day: this.form.day,
month: this.form.month,
year: this.form.year,
tel: this.form.tel,
school: this.form.school
};

const auth = new Auth;
auth.updateUserMetadata(input)
.then((response)=>{
if(response.statusCode === 200) {

//update secure storrage
const secureStorage = new SecureStorage();
secureStorage.get({key:'user'}).then((session)=>{
let data=JSON.parse(session);
//get current data from supabase
const metadata=JSON.parse(response.content);
const profile=metadata.user_metadata;
data.gender=profile.gender;
data.dob=profile.dob;
data.class=profile.class;
data.school=profile.school;
data.tel=profile.tel;
data.profile_staus="completed";

}).catch((error)=>{console.log(error)});

this.$navigateTo(Home,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
},
clearHistory: true,
});


}else{
console.log('Error updating profile:', response.statusCode);
}

})
.catch((error)=>{console.log(error)});





},




},


mounted(){
this.getUserData();
}








};
</script>

<style scoped>
.action-title {
font-weight: bold;
}
</style>
