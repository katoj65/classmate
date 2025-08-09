<template>
<ScrollView >
<StackLayout
padding="0"
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
width="60"
height="60"
borderRadius="45"
borderWidth="0"
borderColor="#2A9689"
justifyContent="center"
alignItems="center"
backgroundColor="#E0F2F1"
horizontalAlignment="center"
marginBottom="16"
padding="15"
marginTop="20">

<Label text.decode="&#xf007;" class="fas" fontWeight="900" fontSize="30" color="#2A9689" textAlignment="center"/>
</StackLayout>

<!-- Details -->
<StackLayout spacing="8" marginBottom="20">
<Label
:text="userData.first_name+' '+userData.last_name" fontSize="20" fontWeight="bold" textAlignment="center" style="text-transform: capitalize;"/>
<Label :text="userData.email" fontSize="14" color="#666666" textAlignment="center"/>
<Label text="Student" fontSize="14" color="#888888" textAlignment="center"/>
</StackLayout>



<StackLayout backgroundColor="#F0FDF4" padding="25" borderRadius="20">
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
@tap="selectGenderModel"
>

<!-- Previous Button -->


<!-- Selected Class Display -->
<Label :text="form.gender"
fontSize="16"
fontWeight="bold"
color="#333"
width="100%"
textAlignment="center"
horizontalAlignment="center"
/>

<!-- Next Button -->
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
@tap="selectClassModel"
>



<!-- Selected Class Display -->
<Label :text="form.class"
fontSize="16"
fontWeight="bold"
color="#333"
width="100%"
textAlignment="center"
horizontalAlignment="center"
/>

<!-- Next Button -->

</FlexboxLayout>
</StackLayout>





<!-- Save Button -->
<Button text="Save" backgroundColor="#2A9689" color="#ffffff" fontSize="16" fontWeight="bold" height="50" borderRadius="12" margin="0" marginTop="24" @tap="submit"/>













</StackLayout>












</StackLayout>
</ScrollView>
</template>
<script>
import Auth from '../api/authApi';
import SelectGender from '../modals/SelectGender.vue';
import SelectClass from '../modals/SelectClass.vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Profile from '../Profile.vue';


export default {
props:{
user:Object
},

data(){return{
isLoading: false,

userData:{},

form:{
day:'12',
month:'02',
year:'1999',
tel:'0752567534',
school:'Kikaaya College School',
gender:'Select gender',
class:'Select class',
},

formError:null,


}},

methods:{

//submit form
async submit(){

if(!this.form.day || !this.form.month || !this.form.year || !this.form.tel) {
alert('Please fill in all fields.');
return;
}

if(this.form.gender=='Select gender' || this.form.class=='Select class'){
alert('Select gender and class.');
return;
}

const input={
gender: this.form.gender,
class: this.form.class,
day: this.form.day,
month: this.form.month,
year: this.form.year,
tel: this.form.tel,
school: this.form.school
};

const auth = new Auth;
const update=await auth.updateUserMetadata(input);
console.log(update);
if(update.statusCode==200){
const data=JSON.parse(update.content);
const user=JSON.stringify(data.user_metadata);
ApplicationSettings.setString('user',user);

this.$navigateTo(Profile,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut',
},
clearHistory: true,
});



}else{
console.log(update.statusCode);
}

},







selectGenderModel(){
this.$showModal(SelectGender).then((select)=>{
this.form.gender=select||'Select gender';
});
},




selectClassModel(){
this.$showModal(SelectClass).then((select)=>{
this.form.class=select||'Select class';
});
},

getUser(){
const data=ApplicationSettings.getString('user',null);
let user=JSON.parse(data);
this.userData=user;
}


},
mounted(){
this.getUser();
}




}
</script>
