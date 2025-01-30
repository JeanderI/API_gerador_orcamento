import {z} from "zod"

const accountReceivableSchema = z.object({
    id: z.string(),
    expense_category: z.string(),
    issue_date: z.string(),
    cost: z.string(),
    payment_proof: z.string()
})

const accountReceivableRequest = accountReceivableSchema.omit({id: true})
   
const accountReceivableResponse = z.array(accountReceivableRequest)

export {accountReceivableSchema, accountReceivableRequest, accountReceivableResponse}

  