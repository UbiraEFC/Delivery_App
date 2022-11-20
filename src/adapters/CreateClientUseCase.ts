import { hash } from "bcrypt";
import { CreateClientDTO } from "../DTOs/CreateClientDTO";
import { CreateClientRequestDTO } from "../DTOs/CreateClientRequestDTO";
import { AppError } from "../errors/AppError";
import { existsOrError } from "../errors/existsOrError";
import { IClientsRepository } from "../interfaces/IClientsRepository";


export class CreateClientUseCase {
	constructor(
		private clientsRepository: IClientsRepository
	) {}

	async execute({
		username, 
		password
	}: CreateClientRequestDTO): Promise<any> {

		try{
			const existsUserName = await this.clientsRepository.findByUserName(username);
			existsOrError(username, 'UserName is Required!');
			existsOrError(password, 'Password is Required!');
			existsOrError(!existsUserName, 'UserName already exists!');

			const passwordHash = await hash(password, 8);

			const queryClient: CreateClientDTO = {
				data: {
					username,
					password: passwordHash,
				}
			}

			const user = await this.clientsRepository.create(queryClient);

			return user;
		} catch(error) {
			if(error.statusCode) throw error;
			throw new AppError(error.message);
		}
	}
}