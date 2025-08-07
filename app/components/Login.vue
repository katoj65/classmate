<template>
<Page class="page">
<ActionBar backgroundColor="#2A9689" class="action-bar" flat="true">

<!-- Centered Title -->
<StackLayout horizontalAlignment="center" width="100%">
<Label text="ClassMate"
class="action-title"
color="white"
textAlignment="center" fontSize="25" />
</StackLayout>

</ActionBar>

<StackLayout padding="32" spacing="24" verticalAlignment="center" backgroundColor="#2A9689" v-if="screen === 0">


<Label text.decode="&#xf076;" class="fas" fontSize="50" color="white" textAlignment="center"/>


<!-- Title -->
<Label text="Welcome Back" textAlignment="center" class="title" />

<!-- Email Field -->
<TextField
v-model="email"
hint="Email"
keyboardType="email"
autocorrect="false"
autocapitalizationType="none"
class="input"
/>

<!-- Password Field -->
<TextField
v-model="password"
hint="Password"
secure="true"
class="input"
/>

<!-- Login Button -->
<Button
text="Login"
@tap="login"
class="btn-primary"
/>

<!-- Sign Up Link -->
<Label text="Don't have an account? Sign up" textAlignment="center" class="link"
@tap="screen = 1"
color="White"/>

</StackLayout>


<StackLayout padding="32" spacing="24" verticalAlignment="center" backgroundColor="#2A9689" v-else>


<Label text.decode="&#xf076;" class="fas" fontSize="50" color="white" textAlignment="center"/>


<!-- Title -->
<Label text="Register Now" textAlignment="center" class="title" />

<user-error :error="regError"/>
<!-- Email Field -->
<TextField
v-model="fname"
hint="First name"
keyboardType="default"
autocorrect="false"
autocapitalizationType="none"
secure="false"
class="input"
/>


<TextField
v-model="lname"
hint="Last name"
keyboardType="default"
autocorrect="false"
secure="false"
autocapitalizationType="none"
class="input"
/>




<!-- Email Field -->
<TextField
v-model="user_email"
hint="Email"
keyboardType="email"
autocorrect="false"
autocapitalizationType="none"
class="input"
/>


<!-- Password Field -->
<TextField
v-model="user_password"
hint="Password"
secure="true"
class="input"
/>

<!-- Login Button -->
<Button text="Sign Up" @tap="signup" class="btn-primary" v-if="isLoading2==false"/>
<loader-button-primary title="Sign Up" v-else/>




<!-- Sign Up Link -->
<Label
text="Have an account? Sign in"
textAlignment="center"
class="link"
@tap="screen=0"
color="White"/>

</StackLayout>


</Page>
</template>

<script>
import UserError from './templates/UserError.vue';
import Auth from './api/authApi';
import { SecureStorage } from "@heywhy/ns-secure-storage";
import CreateProfile from './CreateProfile.vue';
import LoaderButtonPrimary from './templates/LoaderButtonPrimary.vue';
import * as ApplicationSettings from '@nativescript/core/application-settings';
import Home from './Home.vue';

export default {
components: { UserError, Home, LoaderButtonPrimary },

data() {
return {
screen:0,
message:null,
regError:null,
isLoading:false,
isLoading2:false,

//login attributes
email: 'katoj65@gmail.com',
password: '1234567890',

//registration attributes
fname:'joshua',
lname:'kato',
user_email:'katoj65@gmail.com',
user_password:'1234567890',



};
},



methods: {

login() {
if (!this.email || !this.password) {
alert('Please enter both email and password.');
return;
}

const auth = new Auth;
auth.loginApi(this.email, this.password)
.then((response)=>{
console.log(response);
}).catch(error=>{console.log(error);});

},



signup() {

this.regError = null;
if (!this.user_email || !this.user_password || !this.fname || !this.lname) {
this.regError='Please fill in all fields.';
return;
}

this.isLoading2 = true;
const auth = new Auth;
auth.signupApi(this.fname, this.lname, this.user_email, this.user_password)
.then((response) => {
this.isLoading2=false;
if(response.statusCode === 200) {
const data=response.content ? response.content.toJSON():{};
const token=data.access_token;
ApplicationSettings.setBoolean('isActive', true);
ApplicationSettings.setString('access_token',token);
this.createUserSession();

this.$navigateTo(Home,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});

}else if(response.statusCode === 422) {
this.regError='Email already registered.';
}

}).catch(error => {
console.log(error);
});













},


async getUser(){


const session=new SecureStorage();
const token=await session.get({key:'access_token'});
if(token==null){
return;
}

const auth=new Auth;
const user= await auth.getUserApi(token);
if(user){
const data=JSON.parse(user.content)
const user_meta=data.user_metadata;
let status=user_meta?user_meta:{};
console.log(status.profile_staus);

if(status.profile_staus=='registered'){
console.log(status);


this.$navigateTo(CreateProfile,{
transiton:{
name:'slide',
duration: 300,
curve: 'easeInOut'
},
clearHistory: true,
props:{
user:status
}
});
}



}else{
console.log('Error');
}













},




async createUserSession(){
const auth=new Auth;
const data=await auth.userSession();
if(data.statusCode==200){
const user_data=JSON.parse(data.content);
const user=user_data.user_metadata;
//create session data
ApplicationSettings.setString('user',JSON.stringify(user));
}else{
console.log(data.statusCode);
return;
}
}






},







};
</script>

<style scoped>
.page {
background-color: #2A9689;
}
.logo {
margin-bottom: 8;
}
.title {
font-size: 24;
font-weight: bold;
color: #022F2E;
margin-bottom: 8;
}
.input {
height: 50;
padding: 12;
font-size: 16;
background-color: white;
border-width: 1;
border-color: #022F2E;
border-radius: 10;
color: #022F2E;
}
.btn-primary {
background-color: black;
color: white;
font-weight: bold;
height: 50;
border-radius: 12;
}
.link {
font-size: 14;
color: #2A9689;
margin-top: 8;
}
.action-title {
font-size: 18;
font-weight: bold;
}
</style>
