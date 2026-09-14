class appError extends Error{
    constructor(message, statusCode){
        //$ super(message) => this.message = message
        super(message);
        this.msg = message
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(`4`) ? `fail` : `error`
        this.isOperational = true //? it means we know what is the error
    }
}

module.exports = appError