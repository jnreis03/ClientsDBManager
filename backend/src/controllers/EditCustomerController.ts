import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }
        const { name, email } = request.body as { name: string, email: string }

        const updateCustomer = new UpdateCustomerService()
        const customer = await updateCustomer.execute({id, name, email});

        reply.send(customer);
    }

}

export { UpdateCustomerController }