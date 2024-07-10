import fastify from "fastify";
import { createTrip } from "./routes/create-trip";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { confirmTrip } from "./routes/confirm-trip";
import cors from "@fastify/cors";
import { confirmParticipant } from "./routes/confirm-participant";
import { createActivity } from "./routes/create-activity";
import { getActivity } from "./routes/get-activities";
import { createLink } from "./routes/create-link";
import { getLinks } from "./routes/get-links";

const app = fastify();

app.register(cors, {
    origin: true
});

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(confirmParticipant)
app.register(confirmTrip)
app.register(createTrip)
app.register(createActivity)
app.register(createLink)
app.register(getActivity)
app.register(getLinks)

app.listen({ port: 3333 }).then(() => {
    console.log("Server Running...")
});