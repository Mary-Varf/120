<template>
    <nav class="hidden md:flex flex-col bg-gray-800 md:relative fixed md:top-0 top-12 right-2 z-[55] pl-4 md:pl-0 break-all flex-wrap">
        <NuxtLink to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">All</NuxtLink>
        <NuxtLink :to="`/${item.department}`"
                  class="capitalize text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium break-all"
                  v-for="item in departments"
                  :key="item._id"
        >{{item.department}}</NuxtLink>

        <div class="flex items-center"
             v-if="isEditMode">
            <input ref="input"
                   type="text"
                   class="px-4 py-2 mr-2 rounded text-black items-start"
                   :value="newDepartment"
                   @input="updateInput"
            />
            <AppButton @click="saveNewDepartment"><SaveIcon></SaveIcon></AppButton>
        </div>

        <div v-else>
            <AppButton v-show="isLoggedIn"
                       @click="setIsEditMode(true)"><SaveIcon></SaveIcon></AppButton>
        </div>
    </nav>

    <div class="flex flex-col">
        <select class="md:hidden flex-1 overflow-y-auto capitalize appearance-none w-[130px] bg-gray-200 border border-gray-200 text-gray-700 md:py-3 py-1 md:px-4 md:pr-8 pr-8 px-1.5 md:mr-4 md:ml-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 max-w-[250px] lg:max-w-[350px] xl:max-w-auto" id="grid-state">
            <option class="capitalize"
                    :selected="uriDepartment == undefined"
            >
                <NuxtLink to="/">All</NuxtLink>
            </option>
            <option class="capitalize"
                    v-for="el in departments"
                    :key="el._id"
                    :value="el.department"
                    :selected="uriDepartment == el.department"
            >
                <NuxtLink :to="`/${el.department}`">{{ el?.department }}</NuxtLink>
            </option>
        </select>
    </div>
</template>

<script setup>
import mongoose from "mongoose";
import { storeToRefs } from "pinia";
import SaveIcon from "~/components/icons/SaveIcon.vue";
import AppButton from "~/components/UI/AppButton.vue";
import { useStore } from "~/store/stores";

const membersStore = useStore();
const { departments, isLoggedIn } = storeToRefs(membersStore);
const { uriDepartment } = useRoute().params;

const isEditMode = ref(false);
const newDepartment = ref(null);

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
</style>