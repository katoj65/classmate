<template>
    <page>
    <ActionBar  :title="title!=null?title:'Classmate'" backgroundColor="#2A9689" style="color:#fff;">

    <ActionItem  ios.position="right" android.position="actionBar" @tap="searchNav">
    <Label class="fas" text.decode="&#xf002;" style="color:#fff;font-size:20px;"/>
    </ActionItem>

    <ActionItem ios.position="right" android.position="actionBar" @tap="notificationNav">
    <Label class="fas" text.decode="&#xf0f3;" style="color:#fff;font-size:20px;padding-left:30px;"/>
    </ActionItem>

    <ActionItem  ios.position="right" android.position="actionBar" @tap="settings">
    <Label class="fas" text.decode="&#xf142;" style="color:#fff;font-size:20px;padding-left:30px;"/>
    </ActionItem>
    </ActionBar>





    <GridLayout rows="*" columns="*">
    <ScrollView>
    <StackLayout>
    <StackLayout   borderBottomColor="#F3F4F6" orientation="horizontal" backgroundColor="#e5e7eb" padding="5">
    <Label text="Senior One Class" class="section-title" margin="10 10" fontSize="18" fontWeight="bold" width="80%"/>
    <Label  text.decode="&#xf0c9;" width="20%;" class="fas" fontSize="25" @tap="navigate" style="color:#8A93A6;"/>
    </StackLayout>



    <StackLayout
    v-for="(s, key) in row.subjects" :key="key" orientation="horizontal"
    padding="12"
    borderBottomWidth="1"
    borderBottomColor="#F3F4F6"
    >
    <Label
    text.decode="&#xf111;"
    class="fas large-icon"
    verticalAlignment="center"
    marginRight="14"
    style="font-size:17px;"
    />
    <StackLayout verticalAlignment="center">
    <Label :text="s.name" class="text-title" />
    <Label :text="s.description" class="text-description" />
    </StackLayout>
    </StackLayout>
    </StackLayout>
    </ScrollView>

    <fab/>
    </GridLayout>





    </page>
    </template>


    <script>
    import { Http, } from "@nativescript/core";
    import { key } from './database/connection.js';
    import Notification from './Notification.vue';
    import Search from './Search.vue';
    import Settings from './Settings.vue';
    import Fab from './templates/Fab.vue';
    export default {
    name:'Home',
    components: {
    Fab,
    Settings,
    Notification,
    Search
    },

    data() {
    return {
    isLoading:false,
    row:{
    classID:1,
    class:null,
    subjects:[]
    },

    }
    },



    methods:{
    async getData(){
    this.isLoading = true;
    await Http.request({
    url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/class?select=*,subject(name,description,id)&id=eq.'+this.row.classID,
    method: 'GET',
    headers: {
    'apikey':key,
    'Authorization': 'Bearer'+key,
    'Content-Type': 'application/json'
    }
    }).then(response => {
    if (response.statusCode==200) {

    this.isLoading = false;
    const data = response.content.toJSON();
    if(data.length > 0){
    data.forEach(element => {
    this.row.class = element;
    this.row.subjects = element.subject;
    });
    }

    }else{
    console.log('Error fetching data:', response.statusCode);
    }

    }).catch(error => {
    console.error('Request failed:', error);
    });


    },

    settings(){
    this.$navigateTo(Settings);
    },
    notificationNav() {
    this.$navigateTo(Notification);
    },
    searchNav(){
    this.$navigateTo(Search);
    }







    },

    mounted() {
    this.getData();
    }




    };
    </script>
