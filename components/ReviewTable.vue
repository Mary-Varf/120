<template>
    <div>
        <table class="table-auto">
            <tr>
                <th class="pr-4 py-2 text-left">Author</th>
                <th class="pr-4 py-2 text-left">Author</th>
                <th class="pr-4 py-2 text-left">Read</th>
                <th class="pr-4 py-2 text-left">Update</th>
                <th class="pr-4 py-2 text-left">Delete</th>
            </tr>

            <template v-for="review in reviews" :key="review._id">
                <ReviewForm :review="review" v-if="isEditMode"></ReviewForm>
                <ReviewItem :review="review" v-else></ReviewItem>
            </template>
        </table>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useReviewsStore } from "~/store/stores";
import ReviewItem from "~/components/ReviewItem.vue";

export default {
    components: {ReviewItem},
    setup () {
        const isEditMode = ref(false);
        const reviewsStore = useReviewsStore();

        reviewsStore.getReviews();

        const { reviews } = storeToRefs(reviewsStore);

        return {
            reviews,
            isEditMode,
        }
    }
}
</script>

<style scoped>

</style>