import {z} from "zod"

const costumersSchema = z.object({
    id: z.string(),
    cnpj: z.string(),
    name: z.string(),
    company_name: z.string(),
    state_registration: z.string(),
    email: z.string(),
    phone_number: z.string()
})

const costumersRequest = costumersSchema.omit({id: true})
   
const costumersResponse = z.array(costumersRequest)

export {costumersSchema, costumersRequest, costumersResponse}

  