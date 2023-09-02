<template>
    <div class="flex items-center md:mb-6 cursor-pointer hover:bg-black rounded px-3 py-1 sm:pr-8 bg-gray-800">
        <h2 class="mr-4 hidden md:block">Departments</h2>
    </div>

    <AppLoading v-if="isDepartmentsLoading"></AppLoading>
    <DepartmentsNav v-else></DepartmentsNav>
</template>

<script setup>
import DepartmentsNav from "~/components/Departments/DepartmentsNav.vue";
import AppLoading from "~/components/UI/AppLoading.vue";
import { useStore } from "~/store/stores";
import { storeToRefs } from 'pinia';

const membersStore = useStore();

onMounted(() => {
    membersStore.getDepartments();
})

const { isDepartmentsLoading } = storeToRefs(membersStore);
</script>

<style scoped>
</style>