const mongoose =require('mongoose')
mongoose.connect("mongodb+srv://davidadekoya1329:fpLu9kBWYg5GMofN@cluster1.c8bqg4x.mongodb.net/fyp_database?retryWrites=true&w=majority")
.then(() => {console.log('Connected to MongoDB')})
.catch((error) => {console.log('Connection failed', error)})

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
})
  
const User = mongoose.model("User", userSchema)
  
module.exports= User
