<template>
<Page>
<Label text="Show some data"></Label>




</Page>
</template>

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