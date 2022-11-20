import { Client } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";
import { CreateClientDTO } from "../DTOs/CreateClientDTO";
import { IClientsRepository } from "../interfaces/IClientsRepository";

export class ClientsRepository implements IClientsRepository {
	async create(data: CreateClientDTO): Promise<Client> {
		return prismaClient.client.create(data);
	};
	
	async findByUserName(username: string): Promise<Client> {
		return prismaClient.client.findFirst({
			where: {
				username: {
					mode: "insensitive"
				}
			}
		});
	};
}