const User = require('../Models/userModel.js');
const handleAsyncError = require(`../Error/asyncError.js`);
const appError = require('../Error/appError.js');


const userStats = handleAsyncError(async (req, res, next) => {
    const stats = await User.aggregate([
        {
            $match: {
                age: { $gte: 17 }
            }
        },
        {
            $group: {
                _id: "$role",
                numOfUsers: {
                    $sum: 1
                },
                sumAge: {
                    $sum: `$age`
                },
                avgAge: {
                    $avg: `$age`
                }
            }
        },
        {
            $addFields: {
                role: `$_id`
            }
        },
        {
            $project : {
                /// 0 or 1 hide or show
                _id : 0
            }
        },
        {
            $sort :{
                avgAge : -1
            }
        },
        {
            $limit : 15
        }
        // {
        //&     $count: `totalGroup`
        // },
        // {
        //&     $unwind : `if you have array spread this array into multiple docs`
        // }
    ])
    res.status(200).json({
        status: "success",
        result: stats.length,
        data: { stats }
    })
});

module.exports = {
    userStats
}