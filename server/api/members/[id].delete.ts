import MemberModel from "~/server/models/Member.model";

export default defineEventHandler(async (event) => {
    const id = event?.context?.params?.id;

    try {
        await MemberModel.findByIdAndDelete(id);
        return { message: 'Review deleted' };
    } catch(error) {
        throw createError({
            message: 'Something went wrong',
        });
    }
})