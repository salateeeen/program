const handleAsyncError = function (fn) {
    return (req, res, next) => {
        // catch just for mongoose error 
        // because other error will catched before catch
        fn(req, res, next).catch(next)
    }
}
module.exports = handleAsyncError