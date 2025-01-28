import {z} from "zod"

const estimatesSchema = z.object({
    id: z.string(),
    total_amount: z.string(),
    sales_type: z.string(),
    costumer: z.string(),
    flavors: z.string(),
    email: z.string(),
    locations: z.string(),
    events: z.string(),
    start_date: z.string(),
    start_time: z.string(),
    end_date: z.string(),
    end_time: z.string(),
})

const estimatesRequest = estimatesSchema.omit({id: true})
   
const estimatesResponse = z.array(estimatesRequest)

export {estimatesSchema, estimatesRequest, estimatesResponse}

  