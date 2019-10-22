const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    models.tax.findAll()
    .then((taxes) => {
        res.json(taxes);
    }).catch(err => {
        res.status(500).json({message: "error executing request. "+err});
    });;
});

router.get('/:tax_id',(req, res) => {
    models.tax.findAll({
        where:{tax_id: req.params.tax_id},
        limit:1
    })
    .then((taxes) => {
        if(taxes.length){
            res.json(taxes[0]);
        }else{
            res.status(500).json({message: "tax not found"});
        }
    })
    .catch(err => {
        res.status(500).json({message: "erro executing request"+err});
    });
});

module.exports = router;