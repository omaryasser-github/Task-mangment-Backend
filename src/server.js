import express from "express";
import "dotenv/config";
import env from "./utils/validEnv.js";
import boards from "./routes/board.routes.js";
import tasks from "./routes/task.routes.js";


const port = env.PORT ;
const app = express();
app.use(express.json());





app.use('/api/v1/boards', boards);
app.use('/api/v1/tasks', tasks);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});