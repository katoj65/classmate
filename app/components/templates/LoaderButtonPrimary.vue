<template>
<StackLayout padding="10">
<StackLayout
class="btn-primary"
padding="10"
height="50"
orientation="horizontal"
horizontalAlignment="center"
verticalAlignment="center"
justifyContent="center"
spacing="10"
 width="100%"
>

<!-- Spinner -->
<ActivityIndicator busy="true"
color="white"
width="20"
height="20" />

<!-- Text -->
<Label :text="title"
color="white"
fontSize="15"
fontWeight="bold"
paddingLeft="10" />
</StackLayout>
</StackLayout>
</template>
<script>
export default {
props:{
title:String
}
}
</script>