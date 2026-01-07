const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const User = require('../models/User')


exports.signup = async (req,res)=>{
    const {name , email , password} = req.body

    const userExists = await User.findOne({email})
    if (userExists){
        return res.status(400).json({message : "User already exist"})
    }

    const hashedPassword = await bcrypt.hash(password , 10)

    await User.create({
        name,
        email,
        password:hashedPassword
    })

    users.push(newUser)
    res.status(400).json({message:"User registered successfully"})
}

exports.login = async (req,res)=>{
    const {email , password} = req.body

    const user = User.findOne({email})
    if(!user){
        res.status(400).json({message:"invalid credential"})
    }

    const ismatch = await bcrypt.compare(password,user.password)
    if(!ismatch){
        return res.status(400).json({message:"invalid credential"})
    }

    const token = jwt.sign(
        {userId:user.id},
        "secretkey",
        {expiresIn:"1h"}
    )

    res.json({token})

}