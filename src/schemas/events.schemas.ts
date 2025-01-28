import {z} from "zod"

const eventsSchema = z.object({
    id: z.string(),
    duration: z.string(),
    period: z.string(),
    number_attendants: z.string(),
    number_clients: z.string(),
    type: z.string()
})

const eventsRequest = eventsSchema.omit({id: true})
   
const eventsResponse = z.array(eventsRequest)

export {eventsSchema, eventsRequest, eventsResponse}

  