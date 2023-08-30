import { defineStore } from 'pinia';

export const useReviewsStore = defineStore({
    id: 'review-store',
    state: () => {
        return {
            reviews: [],
            editedItemId: null,
        }
    },

    actions: {
        setEditedItemId(id) {
            this.editedItemId = id;
        },
        async getReviews() {
            const data = await $fetch('/api/reviews');

            this.reviews = data?.length ? data : [];
        },
        async createReview (newReview) {
            await $fetch('/api/create', {
                method: 'POST',
                body: newReview,
            })
                .then((resp) => {
                    console.log(resp)
                })
                .catch((error) => {
                    console.log(error)
                })
            // TODO: move to then
            this.reviews.push(newReview);
        },
        async deleteReview(id) {
            await $fetch(`/api/${id}`, {
                method: 'DELETE'
            })
                .then((resp) => {
                })
                .catch((error)=> {
                    console.log(error)
                }) ;

            //TODO: filter in then
            this.reviews = [...this.reviews].filter(el => el._id !== id);
        },
        async updateReview(id, updatedReview) {
            console.log(updatedReview),
                await $fetch(`/api/${id}`, {
                    method: 'PUT',
                    body: updatedReview,
                })
                    .then((resp) => {
                    })
                    .catch((error)=> {
                        console.log(error)
                    });
            //TODO: move to then
            this.reviews = [...this.reviews].map(el => {
                if(el._id === id) return updatedReview
                else return el;
            });
        }
    }

})
