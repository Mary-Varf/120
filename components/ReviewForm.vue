<template>
    <tr>
        <td class="pr-4 py-2 text-left">
            <input :value="reviewItem.title"
                   ref="input"
                   type="text"
                   class="px-4 py-2 ml-2 rounded text-black"
            />
        </td>

        <td class="pr-4 py-2 text-left">
            <input :value="reviewItem.year"
                   type="text"
                   class="px-4 py-2 ml-2 rounded text-black"
            />
        </td>

        <td><AppButton><UpdateIcon></UpdateIcon></AppButton></td>
    </tr>
</template>

<script setup>
import SaveIcon from "~/components/icons/SaveIcon.vue";
import AppButton from "~/components/AppButton.vue";

const review = defineProps({
    review: {
        type: Object,
        required: true,
    },
})
const input = ref(null);
const focusInput = () => {
    nextTick(() => {
        input?.value?.focus();
    });
}
focusInput();

const reviewItem = review.review;

</script>

<style>
    input {
        outline-color: transparent;
    }
</style>