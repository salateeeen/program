class appError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode
        this.isOperational = true //? it means we know what is the error
        this.status = `${statusCode}`.startsWith(`4`) ? `fail` : `error`
    }
}

module.exports = appError