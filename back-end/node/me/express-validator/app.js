const express = require('express')
const app = express()
const { body, validationResult } = require(`express-validator`)
const port = 3000

//?meddelWare
//% to parse json
app.use(express.json())

let students = [
    {
        "id": 1,
        "name": `sultan`
    },
    {
        "id": 2,
        "name": `omar`
    }
]

const notFound = { "msg": "we are no found" }


/// get : return data from URL response
//& get all courses
app.get('/api', (req, res) => {
     res.json(students) })

//* dynamic variable : then we reach them (req.params)
//& get single course
//? /api/:varID : route <=> resource
//# (req, res) => {} : controler
app.get('/api/:varID', (req, res) => {
    const student = students.find((student) => {
        return student.id === +req.params.varID
    })
    if (!student) {
        return res.status(404).json(notFound)
    }
    res.json(student)
})

/// from app we send message to dataBase
//$ body from express-validator to check body
app.post('/api', body(`name`).notEmpty().withMessage("name is required").isLength({ min: 2 }), (req, res) => {
    const postMsg = req.body;
    //    if(!postMsg.name){
    //     return res(400).json({error: "the name is required"})
    //    }
    //% validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }

    students.push({ "id": students.length + 1, ...postMsg })
    res.status(201).json(students[students.length - 1]);
})

/// update message
app.patch(`/api/:varID`, (req, res) => {
    const body = req.body
    let student = students[+req.params.varID - 1];
    if (!student) {
        return  res.status(400).json(notFound)
    }
    students[+req.params.varID - 1] = { ...student, ...body}
    res.status(200).json(student)
}) 

/// delete message
app.delete(`/api/:varID`, (req, res) => {
    const ID = +req.params.varID
    const student = students.find((student) => student.id === ID);
    if (!student) {
      return  res.status(400).json(notFound)
    }
    students = students.filter((student) => student.id !== ID)
    console.log(students);
    res.status(200).json({sucess: "true"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
