<template>
    <table class="table-auto table">
            <tr>
                <th class="pr-4 py-2 text-left w-1/3">Author</th>
                <th class="pr-4 py-2 text-left w-1/3">Author</th>
                <th class="pr-4 py-2 text-left">Update</th>
                <th class="pr-4 py-2 text-left">Delete</th>
            </tr>

            <TransitionGroup name="tableRows">
                <template v-for="review in reviews" :key="review._id">
                        <ReviewForm :review="review"
                                    :id="review._id"
                                    @closeEditMode="setEditedItemId(null)"
                                    v-if="isEditMode(review._id)"
                        ></ReviewForm>

                        <ReviewItem :reviewId="review._id"
                                    :initialText="review.text"
                                    :initialAuthor="review.author"
                                    @setEditedItemId="setEditedItemId"
                                    v-else
                        ></ReviewItem>
                </template>
            </TransitionGroup>
        </table>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useReviewsStore } from "~/store/stores";
import ReviewItem from "~/components/ReviewItem.vue";

const reviewsStore = useReviewsStore();
const editedItemId = ref(null);

reviewsStore.getReviews();

const { reviews } = storeToRefs(reviewsStore);

const setEditedItemId = (id) => {
    editedItemId.value = id;
}
const isEditMode = (id) => {
    return editedItemId.value === id;
}

// watch(reviews, () => {
//     reviews.value = reviews;
// }, {deep: true})

</script>

<style scoped>
.tableRows-enter-active,
.tableRows-leave-active {
    transition: all 0.5s ease;
}
.tableRows-enter-from,
.tableRows-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.table {
    margin-top: 230px;
}
</style>