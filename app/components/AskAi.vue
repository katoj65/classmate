<template>
<Page>
<ActionBar  :title="title!=null?title:'Classmate'" backgroundColor="#2A9689" style="color:#fff;">

<ActionItem  ios.position="right" android.position="actionBar" @tap="settings">
<Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>
</ActionBar>













<GridLayout>
<Label text="You're on the ask page page!" />
</GridLayout>
</Page>
</template>

<script>
import Settings from './Settings.vue';
export default {
name: 'AskAi',
components:{
Settings
},
data(){return{
title: 'Ask questions'


}},


methods: {
settings(){
this.$navigateTo(Settings);
}



},

};
</script>
