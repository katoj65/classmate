<template>
<StackLayout>
<StackLayout
v-for="(item, index) in items"
:key="index" orientation="horizontal" padding="12" borderBottomWidth="1" borderBottomColor="#F3F4F6">
<Label text.decode="&#xf19d;" class="fas large-icon" verticalAlignment="center" marginRight="16" style="font-size:25px;"/>
<StackLayout verticalAlignment="center">
<Label text="Custom item ordering in a FlexboxLayout" class="text-title" />
<Label text="The following example reorders items using the order property.The following example reorders items using the order property." class="text-description" />
</StackLayout>
</StackLayout>
</StackLayout>
</template>