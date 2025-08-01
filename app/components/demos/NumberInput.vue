<template>
    <Page>
      <ActionBar title="Choose a Number" backgroundColor="#2A9689" color="#fff" />

      <StackLayout padding="20" spacing="24">
        <Label text="Select a Number" class="label" />

        <GridLayout columns="auto, *, auto" rows="auto" class="number-input">
          <!-- Decrease Button -->
          <Button text="−" @tap="decrease" class="number-btn" col="0" />

          <!-- Number Field -->
          <TextField
            :text="number.toString()"
            @textChange="onTextChange"
            keyboardType="number"
            class="number-field"
            col="1"
            textAlignment="center"
          />

          <!-- Increase Button -->
          <Button text="+" @tap="increase" class="number-btn" col="2" />
        </GridLayout>

        <Label :text="'You selected: ' + number" class="result" />
      </StackLayout>
    </Page>
  </template>

  <script>
  export default {
    data() {
      return {
        number: 1
      };
    },
    methods: {
      increase() {
        if (this.number < 100) this.number++;
      },
      decrease() {
        if (this.number > 1) this.number--;
      },
      onTextChange(event) {
        const value = parseInt(event.value);
        this.number = isNaN(value) ? 1 : value;
      }
    }
  };
  </script>

  <style scoped>
  .label {
    font-size: 18;
    font-weight: bold;
    color: #2A9689;
  }

  .number-input {
    border-width: 1;
    border-color: #2A9689;
    border-radius: 12;
    background-color: #E8FCF3;
    padding: 6;
    height: 50;
    align-items: center;
  }

  .number-field {
    font-size: 18;
    color: #2A9689;
    background-color: transparent;
  }

  .number-btn {
    font-size: 22;
    font-weight: bold;
    background-color: #2A9689;
    color: #ffffff;
    border-radius: 10;
    height: 40;
    width: 40;
    text-align: center;
  }

  .result {
    font-size: 16;
    color: #374151;
    text-align: center;
  }
  </style>
