<template>
    <div class="xl:container m-auto md:py-6 py-0 sm:px-6 lg:px-8 bg-gray-800 text-gray-300 grid md:grid-cols-4 max-w-screen">
        <aside class="col-span-1 pr-7 bg-gray-800 h-full">
            <div class="pt-2 pb-[110px] fixed flex-col flex items-start justify-between bg-gray-800 max-w-[300px] md:max-w-[190px]">
                <AppAuth class="mb-16"></AppAuth>

                <Departments v-if="isLoggedIn"></Departments>
            </div>
        </aside>

        <MembersTable v-if="isLoggedIn"></MembersTable>
        <h3 v-else>Please Log In</h3>
        {{ isLoggedIn }}
    </div>
</template>

<script setup>
import AppAuth from './UI/AppAuth.vue';
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