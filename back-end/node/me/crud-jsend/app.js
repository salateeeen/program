const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

//$ to add body in request
app.use(express.json())

// parse : from json to object
const students = JSON.parse(fs.readFileSync(`${__dirname}/data/students.json`, `utf-8`))


app.get('/api/v1/students', (req, res) => {
    res.status(200).json({
        status: "success",
        result: students.length,
        data: { students }
    })
})

app.get(`/api/v1/students/:varID`, (req, res) => {
    const variablesObj = req.params;
    const student = students.find((student) => {
        return student.id === +variablesObj.varID;
    })
    if (!student) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID"
        })
    }
    res.status(200).json({
        status: "success",
        data: {
            student
        }
    })
})

app.post('/api/v1/students', (req, res) => {
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
})

app.patch(`/api/v1/students/:varID`, (req, res) => {
    let student = students[+req.params.varID - 1];
    if (!student) {
        return res.status(400).json({
            status: "fail",
            message: "Invalid ID"
        })
    }
    let student2 = req.body;
    students[+req.params.varID - 1] = { ...student, ...student2 }
    res.status(200).json({
        status: "success",
        data: {
            student
        }
    })
})

app.delete(`/api/v1/students/:varID`, (req, res) => {
    const ID = +req.params.varID
    const student = students.find((student) => student.id === ID);
    if (!student) {
        return res.status(400).json({
            status: "fail",
            message: "Invalid ID"
        })
    }
    res.status(204).json({
        status: "success",
        data: "null"
    })
})

app.listen(port, `localhost`, () => console.log(`Example app listening on port ${port}!`))
