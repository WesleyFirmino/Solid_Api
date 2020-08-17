import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgreUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgreUsersRepository = new PostgreUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgreUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export {  createUserUseCase, createUserController }