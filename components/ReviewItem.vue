<template>
    <tr>
        <td class="pr-4 py-2 text-left">{{initialAuthor}}</td>
        <td class="pr-4 py-2 text-left">{{initialText}}</td>
        <td class="pr-4 py-2">
            <AppButton @click="handleUpdateItem"><UpdateIcon></UpdateIcon></AppButton>
        </td>
        <td class="pr-4 py-2">
            <AppButton @click="deleteItem"><DeleteIcon></DeleteIcon></AppButton>
        </td>
    </tr>
</template>

<script setup>
    import DeleteIcon from "~/components/icons/DeleteIcon.vue";
    import AppButton from "~/components/AppButton.vue";
    import UpdateIcon from "~/components/icons/UpdateIcon.vue";
    import {useReviewsStore} from "~/store/stores";

    const props = defineProps({
        reviewId: {type: String},
        initialAuthor: {type: String},
        initialText: {type: String},
    })
    const emit = defineEmits(['setEditedItemId']);
    const reviewItem = props.review;

    const reviewsStore = useReviewsStore();
    const deleteItem = () => {
        reviewsStore.deleteReview(props.reviewId);
    }
    const handleUpdateItem = () => {
        reviewsStore.setEditedItemId(props.reviewId)
    }
</script>

<style scoped>

</style>