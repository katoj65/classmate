<template>
<ActionBar  :title="title!=null?title:'Classmate'" backgroundColor="#2A9689" style="color:#fff;">
<NavigationButton class="fas" text.decode="&#xf060;" android.systemIcon="ic_menu" @tap="onDrawerButtonTap()" style="color:#fff;"/>

<ActionItem  ios.position="right" android.position="actionBar">
<Label class="fas" text.decode="&#xf002;" style="color:#fff;font-size:20px;"/>
</ActionItem>

<ActionItem ios.position="right" android.position="actionBar">
<Label class="fas" text.decode="&#xf0f3;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>

<ActionItem  ios.position="right" android.position="actionBar">
<Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;"/>
</ActionItem>
</ActionBar>
</template>
<script>

export default {
props:{
title:null
},

methods:{
onDrawerButtonTap() {

}

}




}
</script>