<template>
<Page class="modal-container">
<StackLayout class="modal-box">
<Label text="Select class" marginBottom="10" class="text-description"/>
<Label v-for="(g,key) in gender"
:key="key"
:text="g.name"
borderColor="#2A9689"
borderWidth="1"
height="50"
padding="15"
marginBottom="10"
borderRadius="12"
alignItems="center"
@tap="setGender(g.name)"
class="text-description"
/>
</StackLayout>
</Page>
</template>
<script>
export default {
props:{},
data(){
return{
gender:[
{name:'Senior One'},
{name:'Senior Two'},
{name:'Senior Three'},
{name:'Senior Four'},
{name:'Senior Five'},
{name:'Senior Six'},

],

}},

methods: {
close() {
this.$modal.close("Closed");
},

setGender(gender){
this.$modal.close(gender);
}


}
};
</script>

<style scoped>
.modal-container {
background-color: transparent;

}

.modal-box {
background-color: white;
margin: 40;
padding: 10;
border-radius: 50;
shadow-color: black;
shadow-opacity: 0.3;
shadow-radius: 8;
elevation: 10;
width:90%;

}
</style>
