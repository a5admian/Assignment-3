let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Health = require('../models/health');
let healthController = require('../controller/health');
const health = require('../models/health');

/*routes for different views and operations*/
router.get('/',healthController.displayHealthList);

router.get('/add',healthController.displayAddPage);

router.post('/add',healthController.processAddPage);

router.get('/edit/:id',healthController.displayEditPage);

router.post('/edit/:id',healthController.processsEditPage);

router.get('/delete/:id',healthController.performDeleteOperation);

module.exports = router;