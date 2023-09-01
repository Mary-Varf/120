<template>
    <div class=" h-full bg-gray-800">
        <AppNav></AppNav>

        <slot></slot>
    </div>
</template>

<script setup>
import AppNav from "~/components/UI/AppNav.vue";
</script>

<style scoped>

</style>