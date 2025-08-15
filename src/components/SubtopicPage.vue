<template>
  <Page actionBarHidden="true">
    <StackLayout backgroundColor="#F9FAFB" height="100%">

      <!-- Header -->
      <StackLayout padding="20" backgroundColor="#f0f2f5">
        <Label text="Light-dependent Reactions" fontSize="22" fontWeight="bold" color="#2C3E50"/>
        <Label text="Convert sunlight into chemical energy" fontSize="14" color="#7F8C8D" marginTop="4"/>
      </StackLayout>

      <!-- Description -->
      <StackLayout padding="20">
        <Label text="These reactions occur in the thylakoid membranes of the chloroplast and are the first stage of photosynthesis. Light energy is absorbed by chlorophyll and converted into chemical energy stored in ATP and NADPH."
               fontSize="14" color="#2C3E50" textWrap="true"/>
      </StackLayout>

      <!-- Examples -->
      <ScrollView>
        <StackLayout padding="20" spacing="15">

          <StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4">
            <Label text="Example 1: Photosystem II" fontSize="16" fontWeight="bold" color="#2C3E50"/>
            <Label text="Absorbs light and uses the energy to split water molecules into oxygen, protons, and electrons." fontSize="14" color="#7F8C8D" marginTop="4" textWrap="true"/>
          </StackLayout>

          <StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4">
            <Label text="Example 2: Photosystem I" fontSize="16" fontWeight="bold" color="#2C3E50"/>
            <Label text="Uses light energy to transfer electrons and produce NADPH." fontSize="14" color="#7F8C8D" marginTop="4" textWrap="true"/>
          </StackLayout>

          <StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4">
            <Label text="Example 3: ATP Synthase" fontSize="16" fontWeight="bold" color="#2C3E50"/>
            <Label text="Uses the proton gradient to produce ATP from ADP, storing energy for the Calvin cycle." fontSize="14" color="#7F8C8D" marginTop="4" textWrap="true"/>
          </StackLayout>

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
