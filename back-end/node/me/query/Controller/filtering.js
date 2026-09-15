const { query } = require('express-validator');
const Student = require('./../models/studentModel.js');


const getAllStudents = async (req, res) => {
    try {
        //# 1A) filtering
        //% ./router/router.js?name="sultan" & id=4;
        //? then req.query = {name: "sultan", id: 4}
        const query = Student.find(req.query)
        
        const students = await query
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


module.exports = {
    getAllStudents,
    getStudent
}