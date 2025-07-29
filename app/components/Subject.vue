<template>
<Page>
<ActionBar  :title="title!=null?title:'Classmate'" backgroundColor="#2A9689" style="color:#fff;">


<ActionItem  ios.position="right" android.position="actionBar" @tap="settings">
<Label class="fas" text.decode="&#xf03a;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>

<ActionItem  ios.position="right" android.position="actionBar" @tap="settings">
<Label class="fas" text.decode="&#xf144;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>


<ActionItem  ios.position="right" android.position="actionBar" @tap="settings">
<Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>
</ActionBar>

<GridLayout>
<ScrollView>






<StackLayout>
<StackLayout  borderBottomWidth="1" borderBottomColor="#F3F4F6" v-for="(s,key) in 10" :key="key">
<GridLayout columns="*, auto" padding="12" borderBottomWidth="1" borderColor="#ccc">
<Label text="Account" col="0" verticalAlignment="center" class="text-description" />
<Label class="fas" text.decode="&#xf105;" col="1" verticalAlignment="center" style="font-size:20px;"/>
</GridLayout>
</StackLayout>

</StackLayout>












</ScrollView>


</GridLayout>

</Page>
</template>
<script>


import { StackLayout } from '@nativescript/core';
import Settings from './Settings.vue';
export default {
name:'Search',
components:{
Settings,

},
data(){return{
title:'Subject'


}},
methods: {
settings(){
this.$navigateTo(Settings);
},

},

}
</script>
