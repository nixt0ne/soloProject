const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET= process.env.SECRET_KEY


module.exports = {
    registerUser: async (req,res) => {
        try{
            // const user = new User(req.body)
            console.log(req.body)
            const user = await User.create(req.body)
            //changed from lower case user to upper case User
            const userToken = jwt.sign({id:user._id, email:user.email}, SECRET)
            // const data = process.env.SECRET_KEY
            console.log("reg ookie")
            res.status(201).cookie('userToken', userToken, {httpOnly:true}).json({successMessage:'User logged in',user:user})
        }catch(error){
            res.status(400).json(error)

        }
    },

    loginUser: async (req,res) => {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({errors: "Invalid User/Password"})
        }
        try{
            const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
            console.log(isPasswordValid)
            if(!isPasswordValid){
                res.status(400).json({errors:"Invalid User/Password"})
            } 
            else{
                const userToken = jwt.sign({_id:user._id, email:user.email}, SECRET)
                console.log("logn ookie")
                res.status(201).cookie('userToken', userToken, {httpOnly:true,}).json({successMessage:'User logged in',user:user})
            }
        }
        catch(errors){
            res.status(400).json({errors:"Invalid email/password"})
        }

    },

    logOutUser: (req,res) => {
        console.log("logO")
        res.clearCookie('userToken')
        res.json({success:'User Logged Out'})
    },

    getLoggedInUser: (req,res) => {
     const {_id} = jwt.verify(req.cookies.userToken, SECRET)
     User.findOne({_id})
     .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.status(400).json(err);
        console.log(err)
    })
    },

    updateUser: async (req,res)=>{ 
        const {_id} = jwt.verify(req.cookies.userToken, SECRET)
        const user = await User.findOne({_id})
        console.log(req.body.password, user.password)
        if(!user){
            res.status(400).json({error: "Invalid finding user"})
        }
        const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
        console.log(isPasswordValid)
        if(!isPasswordValid){
            res.status(400).json({error:"Invalid password"})
        } else{
        User.updateOne({_id}, {username: req.body.username, email: req.body.email,profile: req.body.profile, backImg: req.body.backImg}, {runValidators:true,new:true})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })}
    },

    getAllUsers: (req,res) => {
        User.find()
        .then((result)=>{
           res.json(result)
       })
       .catch((err)=>{
           res.status(400).json(err);
           console.log(err)
       })
       },

       deleteUser: (req,res)=>{
        User.deleteOne({_id:req.params.id})
        .then((result)=>{
            console.log(result)
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },


    // superUser: async (req,res) => {
    //     try {
    //         const userNew = await User.create(req.body)
    //         const ...? = await 
    //         res.status(200).json()
    //     } catch(err){
    //         res.status(400).json(err)
    //     }
    // },

}