<template>
    <Page class="modal-container">
      <StackLayout class="modal-box">
        <Label
          text="Select Gender"
          class="modal-title"
        />

        <StackLayout>
          <Label
            v-for="(g, key) in gender"
            :key="key"
            :text="g.name"
            class="gender-option"
            @tap="setGender(g.name)"
          />
        </StackLayout>
      </StackLayout>
    </Page>
  </template>

  <script>
  export default {
    data() {
      return {
        gender: [
          { name: 'Male' },
          { name: 'Female' },
          { name: 'Other' }
        ]
      };
    },
    methods: {
      setGender(gender) {
        this.$modal.close(gender);
      }
    }
  };
  </script>

  <style scoped>
  .modal-container {
    background-color: transparent;
  }

  .modal-box {
    background-color: white;
    border-radius: 40; /* Big rounded white background */
    margin: 40;
    padding: 20;
    width: 90%;
  }

  .modal-title {
    font-size: 20;
    font-weight: bold;
    margin-bottom: 20;
    text-align: center;
    color: #333;
  }

  .gender-option {
    height: 50;
    padding: 12;
    margin-bottom: 12;
    border-radius: 40; /* Curved options too */
    background-color: #f5f5f5;
    font-size: 16;
    color: #444;
    text-align: center;
  }

  .gender-option:highlighted {
    background-color: #1976d2;
    color: white;
  }
  </style>
