import { AppError } from "./AppError";

export function existsOrError(value: any, msg: string, statusCode: number = 400) {
	if(!value) throw new AppError(msg, statusCode || 400);
}