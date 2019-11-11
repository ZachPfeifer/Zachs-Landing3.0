//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

//TODO: ADD YOUR CONNECTION STRING!!!
const connectionString = process.env.CONNECTION_STRING;

export default class DbContext {
  static async connect() {
    try {
      let status = await mongoose.connect(process.env.CONNECTION_STRING)
      console.log("CONNECTED TO DB")
      return status
    } catch (e) {
      console.error(e)
    }
  }
}