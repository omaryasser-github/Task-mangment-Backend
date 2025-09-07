import express from "express";
import { getAllBoards, getBoard, createBoards, updateBoard, deleteBoard } from "../controllers/board.controller.js";


const router = express.Router();
router.get("/getAllBoards" , getAllBoards);
router.get("/:id" , getBoard);
router.post("/createBoards" ,createBoards);
router.put("/updateBoard" , updateBoard);
router.delete("/deleteBoard" , deleteBoard);
export default router;