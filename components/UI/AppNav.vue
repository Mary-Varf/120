<template>
    <nav class="py-6 sm:px-6 lg:px-8 text-gray-300 flex fixed bg-gray-800">
        <button class="btn mr-3"
                @click="login"
                :disabled="user"
        >Log IN</button>

        <button class="btn"
                @click="logout"
                :disabled="!user"
        >Logout</button>

    </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from "~/store/stores";
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

<style scoped>

</style>