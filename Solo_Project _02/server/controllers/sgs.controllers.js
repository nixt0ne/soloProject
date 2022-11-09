const sgsSelector= require('../models/sgs.model')
const jwt = require('jsonwebtoken')
const SECRET= process.env.SECRET_KEY

module.exports = {
    getSGS:(req,res)=>{
        const {_id} = jwt.verify(req.cookies.userToken, SECRET)
        sgsSelector.find({createdBy:_id})
        .populate("createdBy", "-password")
        .sort({"updatedAt":-1})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },

    getSGSUsers:(req,res)=>{
        const {_id} = jwt.verify(req.cookies.userToken, SECRET)
        sgsSelector.find({})
        .populate("createdBy", "-password")
        .sort({"updatedAt":-1})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },

    getOneSGS: (req,res)=>{
        sgsSelector.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },

    addSGS:(req,res)=>{
        const sgs = new sgsSelector(req.body)
        const {_id} = jwt.verify(req.cookies.userToken, SECRET)
        sgs.createdBy = _id
        sgs.save()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },

    updateSGS: (req,res)=>{
        sgsSelector.updateOne({_id:req.params.id}, req.body, {runValidators:true,new:true})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    },

    deleteSGS: (req,res)=>{
        sgsSelector.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json(err);
            console.log(err)
        })
    }
}
