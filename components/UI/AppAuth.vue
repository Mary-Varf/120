<template>
    <div class="text-gray-300 flex bg-gray-800 md:pl-0 pl-4 bg-gray-800 z-50">
        <AppButton class="mr-3 uppercase px-1.5"
                @click="login"
        >Log IN</AppButton>

        <AppButton class="uppercase px-1.5"
                @click="logout"
        >Logout</AppButton>
    </div>
</template>

<script setup>
import AppButton from "~/components/UI/AppButton.vue";
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