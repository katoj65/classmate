<template>
<Page class="page">
<ActionBar backgroundColor="#2A9689" class="action-bar">

<!-- Centered Title -->
<StackLayout horizontalAlignment="center" width="100%">
<Label text="ClassMate"
class="action-title"
color="white"
textAlignment="center" fontSize="25" />
</StackLayout>

</ActionBar>

<StackLayout padding="32" spacing="24" verticalAlignment="center" backgroundColor="#2A9689" v-if="screen === 0">


<Label text.decode="&#xf076;" class="fas" color="white" fontSize="50" horizontalAlignment="center" />


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
<Label
text="Don't have an account? Sign up"
textAlignment="center"
class="link"
@tap="screen = 1"
 color="White"/>

</StackLayout>


<StackLayout padding="32" spacing="24" verticalAlignment="center" backgroundColor="#2A9689" v-else>


    <Label text.decode="&#xf076;" class="fas" color="white" fontSize="50" horizontalAlignment="center" />


    <!-- Title -->
    <Label text="Register Now" textAlignment="center" class="title" />

    <!-- Email Field -->
    <TextField
    v-model="email"
    hint="Email"
    keyboardType="email"
    autocorrect="false"
    autocapitalizationType="none"
    class="input"
    />


<!-- Email Field -->
<TextField
v-model="email"
hint="Email"
keyboardType="email"
autocorrect="false"
autocapitalizationType="none"
class="input"
/>




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
    text="Sign Up"
    @tap="login"
    class="btn-primary"
    />

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
import { screen } from '@nativescript/core/platform';
import Auth from './api/authApi';
export default {
data() {
return {
screen:0,
email: 'katoj65@gmail.com',
password: '1234567890',
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







goToSignup() {
alert("Navigate to Signup Page");
},
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
