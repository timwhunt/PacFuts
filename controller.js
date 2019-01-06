//You must require your model file to use queries
const Pet = require("./models");

module.exports = {
    all : function(req,res){
        Pet.find({}).sort('type')
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    create : function(req,res){
        Pet.create(req.body)
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    delete: function(req,res) {
        Pet.findByIdAndRemove(req.params.id)
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    get: function(req,res) {
        Pet.findById(req.params.id)
            .then((data)=>res.json({status: "success", data: data}))
            .catch((err)=>res.json({status: "error", error: err}));
    },
    update: function(req,res) {
        Pet.findByIdAndUpdate(req.body._id, req.body, { runValidators: true, context: 'query'})
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    }
};