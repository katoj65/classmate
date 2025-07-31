<template>
<Button
text.decode="&#xf1d8;"
class="fab fas"
row="0"
col="0"
horizontalAlignment="right"
verticalAlignment="bottom"
@tap="onFabTap"
/>
</template>

<script>
import AskAi from '../AskAi.vue';
export default {
name:'Fab',
component:{ AskAi },
methods: {
onFabTap() {
this.$navigateTo(AskAi,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
}
});
}
}
}
</script>



<style scoped>
.fab {
width: 56;
height: 56;
border-radius: 28;
background-color:#2A9689;
color: white;
font-size: 18;
font-weight: bold;

position: absolute;
bottom: 50;  /* 20 device-independent pixels from bottom */
right: 20;   /* 20 device-independent pixels from right */

text-align: center;
vertical-align: middle;
margin-bottom:50px;



}


</style>
