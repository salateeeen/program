const handleAsyncError = function (fn) {
    return (req, res, next) => {
        // catch just for mongoose error
        fn(req, res, next).catch(next)
    }
}
module.exports = handleAsyncError