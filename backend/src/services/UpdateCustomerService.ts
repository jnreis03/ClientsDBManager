import prismaClient from "../prisma"

interface EditCustomerProps{
    id: string;
    name: string;
    email: string;
}

class UpdateCustomerService {
    async execute({id, name, email}: EditCustomerProps){
        const customer = await prismaClient.customer.update({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email,
                updated_at: Date().toString()
            }
        })

        return customer
    }

}
export { UpdateCustomerService }