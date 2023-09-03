import MemberModel from "~/server/models/Member.model";

export default defineEventHandler(async(event) => {

    const data = await MemberModel.find();
    return data;
})