// @ts-ignore
import ReviewModel from "~/server/models/Review.model";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const id = event?.context?.params?.id;

    console.log(body)
    try {
        await ReviewModel.findByIdAndUpdate(id, body);
        return { message: 'Review updated' };
    } catch(error) {
        throw createError({
            message: 'Something went wrong',
        });
    }
})