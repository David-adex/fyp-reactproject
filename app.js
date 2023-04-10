const express = require('express')
const cors = require('cors')
const User =require('./config')
const bcrypt = require('bcrypt');
const saltRounds = 10; // number of rounds of hashing
const salt = bcrypt.genSaltSync(saltRounds);
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(cors())

app.get("/",cors(),(req, res)=>{

})

app.post('/', async (req, res) => {
    const {email,password}=req.body
    try {
      // Find user by email
      const user = await User.findOne({ email:email })
      // Check if password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      // Check if user exists
      if (user && isPasswordCorrect){
        res.json("exists")
      }
      else {
        res.json("notexist")
      }

    } catch (err) {
      res.json('notexist')
    }
  })

app.post('/signup', async (req, res) => {
    const {email,password}=req.body
    const hashedPassword = await bcrypt.hash(password, salt);
    const data={
        email: email,
        password: hashedPassword
    }
    try {
        const check = await User.findOne({ email:email });
        if (check){
            res.json("exists")
        }
        else{
            res.json("notexist")
            await User.insertMany([data])
        }
    
    } catch (err) {
        res.json('notexist')
    }
})

app.listen(8000, ()=>{
    console.log("port connected");
})
