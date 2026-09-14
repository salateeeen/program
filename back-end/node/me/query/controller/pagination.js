const { query } = require('express-validator');
const Student = require('./../models/studentModel.js');


const getAllStudents = async (req, res) => {
    try {
        const copyObj = { ...req.query }
        delete copyObj["page"]
        delete copyObj["limit"]
        const query = Student.find()

        /// 4) pagination
        //% ./router/router.js?page=2&limit=3
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        const skip = (page - 1) * limit 
        //? skip(how many element)
        query.skip(skip).limit(limit)

        const  numStudents = await Student.countDocuments()
        if (skip >= numStudents) {
            throw new Error(`page is not exist`)
        }

        const students = await query
        res.status(200).json({
            status: "success",
            result: students.length,
            data: { students }
        })
    } catch (err) {
        console.log(err);
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