import {z} from "zod"

const accountPayablesSchema = z.object({
    id: z.string(),
    expense_category: z.string(),
    issue_date: z.string(),
    cost: z.string(),
    payment_proof: z.string()
})

const accountPayablesRequest = accountPayablesSchema.omit({id: true})
   
const accountPayablesResponse = z.array(accountPayablesRequest)

export {accountPayablesSchema, accountPayablesRequest, accountPayablesResponse}

  