<script setup>
import { $navigateTo } from 'nativescript-vue';
import SubtopicPage from './SubtopicPage.vue';





const subtopicNav=()=>{
$navigateTo(SubtopicPage);
}

</script>





<template>
  <Page actionBarHidden="true">
    <StackLayout backgroundColor="#F9FAFB" height="100%">

      <!-- Header -->
      <StackLayout padding="20" backgroundColor="#f0f2f5">
        <Label text="Photosynthesis" fontSize="22" fontWeight="bold" color="#2C3E50"/>
        <Label text="Understand how plants convert sunlight into energy" fontSize="14" color="#7F8C8D" marginTop="4"/>
      </StackLayout>

      <!-- Description -->
      <StackLayout padding="20">
        <Label text="Photosynthesis is the process by which green plants use sunlight to synthesize foods from carbon dioxide and water. It is vital for the survival of plants and all living organisms that depend on them."
               fontSize="14" color="#2C3E50" textWrap="true"/>
      </StackLayout>

      <!-- Subtopics List -->
      <ScrollView>
        <StackLayout padding="20" spacing="15">

          <!-- Example subtopic -->
          <StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4" @tap="subtopicNav">
            <Label text="Light-dependent Reactions" fontSize="16" fontWeight="bold" color="#2C3E50"/>
            <Label text="Occurs in the thylakoid membranes where sunlight is converted into chemical energy." fontSize="14" color="#7F8C8D" marginTop="4" textWrap="true"/>
          </StackLayout>

          <StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4" @tap="subtopicNav">
            <Label text="Calvin Cycle" fontSize="16" fontWeight="bold" color="#2C3E50"/>
            <Label text="Occurs in the stroma of the chloroplast, converting CO₂ into glucose using ATP and NADPH." fontSize="14" color="#7F8C8D" marginTop="4" textWrap="true"/>
          </StackLayout>

          <StackLayout padding="15" backgroundColor="white" borderRadius="15" shadowColor="#00000033" shadowOpacity="0.1" shadowRadius="4" @tap="subtopicNav">
            <Label text="Factors Affecting Photosynthesis" fontSize="16" fontWeight="bold" color="#2C3E50"/>
            <Label text="Light intensity, carbon dioxide concentration, temperature, and water availability all impact the rate of photosynthesis." fontSize="14" color="#7F8C8D" marginTop="4" textWrap="true"/>
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
