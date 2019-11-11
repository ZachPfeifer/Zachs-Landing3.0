import mongoose from "mongoose"

const Schema = mongoose.Schema



let _schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, },
  company: { type: String },
  message: { type: String, maxlength: 300 },
}, { timestamps: true })

// //CASCADE ON DELETE
// _schema.pre('findOneAndRemove', function (next) {
//   //lets find all the lists and remove them
//   Promise.all([

//   ])
//     .then(() => next())
//     .catch(err => next(err))
// })


export default class MessageService {
  get repository() {
    return mongoose.model('Message', _schema)
  }
}