<template>
    <div class="xl:container m-auto md:py-6 py-0 sm:px-6 lg:px-8 bg-gray-800 text-gray-300 flex flex-col md:grid md:grid-cols-4 max-w-screen flex h-screen">
        <aside class="md:col-span-1 pr-7 bg-gray-800">
            <div class="pt-2 md:flex-col flex items-start justify-between bg-gray-800 md:max-w-[190px]">
                <AppAuth></AppAuth>

                <Departments v-if="isLoggedIn"></Departments>
            </div>
        </aside>

        <MembersTable class="flex-1 overflow-y-auto" v-if="isLoggedIn"></MembersTable>
        <h3 class="absolute top-20 left-[50%] transform translate-x-[-50%]"
            v-else
        >Please Log In</h3>
    </div>

    <AppPopup></AppPopup>
</template>

<script setup>
import AppPopup from "~/components/UI/AppPopup.vue";
import AppAuth from '~/components/UI/AppAuth.vue';
import { storeToRefs } from 'pinia';
import {useStore} from "~/store/stores";

const membersStore = useStore();
const { isLoggedIn } = storeToRefs(membersStore);
const config = useRuntimeConfig();

const getStateIsLoggedInCookie = () => {
    return useCookie(`auth0.${config.public.AUTH0_CLIENT_ID}.is.authenticated`).value;
}

onMounted(() => {
    membersStore.setStateIsLoggedIn(getStateIsLoggedInCookie());
})
</script>

<style>
</style>