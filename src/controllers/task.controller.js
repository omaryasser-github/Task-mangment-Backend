import Task from "../models/TaskModel.js";

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json({
            status: "success",
            message: "getTask by id ",
            data: {
                task
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}
// READ operation
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json({
            status: "success",
            message: "getAllTasks",
            result: tasks.length,
            data: {
                tasks
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}

// CREATE operation
export const createTasks = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);

        res.status(200).json({
            status: "success",
            message: "createTasks",
            data: {
                Task: newTask
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}

// UPDATE operation
export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "success",
            message: "updateTask",
            data: {
                task
            }
        });

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}

// DELETE operation
export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: "success",
            message: "deleteTask",
            data: { task }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}
