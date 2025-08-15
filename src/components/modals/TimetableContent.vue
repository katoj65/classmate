<template>
    <Page actionBarHidden="true">
      <StackLayout backgroundColor="#F9FAFB" height="100%" paddingBottom="20">

        <!-- Header -->
        <StackLayout padding="20" backgroundColor="#F0F2F5">
          <Label text="Mathematics - Algebra" fontSize="22" fontWeight="bold" color="#1F2937" textAlignment="center"/>
          <Label text="08:00 AM - 09:00 AM" fontSize="14" color="#6B7280" textAlignment="center" marginTop="6" borderRadius="14" backgroundColor="#E5E7EB" padding="6"/>
        </StackLayout>

        <!-- Reading Material -->
        <ScrollView row="1">
          <StackLayout padding="20" spacing="16">

            <!-- Material Card -->
            <StackLayout backgroundColor="#FFFFFF" borderRadius="14" padding="16" marginBottom="12">
              <Label text="Algebra Basics" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="6"/>
              <Label text="Learn about variables, expressions, and simple equations. Understand the fundamentals to solve linear equations effectively." fontSize="14" color="#4B5563" textWrap="true"/>
            </StackLayout>

            <StackLayout backgroundColor="#FFFFFF" borderRadius="14" padding="16" marginBottom="12">
              <Label text="Quadratic Equations" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="6"/>
              <Label text="Explore quadratic equations, factoring, and the quadratic formula. Practice solving examples to master problem-solving skills." fontSize="14" color="#4B5563" textWrap="true"/>
            </StackLayout>

            <StackLayout backgroundColor="#FFFFFF" borderRadius="14" padding="16" marginBottom="12">
              <Label text="Practice Exercises" fontSize="18" fontWeight="bold" color="#1F2937" marginBottom="6"/>
              <Label text="Apply your knowledge on sample exercises, including word problems and equation solving. Check solutions after completing exercises." fontSize="14" color="#4B5563" textWrap="true"/>
            </StackLayout>

          </StackLayout>
        </ScrollView>

      </StackLayout>
    </Page>
  </template>

  <style scoped>
  StackLayout[backgroundColor="#FFFFFF"] {
    shadow-color: #00000033;
    shadow-opacity: 0.05;
    shadow-radius: 6;
    shadow-offset-height: 2;
  }
  </style>
