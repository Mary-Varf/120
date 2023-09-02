<template>
    <div class="text-gray-300 flex bg-gray-800 md:ml-0 ml-4 bg-gray-800 z-50">
        <button class="btn mr-3 uppercase"
                @click="login"
        >Log IN</button>

        <button class="btn uppercase"
                @click="logout"
        >Logout</button>

    </div>
</template>

<script setup>
import { useStore } from "~/store/stores";
import auth0 from "~/server/auth0";
const membersStore = useStore();

const config = useRuntimeConfig();

const checkIsLoggedIn = () => {
    return useCookie(`auth0.${config.public.AUTH0_CLIENT_ID}.is.authenticated`).value;
}

const login = async () => {
    await auth0().loginWithPopup();
    membersStore.setStateIsLoggedIn(checkIsLoggedIn());
}

const logout = async () => {
    await auth0().logout();
    membersStore.setStateIsLoggedIn(false);
}
</script>

<style scoped>

</style>