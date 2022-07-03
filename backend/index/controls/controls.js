//librerary
const pool = require('../bd');

const petitions_get = async (req, res) => {

    try {
        const answer = await pool.query('SELECT * FROM city');
        console.log('req.body',answer);
        res.json(answer.rows);
    } catch (error) {
        console.log(error, 'error');
    }

}

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : comsulta para vericar si el login es correcto
*/
const petitions_get_login = async (req, res) => {
        //try catch para capturar errores
        try {
            //variables para capturar los parametros
            const { doc , passwd } = req.params;
            //consulta
            const answer = await pool.query('SELECT doc FROM user_account WHERE doc = $1 AND passwd = $2 AND logical_erase = false', [doc, passwd]);
            console.log('req.body',answer);
            //retonar la respuesta
            res.json(answer.rows);
        } catch (error) {
            console.log(error, 'error');
        }
    
}



module.exports = {
    petitions_get,
    petitions_get_login
}





