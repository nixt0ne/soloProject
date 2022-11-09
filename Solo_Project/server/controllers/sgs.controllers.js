const sgsSelector= require('../models/sgs.model')

module.exports = {
    getSGS:(req,res)=>{
        sgsSelector.find().sort({"type":1})
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
        sgsSelector.create(req.body)
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
