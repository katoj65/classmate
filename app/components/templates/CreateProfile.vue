<template>
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
padding="15"
>
<Label
text.decode="&#xf007;"
class="fas"
fontWeight="900"
fontSize="40"
color="#2A9689"
textAlignment="center"

/>
</StackLayout>

<!-- Details -->
<StackLayout spacing="8" marginBottom="20">
<!-- <Label :text="user.first_name+' '+user.last_name" fontSize="20" fontWeight="bold" textAlignment="center" style="text-transform: capitalize;"/>
<Label :text="user.email" fontSize="14" color="#666666" textAlignment="center"/> -->
<Label text="Student" fontSize="14" color="#888888" textAlignment="center"/>
</StackLayout>
<StackLayout padding="20">


<Button text="Create Profile" backgroundColor="#2A9689" color="#ffffff" fontSize="16" fontWeight="bold" height="50" borderRadius="12" margin="0" marginTop="24" @tap="createProfNav" />






</StackLayout>
</StackLayout>
</template>
<script>
import CreateStudentProfile from '../createStudentProfile.vue';
export default {
props:{
user:Object,
},
components:{CreateStudentProfile},
data(){return{
row:{
user:this.props.user
}
}},
methods: {
createProfNav() {
console.log(this.user);
return;
this.$navigateTo(CreateStudentProfile,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
},
},






}
</script>