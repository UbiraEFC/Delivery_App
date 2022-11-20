import { app } from "./src/server";
import { config } from "./src/config";

app.listen(config.port, () => console.log(`Server Running on http://localhost:${config.port}`));