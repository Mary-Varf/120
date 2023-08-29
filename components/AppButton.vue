<template>
    <button class="rounded hover:bg-black p-0.5">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped>
    button {
        cursor: pointer;
    }
    button:disabled {
        cursor: not-allowed;
    }
</style>