const Student = require('./../models/studentModel.js');
const handleAsyncError = require(`./../error/asyncError`);
const appError = require('./../error/appError.js');

const getAllStudents = handleAsyncError(async (req, res, next) => {
    const students = await Student.find()
    res.status(200).json({
        status: "success",
        result: students.length,
        data: { students }
    })
})

const getStudent = handleAsyncError(async (req, res, next) => {
    const id = req.params.id;
    console.log(1, "1")
    const student = await Student.findById(id)

    if (!student) {
        //! go to global handler error
        return next(new appError(`no student found wiht this id`, 404))
        /// without return will be executed
        console.log(`without return we log this`);
    }

    res.status(200).json({
        status: "success",
        data: {
            student
        }
    })
})


const creatStudent = handleAsyncError(async (req, res, next) => {
    const student = await Student.create(req.body);
    console.log(student);
    res.status(201).json({
        status: "success",
        data: {
            student: student
        }
    });
})


const updateStudent = handleAsyncError(async (req, res, next) => {
    const id = req.params.id;
    const student = await Student.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    });

    if (!student) {
        return next(new appError(`no student found wiht this id`, 404))
    }

    res.status(200).json({
        status: "success",
        data: {
            student
        }
    })
})


const deleteStudent = handleAsyncError(async (req, res, next) => {
    const id = req.params.id;
    const student = await Student.deleteOne({ id: id })

    if (!student) {
        return next(new appError(`no student found wiht this id`, 404))
    }
    res.status(204).json({
        status: "success",
        data: "null"
    })
})

module.exports = {
    getAllStudents,
    getStudent,
    creatStudent,
    updateStudent,
    deleteStudent,
}
