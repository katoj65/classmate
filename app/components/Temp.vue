<template>
<Page>

<ActionBar title="Ask Questions" class="header" backgroundColor="#2A9689">
<search-action-item/>
<notification-action-item/>
<settings-action-item/>
</ActionBar>


<GridLayout>
<Label text="You're on the About page!" />
</GridLayout>
</Page>
</template>

<script>
import SettingsActionItem from './templates/SettingsActionItem.vue';
import NotificationActionItem from './templates/NotificationActionItem.vue';
import SearchActionItem from './templates/SearchActionItem.vue';
export default {
name: 'AskAi',
components:{
SettingsActionItem,
NotificationActionItem,
SearchActionItem

}


};
</script>
