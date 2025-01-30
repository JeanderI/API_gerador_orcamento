import {z} from "zod"

const flavorsSchema = z.object({
    id: z.string(),
    price: z.string(),
    name: z.string(),
    quantity: z.string(),
    total: z.string()
})

const flavorsRequest = flavorsSchema.omit({id: true})
   
const flavorsResponse = z.array(flavorsRequest)

export {flavorsSchema, flavorsRequest, flavorsResponse}

  