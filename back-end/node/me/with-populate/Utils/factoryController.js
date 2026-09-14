const handleAsyncError = require(`../Error/asyncError.js`);
const appError = require('../Error/appError.js');


const getAll = function (Model) {
    const model = `${Model.modelName.toLowerCase()}s`
    return handleAsyncError(async (req, res, next) => {
        const doc = await Model.find(req.filterBy || {}).select(`-__v -id`);
        res.status(200).json({
            status: "success",
            result: doc.length,
            data: { [model]: doc }
        })
    })
};

const getOne = function (Model) {
    const model = Model.modelName.toLowerCase();
    return handleAsyncError(async (req, res, next) => {
        const _id = req.params.id;
        const doc = await Model.findOne({ _id, ...req.filterBy || {} }).select(`-__v`);

        if (!doc) {
            return next(new appError(`No document found wiht this id.🔥`, 404));
        }

        res.status(200).json({
            status: "success",
            data: {
                [model]: doc
            }
        })
    })
};

const createOne = function (Model) {
    const model = Model.modelName.toLowerCase();
    return handleAsyncError(async (req, res, next) => {
        if (!req.body) {
            return next(new appError("Please write your info.", 404));
        }
        const doc = await Model.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                [model]: doc
            }
        });
    })
};

const updateOne = function (Model) {
    const model = Model.modelName.toLowerCase();
    return handleAsyncError(async (req, res, next) => {
        const id = req.params.id;
        const doc = await Model.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!doc) {
            return next(new appError(`No document found wiht this id.🔥`, 404))
        }

        res.status(200).json({
            status: "success",
            data: {
                [model]: doc
            }
        })
    })
};

const deleteOne = function (Model) {
    return handleAsyncError(async (req, res, next) => {
        const id = req.params.id;
        const doc = await Model.deleteOne({ _id: id })

        if (!doc) {
            return next(new appError(`No document found wiht this id.🔥`, 404))
        }
        res.status(204).json({
            status: "success",
            data: "null"
        })
    })
}


module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}