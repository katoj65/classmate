<template>
<Page>
<RootLayout>
<GridLayout rows="50, *"> <!-- Define 2 rows -->

<!-- HEADER -->
<GridLayout row="0" columns="auto, *" backgroundColor="#2A9689" verticalAlignment="center" padding="10 20">
<!-- Icon -->
<Label class="fas"
text.decode="&#xf060;"
color="#fff"
fontSize="20"
col="0"
style="margin-right:35px;"
@tap="$modal.close('closed')" />
<!-- Title -->
<Label :text="title"
color="#fff"
fontSize="20"
col="1"
verticalAlignment="center"
style="font-weight:bold;" />
</GridLayout>

<!-- SCROLL CONTENT -->
<ScrollView row="1">
<StackLayout>


<StackLayout orientation="horizontal" padding="10" backgroundColor="#f5f5f5" marginBottom="5" v-for="(m,key) in menu" :key="key">
<Label text.decode="&#xf015;" class="fas" fontSize="20" color="#2A9689" marginRight="10" />
<Label :text="m.name" fontSize="18" />
</StackLayout>

<StackLayout orientation="horizontal" padding="10" backgroundColor="#f5f5f5" marginBottom="5" v-for="(m,key) in menu" :key="key">
<Label text.decode="&#xf015;" class="fas" fontSize="20" color="#2A9689" marginRight="10" />
<Label :text="m.name" fontSize="18" />
</StackLayout>


</StackLayout>
</ScrollView>

</GridLayout>
</RootLayout>
</Page>
</template>

<script>
import { ApplicationSettings } from '@nativescript/core';

export default {
props: { userClass: Object },
data() {
return {
title: '',
menu: [
{ name: 'Text Books' },
{ name: 'Past Papers' },
{ name: 'Exercises' },
{ name: 'Timetable' },
{ name: 'Study groups' },
{ name: 'Ask question' },
{ name: 'Assignments' },
],
};
},
methods: {
get() {
let user = ApplicationSettings.getString('user', null);
if (user) {
user = JSON.parse(user);
this.title = user.class;
}
},
},
mounted() {
this.get();
},
};
</script>
