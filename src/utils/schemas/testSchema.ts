import joi from 'joi';
const re = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
const testSchema = joi.object({
  name: joi.string().required(),
  url: joi.string().regex(re).required(),
  category:joi.string().required(),
  discipline:joi.string().required(),
  teacher:joi.string().required()
})

export default testSchema