const mongoose = require('mongoose')

const SgsSchema = new mongoose.Schema({
    // name:{
    //     type:String,
    //     required: [true, "Name is required!"],
    //     minLength:[3, "Name must be at least 3 characters"],
    // },

    style:{
        type:String,
        required: [true, "Style is required!"],
        enum:['All-Mountain','FreeStyle', 'Back-Country' ]
    },

    height:{
        type:String,
        required: [true, "Height is required!"],
        enum:[4,5,6,]
    },
    // footSize:{
    //     type:String,
    //     required: [true, "Description is required!"],


    boardStyle:{
        type:String,
        
    },

    bindingStyle:{
        type:String,
    },

    bootStyle:{
        type:String,
    },

    boardHeight:{
        type:String,
    },

    createdBy:{
        // type:ObjectId
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
        

    },

}, 

{timestamps:true} )


const sgsSelector = mongoose.model('sgsSelector', SgsSchema)

module.exports = sgsSelector