import {z} from "zod"

const issuerSchema = z.object({
    id: z.string(),
    cnpj: z.string(),
    name: z.string(),
    company_name: z.string(),
    state_registration: z.string(),
    email: z.string(),
    phone_number: z.string(),
    password: z.string(),
})

const issuerRequest = issuerSchema.omit({id: true})
   
const issuerResponse = z.array(issuerRequest)

export {issuerSchema, issuerRequest, issuerResponse}

  