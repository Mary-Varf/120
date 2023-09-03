<template>
    <div class="text-black flex bg-gray-100 md:pl-0 pl-4 bg-gray-100 z-50">
        <AppButton class="mr-3 uppercase px-1.5 disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-300"
                   :disabled="isLoggedIn"
                   @click="login"
        >Log IN</AppButton>

        <AppButton class="uppercase px-1.5 disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-300"
                   :disabled="!isLoggedIn"
                   @click="logout"
        >Logout</AppButton>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import AppButton from "~/components/UI/AppButton.vue";
import { useStore } from "~/store/stores";
import auth0 from "~/server/auth0";

const config = useRuntimeConfig();
const membersStore = useStore();
const { isLoggedIn } = storeToRefs(membersStore);

const checkIsLoggedIn = () => {
    const key = `auth0.${config.public.AUTH0_CLIENT_ID}.is.authenticated`;
    return useCookie(key).value;
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