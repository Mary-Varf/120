import DepartmentModel from "~/server/models/Department.model";

export default defineEventHandler(async (event) => {
    const id = event?.context?.params?.id;

    try {
        await DepartmentModel.findByIdAndDelete(id);
        return { message: 'Review deleted' };
    } catch(error) {
        throw createError({
            message: 'Something went wrong',
        });
    }
})