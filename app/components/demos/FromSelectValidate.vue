<template>
    <Page>
      <ActionBar title="Add Timetable Entry" backgroundColor="#2A9689" color="#fff" />

      <ScrollView>
        <StackLayout padding="24" spacing="24" backgroundColor="#ffffff">

          <!-- Title -->
          <Label text="📝 Create a New Entry" class="title" />

          <!-- Subject -->
          <Label text="Subject" class="label" />
          <TextField v-model="subject" class="input" hint="Enter subject" />

          <!-- Day of the Week -->
          <Label text="Day" class="label" />
          <ListPicker v-model="selectedDayIndex" :items="days" class="input" />

          <!-- Start and End Time -->
          <Label text="Start and End Hour" class="label" />
          <GridLayout columns="*, 10, *" rows="auto">
            <ListPicker v-model="selectedStartHour" :items="hours" class="input" col="0" />
            <Label text="" col="1" />
            <ListPicker v-model="selectedEndHour" :items="hours" class="input" col="2" />
          </GridLayout>

          <!-- Submit -->
          <Button text="➕ Add to Timetable" class="btn" @tap="submit" />

          <!-- Display Result -->
          <Label v-if="message" :text="message" class="result" />

        </StackLayout>
      </ScrollView>
    </Page>
  </template>

  <script>
  export default {
    data() {
      return {
        subject: '',
        selectedDayIndex: 0,
        selectedStartHour: 0,
        selectedEndHour: 1,
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        hours: ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
                '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'],
        message: ''
      };
    },
    methods: {
      submit() {
        const day = this.days[this.selectedDayIndex];
        const start = this.hours[this.selectedStartHour];
        const end = this.hours[this.selectedEndHour];

        if (!this.subject.trim()) {
          this.message = '❌ Please enter a subject.';
          return;
        }

        this.message = `✅ ${this.subject} on ${day} from ${start} to ${end} added to your timetable!`;

        // You can now send this data to SQLite or Supabase as needed
      }
    }
  };
  </script>

  <style scoped>
  .title {
    font-size: 22;
    font-weight: bold;
    color: #2A9689;
    text-align: center;
  }

  .label {
    font-size: 16;
    font-weight: 600;
    color: #374151;
  }

  .input {
    border-width: 1;
    border-color: #CBD5E1;
    border-radius: 8;
    padding: 10;
    background-color: #F9FAFB;
  }

  .btn {
    background-color: #2A9689;
    color: white;
    font-size: 16;
    padding: 12;
    border-radius: 10;
    font-weight: bold;
  }

  .result {
    font-size: 14;
    color: #2A9689;
    text-align: center;
    margin-top: 10;
  }
  </style>
