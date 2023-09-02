<template>
    <div class="fixed md:top-2 top-14 bg-gray-800 px-4 pb-2 md:p-2 md:w-auto w-full sm:pr-8 z-50">
        <h5 class="font-bold mb-2 capitalize -ml-4 md:-ml-2 md:my-4 my-0">Add new team member</h5>
        <MemberForm :id="null"
                    :review="{}"
                    class="-ml-4"
        />
    </div>
</template>

<script setup>
import MemberForm from "~/components/Members/MemberForm.vue";
</script>

<style scoped>
</style>