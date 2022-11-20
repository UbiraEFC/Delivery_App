import { Request, Response } from "express";
import { CreateClientUseCase } from "../adapters/CreateClientUseCase";
import { ClientsRepository } from "../repositories/ClientsRepository";

export class CreateClientController {
	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { username, password } = request.body;

			const clientsRepository = new ClientsRepository();
			const createClientUseCase = new CreateClientUseCase(clientsRepository);
			const clientInfo = await createClientUseCase.execute({
				username,
				password
			});

			return response.status(201).json(clientInfo);
		} catch (error) {
			return response.status(error.statusCode).json({ message: error.message });
		}
	}
}