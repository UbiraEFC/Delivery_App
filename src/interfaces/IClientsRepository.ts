import { Client } from "@prisma/client";
import { CreateClientDTO } from "../DTOs/CreateClientDTO";

export interface IClientsRepository {
	create(data: CreateClientDTO): Promise<Client>;
	findByUserName(username: string): Promise<Client>;
}