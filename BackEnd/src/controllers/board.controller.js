// import {express} from "express";
import express from "express";



export const getAllBoards = async (req , res) => {
    res.status(200).json({
        status : "success" , 
        message : `getAllBoards`,
        data:{}
    });
}


export const getBoard = async (req , res) => {
    res.send("getBoard");
}       

export const createBoards = async (req , res) => {
    res.send("createBoards");
}

export const updateBoard = async (req , res) => {
    res.send("updateBoard");
}

export const deleteBoard = async (req , res) => {
    res.send("deleteBoard");
}

