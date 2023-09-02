<template>
    <div class="text-white bg-black fixed bottom-0 right-0 px-3 py-1 rounded text-[8px]"
         v-show="popupMsg"
    >
        {{popupMsg}}
    </div>
</template>

<script setup>
import {useStore} from "~/store/stores";
import {storeToRefs} from "pinia";

const membersStore = useStore();
const { popupMsg } = storeToRefs(membersStore);

watch((popupMsg), () => {
    setTimeout(() => {
        membersStore.setPopupMsg(null);
    },1000)
})
</script>

<style scoped>

</style>