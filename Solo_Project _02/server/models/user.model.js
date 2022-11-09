const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "User Name is required!"],
        minLength:[3, "Name must be at least 3 characters"],
    },
    email:{
        type:String,
        required: [true, "Email is required!"],
        minLength:[3, "Name must be at least 3 characters"],
    },
    password:{
        type:String,
        required: [true, "Password is required!"],
        minLength:[3, "Name must be at least 3 characters"],
    },

    profile:{
        type:String,
    },

    backImg:{
        type:String,
    },

    // confirmedPassword:{
    //     type:String,
    //     required: [true, "Confirmed Password is required!"],
    //     minLength:[3, "Name must be at least 3 characters"],
    // },


},{timestamps:true})

UserSchema.virtual('confirmPassword')
.get(() => this._confirmPassword)
.set(value=>this._confirmPassword = value)

UserSchema.pre('validate',function(next){
    console.log(this.password)
    console.log(this.confirmPassword)
if(this.password !== this.confirmPassword){
    this.invalidate('confirmPassword','Password must match confirm password')
}
next()
})

UserSchema.pre('save',async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        console.log('Hashed Password:', hashedPassword)
        this.password = hashedPassword
        next()
    }
    catch{ 
        console.log('Error in Save',error)
    }
})


module.exports = mongoose.model('User',UserSchema)