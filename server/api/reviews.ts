// // @ts-ignore
// import ReviewModel from "~/server/models/Review.model";
//
// export default defineEventHandler(async (event) => {
//     return await ReviewModel.find();
// })

import ReviewModel from "~/server/models/Review.model";
export default defineEventHandler(async(event) => {

    const data = await ReviewModel.find();
    return data;
})