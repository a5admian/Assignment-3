let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Health = require('../models/health');

/* displaying the health list*/
module.exports.displayHealthList = (req,res,next)=>{
    Health.find((err, healthlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
           res.render('health/list', {
            title:'Fitness Tracker',
            Healthlist: healthlist
           })
        }
    });
}

/* displaying the 'add' page*/
module.exports.displayAddPage = (req,res,next)=>{
    res.render('health/add',{title: 'Add Fitness Activities'})
}

/* process for adding new info into the health list*/
module.exports.processAddPage = (req,res,next)=>{
    let newInfo = Health ({
        "day":req.body.day,
        "exercise":req.body.exercise,
        "from":req.body.from,
        "to":req.body.to
    });
    Health.create(newInfo,(err,Health) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/fitness')
        }
    })
}

/* displaying the 'edit' page*/
module.exports.displayEditPage = (req,res,next) => {
    let id = req.params.id;
    Health.findById(id,(err,healthToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('health/edit',{title: 'Edit Fitness Activities', health:healthToEdit})
        }
    });
}

/* process for editing info from the health list*/
module.exports.processsEditPage = (req,res,next) => {
    let id = req.params.id;
    let updateHealth = Health({
        "_id":id,
        "day":req.body.day,
        "exercise":req.body.exercise,
        "from":req.body.from,
        "to":req.body.to
    });
    Health.updateOne({_id:id},updateHealth,(err)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/fitness')
        }
    });
}

/* process for delete operation*/
module.exports.performDeleteOperation = (req,res,next) => {
    let id = req.params.id;
    Health.remove({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/fitness')
        }
    });
}
