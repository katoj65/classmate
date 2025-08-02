<template>
<StackLayout class="card-container" padding="20" borderRadius="16" backgroundColor="#ffffff" shadowColor="#000" shadowOffsetWidth="0" shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="4" margin="16">

<!-- User Icon -->
<StackLayout class="avatar-wrapper" horizontalAlignment="center" marginBottom="16">
<Image :src="icon || '~/assets/user-icon.png'" width="80" height="80" borderRadius="40" stretch="aspectFill" />
</StackLayout>

<!-- User Details -->
<StackLayout class="details" spacing="8">
<Label :text="name" class="name" fontSize="20" fontWeight="bold" textAlignment="center" />
<Label :text="email" class="email" fontSize="14" color="#666" textAlignment="center" />
<Label :text="role" class="role" fontSize="14" color="#888" textAlignment="center" />
</StackLayout>

</StackLayout>
</template>

<script>
export default {
name: 'UserCard',
props: {
name: String,
email: String,
role: String,
icon: String,
}
}
</script>

<style scoped>
.card-container {
width: 90%;
align-self: center;
elevation: 4;
}
.avatar-wrapper {
borderWidth: 2;
borderColor: #2A9689;
padding: 4;
borderRadius: 44;
}
</style>
