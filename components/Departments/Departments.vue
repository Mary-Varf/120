<template>
    <h2 class="hidden md:block font-bold my-6">Departments:</h2>

    <AppSpinner v-if="isDepartmentsLoading"></AppSpinner>
    <DepartmentsNav v-else></DepartmentsNav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import DepartmentsNav from "~/components/Departments/DepartmentsNav.vue";
import AppSpinner from "~/components/UI/AppSpinner.vue";
import { useStore } from "~/store/stores";

const membersStore = useStore();
const { isDepartmentsLoading } = storeToRefs(membersStore);

onMounted(() => {
    membersStore.getDepartments();
})
</script>

<style scoped>
</style>