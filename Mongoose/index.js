const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://rajatind12:SHALINI1234@cluster0.kcjzx.mongodb.net/");

const studentSchema = new mongoose.Schema({
    name: String,
    student_id: String,
    age:Number,
})

const StudentModel = mongoose.model("student", studentSchema)

module.exports = {
    connection,
    StudentModel
}
