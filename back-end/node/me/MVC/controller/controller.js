const Student = require('./../models/studentModel.js');


const getAllStudents = async (req, res) => {
    try {
        //? find return array
        const students = await Student.find()
        res.status(200).json({
            status: "success",
            result: students.length,
            data: { students }
        })
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

const getStudent = async (req, res) => {
    try {
        const id = +req.params.id;
        const student = await Student.findOne({ id: id })

        res.status(200).json({
            status: "success",
            data: {
                student
            }
        })

    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err
        })
    }
}


const creatStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        console.log(newStudent);
        res.status(201).json({
            status: "success",
            data: {
                student: newStudent
            }
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err
        })
    }
}


const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: "success",
            data: {
                student
            }
        })
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err
        })
    }
}


const deleteStudent = async (req, res) => {
    try {
        const id = +req.params.id;
        await Student.deleteOne({ id: id })
        res.status(204).json({
            status: "success",
            data: "null"
        })
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

module.exports = {
    getAllStudents,
    getStudent,
    creatStudent,
    updateStudent,
    deleteStudent,
}