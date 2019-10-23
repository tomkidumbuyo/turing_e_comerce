const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/',(req, res ) => {
    models.department.findAll()
    .then(( departments ) => {
        res.json(departments);
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

router.get('/:department_id',(req, res) => {
    models.department.findAll({
        where: {department_id: req.params.department_id},
        limit: 1
    })
    .then(( departments ) => {
        if(departments.length){
            res.json(departments[0]);
        }else{
            res.status(500).json({message: "Error: No department found. "});
        }
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

module.exports = router;