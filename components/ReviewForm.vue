<template>
    <tr class="">
        <td class="pr-4 py-2 text-left flex">
            <input :value="author"
                   @input="updateAuthorInput"
                   ref="input"
                   type="text"
                   class="px-4 py-2 mr-2 rounded text-black items-start"
            />
        </td>

        <td class="pr-4 py-2 text-left">
            <textarea rows="4"
                      cols="40"
                      :value="text"
                      @input="updateTextInput"
                      class="px-4 py-2 mr-2 rounded text-black"
            />
        </td>

        <td><AppButton @click="handleSave"
                       :disabled="!author?.length || !text?.length"
        ><UpdateIcon></UpdateIcon></AppButton></td>
    </tr>
</template>

<script setup>
import UpdateIcon from "~/components/icons/UpdateIcon.vue";
import AppButton from "~/components/AppButton.vue";
import {useReviewsStore} from "~/store/stores";

const props = defineProps({
    review: {
        type: Object,
        required: true,
    },
    id: {
        type: String,
        required: true,
    }
})

const author = ref(null);
const text = ref(null);
const input = ref(null);
const emit = defineEmits(['closeEditMode']);
const reviewsStore = useReviewsStore();

const focusInput = () => {
    nextTick(() => {
        input?.value?.focus();
    });
}

const updateAuthorInput = (event) => {
    author.value = event.target.value
}

const updateTextInput = (event) => {
    text.value = event.target.value
}

const handleSave = () => {
    emit('closeEditMode');

    reviewsStore.updateReview(props.id, {
        ...props.review,
        author: author.value,
        text: text.value,
        updated: new Date(),
    });
}

onMounted(() => {
    author.value = props.review?.author ?? '';
    text.value = props.review?.text ?? '';
})

focusInput();

</script>

<style>
    input, textarea {
        outline-color: transparent;
    }
</style>