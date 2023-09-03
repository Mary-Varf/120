<template>
    <AppButton @click="toggleMenuState" class="flex md:hidden" v-if="isOpenedMenu"><CloseIcon></CloseIcon></AppButton>
    <AppButton @click="toggleMenuState" class="flex md:hidden" v-else><BurgerIcon></BurgerIcon></AppButton>
    <nav class="flex flex-col bg-gray-100 md:relative fixed md:top-0 top-12 right-2 z-[55] pl-4 md:pl-0 break-all flex-wrap w-full" v-show="isOpenedMenu">
        <NuxtLink to="/" class="text-black hover:bg-gray-200 hover:text-black rounded-md px-3 py-2 text-sm font-medium">All</NuxtLink>
        <NuxtLink :to="`/${item.name}`"
                  class="capitalize text-black hover:bg-blue-200 hover:text-black rounded-md px-3 py-2 text-sm font-medium break-all"
                  v-for="item in departments"
                  :key="item._id"
        >{{ item.name }}</NuxtLink>

        <div class="flex items-center pb-2 border-b"
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
</template>

<script setup>
import mongoose from "mongoose";
import { storeToRefs } from "pinia";
import SaveIcon from "~/components/icons/SaveIcon.vue";
import AppButton from "~/components/UI/AppButton.vue";
import BurgerIcon from "~/components/icons/BurgerIcon.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";
import { useStore } from "~/store/stores";

const membersStore = useStore();
const { departments, isLoggedIn } = storeToRefs(membersStore);
const { department } = useRoute().params;

const isEditMode = ref(false);
const newDepartment = ref(null);
const isOpenedMenu = ref(true);

const clearInput = () => {
    newDepartment.value = null;
}

const setIsEditMode = (state) => {
    clearInput();
    isEditMode.value = state;
}

const updateInput = (event) => {
    newDepartment.value = event.target.value;
}

const toggleMenuState = () => {
    isOpenedMenu.value = !isOpenedMenu.value;
}

const saveNewDepartment = () => {
    membersStore.createDepartment({
        _id: new mongoose.Types.ObjectId().toString(),
        name: newDepartment.value,
    });

    setIsEditMode(false);
}

onMounted(() => {
    if (window.innerWidth < 800) {
        isOpenedMenu.value = false;
    }
})
</script>

<style scoped>
</style>