import "dotenv/config";

export const config = {
	databaseUrl: process.env.DATABASEURL,
	port: process.env.PORT
}