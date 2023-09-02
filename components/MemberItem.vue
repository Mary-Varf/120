<template>
    <div class="md:grid hidden grid-cols-4 gap-1 capitalize hover:bg-gray-700 p-2">
        <div class="break-all">{{initialName}}</div>
        <div class="break-all">{{initialSurname}}</div>
        <div class="break-all">{{initialDepartment}}</div>
        <div class="flex">
            <AppButton class="mr-4" @click="handleUpdateItem"><UpdateIcon></UpdateIcon></AppButton>
            <AppButton @click="deleteItem"><DeleteIcon></DeleteIcon></AppButton>
        </div>
    </div>

    <div class="md:hidden flex justify-between border-b-2 border-white-100 mb-4">
        <div>
            <div class="sub-text">Name:</div>
            <div class="mr-[100px]">{{initialName}}</div>
            <div class="sub-text">Surname:</div>
            <div>{{initialSurname}}</div>
            <div class="sub-text">Department:</div>
            <div>{{initialDepartment}}</div>
        </div>
        <div class="">
            <AppButton class="mr-2" @click="handleUpdateItem"><UpdateIcon></UpdateIcon></AppButton>
            <AppButton @click="deleteItem"><DeleteIcon></DeleteIcon></AppButton>
        </div>
    </div>
</template>

<script setup>
    import UpdateIcon from "~/components/icons/UpdateIcon.vue";
    import DeleteIcon from "~/components/icons/DeleteIcon.vue";
    import AppButton from "~/components/AppButton.vue";
    import {useStore} from "~/store/stores";

    const props = defineProps({
        memberId: {type: String},
        initialName: {type: String},
        initialSurname: {type: String},
        initialDepartment: {type: String},
    })

    const membersStore = useStore();

    const deleteItem = () => {
        membersStore.deleteMember(props.memberId);
    }
    const handleUpdateItem = () => {
        console.log('click')
        membersStore.setEditedItemId(props.memberId)
    }
</script>

<style scoped>

</style>