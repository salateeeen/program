const { query } = require('express-validator');
const Student = require('./../models/studentModel.js');

const sort = (req, res, next) => {
    req.query.sort = "-id";
    console.log(req.query);
    next()
}

const getAllStudents = async (req, res) => {
    try {
        let query = Student.find()

        console.log(req.query.sort);

        //# 2) sort
        // % ./router/router.js?sort=id
        if (req.query.sort) {
            const sorts = req.query.sort.split(",").join(" ")
            query = query.sort(sorts)
        } else {
            //? default
            //$ (-) descending
            query = query.sort("-createAt")
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
    getStudent,
    sort
}

