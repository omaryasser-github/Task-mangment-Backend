import express from "express";


export const getAllTasks = async (req , res) => {
    res.status(200).json({
        status : "success" , 
        message : "getAllTasks",
        data:{}
    });
}

export const getTask = async (req , res) => {
    res.status(200).json({
        status : "success" , 
        message : "getTask",
        data:{}
    });
}

export const createTasks = async (req , res) => {
    res.status(200).json({
        status : "success" , 
        message : "createTasks",
        data:{}
    });
}


export const updateTask = async (req , res) => {
    res.status(200).json({
        status : "success" , 
        message : "updateTask",
        data:{}
    });
}


export const deleteTask = async (req , res) => {
    res.status(200).json({
        status : "success" , 
        message : "deleteTask",
        data:{}
    });
}


