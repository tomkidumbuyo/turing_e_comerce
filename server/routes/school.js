const express = require('express');
const router = express.Router();

router.post('/add',(req, res) => {
    res.json({message:"dfgdgdf"});
});

router.get('/:id',(req, res) => {

});

router.post('/delete/:id',(req, res) => {

});

router.post('/update/:id',(req, res) => {

});

module.exports = router;