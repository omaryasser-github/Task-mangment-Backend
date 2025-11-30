import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true  
    },
    description: String,
    icon: Array,
    status: {
        type: String,
        default: "In progress"
    }
})

const Task = mongoose.model('Task', taskSchema);

// const testTask = new Task({name:"task 1", description:"task 1 description", icon:[], status:"In progress"});
// testTask.save().then(res => console.log(res)).catch(err => console.log(err));

export default Task