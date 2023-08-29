import ReviewModel from "~/server/models/Review.model";

export default defineEventHandler(async (event) => {
    const id = event?.context?.params?.id;

    try {
        await ReviewModel.findByIdAndDelete(id);
        return { message: 'Review deleted' };
    } catch(error) {
        throw createError({
            message: 'Something went wrong',
        });
    }
})