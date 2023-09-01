import DepartmentModel from "~/server/models/Department.model";

export default defineEventHandler(async(event) => {

    const data = await DepartmentModel.find();
    return data;
})