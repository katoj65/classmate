<template>
  <Page actionBarHidden="true">
    <StackLayout backgroundColor="#F9FAFB" height="100%">

      <!-- Header -->
      <StackLayout padding="20" backgroundColor="#f0f2f5" borderBottomWidth="1" borderBottomColor="#E0E0E0">
        <Label text="Settings" fontSize="20" fontWeight="bold" color="#2C3E50"/>
        <Label text="Manage your preferences" fontSize="14" color="#7F8C8D" marginTop="4"/>
      </StackLayout>

      <!-- Settings Options -->
      <StackLayout padding="15" spacing="10">

        <!-- Profile Settings -->
        <StackLayout padding="15" backgroundColor="white" borderRadius="12">
          <Label text="Profile" fontSize="16" fontWeight="bold" color="#2C3E50"/>
          <Label text="Update your personal information" fontSize="14" color="#7F8C8D" marginTop="2"/>
        </StackLayout>

        <!-- Notifications -->
        <StackLayout padding="15" backgroundColor="white" borderRadius="12">
          <Label text="Notifications" fontSize="16" fontWeight="bold" color="#2C3E50"/>
          <Label text="Manage push notifications" fontSize="14" color="#7F8C8D" marginTop="2"/>
        </StackLayout>

        <!-- Theme -->
        <StackLayout padding="15" backgroundColor="white" borderRadius="12">
          <Label text="Theme" fontSize="16" fontWeight="bold" color="#2C3E50"/>
          <Label text="Switch between light and dark mode" fontSize="14" color="#7F8C8D" marginTop="2"/>
        </StackLayout>

        <!-- About -->
        <StackLayout padding="15" backgroundColor="white" borderRadius="12">
          <Label text="About" fontSize="16" fontWeight="bold" color="#2C3E50"/>
          <Label text="App version and info" fontSize="14" color="#7F8C8D" marginTop="2"/>
        </StackLayout>

      </StackLayout>

    </StackLayout>
  </Page>
</template>

<style scoped>
StackLayout[backgroundColor="white"] {
  margin-bottom: 10;
  padding: 15;
  border-radius: 12;
  shadow-color: #00000033;
  shadow-opacity: 0.1;
  shadow-radius: 4;
}
</style>
