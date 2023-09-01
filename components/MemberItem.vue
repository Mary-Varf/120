<template>
    <tr v-if="isMobile">
        <td class="pr-4 py-2 text-left capitalize">{{initialName}}</td>
        <td class="pr-4 py-2 text-left capitalize">{{initialSurname}}</td>
        <td class="pr-4 py-2 text-left capitalize">{{initialDepartment}}</td>
        <td class="pr-4 py-2">
            <AppButton @click="handleUpdateItem"><UpdateIcon></UpdateIcon></AppButton>
        </td>
        <td class="pr-4 py-2">
            <AppButton @click="deleteItem"><DeleteIcon></DeleteIcon></AppButton>
        </td>
    </tr>

    <td v-if="!isMobile" class="border-b-2 border-white-100 w-7/8">
        <div class="text-[8px] text-gray-400">Name:</div>
        <div>{{initialName}}</div>
        <div class="text-[8px] text-gray-400">Surname:</div>
        <div>{{initialSurname}}</div>
        <div class="text-[8px] text-gray-400">Department:</div>
        <div>{{initialDepartment}}</div>
        <div>
            <AppButton @click="handleUpdateItem"><UpdateIcon></UpdateIcon></AppButton>
            <AppButton @click="deleteItem"><DeleteIcon></DeleteIcon></AppButton>
        </div>
    </td>
</template>

<script setup>
    import DeleteIcon from "~/components/icons/DeleteIcon.vue";
    import AppButton from "~/components/AppButton.vue";
    import UpdateIcon from "~/components/icons/UpdateIcon.vue";
    import {useStore} from "~/store/stores";
    import {storeToRefs} from "pinia";

    const props = defineProps({
        memberId: {type: String},
        initialName: {type: String},
        initialSurname: {type: String},
        initialDepartment: {type: String},
    })
    const memberItem = props.member;

    const membersStore = useStore();

    const { isMobile } = storeToRefs(membersStore);
    const deleteItem = () => {
        membersStore.deleteMember(props.memberId);
    }
    const handleUpdateItem = () => {
        membersStore.setEditedItemId(props.memberId)
    }
</script>

<style scoped>

</style>