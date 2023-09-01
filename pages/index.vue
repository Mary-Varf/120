<template>
    <AppMain v-if="user"></AppMain>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import {useStore} from "~/store/stores";

const membersStore = useStore();

const { user } = storeToRefs(membersStore);
</script>

<style>
</style>