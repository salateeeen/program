const handleAsyncError = function (fn) {
    //* console.log(`call in start running`);
    return (req, res, next) => {
        // catch just for mongoose error 
        // because other error will catched before catch
        fn(req, res, next).catch(next)
    }
}
module.exports = handleAsyncError