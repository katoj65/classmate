<template>
    <Page actionBarHidden="true">
      <StackLayout backgroundColor="#F9FAFB" height="100%">

        <!-- Header -->
        <StackLayout padding="20" backgroundColor="#f0f2f5" borderBottomWidth="1" borderBottomColor="#E0E0E0" alignItems="center">
          <Label text="Student Profile" fontSize="22" fontWeight="bold" color="#2C3E50"/>
          <Label text="View and update your information" fontSize="14" color="#7F8C8D" marginTop="4"/>
        </StackLayout>

        <!-- Profile Section -->
        <ScrollView>
          <StackLayout padding="20" alignItems="center" spacing="20">

            <!-- Profile Image in center of blue circle -->
            <StackLayout width="120" height="120" borderRadius="60" backgroundColor="#3498DB" alignItems="center" justifyContent="center">
              <Label text="👤" fontSize="50" verticalAlignment="middle" horizontalAlignment="center"/>
            </StackLayout>

            <!-- Name and Class centered -->
            <StackLayout alignItems="center">
              <Label text="John Doe" fontSize="20" fontWeight="bold" color="#2C3E50" textAlignment="center"/>
              <Label text="Class: Senior Three" fontSize="14" color="#7F8C8D" marginTop="4" textAlignment="center"/>
            </StackLayout>

            <!-- Profile Details Cards -->
            <StackLayout width="100%" padding="10" spacing="15">

              <StackLayout padding="15" backgroundColor="white" borderRadius="15">
                <Label text="Email" fontSize="16" fontWeight="bold" color="#2C3E50"/>
                <Label text="johndoe@example.com" fontSize="14" color="#7F8C8D" marginTop="4"/>
              </StackLayout>

              <StackLayout padding="15" backgroundColor="white" borderRadius="15">
                <Label text="Phone" fontSize="16" fontWeight="bold" color="#2C3E50"/>
                <Label text="+256 700 000000" fontSize="14" color="#7F8C8D" marginTop="4"/>
              </StackLayout>

              <StackLayout padding="15" backgroundColor="white" borderRadius="15">
                <Label text="Date of Birth" fontSize="16" fontWeight="bold" color="#2C3E50"/>
                <Label text="01-Jan-2005" fontSize="14" color="#7F8C8D" marginTop="4"/>
              </StackLayout>

            </StackLayout>

            <!-- Edit Button -->
            <Button text="Edit Profile" backgroundColor="#3498DB" color="white" borderRadius="25" height="50" fontSize="16" marginTop="20" width="80%"/>

          </StackLayout>
        </ScrollView>

      </StackLayout>
    </Page>
  </template>

  <style scoped>
  StackLayout[backgroundColor="white"] {
    margin-bottom: 10;
    padding: 15;
    border-radius: 15;
    shadow-color: #00000033;
    shadow-opacity: 0.1;
    shadow-radius: 4;
  }
  </style>
