<template>
    <Page>
      <ActionBar title="Custom Dropdown" backgroundColor="#2A9689" color="#fff" />

      <GridLayout rows="auto, *" columns="*">
        <!-- Top Section with Dropdown Trigger -->
        <StackLayout row="0" padding="20">
          <Label
            :text="selectedItem"
            @tap="toggleDropdown"
            class="dropdown-trigger"
          />
        </StackLayout>

        <!-- Dropdown Menu (absolute overlay) -->
        <AbsoluteLayout rowSpan="2" class="dropdown-overlay">
          <StackLayout
            v-if="showDropdown"
            class="dropdown-list"
            top="70"
            left="20"
            width="90%"
          >
            <Label
              v-for="(item, index) in items"
              :key="index"
              :text="item"
              class="dropdown-item"
              @tap="selectItem(item)"
            />
          </StackLayout>
        </AbsoluteLayout>

        <!-- Below content (not pushed down) -->
        <StackLayout row="1" padding="20">
          <Label text="Some information goes here" />
          <Label text="More content here..." />
        </StackLayout>
      </GridLayout>
    </Page>
  </template>

  <script>
  export default {
    data() {
      return {
        items: ['Mathematics', 'English', 'Biology', 'Chemistry', 'History'],
        selectedItem: 'Select Subject',
        showDropdown: false
      };
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      selectItem(item) {
        this.selectedItem = item;
        this.showDropdown = false;
      }
    }
  };
  </script>

  <style scoped>
  .dropdown-trigger {
    padding: 12;
    border-width: 1;
    border-color: #ccc;
    border-radius: 6;
    font-size: 16;
    background-color: #ffffff;
  }

  .dropdown-overlay {
    height: 100%;
    width: 100%;
    z-index: 10;
  }

  .dropdown-list {
    border-width: 1;
    border-color: #ccc;
    border-radius: 6;
    background-color: #f9f9f9;
    elevation: 8;
    shadow-color: #000;
    shadow-opacity: 0.2;
    shadow-radius: 4;
  }

  .dropdown-item {
    padding: 10;
    font-size: 16;
    border-bottom-width: 1;
    border-color: #e0e0e0;
  }
  </style>
