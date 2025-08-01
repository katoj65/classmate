<template>
<Page>
<Label text="Show some data" @tap="getData"></Label>




</Page>
</template>
<script>
import subjectApi from './api/subjectApi';
export default {
data(){
return{


}},


methods:{
getData(){
const subject=new subjectApi;
subject.getAll().then((data)=>{
console.log(data);
}).catch((error)=>{
console.log(error);
});



}




},

mounted(){
// this.getData();
}



}
</script>