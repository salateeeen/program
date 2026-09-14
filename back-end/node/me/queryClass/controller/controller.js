const { query } = require('express-validator');
const Student = require('./../models/studentModel.js');
const queryClass = require('./../query/query.js');

const sort = (req, res, next) => {
    req.query.sort = "-id";
    console.log(req.query);
    next()
}

const getAllStudents = async (req, res) => {
    try {
        const query = new queryClass(Student.find(), req.query)
        const students = await query.sort().feild().query

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

module.exports = {getAllStudents}