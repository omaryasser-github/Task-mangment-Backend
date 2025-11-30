import express from "express";
import { getAllTasks ,getTask, createTasks, updateTask, deleteTask } from "../controllers/task.controller.js";


const router = express.Router();

router.get("/getAllTasks" , getAllTasks);
router.get("/:id" , getTask);
router.post("/createTasks" ,createTasks);
router.put("/:id" , updateTask);
router.delete("/:id" , deleteTask);


export default router;