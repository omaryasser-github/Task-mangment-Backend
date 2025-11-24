import express from "express";
import "dotenv/config";
import boards from "./routes/board.routes.js";
import tasks from "./routes/task.routes.js";
import { connectDB } from "./config/db.js";
import env from "./utils/validEnv.js";
import morgan from "morgan";

const port = env.PORT || 4000;
const app = express();

// => HTTP request logger middleware 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/v1/boards', boards);
app.use('/api/v1/tasks', tasks);

//=> always connect to DB before accepting HTTP requests
connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});