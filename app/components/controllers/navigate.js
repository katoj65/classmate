import Vue from 'nativescript-vue';
import
function nav(component){
this.$navigateTo(component,{
transition: {
name: 'slide',
duration: 300,
curve: 'easeInOut'
},
});
}

export default nav(component);