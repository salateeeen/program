const fs = require('fs');
const students = JSON.parse(fs.readFileSync(`${__dirname}/../data/students.json`, `utf-8`))

const chickID = (req, res, next, id) => {
    const student = students.find((student) => student.id === +id);
    if (!student) {
        return res.status(400).json({
            status: "fail",
            message: "Invalid ID"
        })
    }
    next()
}

const getAllStudents = (req, res) => {
    res.status(200).json({
        status: "success",
        result: students.length,
        data: { students }
    })
}

const getStudent = (req, res) => {
    const variablesObj = req.params;
    const student = students.find((student) => {
        return student.id === +variablesObj.id;
    })
    res.status(200).json({
        status: "success",
        data: {
            student
        }
    })
}

const creatStudent = (req, res) => {
    ///we write body in postman
    const newStudent = req.body;
    const newID = students[students.length - 1].id + 1;
    const newData = { id: newID, ...newStudent }
    students.push(newData)
    res.status(201).json({
        status: "success",
        data: {
            student: newData
        }
    });
}

const updateStudent = (req, res) => {
    let student = req.body;
    res.status(200).json({
        status: "success",
        data: {
            student
        }
    })
}

const deleteStudent = (req, res) => {
    res.status(204).json({
        status: "success",
        data: "null"
    })
}

module.exports = {
    chickID,
    getAllStudents,
    getStudent,
    creatStudent,
    updateStudent,
    deleteStudent,
}