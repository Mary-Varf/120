<template>
    <div class="xl:container m-auto md:py-6 py-0 sm:px-6 lg:px-8 bg-gray-800 text-gray-300 flex flex-col md:grid md:grid-cols-4 max-w-screen flex h-screen">
        <aside class="md:col-span-1 bg-gray-800 pr-2">
            <div class="pt-2 md:flex-col flex items-start justify-between bg-gray-800 md:max-w-[190px]">
                <AppAuth></AppAuth>

                <Departments></Departments>
            </div>
        </aside>

        <MembersTable class="flex-1 overflow-y-auto overflow-x-hidden"></MembersTable>
    </div>

    <AppPopup></AppPopup>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import AppPopup from "~/components/UI/AppPopup.vue";
import AppAuth from '~/components/UI/AppAuth.vue';
import { useStore } from "~/store/stores";

const config = useRuntimeConfig();
const membersStore = useStore();
const { isLoggedIn } = storeToRefs(membersStore);

const getStateIsLoggedInCookie = () => {
    const key =`auth0.${config.public.AUTH0_CLIENT_ID}.is.authenticated`;
    return useCookie(key).value;
}

onMounted(() => {
    membersStore.setStateIsLoggedIn(getStateIsLoggedInCookie());
})
</script>

<style>
</style>