const Joi = require("joi");


const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().min(18),
  address: Joi.object({
    lat: Joi.number(),
    lng: Joi.number()
  })
})

const user = {
  name: "Sultan",
  age: 33,
  address: {
    lat: 31,
    lng: 36
  }
}

const { error, value } = schema.validate(user)

console.log(error ? error : value);

