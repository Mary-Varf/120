<template>
    <aside class="flex flex-col w-52 pr-7 fixed bg-gray-800 top-32 h-full">
        <NuxtLink to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">All</NuxtLink>
        <NuxtLink :to="`/${item.department}`"
                  class="capitalize text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  v-for="item in departments"
                  :key="item._id"
        >{{item.department}}</NuxtLink>

        <div v-if="isEditMode">
            <input ref="input"
                   type="surname"
                   class="px-4 py-2 mr-2 rounded text-black items-start"
                   :value="newDepartment"
                   @input="updateInput"
            />
            <AppButton @click="saveNewDepartment"><SaveIcon></SaveIcon></AppButton>
        </div>

        <div v-else>
            <AppButton @click="setIsEditMode(true)"><SaveIcon></SaveIcon></AppButton>
        </div>

    </aside>
</template>

<script setup>
import SaveIcon from "~/components/icons/SaveIcon.vue";
import AppButton from "~/components/AppButton.vue";
import { useStore } from "~/store/stores";
import {storeToRefs} from "pinia";
import mongoose from "mongoose";

const membersStore = useStore();
const { departments } = storeToRefs(membersStore);
const isEditMode = ref(false);
const newDepartment = ref(null);

onMounted(() => {
    membersStore.getDepartments();
})

const setIsEditMode = (state) => {
    isEditMode.value = state;
}
const updateInput = (event) => {
    newDepartment.value = event.target.value;
}

const saveNewDepartment = () => {
    membersStore.createDepartment({
        _id: new mongoose.Types.ObjectId().toString(),
        department: newDepartment.value,
    });

    setIsEditMode(false);
}
</script>

<style scoped>
.router-link-exact-active {
    background-color: #000;
}
</style>