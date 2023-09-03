<template>
    <div class="md:grid hidden capitalize hover:bg-blue-200 gap-1"
         :class="isLoggedIn ? 'grid-cols-4' : 'grid-cols-3'"
         @click="closeForm">
        <div class="break-all border-b border-blue-200 py-2 px-2">{{initialName}}</div>
        <div class="break-all border-b border-blue-200 py-2 px-2">{{initialSurname}}</div>
        <div class="break-all border-b border-blue-200 py-2 px-2">{{initialDepartment}}</div>
        <div class="flex items-start py-2 px-2" v-show="isLoggedIn">
            <AppButton class="mr-4"
                       @click="setEditedItemId(props.memberId)">
                <UpdateIcon></UpdateIcon>
            </AppButton>
            <AppButton @click="deleteItem"><DeleteIcon></DeleteIcon></AppButton>
        </div>
    </div>

    <div class="md:hidden flex justify-between border-b border-blue-200 py-2"
         @click="closeForm">
        <div>
            <div class="sub-text">Name:</div>
            <div class="break-all">{{initialName}}</div>
            <div class="sub-text">Surname:</div>
            <div class="break-all">{{initialSurname}}</div>
            <div class="sub-text">Department:</div>
            <div class="break-all">{{initialDepartment}}</div>
        </div>
        <div v-show="isLoggedIn" class="flex items-start">
            <AppButton class="mr-2"
                       @click="setEditedItemId(props.memberId)">
                <UpdateIcon></UpdateIcon>
            </AppButton>
            <AppButton @click="deleteItem"><DeleteIcon></DeleteIcon></AppButton>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import UpdateIcon from "~/components/icons/UpdateIcon.vue";
import DeleteIcon from "~/components/icons/DeleteIcon.vue";
import AppButton from "~/components/UI/AppButton.vue";
import {useStore} from "~/store/stores";

const props = defineProps({
    memberId: {type: String},
    initialName: {type: String},
    initialSurname: {type: String},
    initialDepartment: {type: String},
})

const membersStore = useStore();
const { editedItemId, isLoggedIn } = storeToRefs(membersStore);

const deleteItem = () => {
    membersStore.deleteMember(props.memberId);
}

const setEditedItemId = (id) => {
    membersStore.setEditedItemId(id)
}

const closeForm = (event) => {
    if (event.target.tagName === 'DIV') {
        setEditedItemId(null)
    }
}
</script>

<style scoped>
</style>