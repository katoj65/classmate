<template>
<Page>
<ActionBar  :title="title!=null?title:'Classmate'" backgroundColor="#2A9689" style="color:#fff;">



<ActionItem  ios.position="right" android.position="actionBar" @tap="settings">
<Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>
</ActionBar>

<Label text="Welcome to User settings"></Label>

</Page>

</template>
<script>
import Settings from './Settings.vue';
export default {
name:'Search',
components:{
Settings,

},
data(){return{
title:'Search'


}},
methods: {
settings(){
this.$navigateTo(Settings,{transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}});
},

},

}
</script>
