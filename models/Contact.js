import { Schema, models, model } from 'mongoose'

const contactSchema = new Schema({
  fullname: {
    type: String,
    require: [true, 'Name is required'],
    trim: true,
    minLength:[2,'Name must be longer than 2 characters'],
    maxLength:[50, 'Name must be less than 50 characters']
  },
  email: {
    type: String,
    require: [true, 'Email is required'],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g],
  },
  message: {
    type: String,
    require: [true, 'Message is required'],
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

export default models?.Contact || model('Contact', contactSchema)