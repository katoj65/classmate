<script setup>
import { defineProps, onMounted,reactive, $showModal, ref, $navigateTo} from 'nativescript-vue';
import SelectClass from '../modals/SelectClass.vue';
import SelectGender from '../modals/SelectGender.vue';
import FormError from './FormError.vue';
import Auth from '../api/authApi';
import { ApplicationSettings } from '@nativescript/core';
import ProfilePage from '../ProfilePage.vue';



const props = defineProps({
user: Object
});

const form=reactive({
day:'12',
month:'02',
year:'1999',
tel:'0752567534',
school:'Kikaaya College School',
gender:'Select gender',
class:'Select class',
});


const error=ref(null);
const isLoading=ref(false);

const submit = async ()=>{
error.value=null;
if(!form.day || !form.month || !form.year || !form.tel || !form.school || !form.gender || !form.class){
error.value='Fill in all fields';
return;
}

if(form.gender=='Select gender' || form.class=='Select class'){
error.value='Fill in all fields';
return;
}

const auth=new Auth();
const update=await auth.updateUserMetadata(form);
if(update.statusCode==200){

const data=JSON.parse(update.content);
let user =data.user_metadata;

let prev=JSON.parse(ApplicationSettings.getString('user',null));
prev.school=user.school;
prev.gender=user.gender;
prev.dob=user.dob;
prev.class=user.class;
prev.profile_status=user.profile_status;
ApplicationSettings.setString('user', JSON.stringify(prev));

$navigateTo(ProfilePage);


}else{
console.log(update.statusCode);
error="An error has occured";
}






}




const genderModal=()=>{
$showModal(SelectGender).then((select)=>{
if(select){
form.gender=select;
}
});
}

const classModal=()=>{
$showModal(SelectClass).then((select)=>{
if(select){
form.class=select;
}
});
}












// onMounted(()=>{
// console.log(props);
// });






</script>
<template>
<StackLayout padding="10" alignSelf="center">


    <StackLayout
    width="60"
    height="60"
    borderRadius="45"
    borderWidth="0"
    borderColor="black"
    justifyContent="center"
    alignItems="center"
    backgroundColor="#D8DCDE"
    horizontalAlignment="center"
    marginBottom="16"
    padding="15"
    marginTop="20">

    <Label text="contacts_product" class="fa" fontWeight="900" fontSize="30" color="black" textAlignment="center"/>
    </StackLayout>




<StackLayout spacing="8">

<Label :text="props.user.first_name+' '+props.user.last_name" fontSize="20" fontWeight="bold" textAlignment="center" style="text-transform: capitalize;"/>
<Label :text="props.user.email" fontSize="14" color="#666666" textAlignment="center"/>
<Label text="Student" fontSize="14" color="#888888" textAlignment="center"/>







<StackLayout backgroundColor="#FFFF" padding="25" borderRadius="20" marginTop="20">
<form-error :error="error" padding="10"></form-error>
<StackLayout padding="0" marginBottom="20">
<!-- Label -->
<Label
text="Gender"
fontWeight="bold"
color="black"
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
height="50"
paddingLeft="12"
paddingRight="12"
class="input"
@tap="genderModal"

>

<!-- Previous Button -->
<!-- Selected Class Display -->
<Label

fontSize="16"
fontWeight="bold"
color="#333"
width="100%"
textAlignment="center"
horizontalAlignment="center"
:text="form.gender"
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
    color="black"
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
    width="30%"
    keyboardType="number"
    margin="0"
    maxLength="2"
    v-model="form.day"
    class="input"
    />

    <!-- Month -->
    <TextField
    hint="MM"
    backgroundColor="#ffffff"
    borderRadius="12"
    padding="12"
    fontSize="14"
    color="#333"
    class="input"
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
    class="input"
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
    color="black"
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
    class="input"
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
    color="black"
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
    class="input"
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
    color="black"
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
    class="input"
    height="50"
    paddingLeft="12"
    paddingRight="12"
    @tap="classModal"

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

<Button text="Save" class="btn-primary" marginTop="10" @tap="submit"/>














</StackLayout>












</StackLayout>
</StackLayout>
</template>