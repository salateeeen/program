 class query {

    constructor(query, queryObj) {
        this.query = query
        this.queryObj = queryObj
    };

    copyObj(){
        const copyObj = { ...this.queryObj }
        delete copyObj["page"]
        delete copyObj["limit"]
        delete copyObj["feild"]
        delete copyObj["sort"]
        return copyObj
    }

    filter() {
        this.query = this.query.find(this.copyObj())
        return this
    }
    
    filterPlus() {
        let queryStr = JSON.stringify(this.queryObj)
        queryStr = queryStr.replace(/\b("gte"|"gt"|"lt"|"lte")\b/g, (match) => `$${match}`)
        queryJson = JSON.parse(queryStr)
        this.query = this.query.find(this.copyObj())

        return this
    }

    feild() {
        if (this.queryObj.feild) {
            const feilds = this.queryObj.feild.split(",").join(" ")
            this.query = this.query.select(feilds)
        } else {
            this.query = this.query.select("-course")
        }
        return this
    }

    sort() {
        if (this.queryObj.sort) {
            const sorts = this.queryObj.sort.split(",").join(" ")
            this.query = this.query.sort(sorts)
        } else {
            this.query = this.query.sort("-createAt")
        }
        return this
    }

     pagination() {
        const page = this.queryObj.page || 1
        const limit = this.queryObj.limit || 5
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        
        return this
    }
}

module.exports = query