import express from "express";
import { getAllTasks, getTask, createTasks, updateTask, deleteTask } from "../controllers/task.controller.js";


const router = express.Router();

router.get("/getAllTasks" , getAllTasks);
router.get("/:id" , getTask);
router.post("/createTasks" ,createTasks);
router.put("/updateTask" , updateTask);
router.delete("/deleteTask" , deleteTask);


export default router;