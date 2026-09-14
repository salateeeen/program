const { query } = require('express-validator');
const Student = require('./../models/studentModel.js');
const sort = (req, res, next) => {
    req.query.sort = "-id";
    console.log(req.query);
    next()
}


const getAllStudents = async (req, res) => {
    try {

        //* usually we need to execlude some ?X=Y from our query 
        //* so we  use hard copy obj from req.query
        const copyObj = { ...req.query }
        delete copyObj["page"]

        //$ find() return query
        //$ and when we await this query the document is creat
        // const query = Student.find()
        // students = await query

        /// QUERY here ///
        // const students = await Student.find({
        //     id: { $gte: 3 }
        // })

        ///chain all queries in the find()
        // const students = await Student
        // .find()
        // .where(`name`)
        // .equals(`sultan`)

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