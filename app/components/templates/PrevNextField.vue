<template>
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
</template>

<script>
export default {
data(){return{
    
myGender:{
index:0,
gender:['Male','Female','Other'],
selected:'Male',
}

}},
methods:{
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





}
}
</script>