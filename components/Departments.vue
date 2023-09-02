<template>
    <div class="flex items-center md:mb-6 cursor-pointer hover:bg-black rounded px-3 py-1 sm:pr-8 bg-gray-800">
        <h2 class="mr-4 hidden md:block">Departments</h2>
    </div>

    <DepartmentsNav></DepartmentsNav>
</template>

<script setup>
import DepartmentsNav from "~/components/DepartmentsNav.vue";
import { useStore } from "~/store/stores";
import { storeToRefs } from 'pinia';

const membersStore = useStore();
const isMenuOpened = ref(false);

onMounted(() => {
    membersStore.getDepartments();
    membersStore.setIsMobileDevice(window.innerWidth);
})

const { isMobile } = storeToRefs(membersStore);

const toggleDepartments = () => {
    isMenuOpened.value = !isMenuOpened.value;
}
</script>

<style scoped>
</style>