<template>
<Label v-if="error!=null" padding="15 15" textAlign="center" style="text-align:center;color:red;font-size:15px;" :text="error"/>
</template>
<script>
export default {
props: {
error: String
}
}
</script>
