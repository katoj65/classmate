<template>
<Page>
<ActionBar  :title="title!=null?title:'Classmate'" backgroundColor="#2A9689" style="color:#fff;">

<ActionItem  ios.position="right" android.position="actionBar">
<Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>
</ActionBar>
<Label text="Welcome to User settings"></Label>


</Page>
</template>
<script>
export default {
name:'User settings',
components:{

},
data(){return{
title:'Settings'

}},
methods: {


},

}
</script>