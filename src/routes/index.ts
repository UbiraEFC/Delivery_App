import { Router } from "express";
import { CreateClientController } from "../controllers/CreateClientController";

export const routes = Router();

const createClientController = new CreateClientController();

routes.get("/", (request, response) => {
	return response.json({
		message: "Hello Delivery APP",
	});
});

routes.post("/client/", createClientController.handle);

