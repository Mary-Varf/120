import DepartmentModel from "~/server/models/Department.model";

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    try {
        await DepartmentModel.create(body);
        return { message: 'Review created' };
    } catch(error) {
        throw createError({
            message: 'Something went wrong',
        });
    }
})