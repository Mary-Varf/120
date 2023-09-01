// @ts-ignore
import MemberModel from '~/server/models/Member.model';

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    try {
        await MemberModel.create(body);
        return { message: 'Review created' };
    } catch(error) {
        throw createError({
            message: 'Something went wrong',
        });
    }
})