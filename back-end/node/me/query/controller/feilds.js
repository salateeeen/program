const { query } = require('express-validator');
const Student = require('./../models/studentModel.js');


const getAllStudents = async (req, res) => {
    try {
        let query = Student.find()

        //# 3) feilds
        // % ./router/router.js?feild=name,id
        if (req.query.feild) {
            const feilds = req.query.feild.split(",").join(" ")
            query = query.select(feilds)
        } else {
            // ? default
            //$ (-) execluded
            query = query.select("-course")
        }

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