<template>
    <div class="gb-gray-100 p-6 border-b-2 border-white-100 mb-7 w-screen absolute">
        <h5 class="font-bold mb-2">Add new review</h5>

        <div class="flex gap-4 items-start flex-row flex-wrap">
            <input :value="author"
                   @input="updateAuthorInput"
                   @click="clearEditedItemId"
                   ref="authInput"
                   type="text"
                   class="px-4 py-2 rounded text-black"
            />

            <textarea rows="4"
                      cols="40"
                      type="text"
                      @click="clearEditedItemId"
                      class="px-4 py-2 mr-2 rounded text-black"
                      :value="text"
                      @input="updateTextInput"
            />

            <AppButton @click="handleSaveReview"
                       :class="{'cursor-not-allowed': !author || !text}"
                       :disabled="!author?.length || !text?.length"
            ><SaveIcon></SaveIcon></AppButton>
        </div>
    </div>
</template>

<script setup>
import SaveIcon from "~/components/icons/SaveIcon.vue";
import {useReviewsStore} from "~/store/stores";

const authInput = ref(null);
const author = ref(null);
const text = ref(null);
const reviewsStore = useReviewsStore();

const focusInput = () => {
    nextTick(() => {
        authInput?.value?.focus();
    });
}
const handleSaveReview = () => {
    createReview();
    clearInputs();
}
const clearInputs = () => {
    author.value = null;
    text.value = null;
}

const clearEditedItemId = () => {
    reviewsStore.setEditedItemId(null);
}

const createReview = () => {
    reviewsStore.createReview({author: author.value, text: text.value});
}
const updateAuthorInput = (event) => {
    author.value = event.target.value
}
const updateTextInput = (event) => {
    text.value = event.target.value
}

onMounted(() => {
    focusInput();
})

</script>

<style scoped>
</style>