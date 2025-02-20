const mongoose = require("mongoose")
const connection = mongoose.connect("write here mongodb path");

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
