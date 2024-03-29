const { Router , application } = require('express');
const { petitions_get , petitions_get_login , petitions_get_cargo_vigigentes,
        petitions_put_periodo , petitions_get_user , petitions_get_all_user_active,
        petitions_get_cargoFaltantesUser} = require('../controls/controls');

const router = Router();


//router.get('/', petitions_get);
//router.get('/', petitions_get);
//la ruta se llamara zlgz y tendra 2 parametros hara referencia a la consulta del login
router.get('/zlgz/:doc/:passwd', petitions_get_login);
//la ruta se llamara zcvg y tendra un parametro hara referencia a los cargos vigentes
router.get('/zcvg/:doc', petitions_get_cargo_vigigentes);
//la ruta se llamara zallcf llama a todos los cargos faltantes de un usuario segun su documento
router.get('/zallcf/:doc',petitions_get_cargoFaltantesUser);
//la ruta se llamara znlp y tendra un parametro hara referencia al documento del usuario
router.get('/znlp/:doc', petitions_get_user);
//la ruta se llamara zaup 
router.get('/zaup', petitions_get_all_user_active);
//la ruta se llamara zuppt y tendra un parametro que sera el id del periodo para actualizar el periodo
router.put('/zuppt/:id', petitions_put_periodo);




module.exports = router;