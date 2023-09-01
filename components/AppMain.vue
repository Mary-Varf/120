<template>
    <div class="py-6 sm:px-6 lg:px-8 text-gray-300 flex"
    >
        <Departments></Departments>

        <MembersBlock></MembersBlock>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import {useStore} from "~/store/stores";
import auth0 from "~/store/auth0.js";

const config = useRuntimeConfig();
const membersStore = useStore();

const login = async () => {
    await auth0.loginWithPopup();
    membersStore.setUser(await auth0.getUser());
}

const logout = async () => {
    await auth0.logout();
    membersStore.setUser(null);
}

const { user } = storeToRefs(membersStore);
</script>

<style>
</style>