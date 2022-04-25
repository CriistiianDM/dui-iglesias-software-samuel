const { Router , application } = require('express');
const { petitions_get } = require('../controls/controls');

const router = Router();


router.get('/', petitions_get);



module.exports = router;