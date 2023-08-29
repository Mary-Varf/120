<template>
    <tr>
        <td class="pr-4 py-2 text-left">{{reviewItem.author}}</td>
        <td class="pr-4 py-2 text-left">{{reviewItem.text}}</td>
        <td class="pr-4 py-2">
            <AppButton @click="updateReview"><UpdateIcon></UpdateIcon></AppButton>
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

    const review = defineProps({
        review: Object,
    })
    const reviewItem = review.review;

    const reviewsStore = useReviewsStore();
    const deleteItem = () => {
        reviewsStore.deleteReview(reviewItem._id);
    }
    const openForm = () => {

    }
    const updateReview = () => {
        reviewsStore.updateReview(reviewItem._id, {
            author: '555',
            text: 'sdfsd',
        })
    }
</script>

<style scoped>

</style>