<template>
    <Page class="modal-container">
      <StackLayout class="modal-box">
        <Label
          text="Select Class"
          class="modal-title"
        />

        <StackLayout>
          <Label
            v-for="(g, key) in classes"
            :key="key"
            :text="g.name"
            class="class-option"
            @tap="setClass(g.name)"
          />
        </StackLayout>
      </StackLayout>
    </Page>
  </template>

  <script>



  export default {
    data() {
      return {
        classes: [
          { name: 'Senior One' },
          { name: 'Senior Two' },
          { name: 'Senior Three' },
          { name: 'Senior Four' },
          { name: 'Senior Five' },
          { name: 'Senior Six' }
        ]
      };
    },
    methods: {
      setClass(selectedClass) {
        this.$modal.close(selectedClass);
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
    border-radius: 40; /* More curved look */
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

  .class-option {
    height: 50;
    padding: 12;
    margin-bottom: 12;
    border-radius: 40; /* Curved buttons */
    background-color: #f5f5f5;
    font-size: 16;
    color: #444;
    text-align: center;
  }

  .class-option:highlighted {
    background-color: #1976d2;
    color: white;
  }
  </style>
