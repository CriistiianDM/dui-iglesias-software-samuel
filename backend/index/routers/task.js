const { Router , application } = require('express');
const { petitions_get , petitions_get_login } = require('../controls/controls');

const router = Router();


router.get('/', petitions_get);
//la ruta se llamara zlgz y tendra 2 parametros hara referencia a la consulta del login
router.get('/zlgz/:doc/:passwd', petitions_get_login);
//la ruta se llamara zcvg y tendra un parametro hara referencia a los cargos vigentes
router.get('/zcvg/:doc', petitions_get_login);



module.exports = router;