<script setup>
import { ref, reactive, $navigateTo } from "nativescript-vue";
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Auth from './api/authApi';
import Home from "./Home.vue";
import SpinnerButtom from "./templates/SpinnerButtom.vue";
import FormError from "./templates/FormError.vue";



const form=reactive({
email:'katoj65@gmail.com',
password:'1234567890'
});

const isLoading=ref(false);
const inputError=ref(null);
const screen=ref(0);

const changeScreen=(item)=>{
screen.value=item;
}


const login = async ()=>{
inputError.value='';
if (!form.email || !form.password) {
inputError.value='Please enter both email and password.';
return;
}

isLoading.value=true;
ApplicationSettings.clear();
const auth = new Auth();

auth.loginApi(form.email, form.password)
.then((response)=> {
isLoading.value=false;

if(response.statusCode==200){

const data=response.content ? response.content.toJSON():{};
const token=data.access_token;
const refresh_token=data.refresh_token;

ApplicationSettings.setString('access_token',token);
ApplicationSettings.setString('refresh_token',refresh_token);
ApplicationSettings.setBoolean('isLoggedIn',true);

auth.userSession()
.then((user)=>{

if(user.statusCode==200){

const user_data=JSON.parse(user.content);
const metadata=user_data.user_metadata;
ApplicationSettings.setString('user',JSON.stringify(metadata));
$navigateTo(Home, {clearHistory: true});

}else{
inputError.value='Could not fund user';
}

})
.catch((error)=>{console.log(error)});

}else{
console.log(response.statusCode);
console.log(response);
inputError.value='Invalid credentials';
}

}).catch(error=>{console.log(error);});
}



const register=reactive({
fname:'joshua',
lname:'kato',
email:'katoj65@gmail.com',
password:'1234567890'
});


const submitForm2 = async ()=>{
inputError.value=null;
    if (!register.fname || !register.lname || !register.email || !register.password) {
    inputError.value = 'Please fill in all fields.';
    return;
  }

  const auth = new Auth();
  isLoading.value=true;

try{
const response=await auth.signupApi(register.fname,register.lname,register.email,register.password);
isLoading.value=false;

if(response.statusCode==200){

const data = response.content ? response.content.toJSON() : {}
const userdata = JSON.stringify(data.user.user_metadata);

const refresh_token = data.refresh_token;
const token = data.access_token;

ApplicationSettings.setBoolean('isLoggedIn',true);
ApplicationSettings.setString('access_token', token);
ApplicationSettings.setString('refresh_token', refresh_token);
ApplicationSettings.setString('user', userdata);

$navigateTo(Home,{clearHistory: true});

}else if(response.statusCode === 422){
  inputError.value = 'Email already registered.';
} else{
  inputError.value= 'Registration failed. Please try again.';
}

}catch(error){
console.log(error);
}

}










</script>
<template>
<Page actionBarHidden="true">
<RootLayout  backgroundColor="#f0f2f5">
<GridLayout rows="auto, *" >
<!-- Header -->
<GridLayout
row="0"
columns="*, auto, auto"
backgroundColor="#f0f2f5"
padding="12">
<!-- Title -->
<Label
text="ClassMate"
color="black"
fontSize="25"
fontWeight="bold"
verticalAlignment="middle"
textAlignment="center"
padding="20"
/>
</GridLayout>

<!-- Content -->
<StackLayout row="1" backgroundColor="#f0f2f5" height="100%" padding="32" spacing="24" verticalAlignment="center">
<ScrollView height="100%">
<StackLayout paddingTop="30%">

<Label text="diversity_2" class="fa" fontSize="60" color="black" textAlignment="center"/>




<StackLayout v-if="screen==0">

<Label text="Welcome Back" textAlignment="center" fontSize="20" marginBottom="20" />

<form-error :error="inputError"/>

<TextField
v-model="form.email"
hint="Email"
keyboardType="email"
autocorrect="false"
autocapitalizationType="none"
class="input"
marginBottom="20"
/>

<!-- Password Field -->
<TextField
v-model="form.password"
hint="Password"
secure="true"
class="input"
marginBottom="20"
/>

<Button text="Login" class="btn-primary" marginBottom="20" @tap="login" v-if="isLoading==false"/>
<spinner-buttom v-else title="LOGIN" marginBottom="20"/>


<Label text="Don't have an account? Sign up" textAlignment="center" color="black" marginBottom="20" @tap="changeScreen(1)"/>
</StackLayout>



<StackLayout v-else>
<Label text="Create Account" textAlignment="center" fontSize="20" />
<form-error :error="inputError"/>

<TextField v-model="register.fname"
hint="First name"
autocorrect="false"
autocapitalizationType="none"
class="input"
marginTop="20"
/>




<TextField v-model="register.lname"
hint="Last name"
autocorrect="false"
autocapitalizationType="none"
class="input"
marginTop="20"
/>


<TextField
v-model="register.email"
hint="Email"
keyboardType="email"
autocorrect="false"
autocapitalizationType="none"
class="input"
marginTop="20"
/>


<!-- Password Field -->
<TextField
v-model="register.password"
hint="Password"
secure="true"
class="input"
marginTop="20"
/>


<Button text="SignUp" class="btn-primary" marginTop="20" @tap="submitForm2" v-if="isLoading==false"/>
<spinner-buttom v-else title="SIGNUP" marginTop="20"/>




<Label text="Have an account? Sign in" textAlignment="center" color="black" marginTop="20" @tap="changeScreen(0)"/>
</StackLayout>

</StackLayout>
</ScrollView>
</StackLayout>
</GridLayout>
</RootLayout>
</Page>
</template>