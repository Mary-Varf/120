// @ts-ignore
import ReviewModel from '~/server/models/Review.model';
export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    try {
        await ReviewModel.create(body);
        return { message: 'Review created' };
    } catch(error) {
        throw createError({
            message: 'Something went wrong',
        });
    }
})